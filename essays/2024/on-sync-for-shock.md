---
layout: essay.html.njk
title: "Thinking on Synchronizing Files with Shock"
# tags: essay
---

As I work on [Shock][], I've run into an interesting problem. In order for it to actualize its value for me, I need it
to be able to do the following:

1. build a list of files locally that are to be expected (a "manifest")
1. obtain a similar list from another location (a "remote manifest")
1. determine what files in the manifest are different from the remote manifest (a "delta manifest")
1. send those changes to the storage location that holds the remote manifest
1. update the remote manifest with changes after obtaining those changes (the "delta sync")

An existing project that came to mind for this was [rsync][]; it's actually how I have this site updated from my laptop
to my little DigitalOcean droplet. Dropbox has released [an open source library][1] that I can see myself integrating
into Shock but this library only serves to give an partial answer for #3 and #4 of that list. Shock has a generic means
of [finding files in storage][2] that match a particular storage format[^1] but this has to be done on-demand and is very
IO-heavy; that's something I'll figure out how to build backpressure around. That method call gives me part of #1. Here
I am, with parts of a solution to a problem of my own making, heh.

## The Landscape
It's always a good idea before building something is to look at what already exists. That had me turn to [Bittorent's torrent
file format][3]. I was less interested in the special encoding it does to make the file a bit smaller and more curious
about how it organized information about the files stored. The biggest draw for me is on its "crowd-source the bandwidth 
needed for the file transfer and reduce the time needed to download large files", according to Wikipedia. The structure
of the file isn't too complicated. What got me curious was the use of [Merkle trees][4], a data structure (specifically,
a tree) to split up files. This is how, when you're using a [torrent client][5], you're able to download not only
separate files at different speeds but _verify_ specific chunks of a file concurrently.

Frankly, this is enough for what I need with Shock; the only parts of complication would be doing the work of constantly 
rebuilding this structure, effectively the "manifest" for the local site. The challenge now came to figuring out how to
structure a site in a manifest such that it's portable. However, I didn't want to write this from scratch. My biggest
fear in writing something from scratch is always in making sure it works in cases I hadn't considered. This was also the
part of the process where I became _slightly afraid_ of lock-in. You could call it decision paralysis. Here's how I
decided to go about it:

### Doing it myself
At first, I considered defining the following as a schema:
```json5
{
    "version": 1,
    "meta": {
        "generated": "2024-07-02 13:00 EST", // Would be a UNIX timestamp
        "previous": "the-manifest-id-prior", // or omitted, if this is the first one known to be generated
        "current": "the-manifest-hash",      // generated from an object of (destination + html + theme + version)
        "size": 1024                         // the expected size of a hash-object's `parts.data`
    },
    "destination": {
        "root": "https://www.jacky.wtf",
        "name": "Jacky Alciné"
    },
    "html": {
        "/index.html": {} // This would be the hash-object
    },
    "theme": {
        "id": "theme-id-thats-is-meant-to-be",
        "files": {
            "page.html.jinja": {} // This would be the hash-object
        }
    }
}

// The hash-object
{
    "parts": [
        { 
            data: [0, 1, 2, 3], // a bytestream of the stored data
            "sum": "checksum", // the checksum of data
        }
    ],
    "sum": "checksum" // meta-hash for the the file.
}
```
From an eyeballing, this _felt_ fine. But as I began to imagine what it'd take to implement this, I felt slightly
pressed on having to add checks on the parts if they grew inconsistent, needing to define a way to check for integrity,
having to serialize it and the like. There's also the immediate discomfort of the reinventing of the wheel here.
Granted, there's a library that gives [the plumbing for parsing torrents][6] which tempted me to consider this. I'm
holding this in the back of my mind as it's something I can still see myself using.

### Veilid
A project from the [Cult of the Dead Cow][cdc], [Veilid][7] provides some of the things I want,  removing both the need for 
relying on `rsync` on a transfer protocol level and not needing to implement something like  the Bittorrent approach 
to per-file batching. If you're not familiar with things like Tor or [DHT][8], I'd recommend checking [the overview][9]
they've worked on. I have to admit that attempting to integrate Veilid into a project required more knowledge 
than I expected and I'm hoping to write more about doing so. I wrote [a separate post about making a collaborative editor][10]
in an attempt to understand this flow.

Going down this route, I'd also be able to get the ability to bring near-real time changes as Veilid allows for
subscribing to peers (and in turn, a specific resource from a peer). This immediately opens the door to collaborative
editing, live subscriptions and the like as demonstrated in that project.

### Librecast
A project backed by an initiative for building [the next generation of the Internet][11], [Librecast][12] aims to lean
into the multicast communication defined by [RFC 5110][13]. [Brett Sheffield][14] spearheads this project, written in C,
which gave me a bit of an issue when considering it for Shock, as I wanted to keep using "safe Rust" as much as
possible. Having to talk directly into a C library, from my understanding, would require dipping into unsafe code.
It's possible to build a safe project that calls C, [rusqlite][15] is a grat example of this.

To try this out in "hard mode", I wrote something to [try out librecast on a mobile device][16].

## The Choice

[shock]: /projects/shock/
[rsync]: https://en.wikipedia.org/wiki/Rsync
[cdc]: https://en.wikipedia.org/wiki/Cult_of_the_Dead_Cow
[1]: https://lib.rs/crates/fast_rsync
[2]: https://git.sr.ht/~jacky/shock/tree/2011b6cc3cb30b5699ae1b1dde4d604d89103f65/item/impl/src/lib.rs#L1212-1271
[3]: https://en.wikipedia.org/wiki/Torrent_file#References
[4]: https://en.wikipedia.org/wiki/Merkle_tree
[5]: https://transmissionbt.com/
[6]: https://github.com/toby/serde-bencode/blob/f36b82c6d528a4f84e7627c6fb06b7e3f4bdb1c4/examples/parse_torrent.rs
[7]: https://veilid.com/
[8]: https://en.wikipedia.org/wiki/Distributed_hash_table
[9]: https://veilid.com/docs/overview/
[10]: /essays/2024/making-a-peerable-browser/
[11]: https://www.ngi.eu/
[12]: https://librecast.net/about.html
[13]: https://datatracker.ietf.org/doc/html/rfc5110
[14]: https://blog.brettsheffield.com/
[15]: https://crates.io/crates/rusqlite
[16]: /essays/2024/librecast-nativescript/
[^1]: I've abstracted this because I plan on having support for things beyond HTML.
[^2]: This is going to be part of another project but Shock's going to be bonded to client libraries for Kotlin and
    Swift so I can use it a bit more seamlessly from [NativeScript](https://nativescript.org/). I need to do more
    research however to see if I can use [Neon](https://neon-rs.dev/) instead to call Rust from JavaScript.

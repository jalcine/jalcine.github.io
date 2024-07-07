---
layout: essay.html.njk
title: "Making a Peerable Browser using Veilid"
# tags: essay
---

[Veilid][] is a project that I've eyed for some time. I decided to make something slightly related to [Shock][] to
understand how to use Veilid and how I could integrate to Shock as a project. The source code for this project
lives at <https://git.sr.ht/~jacky/veilid-editor>. I aimed to keep each commit to the `main` branch a contained
reference to the changes of each heading below.

## Setting Up
I leaned on using [Tauri][] to provide a lean desktop experience while retaining the flexibility of the Web browser via
its engine. [Svelte][]'s driving the interactivity of the frontend. I leaned on Prosemirror's example setup to save some
time in crafting the interface. All of that code is here [for that step][1].

<figure>
    <img src="/images/peerable-editor/setting-up.png" alt=""/>
    <figcaption>A barebones editor that allows for some typing into it.</figcaption>
</figure>

## Sprinkling Veilid
The more difficult thing about using Veilid is that you'd have to hunt a little bit to figure out how to set it up. I
peeked on GitHub to find some examples of people setting this up, specificially with Tauri, and found a project that
has a [manual setup block][2]. I noticed that Veilid wants to write directly to the filesystem so as part of the setup,
I've tweaked it to write into the directory for this application's storage as to not clutter the filesystem. I did
notice some issues when trying to bootstrap with `bootstrap.veilid.net` so I decided to spin up a node on my own server.
Veilid makes this pretty easy for [those comfortable with command-line package management][3]. I imagine someone out there 
is looking to make something similar to [IPFS Desktop][4][^1].

Now that it can connect, what's needed is a way to "attach" to a document. We'll call things we can edit here documents.

[veilid]: https://veilid.com
[shock]: /projects/shock/
[tauri]: https://tauri.app/
[svelte]: https://svelte.dev/
[1]: https://git.sr.ht/~jacky/veilid-editor/tree/467b065705e0549799acaa565912d4a8990d9c36/item/src/routes/Editor.svelte#L39-48
[2]: https://github.com/johnny-human/velium/blob/46c9744704731991e2ecf30fcd3bdfcf6d33e18f/src-tauri/src/lib.rs#L116-L206
[3]: https://gitlab.com/veilid/veilid/-/blob/main/INSTALL.md
[4]: https://docs.ipfs.tech/install/ipfs-desktop/
[^1]: Although from what I understand, you can't peer into files the same way you can with IPFS since everything's encrypted
    and you have explicit control over what kind of information you'd like to save. That's great because then you can
    opt out of storing any kind of metadata used in the world of cryptocurrency and blockchain-adjacent folks that
    clamor to IPFS. Consent is a necessary computing of computing and a lot of projects just seem to tack it on
    afterwards.

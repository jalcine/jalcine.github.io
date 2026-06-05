---
layout: essay.html.njk
title: 'Making Livtet: A Project for Book Lovers'
tags: essay
date: 2024-08-12T17:00:00.000Z
atUri: "at://did:plc:e2ctbutx6kya6si4if5ngjmm/site.standard.document/3mnivf7rdib2g"
---
I wrote a bit about my goal with [a project for books][1] and the things that led to its inspiration. Now I'd like to
share it with you all. In short, it's a project that's meant to replace my use of [Calibre][2], a venerable solution for
folks wanting to work with their book collections. If you haven't, I suggest reading a bit [about its history][3];
there's a reason it's the go-to solution for a lot of people. However, my want and use for Calibre extends beyond its
current capacity[^1]. I've created [a page for it][4] with its feature list. So far, I've managed to make something that
can pull in the books I have in my Calibre collection. That led me to [develop a small create][5] around doing so[^2].
What I have built so far is what I'm hoping will encourage folks to noodle around the code to help flesh things out.

# What there's now
Here's what it looks like today; with some changes I've made:
<figure>
    <video poster="/images/weeknotes/2024-08-15-livtet.png" controls loop muted>
        <source src="/videos/weeknote-08-15-2024-livtet.webm" />
    </video>
</figure>

The most notable changes include the use of [`cacache`][6] to store information from Calibre; it doesn't seem to allow
for fetching individual information about books so this avoids that by storing the main index to disk[^4]. I've also
managed to get a consistent enough interface to view books in a library from a search and view an individual book as
well.

# What I'm working on
I'm eager to continuing working on this; some things I'm actively working on are:

* Introducing a plugin-system: I want to have support for pulling in libraries from different locations. A
  personal goal is to get my audiobooks from [Libro.fm][7] to show up here! You can throw some ideas for it at
  <https://todo.sr.ht/~jacky/livtet/2>.
* Keeping things within SQLite and the file system: I'm banking hard on SQLite as the "means of storage" for things like
  search as it's pretty decent at that. I have an experimental module of code that's using [tantivy][8] that needs some
  more love.
* Expanding the visual experience: I am not a visual designer 😆 but I have opinions on how I want things like books to
  appear.

I'm open to feedback about this and would like to hear your thoughts! Feel free to [e-mail them][tracker]!

# What I'd like to see next
I'm _really_ interested, after working on the above to start exploring the following:

* Synchronization: At first, I'd want to see if I can have an instance of Livtet on desktop sync with a headless
  instance _somewhere_. I'm thinking about doing this to help encourage folks to make their own Web interfaces
* A reference Web interface: As I tend to mention books a lot in my [weeknotes](/weeknotes), having a way to pull in the
  exact parts I mention in a book and the notes around will be super helpful. That's influencing how I'm thinking about
  its Web interface.

# Keeping it Going
Now, it's pretty early for me to even consider this but I figure now's better than never. I've launched this project as
one to be funded via [Comradery][9] _primarily_. I'll be posting more in the moment updates about how Livtet is growing
on there and I'd love to help expand the use of cooperatively owned software to help software I'd eventually like to see
mature to be the such as well! If you want to help support the development, please help out by either [e-mailing
ideas][tracker] or going to the funding page at <https://comradery.co/livtet>. You can also support me on [Ko-Fi][kofi], if that's easier. **Thank you so much**!

I know that it might seem to be early for me to set up funding for this project. I'm hoping that by doing so,
it both validates this project as being something interesting enough for people to fund and provides
me with a public display of engineering craftsmanship, something that's hard to do since most of the
places I worked at didn't have a lot of opportunity to do the such.

<script src="https://todon.eu/embed.js" async="async"></script>

[tracker]: mailto:~jacky/livtet@todo.sr.ht
[kofi]: https://ko-fi.com/jackyalcine
[1]: /essays/2024/my-hub
[2]: https://calibre-ebook.com/
[3]: https://calibre-ebook.com/about#history
[4]: /projects/livtet/
[5]: https://git.sr.ht/~jacky/livtet/tree/next/item/calibre-content-server-api
[6]: https://lib.rs/cacache
[7]: https://libro.fm/
[8]: https://github.com/quickwit-oss/tantivy
[9]: https://comradery.co/
[^1]: Truthfully, it was either I work on making a super advanced plugin for my needs into the Calibre ecosystem _or_ I
    work on something to replace it altogether. I host my own website and use a vanity e-mail address; I'm
    working on my own solution!
[^2]: I _might_ publish this one day because Calibre's API is interesting (using things like digest authentication, not really
    following a convention for paths, etc). Ideally, I'd want to make it a bit more like other content pagination APIs;
    in the sense that it doesn't provide async support, no caching, etc - _you_ can figure that out! Hazel's
    described this a [lot more explicitly](https://hachyderm.io/@hazelweakly/112536923490036820).
[^3]: You can view it on Mastodon at <https://todon.eu/@jalcine/112819470763301355>.
[^4]:  There's a small issue with this that I'm okay with (for now). While this decreases the response time, the cache
    gets thrashed when a new book is added (as well as the search index being updated). Since this is all local, this is
    fine but will love to hear reports about this on other peoples' systems.






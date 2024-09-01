---
layout: essay.html.njk
title: "Metadata Providers and Synchronization in Livtet"
og:
    image: /images/politics-soul.jpg
# tags: essay
date: 2024-08-27 11:00:00 -05:00
description: |
    With some refactoring, books can have library metadata associated to them.
---
I had a bit of a "big brain" moment and decided to simplify how libraries were represented in
Livtet. Instead of making _anything_ be a library, I've adopted the Calibre-centric approach to
keeping everything to local storage[^1]. The choice behind this was to simplify how search worked.
However, I didn't want to throw away the logic I wrote for loading information from Bookyrm or
OpenLibrary so I decided to repurpose the existing logic to help find books.

This led to the creation of the [`livtet::provider::Provider`][1] interface. For now, this is only
used to drive extensions, but it's working well enough that I can now import books from my Bookwyrm
and OpenLibrary to my local collection. This, by itself, isn't _terribly_ useful, but the act of
getting information from these places brings with it the metadata of these places. This means that,
on a pull from Bookwyrm, I get identifier information stored with a book. This kind of work is meant
to prime the logic behind synchronization.

[1]: https://git.sr.ht/~jacky/livtet/tree/ec9efca53c18ab7acbe2a57c455ca3b69087a8b7/item/livtet-impl/src/provider.rs#L173-189
[^1]: I do still plan on making options for different storage locations. My personal goal is to
    allow it to read information from archives (like ones backed in the Zip format) or from a SQLite
    database. This is part of the more _grand vision_ I have.

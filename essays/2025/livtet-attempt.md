---
layout: essay.html.njk
title: "Untitled Post About Livtet"
draft: true
---

I was nudged recently about the status of Livtet. I've been a bit more focused
on a rebuilding of this website and some investigation in something I'll write
about more later but the itch I wanted to scratch with Livtet has never left.
In fact, in this year, I've found many times where I would look at the code and
adjust it to work just a _bit_ differently. That's led me to want to reset the
tree and start anew. However, the changes I have in mind require a bit more
infrastructure than I expected. I was examining the landscape for book
management software and I found it a bit boring &mdash; constantly returning
back to Calibre. I wanted something that I could use to manage the _physical
books_ I have as well as my _digital collection_ &mdash; regardless of where
they were sorted - I'm good for accidentally getting two of the same book[^1]
in the same format. I also find myself wanting to keep books I happen across in
the library on a little list so I can be sure to check them out later (because
I already have quite a bit on my "to be read" list).

This led me back to a moment of thinking at my desk &mdash; wondering how not
to over engineer (for fun, of course) this but also opt to make something I can
share with folks and make it easy for them to contribute back to. I'm a Web
developer [by trade](/work), so I'm inclined to do this with the technologies
that I know; but I found myself itching to pick up something like
[Relm](https://relm4.org/) or even [Dioxus](https://relm4.org/) to drive the
interface. Focusing on the interface, however, is what led to my eventual
disinterest in wanting to work on this &mdash; I felt like I was driving
development _via_ the interface and not by what I needed or wanted it to do.

## Introducing Livtet (Again)

I took some time to write out my wants &mdash; for real and they're a bit of
the same. But this time, I'm aiming to push this from the places that I've just
mentioned I wanted the most support from. That's the following spots:

- my phone,
- my Kobo eReader (using [KOReader](https://koreader.rocks/); of course)
- my website

I want to be able to refer to books I'm reading and the parts of it I like[^2].
I also want to be sure that when I go to spend my monthly budget on books
(which _everyone_ has, of course); that I don't already have it (again, a very
common problem). Most importantly, I do like tracking excerpts of things I've
read and being able to search them and my notes. I've heard good things about
[Zotero](https://www.zotero.org/) but it feels like a bit overkill for what I
need; at least for reading. This leads me to having to need at _least_ two
applications; one to run on my phone and another that runs on my computer. For
this, I reached to Tauri yet again for the desktop application and NativeScript
for the mobile.

[^1]: I've done it four times &mdash; not ashamed but slightly concerned.

[^2]: Crushing hard on how <https://aworkinglibrary.com/> is set up!

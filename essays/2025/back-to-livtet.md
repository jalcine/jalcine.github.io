---
layout: essay.html.njk
title: "Focusing on Livtet Yet Again"
date: 2025-03-14T09:15:00.000Z
tags: essay
description: >
  Finding myself in need of a way to manage my book collection and my reference material, I've
  decided to revisit my ambitions with Livtet.
---

In order to pull myself away from the more time consuming parts of the
Internet, I've decided to return my attention to [Livtet][]. For those who
don't know what it is, it's a local-first book management application that
borne out of my need to organize my home collection. This time, I decided to
get less galaxy-brained about supporting a bunch of stuff that took more time
for me to implement and get to the guts of what I _really_ needed for myself: a
way to manage and annotate books that I have in my possession[^1]. I wrote
about the initial ambitions with it [last year][1] and got too focused on the
infrastructure of something that didn't live yet. Anyway, to progress.

## Resetting Objectives

One thing that immediately plagued me was the interface. I fell back into my common "dev as a
startup" stance, which also involved [pulling out a book][2] to skim chapters on design. With some
refreshed guidance and a target, I had a better sense of what to run along with. The design aspect
of a home library system isn't too novel (and frankly homogeneous), which made me a bit comfortable
to keep things more simpler than I expected. I spent more time reworking the
page for showing the book itself to allow myself to work backwards from what I
_want_ this thing to do for me:

<figure>
    <img src="/images/livtet-book-view.png"
        alt="A screenshot of the mostly mocked view of a book, Lurking, being presented in Livtet" />
</figure>

It's still a work in progress; I'm wrestling on how I want to present the audit
log of changes below. I still have a strong want to make this part of a set of
applications:

- one that runs on my laptop or PC that I can use for longer sessions of cataloguing and general backups,
- one on my phone that I can use for updating this information when I'm on the go, not on my laptop or the like
- via an extension for [KOReader][] so I can get my notes, progress and the like all backed up and easy to search elsewhere

For now, I'm focusing on getting the desktop application to a place where I can
come to it weekly and have it do what I expect. I'm eager to write more about
it and open to ideas on how to present information. There _is_ a goal to make a
Web server that one could self-host to serve some bits of information from the
database; something like Calibre-Web but more ... sociably inclined.

[livtet]: /projects/livtet/
[koreader]: https://koreader.rocks/
[1]: /essays/2024/making-livtet/
[2]: https://www.hello-startup.net/

[^1]:
    It does include books I borrow from friends or the library &mdash; that tends to be a reliable
    "loan to own" path for me. I've bought books I loved after reading them at the library or if a
    friend had loaned it to me for a period of time.

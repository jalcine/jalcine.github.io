---
layout: essay.html.njk
title: "What's Supposed to be Different about Livtet?"
date: 2025-04-25T09:15:00.000Z
tags: essay
description: >
  It's been about half a year since I've "started" working on Livtet and I
  couldn't tell you what I'm doing with it.
---

I started working on [Livtet][] out of the annoyance of using Calibre. Sure,
it's a venerable tool for managing one's local eBook collection but it also
does _so much more_. The _presence_ of such "_more_" has confused me to a point
where I, like the tinkerer I am, would install so many plug-ins and have
overwhelmed my small installation. Now, having done my operating system
reinstall[^1], I find myself questioning if I want _that_ application in
particular. It's hard! The things of value I find from Calibre are:

- [KOReader sync server][1]: I use [KOReader][2] as the "reading interface" on
  my eReader. It handles the work of managing all of my reading positions,
  bookmarks, highlights and includes dictionary and Wikipedia lookups. The only
  thing this _can't_ do is check out books from places like Hoopla or Overdrive
  but that's a limitation of the client itself: Calibre _can_ do that.
- Cataloguing: The fact that I can add a DRM-free book, immediately get more
  information from corpora around the Web, associate it to the social reading
  software I'm using and keep that in sync as I read is a boon.

Though the list is short, these features feel indispensable to me &mdash;
despite not even having Calibre installed on my machine at the moment. The
[initial blog post I wrote about Livtet][3] was effectively a GUI over the
Calibre API; something that's no longer useful for me.

## A Local Library

What I _personally_ want is a tool that satisfies the feature list above. This
is what prevents me from doing those little excerpt posts I used to do on my
Fediverse account. I'm not going to sit and retype what I've easily highlight
when it's captured with precision already! Implementing the API needed to
become a KOReader sync server isn't terribly difficult &mdash; in fact, I could
inject the code into Livtet itself as [a sidecar application][4]. But before I
get to that point, the act of managing one's library needs to be made more
simpler, at least for this tool.

[livtet]: https://git.sr.ht/~jacky/livtet
[1]: https://github.com/koreader/koreader-sync-server
[2]: https://koreader.rocks/
[3]: /essays/2024/making-livtet/
[4]: https://tauri.app/develop/sidecar/

[^1]:
    I do this like twice a year, mainly to test my backups and remove the
    cruft of applications I reflexively download onto my computer. It's also a
    great way to nuke your Downloads folder of the things you _won't_ use again but
    keep around anyway.

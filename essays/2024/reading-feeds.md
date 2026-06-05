---
title: "I Decided to Invest a Bit More in RSS"
layout: essay.html.njk
tags: essay
date: 2024-08-30T14:45:00-05:00
masthead:
    src: /images/invest-rss.jpg
    title: >
       <a href="https://unsplash.com/photos/a-small-monkey-sitting-on-top-of-a-table-8am9bnRESXI">A sugar loaf money, in Brazil by Macros Prado</a>
description: >
    After some want to pull away from the rivers that make up my timelines across so many social
    networking sites
og:
    image: /images/invest-rss.jpg
atUri: "at://did:plc:e2ctbutx6kya6si4if5ngjmm/site.standard.document/3mnivf7ezwj2g"
---
I'm not denying it &mdash; I'm online _a lot_. If I'm not by my laptop (or PC), my phone isn't
terribly far away. I like keeping a tab as to the going-ons of the Internet[^1]. However, I'm
routinely not a fan of how a feed, algorithmic or not, can keep you arrested in place. The
_knowledge_ of something else coming down the pipeline has me eager to see what's next. This is
where RSS (or Atom, JSON Feed &mdash; whatever format you want to use) comes into play.

## FreshRSS
I was hunting for a RSS reader that worked with [Newsflash][1]; my preferred reader on my computer.
That's especially because I can turn off WiFi and read offline &mdash; one of the underrated
features of computers these days. FreshRSS came to mind as an option and I picked it because it uses
SQLite; something that makes backups incredibly easy and has decent support for extensions (none of
which I had a pressing need for).

<figure>
    <img src="/images/freshrss.png" alt="A screenshot of FreshRSS in a Web browser" />
    <figcaption>
        Ignoring my bookmarks, the interface for FreshRSS feels like it's been working for a
        long time. That makes me feel safe!
    </figcaption>
</figure>

Adding the bookmarklet made the act of adding feeds quite simple. I did have some issues attempting
to add feeds from WordPress sites like [In These Times][2]; something I'll have to look into. The
error from the logs looks like this:

```
[Fri Aug 30 14:25:23.078170 2024] [php:notice] [pid 48:tid 48] [client 1.2.3.4:0] PHP Notice:
    https://inthesetimes.com/rss is invalid XML, likely due to invalid characters. XML error:
    Unknown at line 1247, column 1 in /var/www/FreshRSS/lib/SimplePie/SimplePie.php on line 1640,
    referer: https://inthesetimes.com/
```

I _could_ keep looking into this but I didn't care enough at the moment to do so. So far, though,
using this with Newsflash and for my phone, [Readrops][3]. I don't _want_ to read a lot on my phone;
I have my eReader for reading long-form content, perhaps someone will produce that[^2].

<figure>
    <img src="/images/readrops.png" alt="A screenshot of Readrops on my phone" />
    <figcaption>
        No real clutter, though the way that the time is shown could be improved, no?
    </figcaption>
</figure>


I'm eager to report back on this experience but so far, I've been loving it. An underlying ambition
is to have something akin to a [social reader][6]. The _logic_ for building one is quite clear, however, the
interface and experience is something I'd need to explore, and as such, I'm throwing myself into
this to develop that. One thing I managed to quickly fix is how my personal site advertises feeds.
Now you should be able to just drop any URL from my site and find all of the feeds I provide.

To RSS, ATOM and all its friends!

[1]: https://gitlab.com/news-flash/news_flash_gtk
[2]: https://inthesetimes.com/
[3]: https://github.com/readrops/Readrops
[4]: https://koreader.rocks/
[5]: https://github.com/koreader/koreader/issues/9937
[6]: https://indieweb.org/reader
[^1]: Even after rejoining Twitter/X last year; although that place has been a net negative. The
    anchor I have is something I need to write about at length.
[^2]: I use [KOReader][4] for reading things on my Kobo Clara. However, it _does_ look like folks
    are interested in getting a [GReader-compatible experience working for KOReader][5].

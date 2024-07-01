---
layout: essay.html.njk
title: "Hard Reset"
tags: essay
date: 2024-06-09
---

If you’re reading this directly from my website, you’ll notice that it’s different. After a long of back and forth, I
dedicated to wipe my virtual server from DigitalOcean. It was costing more than I care to admit and reflected my
frustration with self-hosting. Before anything can be said of self-hosting, I knew the risks and did it anyway. The
allure of control fought over convenience, a sensation all too familiar especially in the West. I didn’t know better
then but I do know. The specifications of the previous server, <kbd>oa</kbd>, fit the following</p>

* 4 vCPUs
* 8 GB RAM
* 160GB SSD
* 150GB attached object storage
* Ubuntu _18.04_ (upgraded to 20.04)

This runs me about $70 a month. **$70**. This was one of the most annoying bills I had for something I created. I ran
Nextcloud, Wallabag, ZNC and a few dozen applications on Dokku. I don’t believe the application selection led to this -
in fact, I’m confident it didn’t because I managed to run all of this on more restrictive constraints on my laptop under
a VM. It was me being sloppy about how I set this up. With me currently looking for work, cutting costs is important to
me and convinced me to finally get rid of the VPS. I spun up a new, small one in its place (which is serving what you’re
reading or fetched this text from). I’ll try to document the progress of my reforming of this server - especially since
I plan to keep it around a lot longer. The new specifications are a lot lower:

* 1 vCPU
* 1 GB memory
* 25 GB disk
* Debian 12

This is meant to force me to be selective about what I put on there and to aggressively consider if I need to expand its
resources, consider making a new VPC with higher compute or run it from home and link it over a tunnel (spin my own
rust). There’s a dedicated page I’ll try to keep up to date about how much this costs and what things I’m running, to
keep a bit of transparency about this whole self-hosted journey on a budget.

## Why not Fly/Heroku/GitHub Pages?
I’m using a VPS to host a static site. At the moment, this serves my needs completely. 
For $6/month, I can serve my own static files, add in any custom code and not worry about 
the underlying platform disappearing under me with all of the customizations I've made 
for it (like edge case work for Netifly, Fastly, etc). This also allows me to prepay the server
and not worry about a looming hefty charge.

My annoyance is that despite the fanfare of making sites, we only have options like corporations like [Glitch][] to help
keep the Web open. I'd much rather this be in the hands of Glitch, however, than say, [Cloudflare][l1]. I really do want
more things like [Publii][] to let people use the power of Web publishing locally and then pick their place to serve.
Vendor lock in is never a reasonable thing to endorse and with encroaching gardens, it's the go-to method of tech
corporations driven by shareholder interest to lock in the [value of the Web][l2].

## What Next?
I'm backfilling a lot of my notes from books I've read and I've worked them into a database that I'll use to populate a
portion of the site. That means it'll only update whenever I'm both by my computer _and_ synchronized my reading
statuses (be it for physical or digital works). I'll also be fleshing out pages for the modern indie blogger like one's
<code>/now</code> page, colophon and what I use.

I'll also be following up this post with this audio compliment and notes on what [Shock][l3] will look like going forward.

&sect;

Until next time.

[glitch]: https://glitch.com/
[publii]: https://getpublii.com/
[l1]: https://www.propublica.org/article/how-cloudflare-helps-serve-up-hate-on-the-web
[l2]: https://bookshop.org/books/chokepoint-capitalism-how-big-tech-and-big-content-captured-creative-labor-markets-and-how-we-ll-win-them-back/9780807007068
[l3]: https://indieweb.org/Shock

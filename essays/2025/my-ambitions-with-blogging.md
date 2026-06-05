---
layout: essay.html.njk
title: "Why and how do I blog?"
tags: essay
date: 2025-03-01T08:30:00-05:00
atUri: "at://did:plc:e2ctbutx6kya6si4if5ngjmm/site.standard.document/3mnivf62fob2g"
---
[Ethan][1] tagged me in an interesting [blog post][2] of theirs about blogging. I was hoping to
actually finish backporting my entries from "way back" (aka 2009) and use that as a way to see how
my writing has changed over time. No time like the present, though!

To set a mood, as you read this, consider playing the following song by [Zvrra][]:
<iframe class="bandcamp-player"  src="https://bandcamp.com/EmbeddedPlayer/album=2849109407/size=large/bgcol=ffffff/linkcol=de270f/tracklist=false/artwork=small/track=1156620348/transparent=true/" seamless><a href="https://zvrra.bandcamp.com/album/growth">Growth by Zvrra</a></iframe>

# Why did you start blogging in the first place?
I found blogging to be as useful as journaling but available to the world and not needing to buy a
book or journal. Of course, now I'm paying more to blog than I did when I started out. I used a
sub-domain name from `co.cc` when that was cool, leaned on a subdomain on Blogspot for some time and
then moved to a couple different domains. That taught me first hand of the fungability of a domain
name and how it's not as reliable as the community would claim &mdash; despite the cost, its
usefulness outside of an Web address bar is small compared to the usability of an e-mail address.
That merits a whole separate post of discussion!

I didn't exist online in the heydays of more peer-centric blogging as I came into the social Web via
websites like MySpace, Bebo and then Zuckerburg's notorious pet proejct turned dragnet. Those
transitons have shaped my stance on (corporate) social networking and encouraged me early on to get
to some place where I can write and hopefully hold onto it. With things like RSS and newsletters, it
made it a bit easier to stay up to date (and just as easily to drown in so many blogs with so little
time to read them all).

# What platform are you using to manage your blog and why did you choose it? Have you blogged on other platforms before?
That's briefly explained at the footer of every page on this site. I use [Eleventy][3] to generate
the pages as well as serve the fonts and images you see here. I've used quite a few static site
generators primarly for my site, largely out of speed of deployment. I still find it lacking in ways
I'd like to return to a dynamically generated/served site. I normally hand roll my own tool for
writing my site: it's not difficult, it's a great excuse to try out new standards and libraries at
minimal risk.

# How do you write your posts? For example, in a local editing tool, or in a panel/dashboard that's part of your blog?
Most of the time, I'm writing it from a terminal via Neovim. That's been the course for most of the
time I've blogged (if not with Neovim, then its predecessor). When the tools I used had a internal
dashboard, that'd be a route. A prior form of my site supported [Micropub][] which let me use any
client that supported it: which was really me using [Quill][3] or some hand-rolled solution.
Sometimes I'd draft longer pieces in Obsidian and then copy the text out to my editor for final
formatting.

I'm interested in looking at more GUI tools for writing, especially for the Linux community (not
necessarily popular or available: writing is focused heavily on globally minority machines like Mac
devices).

# When do you feel most inspired to write?
To paraphase Bruce Banner from Marvel, "I'm always inspired to write", and at times for the same
reason that Bruce is always capable of turning into the Hulk. It's not a secret that I have
Thoughts &trade; and writing is an accessible outlet to munge those thoughts into things I can reflect
upon or communicate with others.

Secondly to that, I'm charged to write when I read something moving. It could be a great book,
article or part of a song that hits me. A game with an amazing story development, an experience in
the street or even [in the midst of a storm][6].

# Do you publish immediately after writing, or do you let it simmer a bit as a draft?
Oh, I shoot from the hip most of the time! With a bit of proofreading and editing. These posts are
sometimes a soft transcription of thoughts that I stew over during the day. I used to draft a lot
but I found it easier to shoot it all out at once.

# What's your favorite post on your blog?
I don't like picking favorites: all of my entries are my favorite!

But if I had to, at least in this current iteration of my blog, it'd be either ["Why do I continue
to post on social media?"][4] or ["People Need to be More Critical of their Tech Environment"][5].
The latter I like a lot because of how the masthead image bleeds to fill the page and resizes
nicely. It also makes use of almost all of the custom styling I've made for my site. The former was
one of the few posts on here that I've had someone else check out prior to publishing!

# Any future plans for your blog? Maybe a redesign, a move to another platform, or adding a new feature?
I'm always chewing on an idea for this blog. My next iteration is going to be a lot more friendly to
static storage and independent hosting. One of my requirements is that it's capable of running on a
Raspberry Pi Zero[^1]: part of a larger personal project to move things into my home &mdash;
physically.

I'd like to automatically syndicate my blog posts to my newsletter. The most work I've done with
that is the little counter of how many people are subscribed to it that exists at the end of every
blog post.

There's also some metadata project: making something like https://xray.p3k.io/ but for things like
OpenLibrary, Wikipedia and the like so it's easier to generate rich embeds for content, among other
things. And as hinted earlier, I have some ideas on what I'd want a local text editor for blogging
to look like and being capable and ambitious enough provides me with enough willpower to hack on it.
We'll see what happens!

# Who's next?
I appreciate the tag, [Ethan][1]! I'm curious to see what [Olu][8], [Sophie][9] and [Heydon][10]
might come up with!

[1]: https://ethanmarcotte.com/
[2]: https://ethanmarcotte.com/wrote/blog-questions-challenge/
[3]: https://quill.p3k.io/
[4]: /essays/2024/what-do-i-gain/
[5]: /essays/2024/more-critical-tech/
[6]: /essays/2024/in-the-night/
[7]: https://www.makeuseof.com/raspberry-pi-hires-former-police-officer-for-surveillance-tech/
[8]: https://olu.online/
[9]: https://localghost.dev/
[10]: https://heydonworks.com/
[zvrra]: https://zvrra.bandcamp.com/
[micropub]: https://micropub.net/
[^1]: I'm aware of the incident where they hired a [domestic state-sponsored terrorist][7] who used
    their technology to support surveillance on civilians. I got these boards _before_ this event
    and unless someone's willing to buy them off me so I can swap for OrangePi; it wouldn't make
    sense for me to waste them. This mention of the company will be the last explicit one in
    relation to that project.

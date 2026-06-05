---
layout: essay.html.njk
title: "Mozilla Needs to Fall Apart to Make Space for Others"
description: >
    Mozilla had its time. Its executives have decided that it's best to cosplay as a small
    department with Google's ecosystem instead of doubling down on what its alleged mission was
    about. Let it fall.
tags: essay
og:
    type: "article"
    image: /images/firefox.png
masthead:
    src: /images/firefox.png
    alt: The Firefox logo against a dark purple and pink background
    title: "Firefox's future is questionable: should it end?"
date: 2025-03-02T09:30:00-05:00
atUri: "at://did:plc:e2ctbutx6kya6si4if5ngjmm/site.standard.document/3mnivf5vamz2g"
---
I've been slogging through social networks with regards to the current situation with Mozilla and
their ramping up of the commercialization of their flagship product, Firefox, as well as the
services around it. I started this off with a small thread[^1] that's my cynical take that **Mozilla
is burning the remainder of its goodwill** and transitioning into a quasi-Internet/AI/ad services
company that feeds on the current need for "a secure option". This is similar to DuckDuckGo's
attempt to make a slimmed down Web browser with their services built around it, more akin to Apple's
Safari than Google's Chrome; as the former has less of a public reputation for being a vehicle for
ad delivery acceleration.

> Before diving into this, I suggest that you catch up on the situation by reading thoughts from
> [Mark Mayo][4]. They worked on the products around Firefox for quite some time and visited the topic
> of Firefox's eventual death before.

There's parts of this that I find a bit thin because it also marks any other non-commercial attempts
as potentially doomed for failure:

> Mozilla Corporation, as it slowly learns to be a real company, not a movement, is a less and less
> obvious counter bet to the culture and behaviours of the market winners. Which feels like a
> betrayal of sorts to us old farts who grew up with both the early web itself, and Mozilla’s rescue
> of it from the clutches of evil. Back then both had a tangible rebel alliance “fuck you I’ll do
> what I want to” vibe. They don't now. The reality is it’s just an inevitable progression of an org
> and a web so well funded to pursue an ancient and incredibly broad mission for so long. Mozilla
> behaviour and interests sort of mirrors the web broadly, I guess I'd conclude.

This implies that the organization's initial goals were more cosmetic than baked into the ethos of
the company/organization. Perhaps, since it's a non-for-profit/corporation hybrid, like the
OpenAI/Microsoft tango, this was the end goal of the off-shoot of the Netscape Navigator; to play to
another side, only to eventually wither. This feels like an out &mdash; a concession to the "market
forces".

Folks have floated the idea of a web browser being developed in part with funding or support of a
government, to make it into a public good. This is a easy path (to market, execution would be
bonkers, especially under this U.S. administration) to pair with groups like ACLU and the EFF to expand
user privacy and choice by making a "public" implementation. After all, the Web _is_ built using
public research and funding. Shoot, [Google uses municipal water to run its data farms][5]; it should
ship a Google-free version of Chrome to those residents! In the United States, such a proposal would
have to come from a federal mandate, perhaps from NIST or the like; but Google and Apple would fight
against this out of a potential fear of requiring the engine be available as an option as opposed to
theirs as the default on devices. This is said as well by Mark:

> There’s zero incentive for Google to take a patch from Mozilla or Microsoft or an IC that advances
> the web for users but hurts their bottom line. You need momentum and heft in market to change that
> kind of behaviour by driving their user bases to demand it from them. Right now, and for quite
> some time I’d wager, Google alone decides what is de facto on the web by what they ship in Chrome,
> regardless of what plays out in open source code repos.

This also points out the fallacies of commercial open source &mdash; you can paint it any color you
like, so long as it's black (or red, green, yellow and blue). If the State won't get involved (and it
won't, domestic trade wars are of no concern until it threatens state operations), then we will need
to accept that the IETF and W3C will be yet another place to ask Google for permission on what to
add to the Web. We collectively failed users when we asked everyone to cargo cult to Google's Chrome
without deeper considerations around what would it mean and focused on "ease of use". The EU has
more pushback strength to provide an wedge but it has its own work to do.

There's been mentions of whatever comes next needing to be hosted outside of the United States
&mdash; that's definitely an option. I'm not concerned with the overlap of geopolitics in
technology: if it's a notion of civic control, entities like the UN and the weaker EU coalition have
shown that it will bend to the United States if they have no alternative[^2].

# What Happens Now?
I can tell you right now: unless someone manages to build a low-cost commercial option for public
institutions like libraries, universities, or public schools; nothing will seriously change. But by
pushing it in places where users tend to have the least amount of sovereignty[^3], we can demonstrate both its
viability and durability. "It" here can be a Web browser. It could also be a constrained operating
system designed for browsing the Web and running whatever necessary applications that these systems
would need. Since the Electron-ification of applications is cemented in our development culture,
there's less of a worry about compilation targets and more of a concern about what version of
Chromium can one ship with their application to a host machine. Projects like [Tauri][8] show how
one can build a shell over a system provided Web browser to deliver an experience: Spotify on
desktop is a more resilient and long-lasting example.

I say "Good luck" to anyone pursuing this. Money is part of the problem. You need legitimate
political power to wedge out these Rockefeller-level behemoths in the space. You'll also have to
fight people concerned about job security because "dethroning" Chrome means that their work at
Google will be at risk[^4]. This is a collective effort that should have started in 2010.

But here we are. Fuck the executives at Mozilla for allowing this to happen and wasting good money
on vanity projects.

[1]: https://bsky.app/profile/jacky.wtf/post/3ljbyatpfwk27
[2]: https://todon.eu/@jalcine/114085069839281007
[3]: https://www.youtube.com/watch?v=it5yNE_Lszo
[4]: https://www.vmunix.com/gecko-mozilla-thoughts/?ref=jacky.wtf
[5]: https://techwontsave.us/episode/241_data_vampires_going_hyperscale_episode_1?ref=jacky.wtf
[6]: https://www.fairphone.com/?ref=jacky.wtf
[7]: https://www.bklynlibrary.org/?ref=jacky.wtf
[8]: https://tauri.app/?ref=jacky.wtf
[^1]: On [Bluesky][1] and the [Fediverse][2]
[^2]: Otherwise, for all of the fear of the things that the United States produces, they would have
    been banned from use in the member countries. But that could set off a trade war and
    unnecessarily put citizens at a disadvantage. And there's a lot of folks in the EU who are
    addicted to Apple products &mdash; they won't be [switching to Fairphone][6] anytime soon. It's
    an expensive political dance that can easily result in companies like FoxConn and Samsung to
    either needing to engage in new trade agreements or to halt operations altogether, if this
    administration in the United States is both as aggressive and adept as it is when it comes to
    restoring itself to its initial, colonial form.
[^3]: Patrons can't pick their operating system or Web browser of choice on a computer; unless it
    provides those options. To my knowledge, [Brooklyn Public Library][7] only provides Google
    Chrome as an option on its computer network.
[^4]: It won't, but sociocultural loyalties to companies like Google and Apple will have their
    developers and subscribers thereof defend the need to _keep_ these monopolies and frankly
    exposes their inability to both take a stand and see beyond their virtual cubicle.

---
layout: weeknote.html.njk
date: 2024-07-09
tags: weeknote
---
Felt semi-optimistic last week. Definitely went on a bit of a rant on Mastodon that made me wonder about
how what I post online gets surfaced into search results and if that could be impacting my ability to find work. I guess
I'll never really know - feedback is strictly limited to "I'm sorry". I'm still working on making a page to track this
job hunt progress - the code is simple but it's more emotionally taxing than I expected.

## Coding
I've been stuck on an issue with both getting [Veilid][] running on my server and [having my client application][1] _connect_ to
a hub. I'm hoping to have something demonstrable by the end of the week because I'd love to contribute to the fledging
world of applications experimenting with things like Veilid. 

I've started working on an attempt to run [Librecast][] on a mobile device using NativeScript. The code's [still early][2] as I'm 
focused on getting the native library to be callable from JavaScript. I initially wanted to use [Neon][] but the docs are 
extremely sparse on initial setup. That led me to consider using [napi-rs][], something I'll begin experimenting with
this week. It'll be interesting to see this work especially on a mobile device - my understanding is that most might not
support IPv6 without being connected to WiFi. Again, I think I'm wrong here, hence why I'm even trying this.

## Reading
I finished [The One Device][3]. It was definitely a trip and gives me a sobering perspective on the tech industry's
allegiance to both Apple, Western hegemonic pushing towards hardware manufacturing and the things that prevent societies
from grappling the inherently xenophobic underbelly that technology relies on in order to survive. You wouldn't know
half of what's mentioned by reading the cover or the back - that's for sure. At the same time, Apple's more of the
_face_ of this moment and less of the engine. The majority of machines that require semi-conductors end up coming out of
China, Taiwan or other regions forced to operate in "highly-skilled, low-wage" industrial-esque society.

I'm reading [How Europe Underdeveloped Africa][6], a challenging read mainly because Rodney's focus on looking at how
European development during the 1300s to the 1500s was influencing the world (Asiatic and Indian trade were impacted)
forced a lot of reconsideration of the perspective of how development is taught in the United States. It also had me
stop to understand that while trade is a required component of communal interactivity, if said trade is designed to
create imbalance and forced scarcity, it can become a tool of socioeconomic policy making (if not all out economic war).

I've continued my reading of [The Victorian Internet][4]. Reading this as I'm reading the aforementioned book, I do have
to imagine how European authors only manage to relegate the rest of the world as just _places of exploit_ (if not places
of material extraction). The passive note of how an Asiatic plant was crucial to the construction of the first Atlantic
submerged electric cable that was necessary for cross-Atlantic communication felt similar to both what Rodney mentions
in the denigration of external societies as a sort of _battery for innovation_ (my words).

## Seeing
I took a [picture of a grasshopper][5]!

<figure>
    <img src="/images/weeknotes/2024-07-08-grasshopper.jpg" alt="" />
    <figcaption>Talk about perspective!</figcaption>
</figure>


[veilid]: https://veilid.com/
[1]: https://git.sr.ht/~jacky/veilid-editor
[librecast]: https://librecast.net/
[2]: https://git.sr.ht/~jacky/librecast-nativescript
[neon]: https://neon-rs.dev/
[napi-rs]: https://napi.rs/
[3]: https://bookwyrm.social/book/253632/s/the-one-device
[4]: https://bookwyrm.social/book/276393/s/the-victorian-internet
[5]: https://www.flickr.com/photos/jackyalcine/53835097445/in/dateposted/
[6]: https://en.wikipedia.org/wiki/How_Europe_Underdeveloped_Africa

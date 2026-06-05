---
layout: essay.html.njk
title: "A realignment of things"
og:
  type: article
tags: essay
date: 2026-06-02T13:00:00-05:00
description: >
  Closing accounts, making backups and making choices.
atUri: "at://did:plc:e2ctbutx6kya6si4if5ngjmm/site.standard.document/3mnivf4c7sz2g"
---

So I've done some things.

## Deleting My Fediverse Account

Last night, I deleted my Mastodon account of at least ~5 years from
<https://todon.eu>. It was where I went after PlayVicious, run by
<https://roiskinda.cool> shut down. Normally, I feel things - a decoupling, a
sense of loss - when deleting accounts like this. But I felt more deleting my
Microsoft account than deleting this one. I have a backup and plan on
selectively adding folks into <https://fed.brid.gy/> so I can still see posts
from my account with <https://blackskyweb.xyz/> but it's going to be a _small_ number.

There's a bunch of reasons why I pulled the plug:

- **I don't use it often**: I keep track of what sites I visit on a daily,
  weekly and monthly basis. This was one of the ones I didn't really care for, I
  noticed.
- **It's discouraging my rewrite**: In order to lean into the idea of the
  ActivityPub API, I couldn't keep using or running an account held on software
  stuck in the past of ActivityPub &mdash; and in what helped calcify the
  collective Fediverse experience &mdash; as a developer wanting _more_
- **It's no different feed-wise from other things**: I have chronological feeds
  in my podcast reader, my AT Protocol AppView and my RSS reader and this one was
  used the least.

## Leaning into Agentic Tooling

I've written my stance on [using these tools](../2025/left-ai.md). What's
probably more important &mdash; to me &mdash; is that my usage has dramatically
increased since starting work with <https://divine.video>. It's a core aspect
of how we manage to keep the platform going with our small team, get high speed
turnaround and keep our team's knowledge in a cemented place.
<https://evan.henshaw-plath.com/> has a vision on how this is changing how
folks write software and despite some of the qualms I have with it &mdash;
acting like it's _not a thing_ is like acting like cars didn't exist in the
rural South United States of America or Port au Prince of Haiti in the 1980s.

There's this line from Billy Butcher at the end of season 5 of the The Boys &mdash;
about an half hour before he dies; where he looks to a Supe and says, "if you
can't beat them, join them &mdash; then beat them". And it worked. Outside of
work with <https://divine.video>, I've been using these tools to help me build up the apps at
<https://www.olamaelcu.net/projects>. I think the biggest issue I've run into
is that now I'm _too eager_ to run multiple projects in development
_concurrently_ &mdash; choking up my (underpowered) machines. But I've been
able to fight off [a form of amnesia][1] by repeatedly acknowledging what I
don't know in order to figure out how to learn it. That's enabled me to:

- build a shared Rust app core for Livtet for iOS and Android (for Livtet)
- build out a dynamic rules engine in Rust bound to Godot (for Spadat)
- grok how to form dynamic feeds in AT Protocol (for Beats)
- land a refactor for [hiding posts in the Blacksky appview][2]

I was (and am) fully capable of doing these things by hand, by myself. However,
now I can do it _and_ get quicker demonstration of understanding. I'm not
expecting this to gel over well and I've spoken a bit on my Instagram stories
about this (blending of worlds!) but as a fully independent contractor,
understanding and alignment is the game (always has been). And my personal TIL
Obsidian vault now gets some semi-automatic updates leaning on [a tweaked skill
by Dr. Cat Hicks][3] for OpenCode that lets me review things I did differently
or new on a daily basis.

---

We'll see where this goes.

[1]: https://en.wikipedia.org/wiki/Michael_Crichton#%22Gell-Mann_amnesia_effect%22
[2]: https://github.com/blacksky-algorithms/blacksky.community/pull/79
[3]: https://github.com/DrCatHicks/learning-opportunities

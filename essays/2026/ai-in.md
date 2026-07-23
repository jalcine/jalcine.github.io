---
layout: essay.html.njk
title: "Leaning into agentic coding: (almost) a year in (short) review"
og:
  type: article
tags: essay
date: 2026-07-06T22:30:00-05:00
description: >
  My approach in generative AI coding solutions, how I've integrated into my
  workflow and where I avoid using it.
atUri: "at://did:plc:e2ctbutx6kya6si4if5ngjmm/site.standard.document/3mpzl6kakyc2n"
---

Last year, while I was marooned in France, I wrote a bit of a reflection on my
stance of [using generative AI to write software][1]. I don't pretend - in this
moment - like it's a bit of a double edged sword: I don't pay for things like
Antrophic or OpenAI, given their _explicit_ involvement in being used for
violence. However, there's nothing stopping the eventual transition of large
government agencies to newer open models built from the ground up from the
millions of documents used for public policy and law - something that I
wouldn't be surprised if it was underway. It would _have_ to be open (at least
a version of it on declassified information) since it's (the documents
produced) funded publicly. But then again, we don't have federal or municipal
telephony services nor Internet services. My approach to model work has been
the following:

- **90% cloud solutions**: [Ollama Cloud][5], [Minimax][6], [Z.AI][7], [Poolside][8], [Deepseek][9], Copilot and
  [OpenCode Go][3]
- **10% local models**: GGUF'd shrunk models running on a _very_ old PC.

I can't afford the kind of hardware needed (currently) to run models at home,
as most Americans who are living between jobs (like myself) can't afford
things. And it'd be frankly wasteful for me to invest in that at the moment.
However, my subscription pricing for the subscription above are - together -
touching about $100 and I only move to another service if/when I hit the rate
limit. Leaning on Deepseek makes this not a thing so I also switch to models
like MiniMax and Z.AI when I need heavier reasoning and rely on Deepseek for
"grunt work".

## "You're ... Using ... AI"

Generative AI &mdash; yes. And frankly, it'd be a bit ignorant to not assume
most of the things produced today isn't using it. This isn't defending the
proliferation of it but more being aware of the state of affairs. I do believe
a lot of discontent on the potentiality of it taking away jobs is a bit late in
the tooth to address because folks _have been_ losing jobs in tech routinely. I
only see commentary about it now from some folks who have been generally quiet
about things as a whole; indicating to me something of "I can only care when
it's in my yard" mechanics of thought. I find it a bit exhausting but I'm also
of the mind that software engineers are grossly overpaid and over privileged
and that we need to crank it back and redistribute that wealth to folks who
make companies go.

Back to the point at hand.

## What's Your Stack?

I use [OpenCode][3] primarily as a multiplexer of model interactivity. It has a
lot of plugins packed into it but the most notable has been [the superpowers
plugin][2] as it puts in some sensible defaults. If I could get it in Pi,
another tool I use, I would but it's not needed as I use Pi as my "slegehammer"
for implementing plans. It not having a "agent" concept is a bit liberating and
forces me to be more diligent about what I do in my sessions. I'm not terribly
precise with my model usage but as mentioned before, Deepseek has been doing
what folks claim GPT is capable of and GLM does what folks claim Claude is
capable of. I spend _way_ less - allowing me to feed my dog and fund leftist
media.

I think I'll write more about my use in the coming weeks but right now I've
been very focused on building out my [Calibre + Goodreads][4] replacement and
when I give the progress update on that, I'll write more in detail about how
I've been managing project development with it. It's been something akin to a
local JIRA + wiki system, but with me effectively talking to myself.

[1]: /essays/2025/left-ai
[2]: https://github.com/obra/superpowers/blob/main/docs/README.opencode.md
[3]: https://opencode.ai/go?ref=GTAAP1PQ01
[4]: https://olamaelcu.net/projects/livtet?utm_source=olamaelcu&utm_medium=waitlist&utm_campaign=Livtet
[5]: https://ollama.com/pricing
[6]: https://platform.minimax.io/subscribe/token-plan?code=B39p0MOAie&source=link
[7]: https://z.ai/subscribe?ic=VMQYZ5AZGL
[8]: https://poolside.ai/
[9]: https://platform.deepseek.com/usage

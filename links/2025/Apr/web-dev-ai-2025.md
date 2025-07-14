---
layout: link.html.njk
tags: link
title: "So We're Just Going All In on Microsoft's AI for Code"
date: 2025-04-23T17:00:00
material:
  link: https://2025.stateofai.dev/en-US
  source:
    url: https://www.devographics.com/
    name: DevOgraphics
  title: "State of AI 2025"
---

This thing opened up with something that I couldn't relate to: putting
questions, big or small, into a generative text tool to get an answer from. I
understand that Google, Microsoft and Apple are educating as many people as
possible that this is an _okay thing_ but we don't have to keep parroting it.

Anyway.

I recommend walking through the results: the [demographics][1], the [disabilities
markers][2] and the like. I was a bit shocked to see Neovim on there but it _is_
a pretty flexible editor. As expected and dictated by market dynamics,
Microsoft's tooling &mdash; through GitHub CoPilot, ChatGPT and the like, all
dominate in usage and deployment. When you can make it free and use said free
input to refine their work, it begins to pay for itself &mdash; according to
economist/trickle-down "theory" logic. There's also a bit of a bias in that most
people _only_ have [used one coding "agent"][3] and you can't filter against that[^1].

Something I expected was that it'd be predominately [the language that's the most
difficult to document][4] that'd be at the top of this list. I _believe_ that
languages that have baked in documentation have less of a need of discovery for
tools like it. That and the difficulty of building for the Web puts that
language higher on the list of "how the fuck do I do this" (the whole point of
generative code tool). Accessibility to the runtime is another factor, perhaps,
but negligible. More folks need to use [TypeDoc](https://typedoc.org); my $0.10
(ignoring tariffs and stagflation).

Half of [the use of refactoring use][5] is either because folks can't read the
code or they want to rename variables (which folds into the first, IMO). That
explains why the happiness marker seems _way more optimistic_ than it should be.
The note on "strong consensus" of AI integration into workflows is notable as
well as folks mentioning increasing productivity. Does productivity means more
time spent "doing things" or less time getting to something "productive"?
Additionally, removing the neutral option to be a 4-opinion split regarding [AI
existential risk][6] might have leaned it towards more of a "no" just on the
fact that developers tend to underestimate things. The reaching AGI part is just
embarrassing, tbh.

This ending with a AI-promoted-in-young-classrooms note told me what I needed to
know about this survey: a soft means of reaffirming Microsoft's tool
integration into the lives of developers (since we collectively refuse to leave
the ecosystem) by means of labor automation.

Thank you, next.

[1]: https://2025.stateofai.dev/en-US/demographics/
[2]: https://2025.stateofai.dev/en-US/demographics/#disability_status
[3]: https://2025.stateofai.dev/en-US/coding-assistants/#coding_assistants_cardinalities
[4]: https://2025.stateofai.dev/en-US/other-tools/#ai_programming_languages
[5]: https://2025.stateofai.dev/en-US/usage/#ai_code_refactoring_reasons
[6]: https://2025.stateofai.dev/en-US/opinions/#existential_risk

[^1]:
    The magic is _so_ wide, it probably makes it statistically irrelevant but
    it does beg a question of inspection: if it's _only_ CoPilot, then does the
    market space really breed competition? _Can_ you compete with a company that
    keeps inhaling everything around it?

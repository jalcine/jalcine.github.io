---
layout: weeknote.html.njk
date: 2026-09-16T09:00:00.000Z
tags: weeknote
og:
  image: /images/crafter.jpg
---

# What A Week

In order to seem productive online, or at least prove that I am, I'm taking
[Simon's advice][2] and posting a bit more about the things I'm working on. It
doesn't seem like it'll matter much given how much LLM-driven traffic we've
seen Google convert Web search into but here's hoping. Eventually, I'll be a
bit more coherent but right now, I'm slowing down my work on Atmosphere
projects and focusing on the [desktop experience of Livtet][1]; I'm focusing on
shipping and making a GTM product so I can support myself.

[1]: https://github.com/olamaelcu/livtet-desktop
[2]: https://simonwillison.net/2021/Jul/17/standing-out/

## Links

I'm waffling on this behavior of sharing the links to things I've read that I
found interesting. I might populate a collection on [semble](https://semble.so)
so it's easier to follow if you're in the Atmosphere. I've included some notes
and highlighting from the texts below.

### [Bundler belongs to the community][link:1]

A quick history of how <https://bundler.io/> came to be from [Andre's][andre] narrative perspective.

### [AI Makes Better Software][link:2]

Reading this _actually_ motivated to take another look at what I'm doing with
[Livtet][livtet] because it initially was supposed to _just_ a desktop
application but it blew up into this cross-platform monster of sorts thanks to a
lot of tab completion with GLM and MiniMax. Namely, it helps:

> "when used effectively and responsibly, delivers on the promises of agile
> development; ship a product, get feedback, iterate."

### [The Tower Keeps Rising][link:4]

> "The shared language of a software project is the common understanding shared
> among its developers. This language is rarely written down in one place but
> it lives in documentation and code. It can also just be something that comes
> up in code review or watercooler conversations or when one engineer has to
> explain a change to someone else,"

This, described by Armin, is also why it can take up to six months to fully
onboard to a software project. Lore that simplifies the understanding of the
code is shared by humans but has been simplified now by LLMs &mdash; to a
degree. But:

> "[i]n the days before agents some of that shared understanding was maintained
> by friction. If I wanted to change someone’s storage layer, I usually had to
> read their code and ask them questions. Changing that code might have
> required coordination with another team whose service depended on it. Some of
> this friction was useful as it forced communication. It also was a good
> touchpoint for both of us discover if we still understood how the system
> worked. I had plenty of experiences in my career where through conversations
> with my fellow engineer we collectively had to understand again why the
> system we had worked as it did before we did some changes to it"

&mdash; thus reducing the need for direct human-to-human collaboration.

### [Faulty Towers, vibe sickness, and the vibe bobsled][link:3]

> "If some of the best programmers in the world struggle to find bugs they even
> know must be there within a 100 line program, there is simply no hope for
> humans to review the volume of output from LLMs"

That's a very valid concern that Christine makes in their blog post. Software
correctness is very hard and a skill that gets one the title of senior staff or
principal engineers when done on demand.

### [Nobody pays for open source. We can force them to.][link:5]

> "The system isn't breaking. It's stable, at a level of human cost we've
> collectively decided to put up with. A maintainer burns out, somebody else
> picks it up, they burn out, and so on. Serial near-burnout isn't a bug in the
> equilibrium, it is the equilibrium"

That's a hard truth, but there's a bit of magic in:

> "Developers write software the way singers sing, which is to say they'd do it
> if nobody was listening, and that isn't a problem to be fixed, it's the thing
> that makes the whole system work;"

— because people do this not for glory (sometimes) but for the hell of it. I'm
hoping that this is the path registries end up taking.

### [Stalling installing][link:14]

Jeremy writes about his plea (my words) to Apple to stop weakening the abilities
to have Web applications become first-class citizens on their devices. I think
we're going to need a EU-level-intervening on USB-C level event to get Apple to
comply; it seems to be the only thing that works. They can always dance around
the standards process by sheer force.

I wish folks in the Apple development community, after paying their $100 tithe
were able to see how Apple is holding back the Web in so many ways.

[link:1]: https://andre.arko.net/2025/09/25/bundler-belongs-to-the-ruby-community/
[link:2]: https://www.hmans.dev/blog/ai-makes-better-software
[link:3]: https://dustycloud.org/blog/faulty-towers-vibe-sickness-and-the-vibe-bobsled/
[link:4]: https://lucumr.pocoo.org/2026/7/13/the-tower-keeps-rising/
[link:5]: https://seldo.com/posts/nobody-pays-for-open-source-we-can-force-them-to/
[link:14]: https://adactio.com/journal/22757
[andre]: https://arko.net/
[livtet]: https://livtet.olamaelcu.net/

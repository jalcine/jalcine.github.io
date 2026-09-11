---
layout: essay.html.njk
title: "The ease of protest against generative AI is a problem"
masthead:
  src: /images/ease-of-protest.jpg
  title: >
    A scene captured by Compagons from <a
    href="https://unsplash.com/photos/red-yellow-and-blue-kite-flying-under-blue-sky-during-daytime-AQWGdilIHLs">Unsplash</a>.
og:
  type: article
  image: /images/ease-of-protest.jpg
tags: essay
date: 2026-09-06T11:00:00-05:00
description: >
  When the target of protest is virtual, the reward for saying no feels virtually larger as well.
atUri: "at://did:plc:e2ctbutx6kya6si4if5ngjmm/site.standard.document/3muuamiirs626"
---

<bluesky-post uri="at://did:plc:e2ctbutx6kya6si4if5ngjmm/app.bsky.feed.post/3muu4gio3fs22"></bluesky-post>

I posted [this][1] initially on Blacksky after thinking about [another post][3]
made on there about the inevitable fight against generative AI. Inevitable
makes it sound very moralistically incompatible with the way the world works.
As shown, capitalism has driven the development of technology, even from its
proto-capitalistic times when it began its form on [the plantation of African
bodies for European interest][2]. We don't _have to_ do much in order to
protest generative AI, not from the consumer perspective[^1]. But as a producer
of software, unless you already had a product out for a decade and/or had MRR
(monthly recurring revenue) that builds a moat around folks emulating your work
via [screenshots on Mobbin][4], you are hard pressed to find out how to make
the code spitting program work in your favor.

My first serious foray into integrating LLMs into software was while working on
the [Rust microformats crate][10]. There was a few test cases from the general test
suite that I could not wrangle. I threw _some_ model at it - I don't remember
which - but it immediately solved something I have been stuck on for _months_.
That was the moment I understood why folks used it. I tried throwing it (the
coding harness at the time was AIDE) at bigger projects of mine and it fell
over; the scope was too broad and validation required subjective visual
interactions so it failed (according to me, it always came to the conclusion
that the work was good). This small itch scratching of work is what convinced
me to not write off the whole stack and was the project of work I was talking
about in [an earlier blog post of mine][5] when I _tried to make_ a leftist case
about AI. I think I failed in that regard and I know why.

## The whole thing is fucked

Microsoft is a (software-based) weapons manufacturer. I know folks are going to
see that as a reach but when Windows and Windows-based technologies are the
backbone of a lot of the military tech used in places like [the MENA region][6]
largely to protect the interests of Microsoft's longest client, the United
States military departments, the classification fits more snug than that
squashed bug in the rug. This is to note that it being ChatGPT's benefactor
means that even if commercial LLMs were banned today, Microsoft technologies
can still be used to stand up LLMs for individual use (as most folks tend to
do), in the same way that folks spin up torrenting infrastructure despite the
threat of a $250,000 fine and 10 years in prison for "stealing" bits of data
representing (to the United States's legal interpretation) intellectual
property.

It also doesn't help that the most prominent faces in the industry are now (and
always have been) salespeople for the technologies that their employer wants
the general public to consume the most of and quickly. Folks went from being a
gentle representative of kind computing to finding ways to platform "experts"
of generative technologies over and over without balancing it with folks who've
been doing research on these technologies for years. They probably can't
because they'll get a letter from legal about a conflict of interest!

It's easy to be against it because the ceiling of resistance right now is a
declaration with no action, a yell with no volume. We need to do more to put
teeth to the metal behind this and it requires the people who _make the stuff_
to do something beyond moaning about new model releases.

All of this is preamble to state that we are pointing at the wrong places of
attack and need to be making meaningful concessions _or_ work towards putting
power back in the hands of folks who have to produce the things we use on a
daily basis. A bit similar to how we'd want those who collect our fruit and
vegetables to be paid living wages and work reasonable hours, we need to give
folks who produce tools a means of sustainability that allows for the
temptation of these tools to be more easily resisted.

## It's about the workers _and_ the consumers[^4]

Workers, in this case, is going to a short-hand for the software engineers,
designers and the folks involved in the production of software. This does not
include people who are making apps using generative AI who are not technical
but as cosplaying as they are. They are unintentionally and unwittingly another
set of salesfolk for the technologies. I say this as I volunteer at a program
that helps people do just that. I see the empowerment that folks can get when
they can extract ideas from their head into something that can be shared with
the world. It is sad that they had to circumvent the process of development for
the sake of a MVP but who's to say that these projects will see the light of day.

### For programmers

The software development lifecycle focuses on the needs of business but does
not have much concern for the welfare in which it's produced. Its tendrils to
the automotive process is still there and needs some level of environmental,
social and economic updating. With that, inroads on how (if it's permitted)
generative AI use can be made would be available. This could come from:

- licensing arrangements that tie in quality assurance,
- contributor agreements that hold those who commit to the bit,
- (invasive) telemetry tooling to confirm lack of use of generative tooling[^2]

A third-party vendor (or set of vendors) can help audit code (encouraging it to
be open by default) for LLM tendencies [^3] and allow for this certification to
happen on a release-cycle basis. It will slow down releases but moving fast and
slopping things wasn't the motto we were going for anyhow.

### For workers

Next, unionization (or expansion thereof) of all software development shops
would give them a way to codify that _want_ to prohibit LLM tooling in their
work (with reasonable exceptions) would allow shops to publicly certify
themselves as "slop free". The unionization process is _not simple_ - I've
participated it - but it provides the highest yield reward for workers _and_
consumers to confirm that the _development_ and _production_ process is as
aligned to the wants of consumers and not just shareholders as possible.

Union contracts are obligations that companies have to commit to - just the
agreements that they have to uphold with the shareholders who never attend your
standups or there to take on-call rotations or to get the hundreds of emails
about [people wanting you about aligning with fascists][11]. It's important to
optimize the operation of a business around profitability _and_ the well-being
of the people who produce said profit. And what better way to increase profit
by increasing goodwill to consumers now that generative AI is [causing folks to
go protest the facilities in which it's run][9]?

### For buyers

There isn't a lot to be done outside of very verbal boycotts. This isn't just
posting on social media about your disdain of the technology but this includes
sending these companies messages via e-mail, postal mail, etc about WHY you do
not want to do business with them, the number of people you are going to commit
to pull away from their business and a repeated and concerted effort to avoid
their services as much as possible. Saying this should have one realize how
difficult this is because of the monopolization of technology under the United
States's capitalistic agenda. You can't _just_ get a flip phone, cell phone
towers might not work with the kind of spectrum those phones support so you
HAVE to run some fork of Android - like <https://grapheneos.org/> - but that
requires a level of technical prowess beaten out of consumers since the 90s
under the guise of American "ease" to everything.

It's less on the buyer/consumer and more on the workers to shift the reality of
things. And as I've seen in conversation [even about employment][12], folks
_hate_ workers and _hate_ unemployed workers even more. A full-on recession
event will need to happen before the workers-that-would can come around to
this.

---

This is something I've been noodling on for some time and I don't know how
likely it can happen. In the United States, under the Trump administration,
tech workers have been making wins under unbelievable odds. If you're a tech
worker (that's someone **who works in tech** - _not just programmers or designers_)
that can make it to NYC, come plan with us at [Circuit Breakers][7] and join
the [Tech Workers Coalition][8] where we look for ways to free tech from
capitalism (as much as possible).

[1]: https://blacksky.community/profile/omg.jacky.wtf/post/3muu4gio3fs22
[2]: https://logicmag.io/supa-dupa-skies/origin-stories-plantations-computers-and-industrial-control/
[3]: https://blacksky.community/profile/xavierdleau.com/post/3murigqg3622o
[4]: https://mobbin.com/apps/claude-ios-d4f0ada4-3325-4c8e-9c3e-1115dbd469c9/754cdd57-a1c5-4553-b8fa-1c3c4eba8b2e/screens
[5]: /essays/2025/left-ai
[6]: https://en.wikipedia.org/wiki/Middle_East_and_North_Africa
[7]: https://techworkerscoalition.org/circuit-breakers/
[8]: https://techworkerscoalition.org/
[9]: https://www.politico.com/news/magazine/2026/08/02/the-new-luddites-01017824
[10]: https://gitlab.com/labecasse/microformats-parser/
[11]: https://www.alilleybrinker.com/blog/1password-funds-ethnic-cleansing/
[12]: https://lobste.rs/s/mroowi/being_kicked_out_tech_industry

[^1]:
    Has someone designated a class identifier for folks whose sole engagement
    with political action is through the purchase of goods but is not monied
    enough to make impact? The boycott class? I think this group of people tends to
    be the genre we're discussing here.

[^2]:
    This isn't a real concern regarding telemetry; most of the popular tools
    we use like Heroku's and Railway's deployment have telemetry logic added
    in, Visual Stuido Code; the most popular editor for writing software bakes it
    in and on by default. Windows is notoriously for this and of course, Google is
    a telemetry broker. If we're going to collect data, let's put it to good use.

[^3]: This is probably the hardest sell here.

[^4]:
    Independent contractors are a bit of an anomaly here and a useful weapon
    when wanting to skirt union labor. I say this as a currently operating
    contractor - <https://www.jacky.wtf/work>, hire me! - and I think about how we
    can stand in solidarity with union labor.

---
layout: essay.html.njk
title: "On the Notion of Centering Consent on the Web"
masthead:
    src: /images/consent.jpg
    alt: An image of a hand attempting to pick a lock.
    title: All it takes is a little bit of deceit.
og:
    type: article
    image: /images/consent.jpg
description: >
    After about a year of deep usage of BlueSky and time reading over other people's code and
    projects, I've come to accept that modern social networking will not center consent as a
    feature.
---
I've spent _a lot_ of time on BlueSky as of late. It's largely due to the affinity-based community
I've been able to participate in as well as getting access to folks who aren't planning to join the
Fediverse anytime soon for the usual reasons &mdash; server selection, weaker controls around
personal post moderation and the like, though all are assumed through the calcifying lens of
Mastodon. It's done _culturally_ what the Fediverse has failed to do: get people through the door
and finding one another. It is to no immediate fault of the Fediverse; even those on there can note
it has a bigger pull for folks who have more of a non-American/European tilt[^1]. I'm more likely to
find things of culture production on BlueSky since folks who tend to engage in that online have been
acclimated to the interface of Twitter and with BlueSky's interface that gives a homage to the such,
it's not terribly surprising.

Despite that, I've found myself looking to assert _some_ modicum of control. Blocking folks in the
ATmosphere is more of [a "public assertion" of the action][1]. This is similar, to a degree, to how
ActivityPub also handles blocks, except that it's a insular request to a ActivityPub server to carry
out the necessary behaviors it deems fit for blocking. The equivalent in the ATProto space leans
into components of a client (like the code to view a post within a ATProto client like BlueSky
itself) having to do the work of confirming that said content is blocked. The astute reader might
have caught on by now but this means any misbehaving client can easily ignore these constraints. One
example of a client that makes these social dynamics visible to _anyone_ in a more digestible way is
[Clearsky][2]. On the outside, it provides a useful utility to understand which accounts are
notoriously blocked; and in this case, rightfully so you'd find Jesse Signal and Brianna Wu _high_
on that list. On the flipside, this gives folks an _inverted_ list of potential targets for abuse:
if you're against a right-wing candidate or individual, for example; now they can discern that from
a blocklist that's, by design, public[^2]. There's a bit of an accepted madness to this: if I block
every racist I know, that also becomes an automated (by my labor) list of recruitment targets on the
Web itself.

[1]: https://github.com/bluesky-social/atproto/blob/5ece8c6aeab9c5c3f51295d93ed6e27c3c6095c2/lexicons/app/bsky/graph/block.json
[2]: https://clearsky.app/
[^1]: From cursory conversations that I come to this understanding. At first, I thought it was
    biased based on me being on a European-hosted server, but this is from the formation of my own
    following and that of those who are introduced into my feeds.
[^2]: There's some alleged benefits to having a public ledger of folks who've been blocked. It makes
    it easier to quickly detect a bad actor being isolated on a platform by other networks &mdash;
    although it's quite invisible to tell if you're communicating with someone on a different
    ATProto server, part of the design. I'll reiterate that the _choice_ to publicly broadcast this
    should be held in the person doing the blocking. The social semantics of blocking collide a lot
    with the technical implications; brewing a lot of confusion (or, in most cases, chosen ignorance
    or disinterest for the sake of "innovation") when working on this.

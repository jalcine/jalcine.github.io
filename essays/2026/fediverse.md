---
layout: essay.html.njk
title: "More reasons as to why I left the Fediverse"
tags: essay
date: 2026-09-26T17:00:00-05:00
masthead:
  src: /images/fediverse-masthead.jpg
  title: >
    Laptop on white desk, <a href="https://unsplash.com/photos/a-laptop-computer-sitting-on-top-of-a-white-desk-ISmVDb_20_g">Unsplash</a>.
og:
  type: article
  image: /images/fediverse-masthead.jpg
description: >
  Some time ago, I deleted my Mastodon account as a grand
  declaration of me "leaving the Fediverse". Recent questions led me to wanting
  to write a longer treatise as to why I did it and what I hope to see come from
  the Fediverse going forward.
atUri: "at://did:plc:e2ctbutx6kya6si4if5ngjmm/site.standard.document/3mygo3ymaw3ii"
---

I wrote in a prior piece that I was ["over" the
Fediverse](/essays/2026/alignment.md) &mdash; I never spent any time attempting
to build anything with it due to the _immediate_ cost of being an operator and
the amount of risk that entailed. I wanted to build something similar to
[Bookwyrm](https://bookwyrm.social/) but for those who know anything about
running ActivityPub servers; the canonical/reference implementation tends to be
the _only_ (if not one of the few) running instances and such a task entails
taking on a cost that I was not comfortable with (fiscally, emotionally and
operationally).

## Too many accounts

If I wanted to have a real social media experience, one comparable to what
exists in the mainstream landscape, I would have to make _multiple_ accounts.
Now, this already exists for things like Tumblr, Instagram, Flickr and what
have you but this is done _because of lock-in_ and not for any real reason
outside of that. You _can_ use single sign on from yet another locked in vendor
but that puts me back to the place of having to manage yet another account. My
Bitwarden password manager reports 931 accounts (God knows how many of those
are active) and having to add 3 more just to review books, scrobble music and
participate on _one_ forum felt counter-intuitive.

I didn't want nor care for it. My Bookwyrm account is effectively defunct to me
as I don't update it anymore and the social graph it holds is somehow
meaningful but _trapped_ to that specific platform; making it no different from
Goodreads or Storygraph. I didn't want another silo to throw information into
&mdash; I want something that demonstrates _actual_ data portability if not
malleability.

## Identity and data

There's value in [sharding identities](/essays/2026/split-identity.md) such
that a work account and personal account can be held. However, I would have to
have _multiple_ identities per service. I would have to have a Bookwyrm account
for reading books on my career and another for the smut fiction I'm into (not
really, lol).

This is what appealed to me the most about [ATProto](https://atproto.com) and
also [the IndieWeb](https://www.indieweb.org) &mdash; identity and data storage
were separated _at the protocol_ level. In the case of ATProto, your personal
data server holds and treats your identity as a fungible resource. In the
IndieWeb, identity grants you permission to modify the resources on a site.
With ActivityPub and in the most popular implementations of it, your identity
is heavily tied to the _kind_ of information you can write &mdash; which
mirrors legacy social media systems to a deficit and doesn't prove to be really
innovative in any right.

## Development friction

From my experience, building something for the Fediverse required:

- an always connected-to-the-public-Internet service (if you wanted it to be
  relatively available)
- isolation in the kind of content you create; apps are aggressively focused on
  singular content types (mainly due to the difficulty of making parallel media
  types)
- _extreme_ difficulty testing federation

Seeing each of these, by itself, kept me from building in the space.

## Culture

Despite the goal of a community for federated social networking, it seemed like
the ecosystem built around the Fediverse was inherently European. This might be
due to the large push against "American Big Tech"[^1]. That made it hard for me
to find people, outside of what Ro built with PlayVicious, that I would want to
virtually hang out with.

It doesn't help that PlayVicious had [a hard time _existing_ in the
Fediverse][1] and little effort by peers outside of words of commiseration
&mdash; leaving a sour taste in my mouth personally.

---

With all that said, I do hope the changes come to ActivityPub, in its next
version, that make it more viable as a protocol for social networking and
communication.

[1]: https://logicmag.io/policy/blackness-in-the-fediverse-a-conversation-with-marcia-x/

[^1]:
    I don't know how or if folks take into consideration that these companies
    are _multi-national_ and that there's little interest to _ban_ a company
    that brings these jobs and commercial traffic that countries _want by
    design_. There's work being done to reduce the dependencies on American
    technologies that actually challenge them but it's a contender on par to an
    anarchist fight against a nation-state with industrial power.

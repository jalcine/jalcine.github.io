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

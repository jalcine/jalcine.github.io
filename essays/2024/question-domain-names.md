---
title: "A Question on Domain Names in the IndieWeb"
layout: essay.html.njk
tags: essay
date: 2024-06-11
audio: 
    - src: question-domain-names.mp3
      type: audio/mpeg
    - src: question-domain-names.opus
      type: audio/opus
---
One tenant[^3] of the IndieWeb is the notion that [your URL is your canonical identity][1] online. This works well enough for folks if you'd 
like to have multiple identities, be it to separate work from life or more pointedly, [if you're plural](https://www.pluralpride.com/). Domain names 
have an explicit cost if you're opting for a vanity address, like my current one running at USD$35 per 
year. [As a requirement to registration](https://webmasters.stackexchange.com/questions/49107/registering-a-domain-without-an-email-address), you'd need to provide organizations like ICANN some means of physical
and digital contact information. That's conventionally e-mail for the latter half[^2]. You can add on WHOIS privacy, which I do, 
and with DNSimple, that's [free](https://support.dnsimple.com/articles/whois-privacy/). There's a note on the IndieWeb wiki that mentions the low cost of domain names and it's 
_always_ struck me as a misplaced sentiment towards folks who don't want to (or want to have to) buy a domain name to have a presence online. 
For some time now, this _hasn't_ been a requirement and has enabled a wide range of people to join the Web and contribute
to the general Internet culture in ways I'm confident people twenty years ago (or thirty!) couldn't have imagined. 
A lot of activism since the turn of the millennium, especially from [various people of color in more riskier
situations](https://bookshop.org/p/books/hashtagactivism-networks-of-race-and-gender-justice-sarah-j-jackson/13050736),
could have easily been stalled, having to worry about domain name registration, if not snuffed out. There's also [the community of folks who
existed gleefully](https://www.wired.com/story/black-twitter-oral-history-part-iii-getting-through/) without registering one and advanced what Internet culture looks like today. As these are both people I want to remain connected with, this bushel of "propagation-in-1800-seconds" thorns rears its head a lot.

The act of domain name registration as a identity requirement hasn't stopped people from joining the IndieWeb, though.
[micro.blog](https://micro.blog/) has a community that's a mix of paying users who have their blogs hosted by that team and non-paying users 
that are there to engage with the community by providing feeds from their externally hosted sites, which enables a free user to still 
interact as a full member of the platform. The only constraints on that interoperability are based on what level of information 
your feeds provide and micro.blog's ability to process that information. This enables a level of flexibility over how to _address_ oneself. 
But the wall is **still cost**. It's seemingly unavoidable, as the commodification of _everything_ requires the exchange of goods for _anything_.

With this context set, I'd note that this post was mainly inspired as [I'm working on a project](https://indieweb.org/Sele) meant to enable a form of authentication[^1] that's controllable by one's website. The roadblock I've hit is in determining _what entry-point_ is viable enough for people of any position (which increases the need to reduce the barrier to entry). Reading the IndieWeb's wiki of thoughts (which I wish had clearer attribution of who wrote each part), there's a set of questions with [valid questions and statements with answers.](https://indieweb.org/Why_web_sign-in#Why_not_email) However, what sticks to me is how insular these answers can be when I attempt to hold them in my mind and bring them to non-development circles. The fact that it can take minutes to buy a domain name _doesn't mean_ that its value is immediately recouped or immediately realized. With the advent of "one-click" services from domain name registrars and web hosting services alike (DNSimple and DigitalOcean, which I use respectively, both support this), the need to understand zone propagation, CNAMEs and the like are less necessary. But the IndieWeb does _not_ have these facilities for people as an on-ramp. And the likelihood of people joining the IndieWeb that _do_ have an understanding of these components of the Internet is high, taking a cursory glance of [the informal list of people who engage with it](https://indieweb.org/chat-names) (by examining their place of work and interests of a random(-ish) sample of 30 people from that list).

What am I suggesting? Frankly, nothing _immediately_. As mentioned before, because the first law of thermodynamics (or more accurately, because of the capitalistic need to make _anything_ into a commodity), it's unlikely that we'd see registrars slinging out free apex domain names to people looking to build a little place for themselves online. An additional example of the nature of capitalism impacting how we can leverage open standards is the very clear difficulty of [maintaining e-mail in a self-hosted fashion](https://blog.lopp.net/death-of-decentralized-email/). It'd be dangerous to ignore this for domain names (more specifically, for personal websites) as we'd know that the ability to control a domain name is tantamount to controlling one's ability to be reachable over the Internet. We've seen this with e-mail and phone numbers but our _explicit canonicalization of domain names_, while extremely convenient in Anglo-centric spaces and trained into millions (if not billions) of people, can easily be taken from people, just as renters have become even more prone to [losing homes due to non-payment](https://apnews.com/article/evictions-homelessness-affordable-housing-landlords-rental-assistance-dc4a03864011334538f82d2f404d2afb). If domain names, the front door to our digital homes, are _that unstable_ to those who may not be as monied as others, what do we do as people making things that are intended to be social do? Are they then forced to be in the digital serf realm? Aren’t _we all_ in that realm if we’re not our own ISPs?

[1]: https://indieweb.org/URL_design#Why
[^1]: It'll also handle a means of authorization &mdash; effectively an OAuth2 provider, if you scan the Wiki.
[^2]: I haven't found much information about getting a domain name without an e-mail address &mdash; would love a
    resource on this!
[^3]: [An eagle eye reader](https://lobste.rs/s/bjjlu2/question_on_domain_names_indieweb#c_5yskuo) caught this word &mdash; a bit of a spoiler of how I was intended to close this post! At the end of the day, it's no to landlords.

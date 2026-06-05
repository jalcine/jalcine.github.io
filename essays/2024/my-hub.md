---
layout: "essay.html.njk"
tags: "essay"
title: "Making A Place for My Reading and Research"
date: 2024-07-15 11:00:00 -05:00
atUri: "at://did:plc:e2ctbutx6kya6si4if5ngjmm/site.standard.document/3mnivfaolyz2g"
---
I read [quite][1] a [bit][2]. I like talking and taking notes about what I read, what I'd want to read and build lists
of this so I can refer to it later. I mentioned in [a previous newsletter entry][3] about the admiration I had for both
[Mandy Brown][4]'s and [Jessamyn West][5]'s approaches to showing what they're reading and their thoughts on it[^1].
Last year, I read [about twenty books][6], many of which I can't help but mention[^2] whenever they seem relevant. If
books serve as a way to guide people to (or away from) an idea, then I have a yearn to see what more I could learn. With
the Internet, books are a bit easier to find &mdash; digital borrowing services like [Hoopla][7] and [Libro.fm][8] make
it easier to get them and immerse yourself in an audio-visual experience I find more captivating than video. I read
[Poverty, by America][9] in this fashion and the narration made the heavy points hit a lot harder than I was hoping for
(and made the sweet points stick closer to my heart).

I'm not _that_ choosy about the medium I find books in. I have a preference for digital books because it makes it easier
for me to cross-reference my notes and my handwriting is not improving[^3]. I also lean on my local library to get some
physical books when I find myself wanting books I can't get online or finding myself itching for a physical read without
having to buy it. Again, I'm not choosy &mdash; I take it how I can; it's _a great age_ to be a reader. Being able
to pick up my eReader, devour some pages, pop onto my laptop, sync those notes into Calibre and link that into my "Book
Notes" folder in Obsidian is something I find that keeps me eager to go back and do it all over again.

But this is all locked up on my computer. I initially considered investing more in how I use [Bookwyrm][10] to update
notes as well as looking at fixing my integration to something like Goodreads[^4]. There's also the rising star,
StoryGraph, that I don't use enough[^5]. What I don't want to do is have to manage three different profiles - in fact, I
want to get to a point where I don't even check them. One could lean into something like [POSSE][11] but that makes me
still beholden to these platforms for discovery and connectivity with my friends. That's something that's falling apart,
especially [with Goodreads][12]. StoryGraph also doesn't seem immediately interested in [building out a third-party ecosystem][13]
as they've focused on building out the core product. The only option that seems to be completely open, has a database
that's freely accessible and has some social functionality is the offering from [OpenLibrary][16]. Lots of places but
all lacking in some way, either in community, data or access. I ended catching the same book-tool-I-must-make bug that [Wendy
Liu had with her own book tracking system][14] because I began outlining what I wanted for myself.

Another thing that I've realized is that I _want to write more_ about what I'm reading. It's not enough to just read as
that information remains with me. In this online space, I find it more necessary to drive folks towards longer form
content. That kind of content inherently goes against the short-form formats that drive the semi-noxious loop we find
with social media[^6]. At this stage, there's some things that I clearly do want and things I don't. This is enough for
me to begin experimenting with what I do want to have out there. Here's when I fire up Obsidian to begin planning.

## The Book Thing .. App .. Site? 

The thing about this is that I'm _not_ going to try to make this work for many people. It's optimized to my particular
reading flow which entails:

* Reading digital books with [KOReader](https://koreader.rocks/), synchronized with [Calibre](https://calibre-ebook.com)
* Listening to books from [Libro.fm][8] or [Playbook][15]
* Physical books that I'm reading, either ones I borrow or own.

I also need to be able to do the following:

* View all of the notes I've collected for a book (or link)
* See markers in the material that I've made (as highlights, simple bookmarks, etc)
* Full text search of the content I've produced (not of the material themselves)

This is enough for me to begin sketching out what the core bits of the application should look like. I've skipped
writing any actual logic and decided to mock out a lot of it[^7]. You can check out [the source code][17]; I haven't
yet focused on making automated builds for it.

<figure>
    <img src="/images/my-hub-toni.png" alt=""/>
    <figcaption>It's rough looking and needs some TLC but the gist is there.</figcaption>
</figure>

The core of this is pretty simple and it's evidence that I immediately got carried away with defining the guts.
Initially, I started with focusing on how to represent a book and information associated to it. After a stroll outside,
I came back to realize that I could effectively do the same for links on the Web (and beyond)[^9].

The interface is extremely rough for now as I'm focusing on making the guts correct but I'm open to ideas 
on how to make it look _right_. I'm extremely tempted to make it such that people can make their own interfaces 
but this isn't Hypercard. What I'm focusing on is making the storage of this as flat as possible so that applications
that use its core library can work seamlessly. I'm yo-yoing on doing something to how Neovim handles plugins or 
bringing in a Lua and JavaScript interpreter to allow for extensibility that way.

Feel free to shoot thoughts over to me via e-mail or social; this is what I'll be working on this week!

[1]: https://www.goodreads.com/user/show/11273359-jacky
[2]: https://bookwyrm.social/user/jacky
[3]: https://buttondown.email/jackyalcine/archive/good-news-and-musings-around-a-rapidly-changing/
[4]: https://aworkinglibrary.com/about/
[5]: https://jessamyn.info/
[6]: https://www.goodreads.com/user_challenges/43447563
[7]: https://www.hoopladigital.com/
[8]: https://libro.fm/
[9]: https://bookshop.org/p/books/poverty-by-america-matthew-desmond/21003293?ean=9780593678541
[10]: https://bookwyrm.social/
[11]: https://indieweb.org/posse
[12]: https://indieweb.org/Goodreads#API_for_Goodreads
[13]: https://roadmap.thestorygraph.com/features/posts/an-api
[14]: https://github.com/dellsystem/bookmarker
[15]: https://github.com/Goodwy/playbook
[16]: https://openlibrary.org/people/jackyalcine
[17]: https://git.sr.ht/~jacky/livtet
[18]: https://jacky.wtf/projects/livtet
[19]: https://datatracker.ietf.org/doc/html/rfc3986
[20]: https://datatracker.ietf.org/doc/html/rfc3987
[^1]: Mandy's library site is at <https://aworkinglibrary.com> and Jessamyn's at <https://jessamyn.info/booklist>.
[^2]: Read [Ethan Marcotte's book](https://ethanmarcotte.com/wrote/you-deserve-a-tech-union-launch/)! And [Elizabeth Anderson's](https://press.princeton.edu/books/hardcover/9780691176512/private-government)! You have to check out [Jeannette McCurdy's memoir](https://libro.fm/audiobooks/9781797147949-i-m-glad-my-mom-died). You can
    skip Jonathan Haidt's book though.
[^3]: I've been practicing but I also don't care when I'm writing personal notes which seems to undo all of that
    practice.
[^4]: I still have a _ton_ of friends who use Goodreads and they contribute to how I find new things to read, especially
    outside of my bubble of things that I normally do read.
[^5]: [My profile](https://app.thestorygraph.com/profile/jackyalcine) is old enough that it has books that I had to _re-buy_ since moving to Florida.
[^6]: There's legitimate benefits to microblogging; in some cases, it's a form of chatting that's linkable to the public.
    It also removes a barrier for folks to have an explicit website to engage with content. One can also add that
    microblogging provides a way to capture snippets of text and the like that keeps the spirit of conventional blogging
    &mdash; the act of sharing information and notes with people - alive. There's few places that focus _solely_ on that, one
    of them nominally being <https://micro.blog>. However, my rub is around how we are still stuck on relying on _hubs_ or
    _planets_ that, while good for discovery, have little transparency into moderation and are still subject to the same
    problems that other silos have.
[^7]: In thinking about this, I could _easily_ extend this to match other media formats. I immediately avoided
    considering that because of the common trap of trying to build a "omni" device. I also do think that for things like
    music, photography and other forms of art, more care has to be held with how one would go about curating that. The
    digital equivalent of a mixtape or scrapbook; that's a concept for a _whole_ different day.
[^8]: I only have it for Linux and Android. Hit me up if you want to help me build it for macOS or Windows
    &mdash; I don't own any of those devices or have access to those operating systems. I don't think I'll be making
    this work for the Web on its own. At least not yet, doing that puts into a different domain of responsibility that I
    don't want to deal with.
[^9]: I am partially _obsessed_ with URNs. Some folks like to waffle about the difference between URIs, URNs and IRIs.
    If you don't know what they are - it doesn't matter. If you're curious, read the spec on [URIs][19] and [IRIs][20].
    The _biggest_ thing is that IRIs effectively allow us to _escape_ HTTP as a transport layer. This makes it easier to
    have transparent switching from the restrictions of HTTP and jump to something like [Veilid](https://veilid.com/),
    [Tor](https://www.torproject.org/) or a custom transparent layer private to your community!

---
layout: weeknote.html.njk
date: 2024-08-19T17:00:00.000Z
tags: weeknote
description: >
    Finished two fiction books I've been slowly going through, nice progress with Livtet and some
    more thoughts on what I'm currently reading.
---
Per the usual code, I was back to my books and working on [Livtet][]. I managed to advance to the
later stages of an interview process and I'm hoping for good news by the end of the month. There's
also a potential of me picking up contract work. So far, August has been busy with reading and
studying but there's growth and markers towards a bright September.

# Reading
I'm still working on my abolitionist list for this month but I took some time to pick up some books
I had hanging and hadn't finished yet.

## [Harlem Shuffle][harlem_shuffle]
This book is one I've been reading on and off; not because I didn't enjoy it - I really did - but
because I didn't want it to end. Big Mike's son has issue after issue crop up in his way of aiming
to make a honest living. I got the audiobook to go with my borrowed digital copy and it felt like
listening to a radio show; making the segmenting of the read even better. It takes place in a
historically fictional Harlem, talking about the development of the neighborhood and New York City in the
1960s. From riots to robberies, heists to heartache, this book is one I'll give to folks who are curious
about New York City.

## [You Exist Too Much][yetm]
A gripping tale of a Palestinian-American that's wrestling with love addiction[^1], family drama and
trauma and having to come to age in themselves. I wish I read this sooner and it's another book I
didn't want to end. There were _so many_ moments where I yelled at the book saying "GIRL NO" or
"DUMP HIM"; I saw myself in some of these moments. The nature of being a Palestinian-American isn't
hidden as the evolving genocidal nature of Israel is highlighted in the book. The nature of folks
advocating of violence to these people unintentionally, with notions of a "two-state solution".
Those events have reverberations in how the main character sees themselves and I'm glad that folks
are writing humanizing material like this.

## [Prisons By Any Other Name][pbaon]
This book is gradually getter harder and harder to read. So far, the book's discussed the level of
violence waged by the state and private institutions against mothers who don't fit the "model" of an
ideal parent. It also mentions the nature of the foster care system and its history as a
religious-now-state sponsored child kidnapping program meant to force Native folks into "civil
conformity". I'm currently on the chapter around the evolution of community policing creating "open
air prisons". This chapter has a focus in New York City, which is my home city. The description of
how the helicoptering policing of both cops and good-intention neighbors reminds me _so much_ of
my hometown. These kind of stories are grounded as the authors make the connection between [community
policing and the community murdering of Native people and slave capture committees][2]. This book is
definitely one that'll remain in my library of recommendations and I'm hoping that we won't need an
expanded version anytime soon.

I didn't expect to finish the book yesterday but I managed to. The last chapter on imagining
alternatives reminds me so much of a quote attributed to Sadiya Hartman, that one of the greatest
crimes of oppression is how throughoutly it's policed our ability to imagine[^1].

## [The Trinity of Fundamentals][ttof]
I'm reading this as part of the book club driven by [Millennials are Killing Capitalism][makc]. I
got this book last year when I went to 1804 Books's hub, the People's Forum, as well as a bunch of
other books. I did not expect to be thrusted so quickly into a world that was ripe with vigor and
care.

For context, this book was smuggled out of the Zionist prisons set up in Palestine. It took 54
capsules of physical text to get this story, written over nine years. The way the book was written,
I'm shocked that it hasn't covered things like the New York Times bestseller list. It's a gripping
tale of the resistance development against occupation. It starts on a campus ground, showing the
dynamicsm of the youth to learn and hold each other in political struggle while their homeland is
being encroached by violence pushed on by the Reagen administration and the Isreali occupation. I'm
doing my best not to run through this book because it's a page turner but it is _hard_.

## [Git Cute][git_cute]
I can't find much to say about this book; and in this case, this isn't necessarily a good thing. I
don't want to speak ill of the author. I will say that I bought this book some time ago in support
of them and in curiosity of what our experiences becoming a senior software engineer would look
like. What I got from the book was something that, I think, you could find by examining software
engineering culture on places like YouTube or Twitter. In fact, the book opens up with quite a bit
about the nature of the marketing nature of software engineering (building a sort-of brand, for
example). I can't say this is something I'd recommend.

# Writing
I spent more time working on code this week &mdash; not much out of the blog. I did write about what
I ended up working on; [introducing an extension system to Livtet using Lua][1]. It was really rewarding!

# Coding
As mentioned above, I got Lua working with Livtet. After writing that, I did a bit
more tinkering to add in a stricter form for the system. The signatures for the API
is a bit different but still has the same result. This was using another library,
[tealr][], that also allows me to vendor a typed version of Lua via [Teal][]. The difference
is minimal but is more organized:

```diff
local function items()
+ 	local user_profile = livtet.options:get("user_profile_url")
- 	local user_profile = livtet.options("user_profile_url")
	local book_items = {}
	for shelf, url in pairs(USER_URLS) do
		local full_request_url = user_profile .. url
+		local feed_index = livtet.http:fetch_json(full_request_url)
-		local feed_index = livtet.fetch_json(full_request_url)
		if feed_index ~= nil then
			local first_url = feed_index["first"]
			if first_url ~= nil then
				book_items[shelf] = fetch_all_from_feed(first_url)
			end
		end
	end

	local books = {}

	for shelf, book_list in pairs(book_items) do
		for _, book_info in pairs(book_list) do
			local book = expand_book(book_info)
			table.insert(books, book)
		end
	end

	return books
end
```

I have yet to swap the use of things to use Teal as I'm still working on changing some things but
I'm eager to report back on it.

# Seeing
I spent a lot of time in my little garden. Here's some Jade that's been sprawling out more and more
since I've brought it outside. I didn't realize how _quickly_ and _voluminous_ Jade could grow to be.

[1]: /essays/2024/using-lua-with-livtet/
[2]: https://bookwyrm.social/user/jacky/quotation/5151393#anchor-5151393
[tealr]: https://docs.rs/tealr/latest/tealr/
[teal]:  https://github.com/teal-language/tl
[livtet]: /projects/livtet/
[git_cute]: https://openlibrary.org/books/OL36835796M/Git_Cute
[harlem_shuffle]: https://www.ethicalbooksearch.com/us/books/m/ol:OL25483078W-ol:OL24151553W-is:9780708899472/harlem-shuffle-colson-whitehead
[yetm]: https://openlibrary.org/books/OL30176471M/You_Exist_Too_Much
[pbaon]: https://openlibrary.org/books/OL32208260M/Prison_by_Any_Other_Name
[ttof]: https://1804books.com/products/the-trinity-of-fundamentals
[makc]: https://millennialsarekillingcapitalism.libsyn.com/
[^1]: I didn't realize that this is a [_real thing_](https://en.wikipedia.org/wiki/Love_addiction).
[^2]: I have this quote on a print-out in my home but I can't remember exactly where I saw it. I
    found one place lined on [Goodreads](https://www.goodreads.com/quotes/11360962-so-much-of-the-work-of-oppression-is-policing-the),
    but I'd love to find the _actual_ source. I found [this
    video](https://www.youtube.com/watch?v=xGS5aP5Vi7g) that might be it.

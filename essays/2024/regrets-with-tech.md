---
layout: essay.html.njk
byline: "A semi-biographical piece of reflection about being in tech, how and why I got in and my growing want to eject"
date: 2024-06-29
title: "Do I Regret Focusing on 'Just Being' A Software Engineer?"
og:
    image: /images/regrets-with-tech-clef.jpg
tags: essay
audio: 
    - src: regret-with-tech.mp3
      type: audio/mpeg
    - src: regret-with-tech.opus
      type: audio/opus
---

<figure>
    <img src="/images/regret-with-tech-betamax.png" 
         alt="A Betmax inflatable from the movie 'Big Hero 6' having one of its hands hugged by me." />
    <figcaption>
        How else to start off a post about regret and tech with a human hugging an anthropomorphic inflatable from
        a industry movie that's based on a hybrid of San Francisco and Tokyo?
    </figcaption>
</figure>

## Level setting

I didn't imagine that I would have _a want_ to exit "tech". I used to know someone who's more of a technophobe that they'd
care to admit and with good reason, in this landscape[^1]. At times, it felt a bit over-the-top when they actively clumped 
anyone working in the more "branded" roles as equal collaborators to CEOs and board members, the direct enforcers of 
harm in the industry. If your good friends are all in it and are "retire-at-40" wealthy from it, as it was for them, 
I could see why some mixture of resentment and fear would grow. It's misplaced of a target, of course, but the 
development makes sense either way. The software engineering industry is quite complex[^2] in terms of how it handles 
hiring, pay and everything dealing with human management. Expanding this for _all workers in tech_ that hold positions 
of lower management and below, it's clear how that explicitly hierarchical systems can rarely _work_ in favor of 
people at the bottom and operate to optimize profit and _perceived_ company health over everything else. 
I use "_perceived_" because companies can and have cumulatively laid off thousands of workers[^3] while parading 
in the tech press about [new products][28], [profits swelling][29] and [more ventures going forward][30] (where did that money 
come from if a quarter ago things were dire?) We're told, those who are "lucky" to remain, that you are the 
_few chosen_ to power forward. However, this internal marketing line is beginning to wear and folks have begun 
looking for other ways to define what it does mean to be a worker and finding direct means of securing 
stability at work[^4].

This approach works when you're _at work_. Or have a place _of work_ to be at. Syndicalism is a fancy word to say "ayo you work
and produce value? hmm you don't own your output? hold it _back_ then!" &mdash; wobbly wobbly in the house. A 
semi-academic way to define it, thanks to Wikipedia, would be an approach adapted from the French to get workers 
together and push their objectives by withholding the one thing CEOs, boards and vice presidents have resigned
themselves from engaging in: doing the work themselves _at the pay_ of the workers below them. This concept is 
something I had to introduce to myself, through reading, talking to workers and interrogating what it is that we were building. 
American education outlets aggressively refrain from any sort of direct literature that points to forms of direct action &mdash;
the closest I can think of was the Montgomery Bus boycott but even the exclusion of how community activism _kept_
people afloat would have been too inspirational for the youth to understand the State is the source of lack.
But before I get deeper into this, I need to explain my alignment in terms of activism and community engagement.

## Cue the Sepia Filter of ... 2012?

A decade ago, I involved myself as a volunteer with the [New York Justice League][1]. I had no concrete ideas of what it'd 
involve me in. I was _also_ using Ubuntu for the first time in my life. It grew from "oh ha ha, I got Firefox working"
to the _legitimate_ idea of being able to work on something that you also used (and relied on). This was easy for me to grasp 
as a kid whose family couldn't afford a license from Microsoft for "the permission" to use the computer they paid 
for already[^5]. This was even worse in the case of [Cupertino-designed, forcibly-in-China built][2] machines. These undertones 
are thinly ignored when you see a lot of anecdotes of peoples' reflection into the industry. The first machine my 
family got was a HP Compaq machine (with the cowprint and everything) running Windows 98 - around 2004. I managed to 
figure out how to update it at the library and asked for blank CDs there[^6]. Fast forward back to the time 
with NYJL, I ended up saving up from a contract job enough to get a Dell PC, ones I've read online that were 
serviceable since the ability to easily repair extended the lifespan of the device (and reduced the perceived 
switching cost)[^7]. There's some personal stuff that I'm refraining from getting into because it still has a
lingering impact on my life but a calamity of sorts kept me inside. Being inside kept me on the computer &mdash; a lot.
I worked on random projects, namely [a neural net project][9] and a [speech recognition training tool][10] using [PocketSphinx][31]
for Ubuntu. The latter project got pretty far and was usable, for a first-time C++ programmer. It wasn't easy and it
definitely influenced how I looked at code for those first years. I didn't have the formal instruction others 
were getting about networking and the like &mdash; I met folks online like [Paul][11] who put me onto the concepts of [MOTU][32] and 
how packaging as a concept work for open source software, extremely different from the box-CD era of the such.

This allowed me to eventually apply and find a job at Shutterstock, my first "serious" tech job. 
I met a _lot_ of people, experienced the "wow, you're not even 25!" phases of being the space and got a chance to 
really understand why people didn't like waterfall development. 

I grew more in touch with other Black people in the tech space - folks who had more formal training and 
development. A few people that remain embedded in my mind are [Kyle][3] and [Mary][4]. Kyle, I met through his 
project, [Black Techies][5] and that enabled me to have way more fun with the things I was only beginning to play with.
I learned and become obsessed with digital security thanks to a good friend, [Matt][6] who's both taught me and many
others what does it mean to be safe under government surveillance and from other malicious actors with his work at
[CryptoHarlem][7] - a well known hub [in the heart of Harlem][8] consistently putting people of color onto game.

<figure>
    <video controls>
        <source src="/files/videos/demo-of-mulkar.webm">
    </video>
    <figcaption>
        A decade ago, using the <a href="https://en.wikipedia.org/wiki/Leap_Motion">LeapMotion</a>, 
        I tied together some info from Wikipedia to make a "hands-free" experience.
    </figcaption>
</figure>
<figure>
    <img src="/images/regrets-with-tech-tumblr.png" alt="A Tumblr engineer and two Black folks sitting by a table
    talking about code.">
    <figcaption>This wasn't staged but boy did I try not to look at the photographer (I think it was Kyle).</figcaption>
</figure>

Then came [the police murder][12]. The knowledge of the violence of New York City's local military[^8] is known to folks
who live under its constant surveillance. My neighborhood in Brooklyn and the others I frequent in East New York, Canarsie and
Flatbush all know that if police are around, to act as invisible and "cool" as possible, as to not agitate the people
with the guns. Sadly, this is _never_ enough to stop the centuries-old American tradition of lynching (in all of the forms it
took). A protest took over New York City, from Harlem, across the Brooklyn Bridge to the edges of Brooklyn, into
neighborhoods folks from out of town where suggested to not be out in at night. This was in protest of the grand jury's 
inability to indict the cowardice of Daniel Pantaleo, the police officer who killed Eric Garner with his 
own hands[^9]. We walked, marched and yelled for hours and for miles. We were in Times Square, clogging up stores, 
on the bridge stopping traffic. All to have people understand that an injury to one is a blow to everyone.

<figure>
    <img src="/images/regret-with-tech-protest.png" alt="" />
    <img src="/images/regret-with-tech-protest2.png" alt="" />
    <figcaption>Fun fact: that officer to the far right ended up following up all the way to Brooklyn. Dude was working
    to get his overtime.</figcaption>
</figure>

I was held by police in Brooklyn for "obstructing traffic", willing to be taken back to One Police Plaza 
and released thanks to a ACLU advocate. Unfortunately, I didn't report back in time for work as I was 
held longer (I was old enough for them to not have to call my parents and I didn't take off time from work). 
It didn't help that I also found it difficult at work to be taken more seriously on project proposals - advocacy 
of self wasn't something I had at 20. Wrangling that and hyper-local events made it extremely difficult for me to keep 
things going. I was getting really sad given how much more this job helped out at home (and my mom's new 
confidence in me being able to _do something_ with my life). Missing three days of work was the final
nail to have my employment at Shutterstock terminated. It didn't matter to my manager's manager what was going on 
just below in the streets. And that began my life in the software industry - figuring how to balance being true to 
myself, not having any of the certificates or clearances needed (at the time) to get through a door and 
wanting to use something I enjoyed a lot to push for advocacy. 

<figure>
    <img src="/images/regret-with-tech-sstk.png" alt="" />
    <figcaption>
        My termination notice from Shutterstock. This is what I opened my e-mail to after being released and
        getting home. Should I have used PTO?
    </figcaption>
</figure>

## Leaping into the Future
The "thing" people might recognize my name (if they do) is the situation that happened with Google Photos and [their
world-class image recognition system labelling a friend of mine as a gorilla][13]. I have many issues with how this went
down; from the number of people who kept assuming we were a couple, assuming that we _both_ were tagged or that it was
just one photo[^10]. I don't know what happened with it, but when I was in California, some film crew working for Google
had me doing a bit of a conversation about it[^11]. Either way, people immediately became _less_ concerned on my
technical ability and _more_ concerned on how this made me feel. I can't say I was mad at being flown out to Austin
for the first time [to attend a conference on the matter][33]. I had a lot of firsts, because of tech. My mother suggested 
I sue the multinational; said multinational interviewed me (and rejected me after the first screen). 

<figure>
    <video autoplay loop poster="/images/regret-with-tech-clef.jpg">
        <source src="/files/videos/welcome-to-clef.mp4" type="video/mp4" />
    </video>
    <figcaption>
        Getting surprised at the airport was amazing and unexpected.
    </figcaption>
</figure>

One fledging startup in California did [take a chance on me][34] and that continued the canonical time of my career in 
tech and my time in advocacy and community work.

<figure>
    <img src="/images/regret-with-tech-sxsw.png" alt="" />
    <figcaption>
        Some guy in the answer at this moment was asking a semi-stupid (thinly racist) question and I 
        am routinely thankful that I had people on the panel who were more coy than me to answer those questions.
        I would have hurt his feelings (outside of correcting them).
    </figcaption>
</figure>

I'll zoom through the stuff I spent time with in the Bay, from initial interactions with [Peoples' Breakfast][15] in its early
years, [door knocking for Catt Brooks][14], joining and participating with the civic hacktivist group [OpenOakland][16],
helping random vendors at the Ashby flea market support mobile payments to reduce the on-hand cash handling as they
served food[^12] and other things that helped me embed myself into the community I saw a future in. 

<figure>
    <img src="/images/regret-with-tech-town.jpg" alt="" />
    <figcaption>This was one of the first serious talks with folks about tech advocacy and education I had!</figcaption>
</figure>

I _can't_ go without mentioning the project [Amèlie][35], [Catt][36] and I worked on being [GoodForPoC][37], an attempt to bring
visibility to a problem that tech is staunchly working to not correct: its obsession with 
imperialistic white supremacist patriarchy within the industry. We didn't use that phrase but it clicks now, 
after [some study of bell hooks][38].

<figure>
    <img src="/images/regret-with-tech-g4poc.jpg" alt="" />
    <img src="/images/regret-with-tech-g4poc2.jpg" alt="" />
</figure>

I found ways, thanks to locals, how to let work support community advocacy, like taking days to 
volunteer with the Oakland Unified School District for read-ins for Black History Month to expose kids to 
books I was fortunate to have in my classrooms and volunteering with folks to serve as a 
judge for coding competitions with the youth and give them a persistent line of mentorship that they could 
reach out to as they continued playing with software on the side, as I had when I was growing up.

<figure>
    <img src="/images/regret-with-tech-bgc.jpg" alt="" />
    <img src="/images/regret-with-tech-school.png" alt="" />
    <figcaption>I still have that book, Trickers, with me! I brought it from home to share with them.</figcaption>
</figure>

There's a lot of _other_ things I was indirectly involved with. Things like [Interact][43][^16] led me to meet more folks in the
industry and build different relationships, not even based on identity but around what our passions were aligned with.
It didn't have to identical or even symmetrical and folks were down for each other.

<figure>
    <img src="/images/regret-with-tech-tahoe.png" alt="" />
    <img src="/images/regret-with-tech-tahoe2.jpg" alt="" />
    <img src="/images/regret-with-tech-tahoe3.jpg" alt="" />
    <figcaption>Pictured: a few venture capitalists, founders, executives, artists and senior engineers! And Jacky. By now, you've
    noticed that I love me a good flat top, ha.</figcaption>
</figure>

I have to make one thing clear too: _none_ of this would have been possible without the people who took the time to hear me
out, find common ground and look towards what can happen next. I'm consistently appreciative and a defender of people
working in community towards common goals: **only from working from below can concrete change occur** and I believe that
I've worked and touched things that've contributed to the such.

## The Bits and Bytes of Organizing
By the time I got to Glitch, the idea of organizing existed solely in the streets to me. It involved knocking on doors,
doing interviews with active listening, reporting back to folks about where things are headed, agitating folks around
shared values and pushing folks towards action. I'm extremely happy to have spent time with them and CWA to help form a
union at Glitch, despite the uphill fucking battle it took.

<figure>
    <img src="/images/regret-with-tech-glitch.jpg" alt="" />
    <figcaption>
        If there's one thing about me: my t-shirts will not be a billboard for capitalism. <br />
        Apple zealots: the phone was a loan!
    </figcaption>
</figure>

At this point, my stances on politics weren't hidden; I wasn't a fan of
capitalism and the tech industry being the brainchild of such an economic beast meant I either had to swallow my
thoughts or yell them loud enough to push away those who were more ardent supporters of it. Today, this has led to a
dramatic reconfiguration of the community of folks I have around me in tech. It used to be with folks you'd recognize,
some at Microsoft, from Twitter and many other places. When Dorsey became more open with his alignment with passive
white supremacy - a now-common underbelly of most tech executives from [Sam Altman][18] to [Chris Best testing the bounds][17],
I held to the same roots I came to nurture when I developed myself into this space: an anti-capitalist,
anti-white-supremacist, anti-anything-that-reduces-the-movement-to-end-oppression (so anti-supremacism). I wasn't
expecting people to get it &mdash; as you can see now, my path into the space was marked with many actions that 
made clear what I was about and who I was for. I admire folks I've come to know like [Idalin][19] who, in my eye, remains some of
the few in the industry who's _authentically connected to the struggle_ off-rip and refuses to compromise that for access to
whiteness (and in turn, alignment with white supremacy in a double-speak nature) in this industry. She's taken a more
practical approach than I, which had inspired me to do more studying and research.

Learning about the activist history of Oakland, where I used to live in the Lower Bottoms, how the West Oakland BART
station was created after [razing down dozens of homes in the area][39] that came from the migration period was a
humbling and stark experience. That led to a yo-yo when I went back to Brooklyn to visit family to learn about the
history of the S.L.A.V.E theatres out there[^13]. Being able to tie the geographical plights inflicted by industry on
people across 2,700 miles was the final pin in my mind: **people need to work together to get what they need and people have to be
aligned on objectives lest infighting and corruption destroy it all**.

I moved more towards labor organizing in research - only scraping the surface as I still had to focus on balancing work
and staying engaged with community. Huey Newton made the point that political education is vital but education without
practice is meaningless, in ["Revolutionary Suicide"][40]. I tie this with James Baldwin's notice of the professional managerial 
class' inability to use what resources and access they have to work to help people, in ["The Fire Next Time"][41],
and instead of holding rent parties, they throw dinner parties (or in its modern form, cruises or voyeuristic 
trips to tourism-riddled territories). I spent more time trying to figure out how to help people reconfigure spaces in
companies to build power. At Lyft, that was via employee resource group efforts. It was great at building
comrades but horrible at building power since it was purely at the whim of executives.

<figure>
    <img src="/images/regret-with-tech-lyft.jpg" alt="" />
    <figcaption>
       This mural got tons of traction! 
    </figcaption>
</figure>


## Today-ish

By this point, there's less for me to say that you wouldn't know if you've been following my Mastodon account. In short,
after Glitch and some other stops (like Nava which honed an interest and discovery of a civic technologist as a viable career
path), ended up at Code for America and that ended up ... [the way it did][20] with [a historic win][21]. I've been
bringing myself to more spaces around labor to develop more praxis from all of the theory we've been conjuring
up. But what does this mean in terms of a career in technology?

**I have no clue**. You see, the biggest names in the industry are aggressively focusing on making it very difficult to
either introduce or approach anything that would promote an open society. Apple's inability to support third-party app
stores without legal pressure demonstrates what we see in industry and in history. The app store itself wasn't in the
roadmap for Jobs' vision of the iPhone &mdash; and he initially thought it was a bad idea until people - internally and
externally - had to pressure him to yield. That effort could have been spent on making so much more, if it wasn't run 
by someone like Jobs or in a non-capital obsessed way (Jobs was a salesman at the end of the day; that's a core 
component of what a CEO does), we could have seen a world where, perhaps, the iPhone wouldn't have been so expensive 
_and_ had support for progressive web applications out of the box[^14]. You can learn more about this 
in [Brian Merchant][22]'s [The One Device][23].

I'm looking for work (which is part of the reason why I'm giving my life story above to give folks a clearer image about
me) and [raising money][42] to stay housed as I do that. I probably wouldn't be in this situation if I didn't donate thousands
to the organizations I worked with over the years, or didn't have debt that restricts my ability to borrow and get back
on my feet. There's very little I can do about that now and I rarely regret that. My deeper regrets come from a sense of
feeling of not having done enough in the time I've spent. I could have fought harder for the discrimination case I
had on two former Facebook workers at Lyft (which was textbook but Lyft does not like talking about
race). If anything, each of these moments gave me more pointed stances on the concept of work and has taught me to 
expect nearly nothing from executives since their direct reports and _their_ managers have no focus 
on well-being of workers (outside of trying to prevent them from quitting and even _that_ is extremely thin). The goal
is to make money and nothing else. Fuck the [planet][24], [women][26], [children][25] &mdash; get more of it in [the bombs][27]. 
And that's just focusing on multinational companies like Microsoft, Google and Amazon; of which most of the tech leaders
obsessively form their organization (or fiefdom) around.

I don't know how much longer I can comfortably call myself a "technologist" when this is _what_ being a technologist is
today. And to play on an idea of separation of the "art from the artwork" while actively defending their organizations
(failing that, their outputs and indirectly their contributions) works to be a free agent of marketing for them. It's
similar to a private company opening up a non-profit to launder the _notion_ of doing good to build a moat of social
capital. How does one comfortably reconcile that?

**With money**. Enough of it to numb your heart and soul. The starting price is around $175,000 USD currently, it seems; around
$250,000 USD if you're an executive. But money will never be _enough_. We see how it turns people to demand more and more
(and more). It converts them into subversions of their stances (if they had any) and makes clear the role of celebrities
(even in our industry). Ideally, I'll land something that's enough to get me back on my feet. That's all
I need right now. Because the rest of my energy is going to be spent working on the same things that brought me in. So I
don't think I have regret for being a software engineer. But I do regret not working enough to pull more folks along in 
a productive way. But I can fix that now. 🤭

[1]: https://www.gatheringforjustice.org/justiceleaguenyc/
[2]: https://wiki.ubuntu.com/jackyalcine
[3]: https://www.linkedin.com/in/kylewanamaker
[4]: https://www.instagram.com/iammarypryor/
[5]: https://www.blackenterprise.com/black-techies-mlk-dream-code-hackathon/
[6]: https://www.fordfoundation.org/about/people/matt-mitchell/
[7]: https://en.wikipedia.org/wiki/CryptoHarlem
[8]: https://www.vice.com/en/article/59kq75/crypto-harlem-video-surveillance-of-black-community
[9]: https://launchpad.net/wintermute
[10]: https://launchpad.net/speechcontrol
[11]: https://pault.ag/
[12]: https://www.history.com/this-day-in-history/eric-garner-dies-nypd-chokehold
[13]: https://arstechnica.com/information-technology/2015/06/google-dev-apologizes-after-photos-app-tags-black-people-as-gorillas/
[14]: https://www.teenvogue.com/story/meet-cat-brooks-the-anti-police-brutality-activist-running-for-oakland-mayor
[15]: https://www.peoplesprograms.com/pbo
[16]: https://openoakland.org/
[17]: https://www.theatlantic.com/ideas/archive/2023/11/substack-extremism-nazi-white-supremacy-newsletters/676156/
[18]: https://www.newyorker.com/magazine/2016/10/10/sam-altmans-manifest-destiny
[19]: https://www.linkedin.com/in/idalinbobe
[20]: https://cfaworkersunited.com/stories/2023/08/31/code-for-america-lays-off-35-colleagues
[21]: https://cfaworkersunited.com/stories/2023/10/30/first-union-contract-ratified-at-code-for-america
[22]: https://en.wikipedia.org/wiki/Brian_Merchant
[23]: https://bookshop.org/p/books/the-one-device-the-secret-history-of-the-iphone-brian-merchant/114264
[24]: https://earth.org/the-green-dilemma-can-ai-fulfil-its-potential-without-harming-the-environment/
[25]: https://www.wired.com/story/generative-ai-images-child-sexual-abuse/
[26]: https://unesdoc.unesco.org/ark:/48223/pf0000387483
[27]: https://www.nature.com/articles/d41586-024-01029-0
[28]: https://blog.google/technology/ai/google-io-2024-100-announcements/
[29]: https://www.geekwire.com/2024/microsoft-results-beat-expectations-as-quarterly-profits-rise-20-to-nearly-22b/
[30]: https://www.aboutamazon.com/news/devices/amazon-ces-2024-announcements
[31]: https://github.com/cmusphinx/pocketsphinx
[32]: https://wiki.ubuntu.com/MOTU
[33]: https://schedule.sxsw.com/2016/events/event_PP53497
[34]: https://medium.com/@jackyalcine/new-job-who-dis-leaving-home-for-a-new-one-50c2c6255cef
[35]: https://www.amelie.is/
[36]: https://cattsmall.com/
[37]: https://github.com/GoodForPoC/GoodForPoC
[38]: https://www.youtube.com/watch?v=sUpY8PZlgV8
[39]: https://localwiki.org/oakland/Lower_Bottoms
[40]: https://en.wikipedia.org/wiki/Revolutionary_Suicide
[41]: https://en.wikipedia.org/wiki/The_Fire_Next_Time
[42]: https://www.gofundme.com/f/stay-housed-while-i-look-for-work
[43]: https://joininteract.com/
[^1]: Frankly, capitalism has made the _need_ of a phobia of what it produces and aims to sell as "useful". It's one of
    the few ways to remain unencumbered by marketing.
[^2]: Aren't you glad I didn't say _software engineer industrial complex_? We _love_ overused pithy phrases!
[^3]: Like Google, Microsoft and on a smaller scale, an NGO I worked at, Code for America and the company Glitch.
[^4]: This involves but hasn't been limited to the use of rights around organizing. You should start one at your job
    _especially_ when things are good (that's how you keep it good) and _especially_ when it's bad (that's when you have
    more things to agitate around to move to a better place, or at worst, get transparency into why things are bad).
[^5]: The license costs _more_ than the price of the second-handed PC we bought which was the line that kept my parents
    from getting the license key. They also didn't grok why money was needed for something you couldn't see (which is
    completely valid and how I feel about digital game leasing at times). I'm of the mind that Microsoft has done more 
    to neuter the advance of personal computing that Apple did with its gate-keeping. Apple _fought_ against it and 
    only was able to reach beyond the select folks who had the means to have the machines at home, who had access 
    to academic resources that granted that access and the like. My junior high school ramped down their computer 
    lab a year after I graduated and segregated the line for a private, for-profit charter school invited by the city.
[^6]: Support your local libraries and volunteer for the computer literacy programs if you have time on the weekends.
    You're doing work that people can't afford to pay for, especially in this increasingly digitized Western world.
[^7]: I think my mom still has this tower somewhere in the house, ha!
[^8]: Though it's for 2023, the police budget is moving towards _billions_ of dollars. That's more money that some
    countries have _on hand_. <https://council.nyc.gov/budget/wp-content/uploads/sites/54/2023/05/NYPD.pdf>
[^9]: He got fired, btw. <https://abcnews.go.com/US/nypd-officer-put-eric-garner-lethal-chokehold-loses/story?id=76683871>
[^10]: We were friends (and still are!), she was the only one tagged and it was in over 70 photos of here taking during
    a burst.
[^11]: They never released the footage externally: they said it was for some internal training. Eventually, said 
   training _must_ have failed because boy!
[^12]: If you know the Cameroonian food and the Ghanaian ginger juice, then you came at the right time!
[^13]: It's now called the [Black Lady Theatre](https://theblackladytheatre.com/) and it's a cultural hub for Black people in Crown Heights.
[^14]: Which was, ironically, was Jobs wanted to nudge folks towards even though the ecosystem wasn't ready, one of the rare times I'll agree with John Gruber.
[^16]: Interact was natural for me because it was less weird than [Peter Theil's business
    bootcamp](https://en.wikipedia.org/wiki/Thiel_Fellowship) and had people with honest conversations and thoughts on
    the world and tech. Also it cemented my perspective of the CEO of Cloudflare.

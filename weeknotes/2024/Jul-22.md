---
layout: weeknote.html.njk
date: 2024-07-23
tags: weeknote
---
Last week was pretty noisy; both in the world and locally. I hope you're able to find some time to yourself and some
ability to be in the community that'll keep you safe and grounded. I have a few calls this week for work and a potential
lead; still early but things are looking up. That said, I'm <a href="/work/">open to a new role</a> and eager to chat. I
was planning on releasing this yesterday but I got wrapped up with stuff.

## Reading

### [The Victorian Internet][1]
I'm biased in favor of expanding "world history" to include the lives for those who are rarely recorded and deemed as
more to be property of the wealthy. That said, I finished reading my copy of this book a few days ago. The book ended as
it began, a mix of praise of the ingenuity of entrepreneurship and the undying zeal for human connection. At least
that's how Standage reported it in repeating the recorded accounts of the time. I still can't help but notice a
similarity in how technology of that time mirrors that of today. For example, Standage makes the claim that "the
telegraph community was a meritocracy - it didn't matter who you were as long as you could send and receive messages
quickly - which was one of the reasons that women and children were readily admitted to the profession" but on the
following page highlights that once through the door when "a young operator had gained a foothold in a city office, he
or she could expect to be subjected to a humiliating induction ritual, known as salting, [where] ... the operator would
be sent bogus messages addressed to "L. E. Phant" or "Lynn C. Doyle" .. [that] the unwary beginner would be asked to
operate a wire with a particularly fast sender at the other end, who would start sending at a reasonable rate but then
gradually pick up the pace". I think the word meritocracy has rarely actually been deployed in a case where the
definition mirrors reality and this example shows that. Following that, Thomas Edison, the golden child of the electric
era, is praised for his ability to move quickly and grow. I think that, in reading this, I was expecting something that
was going to speak more to the _lives of people_ who were using and impacted by the (seemingly short) era of the
telegraph. Instead, I got mainly the wealthier class of folks and the floundering of such a system.

That aside, the mobilization of effort, the amount of capital required, the international efforts to have countries
agree on _how_ to send, protect and handle messages and the way that telegraphy warped (and evolved) the public self
hides something very lightly mentioned. Despite the sense of an erosion of borders and the melding of the "Old World
with the New World", telegraphy technology effectively _reinforced_ the need for building a nation-state in these times.
Who else had the fulcrums of power (at that time) that could convince people to lay down cabling from England to New
York? One could point to the early companies that did it but these required the blessing of the institutions that
validated their corporate charters. It was critical in the American Civil War, as mentioned when "a total of _15,000_
miles of telegraph wire" was laid down (which would also require constant protection and repair, most likely
done in combination with technicians and the most expendable soldiers) to keep deployment and resources at high tally.
I have more to say about this book and what I feel about it but that's for another post - I have to read a bit more
about Standage himself. His narrative self both obscures some of these points and elevates I'm trying to flesh out and
the book I'm hoping to use as a counterbalance will be [Liberalism At Large][2].

### [Manufacturing Consent: The Political Economy of the Mass Media][6]
I'm nearing the end of the book by Chomsky and Herman and I'm finding things in it that I can see had a _huge_ indirect
influence on how people are perceiving online journalism to exist today[^2]. I'm finding it harder to _not see_ how
things like social media might have played heavily into the hands of corporate America to both weaken the trust in
public journalism and reduce the resources spent on it as a whole.

### Coding Books
I started [Programming Interviews Exposed][3] on a whim because nothing can hurt my chances right now in this job
market. I don't have a _lot_ of books about software in print because I find it a lot more useful to keep it open on one
screen and work through examples on another. But this book had me pull up [Zeal][4] a lot more for remembering C++
primitives. I don't normally work with the language but the _lack_ of the harnesses normally found in languages like
JavaScript or even Rust felt actually a bit enjoyable[^1]. Implementing the linked list was straight forward _once_ I
refreshed myself on initialization logic. I got way too used to Rust and JavaScript's approach.

Another book on code (though a bit more indirect and more on the theory) that I've started has been [Practical
Cryptography][5]. The book is about twenty years old, which gives room for a fair amount of skepticism on the
applicability of what's inside. That hasn't been the case for me so far. The book makes very good points about the
nature of software engineering as being more subservient to satisfying the production needs of business and less on the
security needs. There's an example of an office where locks are installed on each door and the immediate way how such a
setup enables simpler hacking due to the physical weakness of the ceiling being artificial and the increased barrier for
physical auditing by night-time security. The lesson from that, from what I gathered, was on making security _less_
difficult to obscure and _keep_ track of who has access to what and _when_ they did so. There's things here that I can
see being applied to the realm of organizing, as I do believe that there's a strong notion of weak surveillance by the
State when they've been the main drivers of the growth of the systems that you use to view this text right now. It's
something that's growing my interest in the concept and providing concepts like the aforementioned that I can bring back
to my everyday work.

## Coding
So it looks like I'm not alone on my venture to build The One True CMS. [Jeff Eaton][8] mentioned [their work][7]
which reminds me _a lot_ of what I want [Shock][9] to develop into. I've given up on making that happen in this year and
instead focusing on just getting parts working such that I can get a Voltron-esque situation going. I've written about
the current side-project to this, the plug-in/scripting/addons system I'm still fleshing out, while also reworking how I
want the presentation of things to look. I haven't touched things like searching just yet but it's on the roadmap for
next week as a bit of a stop-gap to the issue with the slow approach to loading content from Calibre at the moment.

## Seeing
You get a few photos this time around!

<figure>
    <img 
        src="/images/weeknotes/2024-07-22-change.jpg"
        alt="Myself holding up the opening of the first page of Octavia Bulter's The Parable of the Sower"
        />
    <figcaption>The first page of a heavy book.</figcaption>
</figure>

<figure>
    <img 
        src="/images/weeknotes/2024-07-22-plant.jpg" 
        alt="Plants and books on a shelf viewed from the bottom right"
        />
    <figcaption>These books were all read next to these plants!</figcaption>
</figure>


[1]: https://search.worldcat.org/title/153578288
[2]: https://www.worldcat.org/isbn/9781781686256
[3]: https://www.oreilly.com/library/view/programming-interviews-exposed/9781118283400/
[4]: https://zealdocs.org/
[5]: https://openlibrary.org/books/OL25127928M
[6]: https://www.worldcat.org/isbn/9781407054056
[7]: https://phire.place/@eaton/112830648702866573
[8]: https://eaton.fyi
[9]: /projects/shock/
[^1]: No, I'm not a masochist; why do you ask? Oh, `gcc`? That's just for compiling code.
[^2]: I'm going to use the phrase "online journalism" to include prolific bloggers, pundits and the like because these
    folks tend to be the sources of main-stream media's journalists - be it for profit or attack.

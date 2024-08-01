---
layout: essay.html.njk
title: "Making Livtet: A Project for Book Lovers"
date: 2024-08-05 09:00:00 -05:00
# tags: essay
---
I wrote a bit about my goal with [a project for books][1] and the things that led to its inspiration. Now I'd like to
share it with you all. In short, it's a project that's meant to replace my use of [Calibre][2], a venerable solution for
folks wanting to work with their book collections. If you haven't, I suggest reading a bit [about its history][3];
there's a reason it's the go-to solution for a lot of people. However, my want and use for Calibre extends beyond its
current capacity[^1]. I've created [a page for it][4] with its feature list. So far, I've managed to make something that
can pull in the books I have in my Calibre collection. That led me to [develop a small crate][5] around doing so[^2].
What I have built so far is what I'm hoping will encourage folks to noodle around the code to help flesh things out.

## What there's now
You might have seen this video of a former demo:[^3].
<iframe src="https://todon.eu/@jalcine/112819470763301355/embed" class="mastodon-embed" allowfullscreen="allowfullscreen"></iframe>

Or this one!

<iframe src="https://todon.eu/@jalcine/112809626875243324/embed" class="mastodon-embed" allowfullscreen="allowfullscreen"></iframe>

Here's what it looks like today; with some changes I've made:

<figure>
    <video poster="/images/video-screencast-livtet-intro.png" controls loop>
        <source src="/videos/livtet-intro.mp4" />
    </video>
</figure>

## What I'm working on
<!--
 TODO: Mention logic for building out the Lua runtime.
 TODO: Talk about improving search with SQLite.
-->
I'm open to feedback about this and would like to hear your thoughts! Feel free to [e-mail them][tracker]!

## What I'd like to see next
<!--
 TODO: Talk about how the logic for sync should work.
 TODO: Talk about what the Web service could look like.
 TODO: Add notion of making a community service for syncing.
-->
<script src="https://todon.eu/embed.js" async="async"></script>

[tracker]: mailto:~jacky/livtet@todo.sr.ht
[1]: /essays/2024/my-hub
[2]: https://calibre-ebook.com/
[3]: https://calibre-ebook.com/about#history
[4]: /projects/livtet/
[5]: https://git.sr.ht/~jacky/livtet/tree/next/item/calibre-content-server-api
[^1]: Truthfully, it was either I work on making a super advanced plugin for my needs into the Calibre ecosystem _or_ I
    work on something to replace it altogether. I host my own website and use a vanity e-mail address; _of course_ I'm
    working on my own solution!
[^2]: I _might_ publish this one day because Calibre's API is interesting (using things like Digest Auth, not really
    following a convention for paths, etc). Ideally, I'd want to make it a bit more like other content pagination APIs.
    But "dumb" in the sense that it doesn't provide async support, no caching, etc - _you_ can figure that out! Hazel's
    described this a [lot more explictly](https://hachyderm.io/@hazelweakly/112536923490036820).
[^3]: You can view the source of them at <https://todon.eu/@jalcine/112819470763301355> and <https://todon.eu/@jalcine/112809626875243324>.

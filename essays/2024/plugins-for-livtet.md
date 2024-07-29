---
layout: essay.html.njk
title: "Designing Plugins for Livtet"
---

[Livtet][1] is my current "main character" project that I've focused quite a bit of effort on. One thing I wanted to do
immediately is prevent locking myself into any service decision too quickly. For example, I _do_ still want to maintain
some means of keeping my information in sync with platforms like StoryGraph, Goodreads and Bookwyrm while being able to
keep a simpler (and eventually) means of linking to the information I've extrapolated from those readings to my own
site. That might expand to even being something to make the act of embedding into something like Obsidian easier for
drafting things to write.

I've settled on using Lua as the (initial) language for extending Livtet. I did this because:

* I've wanted to use this language in a context _outside_ of Neovim for some time now. I've always had an interest in
   it - since learning that [Itch][2] is all in Lua.
* It's a popular language for the generation below me, especially in the gaming world.
* Also, [Cloudflare _needs_ it][3]?

You can see the initial progress of this in [the source code][4] but the idea is to allow plugins to provide information
about _what_ parts of Livtet it plans to extend and to make it easy to keep those operations going in an async fashion.
The [underlying Lua interpreter][5] I'm using makes this easy enough. The parts of Livtet that'll be open for extension
would be:

* Library definition: This way, someone can contribute a means of loading a library from one's physical library
* Book definition: This is required because of library definition, at the moment.
* Metadata discovery: This is going to be the wormhole because the things planned for this include:
  * Obtaining covers for a book
  * Adding page information
  * Pulling progress information from reading devices

Nothing above should be _too_ new. But what I'm immediately running into is a fear on how to provide these developers a
means of implementing a viable _interface_ for these things. XSS is something that can be avoided, both with
[tooling][6] and [configuration tweaking, with Tauri][7]. The folks helping to maintain Tauri wrote a bit about how it's still possible,
though in a more isolated content. This provides enough context to help me devise this _potential_ file structure for a
Livtet plugin:

```sh
 |- init.lua           # The 'entry' script called by Livtet.
 |- ext/              
 |- ext/library.lua    # A script that implements a library.
 |- ext/metadata.lua   # A script that defines a means of finding metadata for a book.
 |- lib/               # The path that's made shareable across plugins.
 |- lib/shelf.lua
 |- ...
 |- ABOUT.md           # Rendered to the user to describe this plugin, with frontmatter support.

```

Having a fixed entry script (`init.lua`) is meant to help control how they can be loaded (and unloaded). F

[1]: https://git.sr.ht/~jacky/livtet
[2]: https://leafo.net/posts/itchio-and-coroutines.html
[3]: https://blog.cloudflare.com/pushing-nginx-to-its-limit-with-lua/
[4]: https://git.sr.ht/~jacky/livtet/tree/feature/implement-lua-plugin-system/item/livtet-extensions/src/lib.rs

[5]: https://docs.rs/mlua
[6]: https://www.npmjs.com/package/svelte-purify
[7]: https://tauri.app/v1/api/config/#allowlistconfig
[8]: https://crabnebula.dev/blog/cross-site-scripting-with-react-and-tauri/#xss-vulnerabilities-impact-in-the-browser-vs-tauri-applications

---
layout: essay.html.njk
title: Going Pro with Neovim; Yet Another Reset
---
As time is something of a slight abundance for me[^1], I decided to reset my
Neovim setup. This meant wiping the dictionary of words I accurred, all of the
plugins (and associated cruft) and began learning how to use it at its bare. As
someone who's relatively locked to their terminal a lot, I found this to be a
_great opportunity_ to see what exactly I could do with Neovim without having to
add plugins.

## Kicking the Tires

I only had a very minimal setup, so minimal it might make no sense:

```lua
'' This disables all of the non-"native" language providers for plugins
vim.g.loaded_perl_provider = 0
vim.g.loaded_ruby_provider = 0
vim.g.loaded_python3_provider = 0
```

I just wanted the `:checkhealth` command to tell me that things were okay. I
then began writing this blog post from the "vanilla" Neovim setup. Immediately,
I felt lost. Less colors, less highlighting, it felt like the bad lands. One
thing that helped me is remembering that Neovim tightly follows its parent in
being a _modal editor_; an experience in which most of the time, you can define
what actions you'd want to take place by describing it in your head and typing
it out with its associated commands. I find this a bit more useful than
fumbling around with a "omni-bar" since it's helped me remember _what_ I need
in order to do a particular command. I learn best through repetition and this
approach involves a lot of that. For example, I like to keep the text wrapped
as I type but without the automatic text re-alignment after a certain width, I
checked the docs for information about formatting text. That led me to running
`gqgq` every so often. Touching base with my memory of mappings helps out a lot.

Part of the practice of going bare was to determine what I was willing to do on
my own and what I _definitely_ needed support with. I wasn't about to go
through the process of manually adding _every single plugin_ I figured was
necessary. Nor did I think it worthwhile to pull in a plugin to do something I
could adjust with a few options. Regarding options, I did pull in some to help
with navigation:

```lua
'' It's good to know where you're at.
vim.o.number = true
'' If you want to confuse people who _rarely_ use Neovim, turn this on. If you're
'' someone who uses motion commands a lot, this is a _boon_.
vim.o.relativenumber = true
```

Tying back to support, I wanted to focus on the things I'd be using often. This
meant thinking about the kind of projects and things I'd be using Neovim for.
It's a generic text editor that has a lot of souped support for things like
[language servers][1], [structural syntax parsing and highlighting][2] and
something I don't use often enough; a means of quickly engaging with the
"edit-compile-edit" cycle of code through [its quickfix system][3]. Out of the
box, Neovim supports things like C and Bash, making absolute sense since its
core is written in these languages (or uses it in its own development).
However, I use those languages and other ones when I'm working on [my own
projects][4]. In order to get better support for these, I first wanted to
incorporate a tool for managing plugins.

## Equipping the Machine
The plugin management ecosystem of Neovim is varied. Due to the efforts of
making plugins more flexible to load with packages (as they're internally
called) and the introduction of Lua as a means of developing plugins, the means
of getting, installing and management them has grown to be quite huge. The
package manager I used prior to this wipe even [has its own website for an
"IDE" mode][5]; something I don't see a lot for plugins, but it has a huge
enough ecosystem. I didn't want to stray _too far_ from my familiarity with
plugin management so I decided to bring this back.

I decided, this time around, to lean into how `lazy.nvim` suggests one
[partitions their plugins][6]. This was way better than my one huge list of
plugins. This has the added benefits that when one changes one of these plugin
definition files, `lazy.nvim` is capable of reloading it. That made the act of
quickly testing this setup a lot more enjoyable. I did realize something after
inspecting [some reference code by the plugin's author][7]; that I could
capture _all_ of the logic for working with a plugin within these files as
well. This encourages me to begin making topical files like language support,
version control, and the like. But to start, I threw a lot of the plugins I saw
as necessary for me to use into the main init file.

I won't bore you _too much_ with the plugins I ended up installing but I'll close 
this with a link that you can [peek at the ones I've set up][8].

## Gluing the Language Server and Taks Runner
My ultimate test is being able to make a new test in [livtet][9], run it, fix it and 
push that change, all from within Neovim. This involved a few changes:

* Adding a test runner and debugging client
* Adding an optimized setup for Rust projects
* Adding a tool to load tasks defined across the project

[1]: https://neovim.io/doc/user/lsp.html
[2]: https://neovim.io/doc/user/treesitter.html#treesitter
[3]: https://neovim.io/doc/user/quickfix.html#quickfix
[4]: /projects
[5]: https://www.lazyvim.org/
[6]:
[7]: https://github.com/LazyVim/LazyVim/blob/eed91a3e4c1521dd839d1a8bc09bdd98ac2fb874/lua/lazyvim/plugins/formatting.lua
[8]: https://git.sr.ht/~jacky/vimrc/commit/632a5e01d7438879029e990d11cf22b6d9e3db81
[9]: http://git.sr.ht/~jacky/livtet
[^1]: Solely because of what I keep repeating on LinkedIn and other places; a
    brother is looking for a place to exchange his labor for the extended right
    to housing and food. Would you mind helping me out? You can visit
    <https://jacky.wtf/work> to learn how.



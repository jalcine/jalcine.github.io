---
layout: essay.html.njk
title: Incorporating Lua with Livtet
tags: essay
date: 2024-08-17T15:00:00-05:00
description: >
    How Livtet's integration of Lua helps allow for more library
    collections to appear with little change to the core library
    experience.
og:
    image: /images/lua-livtet-library.png
atUri: "at://did:plc:e2ctbutx6kya6si4if5ngjmm/site.standard.document/3mnivf7nhhj2g"
---
One of the goals I have with [Livtet][] is to incorporate a means of extensibility. I didn't want
to deeply write support for things like Calibre, Goodreads or Bookwyrm because these services can
change their outward facing implementations on a whim, in response to a security change or the like.
Having an extension system felt like the best way to work around this. Also I try to imagine this
tool replacing my use and need for [Calibre][], that's still some time off. But I do look to how it
allows plugins to manipulate and extend its behavior[^1]. In the case of Livtet, at the time of
writing, plugins aren't declarable by the user in the interface, you'd have to modify the manifest
file[^2] with the following:

```toml
search_method = "sqlite"

[libraries.01J5F20ZD9822Z0V64B1EGB01S]
signature = "file"
payload = "/home/ovid/Documents/My Stuff"

[libraries.01J5FBE22M4NRWM4YTSZSSX9Q8]
signature = "lua"
payload = "bookwyrm"

[libraries.01J5F21QB5JZ75BSCJ6GHEA1BQ]
signature = "lua"
payload = "open-library"
```

This is a list of three [library lookup definitions][1] and in the case of loading Lua extensions,
Livtet knows to do that by looking at the payload value and wrapping that in [a contextual
extension][2] for that plugin. I chose to share the Lua context across plug-ins to allow for plugins
to share logic as opposed to spinning up a new one for each plugin[^3]. The way a Lua extensions
talks to Livtet is straight-forward: it declares an (currently undocumented) interface to the host
and Livtet invokes some code to extract that value from it to complete an operation. For example, if
I wanted to get the list of books across my shelves from my Bookwyrm profile, some of the Lua code looks
like this:

```lua
local function items()
	local user_profile = livtet.options("user_profile_url")
	local book_items = {}
	for shelf, url in pairs(USER_URLS) do
		local full_request_url = user_profile .. url
		local feed_index = livtet.fetch_json(full_request_url)
		local first_url = feed_index["first"]
		if first_url ~= nil then
			book_items[shelf] = fetch_all_from_feed(first_url)
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

M.library = {
	items = items,
	-- other API methods would go here.
}
```

Livtet provides a per-invocation global method, `options`, that allows some information that the
plugin requires for operation[^4]; in this case, the Bookwyrm extension requires the profile URL
that it'll work with. The act of calling this from Livtet looks like the following:

```rust
async fn items(
    &self,
    paging: livtet::library::ItemPaging,
) -> Result<Vec<livtet::Book>, livtet::Error> {
    let shared_lua = self.ext.lua().map_err(crate::Error::from)?;
    let lua = shared_lua.lua().map_err(crate::Error::from)?;
    let string = format!(
        "return require('{module_name}.init').library",
        module_name = self.ext.module_name
    );
    let metadata_value: mlua::Value = lua.load(string).eval().map_err(crate::Error::from)?;
    let items_function: Function = match metadata_value {
        mlua::Value::Table(library_table) => {
            library_table.get("items").map_err(crate::Error::from)?
        }
        mlua::Value::Function(library_func) => {
            let library_table: mlua::Table = library_func.call(()).map_err(crate::Error::from)?;
            library_table.get("items").map_err(crate::Error::from)?
        }
        _ => return Err(crate::Error::Lua(Error::InvalidValue).into()),
    };
    let page = lua.to_value(&paging).map_err(crate::Error::from)?;
    let books: Vec<Book> = items_function
        .call(page)
        .and_then(|v| lua.from_value(v))
        .map_err(crate::Error::from)?;

    Ok(books
        .into_iter()
        .map(|b| b.0.into())
        .collect::<Vec<livtet::Book>>())
}
```

Quite a bit is going on here. So a run-down:

* We grab a safe reference to the Lua context,
* Compose the Lua script we'll evaluate for our needs,
* We determine what kind of value `M.library` returns and pluck `items` from it; this mirrors the
  [trait definition][3].
* We call it and convert each of the value returned into ones Livtet can work with.

This approach is something that's been simple to replicate. Writing out tests for this currently
require hitting _actual_ remote services[^5] which slow down the tests just a tad and run the risk,
if I ran this on every commit &mdash; for example, of being blocked. I don't think it'll happen but I'm
known for thinking of "what if". That said, these changes allow me to present these collections
locally with little to no effort!

<figure>
    <img src="/images/lua-livtet-book.png" alt=""/>
    <figcaption>Showing the book <em>Doppelganger</em> from my shelf on OpenLibrary.</figcaption>
</figure>

<figure>
    <img src="/images/lua-livtet-library.png" alt=""/>
    <figcaption>
        All of the books I've marked on my
        <a href="https://openlibrary.org/people/jackyalcine/books">OpenLibrary profile</a>
    </figcaption>
</figure>

This is shifting my thinking about how I want libraries to show in Livtet. But that's for another
post!

[livtet]: https://man.sr.ht/~jacky/livtet/
[calibre]: https://manual.calibre-ebook.com/en/latest/
[1]: https://git.sr.ht/~jacky/livtet/tree/fe7d2e6f605d5e10d3de519a4ea70b429c386392/item/livtet-impl/src/library.rs#L262-266
[2]: https://git.sr.ht/~jacky/livtet/tree/fe7d2e6f605d5e10d3de519a4ea70b429c386392/item/livtet-extensions/src/lua.rs#L374-385
[3]: https://git.sr.ht/~jacky/livtet/tree/fe7d2e6f605d5e10d3de519a4ea70b429c386392/item/livtet-impl/src/library.rs#L118-125
[^1]: It being written in Python and using Qt, plugins can go as far as creating their own custom
    interfaces. This is something I _want_ to some degree. I'll settle for allowing that using
    something like [`html`](https://github.com/yoshuawuyts/html) to drive the composition of
    elements, [`yew`](https://docs.rs/yew/latest/yew/) and a small interface layer to allow plugins
    to declare their own interfaces on top of the shared ones for Livtet or something else. This
    discovery was done thanks to Debian's ability to pull sources of projects. I ran `apt
    source calibre`, downloaded a few plugins from <https://plugins.calibre-ebook.com/> and did some
    sleuthing there! When in doubt, _read the source_.
[^2]: This is the file that Livtet uses to determine how its search index is stored and where the
    libraries are located as well as how to load them.
[^3]: I also wasn't sure _how global_ Lua's contexts are; [the
    docs](https://docs.rs/mlua/latest/mlua/struct.Lua.html#method.new) nor [the
    source](https://docs.rs/mlua/latest/src/mlua/lua.rs.html#328-350) aren't too clear
    about that; so I took a conservative bet here.
[^4]: The name feels _incorrect_ because it's not getting _all_ the options available, only the
    one plucked; a name chosen for quick typing and not readability or clarity.
[^5]: If you know of a good HTTP mocking library for Rust, let me know! Or even something as a
    separate sidecar service &mdash; I'm leaning on spinning up a Lua daemon and doing that myself.

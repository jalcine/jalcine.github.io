---
layout: essay.html.njk
title: "Boxing Up Common Parts of an App"
tags: essay
date: 2024-06-13
atUri: "at://did:plc:e2ctbutx6kya6si4if5ngjmm/site.standard.document/3mnivfbezrr2g"
---
I've been working on [Shock][1] as I look for [work](/work/) to both keep my blades sharp and to try out some new
stacks. Shock's written in Rust and JavaScript (and a _little bit_ of TypeScript)[^1] using [Tauri](https://tauri.app) to bind a system-provided Web browser
view to a Rust library that provides IPC to a JavaScript "frontend"[^2]. I had two moments where I could have kept
things simple but wanted to experiment.

## The Icons
Shock is - first and foremost - an editor[^3]. It needs to know where to put and read things and with a sprinkle of
SQLite, it's able to do that pretty well. In the flow for setting up a new site, I wanted to give people a way to have
some sort of visual identifier for sites. The following [truncated code][2] is how I implemented something for folks to
select an icon.

{% raw %}
```html
<aside class="icons">
{#each iconSet as icon}
    <a
        href="?action=create"
        class="icon"
        class:selected-icon={selectedIcon == icon}
        on:click={() => (selectedIcon = icon)}
    >
        <Icon 
            fw
            {icon}
            scale="1.5x"
            style="color: var(--color)"
        />
    </a>
{/each}
</aside>
<style>
  aside.icons {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    overflow: scroll;
    margin: 1rem 0;
    height: 20rem;
    width: 50rem;
  }

  .icon {
    --color: gray;
    margin: 0.5rem 0.6rem;
    border: 0;
    background: transparent;
    padding: 0;
  }

  .icons .icon.selected-icon {
    --color: crimson;
  }
</style>
<script>
  let allIcons = Object.values(fas);

  function* iconGen(amount) {
    let count = 0;
    let pastIcons = [];
    if (selectedIcon) {
      count += 1;
      pastIcons.push(selectedIcon);
    }
    let icon;

    while (++count <= amount) {
      const index = Math.round(Math.random() * 1900);
      const currentIcon = allIcons[index];

      const pastIndex = pastIcons.findIndex((pastIcon) => {
        return pastIcon == currentIcon;
      });

      if (pastIndex === -1) {
        icon = allIcons[index];
        pastIcons.push(icon);
        yield allIcons[index];
      } else {
        --count;
        continue;
      }
    }
  }

  function rollIcons() {
    iconSet = Array.from(iconGen(144));
    if (selectedIcon) {
      iconSet.push(selectedIcon);
    }
    shuffle(iconSet);
  }
</script>
```
{% endraw %}
There's quite a bit going on here but before I explain, I want to show you what it results in.

<figure>
    <video poster="/images/video-screencast-icon-selector.png" controls loop>
        <source src="/videos/screencast-icon-selector.webm" />
    </video>
</figure>

As shown, this renders a region of icons. When you select an icon and choose to shuffle, your selection is kept (though
not in the same place) while the rest of the surrounding icons are pulled from the imported icon set[^4]. After I wrote
this, I considered pulling it out into a separate component. An immediately naive answer would have been "yes!" since it
"provides value". But currently, this value is isolated to _only_ this part of Shock. This information doesn't even get
saved[^5]. However, in implementing this, I got to use a few things I hadn't a real chance to use in work
environments.

### Generators
While working with Rust code for education and (in the past) Clojure for work, my appreciation for programming that
centered around streaming grew. I'm familiar with the concept of [generators in JavaScript][3] but hadn't implemented
one for something outside of learning until now. The code in reference is the following:

```javascript
function* iconGen(amount) {
    ...
        yield allIcons[index];
    ...
}

```
With these two lines, `iconGen` has gone from a pure function[^6] to a _generative iterator_, which lightly explains
what this allows you to do. I can use this generator to create a list of any number of icons. 
In an earlier (and buggier) version, I forgot to remove the currently selected icon from the list and so, made the
generator to make the number of icons dynamically but keeping it isolated (to a degree). Fixing that, I can still 
change the number of icons. I didn't move this into a separate component because at the moment,
there's no need to extract something that might require a different presentation implementation elsewhere. What I did
plan on adjusting was the number of icons and keeping the generator allows me to focus on the presentation layer,
refactor the generator out and keeps the functionality in both places - with some help[^7].

## The Table
As with most software, some sort of list has to be shown. Shock deals with editing pages, themes and the sort so there's
list abound. However, I haven't created a full-on fixture system to emulate dozens of pages so I'm almost always editing
`index.html`. That didn't stop me from extracting the table used to present items. Excluding the styling and the few
lines of associated JavaScript, here's how they're implemented at the moment:

{% raw %}
```html
<form>
  <aside>
    {#if $$slots.filter}
      <button on:click={() => (showSearchPanel = !showSearchPanel)}
        ><Icon icon={faSearch} /><span>Filter&hellip;</span></button
      >{/if}
    <span></span>
    {#if $$slots.actions}<slot name="actions" />{/if}
  </aside>
  {#if items && items.length != 0}
    <div>
      <table>
        {#each items as item}
          <tr>
            <td>
              <slot {item} name="item"></slot>
            </td>
          </tr>
        {/each}
      </table>
    </div>
    {#if $$slots.filter}
      <div id="searchPanel" data-hide={!showSearchPanel}>
        <slot name="filter" />
      </div>
    {/if}
  {:else}
    <slot name="missing" />
  {/if}
</form>
```
{% endraw %}

This provides a _very thin_ wrapper on listing a set of items in a table. I wanted to avoid too much of [the divitis][4]
while working on this[^8] - still a work in progress. This implementation of a sortable table removes a _lot of_ of
styling constraints and leans into what I'm expecting to see the future of Web component development to look like out of
the box. I'm a very big fan of using slots, in this case, [Svelte's implementation][5], since they allow you to bring
your own elements and styles and lean into reactivity to bridge between them. I found that having this out of the box
have improved my ability to produce something both friendly to debugging (since it's state we're tracking and replacing) and
simpler (since I can isolate things a lot more).

With that code, I'm able to present the following:

<figure>
    <img src="/images/boxing-things-up/page-listing.png" alt=""/>
    <figcaption>A (meager) list of pages associated to my example site. Note the "New" button to the top
    right.</figcaption>
</figure>

<figure>
    <img src="/images/boxing-things-up/theme-listing.png" alt="" />
    <figcaption>A (even more meager) list of themes associated to my example site. Note the two buttons to the top
    right.</figcaption>
</figure>

## Next Steps
I see myself keeping this table abstraction and adding more styling to the table itself. Introducing some way to add
per-row and whole-table behaviors will help for bulk actions. I'm glad that I kept the icons isolated because the way my
yak has been asking for a fresh cut, it would have been completely tested with no purpose outside of watching some icon
turn red.

There's also a chance for me to bring this table interface to the _first_ screen you see when you start Shock, which
currently looks like:

<figure>
    <img src="/images/boxing-things-up/landing.png" alt="" />
    <figcaption>A set of testing sites made locally, all trapped in a `&lt;select&gt;`.</figcaption>
</figure>

There's _lots_ of room for improvement, though still in its very early phases.

[1]: https://git.sr.ht/~jacky/shock
[2]: https://git.sr.ht/~jacky/shock/tree/6118c3e53f32d931ddb18d71061a0a0bd5318e39/item/editor/shell/src/routes/+page.svelte#L1 
[3]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator
[4]: https://alvaromontoro.com/blog/67843/divitis-and-other-itis
[5]: https://svelte.dev/docs/special-elements
[6]: https://git.sr.ht/~jacky/shock/tree/6118c3e53f32d931ddb19d71061a0a0bd5318e39/item/editor/shell/src/lib/util.js#L1
[^1]: While useful for locking in typing constraints in JavaScript, I find that TypeScript can obscure some of the newer
    functionality that we have in JavaScript when I'm working on it in a greenfield situation. That option softens when
    I'm in working contexts as there's more tooling in place but that seems to be part of the problem that's also
    shopped as the solution.
[^2]: I use "frontend" like this because the term is _overloaded_. I think of the ActiveX and JavaScript things I built
    using [`mshta.exe`](https://en.wikipedia.org/wiki/HTML_Application) when I last used Windows and that has shaped my perspective on these kind of applications.
[^3]: That's the case for now. Over time, you'll see more of the presentation side but I'm going to be focusing on the
    editor for this post.
[^4]: There's nearly 2,000 icons in the solid set that I'm rolling through here. In the future, I plan to use a smaller, constrained set of icons that aren't so randomized. Suggestions on what icon set to use are welcome &mdash; especially friendly, warm and inviting ones.
[^5]: It's not saved yet because I have to figure out _where_ I want to save this information (locally in the
    application's index of sites? along the site's definition itself?) to both make it optional for use _and_ if used,
    something that's useful. I personally want this feature since scanning icons versus text is a lot easier for me.
[^6]: I told you I was Clojure-pilled, ha.
[^7]: I didn't explain the `shuffle` method - I looked at [the second implementation](https://javascript.info/task/shuffle) here; I initially wrote the first one before coming to that link! You can look [at its implementation][6] &mdash; open to suggestions to it.
[^8]: Working on the frontend has taught me that there's definitely not too much respect for browsers provide out of the
    box. Lots of folks have spoken about [our need to decenter
    and de-myth-ify ourselves](https://archive.ph/szOng#30%) when we write for the Web.

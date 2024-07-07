---
layout: essay.html.njk
title: "A Lunge Into A Project"
---

My [last post][1] was the christening of this site. Done in the thick of the night with a lot of thought 
for months, I can now move with a bit of eagerness towards what comes next.

## On Shock
I've mentioned [Shock][] in passing, but to recap: it's meant to be a CMS that provides people with 
portability and storage agnosticity as first-class features. It _shouldn't_ matter too much where 
the information for your project is stored; as long as Shock can read it. I'm leaning on an Apache
project, [opendal][], to handle the per-connection logic. Additionally, finding and organizing that
information would be ideally powered by [a search engine library][tauri]. Tying in [a Jinja-compatible template engine][minijinja] for 
a familiar templating language with fast caching and one's on their way to a decent CMS.

The biggest fork in the road, however, is to prevent myself from both overengineering and also restricting this to a
desktop experience - for both the editor _and_ the consuming client. I wrestled and decided against with working on 
integrating a tool like [Tauri][] for mobile development. The most likely candidate is [NativeScript][] as it provides the same
underlying logic as Tauri, though only in JavaScript. NativeScript's maturity in this space as well as an explicit 
separation of concerns for the devices it's targeting is important to me. This means that there'll be two interfaes and
the potentiality to share common core logic is high and will optimize how clients can be written, even going as far as
using a conventional HTTP endpoint to work as said target &mdash; an active goal for the lowest friction to working with
Shock. This is similiar to Microsoft's approach with https://vscode.dev/ &mdash; making it possible to run a fully featured
and extensible editor from your browser.

The last parts of this is the presentation: the service that'll provide standalone 

[1]: ../hard-reset/
[opendal]: https://lib.rs/opendal
[shock]: https://indieweb.org/Shock
[tantivy]: https://lib.rs/tantivy
[tauri]: https://tauri.rs
[nativescript]: https://nativescript.org
[libsql:rep]: https://docs.turso.tech/features/embedded-replicas/introduction
[2]: https://buttondown.email/features/api
[3]: https://api.buttondown.email/v1/docs#/default/api_views_emails_retrieve_webmentions
[minijinja]: https://lib.rs/minijinja
[^1]: [opendal][] uses [_operators_](https://docs.rs/opendal/0.46.0/opendal/index.html#use-operator) to present how file
    operation logic works. It splits it into blocking and non-blocking approaches so people can bring their own runtime
    &mdash; nice.

---
layout: essay.html.njk
title: "Designing Livtet's Storage"
date: 2025-03-17T19:15:00.000Z
description: >
  Thinking out loud about how I'd want to store information in Livtet, a book
  management tool for (primarly) offline use.
---

I've been eager to do this "restart" of Livtet. I've decided to take it slow
since this is a passion project and look into what I could do to both take a
chance to learn more Rust patterns for information storage. For the underlying
database system, I'm sticking with the venerable SQLite; bundling it into the
application itself. The means of driving interactions with SQLite is what I've
been waffling over &mdash; do I want to write explicit queries and handle
retrieval or do I mind using a query builder. The perk of using a query builder
is that I can get compile-time typing and make it harder to futz up the act of
fetching or storing information. I don't miss out on direct querying either.

This line of inquiry led me to checking out a post from the Diesel project about
how [the Rust package repository uses Diesel to handle query execution][1].
That project is designed for multi-tenant, multi-user access (using PostgreSQL,
for example) and that seemed like overkill for what I wanted. Livtet is a
single-user, single-tenant[^1] application. So for the case of this project, I
decided to look elsewhere. I want something that permits the following:

- a means of loading and retrieving information from the database in a uniform way
- a way to compose _specialized_ queries (making joins to find information)
- a means of allowing a dynamic query to be composed (in the case of search)

These points led me to believe (in the moment) that I'm better off making
something to do this on my own. An object relational mapper would provide this,
but that comes with also bringing in a _lot more_ that I didn't need and be
overly generalized in hopes of supporting multiple types of databases (which I
didn't need). The example here I'll use will be around _materials_, the object
in Livtet that represents a book (or anything else[^2]). You can view the full
SQL query used to [create its table, views and triggers][2]:

```sql

```

There's quite a bit going on if you're not terribly familiar with SQL but in short:

- A lot of the columns (title, description and the like) are stored as text
  representing JSON values
- Lots of constraints written against columns to prevent them from being stored
  as anything _but_ JSON

[1]: https://diesel.rs/guides/composing-applications.html
[2]: https://git.sr.ht/~jacky/livtet/tree/feature/define-database/item/lib/migrations/0004-set-up-materials/up.sql

[^1]:
    Single tenant _for now_. I am eyeing backups (which I consider another
    tenant and user in itself &mdash; you have to test your backups) and making
    a standalone Web server that one can use to serve information about their
    library independently.

[^2]:
    Livtet is _definitely_ going to support comic books &mdash; my collection
    is huge enough for me to want it and managing pull lists is an objective,
    one very far down the road from now.

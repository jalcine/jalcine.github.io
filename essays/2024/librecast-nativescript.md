---
layout: essay.html.njk
title: "Trying out Librecast on Mobile"
# tags: essay
---
As part of an experiment for [Shock][], I wrote out a project to get Librecast working across a few devices in a mobile
landscape. Initially, I wanted to do this using Kotlin to target Android directly, but reading the documentation seemed
like I needed to do more hand-holding that [I was immediately comfortable with][1]. That's the case with FFI, however.
You can view the code for this project at <https://git.sr.ht/~jacky/librecast-nativescript>. I've set it up such that,
if you have [`just`][2] installed, you can have the dependencies built and an Android APK spat out in the build
directory by running `just setup build`.

My thinking is that to get Librecast working on mobile with NativeScript, I'd have to create a native Node package that
links it statically and call that from client code. In order to do this, I've separated the project into a few parts for
clarity: `librecast-sys` for the 

[shock]: /projects/shock
[1]: https://kotlinlang.org/docs/native-c-interop.html
[2]: https://just.systems/man/en/

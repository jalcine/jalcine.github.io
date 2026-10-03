---
layout: essay.html.njk
title: "rv is the new kid in town"
og:
  type: article
tags: essay
date: 2026-09-23T10:00:00-05:00
description: >
  Some of the work I've been doing on `rv` around syntax checking,
  documentation testing and type checking has been worthy of note. I'm looking
  for feedback.
atUri: "at://did:plc:e2ctbutx6kya6si4if5ngjmm/site.standard.document/3mw7ipwz4azcp"
---

Recently, I've been helping the fine folk at [Spinel][] work on [rv][], the
well-known Ruby version manager written in Rust. I've made some small fixes[^1]
but I am working on something a bit larger: introducing something akin to
documentation testing found in Rust to Ruby. You can check the stacked PRs
[starting here][1]. This is the first time I've used the [Stacked Pull
Request][spr] feature on GitHub; it feels like operational sugar over something
I've done manually - it's cool!

Working on `rv` has been fun. Ruby's also the language that got me cemented in
my professional software journey. I do have a question for you (if you write
Ruby often): **how do you structure your code comments**? I'm talking about
things akin to:

````ruby
# The collection of foods you shouldn't eat because of their
# non-nutritional properties.
#
# ```ruby
# bean = MagicFoods.BeanTower.new()
# bean.sprout()
# ```
module MagicFoods

  # A bean to architectural artifact. Do not use in chili.
  #
  # ```ruby
  # tower = BeanTower.new()
  # ```
  class BeanTower
    def new(height: 30_000)
      self.height = height
    end

    def sprout
      puts "I _am_ a magic bean sprout at #{self.height}!"
    end
  end

  class PumpkinVehicle

    # A vehicle to drive around in.
    #
    # ```ruby
    # vehicle = PumpkinVehicle.new()
    #
    # ```
    def drive(distance: 30_000)
      puts "Let's go #{distance}!"
    end
  end
end
````

I'm hoping to have the PR adapt to as many styles as possible but if we stick
to a convention, it'll be possible to run code blocks of Ruby code and have it
operate as _living_ documentation. Things like [YARD][] make this a bit easier
because of the stricter organization of comment information and with the advent
of [RBS][], we might even get a means of having types _and_ documentation
living in sidecar files if not immediately in the code itself (I'd prefer the
documentation to live _with_ the code, to be frank).

[spinel]: https://spinel.coop
[yard]: https://yardoc.org/
[rv]: https://rv.dev/
[1]: https://github.com/spinel-coop/rv/pull/786
[rbs]: https://github.com/ruby/rbs
[spr]: https://docs.github.com/en/pull-requests/how-tos/stacked-pull-requests

[^1]:
    One security [fix](https://github.com/spinel-coop/rv/pull/780), improving
    [probing of Rubies](https://github.com/spinel-coop/rv/pull/760) and adding
    in [editorconfig](https://github.com/spinel-coop/rv/pull/778) for the
    Vim-inclined folks in the community.

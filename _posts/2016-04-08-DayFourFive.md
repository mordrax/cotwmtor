---
layout: post
title:  "Day Four and Five - Testing completed!"
date:   2016-04-6 12:00:00AM
published: true
comments: true
---

**Milestone**

Last two days was fairly awesome in some respects and also quite challenging. I had been putting off the last component to test, the container component. 
This component is responsible for hooking up the drag/drop logic and making sure items did not exceed weight limits of packs amongst other things. 
It was complicated and hacked together due to ignorance of Redux and just focusing on results from my one hour after work night sessions.
Today, I learned the basics of [redux-thunk](https://github.com/gaearon/redux-thunk) and was able to apply this to my hacky code until I got something I'm much happier with that's also testable.

**TDD and Unit testing**

I've been applying a half-half TDD approach, found [this article](http://david.heinemeierhansson.com/2014/tdd-is-dead-long-live-testing.html) interesting and the [video discussions](http://martinfowler.com/articles/is-tdd-dead/) too although it got a bit long/dry/repetitive towards the end. My experience with it so far has been overwhelmingly positive. I wouldn't say that I write the test first in the majority of cases because I don't have a clear idea when I start, where I want to end up. So I just typically let my fingers do the talking until my brain catches up. But once there's a half completed happy path, I then go and build the tests around that and that prompts me to redesign and catch edge cases etc. It's really helped me catch some existing issues and think more about what each function is doing.
A major benefit is that I'm alot more confident now about my code and when it doesn't catch bugs, I put in more tests or a class of tests so it will catch these errors the next time. My tests currently run in 0.15 secs so it's pretty awesome to be making changes to a section and then having it tell me right away something that I've broken.

**Next steps**

There are alot of design related issues that's been brought up by the implementation of tests. I'm going to be working on this.
Whilst the last month of testing has been fun, it's not as fun as implementing new features of the game, so I'm going to be forging ahead on the shop inventory in parallel.

It's going to be really interesting to see how doing this hybrid TDD approach will affect my workflow, thinking etc.
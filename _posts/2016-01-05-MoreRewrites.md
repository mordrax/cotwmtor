---
layout: post
title:  "Refactoring begets more refactoring (+Meteor 1.3, -Webpack)"
date:   2016-01-05 12:00:00AM
published: true
comments: true
---

**Summary**

Just a quick post to say that I've removed webpack from the build and migrated to Meteor 1.3 Early Beta. I really didn't like how it was making the whole process so complicated and for some reason, the hot reloading and code splitting didn't work most of the time for me. It kept saying 'you need to do a full reload'.


**RUI - Repetitive Upgrade Injury**

Seriously, the last month of upgrading to Meteor 1.2 then to Redux, then to Webpack, then to Meteor 1.3 without webpack because I learned that the core devs were not in favor of supporting it has been pretty draining. I seriously considered throwing this all away and going to something like [Phaser.io](http://phaser.io/) or [Crafty.js](http://craftyjs.com/) and just making a game. WTF... oh, this is a devlog about the making of a game?! Well you'd be forgiven if you thought this was a devlog about how a guy likes to spend all his evenings and holiday time, mindlessly upgrading from one version of a framework to the next.

**Functional Reactive Programming**

I watched [some](https://www.youtube.com/watch?v=uNZnftSksYg) [videos](https://www.youtube.com/watch?time_continue=2&v=FEwLwiizlk0) on the topic and it's making me all warm and tingly inside. After being warmed up to the idea through Redux, I feel that this just makes sense. Having tasted Functional Programming in first year uni, I've been somewhat disappointed that it doesn't have much of a presence in the wider industry. And after banging my head against OO (don't get me wrong, I do love OO for the concepts are so easy to grasp) for the next 15 years, it's refreshing to see some more FP come into mainstream.

This was almost going to be a post about rewriting the whole app in [CycleJS](http://cycle.js.org/) ... but it's getting late so maybe I'll leave that to next time. ^_^
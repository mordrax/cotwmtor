---
layout: post
title:  "On character creation, Semantic UI and Win3.1 themes"
date:   2015-09-09 11:20:29
published: true
comments: true
---

**Well hello again!** 

It's been a while but as this is a hobby project, it *will* take a while. Unless a certain someone becomes unemployed and can then dedicate 40 more hours to this every week at which point it becomes more like a job and the pressures and stress of reaching the end overtakes the joy of building it eventually leading to other side projects to deal with the stress ... oh did I say all that out loud.

Since the last post, I've started to use [Semantic UI](http://semantic-ui.com/) after watching the developer give a presentation at a recent [Meteor Devshop](https://www.youtube.com/watch?v=86PbLfUyFtA). It it interesting and a refreshing change from bootstrap in the way that it feels more opinionated and the elements you have to work with looks and feels *really nice*!
But in building the character creation screen where I'm at right now, I realise there are limitations to the framework (or it could be that this is my third day using it...just maybe). If you're using the elements as intended, and don't deviate from the examples shown, then everything works great. But once you start trying to merge some elements together, if they're not in the examples, it doesn't always work e.g
  
{% highlight html %}
// these buttons should attach to any elements as the doco claims
<button className="ui right attached icon button"></button>
<button className="ui left attached icon button"></button>

// but they don't work well with the bar or label
<div className="ui progress">
    <div className="bar"></div>
    <div className="label"></div>
</div>
{% endhighlight %}

However, being three days in, I'm likely to be correcting myself in the next blog post.

**Character Creation**

The original UI for character creation looks like the picture below.

![Character Creation](/cotwmtor/images/charcreation.png)

After some hours trying to recreate vertical attribute bars and scroll bars, I decided to keep the *spirit* of the screen... ahh f**k it, I just did my own.
![New character creation](/cotwmtor/images/charcreation_WIP1.png)

Designing something that works from a 3 inch screen to a 23 inch screen is hard (and I obviously haven't mastered the art of it). But I think unburdening myself with any expectations to make it look the same is a smart move. The goal is to make this actually playable on the phone.
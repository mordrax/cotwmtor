---
layout: post
title:  "Parent/child communication and pure functions (Redux)"
date:   2015-12-23
published: true
comments: true
---

So there I was, the last minor functionality that I needed to build. When adding attribute points, I needed the child component to update the parent component's state.

~~~ html
<CharCreation>              // 3. to this guy
    <Attributes>            // 2. through here
        <Attribute /> <---|
    </Attribute>          | // 1. these guys needs to
    <Gender />        <---|       propagate callbacks up
    <Difficulty />    <---|
</CharCreation>
~~~

CharCreation holds the player object to pass into the new game. So all the components must chain callbacks through their props to the top.

This is what the player object roughly looks like at this point:

~~~ javascript
let player = {
    name: 'player name',
    gender: 'male, female',
    difficulty: '0-3',
    attributes: {
        Available,
        Strength,
        Dexterity,
        Constition,
        Intelligence
    }
}
~~~

So as any sensible engineer would do, I spent the next three weeks reading about flux, [redux](https://github.com/rackt/redux), pure functional programming, [cerebralJS](cerebraljs.com), [elm](http://elm-lang.org/), [cycleJS](http://cycle.js.org/). Also watched some really [awesome](https://www.youtube.com/watch?v=xsSnOQynTHs) [videos](https://egghead.io/series/getting-started-with-redux) on redux by the creator, Dan Abramov. What really got me was how Dan explained the concept of redux in his getting started videos. In the first 10 minutes of watching him re-create the library, I was sold on the concept of immutability and pure functions. It just felt right after a decade of OO and MVC patterns.

I then did a almost complete rewrite to use redux (inc. store provider, action creators and the whole sheebang) and migrated to es6. And am happy to say that I've finally got back to square one! Here's to hoping (again) that I don't have to do any more rewrites/refactors.






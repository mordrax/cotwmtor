---
layout: post
title:  "Exploring the village, ASCII maps (literally)"
date:   2016-02-12 0:35:00
published: true
comments: true
---

**Old code**

I spent some time going through my old code from a year back when I was a budding javascript enthusiast, still too scared to step into the ocean and only dared to try it via typescript. Found some gems like this:

~~~ javascript
ASCII_MAPS[GameArea.Village] = [
    '========,,#+#,,,========',
    '========,,,.,,,,========',
    '========,,,.,,,,========',
    '========,,,.,,,,========',
    '========,,,.,,,#========',
    '===,,#,,;...,,,,###=====',
    '===###,;.;,.,,;.+##=====',
    '===##+..;,,.,;.;###=====',
    '===###,,,,,...;,,,,,,===',
    '===,,#,,,,,.,,,,,,,,,===',
    '====,,,,,,,.,,,,,,,,,===',
    '====,,,,,,,.,,,,,,,,,===',
    '====,,,,,,,.,!###,,,,===',
    '====,,,#+.....+##,,,,===',
    '====,,,##!,.,,###,,,,===',
    '====,,,,,,,.,,,,,,,,,===',
    '====,,,,,,,.,,,,,,,,,===',
    '====,,###!...!###,======',
    '====,,##+..#..+##,======',
    '====,,###,...,###,======',
    '====,,,,,,,.,,,,,,======',
    '====,,,,,,,.!,,,,,======',
    '======,,,##+##,=========',
    '======,,,#####,=========',
    '======,,,#####,=========',
    '======,,,#####,=========',
    '======,,,#####,=========',
    '========================'
];
~~~

And then turned it into this:
![Village](/cotwmtor/images/village.png)

**Rendering Engine**

So I'm using React to render tiles. Each tile is a div with some css class that contains a background.
This way, I can randomly generate ascii maps for the dungeon and have it render as html. I haven't gone the canvas path, not particularly concerned about performance at the moment because the map is mostly static so once rendered it won't take up any more CPU.

I've also put in a basic collision detection so you can actually walk into buildings and out of the village!!
It's live on [cotwmtor.meteor.com](http://cotwmtor.meteor.com) (mind you, meteor takes a while to start). Let the exploration begin!


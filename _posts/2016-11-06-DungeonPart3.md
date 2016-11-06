---
layout: post
title:  "Dungeon Generator (Part 3)"
date:   2016-11-06 12:00:00AM
published: true
comments: true
---

## Why do we do it?

Sitting here, alone in my room, coding to Inception - Time and other classics of Hans Zimmer, I can't help but feel the moment. And the question that's haunted me for as long as I've asked it, why
 do we do what we do everyday? 
 
The scary thing is, I don't really know... I mean, why am I making this remake? Four years ago, it was to learn javascript, but I'm not even writing this in
javascript anymore. Or it was to be the start of a indie game studio, but i've since stopped working with my friend on it. He's moved on. So what is left? Maybe the feeling that I want to accomplish
something, finish a project, a game project. Yeah, let's go with that. 

But what's even scarier than not knowing why I'm doing this is that for the first 30 years of my life, I didn't even question what I did. So now I'm wondering, is it better to live a life not asking
 why, or better to ask why without an answer. Hmmmmmm...

## We are liftoff!

***SPOILER ALERT *** Don't read the sub-title above if you don't want to know what happens in part 3. Oh alright, I'm too excited about this, half because it's taken me how many months now? to get 
the dungeon working... and half because now I have a dungeon, I can move on to other stuff! Here's some pictures to make up for the heavy first section.

![Corridors joining corridors! But rooms overlaps.](/cotwmtor/images/dungeon3_take1.png)
*Dungeon Take 1 : Corridors joining corridors! But rooms overlaps.* 

There was some weird css rules that caused the half walls to be incorrectly rotated. The way the half walls work is I get the 4 neighbours of the half wall and based on
 what neighbour is solid, I rotate the solid edges of the half wall to align. But I had only considered two solid walled neighbours and not if a wall had 3 solid neighbours.

![Oh so pretty!](/cotwmtor/images/dungeon3_take2.png)
*Dungeon Take 2 : Oh so pretty!* 

![Doors being too close to each other bug!](/cotwmtor/images/dungeon3_take3.png)
*Dungeon Take 3 : Doors being too close to each other bug!* 

![Oh noes, so many unfinished corridors!](/cotwmtor/images/dungeon3_take6.png)
*Dungeon Take 4 : Oh noes, so many unfinished corridors!*
 
![Unfinished corridors now join something if there's something to join.](/cotwmtor/images/dungeon3_take7.png)
*Dungeon Take 5 : Unfinished corridors now join something if there's something to join*. 

See the T-intersection near the middle of the picture. Work of art... you would not believe how long it took me to do that. No I'm not telling otherwise my boss reading this
might fire me if he knew how incompetent I was.

![What happened here? Where did the walls go?](/cotwmtor/images/dungeon3_take8.png)
*Dungeon Take 6 : What happened here? Where did the walls go?* 

Ok, so in talking about how walls wrap corridors with my boss who is strangely interested in this game, it inspired me to remove walls altogether. Well almost. See, for all
the space in the dungeon, it is always surrounded by walls. So they don't actually require the extra calculation that I had done. Walls was just the 
'set of adjacent tiles to all floors'. Described like this, it solved calculating walls for all room shapes and corridors. I no longer had to do funny turning algorithms for
 when a corridor made a 45deg turn. Or do funny length algorithms for rooms that look like a cross or a circle. The set of adjacent tiles rule held for all dungeon constructs.
 
So I got rid of them!

![A filled dungeon, will be fog of war'ed, corridor connection half wall bug came back](/cotwmtor/images/dungeon3_take9.png)
*Dungeon Take 9 : A filled dungeon, will be fog of war'ed, corridor connection half wall bug came back* 

![dungeon candidate 1](/cotwmtor/images/dungeoncandidate1.png)
*Dungeon Candidate 1*

So after some more bug fixing ( turned out taking out walls was not without it's trouble as collisions that previously relied on walls now failed in their absence ), I present
 the final dungeon! Oh how glorious...
 
![dungeon candidate 2](/cotwmtor/images/dungeoncandidate2.png)
*Dungeon Candidate 2: Another glorious dungeon!*

![dungeon candidate 3](/cotwmtor/images/dungeoncandidate3.png)
*Dungeon Candidate 3: Hum... I don't remember leaving the adjacent doors bug in there... I'm sure I fixed that at some point*


## Onwards, upwards and forwards

So that was that. I completed dungeon generation but I don't think the dungeon generation is completely finished with me yet. Perhaps in the near future, I may have to go back
and fix some bugs or do another complete rewrite, but for now, I'm happily on to other things!

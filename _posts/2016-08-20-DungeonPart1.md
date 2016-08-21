---
layout: post
title:  "Pathfinding and Dungeon Generator (Part 1)"
date:   2016-08-20 12:00:00AM
published: true
comments: true
---

## Why, hello again!

For the avid readers of this blog, for which I'm sure are literally *countless*, I do apologise for being silent so long! There are two reasons that I hadn't made any updates:

1. I am in the middle of what I think is one of the largest features of the game and wanted to complete it in a week then give a full picture in one post. That was a month ago.
2. Everytime I fire up my dev machine, the urge to code overrides the urge to splurge so I add another little feature and neglect this devlog for another day.

However, both of these are very bad excuses for not keeping the fans ![github stars](/cotwmtor/images/fans.png) (for which I have seventeen of them!) updated on my progress, so without further ado... actually... my daughter's just climbed onto my lap demanding my attention and my wife is bugging me to go... what an anti-climax.



*Later that evening...*


Just re-reading my last post

> Stay tuned for when you’ll actually be able to kill a monster!

Man, that was a while back. Since then let's see, what has happened:

- Monsters have appeared in the village
- So has a messages window displaying the last few game messages
- Monsters can be killed, they also hit back!
- Wow, and they move *around* buildings. Hold on, this calls for a new section!

## A* Pathfinding

So up to now the monsters did a vector subtraction from itself to the hero, actually that's not right, the monsters just compared it's coordinates to the hero and moved either it's x or y position to be closer. This means that they won't be able to move around most obstacles that causes their distance to the hero to increase and they get *stuck* on buildings. This was a very simple algorithm that served it's initial purpose but now, needed to be rewritten.

Introducing: [http://www.redblobgames.com/pathfinding/a-star/introduction.html](http://www.redblobgames.com/pathfinding/a-star/introduction.html)

I could probably just stop here. Amit from [RedBlobGames](http://www.redblobgames.com/) is pretty amazing. It took me about 12 mins (article reading time) to gain a detailed and comprehensive understanding of how A* works. His interactive explaination is clear and concise, a pleasure to read. In a sentence, A* is breath first search where the next node is prioritised by the distance from the starting point and the remaining distance to the goal (estimated using a heuristic).

So I went about implementing it until I found someone had already done one! And their API was perfect. So after a few exchanges, he turned his AStar.elm module into a package: https://github.com/krisajenkins/elm-astar and in a matter of one afternoon, I had monsters moving *around* obstacles coming for youuuuu!!!! Awesome. Oh and I didn't have any bugs doing this because I was using Elm, naturally.

## Dungeon Generation

Pathfinding seemed like such a big task at first. Through Amit's blog and the subsequent library that I found, the task became very simple. This optimism carried through to what I'd now consider to be the most complex part of the game. Dungeon generation. When I started this a month ago, I had told myself, I'll get it done over the weekend. Put in some solid 8 hours and it should be fine. Fast forward 4 weeks and ~20 hours? 40 hours? later, I think I'm about 1/3 of the way.

But that does not worry me, because writing Elm makes me happy ^_^ and so I've really enjoyed this experience especially since I've picked up a few new tricks along the way. But first, let's have a look at what I've done over this time.

### In the beginning

The idea here is to build the rooms and then join them to form connected rooms. Put a set of up stairs in one of them and a set of down stairs in another room and voila! Bob's your uncle!

![room take1](/cotwmtor/images/room_take1.png)
*Rooms Take 1: A room with walls and floors!*

![room take2](/cotwmtor/images/room_take2.png)
*Rooms Take 2: Oh look, doors!*

![room take3](/cotwmtor/images/room_take3.png)
*Rooms Take 3: Width and height are randomised!*

![room take4](/cotwmtor/images/room_take4.png)
*Rooms Take 4: Many rooms! But there is no collision rules between them.*

![room take5](/cotwmtor/images/room_take5.png)
*Rooms Take 5: Pathfinding ephiphany! The beginning of corridors.*

A bit of context here. I was thinking about how to co corridors for a while until I realised that generating a corridor between two doors is just like generating the path a monster takes to get to the hero. And since I'm using manhattan heuristics as a path estimate (straight line distance) the corridors will go straight from one door to another with the least amount of bends. This is in keeping with the original game corridors which were pretty straight.

### Onto the next phase...

So with rooms, doors and corridors done, the coder moves on to tackling more important issues like how come there are so many doors on a room and why do rooms overlap. Herein is chronicled the feeble attempts at solving these issues.

![room take6](/cotwmtor/images/room_take6.png)
*Rooms Take 6: It's a bit silly how many doors are on a room.*

![room take7](/cotwmtor/images/room_take7.png)
*Rooms Take 7: Fixed! Oh wait, the doors are always on the same sides, need to shuffle the walls before placing doors on them so it randomises the walls.*

![room take8](/cotwmtor/images/room_take8.png)
*Rooms Take 8: Fixed again!*

![room take9](/cotwmtor/images/room_take9.png)
*Rooms Take 9: Ok now roooms shouldn't collide with each other since I'm checking whether the corners of a room is within any other rooms and throwing it away if it is.*

![room take10](/cotwmtor/images/room_take10.png)
*Rooms Take 10: Doh! The **corners** are not in another room, but the x and y still intersect.*

### Introducing more rooms!

Castle of the winds had about 5-6 different room types, rectangular, circular, potion like, diamond and a weird two rectangles joined at a corner thing. I had initially wanted to hardcode the other room types as ascii maps and just add them, but then decided to make them dynamic so they can be as big or small as I want them. In hindsight this has taken *alot* of time and I'm not sure if it's all been worth it. Anyway, enjoy...

![room take11](/cotwmtor/images/room_take11.png)
*Rooms Take 11: Phew! That took a whole night, cross rooms are a pain in the arse.*

![room take12](/cotwmtor/images/room_take12.png)
*Rooms Take 12: Cross rooms with doors!!!*

![room take13](/cotwmtor/images/room_take13.png)
*Rooms Take 13: Here is a cross room, a rectangular room and a dead end which just consists of one door that opens into nothing. Pretty dangerous for a low level player to encounter one of these whilst running away from a giant ant!*

At this point I take a break from the slides and have a look at my code. Oh boy what a mess!
(Hint: Follow the seed -> seed' -> seed'' -> seed''')

~~~~
rectangular : Int -> Random.Seed -> ( Room, Random.Seed )      
rectangular size seed =       
    let       
        ( ( width, height ), seed' ) =        
            Dice.roll2D size seed     
                |> \( ( x, y ), s ) -> ( ( max 4 x, max 4 y ), s )        

        ( xMax, yMax ) =      
            ( width - 1, height - 1 )     

        corners =     
            [ ( 0, 0 ), ( xMax, 0 ), ( 0, yMax ), ( xMax, yMax ) ]        

        walls =       
            [ List.map (\y -> ( 0, y )) [1..yMax - 1]     
            , List.map (\y -> ( xMax, y )) [1..yMax - 1]      
            , List.map (\x -> ( x, 0 )) [1..xMax - 1]     
            , List.map (\x -> ( x, yMax )) [1..xMax - 1]      
            ]     

        doorGenerator =       
            Dice.d 6      

        ( ( shuffledWalls, nDoors ), seed'' ) =       
            Random.step (Random.pair (shuffle walls) doorGenerator) seed'     

        ( newWalls, doors, seed''' ) =        
            addDoors nDoors ( shuffledWalls, [], [], seed'' )     

        floors =      
            List.Extra.lift2 (,) [1..xMax - 1] [1..yMax - 1]      
    in        
        ( Room doors newWalls floors corners Rectangular ( width, height ), seed''' )
~~~~

Compare that to what it is now:

~~~~
corners : Dimension -> Walls
corners ( w, h ) =
    let
        ( xMax, yMax ) =
            ( w - 1, h - 1 )
    in
        [ ( 0, 0 ), ( xMax, 0 ), ( 0, yMax ), ( xMax, yMax ) ]


floors : Dimension -> Floors
floors ( w, h ) =
    let
        ( xMax, yMax ) =
            ( w - 1, h - 1 )
    in
        List.Extra.lift2 (,) [1..xMax - 1] [1..yMax - 1]


walls : Dimension -> List Walls
walls ( w, h ) =
    let
        ( xMax, yMax ) =
            ( w - 1, h - 1 )
    in
        [ List.map (\y -> ( 0, y )) [1..yMax - 1]
        , List.map (\y -> ( xMax, y )) [1..yMax - 1]
        , List.map (\x -> ( x, 0 )) [1..xMax - 1]
        , List.map (\x -> ( x, yMax )) [1..xMax - 1]
        ]
~~~~

I feel obligated to stop and explain why I took a week to learn about generators but if you like to skip and keep watching the slides, I won't be disappointed :)

### Generators

Here we get a bit technical. One of the major differences between FP (functional programming) and OOP (Object orientated programming) is in state mutation. 

State mutation means that a variable which held one value at one point in time, is allowed to hold another value at another point in time. FP people don't like this, OOP people *don't* like this either! Because it creates alot of confusion which leads to bugs. But it also means that with OOP, you can just call a simple function to give you a random number and let the underlying library hide away the state mutation details of how it's generated. But in FP languages, you can't.

In Elm, up to now, keeping track of seeds for random numbers have been **painful** because each time we generate a random number, we need to keep track of the updated seed. Hence in the code above, I end up with seed''' to denode the 4th update of the seed!

Introducing Generators!

In Elm, generators is a object that will generate *something* when you combine it with a seed. This something can be a number between 1 to 6, or it can be a room with doors and walls or it can be a whole dungeon level! This is great, because then, to generate a whole dungeon floor, or maybe even a whole dungeon, all I need to do is pass the first seed, have it generate a dungeon and then pass back the resulting seed! It's a problem that doesn't exist in OOP, but figuring this out in Elm makes me very happy!

Enough of this aside, back to the slides.

### The editor

So at this point, I have my generator and I've rewritten the cross room to use it, looks great! But I'm getting tired of having to recompile and refresh my page each time I want to tweak a room configuration such as size or number of doors. 

Introducing the editor.

![room take14](/cotwmtor/images/room_take14.png)
*Rooms Take 14: A diamond room with a random size betwen 7 and 10 tiles in dimension.*

![room take15](/cotwmtor/images/room_take15.png)
*Rooms Take 15: Added frequency of rooms. How often a room appears equals to it's frequency divided by the sum of all frequencies.*

![room take16](/cotwmtor/images/room_take16.png)
*Rooms Take 16: All the rooms I've created so far, in one happy family snap.*

## Next time...

So that takes us up to where I am now, a third of the way through dungeon generation, whilst building a simple editor (more like dungeon playground) to make testing easier. It's been an absolute pleasure making the dungeon so far and I hope by the next blog, I'd have some really cool finished dungeons to show.

In the back of my mind, I'm subconciously aiming at the end of the year to complete the game. It's been a long journey, one that started in 2012 with typescript, jQuery and a friend. Thank god I still have the friend, but the other two... abandoned! Now, it's something that I do want to complete and I think that I can complete it. I am excited to see what happens next! Stay tuned for Part 2! (and I'll fix up the RSS feed so you *actually can stay tuned* if you want to.)

But until then, please star the [project page](https://github.com/mordrax/cotwelm), cause my sense of self worth *totally* does not depend on how many stars I have on that page.
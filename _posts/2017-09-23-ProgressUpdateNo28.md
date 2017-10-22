---
layout: post
title:  "Progress update #28"
date:   2017-10-22 10:00:00PM
published: true
comments: true
---

I just read the start of my last entry, wow... wouldn't want to be that guy, must suck to be in that situation. Phew, anyway, hang on, let me gather my thoughts on the last two months or so... what do we have since the 23rd of July...

Ah yes, here, some  [minor](https://github.com/mordrax/cotwelm/commit/dbc571964bbc03d7e66f1de2416e0ca3a1c27ea5) [refactoring](https://github.com/mordrax/cotwelm/commit/7b0f274697d498bfa5f089ec1b358672a2c93df7), [couple](https://github.com/mordrax/cotwelm/commit/65db47414b02fcdd8ca5bb050036192576e74939) [of](https://github.com/mordrax/cotwelm/commit/19ec8c39a62d75a43b130844432e7a417c612d3c) [fixes](https://github.com/mordrax/cotwelm/commit/f56f11baa63256136f863bb9360eb66535dad8b9). Nothing really special... [loot](https://github.com/mordrax/cotwelm/commit/b44d8fbc7a13b3b1f04156005dc50c12e3a5a695), [leveling](https://github.com/mordrax/cotwelm/commit/0837a572b6c5c969d3a8f3a3334eb43821623790), oh! this is nice, so this guy that I met in the elm #gamedev channel made a [lexical random generator](https://github.com/xarvh/lexical-random-generator) which I've used to generate some random names for monsters!


![Infect duplexer the giant rat](/cotwmtor/images/random_name.png)
*Oh man! Hard done by the RNG, an Infect _Duplexer_ on level 1!*


Then looks like there was a whole bunch of bug fixes to shop messages, equipment, interrupting a rest if a monster comes into sight ( it used to be that you kept resting until healed, but then a monster could walk up to you and kill you as you were resting... ), ohhh  got hover over item descriptions, made a character info screen, even took a screenshot ( I believe the button on the game screen works too, or 'c' ).


![Character info screen](/cotwmtor/images/charinfo.png)
*Blue is your base attribute and green is modified attribute. Enchantments, draining, potions etc will either temporarily or permanently modify attributes.*


Ah yes, finally bothered to fix up the tombstone as well. Now it shows the last game message and turns survived. Took me a while to get the text aligned just right in the tombstone. I'd imagine if I had used a proper game/graphics engine, it wouldn't be as hard. The original goal ( 5 yrs ago ) of learning CSS by making a game with it hasn't withstood the test of time. I've learned CSS, and it still sucks. The thing is broken as bat shit. Doing the styling of the game in CSS feels too much like work. Or perhaps I just don't want to admit that the real issue is, I'm using a document layout/style engine to make a interactive game.

![Rest in pieces](/cotwmtor/images/rip_improved.png)
*Rest in pieces. Dang Dang Daaaahhhhhhnnnn!*

Ok, now let's see... ahh, this deserves it's own section [refactoring the dungeon generator](https://github.com/mordrax/cotwelm/commit/8256469a50a20ff65066e3c7d8cc2aad22159424). Then more bug fixes, oh, signs and broken doors and ... invisible giant mauls? Ah, that was because monsters were dropping their own equipped weapons which didn't have any images associated with it. Yes that's right. Whilst the player uses a Short Sword, that little goblin over there has got quite the surprise in store!

![Signs](/cotwmtor/images/signs.png)
*Here be a sign: Walk into it to read it.*

## Dungeon generator rewrite

So, a more apt name for this blog would be 'Mordrax's various rewrites'. As I look back on my activities, much of it has been, 'Oh look, this can be done a bit better, let's rewrite this... again ... and again...'. Productivity of these rewrites are questionable, I hear you think, but let me try to justify to the avid reader, a shareholder in the completion of this game, why _this_ particular rewrite was necessary.

#### Dungeon Generator: First attempt

So this story began [eleven moons past](/cotwmtor/2016/08/20/DungeonPart1.html). I was a younger, more naive lad optimistic about my dungeon generating skillz. At it's completion, I posted a [final update](/cotwmtor/2016/11/06/DungeonPart3.html) to signal that I was finished and moving on. The whole thing actually took me THREE AND A HALF MONTHS! Damn!... Why oh why am I doing this again... ok, breathe, focus, calm down... so, at that point, the dungeon generator was done, but there was two problems with it.

#### Problems

1. It performed badly. Each generated dungeon took anywhere between 3 to 10 seconds (in-game). This was unacceptable.

2. The code was particularly bad. It was buggy, complex and brittle. These three characteristics overlaps alot and so changes to it had a higher rate of creating logic bugs. Eg when overriding tile visibility in the dungeon editor it also overrode tile visibility in-game and improving the data structure caused weird hit box issues causing lighting of rooms to be out of sync with character position!

#### First problem

As I alluded to, even though I knew that the generator was suboptimal, I avoided a rewrite, preferring to do some quick and dirty fixes.
Chrome's developer devTool profiler quickly located the bad data structure issue ( using a list where a hashmap was required ). Changing this into a dictionary reduced dungeon generation time to 1-2 secs. Simple, [one hour fix](https://github.com/mordrax/cotwelm/commit/6958876d75ea64eec768ec3f98584064e93c3ac7).

That was great! Dungeon generation was now bearable again, 1 to 2 seconds and we're off to the races! Not quite...

#### Second problem

The code wasn't particularly robust. The dungeon generator was the first time I had written 'generators', a technical term in functional programming not to be confused with the actual 'dungeon generator'. It was also the first time I had attempted to make a dungeon generator. And there were more problems than I'd like to admit. So even by simply changing the data structure used to solve the first problem, I ended up introducing more bugs :(

### Dungeon Generators

So let's talk about how we generate dungeons briefly. The first attempt went something like this:

#### The digger
First we create a room, and add it to a list of 'active points'

Then whilst the condition for a dungeon level isn't met, we just repeatedly loop through the list of active points:
1. If it's a room, add random doors to the room. Add these doors to the 'active points' and remove the room from 'active points'
2. If it's a door, try to add a random corridor to it.
    - If we succeed, then remove the door from active points and add the end of the corridor to active points.
    - If we fail, then just remove the door from active points and also from the room.
3. If it's a corridor, either finish it in a room or extend the corridor in a valid direction.
    - If we finish it in a room, add the room to active points.
    - If we extend the corridor, then remove the current end of the corridor and add the new end to the active points list.

The condition for a dungeon level in this case is simple, have at least 8 rooms.

This algorithm is seemingly simple at first glance however, there was a fundamental problem with it along with other issues once it got into details.

The fundamental problem was that there was no guarantee of generating a dungeon with a certain number of rooms within a constrained dungeon size. Come to think of it, it'd have worked if I'd drawn the dungeon _around_ the finished product but instead, I threw away any dungeon that didn't fit which meant at times, it took 15+ secs to generate a dungeon.

Other issues were about handling collisions between corridors. Should the corridor look ahead and try to fit itself and/or a room into the space it has. I also needed to keep track of the original direction of the corridor because in Castle of the Winds, a corridor never turned more than 90 degrees in any direction from it's start. And to make matters more complicated, I used a single data type ( tuple ) to represent local/world coordinates and a unit directional vector. These often were the source of bugs as I realised that I had not converted between one to the other before doing some collision detections. To be working in Elm and admitting to the last case for bugs is... a fail on my part, but it was what it was and I learned my lesson from it. ( The language I'm using has ADTs, algebraic data types, which means it is able to represent x, y world coordinates or x, y local coordinates or x, y unit vectors as distinct and will stop at compile time if there was a mix up. I just didn't use that feature and caused myself more pain. )

#### The pathfinder

Fast forward a year and I found myself re-thinking this problem from another angle. I'd seen dungeons generated by placing rooms first, if I'd done this, then it would be much easier to get a guarantee of 8 or 10 or n rooms right from the start. However, I had not gone down this path because it would get very complicated quickly to try and put corridors in this dungeon. Especially with the constraints that corridors cannot turn more than 90 degrees overall. Surely this would end in alot of rooms just being unreachable. But if I'd joined rooms close to each other, it would reduce the chance of 'blocking' rooms from being joined and I liked the idea of creating all the rooms at the start. I also realised that I could use the A* algorithm to find a path between two doors. Only later did I develop this idea into a very nice generalised concept of solving for corridors rather than solving for a path between two tiles.

1. Generate n rooms.
2. Pick a room randomly and add it to a list of 'connected' rooms. Connected rooms will be used to generate up/down stairs later.
4. Pick a random room in the connected rooms list and a unconnected room.
5. Find the walls that face each other. Since corridors cannot turn more than 90 degrees in either direction, it is impossible to join two north pointing doors hence doors facing N can only join other doors facing S, SW, SE, E, W. Therefore between any two rooms, either the eastern wall of one faces the western of the other, or the southern wall faces the northern, or both.
6. Generate a random door on each room's valid walls. A wall is defined as any tiles that are at the most northern, southern, eastern or western coordinate of the room. This matters because if a door is created for a wall that isn't at a x, y edge, then there is a chance corridors will clip the room causing a diagonal crack! ~~~_in the fabric of spacetime..._~~~
7. Try to join the two doors using a modified A* algorithm customised for the corridors of castle of the winds ( described after this ). If the rooms cannot be joined, move the unconnected room into another set.
8. Goto step 4 until there are no more unconnected rooms at which point we can pick two rooms at random to put the up/down stairs!

This algorithm works *alot* faster, sub-second compared to the optimised digger, even with a greedy A* search that has to find paths between 20 or so doors in a 100x100 map. The reason for this, I believe, lies in how the neighbour function works.

#### Custom corridor A*

So I'm using the A* algorithm for pathfinding across a map made up of a grid in cartesian coordinates. Each square of the grid is a tile, and each tile has a x, y coordinate. The neighbours are straightforward and each step in any direction has the same cost. Given this information, you can generate the shortest path between two points in A* fairly efficiently. However, this algorithm moves one tile at a time whilst the corridor is made up of straight lines.

![Corridors](/cotwmtor/images/corridor-example.png)
*Corridors have up to 3 bends, always travelling in a similar direction.*

So instead of making neighbours adjacent tiles, between any two points, a corridor can only take 4 possible routes which looks much like a parallelogram and a rectangle. Here's an example:

![Possible paths](/cotwmtor/images/possible-paths.png)
*From A to C, only 4 possible paths, B -> C, B1 -> C, D1 -> C, D -> C*

Given this holds for any two points, which in our case is any two doors, it means that it is very fast to work out if any two doors have a possible corridor between them! I had to modify the A* algorithm I was using to be more generic but once that worked, the final solution was much faster and simpler than the first attempt. Overall, fairly happy with the result. I still need to put in corridors joining each other but that is a story for another time.

## Next...

So. Alot has happened. In fact, the game is now playable. You can create a character... oh what am I saying, go try it out, link on the bottom of page. Playable doesn't really mean enjoyable. There's still alot missing. Whilst you can buy stuff, kill monsters, level up and die, there still isn't magic, traps or any plausible explaination of why you're heading into a cave which for some reason contains immaculately carved out rooms and a guaranteed set of staircases that joins level after level of said rooms, filled with monsters and valuable treasure just lazily scattered on the floor. So the game feels incomplete because it is, and it's incompleteness, I think, makes it alot less fun.

After my last post, I asked a good friend of mine to look at the game and make a list of all the things that needed to be done, in his view, to make the game _barely_ playable and this was the result. I can happily look back on the last month and be satisfied at the result however, the best is yet to come.
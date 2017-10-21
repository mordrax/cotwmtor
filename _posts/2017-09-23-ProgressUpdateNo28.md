---
layout: post
title:  "Progress update #28"
date:   2017-09-23 11:00:00AM
published: false
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

A more apt name for this blog would be 'Mordrax's various rewrites'. As I look back on my activities, much of it has been, 'Oh look, this can be done a bit better, let's rewrite this... again ... and again...'. Productivity of these rewrites are questionable, I hear you think, but let me try to justify to the avid reader, a shareholder in the completion of this game, why _this_ particular rewrite was necessary.

#### First attempt

So this story began [eleven moons past](/cotwmtor/2016/08/20/DungeonPart1.html). I was a younger, more naive lad optimistic about my dungeon generating skillz. Actually, it had begun twelve moons past as I was already a moon into the generator at the time. At it's completion, I posted a [final update](/cotwmtor/2016/11/06/DungeonPart3.html) to signal that I was finished and moving on. The whole thing actually took me THREE AND A HALF MONTHS! Damn!... Why oh why am I doing this again... ok, breathe, focus, calm down... so, at that point, the dungeon generator was done, but there was two problems with it.

#### Problems

1. It performed badly. This was easily benchmarked. Each time a dungeon was generated, it would take anywhere between 3 to 10 seconds in-game for a dungeon to appear. This was unacceptable. There was two reasons for why it took so long, data structures and the algorithm.

2. The code was bad. It was buggy, complex and brittle. Which is really the same thing. This meant that every time I had to touch it, there was a good chance of introducing bugs and in fact, the last two times I did touch it, first for overriding tile visibility in the dungeon editor ( we want all tiles to be visible when testing out the generator via the editor as opposed to in-game where they are made visible by exploration ) and the second time was when I was fixing up the data structure to give it a 500% performance boost!

#### First solution

As I alluded to, even though I knew that the generator was suboptimal, I avoided a rewrite, preferring to do some quick and dirty fixes.
Using Chrome's developer tools (profiler), I quickly found that one of the reasons why it took so long was because I was using a list to represent the map and everytime a room or a corridor was generated and asked 'does this fit in the map?', I would have to iterate through each tile of the room/corridor and compare it to _each tile of the map_ because it was a list. Changing this into a dictionary gave me the 500% performance boost. Simple, [one hour fix](https://github.com/mordrax/cotwelm/commit/6958876d75ea64eec768ec3f98584064e93c3ac7).

That was great! Dungeon generation was now bearable again, 1 to 2 seconds and we're off to the races! Not quite...

#### Second problem clause to first solution

So, the second problem said 'everytime I had to touch it', referring to the dungeon generator code

## Next...

So. Alot has happened. In fact, the game is now playable. You can create a character... oh what am I saying, go try it out, link on the bottom of page. Playable doesn't really mean enjoyable. There's still alot missing. Whilst you can buy stuff, kill monsters, level up and die, there still isn't magic, traps or any plausible explaination of why you're heading into a cave which for some reason contains immaculately carved out rooms and a guaranteed set of staircases that joins level after level of said rooms, filled with monsters and valuable treasure just lazily scattered on the floor. So the game feels incomplete because it is, and it's incompleteness, I think, makes it alot less fun.

After my last post, I asked a good friend of mine to look at the game and make a list of all the things that needed to be done, in his view, to make the game _barely_ playable and this was the result. I can happily look back on the last month and be satisfied at the result however, the best is yet to come.
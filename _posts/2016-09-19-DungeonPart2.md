---
layout: post
title:  "Pathfinding and Dungeon Generator (Part 2)"
date:   2016-09-27 12:00:00AM
published: true
comments: true
---

## Dungeon generation slogfest...

So it's been another month and man am I getting over the dungeon generation now. Since the last blog, I've rewritten the algorithm and redesigned the code countless times. 
I think the crux of my mental block is this: I'm trying to write a random digger algorithm that does not act randomly when it hits obstacles. And I'm trying to
do it all in one function! Functional programming is great for when you have a concise and single goal which then you encode in a set of functions. Actually, any programming 
is great when you have clear and concise goals. But enough excuses, it's time to finish this or I might be finished by this...

## Where we left off

So last time, I stopped at the beginning of the dungeon editor or should I say configurer as it's main purpose is to allow fast tweaking of a dungeon's configurable aspects
such as room size ranges and frequency of rooms etc.

![the ability to specify multiple rooms with random doors on each wall](/cotwmtor/images/dungeon_take0.png)
*Rooms Take 13: Continuing from part 1, the ability to specify multiple rooms with random doors on each wall!*

From this, I added the ability to scale the map and add arbitrary numbers of rooms! This was fairly easy, just some css transforms for scaling. This would come in handy
for a mini-map later on.

![Rooms for everyone](/cotwmtor/images/dungeon_take1.png)
*Rooms Take 14: Rooms for everyone!*

However, it was at this point where I went oh ^\*@#$!, how am I supposed to join all these rooms with corridors and which rooms to join and what happens when corridors collide etc etc... there were quite a few
concerns around this which I felt wasn't very easily solvable. So I decided rather to write a digger algorithm. What the digger would do was start with a empty dungeon and
dig a room. Then make a door. Then dig a corridor from the door. Then dig another room. This is a repeatable pattern and is something which, if done properly ( *and I stress
the IF DONE PROPERLY* part ), would be quite easy as it's really only two main functions, make room and make corridor! It would then recursively make more rooms and corridors
until it filled the dungeon!

I don't know what happened, it dragged on, the functions got more complex and another month passed.

*One month later...*

So now I present to you, the digger algorithm!

![Corridors adjoining rooms](/cotwmtor/images/dungeon_take3.png)
*Dungeon Take 1: Corridors adjoining rooms!*

There were too many variables here and debugging in Elm is still pretty painful. Not only is it console, it's non-formatted, ugly console! Luckily it's rare to get bugs in
Elm and almost impossible to get regression bugs. I fixed my first regression bug in 6 months when I added a second css transform to a html element and it overwrote the
first one.

![Things are stabalising... diagonal paths are joining rooms correctly](/cotwmtor/images/dungeon_take4.png)
*Dungeon Take 2: Things are stabalising... diagonal paths are joining rooms correctly.*

![Now all corridors join rooms correctly](/cotwmtor/images/dungeon_take5.png)
*Dungeon Take 3: Now all corridors join rooms correctly!*

![Fixed a bug where the exit of the corridor didn't have a door](/cotwmtor/images/dungeon_take6.png)
*Dungeon Take 4: Fixed a bug where the exit of the corridor didn't have a door.*

![](/cotwmtor/images/dungeon_take7.png)
*Dungeon Take 5: Finally got walls of corridors.*

It took me a month to get to the first digger image, but just one weekend to get the rest of the way to a *almost* believable dungeon. Granted that the family was away
on the weekend (but I was also sick), I think it just goes to show how double edged the human mind is. A mental block can be crippling motivationally and really sapped my energies
however, once I got over that, the floodgates opened and each little progress added up to some nice results.

## Elm

There is something really special about this little language and I'm glad that I was half enticed, half walked into it. I'm glad Evan Czaplicki thought it worth his time to
write this language and I'm glad that I gave it a chance. There are many moments of sheer pleasure working with it, thinking about the architecture and subsequent continual 
refactoring of the architecture is both fun and very rewarding. It is a thinking man's language, a no magic and everything upfront language,
one that allows a categoriser (like myself) to make and categorise functions to his heart's content. If there was a thing as a favourite language, then this would be it for me.

I remember a old uni lecturer, a great teacher, Richard Buckland who formally introduced me to the first programming language at uni, Haskell. Before that, I was just hacking
away at games using QBasic and VB5. He was brilliant at taking complex subjects like big O notation, recursion, binary sorting etc and making it simple. There's one idea of
his that surfaces in my mind now and that is the idea of traffic lights. 

Traffic lights stop traffic. They cause you to stop and start. And even if there are no cars moving in the green direction, it still stays green for the same amount of time! 
What a waste! Wouldn't it be more efficient without them? Rhetorical question, just go to China and you'll see what happens without them. A fraction of the cars compared to
a city like Sydney but everything gridlocked with *ALL* traffic moving at 10km/h at *ALL* times. People weave through traffic, motorists weave through traffic, cars goes on
footpaths to avoid the people on the road, no one takes note of the lights, it's fairly comical to experience the irony whilst in the middle of it. At least a good thing is 
that the most serious accident you'll have during the day is a paint scratch! Night's a totally different story with crazy taxi drivers speeding through the dark... story
for another time.

How does this relate to anything? A language is like the traffic lights and our code is like the traffic. In a language with no rules (javascript), it's very easy to go
really really fast, everywhere, even on pavements, to get the job done! But the more complex the system, the more traffic... the more trouble because everything can potentially
be a problem to everything else. Arguments that are null, objects that don't have the field you want, values that change depending on when you read it, when everything moves
all the time, you have to safeguard against everything, all the time!

Elm gives you guarantees, when the light is green, *NO ONE* but those in the same direction goes. You are therefore safe to rely on these little facts. Facts about parameters
that can only be what you say it is. You say it is a string, well, that's what you'll get... each and every time. Because you'll get a string when you ask for a string, you'll
never need to cater for when a string is not a string (but a null value). Because a case statment will guarantee that all cases are catered for, you are guaranteed that no
conditions of the case is ever not catered for. Variables are immutable so everytime you look at a variable, it's the same value, so your functions that use that variable will
always return the same predictable result, and your program that runs these functions will return the same predictable result, every.single.time. Boring right? But man is that the bloody holy
grail of the programmer. I would kill for that level of boredom!

So as simple and small as these little rules are, they are so powerful when put together. And me, I just feel like a little toddler with a bag of legos. Each block is made
 to fit with the other in a predictable and flexible way. The only variable is your imagination. It is just wonderous!

## Testing

As a total contrast to the previous section where I got carried away a bit, I had started down the testing path because there were too many bugs in the corridor code and I
couldn't really see things clearly, couldn't separate the APIs apart and really hated the chrome console debugger. So I started using elm-test. Whilst it's a great package 
and I wrote some tests, I realised after refactoring the module, that I really didn't need them after all so I've left those tests in there as a reminder of the dark 
period that one can get into if the module's API and data structure are not well defined.

## Next steps...

I'm not finished with the dungeon yet. With renewed energy, I'd like to remove collisions, make it possible to have more than one door from a room, and can't forget, join
new corridors to existing corridors/rooms to create a bit of a loop otherwise the dungeon would be a very boring A -> B affair. I think it would also be suitable to have
a fitness function to judge whether a dungeon is good by working out how many different paths one can take to get from stairs to stairs, a fun exercise for next time.

Oh and I found these, I was too poor to afford to buy it at the time, only played the shareware part of the game until much later. Enjoy!

![old 144 inch disks](/cotwmtor/images/disk144.jpg)
![old floppy disks](/cotwmtor/images/disks.jpg)


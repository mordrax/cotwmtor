---
layout: post
title:  "April already!"
date:   2017-4-6 12:00:00AM
published: true
comments: true
---

## Welcoming the new year!

Since the last post, I have:

- gone for a 78km bike ride (my longest yet) around the M4/6/7 in Brisbane. It's such a beautiful city for riding, I wish Sydney was more like that.
- flipped a 4WD on a flat farm road! With my son in the passenger seat, neither of us seat belted. I know horrible father... Gives me the shivers when I think about that still.
We were very lucky to get out alive and unhurt.
- almost thrown in the towel... when motivation was at a low point, why am I remaking this again?
- made 92 commits with ~1500 lines of code, lots of features, refactors and currently steaming ahead!

Let's start at the beginning of the year...

## The Arena...

So last year, I started working on the arena, basically a game balancing tool that will let me see at quick glance how the player fares against various foes of the dungeon!
I spent a good portion of January adding stats, making it run smoothly and modifing monster stats so that it wasn't too hard for the player.

However, I hit a problem with the arena after using it for a bit. I didn't really know what level to set the player vs monsters so I set them at the same level. Then I had to
make up rules about how much hp the hero or monster gained per level. I also wasn't sure what sort of weapons the hero would have at a particular level so I picked a few
different sets of equipment to compare to the monsters. Then, painstakingly, I modified the stats of the monsters, one at a time so that the hero had a fair chance (70%) of
being the winner in 2000 matches, that the battle would not take too many turns and that there was a good % of time in which hits connected. Each of these factors, I believe,
are important to getting quick and fun combat.
However, I was tweaking the stats for each monster and it really felt a bit contrived. The names and types of the monsters really meant nothing. The most important aspects of
a monster was their hp, dex and equipment.

![Arena with weapon comparisons](/cotwmtor/images/stat_weapon_comparisons.png)
*Weapons, hit chance, average health remaining, you name it, we've got it!*

Being a bit disillusioned by how much my older self no longer enjoyed making up numbers for imaginary beasts, the arena dragged on to the end of February at which point
I put the thing aside to work on some other things.

## Some other things

So I dragged myself away from the arena and proceeded to crunch through some smaller but no less important features:

- *Click to walk* didn't work for buildings and items, they would block the mouse cursor from hitting the tile below. Fixed. You can also *click to go up/down stairs*! This would be really useful when played on the phone.
- I added *field of view* over the span of 1-2 nights. It was quite a fun thing to do. Learned in the process that FOV is a very hot topic in the roguelike community with tens of different algorithms used by various roguelikes.
- Started with a small refactor that snowballed into one of the *largest refactors to date*, dwarfing the items refactor which saw me change over 2k lines of code in a week.
  The code looks cleaner and more maintainable... at least for the next 3 months. My theory is that half the time, we refactor because we forget our own intentions. The other
  half is procrastination on features.
- Added light to rooms!
- Gained some inspiration for *The Pit*, a place far darker than the arena ever was.
- *Removed IdGenerator*!!! Now this has everything to do with functional programming and nothing to do with game design so all I'll say is, it was a very good day when I got
  rid of this piece of crap that I had lugged around for the better part of a year.
- Added a proper *game loop* that would perform various functions of the game and pass it along the pipeline. Part of that was separating out the collision and rendering engines.
- Re and re-rewrote the FOV, A* pathfinding due to poor performance
- Put in a proper heroku deploy process which means I'm no longer commiting 20k lines of compiled js changes and can deploy when I want.

That pretty sums up the last 4 months of activity, actually, more like the last month of activity. The first 3 months was just battling arena, motivations, etc...
It is not easy for me to finish someting. In fact I can probably count on one hand the number of games that I'd finished. And I definitely have not finished any side project
that I've started. But I want to finish this. I want to say that this time, it will be different. We shall see.

## The pit

So if you'd been reading and not just skimming the last section, you'd have seen mention of 'The pit' and been curious what it is. The basic idea is as follows, rather than
artificially setting mosnter attributes, stats, weapons etc such that they follow a curve of easiest to hardest, I will make these monsters with attributes, equipment and special
attacks which makes sense for the monster (which also happens to be alot more fun to do) and then have them fight each other in a round robbin style tournament to determine
their own rank! This way, I don't balance the monsters, they balance themselves!

Wow, Joe, that was a brilliant idea! And here is the result of a weekend hacking away at the pit.

![Round robbin monster tournament](/cotwmtor/images/pit.png)
*The pit: Monsters duking it out for glory!*

So what's happening here is the row fights the column and wins a % of time. The colors shows a skew of winning, red if the row is losing more and green if the row is winning more.
This way, it's easy to see at a glance if any monsters is a bit overpowered because it would show up as a row of greens. Once I have let this run for a few hundred matches, I
can just take the number of wins for each monster as the inverse of their rank (the most wins being the highest rank). One of the beauties of doing this in one weekend was that
the Elm language being fully functional, allowed me to easily reuse the existing arena, refactor out rounds and matches, then just put another monster in place of the hero for
each match.

## Next!

The future is kind of exciting, all the list of todos are very much advanced gameplay features like magic, animations, loot!, death, enchanted and cursed items. Some of
these things will really make the game playable over the next month or so I hope.

![Very old todo list](/cotwmtor/images/fogbugz.png)
*Fogbugz todo list from the first cotw remake, cotwjs - 2013*
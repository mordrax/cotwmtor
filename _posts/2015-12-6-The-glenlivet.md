---
layout: post
title:  "On inequality, The Glenlivet and Meteor 1.2.1, Webpack, React"
date:   2015-09-09 11:20:29
published: true
comments: true
---

I'm standing here (at my standing desk) with a frosty shot of single malt scotch to celebrate the migration to Meteor 1.2.1.
There's been three roadblocks getting to this point and the scotch is for what's about to come as much as what has transpired in the last two months.
(The remainder of this post are just my ramblings, well the whole devlog is just my ramblings but this one isn't about development at all so if you're interested in cotw stuff, skip this one).

![Glenlivet (The original)](/cotwmtor/images/glenlivet.jpg)

***Inequality***

Late october mom and I get a call from my uncle in China. My grandmother's health isn't good, sounds like end stage cancer, emergency rush home. Long story short, I was there for two weeks in which she made a full recovery. Doctors didn't know what the problem was even after multiple biopsies, CT scans, endoscopies etc... and as I was leaving for home, so was she, so it was a happy ending... almost.

The thing is, this time that I went back, I took a little time to talk to the locals, to understand their lifestyle, get a taste of what it's like living in a large city like Fuzhou. What I encountered was that most of the shop owners worked 7 days a week, 12+ hours a day from 6am to late. They take a couple of weeks off for the new year when they travel back to their country town to see their families and that's it.

I spoke with a hospital garbage man, a park gardener and a pre-school teacher. They all earned somewhere between 60-100 yen a day, government rates. The first two worked 7 days, the teacher did a cruisy 5 days a week. However, the cheapest food I could find there cost about 10 yen a meal. A decent lunch was about 30 and if you were rich, you'd go to starbucks and order a latte for 38 yen. My uncle took me to one and we had a coffee and some desert, spent over 300 yen. I felt really bad after that. The chai latte wasn't even good, hot sugary, green tea. Yuck!

In China, a decent lunch would cost someone 30-50% of their daily wage. Imagine spending $100-200 on lunch (depending on how much your daily wage is). Did I mention that my grandmother's hospital fee was ~2000 yen a day. And if you can't pay, you don't get treated so I'd hate to think what happens when that 60 yr old gardener on 60 yen a day falls sick.

All this seemed pretty gloom in comparison to Australia but I had an experience there that really stuck with me that I think about alot. One evening, mom and I went walking the streets, it was my aunty's shift by my grandmother's bed side so we decided to have a walk after dinner. We walked by a couple of people throwing things into the bin, didn't think much of it. On the way back, I recognised one of them sitting at the curb with a container that I thought she was throwing away. But she had actually combined all the half eaten boxes from the bin and was having her dinner. Feeling sorry for her, I told mom to give her 50 yen. She looked quite proper, clean, dressed casually but not dirty or ripped clothing. She refused the money from mom and told us that no one would believe she had gotten that money legally with her looking like that. So she took the couple of coins and left without another word.

The girl was young, in her 20s, polite, intelligent, spoke Chinese well and seemed for all the world, a middle class person. But she was obviously struggling because she was eating out of the bin. What really struck me was that the main difference between her and I was *circumstance*. I just happened to be born into the family I was born into, migrated to a first world country and enjoy the luxury, free health care and government support if I fall unemployed. She wasn't so lucky.

I'm convinced that for one middle class person to consume and throw away the amount of crap that we do each day, many many more lower income people have to work to produce that amount of goods and services. And for one upper class citizen to live the way they do, it'll take many middle class workers to provide them that luxury (5-star dog grooming hotel service anyone?). I believe that the world has a limited, finite amount of resources, human made and natural, and what one gains, others lose out on. I could write a whole essay about this but for the sake of this being a devlog for a game, I'll just say this: Capitalism and for-profit businesses can never make the world a better place because fundamentally, it focuses on moving wealth in the direction of the few that have the most of it.

Thinking about this brought me to my first roadblock. Why am I doing what I'm doing. Does making this game even matter when the world is so unequal. I don't have a good answer to this yet, but the guilt has died down now two months after I've come back. We humans tend to forget what isn't in front of our eyes. Out of sight, out of mind.

***A new job***

I started at a new job on the day after I got back to Australia. The tech stack there is a world away from React, Meteor and Webpack. The future was very uncertain. For a time, I was back in .NET, looking into ASP.NET 5, checking out CodeGen on pluralsight and downloading VS Community. I don't mind C#, I'm comfortable with it. But it just doesn't get me excited anymore like Javascript does. Even the day that I wrote a bit of jQuery was bliss. After two months, I've gravitated back to where my current interest lies. For some reason, Classical ASP, WebForms and stored procs just don't seem to hold as much interest... In fact, I've started putting in the foundations for a proper frontend at the company using React and Webpack.

The work there isn't particularly inspiring either, I've rekindled my dislike for the 'career programmer' and the freeloaders. Working in a startup for the last 5 years, I haven't had to deal with so many unmotivated, lazy, toxic, incompetent bunch of idiots. There are good people and then there are the bad. Oh boy could I tell some stories of Panda. Boy oh boy. Much worse than Srikanth, who is now the second worst programmer I've ever had the misfortune of working with. Life is too short to be doing something you don't like. These people obviously do not like what they do because no one can be so stupid as to be that bad after a decade of programming.

Due to the dullness and lack of challenge, any semblance of a roadmap or deadlines, I've taken to working on my [Project Euler](https://github.com/mordra/ProjectEuler) puzzles to keep my brain active. In any case, I've got a better handle on work, got my direction back and will be allocating a weekly session for cotw again.

***Meteor's abandoned child Blaze***

In the last few months, the Meteor community has pretty much falled into disarray with [people getting progressively more upset about the lack of work on Blaze](https://forums.meteor.com/t/where-i-think-meteor-is-doing-wrong-with-blaze/12014) followed by [MDG abandoning Blaze altogether](https://forums.meteor.com/t/next-steps-on-blaze-and-the-view-layer/13561) and followed by the unavoidable fallout between MDG and diehard fans of what Meteor stood for before. [People left...](https://forums.meteor.com/t/why-i-won-t-recommend-meteor-anymore/5285/) for [something else entirely](https://forums.meteor.com/t/phoenix-as-a-meteor-alternative/13519/) but it left me scratching my head thinking is the alternative *REALLY* any better? For the simple developers like me who want to kind of stay up to date but actually do more than just rewrite in the latest trend, it's been a really confusing (but still exciting) few weeks of lurking the forums.

***Finally, the summary***

So basically, after all of that devlog without the dev part, I'm happy to announce that I've ported the game to Meteor 1.2.1 which uses Webpack to get the latest community of npm packages with the help of some [really smart people](https://forums.meteor.com/t/webpack-compiler-inside-meteor-es6-modules-hot-reload-and-code-splitting/11264).

Expect the next post and update to be actually game related! But for now, I'm going to go and enjoy me a bottle!






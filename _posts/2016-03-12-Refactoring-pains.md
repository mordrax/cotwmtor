---
layout: post
title:  "What does refactoring, Meteor Galaxy and Technical interviews have in common?"
date:   2016-03-12 12:00:00AM
published: true
comments: true
---

**Greetings**

I'm excited. I'm bustling. I'm wasting time blogging instead of working on unit testing. Ops, let that one slip... let's go back to three weeks ago and start from there.


**Refactoring Pains**

Activity on cotwmtor has been steadily increasing this year after I put together react/redux and decided to stick it out rather than jump to a different framework like CycleJs or Elm or PhaserJs.

Just three weeks ago, I had started the inventory system and was working my merry way through it when I came upon a problem. Oh look, class instances in redux, _bad_. And so I refactored it. And then I stumbled on ReactDnD. The problem there was that the components handling the drag/drop needed the redux state to know whether the items is allowed to be dropped. I was passing in whole sub-collections of the redux state into these components so they could pass it to the drag/drop framework to calculate these states. It was a messy business. So I asked [the community](https://github.com/gaearon/react-dnd/issues/396) and got a solution I liked. Refactored the code and it works well now.
  
What I left out of the above was the _time_ it took me and _experience_ I had refactoring this code. It took me a week of evenings, probably a solid 10 hours, alot of compile, error, compile, error iterations and alot more changing the data types, data flow, picking up more typos, forgetting component props, debugging to find out what exactly is being passed into components to finally refactor the drag/drop feature to allow for some game logic. 

The overall experience was fairly frustrating.

**Meteor Galaxy**

Meteor had been providing a free hosting service for as long as they've been operating. It is up there in terms of awesomeness. You just do a `meteor deploy <appname>` and your whole app, database and all is deployed to `<appname>.meteor.com`. However, in the last four weeks, the service has been constantly down which isn't too much of an issue in and of itself but because I have been job hunting (hope my employer isn't reading this), I've been using this project to demonstrate my Javascript skills. So this became a problem really quickly. As if that wasn't enough, they announced yesterday that they were [shutting down the free service](https://forums.meteor.com/t/meteor-com-free-hosting-ends-march-25-2016) which in and of itself isn't a problem either except they (1. said that the free service will never go away, 2. gave everyone two weeks to find an alternative solution). So as typical of Meteor's lack of PR competency, we're in another PR shitstorm with people frantically trying to find alternative solutions and trying to save the tons of awesome packages contributed by the community which would otherwise just disappear from the site.
 
My opinion of the MDG and the way they've handled/treated their community is fairly low at the moment. But having said that, the project is still the top priority so I spent a morning to switch cotwmtor over to [cotwmtor.meteorapp.com](cotwmtor.meteorapp.com)! Yes folks, we're on Galaxy! For the moment. I think $25/month USD is a bit too much to pay for this labour of love (DB not included). 

**Technical Interviews**

It's surprising how much time and energy one can ...spend... with technical interviews. I've gotten somewhat better at doing these take home problems and some of them are quite interesting to work on, like my project euler mini-questions. But there's no denying the fact that they take time/energy that I'd much rather put into my own projects. Hopefully, after I've collected a few more on github, I can just point people to them and impress them that way rather than going through the motions again. And again. And again.

There was a point in all of this ramblings. In my interviews with Thoughtworks, Campaign Monitor and various other tech companies looking for the better programmers, a commonly occuring scenario was they'd ask for testing, TDD or some evidence that the code is roubust. This is my kryptonite. I admit it, I do mostly manual testing and don't have a habit of doing unit tests. Not for the lack of attempt though, I've actually tried to do this a few times earlier in my career all with stella failures. Excuses have included the fact that I refactor the architecture of programs frequently causing much of the tests to break or that mocking out bits makes alot of micro-tests that really does very little.

But enough is enough. It's time to grow up. And besides, even Boatswain evangelises testing now, Boatswain of all people! (That is a story for another time.)
 
**Summary**

So I've picked up Jasmine and Karma, I'm looking into React component testing. This should make any future development/refactoring of cotw much smoother. There will be a startup cost in learning this and a ongoing cost in maintaining the tests but I'm hoping that it will be a overall time-saving experience.

Until next time.
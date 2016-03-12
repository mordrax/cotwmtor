---
layout: post
title:  "Inventory, React DnD, gadicc:hot-reload"
date:   2016-02-23 12:00:00AM
published: true
comments: true
---

**Inventory**

I've been playing with [React DnD](https://github.com/gaearon/react-dnd) after a failed attempt to write my own drag and drop library for the inventory. Initially, I thought to keep it simple and just do a context menu onClick but I didn't think the drag and drop would be that hard. What ended up happening was that half way through implementing the Drag and Drop feature, I realised that I was doing Redux wrong.

![Inventory WIP](/cotwmtor/images/inventoryWIP.png)
 
At some point, I had started to create classes for my buildings, items etc... and then putting the instanciated objects into my redux state. I was then getting the objects and doing OO method calls on it to mutate the state of the objects in the redux state. Of course, this wasn't triggering any updates to the components and I ended up with a sizable mess on my hands that I had to refactor to remove the class instances and put back the simple json objects.
 
**ggadicc:ecmascript-hot@0.0.3-modules.7**

Around this time that I was doing the refactoring, a [member of the meteor community](https://forums.meteor.com/users/gadicc/activity) had created an awesome package which allowed hot reloading of react components. After some head banging, I was able to make it work for me like below:
 
![Hot reloading in meteor](/cotwmtor/images/hotreload.png)

So what's happening here is that on moving a item into the shop inventory, I was getting a `Uncaught TypeError`. I made some changes, saved the file and moved the item again, it showed `should add undefined to General Store` then I went back and fixed that error. Final drag, `should add Gauntlet Of Dexterity to General Store`.

The thing is, I didn't wait for any compilations (typically on Meteor 1.3 Beta, there'd be a ~5-10 sec wait for each compile), each of the `[gadicc:hot] Updating...` took less time than it took me to move my mouse to re-drag the item. It also retained the state of the game so I didn't have to walk back into the shop and wait for that to load and drag the item again.

It made the whole process a pleasure to write.

**Frustrations**

Finally, I was able to refactor my redux state to remove all the classes. However, I hit some really frustrating issues with my react pure components. For some reason, some of the properties that was being passed in had no values but others did. This frustrated me no end as I couldn't work out what was causing it. In the end, I just added a flag safeguard to say, don't execute this code if the props doesn't exist and it seems to have fixed it... I think it has to do with the props coming into the component at different times? I don't know but I hope I don't have to deal with that again... it was a horrible night of coding to get the inventory drag/drop done.

So it's live now, you can give it a go at the same place [cotwmtor.meteorapp.com](http://cotwmtor.meteorapp.com). You can move items in between the player equipment on the left and the shop inventory on the right. If there's nothing equipped, drag the item over the equipment slot name, it should come up in a blue border.

**Next steps**

So now I have to do some drag/drop restrictions to make sure you don't end up wearing a purse on your head! And then it should be onto calculating some player stats from the equipment and monster generation!

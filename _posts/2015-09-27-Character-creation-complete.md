---
layout: post
title:  "Character creation, functionally complete, ugly as hell"
date:   2015-09-27 9:23:00
published: true
comments: true
---

I'm writing this at HK airport waiting for a transfer to Fuzhou. Last night I completed the character creation screen. Rather than making it perfect, I've opted to just get it done and move on to the actual game!

SemanticUI (SUI) is beautiful but still alot of hit and miss with me toying around in Chrome debug. I wish there was a playground where I can muck around with SUI elements. It would make the whole change a class, rebuild, refresh page cycle alot faster.

I find the JSX syntax to be quite verbose. Having to go back to raw html hasn't helped either. Webstorm doesn't yet support jade syntax highlighting. Looping and dynamic classNames are the worst offenders. E.g to add `active` to a element, I'm doing this:

{% highlight html %}
<button className={classNames("ui button", {active:this.props.value===someOtherValue})} onClick=... />
{% endhighlight %}

Loops are even worse

{% highlight js html %}
<div>
    {
        _.map(list, function (item, index) {
            return this.someRenderFunction(item, index);
            //or
            return render (
                <div>
                    // content here
                </div>
            )
        }
    }
</div>
{% endhighlight %}

Compare this to Blaze or Angular

~~~
//blaze
+each list
  // content here

//angular
<div ng-repeat="for a in list">
    // content here
</div>
~~~

However, I'm persisting because it promises to componentise my UI and also React Native. In Blaze, I tend to end up with monolithic pages that does everything because of the awkward communication between parent and child.

## Nested Schemas
I'm nesting the Player object in the Game one. I think it's quite core to the game so there is no point having it in a separate document. The player object currently holds all info in the creation screen.
{% highlight js %}

db.Schemas.Player = new SimpleSchema(...);
db.Schemas.Game = new SimpleSchema({
    player: {
        type: db.Schemas.Player
    }
});
{% endhighlight %}

## Serverside validation
Wiring up the serverside validation was fun. The player object is 'picked', checked and then inserted. Picked is a nice Underscore function that filters the object to only allow a specific list of keys. And I just happened to have that list of keys in the Player schema.
{% highlight js %}
newGame: function(data) {
    // only get the keys we allow
    var player = _.pick(data, _.keys(db.Schemas.Player.schema()));

    // data type validation
    check(player, db.Schemas.Player);

    // get the generated id to navigate to the game page!
    return db.Games.insert({player:player});
}
{% endhighlight %}

## Onwards
I'm currently thinking of how to render the tiled game, either as html elements or in a canvas. The HUD will likely be done in html/SUI. My main concern is to make it look good on both a phone and a large monitor, no scrollbars, not too much white space and good use of available space for the top-down view.
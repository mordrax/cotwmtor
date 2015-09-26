Meteor.methods({
    newGame: function(data) {
        console.log('Creating a new game: ' + JSON.stringify(data));

        var player = _.pick(data, _.keys(db.Schemas.Player.schema()));
        check(player, db.Schemas.Player);

        return db.Games.insert({player:player});
    }
});
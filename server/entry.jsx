import '../collections/server/publish';
import Games from '../collections/games';
import _ from 'lodash';

Meteor.methods({
  newGame: function (data) {
    console.log('Creating a new game: ' + JSON.stringify(data));

    var player = {
      ...data,
      attributes: _.mapValues(data.attributes, function (attr) {
        return attr.value;
      })
    };

    delete player.attributes.Available;

    //check(player, db.Schemas.Player);

    return player; //Games.insert({player: player});
  },
  ping: function (arg) {
    console.log('pong!!!' + arg);
  }
});
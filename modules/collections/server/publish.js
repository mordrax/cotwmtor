import Games from '../../collections/games';

Meteor.publish('games', function () {
  console.log('PUBLISHing!');
  return Games.find({});
});
console.log('PUBLISH.JS!!!');
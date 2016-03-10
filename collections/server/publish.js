import Games from '../games';

Meteor.publish('games', function () {
  console.log('PUBLISHing!');
  //return Games.find({});
  return {}
});
console.log('PUBLISH.JS!!!');
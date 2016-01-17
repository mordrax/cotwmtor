const db = {};
//db.Schemas = {};
//
//db.Schemas.Player = new SimpleSchema({
//  name: {
//    type: String
//  },
//  gender: {
//    type: String
//  },
//  difficulty: {
//    type: Number
//  },
//  attributes: {
//    type: new SimpleSchema({
//      Strength: {
//        type: Number
//      },
//      Dexterity: {
//        type: Number
//      },
//      Intelligence: {
//        type: Number
//      },
//      Constitution: {
//        type: Number
//      }
//    })
//  }
//});
//
//db.Schemas.Game = new SimpleSchema({
//  player: {
//    type: db.Schemas.Player
//  }
//});
//db.Games = new Mongo.Collection('games');
//db.Games.attachSchema(db.Schemas.Game);

export default db;
db = {};
db.Schemas = {};

db.Schemas.Player = new SimpleSchema({
    name: {
        type: String
    },
    gender: {
        type: String
    },
    str: {
        type: Number
    },
    dex: {
        type: Number
    },
    int: {
        type: Number
    },
    con: {
        type: Number
    },
    difficulty: {
        type: Number
    }
});

db.Schemas.Game = new SimpleSchema({
    player: {
        type: db.Schemas.Player
    }
});
db.Games = new Mongo.Collection('games');
db.Games.attachSchema(db.Schemas.Game);


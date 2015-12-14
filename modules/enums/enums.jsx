
var cotw = {};
cotw.DifficultyLevel = {
    "Easy":0,
    "Intermediate":1,
    "Difficult":2,
    "ExpertsOnly":3,
    0:"Easy",
    1:"Intermediate",
    2:"Difficult",
    3:"Experts Only"
};

cotw.AttributeDescriptions = {
    Available: [
        {value: 100, text: "Training is for wimps, you like pain, you like it alot!"},
        {value: 0, text: "You are at your maximum potential! Go get'em tiger!"}
    ],
    Strength: [
        {value: 100, text: "Hammers are for wimps, you hit with your FISTS!"},
        {value: 50, text: "Of average strength!"},
        {value: 0, text: "Unable to push open a unlocked door whos hinges has recently been serviced with WD40."}
    ],
    Intelligence: [
        {value: 100, text: "Smart"},
        {value: 50, text: "Smart enough to be at the peak of the standard distribution curve."},
        {value: 0, text: "Dumb"}
    ],
    Constitution: [
        {value: 50, text: "Able to outrun a hungry hippo!"},
        {
            value: 0,
            text: "You're having a BAD day, everyday! It's like you've got two kids that keep waking you up at night, EVERY night!"
        }
    ],
    Dexterity: [
        {value: 50, text: ""}
    ]
};

export default cotw
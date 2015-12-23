

var cotw = {};

cotw.DifficultyLevel = {
  "Easy": 0,
  "Intermediate": 1,
  "Difficult": 2,
  "ExpertsOnly": 3,
  0: "Easy",
  1: "Intermediate",
  2: "Difficult",
  3: "Experts Only"
};

cotw.AttributeDescriptions = {
  Available: [
    {value: 0, text: "You are at your maximum potential! Go get'em tiger!"},
    {value: 100, text: "Training is for wimps, you like pain, you like it alot!"}

  ],
  Strength: [
    {value: 0, text: "Unable to push open a unlocked door whos hinges has recently been serviced with WD40."},
    {value: 50, text: "Of average strength!"},
    {value: 100, text: "Hammers are for wimps, you hit with your FISTS!"}

  ],
  Intelligence: [
    {value: 0, text: "Dumb"},
    {value: 50, text: "Smart enough to be at the peak of the standard distribution curve."},
    {value: 100, text: "Smart"}
  ],
  Constitution: [
    {value: 0, text: "You're having a BAD day, everyday! It's like you've got two kids that keep waking you up at night, EVERY night!"},
    {value: 50, text: "Able to outrun a hungry hippo!"}
  ],
  Dexterity: [
    {value: 50, text: ""}
  ]
};

cotw.getAttributeDescription = (name, value) => {
  return (_.find(cotw.AttributeDescriptions[name], function (desc) {
    return value <= desc.value;
  }) || {}).text || '';
};

export default cotw
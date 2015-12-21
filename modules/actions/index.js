export const setGender = (gender) => {
  return {
    type: "SET_GENDER",
    gender
  };
};

export const setDifficulty = (level) => {
  return {
    type: "SET_DIFFICULTY",
    level
  }
};

export const setAttribute = (attr, amt) => {
  return {
    type: "SET_ATTRIBUTE",
    attr,
    amt
  }
}

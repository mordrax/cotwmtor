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

export const setAttribute = (attr, value) => {
  return {
    type: "SET_ATTRIBUTE",
    attr,
    value
  }
}

export const changeName = (name) => {
  return {
    type: "CHANGE_NAME",
    name
  }
}

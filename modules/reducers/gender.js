export default (state = 'male', action) => {
    switch (action.type) {
        case 'SET_GENDER':
            return action.gender;
        default:
            return state;
    }
};

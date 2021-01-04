const intialState = [];

const commentReducer = (state = intialState, action) => {
  switch (action.type) {
    case "ADD_COMMENT": {
      return state.concat(action.payload);
    }
    case "REMOVE_COMMENT": {
      return state.filter((ele) => ele._id !== action.payload);
    }
    default: {
      return [].concat(state);
    }
  }
};
export default commentReducer;

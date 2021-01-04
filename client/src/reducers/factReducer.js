const initialFact = [];

const factReducer = (state = initialFact, action) => {
  switch (action.type) {
    case "ADD_FACT": {
      return state.concat(action.payload);
    }

    case "REMOVE_FACT": {
      return state.filter((ele) => ele._id !== action.payload);
    }

    default: {
      return [].concat(state);
    }
  }
};

export default factReducer;

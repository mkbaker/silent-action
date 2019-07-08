const selectedItemReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_SELECTED_ITEM":
      return action.payload;
    default:
      return state;
  }
};

export default selectedItemReducer;

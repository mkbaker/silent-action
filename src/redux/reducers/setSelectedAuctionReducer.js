const setSelectedAuctionReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_SELECTED_AUCTION":
      return action.payload;
    default:
      return state;
  }
};

export default setSelectedAuctionReducer;

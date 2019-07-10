const setSelectedAuctionReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_SELECTED_AUCTION":
      return action.payload;
    case 'LOGOUT' :
      return [];
    default:
      return state;
  }
};

export default setSelectedAuctionReducer;

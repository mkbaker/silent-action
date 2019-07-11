const setSelectedAuctionReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_SELECTED_AUCTION":
      return action.payload;
    case "UNSELECT_AUCTION":
      return [];
    case 'LOGOUT' :
      return [];
    default:
      return state;
  }
};

export default setSelectedAuctionReducer;

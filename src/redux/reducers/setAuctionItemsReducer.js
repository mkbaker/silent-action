const setAuctionItemsReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_AUCTION_ITEMS":
      return action.payload;
    case "CLEAR_ITEMS":
        return [];
    default:
      return state;
  }
};

export default setAuctionItemsReducer;

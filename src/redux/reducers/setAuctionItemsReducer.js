const setAuctionItemsReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_AUCTION_ITEMS":
      return action.payload;
    default:
      return state;
  }
};

export default setAuctionItemsReducer;

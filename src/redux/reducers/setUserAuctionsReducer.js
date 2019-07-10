const setUserAuctionsReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_USER_AUCTIONS":
      return action.payload;
    case "LOGOUT":
      return [];
    default:
      return state;
  }
};

export default setUserAuctionsReducer;

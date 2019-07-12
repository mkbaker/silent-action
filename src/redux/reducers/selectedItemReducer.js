const selectedItemReducer = (state = {id:'', name:'', description:'', currentBid:'', highestBidder:'', photo:'', belongs_to:''}, action) => {
  switch (action.type) {
    case "SET_SELECTED_ITEM":
      return action.payload;
    case 'LOGOUT' :
      return {
        id: "",
        name: "",
        description: "",
        currentBid: "",
        highestBidder:'',
        photo: "",
        belongs_to: ""
      };
    default:
      return state;
  }
};

export default selectedItemReducer;

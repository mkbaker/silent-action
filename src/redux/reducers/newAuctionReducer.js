const newAuctionReducer = (state = {auctionName: '', startDate:'', endDate:'', bio:'', photoUrl:''}, action) => {
    switch (action.type) {
        case 'CREATE_AUCTION_STEP_ONE':
            return {
                ...state,
                ...action.payload
            }
        case 'CREATE_AUCTION_STEP_TWO' :
            return {
                ...state,
                ...action.payload
            }
    }
    return state;
}

export default newAuctionReducer;
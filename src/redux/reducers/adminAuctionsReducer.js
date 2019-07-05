const adminAuctionsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ADMIN_AUCTIONS' :
            return  action.payload;
        default : 
            return state;
    }
}

export default adminAuctionsReducer; 
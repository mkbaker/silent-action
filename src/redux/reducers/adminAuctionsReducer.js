const adminAuctionsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ADMIN_AUCTIONS' :
            return  action.payload;
        case 'LOGOUT' :
            return [];
        default : 
            return state;
    }
}

export default adminAuctionsReducer; 
const setContactsReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_CONTACTS":
      return action.payload;
    case "CLEAR_CONTACTS":
      return [];
    case 'LOGOUT' :
      return [];
    default:
      return state;
  }
};

export default setContactsReducer;

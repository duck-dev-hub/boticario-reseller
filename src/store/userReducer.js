const INITIAL_STATE = {
  userEmail: '',
  userToken: '',
  userLogged: true,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...state,
        userLogged: true,
        userToken: action.userToken,
        userEmail: action.userEmail,
      };
    case 'LOG_OUT':
      return {
        ...state,
        userLogged: false,
        userEmail: '',
        userToken: '',
      };
    default:
      return state;
  }
};

export default userReducer;

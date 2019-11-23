const INITIAL_STATE = {
  userEmail: '',
  userCpf: '',
  userPassword: '',
  userToken: '',
  userLogged: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...state,
        userLogged: true,
        userEmail: action.userEmail,
        userCpf: action.userEmail,
        userPassword: action.userEmail,
        userToken: action.userToken,
      };
    case 'LOG_OUT':
      return {
        ...state,
        userLogged: false,
        userEmail: '',
        userCpf: '',
        userPassword: '',
      };
    default:
      return state;
  }
};

export default userReducer;

const initialState = {
  user: null,
  isLoggedIn: false,
};

function userReducer(state = initialState, action) {
  if (action.type == "user/login") {
    return { ...state, user: "abdo", isLoggedIn: true };
  }

  if (action.type == "user/logout") {
    return { ...state, user: null, isLoggedIn: false };
  }

  return state;
}

export default userReducer;

const initialState = {
  fullName: "Christina",
  loggedIn: false,
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case "USER_LOGGED_IN":
      return {
        ...state,
        loggedIn: true,
      };
    default:
      console.log(action.type);
      return state;
  }
}

//selectors
export const getName = (state) => {
  return state.user.fullName;
};

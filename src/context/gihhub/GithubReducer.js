const githubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        isloading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        isloading: true,
      };
    case "USER_DATA":
      return {
        ...state,
        userLogin: action.payload,
        isloading: false,
      };
    case "REPO":
      return {
        ...state,
        repos: action.payload,
        isloading: false,
      };

    case "CLEAR_USERS":
      return {
        ...state,
        users: [],
        isloading: false,
      };

    default:
      return state;
  }
};
export default githubReducer;

const githubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        isloading: false,
      };
    case "SET_LOAIDNG":
      return {
        ...state,
        isloading: true,
      };
    case "USER_DATA":
      return {
        ...state,
        userLogin: action.load,
        isloading: false,
      };
    case "REPO":
      return {
        ...state,
        repos: action.payload,
        isloading: false,
      };

    case "CLEAR_USER":
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

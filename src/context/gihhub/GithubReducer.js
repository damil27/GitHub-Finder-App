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

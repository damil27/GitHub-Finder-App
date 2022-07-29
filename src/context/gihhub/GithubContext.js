import { data } from "autoprefixer";
import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

// create content
const GithubContext = createContext();
// url process variable
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

//context provider function
export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    userLogin: {},
    isLoading: false,
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);

  const searchUsers = async (text) => {
    setLoading();
    const params = new URLSearchParams({
      q: text,
    });
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`);
    const { items } = await response.json();

    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  const getUser = async (login) => {
    setLoading();

    const res = await fetch(`https://api.github.com/users/${login}`);

    if (res.status === 404) {
      window.location = "/notfound";
    } else {
      const result = await res.json();

      dispatch({
        type: "USER_DATA",
        load: result,
      });
    }
  };

  const clearUser = () => {
    dispatch({
      type: "CLEAR_USER",
    });
  };
  // set_loading function
  const setLoading = () =>
    dispatch({
      type: "SET_LOADING",
    });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        isLoading: state.isloading,
        userLogin: state.userLogin,
        getUser,
        searchUsers,
        clearUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default GithubContext;

import { data } from "autoprefixer";
import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

// create content
const GithubContext = createContext();
// url process variable
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

//context provider function
export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    userLogin: {},
    repos: [],
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
  // get repository function
  const getRepos = async (login) => {
    const params = new URLSearchParams({
      sort: "created",
      per_page: 10,
    });
    const response = await fetch(
      `https://api.github.com/users/${login}/repos?${params}`
    );
    if (response.status === 404) {
      window.location = "/notfound";
    } else {
      const result = await response.json();

      dispatch({
        type: "REPO",
        payload: result,
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
        repos: state.repos,
        getUser,
        searchUsers,
        clearUser,
        getRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default GithubContext;

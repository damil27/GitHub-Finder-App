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
  const clearUser = () => {
    dispatch({
      type: "CLEAR_USER",
      payload: null,
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
        searchUsers,
        clearUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default GithubContext;

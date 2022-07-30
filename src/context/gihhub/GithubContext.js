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

  // set_loading function

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default GithubContext;

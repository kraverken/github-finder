import { createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
  };
  //   setloading
  const setLoading = () => {
    dispatch({
      type: "SET_LOADING",
    });
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState); //dispatch is the the function name that takes in the type and data (dispatch===action)

  // Get Search results
  const searchUsers = async (text) => {
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });

    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: { Authorization: `token ${GITHUB_TOKEN}` },
    });
    const { items } = await response.json();

    dispatch({
      type: "GET_USERS",
      payload: items,
    }); //instead of setUsers we do this
  };

  //   clear users from state
  const clearUsers = () => {
    dispatch({
      type: "CLEAR_USERS",
    }); //instead of setUsers we do this
  };
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
        clearUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;

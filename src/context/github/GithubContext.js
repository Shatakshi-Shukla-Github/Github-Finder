// Usually, you will pass information from a parent component to a child component via props. But passing props can become verbose and inconvenient if you have to pass them through many components in the middle, or if many components in your app need the same information. Context lets the parent component make some information available to any component in the tree below it—no matter how deep—without passing it explicitly through props.

import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

// This creates an empty container
const GithubContext = createContext();
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

// This is the main boss component. Think of it as:- Provider = the one who fills the box
export const GithubProvider = ({ children }) => {
  const initialState={
    users:[],
    loading:false,
  }

// githubReducer = logic (HOW to update state)
// initialState = starting data (WHAT the state is)
// #Note:- When we call dispatch then React calls reducer(the statement mentioned below)
  const [state,dispatch]=useReducer(githubReducer,initialState)

  // This function:
  // 1) Calls API
  // 2) Gets data
  // 3) Stores it in users
  const fetchUsers = async () => {
    setLoading();
    const response = await fetch(`${GITHUB_URL}/users`);
    const data = await response.json();
    dispatch({
      type:"GET_USERS",
      payload:data,
    })
  };
  const setLoading=()=>dispatch({type:"SET_LOADING"})

  return (
    // You are putting inside the box:
    // GithubContext contains:
    // 1) users
    // 2) loading
    // 3) fetchUsers
    <GithubContext.Provider value={{ users:state.users, loading:state.loading, fetchUsers }}>
      {/* What is {children}?
      This means:
      “Whatever is wrapped inside GithubProvider in App.js” */}
      {children}
    </GithubContext.Provider>
  );
};
export default GithubContext;

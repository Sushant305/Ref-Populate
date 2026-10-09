import { createContext, useReducer } from "react";

export const UserPostContext = createContext();

const initialState = {
  users: [],
  posts: [],
};

export const userPostReducer = (state, action) => {
  switch (action.type) {
    case "SET_USERS":
      return {
        ...state,
        users: action.payload,
      };
    case "CREATE_USER":
      return {
        ...state,
        users: [action.payload, ...state.users],
      };
    case "SET_POSTS":
      return {
        ...state,
        posts:action.payload,
      };
    case "CREATE_POST":
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };
    default:
      return state;
  }
};

export const UserPostContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userPostReducer, initialState);
  return (
    <UserPostContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserPostContext.Provider>
  );
};

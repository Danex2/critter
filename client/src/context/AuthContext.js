import React from "react";

export const AuthContext = React.createContext(null);

const token = localStorage.getItem("token");

const initState = {
  loggedIn: token ? token : false
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      return {
        ...state,
        loggedIn: !state.loggedIn
      };
    case "USER_LOGOUT":
      return {
        ...state,
        loggedIn: !state.loggedIn
      };
    default:
      return state;
  }
};

export function AuthProvider({ children }) {
  const [state, dispatch] = React.useReducer(authReducer, initState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

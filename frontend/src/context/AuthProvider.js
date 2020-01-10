import React from 'react';

const initState = {
  loggedIn: false
};

function authReducer(state, action) {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        loggedIn: !state.loggedIn
      };
    case 'LOGOUT_USER':
      return {
        loggedIn: !state.loggedIn
      };
    default:
      return state;
  }
}

export const AuthContext = React.createContext();
function AuthProvider({ children }) {
  const [state, dispatch] = React.useReducer(authReducer, initState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

import React, { useContext } from "react";
import { useHistory } from "react-router";
import { auth } from "../firebase";

const AuthContext = React.createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

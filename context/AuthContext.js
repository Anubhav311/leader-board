import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebaseConfig";

const AuthContext = React.createContext();

function useAuth() {
  return useContext(AuthContext);
}

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function logout() {
    return auth.signOut();
  }
  
  useEffect(() => {
    let unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false)
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    setCurrentUser,
    logout,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export { useAuth, AuthProvider };

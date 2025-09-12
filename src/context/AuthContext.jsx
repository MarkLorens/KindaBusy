// src/context/AuthContext.jsx
import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";

export const Context = createContext();

export function AuthContext({ children }) {
  const auth = getAuth();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      if (currentUser) setUser(currentUser);
      else {
        setUser(null);
      }
    });
    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);
  const values = {
    user: user,
    loading: loading,
    setUser: setUser,
  };
  return (
    <Context.Provider value={values}>{!loading && children}</Context.Provider>
  );
}

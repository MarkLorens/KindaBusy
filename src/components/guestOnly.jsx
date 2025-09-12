import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/authcontext";

export function GuestOnly({ children }) {
  const { user, loading } = useContext(Context);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (user) {
    return <Navigate to="/" replace />;
  } else {
    return children;
  }
}

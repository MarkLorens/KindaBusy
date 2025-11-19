import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/authcontext";

export function Protected({ children }) {
  const { user, loading } = useContext(Context);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  } else {
    return children;
  }
}

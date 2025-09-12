import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Task from "./pages/task";
import { ModalProvider } from "../ModalContext.jsx";
import { AuthContext } from "./context/authcontext.jsx";
import { Protected } from "./components/protected.jsx";
import { GuestOnly } from "./components/guestOnly.jsx";

function App() {
  return (
    <AuthContext>
      <BrowserRouter>
        <ModalProvider>
          <Routes>
            <Route
              path="/"
              element={
                <Protected>
                  <Home />
                </Protected>
              }
            />
            <Route
              path="/task"
              element={
                <Protected>
                  <Task />
                </Protected>
              }
            />
            <Route
              path="/login"
              element={
                <GuestOnly>
                  <Login />
                </GuestOnly>
              }
            />
          </Routes>
        </ModalProvider>
      </BrowserRouter>
    </AuthContext>
  );
}

export default App;

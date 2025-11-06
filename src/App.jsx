import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Task from "./pages/Task.jsx";
import EditProfile from "./pages/editProfile.jsx";
import { ModalProvider } from "./context/ModalContext.jsx";
import { AuthContext } from "./context/authcontext.jsx";
import { Protected } from "./components/Protected.jsx";
import { GuestOnly } from "./components/GuestOnly.jsx";
import { UserDataProvider } from "./context/UserDataContext.jsx";

function App() {
  return (
    <AuthContext>
      <UserDataProvider>
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
                path="/editprofile"
                element={
                  <Protected>
                    <EditProfile />
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
      </UserDataProvider>
    </AuthContext>
  );
}

export default App;

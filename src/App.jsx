import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Task from "./pages/task";
import { ModalProvider } from "../ModalContext.jsx";

function App() {
  return (
    <BrowserRouter>
      <ModalProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/task" element={<Task />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </ModalProvider>
    </BrowserRouter>
  );
}

export default App;

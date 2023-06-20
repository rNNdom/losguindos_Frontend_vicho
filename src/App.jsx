import React, { useState } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import UpdateProfileForm from "./components/UpdateProfileForm";
import RegisterForm from "./components/RegisterForm";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useToken from "./components/useToken";

function App() {
  const { token, setToken } = useToken();
  console.log(token);
  if (!token) {
    return <LoginForm setToken={setToken} />;
  }
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/update" element={<UpdateProfileForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

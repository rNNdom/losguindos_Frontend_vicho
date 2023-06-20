import React, { useState } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import UpdateProfileForm from "./components/UpdateProfileForm";
import RegisterForm from "./components/RegisterForm";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Logout from "./components/Logout";
import useToken from "./components/useToken";
import NotFound from "./components/NotFound";

function App() {
  const { token, setToken } = useToken();
  console.log(token);

  const handleLogin = (newToken) => {
    setToken(newToken);
  };

  const handleRegister = (newToken) => {
    setToken(newToken);
  };

  if (!token) {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginForm setToken={handleLogin} />} />
            <Route
              path="/register"
              element={<RegisterForm setToken={handleRegister} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/update" element={<UpdateProfileForm />} />
          <Route path="/logout" element={<Logout setToken={setToken} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
// function App() {
//   const { token, setToken } = useToken();
//   console.log(token);
//   if (!token) {
//     return <LoginForm setToken={setToken} />;
//   }

//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path={"/"} element={<Home />} />
//           <Route path="/login" element={<LoginForm />} />
//           <Route path="/register" element={<RegisterForm />} />
//           <Route path="/update" element={<UpdateProfileForm />} />
//           <Route path="/logout" element={<Logout setToken={setToken} />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Details from "./pages/Details";

function App() {
  const isAuthenticated = localStorage.getItem("token");

  return (
    <>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="details/:id" element={<Details />} />
        </Route>
        <Route path="/auth" element={<Outlet />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<h1>Register</h1>} />
        </Route>
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
}

export default App;

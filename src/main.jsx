import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AuthProtector from "./components/AuthProtector.jsx";
import Login from "./pages/Login.jsx";
import AuthLayout from "./components/AuthLayout.jsx";
import Home from "./pages/Home.jsx";
import Details from "./pages/Details.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <AuthProtector><App /></AuthProtector>,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: "details/:id",
        element: <Details/>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthProtector><AuthLayout/></AuthProtector>,
    children: [
      {
        path: "login",
        element: <Login/>,
      },
      {
        path: "register",
        element: <h1>Register</h1>,
      },
    ],
  },
  {
    path: '*',
    element: <h1>404</h1>,
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={route} />
);

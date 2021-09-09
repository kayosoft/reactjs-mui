import { Navigate, useRoutes } from "react-router-dom";

// layouts
import DashboardLayout from "./layouts/dashboard";
import LogoOnlyLayout from "./layouts/LogoOnlyLayout";


// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import DashboardApp from "./pages/DashboardApp";
import Products from "./pages/Products";
import Crops from "./pages/Crops";
import User from "./pages/User";
import Profile from "./pages/Profile";
import NotFound from "./pages/Page404";



function Router(authenticated) {
  return useRoutes([
    
    {
      path: "/dashboard",
      element: authenticated ? <DashboardLayout /> : <Navigate to="/" />,
      children: [
        { path: "/", element: <Navigate to="/dashboard/app" replace /> },
        { path: "app", element: <DashboardApp /> },
        { path: "crops", element: <Crops /> },
        { path: "user", element: <User /> },
        { path: "profile", element: <Profile /> },
        { path: "products", element: <Products /> },
      ],
    },
    {
      path: "/",
      element: !authenticated ? <LogoOnlyLayout /> : <Navigate to="/dashboard/app" />,
      children: [
        { path: "/", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "404", element: <NotFound /> },
        { path: "/", element: <Navigate to="/dashboard" /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },

    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

export default Router;

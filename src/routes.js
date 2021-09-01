import { Navigate, useRoutes } from "react-router-dom";
// layouts
import DashboardLayout from "./layouts/dashboard";
import LogoOnlyLayout from "./layouts/LogoOnlyLayout";
import Farmsetup from "./layouts/farmsetup/Farmsetup";
//
import Login from "./pages/Login";
import Register from "./pages/Register";
import DashboardApp from "./pages/DashboardApp";
import Products from "./pages/Products";
import Crops from "./pages/Crops";
import User from "./pages/User";
import NotFound from "./pages/Page404";

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <LogoOnlyLayout />,
      children: [
        { path: "/", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "404", element: <NotFound /> },
        { path: "/", element: <Navigate to="/dashboard" /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { path: "/", element: <Navigate to="/dashboard/app" replace /> },
        { path: "app", element: <DashboardApp /> },
        { path: "crops", element: <Crops /> },
        { path: "user", element: <User /> },
        { path: "products", element: <Products /> },
        
      ],
    },
    {
      path: "/farmsetup",
      element: <Farmsetup />,
      children: [{ path: "/", element: <Navigate to="/farmsetup" replace /> }],
    },

    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

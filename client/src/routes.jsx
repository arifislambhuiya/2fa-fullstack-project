import { createBrowserRouter } from "react-router-dom";
// import {
//   LoginPage,
//   Error,
//   PageNotFound,
//   HomePage,
//   Setup2FA,
//   Verify2FA,
// } from "./pages/index";

import LoginPage from "./pages/LoginPage";
import Error from "./pages/Error";
import PageNotFound from "./pages/PageNotFound";
import HomePage from "./pages/HomePage";
import Setup2FA from "./pages/Setup2FA";
import Verify2FA from "./pages/Verify2FA";
import ProtectedRoute from "./components/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <Error />,
  },

  {
    path: "*",
    element: <PageNotFound />,
    errorElement: <Error />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        errorElement: <Error />,
      },
      {
        path: "/setup-2fa",
        element: <Setup2FA />,
        errorElement: <Error />,
      },
      {
        path: "/verify-2fa",
        element: <Verify2FA />,
        errorElement: <Error />,
      },
    ],
  },
]);

export default router;

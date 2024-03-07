import { createBrowserRouter  } from "react-router-dom";
import { HomeScreen } from "../pages";
import { RegisterScreen, LoginScreen } from "../pages/auth";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "login",
    element: <LoginScreen />,
  },
  {
    path: "register",
    element: <RegisterScreen />,
  },
]);

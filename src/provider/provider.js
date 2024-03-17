import { HomeScreen } from "pages";
import { LoginScreen, RegisterScreen } from "pages/auth";
import { useSelector } from "react-redux";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";

export const AppProvider=()=>{
    const { user } = useSelector((state) => state.user);
const { token } = user;
     const router = createBrowserRouter([
        {
          path: "/",
          element: <HomeScreen />
        },
        {
          path: "login",
          element: !token ?<LoginScreen />:<Navigate to={'/'}/>,
        },
        {
          path: "register",
          element: !token ?<RegisterScreen />:<Navigate to={'/'}/>,
        },
      ]);
    return (
      <RouterProvider router={router}>
      </RouterProvider>
    );
  }
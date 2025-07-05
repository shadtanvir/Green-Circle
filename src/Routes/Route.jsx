import { createBrowserRouter, RouterProvider } from "react-router";
import ErrorPage from "../Pages/ErrorPage";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Cookies from "../Components/Cookies";
import Terms from "../Components/Terms";
import Privacy from "../Components/Privacy";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/activeGardeners"),
        element: <Home></Home>,
      },
      {
        path: "/cookies",
        Component: Cookies,
      },
      {
        path: "/privacy",
        Component: Privacy,
      },
      {
        path: "/terms",
        Component: Terms,
      },
    ],
  },
]);
export default router;

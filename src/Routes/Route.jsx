import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../LayOuts/MainLayout";
import Home from "../Components/Home";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
    ],
  },
]);
export default router;

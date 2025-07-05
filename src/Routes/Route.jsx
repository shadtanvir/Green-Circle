import { createBrowserRouter, RouterProvider } from "react-router";
import Navbar from "../Components/Navbar";
import ErrorPage from "../Pages/ErrorPage";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
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
    ],
  },
]);
export default router;

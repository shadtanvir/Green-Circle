import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Loading from "../Components/Loading";

const MainLayout = () => {
  const { state } = useNavigation();
  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-gray-100">
        <div className=" min-h-[calc(100vh-178px)]">
          {state === "loading" ? <Loading /> : <Outlet></Outlet>}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;

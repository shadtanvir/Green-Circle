import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet, useNavigation } from "react-router";
import Loading from "../Components/Loading";
import Footer from "../Components/Footer";

const AuthLayout = () => {
  const { state } = useNavigation();
  return (
    <>
      <Navbar></Navbar>

      <div className="bg-gray-100">
        <div className=" min-h-[calc(100vh-386px)]">
          {state === "loading" ? <Loading /> : <Outlet></Outlet>}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default AuthLayout;

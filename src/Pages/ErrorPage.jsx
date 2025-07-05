import React from "react";
import { Link } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const ErrorPage = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className=" min-h-[calc(100vh-386px)] flex justify-center items-center">
        <div className=" text-center space-y-7 py-30 md:py-30 lg:py-30 ">
          <h1 className="font-bold text-red-700 text-2xl md:text-5xl lg:text-6xl">
            404 - Page Not Found
          </h1>
          <p className="text-lg font-semibold">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Link to="/">
            <button className="btn btn-primary bg-blue-600 rounded-3xl text-white text-lg border-none  h-12">
              Go Back Home
            </button>
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;

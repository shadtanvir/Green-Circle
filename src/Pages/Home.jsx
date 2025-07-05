import React from "react";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import { useLoaderData } from "react-router";
import FeaturedGardeners from "../Components/FeaturedGardeners";

const Home = () => {
  const activeGardeners = useLoaderData();
  // console.log(featuredGardeners);
  return (
    <div>
      <Banner></Banner>
      <FeaturedGardeners activeGardeners={activeGardeners}></FeaturedGardeners>
    </div>
  );
};

export default Home;

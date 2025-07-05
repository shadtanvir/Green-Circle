import React from "react";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import { useLoaderData } from "react-router";
import FeaturedGardeners from "../Components/FeaturedGardeners";
import TrendingTips from "../Components/TrendingTips";
import WhyGardening from "../Components/WhyGardening";
import GardeningMyths from "../Components/GardeningMyths";

const Home = () => {
  const activeGardeners = useLoaderData();
  // console.log(featuredGardeners);
  return (
    <div>
      <Banner></Banner>
      <FeaturedGardeners activeGardeners={activeGardeners}></FeaturedGardeners>
      <TrendingTips></TrendingTips>
      <WhyGardening></WhyGardening>
      <GardeningMyths></GardeningMyths>
    </div>
  );
};

export default Home;

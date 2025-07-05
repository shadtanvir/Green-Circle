import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    title: "Spring Gardening Fest 2025",
    description:
      "Join our community meetup with local gardeners, workshops & giveaways!",
    image:
      "https://images.hellomagazine.com/horizon/landscape/db3a3c5fec2e-spring-gardening-tips-t.jpg",
    buttonText: "Learn More",
  },
  {
    title: "Monsoon Planting Drive",
    description:
      "Participate in our green campaign this rainy season. Free saplings available!",
    image:
      "https://images.herzindagi.info/image/2024/Jul/gardening-in-monsoon.jpg",
    buttonText: "Join Event",
  },
  {
    title: "Urban Gardening Webinar",
    description:
      "Learn balcony gardening from top experts. Free for all Green Circle members!",
    image:
      "https://images.stockcake.com/public/5/9/8/598c35ae-43d4-451f-96d3-91948f62daac_large/urban-gardening-view-stockcake.jpg",
    buttonText: "Register Now",
  },
];

const Banner = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-[700px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center md:px-25  "
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className=" text-center max-w-xl flex flex-col gap-2 px-4">
                <h2 className="text-xl md:text-4xl font-merriweather text-white bg-green-400 font-bold p-2 md:p-6 ">
                  {slide.title}
                </h2>
                <p className=" p-2 text-lg md:p-5 md:text-xl font-lora text-[#3F2200] bg-gray-200">
                  {slide.description}
                </p>
                <button className="btn p-2 md:p-3 btn-success w-35 bg-green-400 text-lg text-white">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;

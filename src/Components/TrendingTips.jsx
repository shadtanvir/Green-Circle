import React, { useEffect, useState } from "react";
import { PiPlantDuotone } from "react-icons/pi";
import { PiTargetBold } from "react-icons/pi";
import { BiCategoryAlt } from "react-icons/bi";
import { FaHeart, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";

const TrendingTips = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    fetch("https://green-circle-server-mocha.vercel.app/trendingTips")
      .then((res) => res.json())
      .then((data) => setTips(data));
  }, []);

  return (
    <section className="py-12 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 ">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold font-merriweather text-success  text-center">
            Top Trending Tips
          </h2>
          <p className="text-shadow-gray-700 font-lora mt-2">
            Read the top trending tips of our community!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8">
          {tips.map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: false }}
              className="bg-info rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={tip.image}
                alt={tip.title}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold font-merriweather text-success">
                  {tip.title}
                </h3>
                <p className="text-sm font-lora text-neutral">
                  {tip.description.slice(0, 100)}...
                </p>
                <div className="flex flex-wrap gap-x-4 text-xs text-gray-500 font-lora mt-2">
                  <div className="flex items-center gap-1">
                    <PiPlantDuotone size={18} color="green" /> {tip.plantType}
                  </div>
                  <div className="flex items-center gap-1">
                    <PiTargetBold size={18} color="red" /> {tip.difficulty}
                  </div>
                  <div className="flex items-center gap-1">
                    <BiCategoryAlt size={18} className="text-yellow-400" />{" "}
                    {tip.category}
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="text-red-600">
                      <FaHeart size={20} />
                    </div>
                    <span>{tip.totalLiked || 0} </span>
                  </div>
                </div>
                <div className="text-xs flex gap-2 items-center  text-gray-400 font-lora pt-2 border-t mt-2">
                  <FaUser className="text-blue-500" /> By: {tip.userName} (
                  {tip.userEmail})
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingTips;

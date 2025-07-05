import React from "react";
import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";

const FeaturedGardeners = ({ activeGardeners }) => {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };
  return (
    <section className="py-12 max-w-7xl mx-auto bg-base-100">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-2xl md:text-4xl font-merriweather font-bold text-success">
          Featured Gardeners
        </h2>
        <p className="text-[#3F2200] font-lora mt-2">
          Meet the green heroes of our community!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8">
        {activeGardeners.map((gardener, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={cardVariants}
            className="bg-white shadow-xl rounded-2xl  hover:shadow-2xl transition"
          >
            <img
              src={gardener.image}
              alt={gardener.name}
              className="w-full h-56 object-cover rounded-t-xl mb-2"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold font-merriweather text-success">
                {gardener.name}
              </h3>
              <p className="text-sm text-gray-600 font-lora mt-1">
                {gardener.bio}
              </p>
              <p className="text-sm flex items-center gap-1 text-gray-400 mt-1 italic">
                <FaLocationDot color="blue" /> {gardener.location}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {gardener.specialties?.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedGardeners;

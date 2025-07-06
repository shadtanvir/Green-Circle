import { FaLeaf, FaHeart, FaHandsHelping } from "react-icons/fa";
import { motion } from "framer-motion";

const WhyGardening = () => {
  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 },
    }),
  };

  return (
    <section className="py-12 ">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold font-merriweather text-success mb-6"
        >
          Why Choose Gardening?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-8">
          {[FaLeaf, FaHeart, FaHandsHelping].map((Icon, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={variants}
              className="bg-white shadow-xl rounded-2xl  hover:shadow-2xl transition p-6"
            >
              <Icon className="text-green-500 text-4xl mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">
                {
                  [
                    "Eco-Friendly Lifestyle",
                    "Health & Wellness",
                    "Community Connection",
                  ][i]
                }
              </h3>
              <p className="text-sm font-lora text-gray-600">
                {
                  [
                    "Gardening helps reduce carbon footprint and improves local biodiversity.",
                    "Exposure to plants reduces stress, boosts mood, and encourages physical activity.",
                    "Grow together! Join gardening events, share tips, and build green communities.",
                  ][i]
                }
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyGardening;

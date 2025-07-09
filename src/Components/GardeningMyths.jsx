import { motion } from "framer-motion";
import { FaLeaf, FaSun, FaSeedling } from "react-icons/fa";
import { GiPlantWatering } from "react-icons/gi";
import { PiPottedPlant } from "react-icons/pi";

const GardeningMyths = () => {
  const myths = [
    {
      icon: <FaSun className="text-yellow-500 text-4xl mb-3" />,
      title: "Myth: All Plants Need Full Sun",
      fact: "Many herbs and houseplants actually thrive in partial or indirect light.",
    },
    {
      icon: <GiPlantWatering className="text-green-500 text-4xl mb-3" />,
      title: "Myth: Water Every Day",
      fact: "Overwatering is the #1 killer of houseplants. Check soil before watering!",
    },
    {
      icon: <PiPottedPlant className="text-lime-600 text-4xl mb-3" />,
      title: "Myth: Bigger Pots Mean Bigger Plants",
      fact: "Too big a pot can retain too much water and rot the roots of small plants.",
    },
  ];
  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold font-merriweather text-success mb-6"
        >
          Gardening Myths Busted
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-8">
          {myths.map((myth, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: false }}
              className="bg-info rounded-xl p-6 shadow-xl text-center hover:shadow-2xl"
            >
              <div className="flex justify-center items-center">
                {myth.icon}
              </div>
              <h3 className="font-bold text-lg mt-2 text-gray-800 text-success font-merriweather">
                {myth.title}
              </h3>
              <p className="text-neutral mt-2 text-sm font-lora">
                {myth.fact}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GardeningMyths;

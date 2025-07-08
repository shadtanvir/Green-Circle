import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import gardenErrorAnim from "../assets/lottie/garden-404.json";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-lime-100 via-green-50 to-emerald-100 px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl text-center p-6 md:p-10  "
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="w-100 max-w-full mx-auto text-center mb-6"
        >
          <Lottie animationData={gardenErrorAnim} loop={true} />
        </motion.div>

        <h1 className="text-3xl md:text-5xl font-merriweather font-bold text-green-700 mb-4">
          Uh-oh! Lost in the Garden
        </h1>
        <p className="text-base md:text-lg text-gray-700 font-lora mb-6">
          The path you’re looking for doesn’t exist — maybe a squirrel ran off
          with it.
        </p>

        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-success text-white rounded-lg font-merriweather font-semibold px-6 py-2 shadow-lg hover:shadow-2xl transition"
          >
            Back to Home
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default ErrorPage;

import { assets, serviceData, photoData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const PhotoGrid = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Handjet mt-20"
      >
        My Photography
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 my-10 gap-5 dark:text-black"
      >
        {photoData.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group mw-10"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          ></motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default PhotoGrid;

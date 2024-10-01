"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { motion } from 'framer-motion';

const HeaderSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: (i = 1) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2, // Delay for staggered appearance
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="h-screen flex flex-col md:flex-row gap-8 items-center justify-center px-4 md:px-8 bg-gradient-to-r from-orange-200 to-white">
      {/* Description */}
      <div className="text-center md:text-left">
        <motion.h1
          initial="hidden"
          animate="visible"
          custom={1} // Custom value for delay timing
          variants={containerVariants}
          className="text-2xl md:text-3xl lg:text-5xl font-semibold py-2 md:py-4"
        >
          Explorez l'Art de <br className="hidden md:block" /> l'Impression
          Numérique
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          custom={2} // Delayed more than the h1
          variants={containerVariants}
          className="py-2 md:py-4 text-lg md:text-xl"
        >
          Des créations époustouflantes, une qualité inégalée, Votre Vision,
          <br className="hidden md:block" />
          notre métier. Transformez vos idées en réalité visuelle exceptionnelle
          <br className="hidden md:block" /> avec notre impression numérique de
          pointe.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          custom={3} // Delayed more than the p
          variants={containerVariants}
        >
          <Button className="bg-orange-700 mt-4 md:mt-6">
            <a href="#">En savoir plus</a>
          </Button>
        </motion.div>
      </div>

      {/* Image Section */}
      <div className="flex-shrink-0">
        <motion.div
          animate={{ translateY: [-30, 30] }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 3,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/cov2.png"
            width={500}
            height={400}
            alt="design photo"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeaderSection;

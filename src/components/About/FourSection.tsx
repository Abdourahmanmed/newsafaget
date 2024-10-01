"use client";
import {motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const FourSection = () => {
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);

  // Hook to detect when sections come into view
  const isLeftInView = useInView(leftSectionRef, { once: true });
  const isRightInView = useInView(rightSectionRef, { once: true });

  // Animation variants for left-side elements
  const leftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Animation variants for right-side elements
  const rightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  return (
    <div className="p-4 sm:p-6 md:p-10 lg:p-20">
      <div className="flex flex-col gap-8 md:flex-row">
        <motion.div
          className="flex flex-col gap-8 w-full md:w-1/2"
          ref={leftSectionRef}
          initial="hidden"
          animate={isLeftInView ? "visible" : "hidden"}
          variants={leftVariants}
        >
          <h1 className="text-orange-700 text-2xl sm:text-3xl md:text-4xl font-semibold">
            Notre Histoire
          </h1>
          <p className="font-medium text-sm sm:text-base md:text-lg">
            Depuis notre création, nous avons eu le privilège de travailler avec
            des clients diversifiés, des petites entreprises aux grandes
            marques. Chaque projet nous inspire à repousser les frontières de la
            créativité et à fournir des résultats qui dépassent les attentes.
          </p>
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 p-4"
          ref={rightSectionRef}
          initial="hidden"
          animate={isRightInView ? "visible" : "hidden"}
          variants={rightVariants}
        >
          <Image
            src="/service5.jpg"
            width={600}
            height={350}
            className="object-cover w-full h-auto"
            id="about-img1"
            alt="c'est moi"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default FourSection;

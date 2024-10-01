"use client";
import React, { useRef } from "react";
import ReusableForm from "../Form";
import { motion, useInView } from "framer-motion";

const SevenSection = () => {
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
    <div className="flex flex-col lg:flex-row gap-8 bg-gradient-to-r from-orange-200 to-white p-4">
      <motion.div
        className="w-full lg:w-1/2"
        ref={leftSectionRef}
        initial="hidden"
        animate={isLeftInView ? "visible" : "hidden"}
        variants={leftVariants}
      >
        <h3 className="font-semibold text-2xl lg:text-3xl text-orange-800 py-4">
          Contactez-nous
        </h3>
        <p className="text-sm lg:text-md font-semibold">
          Que ce soit pour discuter de vos besoins d'impression numérique,
          obtenir des informations supplémentaires sur nos services, ou pour
          toute autre demande, l'équipe de Safa Jet est à votre disposition.
          N'hésitez pas à nous contacter selon vos préférences :
        </p>
      </motion.div>
      <motion.div
        className="w-full lg:w-1/2"
        ref={rightSectionRef}
        initial="hidden"
        animate={isRightInView ? "visible" : "hidden"}
        variants={rightVariants}
      >
        <ReusableForm />
      </motion.div>
    </div>
  );
};

export default SevenSection;

"use client";
import {motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import ReusableForm from "../Form";

const SevenSection = () => {
  const leftSectionRef = useRef(null);

  // Hook to detect when sections come into view
  const isLeftInView = useInView(leftSectionRef, { once: true });
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
  return (
    <motion.div
      className="p-4 sm:p-6 md:p-10 lg:p-20"
      ref={leftSectionRef}
      initial="hidden"
      animate={isLeftInView ? "visible" : "hidden"}
      variants={leftVariants}
    >
      <ReusableForm />
    </motion.div>
  );
};

export default SevenSection;

"use client";
import React, { useRef } from "react";
import ReusableForm from "../Form";

import { motion, useInView } from "framer-motion";

const FiveSection = () => {
  const rightSectionRef = useRef(null);
  // Hook to detect when sections come into view
  const isRightInView = useInView(rightSectionRef, { once: true });

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
    <motion.div
      className="p-4 sm:p-6 md:p-10 lg:p-20"
      ref={rightSectionRef}
      initial="hidden"
      animate={isRightInView ? "visible" : "hidden"}
      variants={rightVariants}
    >
      <ReusableForm />
    </motion.div>
  );
};

export default FiveSection;

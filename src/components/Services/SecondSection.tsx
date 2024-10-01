"use client";
import { motion,useInView } from "framer-motion";
import React, { useRef } from "react";

const SecondSection = () => {
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
      className="p-8 md:p-20"
      ref={leftSectionRef}
      initial="hidden"
      animate={isLeftInView ? "visible" : "hidden"}
      variants={leftVariants}
    >
      <h2 className="text-orange-700 text-2xl md:text-3xl font-semibold py-2">
        Exploration Créative : Nos Services d'Impression
      </h2>
      <p className="py-2 text-sm md:text-base">
        Découvrez une symphonie d'impressions chez Safa Jet. De la conception
        unique de logos à l'éclat des bannières grand format, plongez dans notre
        gamme de services qui transforment l'ordinaire en extraordinaire. Chaque
        service est conçu avec soin, guidé par notre passion pour l'excellence.
        Explorez nos options variées, où chaque impression devient une œuvre
        d'art en soi.
      </p>
    </motion.div>
  );
};

export default SecondSection;

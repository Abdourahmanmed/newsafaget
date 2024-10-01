"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ThirtSection = () => {
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
    <div className="bg-gradient-to-r from-orange-200 to-white flex flex-col md:flex-row gap-8 items-center justify-center p-6 md:p-10">
      {/* Section Titre et Description */}
      <motion.div
        ref={leftSectionRef}
        initial="hidden"
        animate={isLeftInView ? "visible" : "hidden"}
        variants={leftVariants}
        className="w-full md:w-1/2 text-center md:text-left"
      >
        <h2 className="text-orange-800 text-3xl font-semibold mb-4">
          Nos Services
        </h2>
        <p className="text-lg font-semibold mb-4">
          Découvrez l'excellence de nos Services d'impression numérique chez
          Safa Jet.
        </p>
      </motion.div>

      {/* Section Détails et Lien */}
      <motion.div
        ref={rightSectionRef}
        initial="hidden"
        animate={isRightInView ? "visible" : "hidden"}
        variants={rightVariants}
        className="w-full md:w-1/2 text-center md:text-left"
      >
        <p className="font-semibold mb-4">
          Chez Safa Jet, notre engagement envers l'innovation et la qualité se
          reflète dans chacun de nos services d'impression numérique. Nous
          sommes fiers d'offrir une gamme complète de solutions pour répondre à
          vos besoins créatifs et commerciaux.
        </p>
        <a className="text-orange-800 text-md font-semibold hover:underline" href="/Services">
          En savoir plus →
        </a>
      </motion.div>
    </div>
  );
};

export default ThirtSection;

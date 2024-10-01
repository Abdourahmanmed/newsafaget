"use client";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const SecondeSection = () => {
  const firstSectionRef = useRef(null);
  const secondSectionRef = useRef(null);
  const rightSectionRef = useRef(null);

  // Hook to detect when the sections are in view
  const isFirstInView = useInView(firstSectionRef, { once: true });
  const isSecondInView = useInView(secondSectionRef, { once: true });
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
    <div className="h-max flex flex-col gap-8 p-3 md:p-8">
      {/* First motion div - Appears first */}
      <motion.div
        ref={firstSectionRef}
        initial="hidden"
        animate={isFirstInView ? "visible" : "hidden"}
        variants={leftVariants}
        className="h-full"
        transition={{
          delay: 0, // No delay for the first section
        }}
      >
        <h2 className="text-orange-800 text-center font-semibold text-2xl md:text-3xl p-4">
          Safaget
        </h2>
        <p className="text-black-800 text-center font-semibold text-lg md:text-2xl p-4">
          Transformez vos idées en réalité visuelle{" "}
          <br className="hidden md:block" />
          exceptionnelle avec notre impression{" "}
          <br className="hidden md:block" /> numérique de pointe !
        </p>
        <p className="text-center p-2 text-sm md:text-base">
          Chez Safa Jet, notre engagement envers l'innovation et la qualité se
          reflète dans chacun <br className="hidden md:block" />
          de nos services d'impression numérique. Nous sommes fiers d'offrir une
          gamme complète <br className="hidden md:block" />
          de solutions pour répondre à vos besoins créatifs et commerciaux.
          Explorez notre palette <br className="hidden md:block" />
          de services exceptionnels qui transcendent les attentes.
        </p>
      </motion.div>

      <div className="md:flex">
        {/* Second motion div - Appears after the first one */}
        <motion.div
          ref={secondSectionRef}
          initial="hidden"
          animate={isSecondInView ? "visible" : "hidden"}
          variants={leftVariants}
          className="text-center md:text-left"
          transition={{
            delay: 0.5, // Delayed for half a second
          }}
        >
          <h1 className="text-orange-800 font-semibold text-2xl md:text-3xl">
            Pourquoi Safa Jet ?
          </h1>
          <h2 className="text-xl py-4 md:text-2xl font-semibold">
            La réponse à vos besoins d'impression numérique
          </h2>
          <p className="text-black-800 text-sm md:text-base p-2">
            Chez Safa Jet, nous croyons en la puissance de la créativité et de
            l'innovation pour transformer vos idées en œuvres visuelles
            exceptionnelles. En tant que leader dans le domaine de l'impression
            numérique, nous nous engageons à offrir bien plus que des services
            d'impression standard.
          </p>
          <div className="mt-4">
            <a href="/Propos" className="text-orange-800 text-sm md:text-base">
              En savoir plus →
            </a>
          </div>
        </motion.div>

        {/* Third motion div (Image) - Appears last */}
        <motion.div
          ref={rightSectionRef}
          initial="hidden"
          animate={isRightInView ? "visible" : "hidden"}
          variants={rightVariants}
          className="flex-shrink-0"
          transition={{
            delay: 1, // Appears last after a 1-second delay
          }}
        >
          <Image
            src="/Equipe123.png"
            width={500}
            height={400}
            alt="design photo"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto md:mx-0"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default SecondeSection;

"use client";
import React, { useRef } from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const HeaderSection = () => {
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
    <div className="p-10 pt-20 md:p-20 w-full md:h-screen">
      <Card className="bg-orange-100 h-full md:h-[95%]">
        <CardContent className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <motion.div
            className="w-full md:w-1/2 relative h-[200px]"
            ref={leftSectionRef}
            initial="hidden"
            animate={isLeftInView ? "visible" : "hidden"}
            variants={leftVariants}
          >
            <motion.div
              animate={{ translateY: [-20, 20] }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/service.jpg"
                width={500}
                height={500}
                alt="image side"
                className="absolute -top-10 left-1/2 transform -translate-x-1/2 md:-top-10 md:left-40"
              />
            </motion.div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 md:flex md:flex-col md:justify-center md:pt-20"
            ref={rightSectionRef}
            initial="hidden"
            animate={isRightInView ? "visible" : "hidden"}
            variants={rightVariants}
          >
            <h1 className="text-orange-700 text-2xl md:text-3xl font-semibold py-4">
              Nos Services d'Impression Numérique
            </h1>
            <p className="py-2 text-sm md:text-base">
              Découvrez l'art de l'impression numérique chez Safa Jet. De la
              grandeur des impressions grand format à la personnalisation
              minutieuse de chaque document, explorez une gamme complète de
              services conçus pour transformer vos idées en œuvres imprimées
              exceptionnelles. Chaque service est imprégné de notre engagement
              envers la créativité, la qualité inégalée et la satisfaction
              client. Explorez notre offre diversifiée et faites de chaque
              projet une expérience unique.
            </p>
          </motion.div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HeaderSection;

"use client";
import React, { useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion, useInView } from "framer-motion";

const HeardeSection = () => {
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
      className="p-4 py-20 sm:p-6 md:p-20 lg:p-20 h-auto flex flex-col justify-center"
      ref={leftSectionRef}
      initial="hidden"
      animate={isLeftInView ? "visible" : "hidden"}
      variants={leftVariants}
    >
      <h1 className="text-orange-700 font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl p-2">
        À Propos de Safa Jet
      </h1>
      <Card className="w-full max-w-4xl mt-4 py-4 bg-orange-100">
        <CardContent className="w-full">
          <p className="font-semibold text-lg sm:text-xl md:text-2xl p-2 text-orange-700">
            Safa Jet : Nourrissez votre créativité avec des impressions
            exceptionnelles, où chaque détail prend vie et chaque couleur
            raconte une histoire unique.
          </p>
          <p className="p-2 mt-2 text-sm sm:text-base md:text-lg">
            Chez Safa Jet, notre engagement envers l'innovation et la qualité se
            reflète dans chacun de nos services d'impression numérique. Nous
            sommes fiers d'offrir une gamme complète de solutions pour répondre
            à vos besoins créatifs et commerciaux. Explorez notre palette de
            services exceptionnels qui transcendent les attentes.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default HeardeSection;

"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { Card, CardContent } from "../ui/card";
import { motion, useInView } from "framer-motion";

const SixSection = () => {
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
    <div className="p-4 md:p-10 lg:p-20">
      <h1 className="text-2xl md:text-3xl font-semibold text-orange-700 py-4">
        Design Graphique et Personnalisation
      </h1>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-2 mt-4"
        ref={leftSectionRef}
        initial="hidden"
        animate={isLeftInView ? "visible" : "hidden"}
        variants={leftVariants}
      >
        <Card className="h-[300px] relative overflow-hidden cursor-pointer group">
          <CardContent className="h-full w-full p-0">
            <Image
              src="/service2.jpg"
              alt="image de publication"
              fill
              className="object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center z-10">
              <p className="text-white text-md p-4 font-semibold z-10">
                Façonnez l'essence de votre entreprise avec notre service de
                conception de logo. Du concept initial à la version finale,
                chaque logo est créé sur mesure pour représenter votre identité
                unique. Donnez vie à votre marque avec un logo distinctif et
                mémorable.
              </p>
              <h5 className="text-white text-md font-semibold">
                Nouvelles Entreprises
                <br />
                Refonte d'Identité
                <br />
                Différenciation de Marque
              </h5>
            </div>
          </CardContent>
        </Card>
        <Card className="h-[300px] relative overflow-hidden cursor-pointer group">
          <CardContent className="h-full w-full p-0">
            <Image
              src="/service1.jpg"
              alt="image de publication"
              fill
              className="object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center z-10">
              <p className="text-white text-md p-4 font-semibold z-10">
                Explorez le pouvoir narratif de nos magazines personnalisés. De
                la mise en page artistique aux contenus captivants, chaque page
                raconte une histoire unique. Offrez à votre audience une
                expérience de lecture immersive avec des magazines qui captivent
                et engagent.
              </p>
              <h5 className="text-white text-md font-semibold">
                Publications d'Entreprise
                <br />
                Magazines Promotionnels
                <br />
                Contenu Éditorial
              </h5>
            </div>
          </CardContent>
        </Card>
        <Card className="h-[300px] relative overflow-hidden cursor-pointer group">
          <CardContent className="h-full w-full p-0">
            <Image
              src="/service3.jpg"
              alt="image de publication"
              fill
              className="object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center z-10">
              <p className="text-white text-md p-4 font-semibold z-10">
                Élevez votre présence avec notre service de stratégie marketing
                imprimé. Des campagnes ciblées aux supports promotionnels,
                chaque stratégie est conçue pour maximiser votre visibilité.
                Intégrez le pouvoir de l'impression dans votre stratégie globale
                de marketing.
              </p>
              <h5 className="text-white text-md font-semibold">
                Campagnes Promotionnelles
                <br />
                Lancement de Produits
                <br />
                Accroître la Notoriété de Marque
              </h5>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default SixSection;

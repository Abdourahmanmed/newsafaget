"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import CardComponents from "../CardComponents";
import useMeasure from "react-use-measure";

const FiveSection = () => {
  const images = [
    "/service.jpg",
    "/service1.jpg",
    "/service2.jpg",
    "/service3.jpg",
    "/service4.jpg",
    "/service5.jpg",
    "/service6.jpg",
    "/service7.jpg",
    "/service8.jpg",
    "/service9.jpg",
    "/service10.jpg",
    "/service11.jpg",
    "/service.jpg",
    "/service1.jpg",
    "/service2.jpg",
    "/service3.jpg",
    "/service4.jpg",
    "/service5.jpg",
    "/service6.jpg",
    "/service7.jpg",
    "/service8.jpg",
    "/service9.jpg",
    "/service10.jpg",
    "/service11.jpg",
  ];

  let [ref, { width }] = useMeasure();

  const xTransition = useMotionValue(0);

  useEffect(() => {
    let controls;
    // Ajustez la position finale en fonction de la largeur du conteneur
    let finalPosition = -width / 2;

    controls = animate(xTransition, [0, finalPosition], {
      ease: "linear",
      duration: 25,
      repeat: Infinity,
      repeatType: "loop",
    });

    // Assurez-vous de nettoyer correctement pour éviter les fuites de mémoire
    return () => controls.stop();
  }, [xTransition, width]);

  return (
    <div className="flex flex-col items-center p-10 bg-gradient-to-r from-orange-200 to-white overflow-hidden">
      {/* Titre et descriptions */}
      <h1 className="font-semibold text-3xl text-orange-800 text-center md:text-left">
        Nos Réalisations
      </h1>
      <p className="text-xl font-semibold py-4 text-center md:text-left">
        Découvrez nos réalisations exceptionnelles dans notre Portfolio.
      </p>
      <p className="text-md font-semibold text-center md:text-left mb-8">
        Découvrez notre expertise à travers une collection captivante de projets
        réalisés avec passion et précision. Notre portfolio est le reflet de
        notre engagement envers l'excellence, illustrant comment Safa Jet
        transforme les concepts créatifs en impressions numériques
        exceptionnelles.
      </p>

      {/* Conteneur des images avec défilement horizontal infini */}
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
        <motion.div
          className="flex gap-8  pr-14"
          animate={{
            translateX: "-50%",
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {[...images, ...images].map((item, index) => (
            <CardComponents image={item} key={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FiveSection;

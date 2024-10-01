"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const SixSection = () => {
  const rightRef = useRef(null);
  const leftRef = useRef(null);
  // Detecting if sections are in view
  const isRightInView = useInView(rightRef, { once: true });
  const isLeftInView = useInView(leftRef, { once: true });

  // Animation for the image (left)
  const LeftVariants = {
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
  // Animation for the text (right)
  const RightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };
  return (
    <div className="p-4 w-full">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row gap-4">
        <motion.div
          className="md:w-1/2"
          ref={leftRef}
          initial="hidden"
          animate={isLeftInView ? "visible" : "hidden"}
          variants={LeftVariants}
        >
          <h1 className="font-semibold text-3xl text-orange-800 py-2">
            Nos Partenaires de Confiance
          </h1>
          <h2 className="font-semibold mt-4">
            Des partenariats solides, une excellence constante
          </h2>
        </motion.div>
        <motion.div
          className="md:w-1/2"
          ref={rightRef}
          initial="hidden"
          animate={isRightInView ? "visible" : "hidden"}
          variants={RightVariants}
        >
          <p className="font-semibold mt-4">
            Chez Safa Jet, nous sommes fiers de collaborer avec des partenaires
            de confiance qui partagent notre engagement envers l'excellence et
            l'innovation. Ces relations stratégiques renforcent notre capacité à
            offrir des services d'impression numérique de premier ordre.
            Découvrez les entreprises et organisations qui font partie de notre
            réseau de confiance.
          </p>
        </motion.div>
      </div>

      {/* Partners Logos Section */}
      <div className="mt-8 w-full">
        <div className="flex flex-wrap gap-8 justify-center ">
          {[
            "/logo1.png",
            "/logo2.png",
            "/logo3.png",
            "/logo4.png",
            "/logo5.png",
            "/logo6.png",
            "/logo7.png",
            "/logo8.png",
            "/logo9.png",
          ].map((logo, index) => (
            <div
              key={index}
              className="flex items-center bg-white rounded-md p-2"
            >
              <Image
                src={logo}
                width={200}
                height={90}
                alt={`Logo partenaire ${index + 1}`}
                className="object-contain" // Assure que les logos conservent leur aspect ratio
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SixSection;

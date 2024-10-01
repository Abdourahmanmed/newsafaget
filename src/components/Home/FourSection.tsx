"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const FourSection = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  // Detecting if sections are in view
  const isImageInView = useInView(imageRef, { once: true });
  const isTextInView = useInView(textRef, { once: true });

  // Animation for the image (left)
  const imageVariants = {
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
  const textVariants = {
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
    <div className="flex flex-col justify-center p-10">
      <div className="py-2 text-center md:text-left">
        <h2 className="text-orange-800 text-3xl font-semibold">
          Témoignages Clients
        </h2>
        <p className="text-md font-semibold mt-4 max-w-xl">
          L'engagement envers la satisfaction client chez Safa Jet se traduit
          par une communauté de clients satisfaits. Découvrez ce que nos clients
          ont à dire sur leur expérience avec nous.
        </p>
      </div>

      <div className="w-full flex flex-col md:flex-row gap-4 bg-slate-800 rounded-lg text-white mt-6">
        {/* Image Section */}
        <motion.div
          ref={imageRef}
          initial="hidden"
          animate={isImageInView ? "visible" : "hidden"}
          variants={imageVariants}
          className="md:w-1/2 h-64 md:h-auto"
        >
          <Image
            src="/accueil4.jpg"
            width={200}
            height={200}
            className="rounded-l-lg object-cover w-full h-full"
            alt="c'est moi"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          ref={textRef}
          initial="hidden"
          animate={isTextInView ? "visible" : "hidden"}
          variants={textVariants}
          className="md:w-1/2 p-4"
        >
          <h4 className="font-semibold text-xl mb-2">
            "Une Équipe Exceptionnelle"
          </h4>
          <p className="font-semibold text-md mb-4">
            “Safa Jet ne se contente pas de répondre aux attentes, ils les
            dépassent. Travailler avec eux a été une expérience exceptionnelle,
            du début à la fin. Leur équipe dévouée et compétente a une manière
            unique de transformer des concepts en réalité imprimée.”
          </p>
          <h4 className="font-semibold text-xl mb-2">
            "Créativité Sans Limite"
          </h4>
          <p className="font-semibold text-md mb-4">
            “La créativité chez Safa Jet est vraiment sans limite. Ils ont une
            compréhension profonde de notre vision et la traduisent
            magnifiquement dans chaque impression. C'est un plaisir de
            collaborer avec une équipe aussi talentueuse.”
          </p>
          <h4 className="font-semibold text-xl mb-2">"Qualité Inégalée"</h4>
          <p className="font-semibold text-md mb-4">
            “La qualité de l'impression chez Safa Jet est inégalée. Chaque
            détail est pris en compte, et le résultat final est toujours
            impeccable. Nous avons trouvé en eux un partenaire de confiance pour
            tous nos besoins d'impression.”
          </p>
          <h4 className="font-semibold text-xl mb-2">
            "Réactivité et Professionnalisme"
          </h4>
          <p className="font-semibold text-md mb-4">
            “La réactivité et le professionnalisme de Safa Jet sont vraiment
            appréciables. Ils comprennent l'importance des délais et font tout
            pour garantir des livraisons ponctuelles sans compromis sur la
            qualité. Une entreprise fiable à tous égards.”
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default FourSection;

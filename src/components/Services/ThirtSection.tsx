"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { Card, CardContent } from "../ui/card";
import { motion, useInView } from "framer-motion";

const ThirtSection = () => {
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
        Impressions Grand Format
      </h1>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-2 mt-4"
        ref={leftSectionRef}
        initial="hidden"
        animate={isLeftInView ? "visible" : "hidden"}
        variants={leftVariants}
      >
        <Card className="h-[300px] relative overflow-hidden cursor-pointer group">
          <CardContent className="h-full w-full p-0 relative">
            <Image
              src="/service16.jpg"
              alt="image de publication"
              fill
              className="object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center z-10">
              <p className="text-white text-md p-4 font-semibold z-10">
                Créez un impact visuel remarquable avec nos affiches
                publicitaires grand format. Que ce soit pour promouvoir un
                événement, présenter un produit ou renforcer la visibilité de
                votre marque, nos affiches captivent l'attention et transmettent
                votre message avec éclat.
              </p>
              <h5 className="text-white text-md font-semibold">
                Événements
                <br />
                Produits
                <br />
                Marque
              </h5>
            </div>
          </CardContent>
        </Card>
        <Card className="h-[300px] relative overflow-hidden cursor-pointer  group">
          <CardContent className="h-full w-full p-0">
            <Image
              src="/service17.jpg"
              alt="image de publication"
              fill
              className="object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center z-10">
              <p className="text-white text-md p-4 font-semibold z-10">
                Créez un impact visuel remarquable avec nos affiches
                publicitaires grand format. Que ce soit pour promouvoir un
                événement, présenter un produit ou renforcer la visibilité de
                votre marque, nos affiches captivent l'attention et transmettent
                votre message avec éclat.
              </p>
              <h5 className="text-white text-md font-semibold">
                Salons et Foires
                <br />
                Présentations
                <br />
                Promotion d'Entreprise
              </h5>
            </div>
          </CardContent>
        </Card>
        <Card className="h-[300px] relative overflow-hidden cursor-pointer group">
          <CardContent className="h-full w-full p-0">
            <Image
              src="/service20.jpg"
              alt="image de publication"
              fill
              className="object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center z-10">
              <p className="text-white text-md p-4 font-semibold z-10">
                Transformez vos espaces avec nos impressions murales sur mesure.
                Du bureau à la salle d'exposition, créez une ambiance unique
                avec des œuvres artistiques, des messages inspirants ou la mise
                en valeur de votre identité visuelle. Laissez vos murs raconter
                votre histoire.
              </p>
              <h5 className="text-white text-md font-semibold">
                Décoration d'Intérieur
                <br />
                Identité Visuelle
                <br />
                Personnalisation d'Espaces
              </h5>
            </div>
          </CardContent>
        </Card>
        <Card className="h-[300px] relative overflow-hidden cursor-pointer group">
          <CardContent className="h-full w-full p-0">
            <Image
              src="/service18.jpg"
              alt="image de publication"
              fill
              className="object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center z-10">
              <p className="text-white text-md p-4 font-semibold z-10">
                Faites une impression mémorable lors de salons et expositions
                avec nos stands personnalisés. De la conception à la
                réalisation, chaque détail est pensé pour refléter l'essence de
                votre entreprise. Attirez l'attention et créez des connexions
                significatives avec un stand qui se démarque.
              </p>
              <h5 className="text-white text-md font-semibold">
                Événements Professionnels
                <br />
                Salons et Foires
                <br />
                Marketing Événementiel
              </h5>
            </div>
          </CardContent>
        </Card>
        <Card className="h-[300px] relative overflow-hidden cursor-pointer group">
          <CardContent className="h-full w-full p-0">
            <Image
              src="/service19.jpg"
              alt="image de publication"
              fill
              className="object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center z-10">
              <p className="text-white text-md p-4 font-semibold z-10">
                Faites briller votre message avec nos panneaux publicitaires sur
                mesure. De la conception percutante à la visibilité maximale,
                chaque panneau est une déclaration extérieure qui attire
                l'attention et renforce votre présence.
              </p>
              <h5 className="text-white text-md font-semibold">
                Publicité Extérieure
                <br />
                Campagnes de Sensibilisation
                <br />
                Communication de Marque
              </h5>
            </div>
          </CardContent>
        </Card>
        <Card className="h-[300px] relative overflow-hidden cursor-pointer group">
          <CardContent className="h-full w-full p-0">
            <Image
              src="/service21.jpg"
              alt="image de publication"
              fill
              className="object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center z-10">
              <p className="text-white text-md p-4 font-semibold z-10">
                Donnez vie à votre vitrine avec nos adhésifs sur mesure. Des
                promotions saisonnières aux éléments de branding, créez un
                impact visuel puissant sur vos clients. Nos adhésifs pour
                vitrines transforment chaque surface en une toile d'expression
                créative.
              </p>
              <h5 className="text-white text-md font-semibold">
                Boutiques et Commerces
                <br />
                Campagnes Promotionnelles
                <br />
                Identité Visuelle
              </h5>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default ThirtSection;

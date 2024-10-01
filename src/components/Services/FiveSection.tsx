"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { Card, CardContent } from "../ui/card";
import { motion, useInView } from "framer-motion";

const FiveSection = () => {
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
        Produits Promotionnels
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
              src="/service4.jpg"
              alt="image de publication"
              fill
              className="object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center z-10">
              <p className="text-white text-md p-4 font-semibold z-10">
                Portez votre identité avec fierté grâce à nos t-shirts
                personnalisés. De la conception originale à la qualité du
                textile, chaque t-shirt est une toile pour exprimer votre style
                et votre message. Faites passer votre marque à travers la mode.
              </p>
              <h5 className="text-white text-md font-semibold">
                Merchandising d'Entreprise
                <br />
                Événements d'Équipe
                <br />
                Campagnes Promotionnelles
              </h5>
            </div>
          </CardContent>
        </Card>
        <Card className="h-[300px] relative overflow-hidden cursor-pointer group">
          <CardContent className="h-full w-full p-0">
            <Image
              src="/service5.jpg"
              alt="image de publication"
              fill
              className="object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center z-10">
              <p className="text-white text-md p-4 font-semibold z-10">
                Savourez chaque gorgée avec nos mugs et tasses personnalisés. De
                la conception créative à la qualité durable, chaque tasse est
                une expérience tactile et visuelle. Transformez votre pause-café
                en un moment de branding unique.
              </p>
              <h5 className="text-white text-md font-semibold">
                Cadeaux d'Entreprise
                <br />
                Événements Promotionnels
                <br />
                Merchandising de Marque
              </h5>
            </div>
          </CardContent>
        </Card>
        <Card className="h-[300px] relative overflow-hidden cursor-pointer group">
          <CardContent className="h-full w-full p-0">
            <Image
              src="/service6.jpg"
              alt="image de publication"
              fill
              className="object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center z-10">
              <p className="text-white text-md p-4 font-semibold z-10">
                Écrivez votre histoire avec nos stylos personnalisés. Alliant
                élégance et praticité, chaque stylo est une déclaration de votre
                marque. Offrez un outil d'écriture raffiné et mémorable à vos
                clients, partenaires et employés.
              </p>
              <h5 className="text-white text-md font-semibold">
                Cadeaux d'Affaires
                <br />
                Événements Corporatifs
                <br />
                Articles Promotionnels
              </h5>
            </div>
          </CardContent>
        </Card>
        <Card className="h-[300px] relative overflow-hidden cursor-pointer group">
          <CardContent className="h-full w-full p-0">
            <Image
              src="/service7.jpg"
              alt="image de publication"
              fill
              className="object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center z-10">
              <p className="text-white text-md p-4 font-semibold z-10">
                Emportez votre marque partout avec nos porte-clés publicitaires.
                Du design créatif à la praticité quotidienne, chaque porte-clés
                est une opportunité de rappeler votre message. Offrez un
                accessoire pratique et mémorable à vos clients.
              </p>
              <h5 className="text-white text-md font-semibold">
                Cadeaux d'Entreprise
                <br />
                Événements Promotionnels
                <br />
                Merchandising de Marque
              </h5>
            </div>
          </CardContent>
        </Card>
        <Card className="h-[300px] relative overflow-hidden cursor-pointer group">
          <CardContent className="h-full w-full p-0">
            <Image
              src="/service9.jpg"
              alt="image de publication"
              fill
              className="object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center z-10">
              <p className="text-white text-md p-4 font-semibold z-10">
                Affrontez la pluie avec style grâce à nos parapluies
                personnalisés. Du design moderne à la robustesse face aux
                intempéries, chaque parapluie est une déclaration de votre
                marque même sous la pluie. Offrez une protection élégante à vos
                clients.
              </p>
              <h5 className="text-white text-md font-semibold">
                Cadeaux d'Entreprise
                <br />
                Événements en Extérieur
                <br />
                Articles Promotionnels de Saison
              </h5>
            </div>
          </CardContent>
        </Card>
        <Card className="h-[300px] relative overflow-hidden cursor-pointer group">
          <CardContent className="h-full w-full p-0">
            <Image
              src="/service8.jpg"
              alt="image de publication"
              fill
              className="object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center z-10">
              <p className="text-white text-md p-4 font-semibold z-10">
                Soyez la tête d'affiche avec nos casquettes et chapeaux
                promotionnels. Du style moderne à la visibilité de votre logo,
                chaque pièce est conçue pour attirer l'attention. Faites de
                votre tête un espace promotionnel unique.
              </p>
              <h5 className="text-white text-md font-semibold">
                Événements en Extérieur
                <br />
                Campagnes de Marque
                <br />
                Merchandising de Mode
              </h5>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default FiveSection;

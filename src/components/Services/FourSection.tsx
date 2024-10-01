"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { Card, CardContent } from "../ui/card";
import { motion, useInView } from "framer-motion";

const FourSection = () => {
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
        Imprimés Personnalisés
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
              src="/service10.jpg"
              alt="image de publication"
              fill
              className="object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center z-10">
              <p className="text-white text-md p-4 font-semibold z-10">
                Marquez une première impression mémorable avec nos cartes de
                visite personnalisées. Alliant design élégant et qualité
                exceptionnelle, nos cartes renforcent votre professionnalisme et
                laissent une empreinte durable. Chaque carte est une invitation
                à la connexion.
              </p>
              <h5 className="text-white text-md font-semibold">
                Networking Professionnel
                <br />
                Présentation Personnelle
                <br />
                Identité de Marque
              </h5>
            </div>
          </CardContent>
        </Card>
        <Card className="h-[300px] relative overflow-hidden cursor-pointer group">
          <CardContent className="h-full w-full p-0">
            <Image
              src="/service13.jpg"
              alt="image de publication"
              fill
              className="object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center z-10">
              <p className="text-white text-md p-4 font-semibold z-10">
                Communiquez efficacement avec nos brochures informatives sur
                mesure. Du contenu captivant à une mise en page impeccable,
                chaque brochure est conçue pour informer et séduire. Donnez à
                votre audience une expérience de lecture engageante.
              </p>
              <h5 className="text-white text-md font-semibold">
                Présentations Commerciales
                <br />
                Documentations Produits
                <br />
                Campagnes Marketing
              </h5>
            </div>
          </CardContent>
        </Card>
        <Card className="h-[300px] relative overflow-hidden cursor-pointer group">
          <CardContent className="h-full w-full p-0">
            <Image
              src="/service12.jpg"
              alt="image de publication"
              fill
              className="object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center z-10">
              <p className="text-white text-md p-4 font-semibold z-10">
                Libérez votre créativité avec nos flyers uniques. Du design
                percutant aux messages accrocheurs, chaque flyer est une
                invitation à l'action. Faites la promotion de vos événements,
                promotions et offres spéciales avec un impact visuel mémorable.
              </p>
              <h5 className="text-white text-md font-semibold">
                Événements Locaux
                <br />
                Campagnes Promotionnelles
                <br />
                Publicités Ciblées
              </h5>
            </div>
          </CardContent>
        </Card>
        <Card className="h-[300px] relative overflow-hidden cursor-pointer group">
          <CardContent className="h-full w-full p-0">
            <Image
              src="/service11.jpg"
              alt="image de publication"
              fill
              className="object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center z-10">
              <p className="text-white text-md p-4 font-semibold z-10">
                Créez l'anticipation avec nos invitations uniques. Du design
                élégant aux détails personnalisés, chaque invitation est conçue
                pour évoquer l'excitation de votre événement. Laissez une
                première impression inoubliable et suscitez l'enthousiasme.
              </p>
              <h5 className="text-white text-md font-semibold">
                Événements Spéciaux
                <br />
                Soirées VIP
                <br />
                Célébrations Uniques
              </h5>
            </div>
          </CardContent>
        </Card>
        <Card className="h-[300px] relative overflow-hidden cursor-pointer group">
          <CardContent className="h-full w-full p-0">
            <Image
              src="/service14.jpg"
              alt="image de publication"
              fill
              className="object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center z-10">
              <p className="text-white text-md p-4 font-semibold z-10">
                Capturez vos idées avec style grâce à nos carnets et blocs-notes
                personnalisés. Du cuir luxueux aux designs uniques, chaque pièce
                est une invitation à la créativité. Offrez à votre audience une
                expérience d'écriture distinctive et mémorable.
              </p>
              <h5 className="text-white text-md font-semibold">
                Cadeaux d'Entreprise
                <br />
                Prises de Notes Élégantes
                <br />
                Articles Promotionnels Haut de Gamme
              </h5>
            </div>
          </CardContent>
        </Card>
        <Card className="h-[300px] relative overflow-hidden cursor-pointer group">
          <CardContent className="h-full w-full p-0">
            <Image
              src="/service15.jpg"
              alt="image de publication"
              fill
              className="object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center z-10">
              <p className="text-white text-md p-4 font-semibold z-10">
                Organisez votre année avec style grâce à nos calendriers
                personnalisés. Du design créatif aux fonctionnalités pratiques,
                chaque calendrier est une fusion d'esthétique et d'utilité.
                Offrez à vos clients et partenaires un outil quotidien unique et
                mémorable.
              </p>
              <h5 className="text-white text-md font-semibold">
                Cadeaux d'Affaires
                <br />
                Marketing de Fin d'Année
                <br />
                Promotion de Marque Annuelle
              </h5>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default FourSection;

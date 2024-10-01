"use client";
import React from "react";
import { motion } from "framer-motion";
import ReusableForm from "../Form";
import { Phone, Mail, MapPin } from "lucide-react"; // Import the required icons

const ContactComponents = () => {
  const pageTransition = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: "0%" },
    exit: { opacity: 0, x: "-100%" },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransition}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="w-full flex flex-col md:flex-row h-full md:h-[120vh] p-4 md:p-10 bg-white"
    >
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-orange-700 text-3xl font-semibold p-4">
          Travaillons ensemble !
        </h2>
        <p className="p-4">
          N'hésitez pas à nous contacter pour toute question, demande de devis
          ou simplement pour discuter de votre prochain projet. Nous sommes là
          pour vous aider à concrétiser vos idées et à surpasser vos attentes.
        </p>
        <ReusableForm />
      </div>
      <div className="w-full md:w-1/2 bg-orange-100 flex flex-col justify-center h-[118vh] px-4 md:px-10 gap-8 text-orange-700">
        <div className="flex items-center gap-2">
          <div>
            <h5 className="font-semibold text-2xl py-4">Téléphone</h5>
            <p className="flex gap-4">
              <Phone size={24} /> +253 77 86 11 43
            </p>
            <p className="flex gap-4">
              <Phone size={24} /> +253 77 22 63 43
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <h5 className="font-semibold text-2xl py-4">Email</h5>
            <p className="flex gap-4">
              <Mail size={24} /> safajetdjib@gmail.com
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <h5 className="font-semibold text-2xl py-4">Adresse</h5>
            <p className="flex gap-4">
              <MapPin size={24} /> Rue de Berne, Djibouti centre-ville
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactComponents;

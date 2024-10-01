"use client";
import React from "react";
import { Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react"; // Import des icônes depuis Lucide React

const Footer = () => {
  return (
    <div className="bg-orange-700 text-white pt-5 flex flex-col items-center text-center md:text-left">
      <div className="container p-4">
        <div className="flex flex-wrap justify-center items-center">
          {/* Menu Section */}
          <div className="w-full md:w-1/2 lg:w-1/4 mb-4">
            <h5 className="text-xl font-semibold mb-3">Menu</h5>
            <ul className="list-none space-y-2">
              <li>
                <a href="/" className="hover:text-gray-200">Accueil</a>
              </li>
              <li>
                <a href="/service" className="hover:text-gray-200">Service</a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-200">À propos</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-200">Contact</a>
              </li>
            </ul>
          </div>

          {/* Service Section */}
          <div className="w-full md:w-1/2 lg:w-1/4 mb-4">
            <h5 className="text-xl font-semibold mb-3">Service</h5>
            <ul className="list-none space-y-2">
              <li>
                <a href="/service" className="hover:text-gray-200">Impressions Grand Format</a>
              </li>
              <li>
                <a href="/service" className="hover:text-gray-200">Imprimés Personnalisés</a>
              </li>
              <li>
                <a href="/service" className="hover:text-gray-200">Produits Promotionnels</a>
              </li>
              <li>
                <a href="/service" className="hover:text-gray-200">Design Graphique et Personnalisation</a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="text-center md:w-1/2 lg:w-1/4 mb-4">
            <h5 className="text-xl font-semibold mb-3">Contact</h5>
            <ul className="list-none space-y-2 text-center">
              <li className="flex items-center">
                <Phone className="mr-2" size={20} />
                <a className="hover:text-gray-200" href="tel:+25377861143">+253 77 86 11 43</a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2" size={20} />
                <a className="hover:text-gray-200" href="tel:+25377226343">+253 77 22 63 43</a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2" size={20} />
                <a className="hover:text-gray-200" href="mailto:safajetdjib@gmail.com">safajetdjib@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="w-full md:w-1/2 lg:w-1/4 mb-4">
            <h5 className="text-xl font-semibold mb-3">Suivez-nous</h5>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook size={25} className="hover:text-gray-200" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram size={25} className="hover:text-gray-200" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter size={25} className="hover:text-gray-200" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center p-3 border-t border-gray-700">
        © 2024 Safa Jet. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;

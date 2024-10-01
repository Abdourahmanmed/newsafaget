"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { motion, useAnimation } from "framer-motion"; // Import de Framer Motion
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";

const Navbar = () => {
  // Récupération du chemin actuel
  const path = usePathname();
  const [bgColor, setBgColor] = useState("bg-transparent"); // État pour la couleur de fond
  const controls = useAnimation(); // Contrôles pour l'animation

  // Menu de navigation
  const Menus = [
    { name: "Accueil", link: "/" },
    { name: "Services", link: "/Services" },
    { name: "A propos", link: "/Propos" },
    { name: "Contact", link: "/Contact" },
  ];

  // Fonction pour gérer le changement de fond lors du scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor("bg-white shadow-md"); // Changer le fond en blanc avec une ombre
        controls.start({ backgroundColor: "#ffffff" });
      } else {
        setBgColor("bg-transparent");
        controls.start({ backgroundColor: "transparent" });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <>
      {/* Navbar pour les écrans de bureau (sm et au-dessus) */}
      <motion.div
        className={`hidden sm:flex justify-between items-center p-4 fixed w-full z-50 transition-colors duration-300 ${bgColor}`}
        animate={controls} // Application des contrôles d'animation
      >
        {/* Logo */}
        <div>
          <Image
            src="/logo_2.png"
            width={150}
            height={1}
            alt="Le logo de safaget"
            className="h-[30px]"
          />
        </div>
        {/* Menu de navigation */}
        <ul className="flex gap-5">
          {Menus.map((menu, index) => (
            <li key={index}>
              <a
                href={menu.link}
                className={`hover:text-orange-500 duration-500 ${
                  path === menu.link ? "text-orange-800" : "text-black"
                }`}
              >
                {menu.name}
              </a>
            </li>
          ))}
        </ul>
        {/* Bouton placeholder */}
        <div>
          <Button className="bg-orange-700">Obtenir un devis</Button>
        </div>
      </motion.div>

      {/* Navbar pour les écrans mobiles (sm et en dessous) */}
      <motion.div
        className={`flex sm:hidden justify-between items-center p-4 fixed w-full z-50 transition-colors duration-300 ${bgColor}`}
        animate={controls} // Application des contrôles d'animation
      >
        {/* Logo */}
        <div>
          <Image
            src="/logo_2.png"
            width={150}
            height={1}
            alt="Le logo de safaget"
            className="h-[40px]"
          />
        </div>
        {/* Menu */}
        <Sheet>
          <SheetTrigger>
            <Menu className="text-orange-800" />
          </SheetTrigger>
          <SheetContent className="">
            <SheetHeader>
              <SheetTitle></SheetTitle>
              <SheetDescription>
                <ul className="flex gap-5 flex-col">
                  {Menus.map((menu, index) => (
                    <li key={index}>
                      <a
                        href={menu.link}
                        className={`hover:text-orange-500 duration-500 ${
                          path === menu.link ? "text-orange-500" : "text-black"
                        }`}
                      >
                        {menu.name}
                      </a>
                    </li>
                  ))}
                  <div>
                    <Button className="bg-orange-700">Obtenir un devis</Button>
                  </div>
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </motion.div>
    </>
  );
};

export default Navbar;

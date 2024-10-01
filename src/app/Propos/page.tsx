import FiveSection from "@/components/About/FiveSection";
import FourSection from "@/components/About/FourSection";
import HeardeSection from "@/components/About/HeardeSection";
import SecondeSection from "@/components/About/SecondeSection";
import ThirtSection from "@/components/About/ThirtSection";
import Footer from "@/components/Footer";
import ReusableForm from "@/components/Form";
import React from "react";

const Propos = () => {
  return (
    <div>
      <HeardeSection />
      <SecondeSection />
      <ThirtSection />
      <FourSection />
      <FiveSection />
      
      <Footer />
    </div>
  );
};

export default Propos;

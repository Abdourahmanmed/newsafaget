
import Footer from "@/components/Footer";
import FiveSection from "@/components/Home/FiveSection";
import FourSection from "@/components/Home/FourSection";
import HeaderSection from "@/components/Home/HeaderSection";
import SecondeSection from "@/components/Home/SecondeSection";
import SevenSection from "@/components/Home/SevenSection";
import SixSection from "@/components/Home/SixSection";
import ThirtSection from "@/components/Home/ThirtSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeaderSection />
      <SecondeSection />
      <ThirtSection />
      <FourSection />
      <FiveSection />
      <SixSection />
      <SevenSection />
      <Footer />
    </div>
  );
}

import AboutSection from "@/components/AboutSection";
import Hero from "@/components/Hero";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Services from "@/components/Services.tsx";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <>
        <Hero/>
        <AboutSection/>
        <WhyUs/>
        <Services/>
    </>
  );
}

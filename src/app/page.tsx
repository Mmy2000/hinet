import AboutSection from "@/components/AboutSection";
import Hero from "@/components/Hero";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Services from "@/components/Services.tsx";
import WhyUs from "@/components/WhyUs";

export default function Home() {

  
  return (
    <>
      <Hero
        coverImage="/hero-bg.jpg"
        title="Hinet Soft"
        description="A software company that provides website design and app design to achieve the goals of your project."
        showButton={true}
      />
      <AboutSection />
      <WhyUs />
      <Services />
    </>
  );
}

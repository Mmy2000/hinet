import AboutSection from "@/components/AboutSection";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import { fetchServicePage } from "@/lib/serviceApi";
import { fetchSiteSettingsData } from "@/lib/siteSettingsApi";

export default async function Home() {

  const data = await fetchServicePage();    
  const services = data?.data?.services || [];

  const settingsData = await fetchSiteSettingsData();
  const heroData = settingsData?.data?.homePageHeroSection;
  const coverImage = process.env.NEXT_PUBLIC_API_URL + heroData?.coverImage?.url;  

  return (
    <>
      <Hero
        coverImage={coverImage}
        title={heroData?.title}
        description={heroData?.subtitle}
        showButton={
          heroData?.heroButtonText && heroData?.heroButtonLink ? true : false
        }
        heroButtonLink={heroData?.heroButtonLink}
        heroButtonText={heroData?.heroButtonText}
        sectionType="home"
      />
      <AboutSection />
      <WhyUs />
      <Services services={services} />
    </>
  );
}

import AboutSection from "@/components/AboutSection";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import { fetchAboutUsData } from "@/lib/aboutUsApi";
import { fetchServicePage } from "@/lib/serviceApi";
import { fetchSiteSettingsData } from "@/lib/siteSettingsApi";

export default async function Home() {

  const serviceData = await fetchServicePage();    
  const services = serviceData?.data?.services || [];

  const settingsData = await fetchSiteSettingsData();
  const heroData = settingsData?.data?.homePageHeroSection;
  const coverImage = process.env.NEXT_PUBLIC_API_URL + heroData?.coverImage?.url;  

  const aboutUsData = await fetchAboutUsData()  

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
      {aboutUsData?.data?.whoAreWeSection?.hide === true ? null : (
        <AboutSection
          title={aboutUsData?.data?.whoAreWeSection?.title}
          description={aboutUsData?.data?.whoAreWeSection?.description}
          image={
            process.env.NEXT_PUBLIC_API_URL +
            aboutUsData?.data?.whoAreWeSection?.image?.url
          }
          showButton={true}
        />
      )}
      {aboutUsData?.data?.whyUsIntroSection?.hide === true ? null : (
        <WhyUs
          introTitle={aboutUsData?.data?.whyUsIntroSection?.introTitle}
          introDescription={
            aboutUsData?.data?.whyUsIntroSection?.introDescription
          }
          items={aboutUsData?.data?.whyUsItemsSection}
        />
      )}
      {serviceData?.data?.hide === true ? null : <Services services={services} />}
    </>
  );
}

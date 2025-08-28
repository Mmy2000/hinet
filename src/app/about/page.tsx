import AboutSection from '@/components/AboutSection';
import CEOSection from '@/components/CEOSection';
import Hero from '@/components/Hero';
import WhyUs from '@/components/WhyUs';
import { fetchAboutUsData, fetchceoSectionBackground } from '@/lib/aboutUsApi';
import React from 'react'

const page = async () => {
  const data = await fetchAboutUsData()
  const sectionBackground = await fetchceoSectionBackground()
  const CEOImage = process.env.NEXT_PUBLIC_API_URL + data?.data?.ceoSection?.ceo_image?.url
  
  const coverImage =
    process.env.NEXT_PUBLIC_API_URL +
    (sectionBackground?.data?.ceoSection?.section_background?.[0]?.url || "");         
    
    return (
      <>
        <Hero
          coverImage={
            process.env.NEXT_PUBLIC_API_URL +
            data?.data?.heroSection?.heroBackground?.url
          }
          title={data?.data?.heroSection?.heroTitle}
          description={data?.data?.heroSection?.heroSubtitle}
          showButton={
            data?.data?.heroSection?.heroButtonText &&
            data?.data?.heroSection?.heroButtonLink
              ? true
              : false
          }
          heroButtonLink={data?.data?.heroSection?.heroButtonLink}
          heroButtonText={data?.data?.heroSection?.heroButtonText}
          sectionType="about"
        />
        {data?.data?.whoAreWeSection?.hide === true ? null : (
          <AboutSection
            title={data?.data?.whoAreWeSection?.title}
            description={data?.data?.whoAreWeSection?.description}
            image={
              process.env.NEXT_PUBLIC_API_URL +
              data?.data?.whoAreWeSection?.image?.url
            }
            showButton={false}
          />
        )}
        {data?.data?.whyUsIntroSection?.hide === true ? null : (
          <WhyUs
            introTitle={data?.data?.whyUsIntroSection?.introTitle}
            introDescription={data?.data?.whyUsIntroSection?.introDescription}
            items={data?.data?.whyUsItemsSection}
          />
        )}
        {data?.data?.ceoSection?.hide === true ? null : (
          <CEOSection
            name={data?.data?.ceoSection?.name}
            about_ceo={data?.data?.ceoSection?.about_ceo}
            ceo_image={CEOImage}
            section_background={coverImage} // Assuming section_background is an array
          />
        )}
      </>
    );
}

export default page
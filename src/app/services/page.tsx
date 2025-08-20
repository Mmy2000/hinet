

import Hero from '@/components/Hero';
import IntroSection from '@/components/IntroSection';
import VisualIdentitySection from '@/components/VisualIdentitySection';
import apiServiceCall from '@/services/service';
import React from 'react'

  const points = [
    { id: 1, text: "Logo Design" },
    { id: 2, text: "Brand Guidelines" },
    { id: 3, text: "Stationery Design" },
    { id: 4, text: "Social Media Branding" },
    { id: 5, text: "Packaging Design" },
  ];

const page = async () => {
  // Fetch data from Strapi
  const data = await apiServiceCall({
    url: "/api/service-page?populate[services][populate]=*",
    method: "GET",
  });

  const coverImageApi = await apiServiceCall({
    url: "/api/service-page?populate=*",
    method: "GET",
  })

  const coverImage = process.env.NEXT_PUBLIC_API_URL + coverImageApi?.data?.heroBackground?.formats?.large?.url;
  const services = data?.data?.services || [];

  return (
    <>
      <Hero
        coverImage={coverImage}
        title={data?.data?.heroTitle || "Welcome to Our Service Page"}
        description={
          data?.data?.heroSubtitle ||
          "Explore our range of services designed to help you succeed."
        }
        heroButtonLink={data?.data?.heroButtonLink || "/contact"}
        heroButtonText={data?.data?.heroButtonText || "Contact Us"}
        showButton={true}
      />
      <IntroSection
        introText={data?.data?.introText}
        introButtonLink={data?.data?.introButtonLink || "/contact"}
        introButtonText={data?.data?.introButtonText}
      />

      {services.map((service: any) => (
        <VisualIdentitySection
          key={service.id}
          title={service.title}
          description={service.description}
          points={
            points?.map((p: any, i: number) => ({
              id: i + 1,
              text: p.text,
            })) || []
          }
          image={`${process.env.NEXT_PUBLIC_API_URL}${service.image?.url}`}
        />
      ))}
    </>
  );
}

export default page
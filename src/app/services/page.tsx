
import Hero from '@/components/Hero';
import IntroSection from '@/components/IntroSection';
import VisualIdentitySection from '@/components/VisualIdentitySection';
import { fetchServicePage } from '@/lib/serviceApi';
import apiServiceCall from '@/services/service';
import React from 'react'

const page = async () => {
  // Fetch data from Strapi
  const data = await fetchServicePage();    

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

      {services.map((service: any, idx: number) => (
        <VisualIdentitySection
          key={service.id}
          title={service.title}
          description={service.description}
          points={
            service.points?.map((p: any, i: number) => ({
              id: i + 1,
              title: p.title,
              icon: p.icon
                ? `${process.env.NEXT_PUBLIC_API_URL}${p.icon?.url}`
                : undefined,
            })) || []
          }
          image={`${process.env.NEXT_PUBLIC_API_URL}${service.image?.url}`}
          icon={`${process.env.NEXT_PUBLIC_API_URL}${service.icon?.url}`}
          variant={idx % 2 === 0 ? "background" : "transparent"} // alternate or manual
        />
      ))}
    </>
  );
}

export default page
import ClientsSection from '@/components/ClientsSection';
import Hero from '@/components/Hero';
import PartnershipSection from '@/components/PartnershipSection';
import { fetchClientPageData } from '@/lib/clientsApi';
import React from 'react'

const page = async () => {

  const clientPageData = await fetchClientPageData()
  const points = clientPageData?.data?.intro_section?.points;  
  const clientItems = clientPageData?.data?.clientItems    

  return (
    <>
      <Hero
        coverImage={
          process.env.NEXT_PUBLIC_API_URL +
          clientPageData?.data?.heroSection?.heroBackground?.url
        }
        title={clientPageData?.data?.heroSection?.heroTitle}
        description={clientPageData?.data?.heroSection?.heroSubtitle}
        showButton={
          clientPageData?.data?.heroSection?.heroButtonLink &&
          clientPageData?.data?.heroSection?.heroButtonText
            ? true
            : false
        }
        heroButtonLink={clientPageData?.data?.heroSection?.heroButtonLink}
        heroButtonText={clientPageData?.data?.heroSection?.heroButtonText}
        sectionType="clients"
      />
      {clientPageData?.data?.intro_section?.hide === true ? null : (
        <PartnershipSection
          title={clientPageData?.data?.intro_section?.title}
          description={clientPageData?.data?.intro_section?.description}
          image={
            process.env.NEXT_PUBLIC_API_URL +
            clientPageData?.data?.intro_section?.image?.url
          }
          points={points}
        />
      )}
      {clientPageData?.data?.client_section?.hide === true ? null : (
        <ClientsSection
          introText={clientPageData?.data?.client_section?.introText}
          introSubtitle={clientPageData?.data?.client_section?.introSubtitle}
          clientItems={clientItems}
        />
      )}
    </>
  );
}

export default page
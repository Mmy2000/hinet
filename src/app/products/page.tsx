import Hero from '@/components/Hero';
import ProductsList from '@/components/ProductsList';
import { fetchProjectsData, fetchProjectsPageData } from '@/lib/projectsApi';
import React from 'react'

const page = async () => {
  const pageData = await fetchProjectsPageData()
  const productsData = await fetchProjectsData()
    
  return (
    <>
      <Hero
        coverImage={
          process.env.NEXT_PUBLIC_API_URL +
          pageData?.data?.heroSection?.heroBackground?.url
        }
        title={pageData?.data?.heroSection?.heroTitle}
        description={pageData?.data?.heroSection?.heroSubtitle}
        showButton={
          pageData?.data?.heroSection?.heroButtonLink &&
          pageData?.data?.heroSection?.heroButtonText
            ? true
            : false
        }
        heroButtonLink={pageData?.data?.heroSection?.heroButtonLink}
        heroButtonText={pageData?.data?.heroSection?.heroButtonText}
        sectionType="products"
      />
      <ProductsList projects={productsData?.data} />
    </>
  );
}

export default page
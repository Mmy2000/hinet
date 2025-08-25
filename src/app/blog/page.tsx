import Blog from '@/components/Blog';
import Hero from '@/components/Hero';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { fetchBlogData, fetchHeroBlogHeroSectionData } from '@/lib/blogApi';
import React from 'react'

const page = async () => {
  const heroSectionData = await fetchHeroBlogHeroSectionData()
  const blogData = await fetchBlogData()      
  
  return (
    <>
      <Hero
        coverImage={`${process.env.NEXT_PUBLIC_API_URL}${heroSectionData?.data?.heroBackground?.url}`}
        title={heroSectionData?.data?.heroTitle}
        description={heroSectionData?.data?.heroSubtitle}
        showButton={
          heroSectionData?.data?.heroButtonText &&
          heroSectionData?.data?.heroButtonLink
            ? true
            : false
        }
        heroButtonLink={heroSectionData?.data?.heroButtonLink}
        heroButtonText={heroSectionData?.data?.heroButtonText}
        sectionType="blog"
      />
      <MaxWidthWrapper className="my-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogData?.data.map((blog: any) => (
          <Blog
            key={blog?.id}
            title={blog.title}
            cover_description={blog.cover_description}
            image={`${process.env.NEXT_PUBLIC_API_URL}${blog.image.url}`}
            createdAt={blog?.createdAt}
            id={blog?.documentId}
          />
        ))}
      </MaxWidthWrapper>
    </>
  );
}

export default page
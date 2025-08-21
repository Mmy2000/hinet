import ContactPage from '@/components/ContactPage';
import Hero from '@/components/Hero';
import apiServiceCall from '@/services/service';
import React from 'react'

const page = async () => {

  const data = await apiServiceCall({
    url: "/api/contact-page?populate=*",
    method: "GET",
  });  

  if (!data || !data.data) {
    return <div>Error loading contact page data.</div>;
  }

  return (
    <>
      <Hero
        coverImage={
          data?.data?.heroBackground
            ? process.env.NEXT_PUBLIC_API_URL +
              data?.data?.heroBackground?.formats?.large?.url
            : "/default-cover-image.jpg"
        }
        title={data?.data?.heroTitle}
        description={data?.data?.heroSubtitle}
        showButton={data?.data?.introButtonText && data?.data?.introButtonLink ? true : false}
        heroButtonLink={data?.data?.heroButtonLink || "/undefined"}
        heroButtonText={data?.data?.heroButtonText || "undefined"}
      />
      <ContactPage
        introText={data?.data?.introText}
        introTitle={data?.data?.introTitle}
        introImage={
          data?.data?.introImage
            ? process.env.NEXT_PUBLIC_API_URL + data?.data?.introImage?.url
            : "/default-intro-image.jpg"
        }
      />
    </>
  );
}

export default page
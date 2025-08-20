import Hero from '@/components/Hero';
import React from 'react'

const page = () => {
  return (
    <>
      <Hero
        coverImage="/hero-bg.jpg"
        title="About Us"
        description="A software company that provides website design and app design to achieve the goals of your project."
        showButton={true}
        heroButtonLink="/contact"
        heroButtonText="Contact Us"
        sectionType="about"
      />
    </>
  );
}

export default page
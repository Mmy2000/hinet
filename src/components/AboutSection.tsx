"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AboutSectionData } from "@/interfaces/page";
import Link from "next/link";

const AboutSection:React.FC<AboutSectionData> = ({
  title,
  description,
  image,
  showButton,
}) => {
  return (
    <section className="w-full py-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 md:px-12">
        {/* Left side - Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-800 mb-6"></div>
          <p className=" text-lg leading-relaxed mb-6">{description}</p>

          {showButton && (
            <Link href="/about">
              <Button
                variant="outline"
                className="border-2 border-blue-400 text-blue-600 hover:bg-blue-500 hover:text-white font-semibold px-6 py-5 rounded-lg"
              >
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          )}
        </div>

        {/* Right side - Image */}
        <div className="flex justify-center">
          <img
            src={image} // 👈 replace with your illustration
            alt="Who Are We"
            className="max-w-md w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

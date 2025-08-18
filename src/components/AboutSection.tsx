"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="w-full py-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 md:px-12">
        {/* Left side - Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who Are We</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-800 mb-6"></div>
          <p className=" text-lg leading-relaxed mb-6">
            HiNet offers innovative solutions for business owners, helping to
            elevate business performance, increase productivity, and boost
            profits while reducing costs through advanced web and mobile
            applications. It also provides detailed reports and statistics to
            improve business management.
          </p>
          <Button
            variant="outline"
            className="border-2 border-blue-400 text-blue-600 hover:bg-blue-500 hover:text-white font-semibold px-6 py-5 rounded-lg"
          >
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Right side - Image */}
        <div className="flex justify-center">
          <img
            src="/AboutSection.svg" // 👈 replace with your illustration
            alt="Who Are We"
            className="max-w-md w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

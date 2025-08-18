"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="relative w-full py-24 flex items-center"
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Linear gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/20" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Hi Net
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-800 mb-6"></div>
        <p className="text-lg md:text-xl text-white max-w-2xl mb-6 leading-relaxed">
          A software company that provides you with website design and app
          design to achieve the goals of your project.
        </p>
        <Link href="/contact">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg px-6 py-3">
            Contact Us <PhoneCall className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;

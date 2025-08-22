"use client";

import { CEOSectionData } from "@/interfaces/page";
import Image from "next/image";


const CEOSection: React.FC<CEOSectionData> = ({
  name,
  about_ceo,
  ceo_image,
  section_background,
}) => {
    
  return (
    <section
      className="relative w-full h-auto py-10 flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${section_background})`, // 👈 Replace with your background
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-white">
        {/* Profile image */}
        <div className="flex justify-center mb-4">
          <Image
            src={ceo_image}// 👈 Replace with your CEO image
            alt="CEO"
            width={120}
            height={120}
            className="rounded-full border-4 border-white shadow-lg"
          />
        </div>

        {/* Message */}
        <p className="text-lg md:text-xl font-medium leading-relaxed">
          {about_ceo}
        </p>

        {/* CEO Name & Title */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold">CEO</h3>
          <p className="text-lg">{name}</p>
        </div>
      </div>
    </section>
  );
};

export default CEOSection;

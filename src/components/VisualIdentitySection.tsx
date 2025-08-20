"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react"; // shadcn/lucide icons
import Image from "next/image";

interface Point {
  id: number;
  text: string;
}

interface VisualIdentitySectionProps {
  title: string;
  description: string;
  points?: Point[];
  image: string;
}

const VisualIdentitySection: React.FC<VisualIdentitySectionProps> = ({
  title,
  description,
  points,
  image,
}) => {
  return (
    <section className="bg-blue-50 dark:bg-transparent py-16 px-6 md:px-12 lg:px-20">
      <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl md:text-4xl font-bold text-blue-900 dark:text-blue-400 mb-4">
            {title}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 text-xl">{description}</p>

          <ul className="space-y-4 font-medium">
            {points?.map((point) => (
              <li
                key={point.id}
                className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
              >
                <CheckCircle2 className="text-blue-600 mt-1 dark:text-blue-400" size={22} />
                <span>{point.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <Image
            src={image}
            alt={title}
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default VisualIdentitySection;

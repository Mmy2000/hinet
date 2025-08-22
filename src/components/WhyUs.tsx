// app/components/WhyUs.tsx
"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { WyUsData } from "@/interfaces/page";

const WhyUs: React.FC<WyUsData> = ({
  introTitle,
    introDescription,
    items
}) => {
  
  return (
    <section className="container mx-auto py-4 px-6 text-center my-8">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {introTitle}
      </motion.h2>
      <p className="dark:text-gray-300 max-w-2xl mx-auto ">
        {introDescription}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <Card className="border-none shadow-none transition duration-300 bg-transparent">
              <CardContent className="flex flex-col items-center text-center">
                {/* Image instead of icon */}
                <div className="flex items-center justify-center mb-4">
                  <Image
                    src={process.env.NEXT_PUBLIC_API_URL + item.image.url}
                    alt={item.title}
                    width={10}
                    height={10}
                    className="object-contain w-full"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="dark:text-gray-300 text-sm">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
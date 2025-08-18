// app/components/WhyUs.tsx
"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const features = [
  {
    image: "/phone.svg", // put your image in public/icons/
    title: "Communication",
    description:
      "We value continuous and direct communication with our clients, so we provide you with a support team to assist you and answer your inquiries 24 hours a day.",
  },
  {
    image: "/quality-B8-kDydz.svg",
    title: "Quality",
    description:
      "We always strive to provide you with the highest levels of quality in our services, with a focus on details and outstanding performance.",
  },
  {
    image: "/solutions-BJ_tBbIb.svg",
    title: "Innovative solutions",
    description:
      "We excel in the field of design and development through the innovative solutions we offer, ensuring our projects are of the highest efficiency and quality.",
  },
  {
    image: "/alarm.svg",
    title: "Deadline Commitment",
    description:
      "We always commit to delivering projects according to the specified timeline to ensure that your needs are met in a timely manner.",
  },
];

export default function WhyUs() {
  return (
    <section className="container mx-auto py-4 px-6 text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Why Us?
      </motion.h2>
      <p className="dark:text-gray-300 max-w-2xl mx-auto mb-12">
        Designing your project with HiNet will certainly be different, and it
        will also be the reason for you to lead in your field.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
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
                    src={feature.image}
                    alt={feature.title}
                    width={10}
                    height={10}
                    className="object-contain w-full"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="dark:text-gray-300 text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

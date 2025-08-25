"use client";

import { ClientPartnershipProps } from "@/interfaces/page";
import { motion } from "framer-motion";
import Image from "next/image";

const PartnershipSection: React.FC<ClientPartnershipProps> = ({
    title,
    description,
    image,
    points
}) => {
    
  return (
    <section className="w-full py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>

          {/* Blue underline */}
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-700 rounded mb-6"></div>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            {description}
          </p>

          <ul className="space-y-3 text-gray-800 dark:text-gray-300">
            {points?.map((point) => (
              <li key={point.id} className="flex items-start">
                <span className="text-blue-600 mr-2">◆</span>
                {point.name}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src={image}
              alt="Partnership"
              width={500}
              height={350}
              className="object-cover rounded-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnershipSection;

"use client";

import { ClientsProps } from "@/interfaces/page";
import { motion } from "framer-motion";
import Image from "next/image";

const ClientsSection:React.FC<ClientsProps> = ({
    introText,
    introSubtitle,
    clientItems
}) => {
    
  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold ">{introText}</h2>
          <p className="text-gray-500 dark:text-gray-300 mt-2">
            {introSubtitle}
          </p>
        </motion.div>

        {/* Marquee with Fade Edges */}
        <div className="relative overflow-hidden mt-12 ">
          {/* Fade overlays (left & right) */}
          <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-gray-50 dark:from-slate-950 to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-gray-50 dark:from-slate-950 to-transparent pointer-events-none z-10"></div>

          {/* Scrolling row */}
          <motion.div
            className="flex gap-12"
            initial={{ x: 0 }}
            animate={{ x: "-50%" }} // move half the total width (since we duplicated)
            transition={{
              ease: "linear",
              duration: 15,
              repeat: Infinity,
            }}
          >
            {/* Repeat logos twice for seamless loop */}
            {[...clientItems, ...clientItems].map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[200px] h-40 rounded-2xl bg-white shadow-md p-6"
              >
                <Image
                  src={process.env.NEXT_PUBLIC_API_URL + client.image.url}
                  alt={client.id}
                  width={150}
                  height={150}
                  className="object-contain max-h-24"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;

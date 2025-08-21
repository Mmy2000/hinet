// app/components/Services.tsx
"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";
import { Service } from "@/interfaces/page";

const Services: React.FC<{ services: Service[] }> = ({
  services = [],
}: {
  services: Service[];
}) => {
  
  return (
    <section className="container mx-auto py-16 px-6">
      <motion.h2
        className="text-3xl font-bold text-center mb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Services
      </motion.h2>
      <p className="dark:text-gray-300 text-center mb-12">
        Discover the services we provide
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <Card className=" border-none shadow-none transition duration-300 h-full text-blue-800 bg-blue-50 dark:bg-zinc-900 ">
              <CardContent className="px-6 py-4 flex flex-col h-full">
                <div className="flex items-start gap-4">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_URL}${service.icon?.url}`}
                    alt={service.title}
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                  <div>
                    <h3 className="text-lg font-bold mb-2 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="dark:text-gray-300 text-sm mb-4">
                      {service.description}
                    </p>
                    <Link
                      href='/services'
                      className="text-blue-800 font-semibold inline-flex items-center gap-1"
                    >
                      <Button className="text-blue-800" variant={"link"}>
                        Read More →
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
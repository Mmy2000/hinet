"use client";

import { BlogDetailsProps } from "@/interfaces/page";
import Image from "next/image";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import MaxWidthWrapper from "./MaxWidthWrapper";

const BlogDetails: React.FC<BlogDetailsProps> = ({
  title,
  description,
  image,
  cover_description,
  createdAt,
}) => {

  const router = useRouter();
    
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image src={image} alt={title} fill priority className="object-cover" />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/20" />

        {/* Title + Date */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white max-w-3xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-bold mb-4 leading-tight"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-sm sm:text-base text-gray-200"
          >
            {new Date(createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </motion.p>
        </div>
      </div>
      <MaxWidthWrapper>
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center">
          <Button onClick={() => router.back()} className="">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
        </div>
        {/* Blog Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className=" px-6 py-12"
        >
          {/* Cover description */}
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed italic border-l-4 border-primary pl-4">
            {cover_description}
          </p>

          {/* Main description */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <ReactMarkdown>{description}</ReactMarkdown>
          </div>
        </motion.div>
      </MaxWidthWrapper>
    </div>
  );
};

export default BlogDetails;

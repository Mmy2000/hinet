"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { ProjectDetailsProps } from "@/interfaces/page";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
      const router = useRouter();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src={
            project.image?.url
              ? process.env.NEXT_PUBLIC_API_URL + project.image.url
              : "/placeholder.png"
          }
          alt={project.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/20" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white max-w-3xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-bold leading-tight"
          >
            {project.title}
          </motion.h1>
          {project.project_category && (
            <Badge className=" uppercase bg-blue-600 text-white px-3 py-1 rounded-md text-xs font-medium">
              {project.project_category.name}
            </Badge>
          )}
        </div>
      </div>

      {/* Details Section */}
      <MaxWidthWrapper className="my-12">
        <div className=" py-6 flex items-center">
          <Button onClick={() => router.back()} className="">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
        </div>
        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-8">
          <p>
            Published:{" "}
            {new Date(project.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p>
            Last Updated:{" "}
            {new Date(project.updatedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        {/* Cover Description */}
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          {project.coverDescription}
        </p>

        {/* Full Description */}
        {project.description && (
          <div className="prose prose-gray max-w-none dark:prose-invert mb-8">
            {project.description.split("\n").map((line, idx) => (
              <p key={idx} className="leading-relaxed">
                {line}
              </p>
            ))}
          </div>
        )}

        {/* Website Link */}
        {project.website_url && (
          <Button size={"lg"}>
            <Link
              href={project.website_url}
              target="_blank"
            >
              Visit Website →
            </Link>
          </Button>
        )}
      </MaxWidthWrapper>
    </div>
  );
};

export default ProjectDetails;

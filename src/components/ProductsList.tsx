"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProductsListProps } from "@/interfaces/page";
import MaxWidthWrapper from "./MaxWidthWrapper";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Layers, Folder } from "lucide-react";

const ProductsList: React.FC<ProductsListProps> = ({ projects }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // extract unique categories
  const categories = Array.from(
    new Set(
      projects
        .map((p) => p.project_category?.name)
        .filter((name): name is string => !!name)
    )
  );

  // filter projects
  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.project_category?.name === selectedCategory);

  return (
    <MaxWidthWrapper className="my-16">
      {/* Filter Dropdown */}
      <div className="flex items-center gap-4 mb-6">
        <Select
          value={selectedCategory}
          onValueChange={(val) => setSelectedCategory(val)}
        >
          <SelectTrigger className="w-[220px] rounded-lg border shadow-sm px-4 py-2 text-sm transition">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent className="rounded-xl shadow-lg borde">
            <SelectItem
              value="all"
              className="flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer"
            >
              <Layers className="w-4 h-4" />
              All Categories
            </SelectItem>
            {categories.map((cat) => (
              <SelectItem
                key={cat}
                value={cat}
                className="flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer"
              >
                <Folder className="w-4 h-4" />
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <Card
            key={project.id}
            className="group rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <CardHeader className="p-0">
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={
                    process.env.NEXT_PUBLIC_API_URL + project.image?.url ||
                    "/placeholder.png"
                  }
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <CardTitle className="px-4 pt-4 text-lg font-semibold flex items-center gap-2">
                {project.website_logo && (
                  <Image
                    src={
                      process.env.NEXT_PUBLIC_API_URL + project.website_logo.url
                    }
                    alt="logo"
                    width={28}
                    height={28}
                    className="rounded"
                  />
                )}
                <Link href={`/products/${project.documentId}`}>
                  {project.title}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-3">
                {project.coverDescription}
              </p>
              <div className="flex items-center justify-between mt-4">
                {project.project_category && (
                  <Badge className="uppercase bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-md text-xs font-medium">
                    {project.project_category.name}
                  </Badge>
                )}
                <Link
                  href={project.website_url}
                  target="_blank"
                  className="text-primary font-medium hover:underline text-sm"
                >
                  Visit Website →
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default ProductsList;

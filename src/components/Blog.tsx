"use client";

import { BlogDataProps } from "@/interfaces/page";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Blog: React.FC<BlogDataProps> = ({
  title,
  cover_description,
  image,
  createdAt,
  id
}) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      <Card className="group w-full max-w-md overflow-hidden rounded-2xl border border-border/50 bg-card shadow-sm hover:shadow-xl transition-all duration-300">
        {/* Image Section */}
        <div className="relative h-56 w-full overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="h-full w-full"
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover rounded-t-2xl transition-transform duration-500"
              priority
            />
          </motion.div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

          {/* Optional badge */}
          <span className="absolute top-3 left-3 rounded-full bg-primary px-3 py-1 text-xs font-medium text-white dark:text-black shadow-sm">
            Blog
          </span>
        </div>

        {/* Content */}
        <CardHeader className="">
          <h3 className="text-xl font-semibold tracking-tight line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="mt-1 text-xs text-muted-foreground">
            {new Date(createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
        </CardHeader>

        <CardContent className="px-5 pb-5">
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {cover_description}
          </p>

          {/* Read more link */}
          <Link href={`blog/${id}`}>
            <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary hover:underline cursor-pointer">
              Read more <ArrowRight className="h-4 w-4" />
            </div>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Blog;

"use client";

import {
  containerVariants,
  itemVariants,
  listContainerVariants,
} from "@/lib/variants";
import { motion } from "framer-motion";
import { BlogCard } from "./blog-card";

const blogPosts = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nunc molestie dignissim tellus eget lorem. Nunc molestie dignissim tellus eget lorem. Nunc molestie dignissim tellus eget lorem. Nunc molestie dignissim tellus eget lorem. Nunc molestie dignissim tellus eget lorem.",
    slug: "lorem-ipsum-1",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectetur",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nunc molestie dignissim tellus eget lorem. Nunc molestie dignissim tellus eget lorem. Nunc molestie dignissim tellus eget lorem. Nunc molestie dignissim tellus eget lorem. Nunc molestie dignissim tellus eget lorem.",
    slug: "lorem-ipsum-2",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet consectetur",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nunc molestie dignissim tellus eget lorem. Nunc molestie dignissim tellus eget lorem. Nunc molestie dignissim tellus eget lorem. Nunc molestie dignissim tellus eget lorem. Nunc molestie dignissim tellus eget lorem.",
    slug: "lorem-ipsum-3",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet consectetur",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nunc molestie dignissim tellus eget lorem. Nunc molestie dignissim tellus eget lorem. Nunc molestie dignissim tellus eget lorem. Nunc molestie dignissim tellus eget lorem. Nunc molestie dignissim tellus eget lorem.",
    slug: "lorem-ipsum-4",
  },
];

function Blogs() {
  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <main className="container mx-auto p-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          className="space-y-12"
        >
          <motion.p
            variants={itemVariants}
            className="text-blue-600 dark:text-blue-400 font-medium text-sm lg:text-base"
          >
            Lorem ipsum dolor sit amet
          </motion.p>
          {/* Hero Section */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight"
          >
            LOREM IPSUM DOLOR SIT
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-muted-foreground text-lg md:text-xl max-w-3xl  leading-relaxed"
          >
            Lorem ipsum dolor sit amet consectetur. Nunc molestie dignissim
            tellus eget lorem. Nunc molestie dignissim tellus eget lorem. Nunc
            molestie dignissim tellus eget lorem. Nunc molestie dignissim tellus
            eget lorem. Nunc molestie dignissim tellus eget lorem.
          </motion.p>

          {/* Blog Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-4xl mx-auto pb-8 md:pb-12 lg:pb-16"
            variants={listContainerVariants}
          >
            {blogPosts.map((post, index) => (
              <BlogCard
                key={post.id}
                title={post.title}
                description={post.description}
                image={`/blog-${index + 1}.png`}
              />
            ))}
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}

export default Blogs;

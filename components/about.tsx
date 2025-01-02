"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Leaf } from "lucide-react";
import { FeatureCard } from "./shared/featuredCard";
import { aboutFeaturedCard } from "@/lib";

export function AboutSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
      className="mb-16 rounded-xl border-none bg-gradient-to-b from-green-100 to-green-50/30 py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto w-[70%]"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2"
        >
          <div className="space-y-6">
            <h2 className="relative w-fit font-serif text-3xl font-bold text-green-800 md:text-5xl">
              Our Story
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="absolute bottom-0 left-0 h-1 bg-green-500"
              />
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Meechai Farm has been a labor of love for over three generations.
              Founded in 1952, we&apos;ve been committed to growing the finest
              organic produce and the most beautiful flowers in the region.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Our passion for sustainable farming practices and our deep respect
              for nature guide everything we do. From our fields to your table,
              we ensure quality at every step.
            </p>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center space-x-4 rounded-lg bg-green-100 p-4 text-green-700"
            >
              <Leaf className="size-8" />
              <span className="text-lg font-medium">
                100% Organic Since 1952
              </span>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative h-96 overflow-hidden rounded-lg shadow-xl"
          >
            <Image
              src="https://images.pexels.com/photos/15682917/pexels-photo-15682917/free-photo-of-woman-holding-a-freshly-picked-strawberry.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Meechai Farm fields"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent" />
            <div className="absolute inset-x-4 bottom-4 text-white">
              <h3 className="mb-2 font-serif text-2xl font-bold">
                Our Beautiful Fields
              </h3>
              <p className="text-sm">Where nature and nurture come together</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {aboutFeaturedCard.map((items, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <FeatureCard
                  icon={items.icon}
                  title={items.title}
                  description={items.description}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

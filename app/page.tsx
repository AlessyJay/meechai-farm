"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Carrot, Lettuce, Tomato } from "@/components/vegetables";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen py-8">
      {/* Decorative vegetables */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* <Carrot />
        <Lettuce />
        <Tomato /> */}
        <div className="absolute right-0 top-20">
          <Carrot />
        </div>
        <div className="absolute left-20 bottom-20">
          <Lettuce />
        </div>
        <div className="absolute right-40 bottom-40">
          <Tomato />
        </div>
      </div>

      <div className="relative flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-green-900">
            Welcome to Meechai Farm
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground sm:text-xl font-light">
            Discover our beautiful collection of plants and flowers. Transform
            your space with nature&apos;s finest selections.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Shop Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Fresh vegetables"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl md:translate-y-8">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Beautiful plants"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl lg:translate-y-16">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Colorful flowers"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

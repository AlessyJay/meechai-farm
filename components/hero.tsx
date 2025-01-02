"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Carrot, Lettuce, Tomato } from "@/components/vegetables";

const Hero = () => {
  return (
    <div className="relative flex min-h-screen flex-col py-8">
      {/* Decorative vegetables */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-16 top-36">
          <Carrot />
        </div>
        <div className="absolute bottom-20 left-20">
          <Lettuce />
        </div>
        <div className="absolute bottom-40 right-40">
          <Tomato />
        </div>
      </div>

      <div className="relative flex flex-1 flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col items-center justify-center space-y-4 text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-green-900 sm:text-5xl md:text-6xl lg:text-7xl">
            Welcome to Meechai Farm
          </h1>
          <p className="mx-auto max-w-[700px] text-lg font-light text-muted-foreground sm:text-xl">
            Discover our beautiful collection of plants and flowers. Transform
            your space with nature&apos;s finest selections.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Shop Now
              <ArrowRight className="ml-2 size-4" />
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
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-xl">
            <Image
              src="https://images.pexels.com/photos/5231143/pexels-photo-5231143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Fresh vegetables"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-xl md:translate-y-8">
            <Image
              src="https://images.pexels.com/photos/15672283/pexels-photo-15672283/free-photo-of-happy-girl-with-strawberries.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Beautiful plants"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-xl lg:translate-y-16">
            <Image
              src="https://images.pexels.com/photos/28903089/pexels-photo-28903089/free-photo-of-smiling-farmer-with-fresh-organic-mangoes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Colorful flowers"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

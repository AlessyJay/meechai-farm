"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { products } from "@/lib";

const ProductCard = ({
  name,
  price,
  image,
}: {
  name: string;
  price: string;
  image: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Card className="overflow-hidden" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="font-bold text-green-600">{price}</p>
        </CardContent>
        <CardFooter className="p-4">
          <Button className="w-full">
            <ShoppingCart className="mr-2 size-4" /> Add to Cart
          </Button>
        </CardFooter>
      </motion.div>
    </Card>
  );
};

export function ShoppingSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-green-50/30 to-green-50 py-16"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/watercolor-texture.png')] bg-cover mix-blend-multiply"></div>
      </div>
      <div className="relative z-10 mx-auto w-[70%]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-serif text-3xl font-bold text-green-800 md:text-4xl">
            Shop Our Products
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Explore our selection of fresh, organic produce and beautiful
            flowers. Bring the best of Meechai Farm directly to your home.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            View All Products
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

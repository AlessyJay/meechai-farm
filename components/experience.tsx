"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Calendar, Users, Utensils, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ExperienceCard = ({
  icon: Icon,
  title,
  description,
  date,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  title: string;
  description: string;
  date: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Card className="overflow-hidden" ref={ref}>
      <CardContent className="p-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start"
        >
          <div className="mb-4 rounded-full bg-green-100 p-3">
            <Icon className="size-6 text-green-600" />
          </div>
          <h3 className="mb-2 font-serif text-xl font-semibold text-green-800">
            {title}
          </h3>
          <p className="mb-4 text-gray-600">{description}</p>
          <div className="flex items-center text-green-600">
            <Calendar className="mr-2 size-4" />
            <span className="text-sm">{date}</span>
          </div>
        </motion.div>
      </CardContent>
    </Card>
  );
};

export function ExperienceSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-16">
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
            Experience Meechai Farm
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Immerse yourself in the world of sustainable farming. Join our
            workshops, savor farm-to-table dinners, and learn about eco-friendly
            practices.
          </p>
        </motion.div>

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ExperienceCard
              icon={Users}
              title="Family Farm Tour"
              description="Explore our fields, meet our animals, and learn about sustainable farming practices."
              date="Every Saturday, 10 AM"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ExperienceCard
              icon={Utensils}
              title="Farm-to-Table Dinner"
              description="Enjoy a gourmet meal prepared with ingredients harvested from our farm on the same day."
              date="Last Friday of each month, 7 PM"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <ExperienceCard
              icon={BookOpen}
              title="Sustainable Gardening Workshop"
              description="Learn techniques for growing your own organic vegetables and herbs at home."
              date="First Sunday of each month, 2 PM"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <ExperienceCard
              icon={Users}
              title="Kids' Eco-Adventure Camp"
              description="A fun-filled day camp where children learn about nature, farming, and environmental conservation."
              date="Summer break, Mon-Fri, 9 AM - 3 PM"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="relative overflow-hidden rounded-xl shadow-xl"
        >
          <Image
            src="https://images.pexels.com/photos/7245251/pexels-photo-7245251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Farm-to-table experience"
            width={1200}
            height={400}
            className="w-full object-contain"
          />
          <div className="absolute inset-0 flex items-center bg-gradient-to-r from-green-900/70 to-transparent">
            <div className="max-w-lg p-8 text-white">
              <h3 className="mb-4 font-serif text-2xl font-bold md:text-3xl">
                Experience the Farm-to-Table Journey
              </h3>
              <p className="mb-6">
                Join us for an unforgettable dining experience where you&apos;ll
                see firsthand how our fresh, organic produce transforms into
                delicious, gourmet meals.
              </p>
              <Button
                size="lg"
                className="bg-white text-green-800 hover:bg-green-100"
              >
                Book Your Experience
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

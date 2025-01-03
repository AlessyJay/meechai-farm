"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Star, Heart, Sprout } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialCard = ({
  quote,
  author,
  image,
}: {
  quote: string;
  author: string;
  image: string;
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
          className="flex flex-col items-center text-center"
        >
          <div className="relative mb-4 size-20 overflow-hidden rounded-full">
            <Image src={image} alt={author} fill className="object-cover" />
          </div>
          <p className="mb-4 italic text-gray-600">`{quote}`</p>
          <p className="font-semibold text-green-800">{author}</p>
          <div className="mt-2 flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="size-4 fill-current text-yellow-400" />
            ))}
          </div>
        </motion.div>
      </CardContent>
    </Card>
  );
};

const ImpactCard = ({
  icon: Icon,
  title,
  description,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  title: string;
  description: string;
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
          className="flex flex-col items-center text-center"
        >
          <div className="mb-4 rounded-full bg-green-100 p-3">
            <Icon className="size-6 text-green-600" />
          </div>
          <h3 className="mb-2 font-serif text-xl font-semibold text-green-800">
            {title}
          </h3>
          <p className="text-gray-600">{description}</p>
        </motion.div>
      </CardContent>
    </Card>
  );
};

export function CommunityImpactSection() {
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
            Our Community Impact
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            At Meechai Farm, we&apos;re more than just a farm. We&apos;re a
            vital part of the community, committed to sustainable practices and
            positive change.
          </p>
        </motion.div>

        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <TestimonialCard
              quote="Meechai Farm's produce has transformed our family's meals. The freshness and flavor are unmatched!"
              author="Sarah Johnson"
              image="https://images.pexels.com/photos/30004325/pexels-photo-30004325/free-photo-of-professional-business-portrait-in-greenville.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <TestimonialCard
              quote="The farm-to-table dinner was an eye-opening experience. It's amazing to see where our food comes from!"
              author="Michael Chen"
              image="https://images.pexels.com/photos/30021803/pexels-photo-30021803/free-photo-of-smiling-woman-on-river-thames-ferry-in-london.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <TestimonialCard
              quote="As a local restaurant owner, partnering with Meechai Farm has elevated our menu and delighted our customers."
              author="Emma Rodriguez"
              image="https://images.pexels.com/photos/30021802/pexels-photo-30021802/free-photo-of-casual-urban-portrait-in-london-setting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16 rounded-xl bg-green-100 p-8"
        >
          <h3 className="mb-4 text-center font-serif text-2xl font-bold text-green-800">
            Our Impact in Numbers
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-green-600">5,000+</span>
              <span className="text-gray-600">Families Fed Weekly</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-green-600">100%</span>
              <span className="text-gray-600">Organic Practices</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-green-600">50+</span>
              <span className="text-gray-600">Local Jobs Created</span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <ImpactCard
              icon={Heart}
              title="Community Support"
              description="We donate fresh produce to local food banks and support community events."
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <ImpactCard
              icon={Sprout}
              title="Environmental Stewardship"
              description="Our sustainable farming practices help preserve local ecosystems and biodiversity."
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <ImpactCard
              icon={Star}
              title="Education Initiatives"
              description="We offer internships and workshops to educate the next generation of farmers."
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

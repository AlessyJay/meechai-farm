"use client";

import React from "react";
import { Card, CardContent } from "../ui/card";
import { motion } from "framer-motion";

export const FeatureCard = ({
  icon: Icon,
  title,
  description,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  title: string;
  description: string;
}) => (
  <Card className="overflow-hidden">
    <CardContent className="p-6">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
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

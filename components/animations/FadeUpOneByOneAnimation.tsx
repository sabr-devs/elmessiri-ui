"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRef } from "react";

const FadeUpOneByOneAnimation = ({
  children,
  className,
  i,
}: {
  children: React.ReactNode;
  className: string;
  i: number;
}) => {
  const ref = useRef(null);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeUpOneByOneAnimation;

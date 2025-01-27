"use client";

import React from "react";
import { motion } from "framer-motion";

export const TransitionYBottomToTop = ({ children, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay: delay },
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export const TransitionXLeftToRight = ({ children, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, delay: delay },
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export const TransitionXRightToLeft = ({ children, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, delay: delay },
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export const ZoomIn = ({ children, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, delay: delay },
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

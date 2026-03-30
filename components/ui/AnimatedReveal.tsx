"use client";

import type { PropsWithChildren } from "react";

import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

type AnimatedRevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
}>;

export function AnimatedReveal({
  children,
  className,
  delay = 0
}: AnimatedRevealProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: reducedMotion ? 0 : 28 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-80px" }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
}


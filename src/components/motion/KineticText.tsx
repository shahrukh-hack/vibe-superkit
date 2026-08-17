import React from 'react';
import { motion } from 'framer-motion';
import { SPRING_PRESETS } from '@/lib/motion-presets';
import { cn } from '@/lib/utils';

export interface KineticTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const KineticText: React.FC<KineticTextProps> = ({
  text,
  className,
  delay = 0,
}) => {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: delay * i,
      },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(4px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: SPRING_PRESETS.gentle,
    },
  };

  return (
    <motion.span
      className={cn('inline-flex flex-wrap gap-x-2 overflow-hidden', className)}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span key={index} variants={child} className="inline-block">
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

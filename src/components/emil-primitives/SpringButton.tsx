import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { SPRING_PRESETS } from '@/lib/motion-presets';

export interface SpringButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const SpringButton: React.FC<SpringButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const baseStyles =
    'relative inline-flex items-center justify-center font-medium transition-colors select-none focus-visible:outline-none cursor-pointer rounded-lg';

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2 gap-2',
    lg: 'text-base px-6 py-3 gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-primary text-primary-foreground shadow-tactile-sm hover:opacity-95 active:opacity-90',
    secondary:
      'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    outline:
      'border border-border/80 bg-background/60 backdrop-blur-sm text-foreground hover:bg-muted/50 hover:border-foreground/30',
    ghost:
      'text-foreground/80 hover:text-foreground hover:bg-muted/60',
  };

  return (
    <motion.button
      whileHover={{ y: -1.5, transition: SPRING_PRESETS.snappy }}
      whileTap={{ scale: 0.96, y: 0, transition: SPRING_PRESETS.snappy }}
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
};

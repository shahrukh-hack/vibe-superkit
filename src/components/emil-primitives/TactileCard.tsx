import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { SPRING_PRESETS } from '@/lib/motion-presets';

export interface TactileCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  interactive?: boolean;
}

export const TactileCard: React.FC<TactileCardProps> = ({
  children,
  interactive = false,
  className,
  ...props
}) => {
  return (
    <motion.div
      whileHover={
        interactive
          ? {
              y: -4,
              boxShadow: '0 12px 28px -4px rgba(0, 0, 0, 0.12), inset 0 1px 0 0 rgba(255, 255, 255, 0.2)',
              transition: SPRING_PRESETS.snappy,
            }
          : undefined
      }
      className={cn(
        'relative rounded-xl border border-border/80 bg-card p-6 text-card-foreground shadow-tactile-sm transition-colors',
        interactive && 'cursor-pointer hover:border-foreground/20',
        className
      )}
      {...props}
    >
      {/* Subtle top edge specular highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent rounded-t-xl" />
      {children}
    </motion.div>
  );
};

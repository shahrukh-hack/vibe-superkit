import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface MarqueeTickerProps {
  items: string[];
  speed?: number;
  className?: string;
}

export const MarqueeTicker: React.FC<MarqueeTickerProps> = ({
  items,
  speed = 25,
  className,
}) => {
  return (
    <div
      className={cn(
        'relative flex w-full overflow-hidden border-y border-border/70 bg-card/50 py-3 backdrop-blur-sm select-none',
        className
      )}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />

      <motion.div
        className="flex shrink-0 items-center gap-8 pr-8"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          ease: 'linear',
          duration: speed,
          repeat: Infinity,
        }}
      >
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <span className="text-xs font-mono tracking-widest text-muted-foreground uppercase">
              {item}
            </span>
            <span className="text-xs text-primary/60 font-bold">/</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

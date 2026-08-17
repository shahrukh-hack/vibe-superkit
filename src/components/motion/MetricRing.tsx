import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { SPRING_PRESETS } from '@/lib/motion-presets';

export interface MetricRingProps {
  percentage: number;
  label: string;
  sublabel?: string;
  size?: number;
  strokeWidth?: number;
  color?: string;
  className?: string;
}

export const MetricRing: React.FC<MetricRingProps> = ({
  percentage = 97,
  label = 'AST Token Reduction',
  sublabel = 'vs Raw File Dumps',
  size = 120,
  strokeWidth = 10,
  color = 'stroke-primary',
  className,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-5 text-center shadow-xs space-y-3',
        className
      )}
    >
      <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          {/* Background Track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="transparent"
            className="text-muted/60"
          />
          {/* Animated Indicator */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ ...SPRING_PRESETS.gentle, duration: 1.5 }}
            strokeLinecap="round"
            className={cn('transition-all', color)}
          />
        </svg>

        {/* Center Percentage */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-mono text-xl font-bold text-foreground">
            {percentage}%
          </span>
        </div>
      </div>

      <div>
        <h4 className="text-xs font-bold text-foreground font-sans">{label}</h4>
        {sublabel && <p className="text-[10px] font-mono text-muted-foreground">{sublabel}</p>}
      </div>
    </div>
  );
};

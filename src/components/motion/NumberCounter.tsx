import React, { useState, useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { Activity, Sparkles } from 'lucide-react';

interface Props {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

export const NumberCounter: React.FC<Props> = ({ value, label, prefix = '', suffix = '' }) => {
  const springValue = useSpring(0, { stiffness: 100, damping: 20 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    springValue.set(value);
  }, [value, springValue]);

  useEffect(() => {
    return springValue.on('change', (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <div className="rounded-2xl border border-border bg-card p-5 space-y-2 shadow-sm text-center">
      <span className="text-[11px] font-mono uppercase text-muted-foreground font-semibold">
        {label}
      </span>
      <div className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
        {prefix}{displayValue.toLocaleString()}{suffix}
      </div>
    </div>
  );
};

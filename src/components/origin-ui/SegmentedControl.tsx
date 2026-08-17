import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { SPRING_PRESETS } from '@/lib/motion-presets';

export interface SegmentOption<T extends string = string> {
  value: T;
  label: string;
  icon?: React.ReactNode;
}

export interface SegmentedControlProps<T extends string = string> {
  options?: SegmentOption<T>[];
  value?: T;
  onChange?: (value: T) => void;
  className?: string;
}

const DEFAULT_OPTIONS: SegmentOption<string>[] = [
  { value: 'preview', label: 'Live Preview' },
  { value: 'code', label: 'React Code' },
  { value: 'tokens', label: 'Design Tokens' },
];

export function SegmentedControl<T extends string = string>({
  options = DEFAULT_OPTIONS as SegmentOption<T>[],
  value,
  onChange,
  className,
}: SegmentedControlProps<T>) {
  const [internalValue, setInternalValue] = useState<T>(value || options[0]?.value || ('' as T));
  const currentValue = value !== undefined ? value : internalValue;

  const handleSelect = (val: T) => {
    if (onChange) {
      onChange(val);
    } else {
      setInternalValue(val);
    }
  };

  return (
    <div
      className={cn(
        'inline-flex items-center rounded-lg border border-border/80 bg-muted/40 p-1 backdrop-blur-sm',
        className
      )}
    >
      {options.map((option) => {
        const isSelected = option.value === currentValue;
        return (
          <button
            key={option.value}
            onClick={() => handleSelect(option.value)}
            className={cn(
              'relative flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors select-none cursor-pointer',
              isSelected
                ? 'text-foreground font-semibold'
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            {isSelected && (
              <motion.div
                layoutId="segmented-active-pill"
                className="absolute inset-0 rounded-md bg-card shadow-tactile-sm border border-border/60"
                transition={SPRING_PRESETS.snappy}
              />
            )}
            <span className="relative z-10 flex items-center gap-1.5">
              {option.icon}
              {option.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

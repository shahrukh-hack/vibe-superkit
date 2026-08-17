import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { SPRING_PRESETS } from '@/lib/motion-presets';

export interface MagneticHoverProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}

export const MagneticHover: React.FC<MagneticHoverProps> = ({
  children,
  strength = 0.25,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * strength, y: middleY * strength });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={SPRING_PRESETS.snappy}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
};

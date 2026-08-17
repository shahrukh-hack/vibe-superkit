import { type Transition } from 'framer-motion';

/**
 * Emil Kowalski-inspired physics spring presets for Framer Motion.
 * Prioritizes natural physical weight, responsive bounce, and zero sluggishness.
 */
export const SPRING_PRESETS = {
  // Snappy, energetic spring for buttons, tabs, and small interactive toggles
  snappy: {
    type: 'spring',
    stiffness: 420,
    damping: 30,
    mass: 0.6,
  } as Transition,

  // Smooth, weighted spring for modals, drawers, and card expansions
  gentle: {
    type: 'spring',
    stiffness: 260,
    damping: 26,
    mass: 0.8,
  } as Transition,

  // Bouncy spring for playful badges, icons, and micro-reactions
  bouncy: {
    type: 'spring',
    stiffness: 500,
    damping: 22,
    mass: 0.5,
  } as Transition,

  // Stagger timing helpers for lists and grids
  staggerFast: 0.04,
  staggerNormal: 0.08,
};

export const FADE_UP_VARIANTS = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: SPRING_PRESETS.gentle,
  },
};

export const SCALE_SPRING_VARIANTS = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: SPRING_PRESETS.snappy,
  },
};

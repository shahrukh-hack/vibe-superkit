import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

const FAQS: AccordionItem[] = [
  {
    id: 'faq-1',
    title: 'How does Vibe Superkit eliminate AI Slop?',
    content: 'It injects strict negative design rules against purple on dark themes, un-tracked type, and icon-stuffed bento boxes, replacing them with curated typography pairings and tactile depth.',
  },
  {
    id: 'faq-2',
    title: 'What physics presets are included?',
    content: 'Pre-calibrated Framer Motion spring presets inspired by Emil Kowalski (Tactile, Gentle, Bouncy, and Snappy) ensuring zero robotic ease-in-out animations.',
  },
  {
    id: 'faq-3',
    title: 'Can I drop components into existing Next.js or React apps?',
    content: 'Yes! Every component is 100% modular and copy-pasteable. Just drop it into your existing components folder.',
  },
];

export const SpringAccordion: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('faq-1');

  return (
    <div className="rounded-2xl border border-border bg-card p-6 space-y-4 shadow-sm">
      <div className="flex items-center gap-2 text-xs font-mono text-primary uppercase font-bold">
        <Sparkles className="w-3.5 h-3.5" /> Fluid Spring Accordion
      </div>
      <h3 className="text-xl font-bold text-foreground">Interactive FAQ & Accordion Primitive</h3>

      <div className="space-y-2 pt-2">
        {FAQS.map((item) => {
          const isOpen = expandedId === item.id;
          return (
            <div
              key={item.id}
              className="rounded-xl border border-border/80 bg-muted/40 overflow-hidden transition-colors"
            >
              <button
                onClick={() => setExpandedId(isOpen ? null : item.id)}
                className="w-full p-4 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-foreground hover:text-primary transition-colors"
              >
                <span>{item.title}</span>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  >
                    <p className="px-4 pb-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {item.content}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};

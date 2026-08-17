import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Layers, Sparkles, Moon, Check, Zap } from 'lucide-react';

export type ThemeKey = 'stripe' | 'tailwind' | 'emerald' | 'midnight';

interface ThemeDefinition {
  id: ThemeKey;
  name: string;
  category: 'Enterprise SaaS' | 'Tailwind UI' | 'Fintech & Climate' | 'Dark Navy';
  palette: string[];
  description: string;
  icon: React.ReactNode;
}

const THEMES: ThemeDefinition[] = [
  {
    id: 'stripe',
    name: 'Stripe Enterprise',
    category: 'Enterprise SaaS',
    palette: ['#F6F9FC', '#635BFF', '#0A2540'],
    description: 'The iconic Stripe light canvas (#F6F9FC), deep navy ink (#0A2540), and signature blurple.',
    icon: <CreditCard className="w-4 h-4" />,
  },
  {
    id: 'tailwind',
    name: 'Tailwind UI Classic',
    category: 'Tailwind UI',
    palette: ['#F8FAFC', '#6366F1', '#0F172A'],
    description: 'Slate 900 typography, crisp pure white cards, and vibrant Indigo 500 accents.',
    icon: <Layers className="w-4 h-4" />,
  },
  {
    id: 'emerald',
    name: 'Stripe Climate & Growth',
    category: 'Fintech & Climate',
    palette: ['#F4FBF7', '#059669', '#064E3B'],
    description: 'Fresh mint canvas with forest navy typography and vibrant emerald action buttons.',
    icon: <Sparkles className="w-4 h-4" />,
  },
  {
    id: 'midnight',
    name: 'Stripe Midnight Navy',
    category: 'Dark Navy',
    palette: ['#0A0F1D', '#7C75FF', '#F8FAFC'],
    description: 'Deep rich navy dark mode with illuminated electric blurple border highlights.',
    icon: <Moon className="w-4 h-4" />,
  },
];

export const ThemeSwitcher: React.FC = () => {
  const [activeTheme, setActiveTheme] = useState<ThemeKey>('stripe');

  useEffect(() => {
    const root = document.documentElement;
    THEMES.forEach((t) => root.classList.remove(`theme-${t.id}`));
    root.classList.add(`theme-${activeTheme}`);
  }, [activeTheme]);

  return (
    <div className="rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-sm space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/60 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
          <h3 className="text-sm font-bold font-sans uppercase tracking-wider text-foreground">
            Enterprise Theme Engine (Stripe & Tailwind UI)
          </h3>
        </div>
        <span className="text-xs font-mono text-muted-foreground">
          Active: <strong className="text-primary font-bold">{THEMES.find((t) => t.id === activeTheme)?.name}</strong>
        </span>
      </div>

      {/* 4 Theme Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {THEMES.map((theme) => {
          const isSelected = activeTheme === theme.id;
          return (
            <motion.button
              key={theme.id}
              whileHover={{ y: -2 }}
              onClick={() => setActiveTheme(theme.id)}
              className={`p-4 rounded-xl border text-left flex flex-col justify-between gap-3 transition-all cursor-pointer ${
                isSelected
                  ? 'border-primary bg-primary/5 ring-1 ring-primary shadow-sm'
                  : 'border-border bg-background hover:bg-muted/40'
              }`}
            >
              <div className="flex items-start justify-between gap-2 w-full">
                <div className="flex items-center gap-2.5">
                  <span className={`p-2 rounded-lg ${isSelected ? 'bg-primary text-primary-foreground' : 'bg-muted text-foreground'}`}>
                    {theme.icon}
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-foreground leading-tight">{theme.name}</h4>
                    <span className="text-[10px] font-mono text-muted-foreground">{theme.category}</span>
                  </div>
                </div>

                {isSelected && (
                  <div className="w-4 h-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-[10px]">
                    <Check className="w-3 h-3" />
                  </div>
                )}
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                {theme.description}
              </p>

              {/* Color Swatch Dots */}
              <div className="flex items-center gap-1.5 pt-1">
                {theme.palette.map((color, i) => (
                  <span
                    key={i}
                    className="w-4 h-4 rounded-full border border-border shadow-xs"
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

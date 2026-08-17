import React from 'react';
import { motion } from 'framer-motion';
import { SpringButton } from '../emil-primitives/SpringButton';
import { MagneticHover } from '../emil-primitives/MagneticHover';
import { SPRING_PRESETS } from '@/lib/motion-presets';
import { ArrowUpRight, Compass, ShieldCheck, Sparkles, Layers, CheckCircle2, Zap } from 'lucide-react';

export const EditorialHero: React.FC = () => {
  return (
    <section className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-12">
      {/* Category Monogram / Section Index */}
      <div className="flex items-center gap-3 mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-bold">
          <Zap className="w-3.5 h-3.5" /> STRIPE & TAILWIND UI DESIGN ENGINE
        </div>
        <div className="h-px flex-1 bg-border/80" />
        <span className="font-mono text-[11px] text-muted-foreground">
          PRODUCTION GRADE
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Expressive Headline & Human Copy */}
        <div className="lg:col-span-7 space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-foreground font-bold tracking-tight leading-[1.1]">
            Build websites with{' '}
            <span className="text-primary">
              impeccable taste
            </span>
            , not robotic AI slop.
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
            A production-ready design engine bundling Stripe's iconic typography, Tailwind UI components,
            Emil Kowalski physics curves, and automated anti-slop rules for Antigravity, Cursor, and Claude.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <MagneticHover strength={0.2}>
              <SpringButton
                variant="primary"
                size="lg"
                onClick={() => {
                  const el = document.getElementById('interactive-lab');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Component Lab
                <ArrowUpRight className="w-4 h-4" />
              </SpringButton>
            </MagneticHover>

            <MagneticHover strength={0.15}>
              <SpringButton
                variant="outline"
                size="lg"
                onClick={() => {
                  const el = document.getElementById('interactive-demos');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Compass className="w-4 h-4" />
                View Enterprise Demos
              </SpringButton>
            </MagneticHover>
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-mono text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Zero AI Purple Slop</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Stripe Navy & Indigo</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Emil Spring Physics</span>
            </div>
          </div>
        </div>

        {/* Right Column: Tactile Live Interactive Preview Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={SPRING_PRESETS.gentle}
          className="lg:col-span-5 rounded-2xl border border-border bg-card p-6 shadow-md relative overflow-hidden"
        >
          {/* Card Topbar */}
          <div className="flex items-center justify-between border-b border-border/60 pb-4 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            </div>
            <span className="font-mono text-xs text-muted-foreground">
              vibe-design-system.ts
            </span>
          </div>

          {/* Micro Code / Metric View */}
          <div className="space-y-4">
            <div className="rounded-xl bg-muted/40 p-4 border border-border font-mono text-xs space-y-1.5">
              <p className="text-muted-foreground">// Stripe & Tailwind UI Design Tokens</p>
              <p className="text-primary font-bold">export const vibeConfig = {`{`}</p>
              <p className="pl-4 text-foreground">theme: "stripe-enterprise",</p>
              <p className="pl-4 text-foreground">physics: "emil-kowalski-spring",</p>
              <p className="pl-4 text-emerald-600 font-bold">antiSlopShield: true,</p>
              <p className="pl-4 text-primary">typography: "Plus Jakarta Sans"</p>
              <p className="text-primary font-bold">{`}`};</p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="rounded-xl border border-border bg-background p-3.5">
                <span className="text-[10px] font-mono uppercase text-muted-foreground font-bold">
                  AI Slop Score
                </span>
                <p className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">
                  0.00%
                </p>
              </div>
              <div className="rounded-xl border border-border bg-background p-3.5">
                <span className="text-[10px] font-mono uppercase text-muted-foreground font-bold">
                  Enterprise Polish
                </span>
                <p className="text-xl font-bold text-primary mt-0.5">
                  100 / 100
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

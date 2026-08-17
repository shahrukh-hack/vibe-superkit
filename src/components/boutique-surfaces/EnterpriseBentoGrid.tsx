import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Database, Zap, Lock, Sparkles, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SPRING_PRESETS } from '@/lib/motion-presets';

export const EnterpriseBentoGrid: React.FC = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 border-b border-border/60 pb-4">
        <div>
          <span className="font-mono text-xs text-primary font-bold tracking-wider uppercase">
            [ ARCHITECTURE MATRIX ]
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-1 tracking-tight">
            Engineered for high-throughput teams.
          </h2>
        </div>
        <p className="text-xs font-mono text-muted-foreground max-w-xs">
          Zero bloat, zero AI tropes. Mathematical spatial balance across all viewports.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Card 1: Large Span (7 Cols) */}
        <motion.div
          whileHover={{ y: -2 }}
          transition={SPRING_PRESETS.tactile}
          className="md:col-span-7 rounded-2xl border border-border bg-card p-6 shadow-xs flex flex-col justify-between"
        >
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-primary/10 text-primary font-mono text-xs font-bold">
              <Zap className="w-3.5 h-3.5" /> 97% Token Optimization
            </div>
            <h3 className="text-lg font-bold text-foreground">
              AST Progressive Disclosure Architecture
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-md">
              Extracts high-level signatures, method contracts, and dependencies without dumping raw 10,000-line files into LLM context windows.
            </p>
          </div>

          <div className="mt-6 rounded-xl bg-muted/40 p-4 border border-border/80 font-mono text-[11px] space-y-1 text-foreground/90">
            <p className="text-muted-foreground">// Symbol Map extracted in 4ms</p>
            <p><span className="text-primary font-bold">interface</span> VibeRuntimeContract {`{`}</p>
            <p className="pl-4">tokens: StripeTokens;</p>
            <p className="pl-4">springs: EmilKowalskiPhysics;</p>
            <p>{`}`}</p>
          </div>
        </motion.div>

        {/* Card 2: Small Span (5 Cols) */}
        <motion.div
          whileHover={{ y: -2 }}
          transition={SPRING_PRESETS.tactile}
          className="md:col-span-5 rounded-2xl border border-border bg-card p-6 shadow-xs flex flex-col justify-between"
        >
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold">
              <ShieldCheck className="w-3.5 h-3.5" /> OWASP Top 10 Guard
            </div>
            <h3 className="text-lg font-bold text-foreground">
              Continuous Secret Leak Sentinel
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Automated regex and AST scanning catching unescaped inputs, SQL injections, and exposed API keys before deployment.
            </p>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4 font-mono text-xs">
            <span className="text-muted-foreground">Status: Active Sentinel</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">0 Vulnerabilities</span>
          </div>
        </motion.div>

        {/* Card 3: Small Span (4 Cols) */}
        <motion.div
          whileHover={{ y: -2 }}
          transition={SPRING_PRESETS.tactile}
          className="md:col-span-4 rounded-2xl border border-border bg-card p-6 shadow-xs flex flex-col justify-between"
        >
          <div className="space-y-2">
            <Cpu className="w-6 h-6 text-primary mb-2" />
            <h3 className="text-sm font-bold text-foreground">Emil Kowalski Physics</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Stiffness: 420, Damping: 30. Physics-based deceleration mimicking tactile hardware switches.
            </p>
          </div>
        </motion.div>

        {/* Card 4: Mid Span (4 Cols) */}
        <motion.div
          whileHover={{ y: -2 }}
          transition={SPRING_PRESETS.tactile}
          className="md:col-span-4 rounded-2xl border border-border bg-card p-6 shadow-xs flex flex-col justify-between"
        >
          <div className="space-y-2">
            <Database className="w-6 h-6 text-primary mb-2" />
            <h3 className="text-sm font-bold text-foreground">Zero Downtime Migrations</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Expand-and-contract schema verification for PostgreSQL and SQLite WAL tables.
            </p>
          </div>
        </motion.div>

        {/* Card 5: Mid Span (4 Cols) */}
        <motion.div
          whileHover={{ y: -2 }}
          transition={SPRING_PRESETS.tactile}
          className="md:col-span-4 rounded-2xl border border-border bg-card p-6 shadow-xs flex flex-col justify-between"
        >
          <div className="space-y-2">
            <Lock className="w-6 h-6 text-primary mb-2" />
            <h3 className="text-sm font-bold text-foreground">Universal Cross-Agent Sync</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Handoff contracts between Antigravity, Cursor, and Claude Code without losing context.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

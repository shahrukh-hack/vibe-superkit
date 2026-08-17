import React from 'react';
import { TactileCard } from '../emil-primitives/TactileCard';
import { Sparkles, Cpu, Sliders, Shield, Zap, Eye } from 'lucide-react';

export const BespokeFeatureGrid: React.FC = () => {
  const features = [
    {
      icon: <Sparkles className="w-5 h-5 text-primary" />,
      tag: '01 / MOTION',
      title: 'Emil Kowalski Spring Physics',
      description:
        'Zero stiff linear transitions. Every button, drawer, and modal reacts with organic mass, velocity, and spring bounce.',
    },
    {
      icon: <Sliders className="w-5 h-5 text-primary" />,
      tag: '02 / INPUTS',
      title: 'Origin UI Precision Controls',
      description:
        'Battle-tested input adornments, shortcut badges, password visibility toggles, and animated segment pills.',
    },
    {
      icon: <Eye className="w-5 h-5 text-primary" />,
      tag: '03 / TYPOGRAPHY',
      title: 'Curated Font Pairings',
      description:
        'Optical tracking and leading presets pairing expressive editorial serifs with crisp, hyper-legible geometric body copy.',
    },
    {
      icon: <Shield className="w-5 h-5 text-primary" />,
      tag: '04 / GUARDRAILS',
      title: 'Anti-AI Slop Shield',
      description:
        'Automated .cursorrules and Antigravity skills that strictly forbid neon purple glows, generic bento grids, and buzzwords.',
    },
    {
      icon: <Cpu className="w-5 h-5 text-primary" />,
      tag: '05 / AI NATIVE',
      title: '21st.dev & MCP Ready',
      description:
        'Directly compatible with Claude Code, Cursor, and Antigravity so you can prompt and build without friction.',
    },
    {
      icon: <Zap className="w-5 h-5 text-primary" />,
      tag: '06 / PERFORMANCE',
      title: 'Lenis Momentum Scroll',
      description:
        'Butter-smooth inertia scrolling engine built-in to give your web pages that Awwwards-winning studio feel.',
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
        <div>
          <span className="font-mono text-xs text-primary font-semibold tracking-wider uppercase">
            [ 02 / SYSTEM CAPABILITIES ]
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-light mt-2 tracking-tight">
            Engineered for high aesthetic standards.
          </h2>
        </div>
        <p className="text-sm text-muted-foreground max-w-md">
          Six foundational pillars designed to elevate any web app from generic AI boilerplate to bespoke craft.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <TactileCard key={idx} interactive className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-lg bg-primary/10 w-fit">
                {feature.icon}
              </div>
              <span className="font-mono text-[10px] text-muted-foreground uppercase">
                {feature.tag}
              </span>
            </div>
            <div>
              <h3 className="text-base font-semibold tracking-tight text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mt-1.5">
                {feature.description}
              </p>
            </div>
          </TactileCard>
        ))}
      </div>
    </section>
  );
};

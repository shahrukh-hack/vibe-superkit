import React from 'react';
import { SpringButton } from '../emil-primitives/SpringButton';
import { TactileCard } from '../emil-primitives/TactileCard';
import { Check, ArrowRight } from 'lucide-react';

export const TactilePricing: React.FC = () => {
  const tiers = [
    {
      name: 'Vibe Starter',
      price: '$0',
      period: 'Open Source',
      description: 'The complete core library, .cursorrules, and Antigravity skill.',
      features: [
        'Full Anti-AI .cursorrules & CLAUDE.md',
        'Emil Kowalski Framer Motion spring presets',
        '4 Curated Design Themes (Editorial, Swiss, Luxe, Cyber)',
        'Origin UI precision form inputs',
      ],
      highlighted: false,
      cta: 'Clone Repository',
    },
    {
      name: 'Design Engineer Pro',
      price: '$49',
      period: 'one-time lifetime',
      description: 'For builders creating client projects and high-end SaaS apps.',
      features: [
        'Everything in Starter',
        '50+ Boutique editorial section templates',
        '21st.dev MCP private component sync',
        'Custom WebGL shader background packs',
        'Direct Antigravity workflow integration',
      ],
      highlighted: true,
      cta: 'Get Full Engine',
    },
    {
      name: 'Studio Enterprise',
      price: '$199',
      period: 'per team / year',
      description: 'Dedicated taste audits and team-wide AI rule calibration.',
      features: [
        'Everything in Pro',
        'Custom brand design token generation',
        'Private team component registry',
        'Automated CI/CD AI-slop linting',
      ],
      highlighted: false,
      cta: 'Contact Studio',
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
        <span className="font-mono text-xs text-primary font-semibold tracking-wider uppercase">
          [ 03 / TRANSPARENT PRICING MATRIX ]
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-light tracking-tight">
          Clean, honest pricing without marketing tricks.
        </h2>
        <p className="text-sm text-muted-foreground">
          Zero dark patterns. 100% transparent and open-source foundation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {tiers.map((tier, idx) => (
          <TactileCard
            key={idx}
            className={`flex flex-col justify-between relative ${
              tier.highlighted
                ? 'border-primary/50 shadow-tactile-md bg-card/90 ring-1 ring-primary/20'
                : 'bg-card/50'
            }`}
          >
            {tier.highlighted && (
              <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-0.5 text-[10px] font-mono font-semibold uppercase tracking-wider text-primary-foreground">
                Most Popular
              </span>
            )}

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground tracking-tight">
                  {tier.name}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {tier.description}
                </p>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="font-serif text-4xl font-light text-foreground">
                  {tier.price}
                </span>
                <span className="text-xs font-mono text-muted-foreground">
                  / {tier.period}
                </span>
              </div>

              <div className="h-px bg-border/80" />

              <ul className="space-y-3 text-xs text-muted-foreground">
                {tier.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2.5">
                    <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8">
              <SpringButton
                variant={tier.highlighted ? 'primary' : 'outline'}
                className="w-full"
              >
                <span>{tier.cta}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </SpringButton>
            </div>
          </TactileCard>
        ))}
      </div>
    </section>
  );
};

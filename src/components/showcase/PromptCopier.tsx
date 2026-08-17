import React, { useState } from 'react';
import { Copy, Check, Terminal, Sparkles, Wand2 } from 'lucide-react';
import { SpringButton } from '../emil-primitives/SpringButton';
import { TactileCard } from '../emil-primitives/TactileCard';

interface PromptPreset {
  title: string;
  category: string;
  prompt: string;
}

export const PromptCopier: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const prompts: PromptPreset[] = [
    {
      title: 'Anti-AI Editorial Landing Page',
      category: 'Page Layout',
      prompt:
        'Create an asymmetric editorial landing page layout using Fraunces serif headings, Plus Jakarta Sans body copy, and warm cream/espresso color tokens. Do NOT use purple glowing borders, particle mesh grids, or floating icon bento boxes. Include Emil Kowalski physics springs for all interactive buttons and cards.',
    },
    {
      title: 'Origin UI Precision Command Bar',
      category: 'Input / UX',
      prompt:
        'Build a modern search and command palette using Radix UI primitives and Lucide icons. Add a ⌘K shortcut badge, a smooth pill segmented filter, and spring physics transitions for list item reveals.',
    },
    {
      title: 'Tactile Physical Settings Modal',
      category: 'Components',
      prompt:
        'Generate a clean settings drawer modal using Vaul and Radix UI. Style it with 1px subtle borders, inner specular highlights, spring press states, and sonner toast alerts on save.',
    },
  ];

  const handleCopy = (prompt: string, idx: number) => {
    navigator.clipboard.writeText(prompt);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  return (
    <section id="prompt-generator-section" className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <span className="font-mono text-xs text-primary font-semibold tracking-wider uppercase">
            [ 04 / PROMPT GENERATOR FOR VIBE CODERS ]
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-light mt-2 tracking-tight">
            1-Click high-taste AI prompts.
          </h2>
        </div>
        <p className="text-sm text-muted-foreground max-w-md">
          Copy these calibrated prompts into Antigravity, Cursor, or Claude to get bespoke results immediately.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {prompts.map((item, idx) => (
          <TactileCard key={idx} className="flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded bg-muted text-muted-foreground">
                  {item.category}
                </span>
                <Wand2 className="w-3.5 h-3.5 text-primary" />
              </div>

              <h3 className="text-sm font-semibold text-foreground tracking-tight">
                {item.title}
              </h3>

              <div className="rounded-lg bg-background/80 p-3 border border-border/60 text-xs font-mono text-muted-foreground leading-relaxed">
                "{item.prompt}"
              </div>
            </div>

            <div className="pt-2">
              <SpringButton
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() => handleCopy(item.prompt, idx)}
              >
                {copiedIndex === idx ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-primary" />
                    <span>Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Prompt</span>
                  </>
                )}
              </SpringButton>
            </div>
          </TactileCard>
        ))}
      </div>
    </section>
  );
};

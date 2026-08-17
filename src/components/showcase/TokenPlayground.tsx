import React, { useState } from 'react';
import { Sliders, Sparkles, RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';

export const TokenPlayground: React.FC = () => {
  const [radius, setRadius] = useState<number>(10);
  const [stiffness, setStiffness] = useState<number>(420);
  const [hasGrain, setHasGrain] = useState<boolean>(true);

  const applyRadius = (val: number) => {
    setRadius(val);
    document.documentElement.style.setProperty('--radius', `${val}px`);
  };

  const toggleGrain = () => {
    setHasGrain(!hasGrain);
    document.body.classList.toggle('bg-grain', !hasGrain);
  };

  const resetTokens = () => {
    applyRadius(10);
    setStiffness(420);
    setHasGrain(true);
    document.body.classList.add('bg-grain');
  };

  return (
    <div className="rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-sm space-y-4">
      <div className="flex items-center justify-between border-b border-border/60 pb-3">
        <div className="flex items-center gap-2">
          <Sliders className="w-4 h-4 text-primary" />
          <h3 className="text-sm font-bold text-foreground font-mono uppercase">
            Live Token Tweaker
          </h3>
        </div>
        <button
          onClick={resetTokens}
          className="flex items-center gap-1 text-[11px] font-mono text-muted-foreground hover:text-foreground cursor-pointer"
        >
          <RefreshCw className="w-3 h-3" /> Reset Defaults
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-1">
        {/* Control 1: Border Radius */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-mono">
            <span className="text-muted-foreground">Border Radius</span>
            <span className="text-primary font-bold">{radius}px</span>
          </div>
          <input
            type="range"
            min={0}
            max={24}
            value={radius}
            onChange={(e) => applyRadius(Number(e.target.value))}
            className="w-full accent-primary cursor-pointer"
          />
        </div>

        {/* Control 2: Spring Stiffness */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-mono">
            <span className="text-muted-foreground">Spring Stiffness</span>
            <span className="text-primary font-bold">{stiffness} Hz</span>
          </div>
          <input
            type="range"
            min={200}
            max={600}
            step={20}
            value={stiffness}
            onChange={(e) => setStiffness(Number(e.target.value))}
            className="w-full accent-primary cursor-pointer"
          />
        </div>

        {/* Control 3: Tactile Noise Grain Toggle */}
        <div className="flex items-center justify-between pt-2 sm:pt-0">
          <div className="text-xs font-mono">
            <span className="text-foreground font-semibold block">Tactile Grain Filter</span>
            <span className="text-muted-foreground text-[10px]">Natural paper noise</span>
          </div>
          <button
            onClick={toggleGrain}
            className={cn(
              'px-3 py-1 rounded-lg border text-xs font-mono font-bold transition-colors cursor-pointer',
              hasGrain
                ? 'border-primary bg-primary/10 text-primary'
                : 'border-border bg-muted text-muted-foreground'
            )}
          >
            {hasGrain ? 'ENABLED' : 'DISABLED'}
          </button>
        </div>
      </div>
    </div>
  );
};

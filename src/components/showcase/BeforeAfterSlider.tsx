import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, AlertTriangle, MoveHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(position);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 border-b border-border/60 pb-4">
        <div>
          <span className="font-mono text-xs text-primary font-bold tracking-wider uppercase">
            [ VISUAL TASTE BENCHMARK ]
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-1 tracking-tight">
            Generic AI Slop vs. Vibe Superkit
          </h2>
        </div>
        <p className="text-xs font-mono text-muted-foreground">
          Drag the center handle to compare the design engineering difference.
        </p>
      </div>

      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative h-[380px] sm:h-[340px] w-full rounded-2xl border border-border overflow-hidden select-none cursor-ew-resize shadow-md"
      >
        {/* RIGHT LAYER (AFTER): VIBE SUPERKIT TASTE */}
        <div className="absolute inset-0 bg-[#F6F9FC] text-[#0A2540] p-6 sm:p-8 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#635BFF]/10 text-[#635BFF] text-xs font-mono font-bold">
              <Sparkles className="w-3.5 h-3.5" /> VIBE SUPERKIT (STRIPE & TAILWIND UI)
            </div>
            <span className="text-[11px] font-mono text-[#425466]">WCAG AAA • 420Hz Springs</span>
          </div>

          <div className="space-y-3 max-w-md">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A2540] leading-tight">
              Honest typography and surgical 1px borders.
            </h3>
            <p className="text-xs sm:text-sm text-[#425466] leading-relaxed">
              Plus Jakarta Sans paired with deep navy ink, crisp white elevated cards, and natural Emil Kowalski spring physics.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded-xl bg-[#635BFF] text-white text-xs font-bold shadow-xs hover:bg-[#5249E6] transition-colors cursor-pointer">
              Deploy Component
            </button>
            <div className="px-3 py-1.5 rounded-xl border border-[#E3E8EE] bg-white text-xs font-mono font-semibold text-[#0A2540]">
              $0.00 Slop Score
            </div>
          </div>
        </div>

        {/* LEFT LAYER (BEFORE): GENERIC AI SLOP (Clipped) */}
        <div
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
          className="absolute inset-0 bg-[#070514] text-white p-6 sm:p-8 flex flex-col justify-between border-r-2 border-purple-500"
        >
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-mono font-bold border border-purple-500/30 animate-pulse">
              <AlertTriangle className="w-3.5 h-3.5" /> ❌ GENERIC AI SLOP
            </div>
            <span className="text-[11px] font-mono text-purple-400">Pulsing Gradient Pill</span>
          </div>

          <div className="space-y-3 max-w-md">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-normal bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Supercharge your Next-Gen AI Workflow.
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Default Inter font with no tracking, glowing violet borders everywhere, and stiff 0.3s ease transitions.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold shadow-[0_0_20px_rgba(168,85,247,0.6)] cursor-pointer">
              ✨ Magic Transform
            </button>
            <div className="px-3 py-1.5 rounded-xl border border-purple-500/40 bg-purple-950/50 text-xs font-mono text-purple-300">
              100% Cliché Score
            </div>
          </div>
        </div>

        {/* DRAGGABLE DIVIDER LINE & HANDLE */}
        <div
          style={{ left: `${sliderPosition}%` }}
          className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_12px_rgba(0,0,0,0.5)] -translate-x-1/2 flex items-center justify-center pointer-events-none"
        >
          <div className="w-8 h-8 rounded-full bg-white text-black shadow-lg border border-border flex items-center justify-center pointer-events-auto">
            <MoveHorizontal className="w-4 h-4 text-gray-700" />
          </div>
        </div>
      </div>
    </section>
  );
};

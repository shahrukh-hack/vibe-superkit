import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SpringButton } from './SpringButton';
import { Sliders, X, Sparkles, Check, ShieldCheck } from 'lucide-react';
import { toast } from 'sonner';

export const SpringDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [antiSlopEnabled, setAntiSlopEnabled] = useState(true);
  const [springPhysics, setSpringPhysics] = useState(true);
  const [editorialType, setEditorialType] = useState(true);

  const handleSave = () => {
    setIsOpen(false);
    toast.success('Design preferences updated with Emil Kowalski spring physics!');
  };

  return (
    <>
      <SpringButton variant="primary" size="sm" onClick={() => setIsOpen(true)}>
        <Sliders className="w-3.5 h-3.5" />
        <span>Open Emil-Grade Sheet Drawer</span>
      </SpringButton>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            />

            {/* Bottom Sheet / Modal */}
            <motion.div
              initial={{ y: '100%', opacity: 0.8 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ type: 'spring', stiffness: 380, damping: 32 }}
              className="relative z-50 w-full max-w-lg rounded-t-3xl sm:rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-tactile-lg space-y-6"
            >
              {/* Sheet Drag Indicator */}
              <div className="w-12 h-1.5 rounded-full bg-border mx-auto -mt-2 sm:hidden" />

              <div className="flex items-center justify-between border-b border-border/60 pb-4">
                <div>
                  <span className="text-xs font-mono text-primary font-bold uppercase">
                    [ VAUL & EMIL PHYSICS ]
                  </span>
                  <h3 className="text-lg font-bold text-foreground mt-0.5">
                    Design Protocol Configuration
                  </h3>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg border border-border hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Toggles */}
              <div className="space-y-3">
                <div
                  onClick={() => setAntiSlopEnabled(!antiSlopEnabled)}
                  className="flex items-center justify-between p-3.5 rounded-xl border border-border bg-muted/30 cursor-pointer hover:bg-muted/50 transition-colors"
                >
                  <div>
                    <p className="text-xs font-bold text-foreground">Anti-AI Slop Shield</p>
                    <p className="text-[11px] text-muted-foreground">Enforce negative design rules against purple glows.</p>
                  </div>
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${antiSlopEnabled ? 'bg-primary border-primary text-primary-foreground' : 'border-border'}`}>
                    {antiSlopEnabled && <Check className="w-3.5 h-3.5" />}
                  </div>
                </div>

                <div
                  onClick={() => setSpringPhysics(!springPhysics)}
                  className="flex items-center justify-between p-3.5 rounded-xl border border-border bg-muted/30 cursor-pointer hover:bg-muted/50 transition-colors"
                >
                  <div>
                    <p className="text-xs font-bold text-foreground">Emil Kowalski Physics</p>
                    <p className="text-[11px] text-muted-foreground">Tactile 420Hz spring interpolation on all interactions.</p>
                  </div>
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${springPhysics ? 'bg-primary border-primary text-primary-foreground' : 'border-border'}`}>
                    {springPhysics && <Check className="w-3.5 h-3.5" />}
                  </div>
                </div>

                <div
                  onClick={() => setEditorialType(!editorialType)}
                  className="flex items-center justify-between p-3.5 rounded-xl border border-border bg-muted/30 cursor-pointer hover:bg-muted/50 transition-colors"
                >
                  <div>
                    <p className="text-xs font-bold text-foreground">Editorial Typography</p>
                    <p className="text-[11px] text-muted-foreground">Fraunces display paired with Plus Jakarta Sans body.</p>
                  </div>
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${editorialType ? 'bg-primary border-primary text-primary-foreground' : 'border-border'}`}>
                    {editorialType && <Check className="w-3.5 h-3.5" />}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-2">
                <SpringButton variant="outline" size="sm" className="flex-1" onClick={() => setIsOpen(false)}>
                  Cancel
                </SpringButton>
                <SpringButton variant="primary" size="sm" className="flex-1" onClick={handleSave}>
                  Save & Apply Tokens
                </SpringButton>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

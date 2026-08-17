import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Command, X, Search, Moon, Terminal, Copy, HelpCircle } from 'lucide-react';
import { SPRING_PRESETS } from '@/lib/motion-presets';

export const KeybindingModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Open on '?' or '⌘/' or 'Ctrl+/'
      if (
        (e.key === '?' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) ||
        ((e.metaKey || e.ctrlKey) && e.key === '/')
      ) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const shortcuts = [
    { key: '⌘ K', label: 'Open Search & Command Palette', icon: <Search className="w-3.5 h-3.5" /> },
    { key: '?', label: 'Open Keyboard Shortcuts Menu', icon: <HelpCircle className="w-3.5 h-3.5" /> },
    { key: 'T', label: 'Cycle Enterprise Design Theme', icon: <Moon className="w-3.5 h-3.5" /> },
    { key: 'C', label: 'Scroll to 1-Click Prompt Copier', icon: <Copy className="w-3.5 h-3.5" /> },
    { key: 'ESC', label: 'Close Active Modal / Drawer', icon: <X className="w-3.5 h-3.5" /> },
  ];

  return (
    <>
      {/* Floating Bottom-Right Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        aria-label="Keyboard Shortcuts"
        className="fixed bottom-5 right-5 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card shadow-lg text-foreground hover:bg-muted cursor-pointer"
      >
        <Command className="w-4 h-4 text-primary" />
      </motion.button>

      {/* Shortcuts Modal Backdrop & Content */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-xs"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={SPRING_PRESETS.tactile}
              className="relative w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-2xl space-y-4 z-10"
            >
              <div className="flex items-center justify-between border-b border-border/60 pb-3">
                <div className="flex items-center gap-2">
                  <Command className="w-4 h-4 text-primary" />
                  <h3 className="text-sm font-bold text-foreground font-sans">
                    Keyboard Shortcuts
                  </h3>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg p-1 text-muted-foreground hover:bg-muted hover:text-foreground cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-2.5">
                {shortcuts.map((s, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-2 rounded-xl bg-muted/40 border border-border/60 text-xs"
                  >
                    <div className="flex items-center gap-2 text-foreground font-medium">
                      <span className="text-muted-foreground">{s.icon}</span>
                      <span>{s.label}</span>
                    </div>
                    <kbd className="rounded-md border border-border bg-background px-2 py-0.5 font-mono text-[11px] font-bold text-primary shadow-2xs">
                      {s.key}
                    </kbd>
                  </div>
                ))}
              </div>

              <p className="text-[11px] font-mono text-center text-muted-foreground pt-2">
                Press <kbd className="px-1 py-0.5 rounded bg-muted">ESC</kbd> to dismiss this modal.
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

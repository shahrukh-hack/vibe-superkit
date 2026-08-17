import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Copy, Check, X } from 'lucide-react';
import { toast } from 'sonner';

interface Props {
  componentName: string;
  codeSnippet: string;
}

export const ComponentCodeModal: React.FC<Props> = ({ componentName, codeSnippet }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    toast.success(`Copied ${componentName} TSX code to clipboard!`);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-medium border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
        title="View component source code"
      >
        <Code2 className="w-3.5 h-3.5 text-primary" />
        <span>Code</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 28 }}
              className="relative z-50 w-full max-w-2xl rounded-2xl border border-border bg-card p-6 shadow-tactile-lg space-y-4 max-h-[85vh] flex flex-col"
            >
              <div className="flex items-center justify-between border-b border-border/60 pb-3">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-primary" />
                  <h3 className="font-bold text-sm text-foreground font-mono">{componentName}.tsx</h3>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-primary text-primary-foreground text-xs font-bold shadow-sm hover:bg-primary/90 transition-all"
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied!' : 'Copy TSX'}</span>
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 rounded-lg border border-border hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto rounded-xl bg-background p-4 border border-border/80 font-mono text-xs text-foreground/90 leading-relaxed select-all">
                <pre>{codeSnippet}</pre>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

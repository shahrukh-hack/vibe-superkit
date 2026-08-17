import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Copy, Terminal } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SPRING_PRESETS } from '@/lib/motion-presets';

export interface CopySnippetProps {
  command?: string;
  prefix?: string;
  className?: string;
}

export const CopySnippet: React.FC<CopySnippetProps> = ({
  command = 'npx vibe-skills add taste-engine',
  prefix = '$',
  className,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        'group relative flex items-center justify-between gap-3 rounded-xl border border-border bg-card/80 px-4 py-2.5 shadow-xs transition-all hover:border-primary/50',
        className
      )}
    >
      <div className="flex items-center gap-2.5 overflow-hidden font-mono text-xs text-foreground">
        <Terminal className="w-3.5 h-3.5 text-primary shrink-0" />
        <span className="select-none text-muted-foreground">{prefix}</span>
        <code className="truncate text-foreground font-semibold">{command}</code>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={SPRING_PRESETS.snappy}
        onClick={handleCopy}
        aria-label="Copy command"
        className={cn(
          'flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border transition-colors cursor-pointer',
          copied
            ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
            : 'border-border bg-background text-muted-foreground hover:bg-muted hover:text-foreground'
        )}
      >
        {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
      </motion.button>
    </div>
  );
};

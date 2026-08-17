import React from 'react';
import { cn } from '@/lib/utils';

export type StatusType = 'active' | 'success' | 'warning' | 'syncing' | 'offline';

export interface StatusPillProps {
  status?: StatusType;
  label?: string;
  className?: string;
}

export const StatusPill: React.FC<StatusPillProps> = ({
  status = 'active',
  label,
  className,
}) => {
  const config = {
    active: {
      dot: 'bg-primary animate-pulse',
      bg: 'bg-primary/10 text-primary border-primary/20',
      defaultLabel: 'Live System',
    },
    success: {
      dot: 'bg-emerald-500',
      bg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
      defaultLabel: 'Operational (100%)',
    },
    warning: {
      dot: 'bg-amber-500 animate-pulse',
      bg: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
      defaultLabel: 'Degraded',
    },
    syncing: {
      dot: 'bg-indigo-500 animate-ping',
      bg: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20',
      defaultLabel: 'Syncing AST...',
    },
    offline: {
      dot: 'bg-muted-foreground',
      bg: 'bg-muted text-muted-foreground border-border',
      defaultLabel: 'Offline',
    },
  };

  const current = config[status];

  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-[11px] font-mono font-medium shadow-2xs select-none',
        current.bg,
        className
      )}
    >
      <span className={cn('h-1.5 w-1.5 rounded-full', current.dot)} />
      <span>{label || current.defaultLabel}</span>
    </div>
  );
};

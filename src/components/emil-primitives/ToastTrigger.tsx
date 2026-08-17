import React from 'react';
import { toast, Toaster } from 'sonner';
import { SpringButton } from './SpringButton';
import { Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';

export const TasteToaster: React.FC = () => {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        className:
          '!bg-card !text-card-foreground !border !border-border/80 !shadow-tactile-lg !rounded-xl !p-4 !font-sans',
        duration: 4000,
      }}
    />
  );
};

export const ToastTriggerDemo: React.FC = () => {
  const triggerSuccess = () => {
    toast.custom((t) => (
      <div className="flex items-start gap-3 w-full">
        <div className="p-2 rounded-lg bg-primary/10 text-primary mt-0.5">
          <CheckCircle2 className="w-4 h-4" />
        </div>
        <div className="flex-1">
          <h4 className="text-sm font-semibold tracking-tight text-foreground">
            Taste Standards Applied
          </h4>
          <p className="text-xs text-muted-foreground mt-0.5">
            Physics spring animations & custom typography tokens initialized.
          </p>
        </div>
        <button
          onClick={() => toast.dismiss(t)}
          className="text-xs text-muted-foreground hover:text-foreground p-1"
        >
          ✕
        </button>
      </div>
    ));
  };

  const triggerAntiSlopNotice = () => {
    toast.custom((t) => (
      <div className="flex items-start gap-3 w-full">
        <div className="p-2 rounded-lg bg-accent/20 text-accent-foreground mt-0.5">
          <AlertCircle className="w-4 h-4" />
        </div>
        <div className="flex-1">
          <h4 className="text-sm font-semibold tracking-tight text-foreground">
            AI Slop Blocked
          </h4>
          <p className="text-xs text-muted-foreground mt-0.5">
            Purple glow & headline gradient pills successfully removed.
          </p>
        </div>
        <button
          onClick={() => toast.dismiss(t)}
          className="text-xs text-muted-foreground hover:text-foreground p-1"
        >
          ✕
        </button>
      </div>
    ));
  };

  return (
    <div className="flex flex-wrap gap-3">
      <SpringButton variant="primary" size="sm" onClick={triggerSuccess}>
        <Sparkles className="w-3.5 h-3.5" />
        Trigger Emil-grade Toast
      </SpringButton>
      <SpringButton variant="outline" size="sm" onClick={triggerAntiSlopNotice}>
        Simulate Slop Shield
      </SpringButton>
    </div>
  );
};

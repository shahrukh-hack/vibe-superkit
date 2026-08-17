import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SpringButton } from './SpringButton';
import { Sparkles, CheckCircle2, AlertCircle, X } from 'lucide-react';
import { SPRING_PRESETS } from '@/lib/motion-presets';

interface ToastItem {
  id: string;
  type: 'success' | 'alert';
  title: string;
  description: string;
}

// Global lightweight event dispatcher for toasts
const toastListeners = new Set<(toast: ToastItem) => void>();

export const toast = {
  success: (title: string, description?: string) => {
    const item: ToastItem = {
      id: Math.random().toString(36).substring(2, 9),
      type: 'success',
      title,
      description: description || 'Operation completed with high-taste standards.',
    };
    toastListeners.forEach((fn) => fn(item));
  },
  info: (title: string, description?: string) => {
    const item: ToastItem = {
      id: Math.random().toString(36).substring(2, 9),
      type: 'alert',
      title,
      description: description || 'Notice applied.',
    };
    toastListeners.forEach((fn) => fn(item));
  },
};

export const TasteToaster: React.FC = () => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  useEffect(() => {
    const addToast = (t: ToastItem) => {
      setToasts((prev) => [...prev.slice(-3), t]); // Keep last 4 toasts
      setTimeout(() => {
        setToasts((prev) => prev.filter((item) => item.id !== t.id));
      }, 4000);
    };

    toastListeners.add(addToast);
    return () => {
      toastListeners.delete(addToast);
    };
  }, []);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none">
      <AnimatePresence>
        {toasts.map((t) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={SPRING_PRESETS.tactile}
            className="pointer-events-auto flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-xl text-card-foreground"
          >
            <div className="p-2 rounded-xl bg-primary/10 text-primary mt-0.5 shrink-0">
              {t.type === 'success' ? (
                <CheckCircle2 className="w-4 h-4" />
              ) : (
                <AlertCircle className="w-4 h-4" />
              )}
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="text-xs font-bold text-foreground leading-tight">{t.title}</h4>
              <p className="text-[11px] text-muted-foreground mt-0.5 leading-relaxed">{t.description}</p>
            </div>

            <button
              onClick={() => removeToast(t.id)}
              className="text-muted-foreground hover:text-foreground p-1 rounded-md cursor-pointer shrink-0"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export const ToastTriggerDemo: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <SpringButton
        variant="primary"
        size="sm"
        onClick={() => toast.success('Taste Standards Initialized', 'Emil Kowalski physics curves & Stripe tokens applied.')}
      >
        <Sparkles className="w-3.5 h-3.5" />
        Trigger Emil-grade Toast
      </SpringButton>

      <SpringButton
        variant="outline"
        size="sm"
        onClick={() => toast.info('Anti-AI Slop Guard Active', 'Neon purple glows and pulsing pill badges blocked.')}
      >
        Simulate Slop Shield
      </SpringButton>
    </div>
  );
};

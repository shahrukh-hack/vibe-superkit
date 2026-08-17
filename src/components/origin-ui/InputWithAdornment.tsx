import React, { useState } from 'react';
import { Eye, EyeOff, Check, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface InputWithAdornmentProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  isPassword?: boolean;
  copyable?: boolean;
}

export const InputWithAdornment: React.FC<InputWithAdornmentProps> = ({
  label,
  hint,
  isPassword = false,
  copyable = false,
  className,
  value,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof value === 'string') {
      navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        <input
          type={isPassword && !showPassword ? 'password' : 'text'}
          value={value}
          className={cn(
            'w-full rounded-lg border border-border/80 bg-background/70 px-3.5 py-2 text-sm text-foreground shadow-tactile-sm placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-sans',
            (isPassword || copyable) && 'pr-10',
            className
          )}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2.5 p-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        )}
        {copyable && !isPassword && (
          <button
            type="button"
            onClick={handleCopy}
            className="absolute right-2.5 p-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
          </button>
        )}
      </div>
      {hint && <p className="text-[11px] text-muted-foreground">{hint}</p>}
    </div>
  );
};

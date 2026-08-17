import React, { useState } from 'react';
import { Search, Command, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface SearchCommandProps {
  placeholder?: string;
  className?: string;
  onSearch?: (value: string) => void;
}

export const SearchCommand: React.FC<SearchCommandProps> = ({
  placeholder = 'Search components, prompts, or design tokens...',
  className,
  onSearch,
}) => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onSearch?.(e.target.value);
  };

  const handleClear = () => {
    setValue('');
    onSearch?.('');
  };

  return (
    <div className={cn('relative w-full max-w-md', className)}>
      <div className="relative flex items-center">
        <Search className="absolute left-3.5 h-4 w-4 text-muted-foreground pointer-events-none" />
        
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full rounded-lg border border-border/80 bg-background/80 py-2.5 pl-10 pr-20 text-sm text-foreground shadow-tactile-sm placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all backdrop-blur-sm"
        />

        <div className="absolute right-2.5 flex items-center gap-1.5">
          {value ? (
            <button
              onClick={handleClear}
              className="rounded p-1 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          ) : (
            <kbd className="inline-flex items-center gap-0.5 rounded border border-border/80 bg-muted/60 px-1.5 py-0.5 font-mono text-[10px] font-medium text-muted-foreground">
              <Command className="h-3 w-3" />K
            </kbd>
          )}
        </div>
      </div>
    </div>
  );
};

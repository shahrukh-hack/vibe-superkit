import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SPRING_PRESETS } from '@/lib/motion-presets';

export interface TestimonialProps {
  quote?: string;
  author?: string;
  role?: string;
  avatarUrl?: string;
  rating?: number;
  company?: string;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialProps> = ({
  quote = 'Vibe Superkit completely eliminated generic AI styling from our workflow. Our landing pages now look like they were designed by Stripe engineers.',
  author = 'Alex Rivera',
  role = 'Staff Design Engineer',
  company = 'Linear Ecosystem',
  avatarUrl = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  rating = 5,
  className,
}) => {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={SPRING_PRESETS.tactile}
      className={cn(
        'relative flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-xs transition-all hover:shadow-md hover:border-primary/40',
        className
      )}
    >
      <Quote className="absolute right-6 top-6 h-8 w-8 text-muted-foreground/15 select-none" />

      {/* Stars */}
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
        ))}
      </div>

      {/* Quote Text */}
      <p className="text-sm text-foreground/90 leading-relaxed font-sans italic mb-6">
        "{quote}"
      </p>

      {/* Author Details */}
      <div className="flex items-center gap-3 border-t border-border/60 pt-4">
        <img
          src={avatarUrl}
          alt={author}
          className="h-10 w-10 rounded-full object-cover border border-border"
        />
        <div>
          <div className="flex items-center gap-1.5">
            <h4 className="text-xs font-bold text-foreground font-sans">{author}</h4>
            <CheckCircle className="h-3.5 w-3.5 text-primary" />
          </div>
          <p className="text-[11px] font-mono text-muted-foreground">
            {role} • <span className="text-foreground/80">{company}</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

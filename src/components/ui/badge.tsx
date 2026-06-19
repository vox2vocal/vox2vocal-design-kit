import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';

const badgeVariants = cva('inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-bold', {
  variants: {
    tone: {
      neutral: 'bg-zinc-900 text-vv-text-secondary ring-1 ring-vv-border-default',
      red: 'bg-red-950/50 text-red-300 ring-1 ring-red-500/40',
      success: 'bg-emerald-950/40 text-emerald-300 ring-1 ring-emerald-500/30',
    },
  },
  defaultVariants: {
    tone: 'neutral',
  },
});

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants>;

function Badge({ className, tone, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ className, tone }))} {...props} />;
}

export { Badge, badgeVariants };

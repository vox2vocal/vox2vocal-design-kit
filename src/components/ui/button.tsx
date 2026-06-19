import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';

const buttonVariants = cva(
  'inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vv-red-light disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        gradient:
          'bg-linear-to-r from-vv-red-dark via-vv-red-default to-vv-red-light text-white shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:scale-[1.03]',
        outline:
          'border border-vv-border-default bg-vv-surface-1 text-vv-text-secondary hover:border-zinc-500 hover:bg-vv-surface-2 hover:text-white',
        danger: 'bg-red-950/50 text-red-200 ring-1 ring-red-500/40 hover:bg-red-900/60',
        ghost: 'text-vv-text-secondary hover:bg-vv-surface-1 hover:text-white',
      },
      size: {
        default: 'min-h-12 px-5 py-3',
        sm: 'min-h-10 px-4 py-2',
        icon: 'size-11 rounded-xl p-0',
      },
    },
    defaultVariants: {
      size: 'default',
      variant: 'gradient',
    },
  },
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({ asChild = false, className, size, variant, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return <Comp className={cn(buttonVariants({ className, size, variant }))} {...props} />;
}

export { Button, buttonVariants };

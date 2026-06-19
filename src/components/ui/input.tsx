import * as React from 'react';

import { cn } from '../../lib/utils';

function Input({ className, type, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        'min-h-12 w-full rounded-2xl border border-vv-border-default bg-vv-surface-1 px-4 py-3 text-sm text-white placeholder:text-vv-text-tertiary transition-all focus:border-red-500/50 focus:bg-[#1a1010] focus:outline-none focus:ring-4 focus:ring-red-500/15',
        className,
      )}
      type={type}
      {...props}
    />
  );
}

export { Input };

import type { ReactNode } from 'react';
import { ChevronRight, Mic, Play, Square, Volume2 } from 'lucide-react';

type ButtonProps = {
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
};

type RoundActionButtonProps = {
  label: string;
  variant: 'record' | 'stop' | 'play';
  active?: boolean;
  onClick?: () => void;
};

type SmallIconButtonProps = {
  label: string;
  active?: boolean;
  onClick?: () => void;
};

export function PrimaryGradientButton({
  children,
  disabled,
  onClick,
}: ButtonProps) {
  return (
    <button
      className="vv-button vv-button-primary"
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      <span>{children}</span>
      <ChevronRight aria-hidden size={20} strokeWidth={2.3} />
    </button>
  );
}

export function GhostButton({ children, disabled, onClick }: ButtonProps) {
  return (
    <button
      className="vv-button vv-button-ghost"
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

export function RoundActionButton({
  active,
  label,
  onClick,
  variant,
}: RoundActionButtonProps) {
  const Icon = variant === 'play' ? Play : variant === 'stop' ? Square : Mic;

  return (
    <button
      aria-pressed={active}
      className={`vv-round-action vv-round-action-${variant}`}
      onClick={onClick}
      title={label}
      type="button"
    >
      <Icon aria-hidden fill={variant === 'play' ? 'currentColor' : 'none'} size={30} />
      <span className="sr-only">{label}</span>
    </button>
  );
}

export function SmallIconButton({ active, label, onClick }: SmallIconButtonProps) {
  return (
    <button
      aria-pressed={active}
      className={`vv-small-icon-button ${active ? 'is-active' : ''}`}
      onClick={onClick}
      title={label}
      type="button"
    >
      <Volume2 aria-hidden size={18} />
      <span className="sr-only">{label}</span>
    </button>
  );
}


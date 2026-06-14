import type { ReactNode } from 'react';
import { Check, Lock, Mail } from 'lucide-react';

type TextInputProps = {
  icon: 'email' | 'password';
  label: string;
  placeholder: string;
  type?: 'email' | 'password' | 'text';
};

type CustomCheckboxProps = {
  checked: boolean;
  children: ReactNode;
  onChange: (checked: boolean) => void;
};

type FailureTagChipProps = {
  children: string;
  selected?: boolean;
  onClick?: () => void;
};

export function TextInput({
  icon,
  label,
  placeholder,
  type = 'text',
}: TextInputProps) {
  const Icon = icon === 'email' ? Mail : Lock;

  return (
    <label className="vv-field">
      <span className="sr-only">{label}</span>
      <Icon aria-hidden className="vv-field-icon" size={22} strokeWidth={2} />
      <input placeholder={placeholder} type={type} />
    </label>
  );
}

export function CustomCheckbox({ checked, children, onChange }: CustomCheckboxProps) {
  return (
    <label className="vv-checkbox-row">
      <input
        checked={checked}
        onChange={(event) => onChange(event.currentTarget.checked)}
        type="checkbox"
      />
      <span className="vv-checkbox-box">
        <Check aria-hidden size={14} strokeWidth={3} />
      </span>
      <span>{children}</span>
    </label>
  );
}

export function FailureTagChip({ children, onClick, selected }: FailureTagChipProps) {
  return (
    <button
      aria-pressed={selected}
      className={`vv-chip ${selected ? 'is-selected' : ''}`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}


import type { ReactNode } from 'react';
import { ArrowLeft, Settings } from 'lucide-react';

type MobileShellProps = {
  children: ReactNode;
};

type TopNavProps = {
  title: string;
};

export function MobileShell({ children }: MobileShellProps) {
  return <main className="vv-mobile-shell">{children}</main>;
}

export function TopNav({ title }: TopNavProps) {
  return (
    <header className="vv-top-nav">
      <button aria-label="뒤로가기" className="vv-nav-icon" type="button">
        <ArrowLeft aria-hidden size={20} />
      </button>
      <strong>{title}</strong>
      <button aria-label="설정" className="vv-nav-icon" type="button">
        <Settings aria-hidden size={20} />
      </button>
    </header>
  );
}


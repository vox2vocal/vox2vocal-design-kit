import type { ReactNode } from 'react';
import { AlertTriangle, Music2 } from 'lucide-react';

type SongSectionCardProps = {
  active?: boolean;
  meta: string;
  title: string;
};

type InfoPanelProps = {
  children: ReactNode;
  tone?: 'danger' | 'neutral';
  title: string;
};

export function SongSectionCard({ active, meta, title }: SongSectionCardProps) {
  return (
    <article className={`vv-song-card ${active ? 'is-active' : ''}`}>
      <div className="vv-song-card-edge" aria-hidden />
      <div className="vv-song-card-icon">
        <Music2 aria-hidden size={18} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{meta}</p>
      </div>
    </article>
  );
}

export function InfoPanel({ children, title, tone = 'neutral' }: InfoPanelProps) {
  return (
    <aside className={`vv-info-panel vv-info-panel-${tone}`}>
      <div className="vv-info-icon">
        <AlertTriangle aria-hidden size={16} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </aside>
  );
}


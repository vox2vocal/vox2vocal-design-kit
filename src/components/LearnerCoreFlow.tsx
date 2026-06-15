import type { ReactNode } from 'react';
import {
  BadgeCheck,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Headphones,
  LockKeyhole,
  Mic2,
  Music2,
  Pause,
  Play,
  RefreshCcw,
  ShieldCheck,
  SlidersHorizontal,
  Star,
  Timer,
  Trash2,
  Upload,
  Waves,
} from 'lucide-react';
import { GhostButton, PrimaryGradientButton } from './Buttons';
import { MicLevelMeter, ProgressBar } from './Feedback';
import { FailureTagChip } from './FormControls';

export type LearnerComponentId =
  | 'access-eligibility'
  | 'song-selection'
  | 'section-selection'
  | 'consent-checklist'
  | 'recorder-entry-gate'
  | 'recording-controls'
  | 'take-review'
  | 'fallback-upload'
  | 'processing-status'
  | 'preview-rating'
  | 'pitch-feedback'
  | 'deletion-consent';

export type LearnerComponentMeta = {
  id: LearnerComponentId;
  koName: string;
  enName: string;
  role: string;
  screen: string;
  phase: string;
  state: string;
  contract: string;
};

export const learnerCoreComponentMeta: LearnerComponentMeta[] = [
  {
    id: 'access-eligibility',
    koName: '접근 권한 안내',
    enName: 'Access Eligibility Banner',
    role: '사용자가 P0 내부 운영 대상인지, 선택 가능한 곡이 있는지, 권리 상태가 안전한지 먼저 알려준다.',
    screen: 'Access Eligibility / Song Selection',
    phase: 'Access Gate',
    state: 'eligible, not eligible, rights blocked, under review',
    contract: '권한, allowlist, rights flag를 recording 전에 선검증한다.',
  },
  {
    id: 'song-selection',
    koName: '곡 선택 카드',
    enName: 'Song Selection Card',
    role: '관리자 등록 song package를 선택하게 하고, title, artist, rights state, 기본 section을 함께 보여준다.',
    screen: 'Access Eligibility / Song Selection',
    phase: 'Song Setup',
    state: 'published, internal risk accepted, disabled',
    contract: 'songPackageId와 defaultSectionId를 다음 단계 선택 context로 전달한다.',
  },
  {
    id: 'section-selection',
    koName: '섹션 타임라인 행',
    enName: 'Section Timeline Row',
    role: '선택한 곡의 target section, timestamp, 예상 녹음 길이, guide 노출 가능 여부를 표시한다.',
    screen: 'Section Selection / Part Selection',
    phase: 'Song Setup',
    state: 'selected, blocked, guide unavailable',
    contract: 'sectionId, timestamp, guideAvailability를 recording context로 고정한다.',
  },
  {
    id: 'consent-checklist',
    koName: '필수 동의 체크리스트',
    enName: 'Consent Checklist',
    role: '본인 음성 처리, 생성 preview, expert review, 보관 고지 동의가 현재 policy version과 맞는지 확인한다.',
    screen: 'Record Take / Take Review',
    phase: 'Policy Gate',
    state: 'complete, missing, outdated',
    contract: 'policyVersion과 consent snapshot을 job 생성 전 lock한다.',
  },
  {
    id: 'recorder-entry-gate',
    koName: '녹음 진입 게이트',
    enName: 'Recorder Entry Gate',
    role: '녹음 전에 BPM/key snapshot, 동의 snapshot, 사용 제한 문구, 권리 flag를 한 번에 검증한다.',
    screen: 'Record Take / Take Review',
    phase: 'Record Gate',
    state: 'ready, awaiting consent, blocked by policy',
    contract: 'BPM/key, consent, usage restriction을 ready/blocked state로 묶는다.',
  },
  {
    id: 'recording-controls',
    koName: '녹음 컨트롤 패널',
    enName: 'Recording Control Panel',
    role: 'mic permission, count-in, timer, input level, record/stop, reference pre-listen 중지를 다룬다.',
    screen: 'Record Take / Take Review',
    phase: 'Recording',
    state: 'ready, recording, mic denied, clipping warning',
    contract: 'mic permission, timer, level meter, reference stop rule을 같은 패널에서 관리한다.',
  },
  {
    id: 'take-review',
    koName: '테이크 리뷰 패널',
    enName: 'Take Review Panel',
    role: '녹음된 본인 take를 재생, retake, validation 확인 후 processing 시작 CTA로 이어준다.',
    screen: 'Record Take / Take Review',
    phase: 'Review',
    state: 'take ready, needs retake, submitting',
    contract: 'recorded take validation이 통과한 뒤 processing submit CTA를 활성화한다.',
  },
  {
    id: 'fallback-upload',
    koName: '대체 업로드 패널',
    enName: 'Fallback Upload Panel',
    role: 'recorder를 쓸 수 없을 때 wav/mp3 파일 업로드, TTL, 진행률, 형식 제한을 보여준다.',
    screen: 'Record Take / Take Review',
    phase: 'Fallback',
    state: 'enabled, uploading, rejected, expired',
    contract: 'presigned upload TTL, format validation, upload progress를 표시한다.',
  },
  {
    id: 'processing-status',
    koName: '처리 상태 요약',
    enName: 'Processing Status Summary',
    role: 'canonical job state, stage progress, output flags, 실패/차단 사유를 사용자가 이해할 수 있게 보여준다.',
    screen: 'Processing Status',
    phase: 'Processing',
    state: 'queued, processing, preview ready, failed, blocked',
    contract: 'canonical job state와 stage progress를 polling 결과로 동기화한다.',
  },
  {
    id: 'preview-rating',
    koName: '프리뷰 재생 및 평가',
    enName: 'Preview Player And Rating',
    role: 'app-only self-voice preview를 재생하고, preview_played 이후 1-5점 평가와 실패 태그를 수집한다.',
    screen: 'Result / Preview / Rating',
    phase: 'Result',
    state: 'preview ready, playback blocked, rating required',
    contract: 'preview_played 이후 rating과 failure tag 입력을 수집한다.',
  },
  {
    id: 'pitch-feedback',
    koName: '음정 피드백 패널',
    enName: 'Pitch Feedback Panel',
    role: '현재 음정과 목표 음정 차이, confidence, low-confidence/disputed 구간을 시각화한다.',
    screen: 'Result / Preview / Rating',
    phase: 'Feedback',
    state: 'trusted, low confidence, disputed, report unavailable',
    contract: 'confidence와 disputed range를 result panel의 품질 신호로 연결한다.',
  },
  {
    id: 'deletion-consent',
    koName: '동의 및 삭제 상태',
    enName: 'Consent And Deletion Status',
    role: '사용자가 job 단위 동의 상태, 보관 기한, 철회 영향, 삭제 진행 상태를 확인하게 한다.',
    screen: 'Data / Consent / Deletion Settings',
    phase: 'Data Control',
    state: 'retention active, deletion scheduled, deleted, deletion failed',
    contract: 'retention/deletion state와 consent withdrawal action을 함께 노출한다.',
  },
];

type LearnerCoreFlowPreviewProps = {
  selectedId: LearnerComponentId;
  onSelect: (id: LearnerComponentId) => void;
};

type StatusPillProps = {
  children: ReactNode;
  tone?: 'danger' | 'info' | 'muted' | 'success' | 'warning';
};

export function LearnerCoreFlowPreview({
  onSelect,
  selectedId,
}: LearnerCoreFlowPreviewProps) {
  const selectedMeta = getLearnerComponentMeta(selectedId);

  return (
    <div className="vv-learner-flow">
      <section className="vv-preview-hero vv-learner-hero">
        <div className="vv-flow-mark">
          <Waves aria-hidden size={22} />
        </div>
        <h2>Learner Core Flow</h2>
        <p>곡 선택부터 preview 평가까지 P0 학습자 흐름을 구성하는 도메인 컴포넌트입니다.</p>
        <div className="vv-flow-overview-grid" aria-label="Learner Flow 요약">
          <FlowOverviewCard label="Components" value="12" />
          <FlowOverviewCard label="Screens" value="5+" />
          <FlowOverviewCard label="Contract" value="App-only" />
        </div>
      </section>

      <div className="vv-flow-picker" aria-label="Learner Core Flow 컴포넌트 선택">
        {learnerCoreComponentMeta.map((component, index) => (
          <button
            className={component.id === selectedId ? 'is-active' : ''}
            key={component.id}
            onClick={() => onSelect(component.id)}
            type="button"
          >
            <span>{index + 1}</span>
            <strong>{component.koName}</strong>
            <small>{component.phase}</small>
          </button>
        ))}
      </div>

      <section className="vv-flow-detail">
        <span className="vv-flow-count">
          Component {learnerCoreComponentMeta.findIndex((item) => item.id === selectedId) + 1} /{' '}
          {learnerCoreComponentMeta.length}
        </span>
        <h3>
          {selectedMeta.koName} <em>({selectedMeta.enName})</em>
        </h3>
        <p>{selectedMeta.role}</p>
        <div className="vv-flow-meta-row">
          <StatusPill tone="success">{selectedMeta.phase}</StatusPill>
          <StatusPill tone="info">{selectedMeta.screen}</StatusPill>
          <StatusPill>{selectedMeta.state}</StatusPill>
        </div>
        <div className="vv-flow-contract">
          <span>Implementation contract</span>
          <strong>{selectedMeta.contract}</strong>
        </div>
      </section>

      <LearnerComponentSample id={selectedId} />
    </div>
  );
}

export function LearnerCoreFlowCatalog({
  onSelect,
  selectedId,
}: LearnerCoreFlowPreviewProps) {
  return (
    <div className="vv-flow-catalog">
      {learnerCoreComponentMeta.map((component, index) => (
        <button
          className={`vv-flow-catalog-item ${component.id === selectedId ? 'is-active' : ''}`}
          key={component.id}
          onClick={() => onSelect(component.id)}
          type="button"
        >
          <span className="vv-catalog-index">{String(index + 1).padStart(2, '0')}</span>
          <strong>
            {component.koName} <em>({component.enName})</em>
          </strong>
          <p>{component.role}</p>
          <div className="vv-flow-catalog-meta">
            <span>{component.phase}</span>
            <span>{component.state}</span>
          </div>
          <small>
            {component.screen} · {component.contract}
          </small>
        </button>
      ))}
    </div>
  );
}

export function getLearnerComponentMeta(id: LearnerComponentId) {
  const meta = learnerCoreComponentMeta.find((component) => component.id === id);

  if (!meta) {
    return learnerCoreComponentMeta[0];
  }

  return meta;
}

function LearnerComponentSample({ id }: { id: LearnerComponentId }) {
  const samples: Record<LearnerComponentId, ReactNode> = {
    'access-eligibility': <AccessEligibilityBanner />,
    'song-selection': <SongSelectionCard />,
    'section-selection': <SectionTimelineRow />,
    'consent-checklist': <ConsentChecklist />,
    'recorder-entry-gate': <RecorderEntryGate />,
    'recording-controls': <RecordingControlPanel />,
    'take-review': <TakeReviewPanel />,
    'fallback-upload': <FallbackUploadPanel />,
    'processing-status': <ProcessingStatusSummary />,
    'preview-rating': <PreviewRatingPanel />,
    'pitch-feedback': <PitchFeedbackPanel />,
    'deletion-consent': <DeletionConsentStatus />,
  };

  return <div className="vv-flow-sample">{samples[id]}</div>;
}

function FlowOverviewCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="vv-flow-overview-card">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function AccessEligibilityBanner() {
  return (
    <article className="vv-domain-panel vv-access-banner">
      <div className="vv-domain-icon">
        <ShieldCheck aria-hidden size={22} />
      </div>
      <div>
        <span className="vv-kicker">Access Eligibility</span>
        <h4>내부 운영 대상 계정입니다</h4>
        <p>Mist intro section-limited preview 테스트에 접근할 수 있습니다.</p>
        <div className="vv-flow-meta-row">
          <StatusPill tone="success">allowlist matched</StatusPill>
          <StatusPill tone="warning">risk accepted</StatusPill>
        </div>
      </div>
    </article>
  );
}

function SongSelectionCard() {
  return (
    <article className="vv-domain-panel vv-song-select-card">
      <div className="vv-song-art">
        <Music2 aria-hidden size={22} />
      </div>
      <div>
        <div className="vv-song-card-topline">
          <span className="vv-kicker">Song Package</span>
          <StatusPill tone="warning">internal</StatusPill>
        </div>
        <h4>Ken Kamikita - Mist</h4>
        <p>Language: Japanese · Key: F#m · BPM: 82</p>
        <div className="vv-song-card-footer">
          <span>Default section</span>
          <strong>intro 0:00-0:28</strong>
        </div>
      </div>
      <ChevronRight aria-hidden className="vv-card-chevron" size={18} />
    </article>
  );
}

function SectionTimelineRow() {
  return (
    <article className="vv-domain-panel vv-section-timeline-row">
      <div className="vv-timeline-rail" aria-hidden>
        <span />
      </div>
      <div>
        <div className="vv-song-card-topline">
          <span className="vv-kicker">Selected Section</span>
          <StatusPill tone="success">ready</StatusPill>
        </div>
        <h4>Intro / 나레이션 도입부</h4>
        <p>0:00-0:28 · expected take 28s · section-limited processing</p>
        <div className="vv-flow-meta-row">
          <StatusPill tone="muted">pre-listen hidden</StatusPill>
          <StatusPill tone="muted">lyrics hidden</StatusPill>
        </div>
      </div>
    </article>
  );
}

function ConsentChecklist() {
  const consentItems = [
    ['본인 음성 처리', 'own_voice_processing', true],
    ['생성 프리뷰', 'generated_preview', true],
    ['전문가 리뷰', 'expert_review', true],
    ['보관 고지 확인', 'retention_notice_ack', true],
  ] as const;

  return (
    <article className="vv-domain-panel">
      <div className="vv-song-card-topline">
        <span className="vv-kicker">Consent Snapshot</span>
        <StatusPill tone="success">v2026.06 matched</StatusPill>
      </div>
      <h4>필수 동의가 현재 정책과 일치합니다</h4>
      <div className="vv-consent-list">
        {consentItems.map(([label, code, checked]) => (
          <div className="vv-consent-row" key={code}>
            <CheckCircle2 aria-hidden size={18} />
            <div>
              <strong>{label}</strong>
              <span>{code}</span>
            </div>
            <StatusPill tone={checked ? 'success' : 'warning'}>{checked ? 'granted' : 'missing'}</StatusPill>
          </div>
        ))}
      </div>
    </article>
  );
}

function RecorderEntryGate() {
  return (
    <article className="vv-domain-panel">
      <div className="vv-song-card-topline">
        <span className="vv-kicker">Recorder Gate</span>
        <StatusPill tone="success">ready to record</StatusPill>
      </div>
      <div className="vv-gate-grid">
        <GateRow icon={<SlidersHorizontal aria-hidden size={18} />} label="BPM / Key" value="82 BPM · F#m" />
        <GateRow icon={<BadgeCheck aria-hidden size={18} />} label="Consent" value="snapshot locked" />
        <GateRow icon={<LockKeyhole aria-hidden size={18} />} label="Usage" value="app-only, no share" />
      </div>
      <p className="vv-micro-copy">
        Reference audio와 lyrics는 권리 flag가 꺼져 있어 녹음 화면에서는 숨김 처리됩니다.
      </p>
    </article>
  );
}

function RecordingControlPanel() {
  return (
    <article className="vv-domain-panel vv-recorder-panel">
      <div className="vv-song-card-topline">
        <span className="vv-kicker">Recording</span>
        <StatusPill tone="danger">recording</StatusPill>
      </div>
      <div className="vv-recording-timer">
        <Timer aria-hidden size={18} />
        <strong>00:17</strong>
        <span>/ 00:28</span>
      </div>
      <MicLevelMeter level={72} />
      <div className="vv-recording-controls">
        <button className="vv-recorder-button is-recording" type="button">
          <Mic2 aria-hidden size={22} />
        </button>
        <button className="vv-recorder-button" type="button">
          <Pause aria-hidden size={22} />
        </button>
      </div>
      <StatusPill tone="warning">reference playback stopped before recording</StatusPill>
    </article>
  );
}

function TakeReviewPanel() {
  return (
    <article className="vv-domain-panel">
      <div className="vv-song-card-topline">
        <span className="vv-kicker">Take Review</span>
        <StatusPill tone="success">take ready</StatusPill>
      </div>
      <div className="vv-audio-review">
        <button className="vv-play-mini" type="button">
          <Play aria-hidden fill="currentColor" size={18} />
        </button>
        <div className="vv-audio-wave" aria-hidden>
          {Array.from({ length: 18 }, (_, index) => (
            <span key={index} style={{ height: `${12 + (index % 6) * 5}px` }} />
          ))}
        </div>
        <span>00:28</span>
      </div>
      <div className="vv-validation-grid">
        <StatusPill tone="success">voice detected</StatusPill>
        <StatusPill tone="success">duration ok</StatusPill>
        <StatusPill tone="warning">minor clipping</StatusPill>
      </div>
      <div className="vv-dual-actions">
        <GhostButton>
          <RefreshCcw aria-hidden size={16} />
          다시 녹음
        </GhostButton>
        <PrimaryGradientButton>처리 시작</PrimaryGradientButton>
      </div>
    </article>
  );
}

function FallbackUploadPanel() {
  return (
    <article className="vv-domain-panel">
      <div className="vv-upload-zone">
        <Upload aria-hidden size={24} />
        <strong>fallback_take_intro.wav</strong>
        <span>wav, mp3 · max 60s · upload TTL 15m</span>
      </div>
      <ProgressBar value={58} />
      <div className="vv-flow-meta-row">
        <StatusPill tone="info">uploading</StatusPill>
        <StatusPill tone="muted">presigned URL</StatusPill>
      </div>
    </article>
  );
}

function ProcessingStatusSummary() {
  const stages = [
    ['Upload committed', 'completed'],
    ['Audio ingest', 'completed'],
    ['Pitch mapping', 'processing'],
    ['Self-voice preview', 'queued'],
  ] as const;

  return (
    <article className="vv-domain-panel">
      <div className="vv-song-card-topline">
        <span className="vv-kicker">Job State</span>
        <StatusPill tone="info">processing</StatusPill>
      </div>
      <h4>프리뷰를 준비하고 있습니다</h4>
      <ProgressBar value={62} />
      <div className="vv-stage-list">
        {stages.map(([label, state]) => (
          <div className={`vv-stage-item is-${state}`} key={label}>
            <span className="vv-stage-dot" />
            <strong>{label}</strong>
            <em>{state}</em>
          </div>
        ))}
      </div>
      <div className="vv-output-flags">
        <StatusPill tone="muted">preview_available=false</StatusPill>
        <StatusPill tone="success">section_limited=true</StatusPill>
      </div>
    </article>
  );
}

function PreviewRatingPanel() {
  return (
    <article className="vv-domain-panel">
      <div className="vv-preview-player">
        <Headphones aria-hidden size={20} />
        <div>
          <strong>Self-voice intro preview</strong>
          <span>app-only playback · no download/share</span>
        </div>
        <button className="vv-play-mini" type="button">
          <Play aria-hidden fill="currentColor" size={16} />
        </button>
      </div>
      <div className="vv-rating-card">
        <span className="vv-kicker">Rating Required</span>
        <h4>이 preview가 내 목소리처럼 들리나요?</h4>
        <div className="vv-rating-row" aria-label="평점 예시">
          {[1, 2, 3, 4, 5].map((value) => (
            <button className={value === 4 ? 'is-selected' : ''} key={value} type="button">
              <Star aria-hidden fill="currentColor" size={16} />
              {value}
            </button>
          ))}
        </div>
        <div className="vv-chip-row">
          <FailureTagChip selected>pitch_wrong</FailureTagChip>
          <FailureTagChip>robotic_or_artifact</FailureTagChip>
        </div>
      </div>
    </article>
  );
}

function PitchFeedbackPanel() {
  const bars = [42, 56, 50, 68, 61, 74, 48, 54, 67, 59, 72, 64];

  return (
    <article className="vv-domain-panel">
      <div className="vv-song-card-topline">
        <span className="vv-kicker">Pitch Feedback</span>
        <StatusPill tone="warning">low confidence range</StatusPill>
      </div>
      <div className="vv-pitch-chart" aria-label="현재 음정과 목표 음정 차이 예시">
        {bars.map((height, index) => (
          <span
            className={index > 6 && index < 9 ? 'is-low-confidence' : ''}
            key={`${height}-${index}`}
            style={{ height: `${height}px` }}
          />
        ))}
      </div>
      <div className="vv-quality-grid">
        <MetricBox label="Mean diff" value="+18c" />
        <MetricBox label="Trusted frames" value="71%" />
        <MetricBox label="Disputed" value="02" />
      </div>
    </article>
  );
}

function DeletionConsentStatus() {
  return (
    <article className="vv-domain-panel">
      <div className="vv-retention-card">
        <Clock3 aria-hidden size={19} />
        <div>
          <strong>Raw audio retention</strong>
          <span>30일 보관 · deadline 2026-07-13</span>
        </div>
      </div>
      <div className="vv-deletion-track">
        <div className="is-done">request</div>
        <div className="is-active">scheduled</div>
        <div>deleted</div>
      </div>
      <div className="vv-dual-actions">
        <GhostButton>
          <Trash2 aria-hidden size={16} />
          삭제 요청
        </GhostButton>
        <GhostButton>동의 상태 보기</GhostButton>
      </div>
    </article>
  );
}

function GateRow({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="vv-gate-row">
      <span>{icon}</span>
      <div>
        <strong>{label}</strong>
        <small>{value}</small>
      </div>
    </div>
  );
}

function MetricBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="vv-metric-box">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function StatusPill({ children, tone = 'muted' }: StatusPillProps) {
  return <span className={`vv-status-pill vv-status-pill-${tone}`}>{children}</span>;
}

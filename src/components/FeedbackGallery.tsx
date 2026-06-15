import { useState } from 'react';
import { Activity, AlertTriangle, BellRing, Gauge, Loader2, Waves } from 'lucide-react';
import { MicLevelMeter, ProgressBar, ToastAlert } from './Feedback';

type FeedbackSpec = {
  enName: string;
  koName: string;
  role: string;
  state: string;
  usage: string;
};

const feedbackSpecs: FeedbackSpec[] = [
  {
    enName: 'Progress Bar',
    koName: '진행률 바',
    role: '처리 진행률과 플레이어 진행 상태를 짧은 선형 indicator로 보여줍니다.',
    state: 'idle, processing, completed, stalled',
    usage: '업로드, 음성 처리, preview 생성, player progress',
  },
  {
    enName: 'Mic Level Meter',
    koName: '마이크 레벨 미터',
    role: '녹음 중 입력 음량을 실시간 bar pattern으로 표현합니다.',
    state: 'silent, normal, hot, clipping',
    usage: '녹음 화면, microphone test, clipping warning',
  },
  {
    enName: 'Toast Alert',
    koName: '토스트 알림',
    role: '즉시 알아야 하는 녹음/권한/처리 상태를 짧게 안내합니다.',
    state: 'info, warning, danger, success',
    usage: '볼륨 경고, 권한 거부, 저장 완료, 업로드 실패',
  },
  {
    enName: 'Stage Indicator',
    koName: '처리 단계 인디케이터',
    role: '긴 비동기 작업의 현재 단계와 완료 단계를 명확히 보여줍니다.',
    state: 'completed, processing, queued, failed',
    usage: 'Audio ingest, pitch mapping, self-voice preview generation',
  },
  {
    enName: 'Quality Signal',
    koName: '품질 신호 배지',
    role: '평가 결과의 신뢰도와 주의가 필요한 영역을 badge로 압축합니다.',
    state: 'trusted, low confidence, disputed, unavailable',
    usage: '피치 신뢰도, clipping, guide unavailable, blocked output',
  },
];

export function FeedbackGalleryPreview() {
  const [progress, setProgress] = useState(68);
  const [micLevel, setMicLevel] = useState(76);

  return (
    <section className="vv-system-gallery" aria-label="피드백 컴포넌트">
      <div className="vv-system-hero">
        <span className="vv-system-hero-icon">
          <Waves aria-hidden size={22} />
        </span>
        <span className="vv-kicker">Feedback</span>
        <h2>피드백 컴포넌트</h2>
        <p>진행률, 마이크 입력, 토스트, 처리 단계처럼 사용자가 즉시 상태를 파악하는 UI입니다.</p>
      </div>

      <div className="vv-component-stack">
        <article className="vv-component-demo-card">
          <ComponentDemoHeader
            enName="Progress Bar"
            koName="진행률 바"
            role="처리 진행과 player progress를 같은 시각 언어로 표현합니다."
          />
          <label className="vv-range-label">
            <span>Processing {progress}%</span>
            <input
              aria-label="진행률 조정"
              max="100"
              min="0"
              onChange={(event) => setProgress(Number(event.currentTarget.value))}
              type="range"
              value={progress}
            />
          </label>
          <ProgressBar value={progress} />
          <div className="vv-feedback-progress-pair">
            <ProgressBar value={24} />
            <ProgressBar value={100} />
          </div>
        </article>

        <article className="vv-component-demo-card">
          <ComponentDemoHeader
            enName="Mic Level Meter"
            koName="마이크 레벨 미터"
            role="녹음 전/중의 입력 음량을 손쉽게 판별하게 합니다."
          />
          <label className="vv-range-label">
            <span>Mic input {micLevel}%</span>
            <input
              aria-label="마이크 레벨 조정"
              max="100"
              min="0"
              onChange={(event) => setMicLevel(Number(event.currentTarget.value))}
              type="range"
              value={micLevel}
            />
          </label>
          <MicLevelMeter level={micLevel} />
          <div className="vv-feedback-level-row">
            <span>Silent</span>
            <span>Normal</span>
            <span>Hot</span>
          </div>
        </article>

        <article className="vv-component-demo-card">
          <ComponentDemoHeader
            enName="Toast Alert"
            koName="토스트 알림"
            role="화면 흐름을 막지 않고 핵심 상태를 짧게 알려줍니다."
          />
          <ToastAlert>마이크 볼륨을 조금 낮춰주세요</ToastAlert>
          <div className="vv-toast-stack">
            <div className="vv-feedback-toast vv-feedback-toast-success">
              <BellRing aria-hidden size={15} />
              저장되었습니다
            </div>
            <div className="vv-feedback-toast vv-feedback-toast-info">
              <Loader2 aria-hidden size={15} />
              프리뷰를 생성하고 있습니다
            </div>
          </div>
        </article>

        <article className="vv-component-demo-card">
          <ComponentDemoHeader
            enName="Stage Indicator"
            koName="처리 단계 인디케이터"
            role="비동기 처리의 위치를 단계별로 설명합니다."
          />
          <div className="vv-stage-list">
            <StageItem label="Upload committed" state="completed" />
            <StageItem label="Audio ingest" state="completed" />
            <StageItem label="Pitch mapping" state="processing" />
            <StageItem label="Self-voice preview" state="queued" />
          </div>
        </article>

        <article className="vv-component-demo-card">
          <ComponentDemoHeader
            enName="Quality Signal"
            koName="품질 신호 배지"
            role="정상/주의/차단 상태를 compact badge로 보여줍니다."
          />
          <div className="vv-feedback-signal-grid">
            <SignalCard icon={Gauge} label="Trusted" value="91%" tone="success" />
            <SignalCard icon={AlertTriangle} label="Low confidence" value="02 ranges" tone="warning" />
            <SignalCard icon={Activity} label="Clipping" value="minor" tone="danger" />
          </div>
        </article>
      </div>
    </section>
  );
}

export function FeedbackGalleryCatalog() {
  const specIcons = [Gauge, Waves, BellRing, Loader2, Activity];

  return (
    <div className="vv-inspector-list">
      {feedbackSpecs.map((spec, index) => {
        const Icon = specIcons[index];

        return (
          <article className="vv-inspector-item" key={spec.enName}>
            <span className="vv-inspector-item-icon">
              <Icon aria-hidden size={20} />
            </span>
            <div>
              <strong>
                {spec.koName} <em>({spec.enName})</em>
              </strong>
              <p>{spec.role}</p>
              <small>
                {spec.usage} · {spec.state}
              </small>
            </div>
          </article>
        );
      })}
    </div>
  );
}

function StageItem({
  label,
  state,
}: {
  label: string;
  state: 'completed' | 'processing' | 'queued';
}) {
  return (
    <div className={`vv-stage-item is-${state}`}>
      <span className="vv-stage-dot" />
      <strong>{label}</strong>
      <em>{state}</em>
    </div>
  );
}

function SignalCard({
  icon: Icon,
  label,
  tone,
  value,
}: {
  icon: typeof Gauge;
  label: string;
  tone: 'danger' | 'success' | 'warning';
  value: string;
}) {
  return (
    <div className="vv-feedback-signal-card">
      <span className={`vv-card-status-icon vv-card-status-icon-${tone}`}>
        <Icon aria-hidden size={17} />
      </span>
      <strong>{label}</strong>
      <small>{value}</small>
    </div>
  );
}

function ComponentDemoHeader({
  enName,
  koName,
  role,
}: {
  enName: string;
  koName: string;
  role: string;
}) {
  return (
    <header className="vv-component-demo-header">
      <span className="vv-kicker">{enName}</span>
      <h3>
        {koName} <em>({enName})</em>
      </h3>
      <p>{role}</p>
    </header>
  );
}

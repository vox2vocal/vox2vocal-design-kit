import { useState } from 'react';
import {
  AlertTriangle,
  HelpCircle,
  Info,
  Loader2,
  MessageSquare,
  MousePointer2,
  ShieldCheck,
  TimerReset,
  X,
} from 'lucide-react';
import { GhostButton, PrimaryGradientButton } from './Buttons';
import { ProgressBar } from './Feedback';

type OverlaySpec = {
  enName: string;
  koName: string;
  role: string;
  state: string;
  usage: string;
};

const modalSpecs: OverlaySpec[] = [
  {
    enName: 'Basic Modal',
    koName: '기본 모달',
    role: '현재 맥락 위에 집중해야 하는 짧은 작업이나 정보를 띄웁니다.',
    state: 'open, closing, scroll, disabled action',
    usage: '프로필 설정, 권한 안내, 짧은 확인 작업',
  },
  {
    enName: 'Destructive Confirm Modal',
    koName: '위험 확인 모달',
    role: '삭제/철회처럼 되돌리기 어려운 action을 명확히 확인합니다.',
    state: 'default, confirmation required, loading, error',
    usage: '데이터 삭제 요청, 동의 철회, 세션 종료',
  },
];

const tooltipSpecs: OverlaySpec[] = [
  {
    enName: 'Icon Tooltip',
    koName: '아이콘 툴팁',
    role: '아이콘만 있는 버튼이나 생소한 control의 의미를 짧게 설명합니다.',
    state: 'hover, focus, delayed, disabled',
    usage: '프리리슨, 권한 상태, 메타 정보 아이콘',
  },
  {
    enName: 'Field Help Tooltip',
    koName: '필드 도움말 툴팁',
    role: '입력 조건이나 정책 문구를 화면 흐름을 막지 않고 알려줍니다.',
    state: 'hover, focus, long copy',
    usage: '비밀번호 조건, 보관 정책, 음성 처리 고지',
  },
];

const loadingModalSpecs: OverlaySpec[] = [
  {
    enName: 'Blocking Loading Modal',
    koName: '차단형 로딩 모달',
    role: '사용자가 기다려야 하는 중요 작업 진행 중 화면 이탈을 막습니다.',
    state: 'loading, progress, success, failed',
    usage: '로그인 처리, 회원가입, 결제/동의 처리',
  },
  {
    enName: 'Stage Loading Modal',
    koName: '단계형 로딩 모달',
    role: '긴 음성 처리 작업을 단계와 진행률로 설명합니다.',
    state: 'queued, processing, generating preview, completed',
    usage: '음성 업로드, pitch mapping, self-voice preview 생성',
  },
];

export function ModalGalleryPreview() {
  const [mode, setMode] = useState<'basic' | 'danger'>('basic');

  return (
    <section className="vv-system-gallery" aria-label="모달 컴포넌트">
      <div className="vv-system-hero">
        <span className="vv-system-hero-icon">
          <MessageSquare aria-hidden size={22} />
        </span>
        <span className="vv-kicker">Modal</span>
        <h2>모달 컴포넌트</h2>
        <p>집중이 필요한 확인, 안내, 위험 action을 현재 화면 위에 표시합니다.</p>
      </div>

      <div className="vv-component-stack">
        <article className="vv-component-demo-card">
          <ComponentDemoHeader
            enName="Modal Variants"
            koName="모달 변형"
            role="기본 모달과 위험 확인 모달의 톤 차이를 비교합니다."
          />
          <div className="vv-segmented-tabs" role="tablist" aria-label="모달 변형">
            <button
              aria-selected={mode === 'basic'}
              className={mode === 'basic' ? 'is-active' : ''}
              onClick={() => setMode('basic')}
              role="tab"
              type="button"
            >
              Basic
            </button>
            <button
              aria-selected={mode === 'danger'}
              className={mode === 'danger' ? 'is-active' : ''}
              onClick={() => setMode('danger')}
              role="tab"
              type="button"
            >
              Danger
            </button>
          </div>
          <div className="vv-modal-stage">
            <div className="vv-modal-backdrop" aria-hidden />
            <div
              aria-label={mode === 'danger' ? '데이터 삭제 확인' : '마이크 권한 안내'}
              aria-modal="true"
              className={`vv-dialog-card vv-dialog-card-${mode}`}
              role="dialog"
            >
              <button className="vv-dialog-close" aria-label="닫기" type="button">
                <X aria-hidden size={16} />
              </button>
              <span className="vv-dialog-icon">
                {mode === 'danger' ? (
                  <AlertTriangle aria-hidden size={22} />
                ) : (
                  <ShieldCheck aria-hidden size={22} />
                )}
              </span>
              <h3>{mode === 'danger' ? '데이터 삭제를 요청할까요?' : '마이크 접근을 허용해 주세요'}</h3>
              <p>
                {mode === 'danger'
                  ? '삭제 요청 후에는 raw audio와 job 결과가 단계적으로 제거됩니다.'
                  : '녹음 품질 분석을 위해 현재 세션에서만 마이크 입력을 사용합니다.'}
              </p>
              <div className="vv-dialog-actions">
                <GhostButton>취소</GhostButton>
                <PrimaryGradientButton>{mode === 'danger' ? '삭제 요청' : '허용하기'}</PrimaryGradientButton>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export function ModalGalleryCatalog() {
  return <OverlayCatalog specs={modalSpecs} icon={MessageSquare} />;
}

export function TooltipGalleryPreview() {
  return (
    <section className="vv-system-gallery" aria-label="툴팁 컴포넌트">
      <div className="vv-system-hero">
        <span className="vv-system-hero-icon">
          <HelpCircle aria-hidden size={22} />
        </span>
        <span className="vv-kicker">Tooltip</span>
        <h2>툴팁 컴포넌트</h2>
        <p>아이콘, 입력 조건, 정책 문구를 화면 흐름을 막지 않고 짧게 설명합니다.</p>
      </div>

      <div className="vv-component-stack">
        <article className="vv-component-demo-card">
          <ComponentDemoHeader
            enName="Tooltip Placement"
            koName="툴팁 배치"
            role="hover/focus 시 표시될 도움말의 위치와 길이를 정의합니다."
          />
          <div className="vv-tooltip-stage">
            <button className="vv-audio-icon-button" aria-label="프리리슨 설명" type="button">
              <MousePointer2 aria-hidden size={18} />
            </button>
            <div className="vv-tooltip-bubble vv-tooltip-bubble-top" role="tooltip">
              프리리슨은 녹음 시작 전에 자동으로 중지됩니다.
            </div>
          </div>
          <div className="vv-tooltip-help-row">
            <Info aria-hidden size={16} />
            <span>툴팁은 hover뿐 아니라 keyboard focus에서도 열려야 합니다.</span>
          </div>
        </article>
      </div>
    </section>
  );
}

export function TooltipGalleryCatalog() {
  return <OverlayCatalog specs={tooltipSpecs} icon={HelpCircle} />;
}

export function LoadingModalGalleryPreview() {
  return (
    <section className="vv-system-gallery" aria-label="로딩 모달 컴포넌트">
      <div className="vv-system-hero">
        <span className="vv-system-hero-icon">
          <Loader2 aria-hidden size={22} />
        </span>
        <span className="vv-kicker">Loading Modal</span>
        <h2>로딩 모달</h2>
        <p>로그인 처리나 음성 분석처럼 사용자가 기다려야 하는 작업을 단계별로 안내합니다.</p>
      </div>

      <div className="vv-component-stack">
        <article className="vv-component-demo-card">
          <ComponentDemoHeader
            enName="Stage Loading Modal"
            koName="단계형 로딩 모달"
            role="긴 작업의 현재 단계와 남은 흐름을 명확히 보여줍니다."
          />
          <div className="vv-loading-modal">
            <span className="vv-loading-spinner">
              <Loader2 aria-hidden size={26} />
            </span>
            <h3>프리뷰를 생성하고 있습니다</h3>
            <p>Pitch mapping과 self-voice preview를 순서대로 처리합니다.</p>
            <ProgressBar value={64} />
            <div className="vv-loading-stage-list">
              <LoadingStage done label="Upload committed" />
              <LoadingStage done label="Audio ingest" />
              <LoadingStage active label="Pitch mapping" />
              <LoadingStage label="Self-voice preview" />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export function LoadingModalGalleryCatalog() {
  return <OverlayCatalog specs={loadingModalSpecs} icon={TimerReset} />;
}

function OverlayCatalog({ icon: Icon, specs }: { icon: typeof MessageSquare; specs: OverlaySpec[] }) {
  return (
    <div className="vv-inspector-list">
      {specs.map((spec) => (
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
      ))}
    </div>
  );
}

function LoadingStage({
  active,
  done,
  label,
}: {
  active?: boolean;
  done?: boolean;
  label: string;
}) {
  return (
    <div className={`vv-loading-stage ${active ? 'is-active' : ''} ${done ? 'is-done' : ''}`}>
      <span />
      <strong>{label}</strong>
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

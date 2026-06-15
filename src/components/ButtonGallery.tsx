import { Loader2, RefreshCcw, Trash2, Upload } from 'lucide-react';
import {
  GhostButton,
  PrimaryGradientButton,
  RoundActionButton,
  SmallIconButton,
} from './Buttons';

type ButtonSpec = {
  enName: string;
  koName: string;
  role: string;
  state: string;
  usage: string;
};

const buttonSpecs: ButtonSpec[] = [
  {
    enName: 'Primary Gradient Button',
    koName: '주요 그라데이션 버튼',
    role: '화면의 핵심 완료/시작 action을 담당합니다.',
    state: 'default, hover, disabled, loading',
    usage: '로그인, 가입하기, 처리 시작, 프리뷰 재생 진입',
  },
  {
    enName: 'Ghost / Outline Button',
    koName: '보조 외곽선 버튼',
    role: '주요 CTA보다 낮은 우선순위의 보조 action을 제공합니다.',
    state: 'default, hover, disabled',
    usage: 'Fallback 업로드, 다시 녹음, 상태 보기',
  },
  {
    enName: 'Destructive Button',
    koName: '위험 액션 버튼',
    role: '삭제, 철회, 차단처럼 되돌리기 어려운 action을 명확히 구분합니다.',
    state: 'danger, hover, confirmation required',
    usage: '삭제 요청, 동의 철회, kill switch',
  },
  {
    enName: 'Round Action Button',
    koName: '원형 오디오 액션 버튼',
    role: '녹음, 정지, 재생처럼 오디오 작업에서 즉시 누르는 action입니다.',
    state: 'record, stop, play',
    usage: '녹음 화면, take review, preview player',
  },
  {
    enName: 'Small Icon Button',
    koName: '작은 아이콘 버튼',
    role: '도구성 toggle이나 작은 보조 action을 compact하게 제공합니다.',
    state: 'inactive, active, hover',
    usage: '프리리슨 토글, 볼륨, 설정 보조 액션',
  },
];

export function ButtonGalleryPreview() {
  return (
    <section className="vv-system-gallery" aria-label="버튼 컴포넌트">
      <div className="vv-system-hero">
        <span className="vv-system-hero-icon">
          <Upload aria-hidden size={22} />
        </span>
        <span className="vv-kicker">Buttons</span>
        <h2>버튼 컴포넌트</h2>
        <p>Vox2Vocal의 주요 CTA, 보조 action, 오디오 control, 위험 action 버튼입니다.</p>
      </div>

      <div className="vv-component-stack">
        <article className="vv-component-demo-card">
          <ComponentDemoHeader
            enName="Primary Gradient Button"
            koName="주요 그라데이션 버튼"
            role="한 화면에서 가장 중요한 action을 수행합니다."
          />
          <PrimaryGradientButton>처리 시작</PrimaryGradientButton>
          <PrimaryGradientButton disabled>동의 필요</PrimaryGradientButton>
          <button className="vv-button vv-button-primary vv-button-loading" type="button">
            <Loader2 aria-hidden size={18} />
            확인 중
          </button>
        </article>

        <article className="vv-component-demo-card">
          <ComponentDemoHeader
            enName="Ghost / Outline Button"
            koName="보조 외곽선 버튼"
            role="재시도, 업로드, 보조 이동처럼 낮은 우선순위 action에 사용합니다."
          />
          <GhostButton>
            <Upload aria-hidden size={16} />
            Fallback 업로드
          </GhostButton>
          <GhostButton>
            <RefreshCcw aria-hidden size={16} />
            다시 녹음
          </GhostButton>
        </article>

        <article className="vv-component-demo-card">
          <ComponentDemoHeader
            enName="Destructive Button"
            koName="위험 액션 버튼"
            role="삭제/철회처럼 사용자가 신중히 확인해야 하는 action입니다."
          />
          <button className="vv-button vv-button-danger" type="button">
            <Trash2 aria-hidden size={17} />
            데이터 삭제 요청
          </button>
        </article>

        <article className="vv-component-demo-card">
          <ComponentDemoHeader
            enName="Round Action Button"
            koName="원형 오디오 액션 버튼"
            role="녹음, 정지, 재생을 손쉽게 구분합니다."
          />
          <div className="vv-inline-actions">
            <RoundActionButton active label="녹음" variant="record" />
            <RoundActionButton label="정지" variant="stop" />
            <RoundActionButton label="재생" variant="play" />
            <SmallIconButton label="프리리슨 꺼짐" />
            <SmallIconButton active label="프리리슨 켜짐" />
          </div>
        </article>
      </div>
    </section>
  );
}

export function ButtonGalleryCatalog() {
  return (
    <div className="vv-inspector-list">
      {buttonSpecs.map((spec) => (
        <article className="vv-inspector-item" key={spec.enName}>
          <span className="vv-inspector-item-icon">
            <Upload aria-hidden size={20} />
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

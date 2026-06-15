import { Activity, AlertTriangle, BarChart3, ChevronRight, Music2, ShieldCheck } from 'lucide-react';
import { InfoPanel, SongSectionCard } from './Cards';

type CardSpec = {
  enName: string;
  koName: string;
  role: string;
  state: string;
  usage: string;
};

const cardSpecs: CardSpec[] = [
  {
    enName: 'Song / Section Card',
    koName: '곡/구간 선택 카드',
    role: '학습할 곡이나 특정 구간을 선택하는 리스트 카드입니다.',
    state: 'default, active, hover',
    usage: '곡 선택, verse/chorus 선택, take 선택',
  },
  {
    enName: 'Info / Alert Panel',
    koName: '정보/경고 패널',
    role: '일반 안내와 위험 알림을 surface 톤으로 구분합니다.',
    state: 'neutral, danger, warning',
    usage: '마이크 권한, 볼륨 경고, 데이터 보관 안내',
  },
  {
    enName: 'Metric Card',
    koName: '평가 메트릭 카드',
    role: '피치, 타이밍, 호흡 점수처럼 짧은 수치 정보를 보여줍니다.',
    state: 'normal, improved, needs attention',
    usage: '평가 결과, 연습 통계, 리포트 요약',
  },
  {
    enName: 'Domain Status Card',
    koName: '도메인 상태 카드',
    role: '권한, 처리 상태, 보안 상태를 compact한 카드로 표현합니다.',
    state: 'success, warning, danger, muted',
    usage: '권한 게이트, 업로드 처리, 세션 상태',
  },
  {
    enName: 'Action List Card',
    koName: '액션 리스트 카드',
    role: '다음 단계로 이동할 수 있는 반복형 리스트 항목입니다.',
    state: 'default, hover, selected',
    usage: '학습 플로우 진입, 결과 상세 이동, 설정 메뉴',
  },
];

export function CardGalleryPreview() {
  return (
    <section className="vv-system-gallery" aria-label="카드 컴포넌트">
      <div className="vv-system-hero">
        <span className="vv-system-hero-icon">
          <Music2 aria-hidden size={22} />
        </span>
        <span className="vv-kicker">Cards</span>
        <h2>카드 컴포넌트</h2>
        <p>선택, 안내, 메트릭, 상태 정보를 담는 Vox2Vocal의 핵심 surface 패턴입니다.</p>
      </div>

      <div className="vv-component-stack">
        <article className="vv-component-demo-card">
          <ComponentDemoHeader
            enName="Song / Section Card"
            koName="곡/구간 선택 카드"
            role="활성 구간은 red edge와 warm gradient로 강조합니다."
          />
          <SongSectionCard active meta="Verse 01 · 00:18" title="첫 번째 구간" />
          <SongSectionCard meta="Chorus · 00:42" title="후렴 고음 구간" />
        </article>

        <article className="vv-component-demo-card">
          <ComponentDemoHeader
            enName="Info / Alert Panel"
            koName="정보/경고 패널"
            role="안내는 neutral, 주의가 필요한 상태는 danger tone으로 표시합니다."
          />
          <InfoPanel title="마이크가 연결되었습니다">녹음을 시작하기 좋은 입력 레벨입니다.</InfoPanel>
          <InfoPanel title="볼륨이 높습니다" tone="danger">
            피크가 감지되었습니다. 마이크 입력을 조금 낮춰주세요.
          </InfoPanel>
        </article>

        <article className="vv-component-demo-card">
          <ComponentDemoHeader
            enName="Metric Card"
            koName="평가 메트릭 카드"
            role="숫자와 짧은 상태 문구를 한눈에 비교합니다."
          />
          <div className="vv-card-metric-grid">
            <MetricCard label="Pitch" value="88" suffix="%" trend="+12" />
            <MetricCard label="Timing" value="74" suffix="%" trend="-4" tone="warning" />
            <MetricCard label="Breath" value="Good" trend="stable" />
            <MetricCard label="Range" value="A4" trend="target" />
          </div>
        </article>

        <article className="vv-component-demo-card">
          <ComponentDemoHeader
            enName="Domain Status Card"
            koName="도메인 상태 카드"
            role="권한/처리/보안 상태를 작은 카드 묶음으로 표시합니다."
          />
          <div className="vv-card-status-grid">
            <StatusCard icon={ShieldCheck} label="Session" value="Secure" tone="success" />
            <StatusCard icon={Activity} label="Processing" value="Analyzing" tone="warning" />
            <StatusCard icon={AlertTriangle} label="Signal" value="Clipping" tone="danger" />
          </div>
        </article>

        <article className="vv-component-demo-card">
          <ComponentDemoHeader
            enName="Action List Card"
            koName="액션 리스트 카드"
            role="반복 리스트에서 주요 항목과 다음 이동을 함께 보여줍니다."
          />
          <button className="vv-action-list-card is-selected" type="button">
            <span className="vv-action-list-icon">
              <Music2 aria-hidden size={18} />
            </span>
            <span>
              <strong>오늘의 보컬 루틴</strong>
              <small>3개 구간 · 12분</small>
            </span>
            <ChevronRight aria-hidden className="vv-card-chevron" size={18} />
          </button>
          <button className="vv-action-list-card" type="button">
            <span className="vv-action-list-icon">
              <BarChart3 aria-hidden size={18} />
            </span>
            <span>
              <strong>최근 평가 리포트</strong>
              <small>Pitch 개선 추세 확인</small>
            </span>
            <ChevronRight aria-hidden className="vv-card-chevron" size={18} />
          </button>
        </article>
      </div>
    </section>
  );
}

export function CardGalleryCatalog() {
  const specIcons = [Music2, AlertTriangle, BarChart3, ShieldCheck, ChevronRight];

  return (
    <div className="vv-inspector-list">
      {cardSpecs.map((spec, index) => {
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

function MetricCard({
  label,
  suffix,
  tone = 'default',
  trend,
  value,
}: {
  label: string;
  suffix?: string;
  tone?: 'default' | 'warning';
  trend: string;
  value: string;
}) {
  return (
    <div className={`vv-card-metric vv-card-metric-${tone}`}>
      <span>{label}</span>
      <strong>
        {value}
        {suffix}
      </strong>
      <small>{trend}</small>
    </div>
  );
}

function StatusCard({
  icon: Icon,
  label,
  tone,
  value,
}: {
  icon: typeof ShieldCheck;
  label: string;
  tone: 'danger' | 'success' | 'warning';
  value: string;
}) {
  return (
    <div className="vv-card-status">
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

import { useState } from 'react';
import { Check, ChevronDown, CircleDot, ListChecks, Mic2, Music2, Settings2 } from 'lucide-react';

type ChoiceSpec = {
  enName: string;
  koName: string;
  role: string;
  state: string;
  usage: string;
};

const radioSpecs: ChoiceSpec[] = [
  {
    enName: 'Basic Radio Group',
    koName: '기본 라디오 그룹',
    role: '서로 배타적인 하나의 선택지를 고르게 합니다.',
    state: 'unchecked, checked, disabled, focus',
    usage: '성별/옵션 선택, recording source, 단일 필터',
  },
  {
    enName: 'Card Radio',
    koName: '카드 라디오',
    role: '설명이 필요한 선택지를 카드 surface로 비교합니다.',
    state: 'default, selected, disabled, recommended',
    usage: '요금제, 출력 방식, 분석 모드, 보컬 타입',
  },
];

const selectSpecs: ChoiceSpec[] = [
  {
    enName: 'Native Select',
    koName: '네이티브 셀렉트',
    role: '플랫폼 기본 동작을 유지하며 짧은 옵션 목록을 선택합니다.',
    state: 'closed, open, disabled, selected',
    usage: '언어, 키, 장치, 단순 option set',
  },
  {
    enName: 'Custom Select',
    koName: '커스텀 셀렉트',
    role: '브랜드 surface 안에서 옵션과 보조 설명을 함께 보여줍니다.',
    state: 'closed, open, selected, error',
    usage: '마이크 장치, song package, target section',
  },
];

export function RadioGalleryPreview() {
  const [source, setSource] = useState('microphone');
  const [mode, setMode] = useState('balanced');

  return (
    <section className="vv-system-gallery" aria-label="라디오 컴포넌트">
      <div className="vv-system-hero">
        <span className="vv-system-hero-icon">
          <CircleDot aria-hidden size={22} />
        </span>
        <span className="vv-kicker">Radio</span>
        <h2>라디오 컴포넌트</h2>
        <p>상호 배타적인 선택지와 설명형 카드 선택을 처리하는 입력 컴포넌트입니다.</p>
      </div>

      <div className="vv-component-stack">
        <article className="vv-component-demo-card">
          <ComponentDemoHeader
            enName="Basic Radio Group"
            koName="기본 라디오 그룹"
            role="하나의 option만 선택 가능한 설정에 사용합니다."
          />
          <div className="vv-radio-group" role="radiogroup" aria-label="녹음 소스">
            <RadioOption
              checked={source === 'microphone'}
              label="Microphone"
              onSelect={() => setSource('microphone')}
              value="실시간 녹음"
            />
            <RadioOption
              checked={source === 'upload'}
              label="File upload"
              onSelect={() => setSource('upload')}
              value="fallback 업로드"
            />
          </div>
        </article>

        <article className="vv-component-demo-card">
          <ComponentDemoHeader
            enName="Card Radio"
            koName="카드 라디오"
            role="복잡한 선택지를 설명과 함께 비교합니다."
          />
          <div className="vv-card-radio-grid">
            <CardRadio
              checked={mode === 'fast'}
              icon={Mic2}
              label="Fast"
              meta="빠른 preview, 낮은 정밀도"
              onSelect={() => setMode('fast')}
            />
            <CardRadio
              checked={mode === 'balanced'}
              icon={Music2}
              label="Balanced"
              meta="권장 분석 품질"
              onSelect={() => setMode('balanced')}
              recommended
            />
          </div>
        </article>
      </div>
    </section>
  );
}

export function RadioGalleryCatalog() {
  return <ChoiceCatalog specs={radioSpecs} icon={CircleDot} />;
}

export function SelectGalleryPreview() {
  const [device, setDevice] = useState('Studio Mic');
  const [quality, setQuality] = useState('Balanced');

  return (
    <section className="vv-system-gallery" aria-label="셀렉트 컴포넌트">
      <div className="vv-system-hero">
        <span className="vv-system-hero-icon">
          <ListChecks aria-hidden size={22} />
        </span>
        <span className="vv-kicker">Select</span>
        <h2>셀렉트 컴포넌트</h2>
        <p>장치, 분석 모드, 섹션처럼 정해진 옵션 목록에서 하나를 선택합니다.</p>
      </div>

      <div className="vv-component-stack">
        <article className="vv-component-demo-card">
          <ComponentDemoHeader
            enName="Native Select"
            koName="네이티브 셀렉트"
            role="모바일/웹 플랫폼 기본 선택 경험을 유지합니다."
          />
          <label className="vv-select-native">
            <span>Input device</span>
            <select value={device} onChange={(event) => setDevice(event.currentTarget.value)}>
              <option>Studio Mic</option>
              <option>Built-in Mic</option>
              <option>External Audio Interface</option>
            </select>
          </label>
        </article>

        <article className="vv-component-demo-card">
          <ComponentDemoHeader
            enName="Custom Select"
            koName="커스텀 셀렉트"
            role="옵션명과 설명을 같은 surface에서 보여줍니다."
          />
          <div className="vv-custom-select" aria-label="분석 품질 선택">
            <button className="vv-select-trigger" type="button">
              <span>
                <strong>{quality}</strong>
                <small>self-voice preview analysis mode</small>
              </span>
              <ChevronDown aria-hidden size={17} />
            </button>
            <div className="vv-select-menu">
              {['Fast', 'Balanced', 'Detailed'].map((option) => (
                <button
                  className={quality === option ? 'is-selected' : ''}
                  key={option}
                  onClick={() => setQuality(option)}
                  type="button"
                >
                  <span>
                    <strong>{option}</strong>
                    <small>{option === 'Balanced' ? '권장 옵션' : '사용 상황에 맞게 선택'}</small>
                  </span>
                  {quality === option ? <Check aria-hidden size={15} /> : null}
                </button>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export function SelectGalleryCatalog() {
  return <ChoiceCatalog specs={selectSpecs} icon={ListChecks} />;
}

function ChoiceCatalog({ icon: Icon, specs }: { icon: typeof CircleDot; specs: ChoiceSpec[] }) {
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

function RadioOption({
  checked,
  label,
  onSelect,
  value,
}: {
  checked: boolean;
  label: string;
  onSelect: () => void;
  value: string;
}) {
  return (
    <button
      aria-checked={checked}
      className={`vv-radio-option ${checked ? 'is-selected' : ''}`}
      onClick={onSelect}
      role="radio"
      type="button"
    >
      <span className="vv-radio-mark">
        <span />
      </span>
      <span>
        <strong>{label}</strong>
        <small>{value}</small>
      </span>
    </button>
  );
}

function CardRadio({
  checked,
  icon: Icon,
  label,
  meta,
  onSelect,
  recommended,
}: {
  checked: boolean;
  icon: typeof Settings2;
  label: string;
  meta: string;
  onSelect: () => void;
  recommended?: boolean;
}) {
  return (
    <button
      aria-checked={checked}
      className={`vv-card-radio ${checked ? 'is-selected' : ''}`}
      onClick={onSelect}
      role="radio"
      type="button"
    >
      <span className="vv-card-radio-icon">
        <Icon aria-hidden size={18} />
      </span>
      <strong>{label}</strong>
      <small>{meta}</small>
      {recommended ? <em>Recommended</em> : null}
    </button>
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

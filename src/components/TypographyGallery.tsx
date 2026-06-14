import { Type } from 'lucide-react';

type TypeSpec = {
  className: string;
  enName: string;
  koName: string;
  lineHeight: string;
  sample: string;
  size: string;
  usage: string;
  weight: string;
};

const typographySpecs: TypeSpec[] = [
  {
    className: 'vv-type-display',
    enName: 'Display',
    koName: '디스플레이',
    lineHeight: '1.2',
    sample: 'Vox2Vocal',
    size: '32-40px',
    usage: '제품명, 브랜드 첫 화면, 강한 시각적 인상',
    weight: '700',
  },
  {
    className: 'vv-type-h1',
    enName: 'H1',
    koName: '화면 제목',
    lineHeight: '1.25',
    sample: 'Learner Core Flow',
    size: '28-32px',
    usage: '화면 최상위 제목',
    weight: '700',
  },
  {
    className: 'vv-type-h2',
    enName: 'H2',
    koName: '섹션 제목',
    lineHeight: '1.28',
    sample: '프리뷰 재생 및 평가',
    size: '24-28px',
    usage: '주요 섹션 제목, 결과 영역 제목',
    weight: '700',
  },
  {
    className: 'vv-type-h3',
    enName: 'H3',
    koName: '카드 제목',
    lineHeight: '1.35',
    sample: 'Mist intro 0:00-0:28',
    size: '20-22px',
    usage: '카드/패널의 제목',
    weight: '650-700',
  },
  {
    className: 'vv-type-body',
    enName: 'Body',
    koName: '본문',
    lineHeight: '1.5',
    sample: '본인 목소리 take를 녹음하고 preview를 생성합니다.',
    size: '16px',
    usage: '기본 본문, 설명 문구',
    weight: '400',
  },
  {
    className: 'vv-type-body-strong',
    enName: 'Body Strong',
    koName: '강조 본문',
    lineHeight: '1.5',
    sample: '처리 시작 전에 동의 상태를 확인하세요.',
    size: '16px',
    usage: '중요 안내, 선택된 값, 강조 텍스트',
    weight: '600',
  },
  {
    className: 'vv-type-label',
    enName: 'Label',
    koName: '라벨',
    lineHeight: '1.35',
    sample: 'Consent Snapshot',
    size: '14px',
    usage: '입력 라벨, 필드명, 상태 그룹 제목',
    weight: '600',
  },
  {
    className: 'vv-type-caption',
    enName: 'Caption',
    koName: '보조 캡션',
    lineHeight: '1.35',
    sample: 'app-only playback · no download/share',
    size: '12px',
    usage: '메타 정보, 보조 설명, 작은 상태 문구',
    weight: '400',
  },
  {
    className: 'vv-type-button',
    enName: 'Button',
    koName: '버튼',
    lineHeight: '1.3',
    sample: '처리 시작',
    size: '15px',
    usage: 'CTA, 액션 버튼',
    weight: '700',
  },
  {
    className: 'vv-type-mono',
    enName: 'Mono',
    koName: '모노',
    lineHeight: '1.35',
    sample: '00:17 / 00:28 · job_7F31',
    size: '13px',
    usage: 'timecode, job id, file size, 기술값',
    weight: '500',
  },
  {
    className: 'vv-type-timer',
    enName: 'Timer Mono',
    koName: '타이머',
    lineHeight: '1',
    sample: '00:17',
    size: '48-60px',
    usage: '녹음 타이머, 큰 시간 표시',
    weight: '300',
  },
];

export function TypographyGalleryPreview() {
  return (
    <section className="vv-system-gallery" aria-label="타이포그래피 시스템">
      <div className="vv-system-hero">
        <span className="vv-system-hero-icon">
          <Type aria-hidden size={22} />
        </span>
        <span className="vv-kicker">Typography</span>
        <h2>폰트 시스템</h2>
        <p>Pretendard 또는 Noto Sans KR 계열을 기준으로 한 Vox2Vocal 타입 스케일입니다.</p>
      </div>

      <div className="vv-type-spec-list">
        {typographySpecs.map((spec) => (
          <article className="vv-type-spec-card" key={spec.enName}>
            <div>
              <span className="vv-kicker">{spec.enName}</span>
              <h3>
                {spec.koName} <em>({spec.enName})</em>
              </h3>
            </div>
            <p className={spec.className}>{spec.sample}</p>
            <dl>
              <div>
                <dt>Size</dt>
                <dd>{spec.size}</dd>
              </div>
              <div>
                <dt>Weight</dt>
                <dd>{spec.weight}</dd>
              </div>
              <div>
                <dt>Line</dt>
                <dd>{spec.lineHeight}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}

export function TypographyGalleryCatalog() {
  return (
    <div className="vv-inspector-list">
      {typographySpecs.map((spec) => (
        <article className="vv-inspector-item vv-type-inspector-item" key={spec.enName}>
          <span className="vv-inspector-item-icon">
            <Type aria-hidden size={20} />
          </span>
          <div>
            <strong>
              {spec.koName} <em>({spec.enName})</em>
            </strong>
            <p>{spec.usage}</p>
            <small>
              {spec.size} · {spec.weight} · line {spec.lineHeight}
            </small>
          </div>
        </article>
      ))}
    </div>
  );
}

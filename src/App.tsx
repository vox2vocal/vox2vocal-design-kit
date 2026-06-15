import { useMemo, useState } from 'react';
import logo from './assets/logo.png';
import {
  PrimaryGradientButton,
  RoundActionButton,
  SmallIconButton,
} from './components/Buttons';
import {
  AudioControlsGalleryCatalog,
  AudioControlsGalleryPreview,
} from './components/AudioControlsGallery';
import { ButtonGalleryCatalog, ButtonGalleryPreview } from './components/ButtonGallery';
import { InfoPanel, SongSectionCard } from './components/Cards';
import { CardGalleryCatalog, CardGalleryPreview } from './components/CardGallery';
import { MicLevelMeter, ProgressBar, ToastAlert } from './components/Feedback';
import { FeedbackGalleryCatalog, FeedbackGalleryPreview } from './components/FeedbackGallery';
import { FormGalleryCatalog, FormGalleryPreview } from './components/FormGallery';
import { CustomCheckbox, FailureTagChip, TextInput } from './components/FormControls';
import { IconGalleryCatalog, IconGalleryPreview } from './components/IconGallery';
import {
  type LearnerComponentId,
  LearnerCoreFlowCatalog,
  LearnerCoreFlowPreview,
} from './components/LearnerCoreFlow';
import { MobileShell, TopNav } from './components/Layout';
import { TypographyGalleryCatalog, TypographyGalleryPreview } from './components/TypographyGallery';
import { designTokens } from './design-tokens';

const sectionGroups = [
  {
    label: 'Foundations',
    description: '브랜드와 UI의 기본 언어',
    sections: ['Tokens', 'Icons', 'Typography'],
  },
  {
    label: 'Interaction Controls',
    description: '사용자 입력과 주요 액션',
    sections: ['Buttons', 'Forms'],
  },
  {
    label: 'Audio Experience',
    description: '음성 입력, 재생, 상태 피드백',
    sections: ['Audio Controls', 'Feedback'],
  },
  {
    label: 'Content Surfaces',
    description: '정보를 담는 카드와 패널',
    sections: ['Cards'],
  },
  {
    label: 'Product Flows',
    description: 'Vox2Vocal 도메인 화면 흐름',
    sections: ['Learner Flow'],
  },
] as const;
type Section = (typeof sectionGroups)[number]['sections'][number];

const sectionMeta: Record<
  Section,
  {
    group: string;
    inspectorTitle: string;
    navLabel: string;
    shortTitle: string;
    summary: string;
  }
> = {
  Tokens: {
    group: 'Foundations',
    inspectorTitle: 'Design Tokens',
    navLabel: 'Design Tokens',
    shortTitle: 'Tokens',
    summary: '색상, radius, glow, surface 기준',
  },
  Icons: {
    group: 'Foundations',
    inspectorTitle: 'Icon Library',
    navLabel: 'Icon Library',
    shortTitle: 'Icons',
    summary: 'Lucide 기반 기능 아이콘 체계',
  },
  Typography: {
    group: 'Foundations',
    inspectorTitle: 'Typography Scale',
    navLabel: 'Typography',
    shortTitle: 'Type',
    summary: '한국어/영문 화면 글자 체계',
  },
  Buttons: {
    group: 'Interaction Controls',
    inspectorTitle: 'Button Components',
    navLabel: 'Buttons',
    shortTitle: 'Buttons',
    summary: 'CTA, 보조, 위험, 오디오 액션',
  },
  Forms: {
    group: 'Interaction Controls',
    inspectorTitle: 'Form Components',
    navLabel: 'Forms',
    shortTitle: 'Forms',
    summary: '입력창, 체크박스, 태그, 검증 메시지',
  },
  'Audio Controls': {
    group: 'Audio Experience',
    inspectorTitle: 'Audio Control Components',
    navLabel: 'Audio Controls',
    shortTitle: 'Audio',
    summary: '음성 게이지, 볼륨, 출력, 입력 감도',
  },
  Feedback: {
    group: 'Audio Experience',
    inspectorTitle: 'Feedback Components',
    navLabel: 'Feedback',
    shortTitle: 'Feedback',
    summary: '진행률, 토스트, 처리 단계, 품질 신호',
  },
  Cards: {
    group: 'Content Surfaces',
    inspectorTitle: 'Card Components',
    navLabel: 'Cards & Panels',
    shortTitle: 'Cards',
    summary: '선택 카드, 안내 패널, 메트릭 surface',
  },
  'Learner Flow': {
    group: 'Product Flows',
    inspectorTitle: 'Learner Components',
    navLabel: 'Learner Flow',
    shortTitle: 'Learner Flow',
    summary: '곡 선택부터 프리뷰 평가까지의 도메인 흐름',
  },
};

const tokenGroups = [
  {
    label: 'Backgrounds',
    values: designTokens.colors.background,
  },
  {
    label: 'Primary Accents',
    values: designTokens.colors.accent,
  },
  {
    label: 'Text & Icons',
    values: designTokens.colors.text,
  },
  {
    label: 'Borders',
    values: designTokens.colors.border,
  },
];

function App() {
  const [activeSection, setActiveSection] = useState<Section>('Tokens');
  const [termsAccepted, setTermsAccepted] = useState(true);
  const [isRecording, setIsRecording] = useState(true);
  const [isPrelistenOn, setIsPrelistenOn] = useState(false);
  const [progress, setProgress] = useState(64);
  const [selectedTags, setSelectedTags] = useState(['Pitch']);
  const [selectedLearnerComponent, setSelectedLearnerComponent] =
    useState<LearnerComponentId>('access-eligibility');

  const meterLevel = useMemo(() => (isRecording ? 76 : 24), [isRecording]);
  const activeMeta = sectionMeta[activeSection];

  const toggleTag = (tag: string) => {
    setSelectedTags((current) =>
      current.includes(tag) ? current.filter((item) => item !== tag) : [...current, tag],
    );
  };

  return (
    <div className="vv-app">
      <div className="vv-ambient-glow" aria-hidden />

      <section className="vv-kit-frame" aria-label="Vox2Vocal 디자인 키트">
        <aside className="vv-brand-pane">
          <div className="vv-brand-lockup">
            <img alt="Vox2Vocal" src={logo} />
            <div>
              <p>Vox2Vocal</p>
              <h1>Design Kit</h1>
            </div>
          </div>

          <div className="vv-pane-block">
            <span className="vv-kicker">Component Architecture</span>
            <strong>{activeMeta.group}</strong>
            <p>{activeMeta.summary}</p>
          </div>

          <nav className="vv-section-tabs" aria-label="컴포넌트 섹션">
            {sectionGroups.map((group) => (
              <div className="vv-section-group" key={group.label}>
                <div className="vv-section-group-header">
                  <span>{group.label}</span>
                  <small>{group.description}</small>
                </div>
                {group.sections.map((section) => (
                  <button
                    className={section === activeSection ? 'is-active' : ''}
                    data-section={section}
                    key={section}
                    onClick={() => setActiveSection(section)}
                    type="button"
                  >
                    <span>{sectionMeta[section].navLabel}</span>
                    <small>{sectionMeta[section].summary}</small>
                  </button>
                ))}
              </div>
            ))}
          </nav>
        </aside>

        <div className="vv-preview-column">
          <MobileShell>
            <TopNav
              title={activeMeta.shortTitle}
            />
            <div className="vv-mobile-scroll">
              {activeSection === 'Learner Flow' ? (
                <LearnerCoreFlowPreview
                  onSelect={setSelectedLearnerComponent}
                  selectedId={selectedLearnerComponent}
                />
              ) : activeSection === 'Icons' ? (
                <IconGalleryPreview />
              ) : activeSection === 'Typography' ? (
                <TypographyGalleryPreview />
              ) : activeSection === 'Buttons' ? (
                <ButtonGalleryPreview />
              ) : activeSection === 'Forms' ? (
                <FormGalleryPreview />
              ) : activeSection === 'Cards' ? (
                <CardGalleryPreview />
              ) : activeSection === 'Feedback' ? (
                <FeedbackGalleryPreview />
              ) : activeSection === 'Audio Controls' ? (
                <AudioControlsGalleryPreview />
              ) : (
                <>
                  <section className="vv-preview-hero">
                    <div className="vv-preview-logo">
                      <img alt="" src={logo} />
                    </div>
                    <h2>Awaken Your Voice</h2>
                    <p>녹음, 평가, 로그인 화면에 공통 적용되는 Vox2Vocal UI primitives.</p>
                  </section>

                  <section className="vv-preview-section">
                    <h3>Actions</h3>
                    <PrimaryGradientButton>시작하기</PrimaryGradientButton>
                    <div className="vv-inline-actions">
                      <RoundActionButton
                        active={isRecording}
                        label="녹음"
                        onClick={() => setIsRecording(true)}
                        variant="record"
                      />
                      <RoundActionButton
                        active={!isRecording}
                        label="정지"
                        onClick={() => setIsRecording(false)}
                        variant="stop"
                      />
                      <RoundActionButton label="재생" variant="play" />
                      <SmallIconButton
                        active={isPrelistenOn}
                        label="프리리슨"
                        onClick={() => setIsPrelistenOn((value) => !value)}
                      />
                    </div>
                  </section>

                  <section className="vv-preview-section">
                    <h3>Forms</h3>
                    <TextInput icon="email" label="이메일" placeholder="이메일 주소" type="email" />
                    <TextInput
                      icon="password"
                      label="비밀번호"
                      placeholder="비밀번호"
                      type="password"
                    />
                    <CustomCheckbox checked={termsAccepted} onChange={setTermsAccepted}>
                      이용약관 및 개인정보 처리방침에 동의합니다.
                    </CustomCheckbox>
                    <PrimaryGradientButton disabled={!termsAccepted}>가입하기</PrimaryGradientButton>
                  </section>

                  <section className="vv-preview-section">
                    <h3>Selection</h3>
                    <SongSectionCard active meta="Verse 01 · 00:18" title="첫 번째 구간" />
                    <SongSectionCard meta="Chorus · 00:42" title="후렴 고음 구간" />
                    <div className="vv-chip-row">
                      {['Pitch', 'Timing', 'Breath'].map((tag) => (
                        <FailureTagChip
                          key={tag}
                          onClick={() => toggleTag(tag)}
                          selected={selectedTags.includes(tag)}
                        >
                          {tag}
                        </FailureTagChip>
                      ))}
                    </div>
                  </section>

                  <section className="vv-preview-section">
                    <h3>Feedback</h3>
                    <label className="vv-range-label">
                      <span>Progress</span>
                      <input
                        aria-label="진행률"
                        max="100"
                        min="0"
                        onChange={(event) => setProgress(Number(event.currentTarget.value))}
                        type="range"
                        value={progress}
                      />
                    </label>
                    <ProgressBar value={progress} />
                    <MicLevelMeter level={meterLevel} />
                    <InfoPanel title="볼륨이 높습니다" tone="danger">
                      마이크 입력이 피크에 가까워지고 있습니다.
                    </InfoPanel>
                    <ToastAlert>마이크 볼륨을 조금 낮춰주세요</ToastAlert>
                  </section>
                </>
              )}
            </div>
          </MobileShell>
        </div>

        <aside className="vv-inspector">
          <div className="vv-inspector-header">
            <span className="vv-kicker">{activeMeta.group}</span>
            <h2>{activeMeta.inspectorTitle}</h2>
            <p>{activeMeta.summary}</p>
          </div>

          {activeSection === 'Tokens' ? (
            <div className="vv-token-list">
              {tokenGroups.map((group) => (
                <section className="vv-token-group" key={group.label}>
                  <h3>{group.label}</h3>
                  {Object.entries(group.values).map(([name, value]) => (
                    <div className="vv-token-row" key={name}>
                      <span className="vv-swatch" style={{ background: value }} />
                      <div>
                        <strong>{name}</strong>
                        <code>{value}</code>
                      </div>
                    </div>
                  ))}
                </section>
              ))}
            </div>
          ) : activeSection === 'Icons' ? (
            <IconGalleryCatalog />
          ) : activeSection === 'Typography' ? (
            <TypographyGalleryCatalog />
          ) : activeSection === 'Buttons' ? (
            <ButtonGalleryCatalog />
          ) : activeSection === 'Forms' ? (
            <FormGalleryCatalog />
          ) : activeSection === 'Cards' ? (
            <CardGalleryCatalog />
          ) : activeSection === 'Feedback' ? (
            <FeedbackGalleryCatalog />
          ) : activeSection === 'Audio Controls' ? (
            <AudioControlsGalleryCatalog />
          ) : activeSection === 'Learner Flow' ? (
            <LearnerCoreFlowCatalog
              onSelect={setSelectedLearnerComponent}
              selectedId={selectedLearnerComponent}
            />
          ) : (
            null
          )}
        </aside>
      </section>
    </div>
  );
}

export default App;

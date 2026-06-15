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

const sections = [
  'Tokens',
  'Icons',
  'Typography',
  'Buttons',
  'Forms',
  'Cards',
  'Feedback',
  'Audio Controls',
  'Learner Flow',
] as const;
type Section = (typeof sections)[number];

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
            <span className="vv-kicker">Mode</span>
            <strong>Black & Red / Neon Audio</strong>
            <p>모바일 우선, 웹 중앙 고정폭 컨테이너 기준의 UI 컴포넌트 작업대입니다.</p>
          </div>

          <nav className="vv-section-tabs" aria-label="컴포넌트 섹션">
            {sections.map((section) => (
              <button
                className={section === activeSection ? 'is-active' : ''}
                key={section}
                onClick={() => setActiveSection(section)}
                type="button"
              >
                {section}
              </button>
            ))}
          </nav>
        </aside>

        <div className="vv-preview-column">
          <MobileShell>
            <TopNav
              title={
                activeSection === 'Learner Flow'
                  ? 'Learner Flow'
                  : activeSection === 'Icons'
                    ? 'Icons'
                    : activeSection === 'Typography'
                      ? 'Typography'
                      : activeSection === 'Buttons'
                        ? 'Buttons'
                        : activeSection === 'Forms'
                          ? 'Forms'
                          : activeSection === 'Cards'
                            ? 'Cards'
                            : activeSection === 'Feedback'
                              ? 'Feedback'
                              : activeSection === 'Audio Controls'
                                ? 'Audio'
                                : 'Component Preview'
              }
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
            <span className="vv-kicker">{activeSection}</span>
            <h2>
              {activeSection === 'Tokens'
                ? 'Design Tokens'
                : activeSection === 'Icons'
                  ? 'Icon Library'
                  : activeSection === 'Typography'
                    ? 'Typography Scale'
                    : activeSection === 'Buttons'
                      ? 'Button Components'
                      : activeSection === 'Forms'
                        ? 'Form Components'
                        : activeSection === 'Cards'
                          ? 'Card Components'
                          : activeSection === 'Feedback'
                            ? 'Feedback Components'
                            : activeSection === 'Audio Controls'
                              ? 'Audio Control Components'
                              : activeSection === 'Learner Flow'
                                ? 'Learner Components'
                                : 'Component States'}
            </h2>
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

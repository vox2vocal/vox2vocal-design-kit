import { useMemo, useState } from 'react';
import {
  AudioLines,
  Gauge,
  Headphones,
  Mic2,
  SlidersHorizontal,
  Volume1,
  Volume2,
  VolumeX,
  type LucideIcon,
} from 'lucide-react';
import { MicLevelMeter } from './Feedback';

type AudioControlSpec = {
  enName: string;
  koName: string;
  role: string;
  state: string;
  usage: string;
  icon: LucideIcon;
};

const audioControlSpecs: AudioControlSpec[] = [
  {
    enName: 'Voice Input Gauge',
    koName: '음성 입력 게이지',
    role: '사용자의 현재 음성 입력 수준을 원형 gauge와 수치로 표시합니다.',
    state: 'silent, speaking, hot, clipping',
    usage: '마이크 테스트, 녹음 전 준비, 실시간 입력 확인',
    icon: Mic2,
  },
  {
    enName: 'Peak / Wave Meter',
    koName: '피크/파형 미터',
    role: '짧은 시간 안의 음량 변화와 피크 위험을 bar pattern으로 보여줍니다.',
    state: 'low, normal, peak, clipping',
    usage: '녹음 중 wave preview, clipping warning, take review',
    icon: AudioLines,
  },
  {
    enName: 'Volume Slider',
    koName: '볼륨 슬라이더',
    role: '프리뷰/가이드/재생 음량을 사용자가 직접 조절합니다.',
    state: 'muted, low, medium, high',
    usage: 'preview player, pre-listen, guide playback',
    icon: Volume2,
  },
  {
    enName: 'Gain And Noise Gate',
    koName: '입력 게인/노이즈 게이트',
    role: '입력 감도와 배경 소음 차단 threshold를 조절합니다.',
    state: 'auto, manual, too quiet, too sensitive',
    usage: 'microphone calibration, recording setup',
    icon: SlidersHorizontal,
  },
  {
    enName: 'Audio Output Selector',
    koName: '오디오 출력 선택',
    role: '스피커/헤드폰 출력 상태와 권장 출력 장치를 선택합니다.',
    state: 'speaker, headphones, unavailable',
    usage: 'playback setting, preview listening, device setup',
    icon: Headphones,
  },
];

const waveBars = [18, 30, 42, 52, 38, 24, 58, 70, 46, 34, 62, 48, 28, 40, 56, 22];

export function AudioControlsGalleryPreview() {
  const [voiceLevel, setVoiceLevel] = useState(72);
  const [volume, setVolume] = useState(64);
  const [isMuted, setIsMuted] = useState(false);
  const [gain, setGain] = useState(48);
  const [noiseGate, setNoiseGate] = useState(36);
  const [outputMode, setOutputMode] = useState<'headphones' | 'speaker'>('headphones');

  const effectiveVolume = isMuted ? 0 : volume;
  const volumeIcon = useMemo(() => {
    if (isMuted || volume === 0) {
      return VolumeX;
    }

    return volume > 55 ? Volume2 : Volume1;
  }, [isMuted, volume]);

  const VolumeIcon = volumeIcon;

  return (
    <section className="vv-system-gallery" aria-label="오디오 컨트롤 컴포넌트">
      <div className="vv-system-hero">
        <span className="vv-system-hero-icon">
          <AudioLines aria-hidden size={22} />
        </span>
        <span className="vv-kicker">Audio Controls</span>
        <h2>오디오 컨트롤</h2>
        <p>음성 입력 게이지, 볼륨 조절, 음소거, 입력 감도, 출력 장치를 관리하는 컴포넌트입니다.</p>
      </div>

      <div className="vv-component-stack">
        <article className="vv-component-demo-card">
          <ComponentDemoHeader
            enName="Voice Input Gauge"
            koName="음성 입력 게이지"
            role="현재 음성 입력 강도를 원형 gauge와 meter로 함께 보여줍니다."
          />
          <div className="vv-audio-gauge-layout">
            <div
              aria-label={`음성 입력 ${voiceLevel}%`}
              className="vv-voice-gauge"
              role="meter"
              style={{
                background: `conic-gradient(var(--vv-red-light) ${voiceLevel * 3.6}deg, rgba(39, 39, 42, 0.9) 0deg)`,
              }}
            >
              <div>
                <Mic2 aria-hidden size={20} />
                <strong>{voiceLevel}%</strong>
                <span>{voiceLevel > 82 ? 'Hot' : voiceLevel > 42 ? 'Speaking' : 'Quiet'}</span>
              </div>
            </div>
            <div className="vv-audio-gauge-controls">
              <label className="vv-range-label">
                <span>Voice input {voiceLevel}%</span>
                <input
                  aria-label="음성 입력 레벨 조정"
                  max="100"
                  min="0"
                  onChange={(event) => setVoiceLevel(Number(event.currentTarget.value))}
                  type="range"
                  value={voiceLevel}
                />
              </label>
              <MicLevelMeter level={voiceLevel} />
            </div>
          </div>
        </article>

        <article className="vv-component-demo-card">
          <ComponentDemoHeader
            enName="Peak / Wave Meter"
            koName="피크/파형 미터"
            role="파형 변화와 피크 위험 영역을 bar 상태로 보여줍니다."
          />
          <div className="vv-audio-wave-meter" aria-label="피크 파형 미터">
            {waveBars.map((height, index) => (
              <span
                className={index > 6 && index < 11 ? 'is-peak' : ''}
                key={`${height}-${index}`}
                style={{ height: `${height}px` }}
              />
            ))}
          </div>
          <div className="vv-audio-meter-legend">
            <span>Low</span>
            <span>Normal</span>
            <span>Peak</span>
          </div>
        </article>

        <article className="vv-component-demo-card">
          <ComponentDemoHeader
            enName="Volume Slider"
            koName="볼륨 슬라이더"
            role="재생 볼륨과 음소거 상태를 한 줄에서 제어합니다."
          />
          <div className="vv-volume-control">
            <button
              aria-label={isMuted ? '음소거 해제' : '음소거'}
              aria-pressed={isMuted}
              className={`vv-audio-icon-button ${isMuted ? 'is-active' : ''}`}
              onClick={() => setIsMuted((value) => !value)}
              type="button"
            >
              <VolumeIcon aria-hidden size={18} />
            </button>
            <label className="vv-volume-slider">
              <span className="sr-only">볼륨 조절</span>
              <input
                aria-label="볼륨 조절"
                max="100"
                min="0"
                onChange={(event) => {
                  setVolume(Number(event.currentTarget.value));
                  setIsMuted(false);
                }}
                type="range"
                value={effectiveVolume}
              />
            </label>
            <strong>{effectiveVolume}%</strong>
          </div>
          <div className="vv-audio-volume-presets">
            {[25, 50, 75].map((value) => (
              <button
                className={volume === value && !isMuted ? 'is-selected' : ''}
                key={value}
                onClick={() => {
                  setVolume(value);
                  setIsMuted(false);
                }}
                type="button"
              >
                {value}%
              </button>
            ))}
          </div>
        </article>

        <article className="vv-component-demo-card">
          <ComponentDemoHeader
            enName="Gain And Noise Gate"
            koName="입력 게인/노이즈 게이트"
            role="마이크 입력 감도와 배경 소음 차단 threshold를 조정합니다."
          />
          <div className="vv-audio-tuning-stack">
            <TuningSlider label="Input gain" onChange={setGain} value={gain} />
            <TuningSlider label="Noise gate" onChange={setNoiseGate} value={noiseGate} />
          </div>
        </article>

        <article className="vv-component-demo-card">
          <ComponentDemoHeader
            enName="Audio Output Selector"
            koName="오디오 출력 선택"
            role="프리뷰 재생 전 권장 출력 장치를 명확히 선택합니다."
          />
          <div className="vv-output-selector" role="group" aria-label="오디오 출력 선택">
            <button
              className={outputMode === 'headphones' ? 'is-selected' : ''}
              onClick={() => setOutputMode('headphones')}
              type="button"
            >
              <Headphones aria-hidden size={17} />
              Headphones
            </button>
            <button
              className={outputMode === 'speaker' ? 'is-selected' : ''}
              onClick={() => setOutputMode('speaker')}
              type="button"
            >
              <Volume2 aria-hidden size={17} />
              Speaker
            </button>
          </div>
          <div className="vv-audio-output-note">
            <span>{outputMode === 'headphones' ? '권장 출력' : '피드백 주의'}</span>
            <strong>
              {outputMode === 'headphones'
                ? '헤드폰 사용 시 preview feedback risk가 낮습니다.'
                : '스피커 출력은 마이크 재입력 가능성이 있습니다.'}
            </strong>
          </div>
        </article>
      </div>
    </section>
  );
}

export function AudioControlsGalleryCatalog() {
  return (
    <div className="vv-inspector-list">
      {audioControlSpecs.map((spec) => {
        const Icon = spec.icon;

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

function TuningSlider({
  label,
  onChange,
  value,
}: {
  label: string;
  onChange: (value: number) => void;
  value: number;
}) {
  return (
    <label className="vv-audio-tuning-row">
      <span>{label}</span>
      <input
        aria-label={label}
        max="100"
        min="0"
        onChange={(event) => onChange(Number(event.currentTarget.value))}
        type="range"
        value={value}
      />
      <strong>{value}%</strong>
    </label>
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

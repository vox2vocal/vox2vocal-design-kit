import {
  AlertTriangle,
  ArrowLeft,
  BadgeCheck,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Headphones,
  Lock,
  LockKeyhole,
  Mail,
  Mic,
  Mic2,
  Music2,
  Pause,
  Play,
  Radio,
  RefreshCcw,
  Settings,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Square,
  Star,
  Timer,
  Trash2,
  Upload,
  Volume2,
  Waves,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type IconSpec = {
  component: string;
  enName: string;
  Icon: LucideIcon;
  koName: string;
  role: string;
  usage: string;
};

export const iconSpecs: IconSpec[] = [
  {
    component: 'Auth / Form',
    enName: 'Mail',
    Icon: Mail,
    koName: '이메일',
    role: '이메일 입력 필드의 의미를 빠르게 인지시키는 leading icon입니다.',
    usage: '로그인, 회원가입, 계정 설정',
  },
  {
    component: 'Auth / Form',
    enName: 'Lock',
    Icon: Lock,
    koName: '비밀번호',
    role: '비밀번호, 잠금, 보호된 입력 상태를 나타냅니다.',
    usage: '비밀번호 입력, 보안 안내',
  },
  {
    component: 'Form',
    enName: 'Check',
    Icon: Check,
    koName: '체크',
    role: '체크박스 선택 완료와 약관 동의를 표현합니다.',
    usage: '약관 동의, 확인 상태',
  },
  {
    component: 'Navigation',
    enName: 'ArrowLeft',
    Icon: ArrowLeft,
    koName: '뒤로가기',
    role: '이전 화면으로 돌아가는 기본 navigation action입니다.',
    usage: 'TopNav, stack navigation',
  },
  {
    component: 'Navigation',
    enName: 'Settings',
    Icon: Settings,
    koName: '설정',
    role: '설정 또는 환경 구성 화면 진입점을 나타냅니다.',
    usage: 'TopNav, account settings',
  },
  {
    component: 'Button',
    enName: 'ChevronRight',
    Icon: ChevronRight,
    koName: '다음',
    role: '주요 CTA가 다음 단계로 이어진다는 방향성을 줍니다.',
    usage: 'Primary button, card affordance',
  },
  {
    component: 'Audio',
    enName: 'Mic',
    Icon: Mic,
    koName: '마이크',
    role: '녹음 시작과 음성 입력을 대표하는 핵심 아이콘입니다.',
    usage: 'Round action button',
  },
  {
    component: 'Audio',
    enName: 'Mic2',
    Icon: Mic2,
    koName: '녹음 중 마이크',
    role: 'active recording 상태에서 강조된 마이크 action을 나타냅니다.',
    usage: 'Recording control panel',
  },
  {
    component: 'Audio',
    enName: 'Square',
    Icon: Square,
    koName: '정지',
    role: '녹음 또는 재생을 중지하는 action을 나타냅니다.',
    usage: 'Round action button',
  },
  {
    component: 'Audio',
    enName: 'Play',
    Icon: Play,
    koName: '재생',
    role: 'take, reference, preview playback을 시작하는 action입니다.',
    usage: 'Preview player, own-take player',
  },
  {
    component: 'Audio',
    enName: 'Pause',
    Icon: Pause,
    koName: '일시정지',
    role: '녹음 중 임시 중지 또는 playback pause를 표현합니다.',
    usage: 'Recording control panel',
  },
  {
    component: 'Audio',
    enName: 'Volume2',
    Icon: Volume2,
    koName: '프리리슨',
    role: 'reference pre-listen 또는 소리 관련 toggle을 나타냅니다.',
    usage: 'Small icon button',
  },
  {
    component: 'Song / Section',
    enName: 'Music2',
    Icon: Music2,
    koName: '곡',
    role: '곡, 섹션, 음악 package를 식별하는 아이콘입니다.',
    usage: 'Song card, section card',
  },
  {
    component: 'Status',
    enName: 'AlertTriangle',
    Icon: AlertTriangle,
    koName: '경고',
    role: '정책 차단, 품질 경고, 실패 사유 같은 주의 상태를 알립니다.',
    usage: 'Info panel, quality warning',
  },
  {
    component: 'Learner Flow',
    enName: 'ShieldCheck',
    Icon: ShieldCheck,
    koName: '접근 허용',
    role: 'allowlist, rights gate, 안전한 접근 상태를 표현합니다.',
    usage: 'Access eligibility banner',
  },
  {
    component: 'Learner Flow',
    enName: 'BadgeCheck',
    Icon: BadgeCheck,
    koName: '동의 확인',
    role: 'consent snapshot 또는 policy version이 확인된 상태입니다.',
    usage: 'Recorder entry gate',
  },
  {
    component: 'Learner Flow',
    enName: 'LockKeyhole',
    Icon: LockKeyhole,
    koName: '사용 제한',
    role: 'app-only, no-share, protected playback 같은 제한 조건을 나타냅니다.',
    usage: 'Recorder entry gate',
  },
  {
    component: 'Learner Flow',
    enName: 'Timer',
    Icon: Timer,
    koName: '녹음 시간',
    role: 'target section 대비 녹음 시간을 보여줍니다.',
    usage: 'Recording timer',
  },
  {
    component: 'Learner Flow',
    enName: 'Upload',
    Icon: Upload,
    koName: '업로드',
    role: 'fallback file upload와 presigned upload session을 표현합니다.',
    usage: 'Fallback upload panel',
  },
  {
    component: 'Learner Flow',
    enName: 'Headphones',
    Icon: Headphones,
    koName: '프리뷰 청취',
    role: 'app-only self-voice preview playback을 나타냅니다.',
    usage: 'Preview player',
  },
  {
    component: 'Learner Flow',
    enName: 'Star',
    Icon: Star,
    koName: '평가',
    role: 'preview가 내 목소리처럼 들리는지 1-5점으로 평가합니다.',
    usage: 'Rating control',
  },
  {
    component: 'Learner Flow',
    enName: 'Clock3',
    Icon: Clock3,
    koName: '보관 기한',
    role: 'retention deadline과 삭제 예정 상태를 보여줍니다.',
    usage: 'Consent and deletion status',
  },
  {
    component: 'Learner Flow',
    enName: 'Trash2',
    Icon: Trash2,
    koName: '삭제 요청',
    role: '사용자 데이터 삭제 요청 action을 나타냅니다.',
    usage: 'Deletion request CTA',
  },
  {
    component: 'Brand / Feedback',
    enName: 'Waves',
    Icon: Waves,
    koName: '오디오 파형',
    role: 'Vox2Vocal의 오디오/음성 브랜드 맥락을 표현합니다.',
    usage: 'Learner Flow hero',
  },
  {
    component: 'Inspector',
    enName: 'Sparkles',
    Icon: Sparkles,
    koName: '강조',
    role: '주요 컴포넌트 그룹의 시각적 강조 아이콘입니다.',
    usage: 'Buttons note',
  },
  {
    component: 'Inspector',
    enName: 'SlidersHorizontal',
    Icon: SlidersHorizontal,
    koName: '설정값',
    role: '폼, 조정, BPM/key snapshot 같은 control group을 나타냅니다.',
    usage: 'Forms note, recorder gate',
  },
  {
    component: 'Inspector',
    enName: 'Radio',
    Icon: Radio,
    koName: '상태 신호',
    role: '카드/상태 그룹의 신호성 컴포넌트를 표현합니다.',
    usage: 'Cards note',
  },
  {
    component: 'Status',
    enName: 'CheckCircle2',
    Icon: CheckCircle2,
    koName: '완료 상태',
    role: '동의, 처리 stage, validation이 완료된 상태입니다.',
    usage: 'Consent checklist',
  },
  {
    component: 'Action',
    enName: 'RefreshCcw',
    Icon: RefreshCcw,
    koName: '다시 시도',
    role: 'retake, retry, reupload 같은 반복 action을 나타냅니다.',
    usage: 'Take review panel',
  },
];

export function IconGalleryPreview() {
  return (
    <section className="vv-system-gallery" aria-label="아이콘 라이브러리">
      <div className="vv-system-hero">
        <span className="vv-system-hero-icon">
          <Waves aria-hidden size={22} />
        </span>
        <span className="vv-kicker">Iconography</span>
        <h2>아이콘 라이브러리</h2>
        <p>Vox2Vocal Design Kit에서 실제 사용하는 Lucide 아이콘과 사용 목적입니다.</p>
      </div>
      <div className="vv-icon-grid">
        {iconSpecs.map(({ enName, Icon, koName, usage }) => (
          <article className="vv-icon-card" key={enName}>
            <div className="vv-icon-preview">
              <Icon aria-hidden size={24} strokeWidth={2} />
            </div>
            <div>
              <h3>
                {koName} <em>({enName})</em>
              </h3>
              <p>{usage}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function IconGalleryCatalog() {
  return (
    <div className="vv-inspector-list">
      {iconSpecs.map(({ component, enName, Icon, koName, role }) => (
        <article className="vv-inspector-item" key={enName}>
          <span className="vv-inspector-item-icon">
            <Icon aria-hidden size={20} strokeWidth={2} />
          </span>
          <div>
            <strong>
              {koName} <em>({enName})</em>
            </strong>
            <p>{role}</p>
            <small>{component}</small>
          </div>
        </article>
      ))}
    </div>
  );
}

import { useState } from 'react';
import { AlertCircle, CheckCircle2, Lock, Mail, SlidersHorizontal, Tags } from 'lucide-react';
import { CustomCheckbox, FailureTagChip, TextInput } from './FormControls';

type FormSpec = {
  enName: string;
  koName: string;
  role: string;
  state: string;
  usage: string;
};

const formSpecs: FormSpec[] = [
  {
    enName: 'Text Input Field',
    koName: '텍스트 입력 필드',
    role: '로그인/회원가입의 기본 텍스트 값을 수집합니다.',
    state: 'default, focus, filled, error',
    usage: '이메일, 사용자명, 검색, 짧은 텍스트 입력',
  },
  {
    enName: 'Password Input Field',
    koName: '비밀번호 입력 필드',
    role: '보안 입력값을 다크 surface와 focus glow로 명확히 구분합니다.',
    state: 'default, focus, hidden, invalid',
    usage: '로그인 비밀번호, 회원가입 비밀번호, 재인증',
  },
  {
    enName: 'Custom Checkbox',
    koName: '커스텀 체크박스',
    role: '약관 동의와 선택 설정을 작은 터치 영역 안에서 명확히 표현합니다.',
    state: 'unchecked, checked, disabled',
    usage: '필수 약관, 마케팅 수신, 데이터 보관 동의',
  },
  {
    enName: 'Failure Tag Chip',
    koName: '실패 사유 태그 칩',
    role: '평가 결과의 문제 유형을 복수 선택할 수 있게 합니다.',
    state: 'unselected, selected, hover',
    usage: 'Pitch, Timing, Breath, Pronunciation',
  },
  {
    enName: 'Validation Message',
    koName: '검증 메시지',
    role: '입력값의 성공/오류 상태를 짧은 보조 문구로 안내합니다.',
    state: 'success, warning, error, helper',
    usage: '이메일 형식 오류, 비밀번호 조건, 저장 완료',
  },
];

export function FormGalleryPreview() {
  const [requiredTerms, setRequiredTerms] = useState(true);
  const [marketingTerms, setMarketingTerms] = useState(false);
  const [selectedTags, setSelectedTags] = useState(['Pitch', 'Timing']);

  const toggleTag = (tag: string) => {
    setSelectedTags((current) =>
      current.includes(tag) ? current.filter((item) => item !== tag) : [...current, tag],
    );
  };

  return (
    <section className="vv-system-gallery" aria-label="폼 컴포넌트">
      <div className="vv-system-hero">
        <span className="vv-system-hero-icon">
          <SlidersHorizontal aria-hidden size={22} />
        </span>
        <span className="vv-kicker">Forms</span>
        <h2>폼 컴포넌트</h2>
        <p>로그인, 회원가입, 평가 결과 입력에 사용하는 field, checkbox, chip 상태입니다.</p>
      </div>

      <div className="vv-component-stack">
        <article className="vv-component-demo-card">
          <ComponentDemoHeader
            enName="Text Input Field"
            koName="텍스트 입력 필드"
            role="아이콘, placeholder, focus glow가 있는 기본 입력창입니다."
          />
          <div className="vv-field-set">
            <label className="vv-field-label">이메일 주소</label>
            <TextInput icon="email" label="이메일" placeholder="name@vox2vocal.ai" type="email" />
            <p className="vv-helper-text">로그인과 알림 수신에 사용할 이메일입니다.</p>
          </div>
        </article>

        <article className="vv-component-demo-card">
          <ComponentDemoHeader
            enName="Password Input Field"
            koName="비밀번호 입력 필드"
            role="보안 입력의 default/error/helper 상태를 구분합니다."
          />
          <div className="vv-field-set">
            <label className="vv-field-label">비밀번호</label>
            <TextInput icon="password" label="비밀번호" placeholder="8자 이상 입력" type="password" />
            <p className="vv-error-text">
              <AlertCircle aria-hidden size={13} />
              영문, 숫자, 특수문자를 조합해 주세요.
            </p>
          </div>
        </article>

        <article className="vv-component-demo-card">
          <ComponentDemoHeader
            enName="Custom Checkbox"
            koName="커스텀 체크박스"
            role="필수/선택 동의와 저장 설정에 사용합니다."
          />
          <div className="vv-checkbox-demo-group">
            <CustomCheckbox checked={requiredTerms} onChange={setRequiredTerms}>
              필수 약관 및 개인정보 처리방침에 동의합니다.
            </CustomCheckbox>
            <CustomCheckbox checked={marketingTerms} onChange={setMarketingTerms}>
              보컬 학습 리포트와 업데이트 알림을 받습니다.
            </CustomCheckbox>
          </div>
        </article>

        <article className="vv-component-demo-card">
          <ComponentDemoHeader
            enName="Failure Tag Chip"
            koName="실패 사유 태그 칩"
            role="평가 리포트에서 여러 문제 유형을 빠르게 선택합니다."
          />
          <div className="vv-chip-row">
            {['Pitch', 'Timing', 'Breath', 'Pronunciation'].map((tag) => (
              <FailureTagChip
                key={tag}
                onClick={() => toggleTag(tag)}
                selected={selectedTags.includes(tag)}
              >
                {tag}
              </FailureTagChip>
            ))}
          </div>
        </article>

        <article className="vv-component-demo-card">
          <ComponentDemoHeader
            enName="Validation Message"
            koName="검증 메시지"
            role="입력 성공/오류를 짧은 문장과 아이콘으로 알려줍니다."
          />
          <div className="vv-validation-note vv-validation-note-success">
            <CheckCircle2 aria-hidden size={16} />
            <span>사용 가능한 이메일입니다.</span>
          </div>
          <div className="vv-validation-note vv-validation-note-danger">
            <AlertCircle aria-hidden size={16} />
            <span>이미 가입된 이메일입니다.</span>
          </div>
        </article>
      </div>
    </section>
  );
}

export function FormGalleryCatalog() {
  const specIcons = [Mail, Lock, CheckCircle2, Tags, AlertCircle];

  return (
    <div className="vv-inspector-list">
      {formSpecs.map((spec, index) => {
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

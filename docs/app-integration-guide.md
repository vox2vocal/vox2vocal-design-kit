# Vox2Vocal App Design Kit Integration Guide

이 디자인 키트는 Vox2Vocal App 개발을 위한 UI 기준과 컴포넌트 워크벤치입니다. Web 마케팅 사이트용 키트가 아니라 Expo/React Native App 화면을 먼저 검증하고, 동일한 시각 언어를 React Native Web에서도 확인하기 위한 보조 서버로 관리합니다.

## 운영 원칙

1. App 화면에서 새 UI 패턴이 필요하면 먼저 디자인 키트에 상태와 변형을 추가합니다.
2. App 구현은 `vox2vocal-app/src/design-system`의 토큰과 공통 컴포넌트를 사용합니다.
3. 디자인 키트의 토큰 이름과 App 토큰 이름은 의미 기준으로 맞춥니다. 플랫폼 차이 때문에 값 표현은 달라질 수 있습니다.
4. App에서만 의미가 있는 보안, 네비게이션, 저장소 로직은 디자인 키트에 넣지 않습니다. 키트에는 UI 상태와 접근성 계약만 남깁니다.
5. 로그인/회원가입처럼 실제 서버 연동이 있는 화면은 키트에서 mock state로 표현하고, App에서 orchestration을 연결합니다.

## 동기화 대상

| App 변경 유형 | design-kit 업데이트 필요 여부 | 기준 |
| --- | --- | --- |
| 색상, radius, spacing, typography 변경 | 필수 | `src/design-tokens.ts`와 관련 갤러리 업데이트 |
| 버튼, 입력창, 체크박스 등 공통 컴포넌트 변형 추가 | 필수 | 변형/disabled/error/loading/focus 상태 추가 |
| 로그인/회원가입 같은 인증 화면 구성 변경 | 필수 | Auth 관련 컴포넌트 예시와 mobile viewport 확인 |
| 녹음, 재생, 음성 게이지 등 learner flow UI 변경 | 필수 | Audio/Learner gallery와 상호작용 상태 업데이트 |
| API 호출, token 저장, query cache 변경 | 선택 | UI 상태 변화가 생길 때만 반영 |
| copy/text만 변경 | 선택 | 레이아웃 영향이 있으면 반영 |

## App 토큰 매핑

| 의미 | App token | Design kit token |
| --- | --- | --- |
| 앱 배경 | `colors.bgDefault` | `colors.background.app` |
| 카드/입력 배경 | `colors.surfaceDefault` | `colors.background.surface1` |
| 호버/활성 배경 | `colors.surfaceRaised` | `colors.background.surface2` |
| 포커스 warm surface | `colors.surfaceOverlay` | `colors.background.surfaceWarm` |
| Primary red | `brandColors.red` | `colors.accent.redDefault` |
| Red hover | `brandColors.redBright` | `colors.accent.redLight` |
| Red gradient start | `brandColors.redDark` | `colors.accent.redDark` |
| 기본 border | `colors.borderSubtle` | `colors.border.default` |
| focus border | `colors.borderFocus` | `colors.border.focus` |
| mobile shell max width | `appLayout.mobileMaxWidth` | `layout.mobileMaxWidth` |
| top navigation height | `appLayout.topNavHeight` | `layout.topNavHeight` |

## App 컴포넌트 반영 기준

- 터치 가능한 컴포넌트는 최소 44px 터치 영역을 유지합니다.
- 모바일 우선 화면은 `max-width: 384px` 기준으로 먼저 검증합니다.
- Web preview는 모바일 shell 중앙 정렬을 유지하되, tablet/desktop viewport에서 overflow와 text wrapping을 확인합니다.
- 상태는 최소 `default`, `pressed/hover`, `focus`, `disabled`, `error`, `loading`을 분리해 보여줍니다.
- Icon-only control은 accessible label을 App 코드에 반드시 연결합니다.
- form control은 label, placeholder, error message, helper text가 각각 레이아웃을 깨지 않는지 검증합니다.

## PR/작업 체크리스트

- [ ] App 변경에 새 토큰 또는 새 컴포넌트 상태가 포함되는가?
- [ ] 포함된다면 design-kit gallery에 같은 상태가 추가되었는가?
- [ ] App과 design-kit의 토큰 의미가 같은 이름 또는 명확한 매핑으로 유지되는가?
- [ ] 모바일 375x812, compact Android 360x740, web desktop viewport에서 깨짐이 없는가?
- [ ] loading/error/disabled/focus 상태가 design-kit에서 눈으로 확인되는가?
- [ ] 접근성 label, role, keyboard/focus 동작이 App 구현 기준에 반영되었는가?


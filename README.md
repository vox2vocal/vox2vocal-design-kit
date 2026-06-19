# Vox2Vocal Design Kit

Vox2Vocal App의 디자인 토큰과 핵심 UI 컴포넌트를 브라우저에서 직접 확인하기 위한 React/Vite 기반 디자인 키트입니다. 이 프로젝트는 App 화면 개발을 위한 기준 워크벤치이며, 새 App UI 패턴을 추가하거나 수정할 때 함께 업데이트하는 것을 원칙으로 합니다.

## Scripts

```bash
npm install
npm run dev
npm run typecheck
npm run build
```

## Structure

```text
docs/app-integration-guide.md
src/design-tokens.ts      # colors, effects, typography, layout tokens
src/components/           # reusable UI component primitives
src/App.tsx               # component workbench
src/styles.css            # token variables and responsive layout
```

## App Integration

- App 구현 기준은 `../vox2vocal-app/src/design-system`입니다.
- design-kit은 App 토큰/컴포넌트의 시각 검증 서버로 사용합니다.
- App에서 새 토큰, 공통 컴포넌트 변형, 인증/학습/오디오 UI 상태를 추가하면 design-kit gallery도 같이 업데이트합니다.
- 운영 기준과 체크리스트는 `docs/app-integration-guide.md`를 따릅니다.

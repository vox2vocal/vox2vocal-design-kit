# Vox2Vocal Design Kit Agent

이 프로젝트는 Vox2Vocal App/Admin UI의 시각 기준을 확인하는 디자인 키트다.

## 기술 기준

- Vite 기반 React/TypeScript 웹 앱으로 관리한다.
- 스타일은 shadcn/ui 방식의 open-code 컴포넌트와 Tailwind CSS v4를 우선한다.
- 공통 primitive는 `src/components/ui`에 둔다.
- shadcn alias는 `@/*`를 `src/*`로 해석한다. 새 컴포넌트 import는 `@/components/ui/*`, `@/lib/utils` 기준으로 작성한다.
- variant가 필요한 primitive는 `class-variance-authority`와 `cn()`을 사용한다.
- class 병합은 `src/lib/utils.ts`의 `cn()`만 사용한다.
- 색상, radius, spacing, typography는 `src/styles.css`의 Tailwind v4 `@theme` 토큰과 `src/design-tokens.ts`를 함께 갱신한다.
- 기존 `vv-*` CSS 카탈로그 클래스는 점진적 호환 레이어로만 유지한다. 새 컴포넌트는 먼저 `src/components/ui` primitive로 만들고 gallery에서 조합한다.
- Radix 기반 동작 컴포넌트가 필요한 경우 shadcn/ui registry 구조를 참고해 소유 코드로 복사하고 Vox2Vocal 상태/접근성 계약에 맞게 수정한다.

## App/Admin 연계 원칙

- Web/Admin은 shadcn/ui + Tailwind CSS 기준을 따른다.
- React Native App은 NativeWind + React Native Reusables 패턴을 따른다.
- 세 플랫폼은 같은 token 이름, variant 이름, 컴포넌트 상태 이름을 공유하되 구현 코드는 플랫폼별로 둔다.

## 검증

```bash
npm run typecheck
npm run build
```

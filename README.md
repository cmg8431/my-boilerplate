## Getting Started
사용한 기술들 :
- Next.js 
- Typescript
- Storybook v6+
- React.js
- Styled Components
- Jest + React Testing Library
- Eslint + Prettier + Editorconfig

## 사용 전 잊지 말아야 할 점.
- 사용 전 manifest.json 변경
- 초기 componetns 제거 및 snapshot 테스트

## 컴포넌트 작성 커맨드
```bash
yarn generate <component_name>
```
위의 커맨드 입력시 아래와 같은 파일들이 생성 :
- index.tsx
- styled.ts
- tests.tsx
- stories.tsx

### 개발 모드에서 프로젝트 실행 
```bash
yarn dev
```

### 프로젝트 빌드
```bash
yarn build
```

### 프로젝트 시작
```bash
yarn start
```

### 프로젝트 린트
```bash
yarn lint
```

### 테스트 실행
```bash
yarn test
yarn test:watch
```

### storybook 실행
```bash
yarn storybook
```

### storybook build 실행
```bash
yarn build-storybook
```

## 참고 boilerplate 
```bash
https://github.com/dutradotdev/my-boilerplate
```

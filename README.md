# React + TypeScript + Vite + Vitest

Application includes configurations of unit testing uses
>- vitest <br />
>- jest <br />
>- @testing-library/react <br />
>- @testing-library/jest-dom

jest testing methods is accessible in all testing files.
It's defined on `jest.setup.ts` file and added types on `tsconfig.json` file

Setup Mock API for testing API requests uses `msw` (Mock Service Worker) package,
which you can install uses:
```bash
npm i msw --save-dev
```

```bash
yarn add -D msw
``` 

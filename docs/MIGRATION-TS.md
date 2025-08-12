# TypeScript Migration Plan

This plan maps all JavaScript files to their TypeScript counterparts and notes any typing needs.

| File Path                               | Target Extension | Notes |
|----------------------------------------|------------------|-------|
| src/index.js                           | .tsx             | Entry uses React 18 createRoot; add types for root element. Install `typescript`, `@types/react`, `@types/react-dom`, `@types/node`. |
| src/App.js                              | .tsx             | Type App props; lift context types from `AppContext`. |
| src/context/AppContext.js               | .tsx             | Define `AppContextType` and interfaces: `User`, `Client`, `Job`, `Candidate`, `Person`, `CandidateProfile`. Enable strict null checks. |
| src/data/mockData.js                    | .ts              | Export typed constants; import shared interfaces from `src/types`. |
| src/components/Icons.js                 | .tsx             | Export FCs with `SVGProps<SVGSVGElement>`. |
| src/components/Toast.js                 | .tsx             | Props: `{ message: string }`. |
| src/components/Sidebar.js               | .tsx             | Props: `{ onNavigate: (page: string, ctx?: any) => void; onLogout: () => void }`. |
| src/components/LoginPage.js             | .tsx             | Local form state types; event handler types. |
| src/components/DashboardPage.js         | .tsx             | Props: `{ onNavigate: (page: string, ctx?: any) => void }`. |
| src/components/PlacementRateChart.js    | .tsx             | Chart.js has bundled types; type `useRef<HTMLCanvasElement | null>`. |
| src/components/ClientsPage.js           | .tsx             | Props: `{ onNavigate: (page: string, ctx?: any) => void }`. |
| src/components/ClientDetailPage.js      | .tsx             | Props: `{ context?: { clientId?: number }; onNavigate: (...) => void }`; type form state. |
| src/components/JobsPage.js              | .tsx             | Props: accept optional `onNavigate`. |
| src/components/CandidateModal.js        | .tsx             | Props: `{ profile: CandidateProfile; onClose: () => void }`. |
| src/types/index.ts (new)                | .ts              | Centralize shared interfaces and types used above. |
| src/react-app-env.d.ts (CRA TS default) | .ts              | Ensure present after migration. |
| Tests (*.test.js / *.jsx)               | .test.ts / .test.tsx | Configure Jest TypeScript or CRA preset. |

Packages to install:
```bash
npm i -D typescript @types/react @types/react-dom @types/node
```

Suggested migration order:
1. Add TypeScript deps and tsconfig.json (CRA default).
2. Introduce models in `src/types/` and migrate `data/` and `context/`.
3. Migrate leaf components (Icons/Toast), then pages, finally entry files.
4. Enable `strict` in tsconfig and iterate on `any` types to strong types.
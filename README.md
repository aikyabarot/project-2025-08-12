# Gray Matter (CRA + Tailwind + Chart.js)

React + Tailwind CSS demo app for client/job/candidate tracking. Built with Create React App (JavaScript), styled with Tailwind, and includes a Chart.js example.

## Stack

- Create React App (CRA)
- CRACO (for Tailwind in CRA without eject)
- React 18
- Tailwind CSS 3
- Chart.js 4
- gh-pages (for GitHub Pages deployment)

## Getting Started

Prerequisites:
- Node.js 18+ (Node 20 also works)
- npm

Install:
```bash
npm install
```

Run locally:
```bash
npm start
```
App runs at http://localhost:3000

Build:
```bash
npm run build
```

## Run in an online sandbox (CodeSandbox, etc.)

- Import this GitHub repository URL directly.
- The sandbox will install and run automatically. If not:
  ```bash
  npm install
  npm start
  ```
- This repo uses CRACO to enable Tailwind with CRA. Scripts are `craco start/build/test`.

## GitHub Codespaces

When you create a new Codespace, `.env.local` is created automatically on first start with container-friendly defaults. You can edit it as needed (do not commit it).

## GitHub Pages Deployment

This project is pre-configured with `gh-pages`:
- `homepage` is set to: `https://aikyabarot.github.io/Grey-matter003`
- Scripts:
  - `predeploy`: builds the app
  - `deploy`: publishes the `build` directory to the `gh-pages` branch

Deploy:
```bash
npm run deploy
```

Then in your repository settings on GitHub:
- Settings → Pages → Set "Branch" to `gh-pages` (root)

Your site will be available at the `homepage` URL.

## Documentation

- TypeScript migration plan: see `docs/MIGRATION-TS.md`
- Routing refactor proposal: see `docs/ROUTING-STRUCTURE.md`
- Security audit instructions and report placeholders: see `docs/SECURITY-AUDIT.md`
- Project info summary: see `docs/PROJECT-INFO.md`

## Notes

- Replace the placeholder logo in `Sidebar` with your real logo (put files in `public/`).
- To add Prettier formatting run: `npm run format`.
- CRA includes basic ESLint configuration by default.

## License

MIT
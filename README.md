# Gray Matter App

React + Tailwind CSS demo app for client/job/candidate tracking. Built with Create React App (CRA + CRACO), styled with Tailwind CSS, and includes Chart.js visualization.

## Quick Start

**Prerequisites:** Node.js 20+ (see `.nvmrc`)

```bash
# Install dependencies
npm install

# Start development server
npm start
# App runs at http://localhost:3000

# Build for production
npm run build

# Run tests
npm test
```

## Tailwind CSS

This project uses Tailwind CSS with CRACO for CRA integration. The main styles are in `src/index.css` with the required `@tailwind` directives.

## Environment Variables

Copy `.env.example` to `.env` for local development if needed. CRA only exposes variables starting with `REACT_APP_*`. See [CRA Environment Variables Guide](https://create-react-app.dev/docs/adding-custom-environment-variables/) for more information.

## GitHub Codespaces

This repository is ready for GitHub Codespaces:

1. **Open in Codespaces**: Click "Code" → "Codespaces" → "Create codespace"
2. **Auto-setup**: The devcontainer will automatically install dependencies
3. **Start developing**: Run `npm start` to launch the dev server on port 3000
4. **Port forwarding**: Port 3000 is automatically forwarded and accessible

The devcontainer includes recommended VS Code extensions for React, Tailwind, ESLint, and Prettier.

## Continuous Integration

CI workflow runs on all pushes and pull requests:
- ✅ Install dependencies with npm
- ✅ Build application (`npm run build`)  
- ✅ Run tests (`npm test`)

## Local Development Setup

For the best development experience:

1. **Use Node 20**: `nvm use` (if you have nvm installed)
2. **Install dependencies**: `npm install`
3. **Copy environment**: `cp .env.example .env` (optional)
4. **Start coding**: `npm start`

## Project Structure

- `src/` - React application source code
- `public/` - Static assets
- `docs/` - Additional project documentation
- `.devcontainer/` - GitHub Codespaces configuration
- `.github/workflows/` - CI/CD workflows

## Additional Commands

```bash
npm run format     # Format code with Prettier
npm run deploy     # Deploy to GitHub Pages
npm run audit:report # Generate security audit report
```

## License

MIT
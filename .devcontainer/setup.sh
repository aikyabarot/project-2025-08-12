#!/usr/bin/env bash
set -euo pipefail

echo "[devcontainer] Running setup..."

# Install dependencies with npm ci, fallback to npm install
if [ -f package-lock.json ]; then
  echo "[devcontainer] Installing dependencies with npm ci..."
  if ! npm ci; then
    echo "[devcontainer] npm ci failed; falling back to npm install..."
    npm install
  fi
else
  echo "[devcontainer] No package-lock.json found; running npm install..."
  npm install
fi

# Create .env.local if it doesn't exist
if [ ! -f ".env.local" ]; then
  echo "[devcontainer] Creating .env.local with container-friendly defaults..."
  cat > .env.local << 'EOF'
HOST=0.0.0.0
PORT=3000
CHOKIDAR_USEPOLLING=true
WATCHPACK_POLLING=true
BROWSER=none
# Uncomment if HMR/websocket reload doesn't work behind proxies:
# WDS_SOCKET_PORT=443

# App variables must be prefixed with REACT_APP_
# REACT_APP_API_BASE_URL=https://api.example.com
EOF
else
  echo "[devcontainer] .env.local already exists; leaving as-is."
fi

echo "[devcontainer] Setup complete. Next:"
echo "  - npm start          # start dev server on port 3000"
echo "  - npm run build      # production build"
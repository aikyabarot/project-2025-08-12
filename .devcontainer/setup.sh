#!/bin/bash
set -e

echo "🚀 Setting up Gray Matter App development environment..."

# Install dependencies
if [ -f package-lock.json ]; then
    echo "📦 Running npm ci..."
    npm ci
else
    echo "📦 Running npm install..."
    npm install
fi

echo "✅ Setup complete!"
echo ""
echo "📋 Next steps:"
echo "  1. Copy .env.example to .env if you need custom environment variables"
echo "  2. Run 'npm start' to start the development server"
echo "  3. Open http://localhost:3000 to view the app"
echo ""
echo "🔧 Available commands:"
echo "  npm start     - Start development server"
echo "  npm run build - Build for production"
echo "  npm test      - Run tests"
echo "  npm run format - Format code with Prettier"
#!/usr/bin/env bash
set -euo pipefail

mkdir -p reports

echo "Installing dependencies with npm ci..."
npm ci

echo "Running initial audit..."
npm audit --audit-level=low > reports/audit-initial.txt || true
npm audit --audit-level=low --json > reports/audit-initial.json || true

echo "Applying non-breaking fixes..."
npm audit fix || true

echo "Running post-fix audit..."
npm audit --audit-level=low > reports/audit-postfix.txt || true
npm audit --audit-level=low --json > reports/audit-postfix.json || true

echo "Audit reports saved to ./reports"
# Security Audit: npm audit

This document captures the process and results of `npm audit` for this repository.

## Commands

Run from the project root:

```bash
# Clean install
npm ci

# Initial audit (human and JSON)
npm audit --audit-level=low > reports/audit-initial.txt
npm audit --audit-level=low --json > reports/audit-initial.json

# Apply non-breaking fixes
npm audit fix

# Post-fix audit
npm audit --audit-level=low > reports/audit-postfix.txt
npm audit --audit-level=low --json > reports/audit-postfix.json
```

Optional (may be breaking, review carefully):
```bash
npm audit fix --force
```

## Results

- Auto-applied fixes: See `reports/audit-postfix.txt` for resolved items.
- Remaining vulnerabilities requiring manual action: Update major versions, replace deprecated packages, or pin transitive deps.

Populate the table below from `audit-postfix.json`:

| Severity | Module | Installed | Vulnerable Range | Patched In | Paths | Suggested Fix | Status |
|----------|--------|-----------|------------------|------------|-------|---------------|--------|
|          |        |           |                  |            |       |               |        |

## Artifacts

All reports are saved to `reports/`:
- `audit-initial.txt` / `audit-initial.json`
- `audit-postfix.txt` / `audit-postfix.json`
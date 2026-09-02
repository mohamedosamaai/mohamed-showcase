# 💻 Developer Setup & Operations

This guide provides instructions for local development, verification, and containerized deployment.

---

## 1. Local Prerequisites
- Node.js `22.x LTS` (or `20.x LTS`)
- Python `3.12+`
- Git

---

## 2. Quick Setup & Verification

```bash
# 1. Clone repository
git clone https://github.com/mohamedosamaai/mohamed.git
cd mohamed

# 2. Install dependencies (0 CVEs)
npm install

# 3. Verify TypeScript Strict Mode
npx tsc --noEmit

# 4. Run ESLint
npm run lint

# 5. Production Build
npm run build

# 6. Start Development Server
npm run dev
```

---

## 3. Docker Container Deployment

```bash
# Build and run standalone container
docker compose up -d --build
```

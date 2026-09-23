# Course Personal Site — learner template (V4)

Astro 5 + Node adapter + SQLite API stubs สำหรับคอร์ส multi-agent

## Quick start

1. กด **Use this template** จาก GitHub (อย่า Fork)
2. `git clone` repo ของคุณ
3. `npm install`
4. `copy .env.example .env` แล้วใส่ `STUDENT_SLUG` / PAT
5. `node scripts/create-course-issues.mjs`
6. `npm run dev` → http://localhost:4321
7. ทำตาม labs ใน `Onto-IQ/build-ai-multi-agent-lab` (branch v4)

## Scripts

| Command | Meaning |
|---|---|
| `npm run dev` | Dev server :4321 |
| `npm test` | Smoke tests (ต้องเขียว) |
| `npm run test:labs` | Lab API tests (แดงจนกว่า Lab 05) |
| `npm run build` / `npm start` | Production server |
| `npm run create-issues` | สร้าง GitHub issues จาก `.github/course-issues` |

## Deploy

Coolify Dockerfile build → `https://<slug>.9expert.online`  
Fallback: static export + GitHub Pages (ไม่มี API)

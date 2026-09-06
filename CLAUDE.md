# CLAUDE.md

No root manifest — this repo holds independent projects, each with its own `package.json`. `cd` into a project before running commands.

## my-app / todolist / portal.aiub (CRA, react-scripts 5.0.1)
- Build: `npm run build`
- Test: `npm test`
- Start (dev): `npm start`
(run from inside the respective project folder, e.g. `cd my-app`)

## Jubayer task/server (NestJS)
- Build: `npm run build`
- Test: `npm test`
- Lint: `npm run lint`
- Dev: `npm run start:dev`  |  Prod: `npm run start:prod`

## Jubayer task/src (Vite + TS)
- Build: `npm run build`
- Test: `npm test`
- Lint: `npm run lint`
- Dev: `npm run dev`

## Jubayer task/db
- `docker-compose up -d` (from `Jubayer task/db/`)

## Files worth reading first
- README.md
- Jubayer task/README.md
- my-app/src/App.js

Architecture: see ARCHITECTURE.md — read before structural changes

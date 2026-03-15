# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server with HMR (localhost:5173)
npm run build      # Type-check + production build (outputs to dist/)
npm run lint       # Run ESLint
npm run preview    # Preview production build locally
```

There is no test runner configured.

## Architecture

Minimal React 19 + TypeScript + Vite starter. Entry point: `index.html` → `src/main.tsx` → `src/App.tsx`.

- **`src/main.tsx`** — mounts `<App>` inside React StrictMode
- **`src/App.tsx`** — top-level component
- **`src/index.css`** — global styles with CSS custom properties for light/dark themes
- **`src/App.css`** — component-scoped styles using modern CSS nesting

### Build pipeline

TypeScript is compiled with `tsc -b` (project references: `tsconfig.app.json` for source, `tsconfig.node.json` for Vite config), then Vite bundles with `@vitejs/plugin-react` (Oxc transformer). Strict TypeScript is enabled — unused locals/parameters are errors.

### ESLint

Uses flat config (`eslint.config.js`) with `typescript-eslint` recommended rules, `eslint-plugin-react-hooks`, and `eslint-plugin-react-refresh`. To enable type-aware lint rules, update the config to use `tseslint.configs.recommendedTypeChecked` with the `languageOptions.parserOptions` pointing to `tsconfig.app.json`.

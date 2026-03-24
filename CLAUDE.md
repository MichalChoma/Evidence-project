# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server with HMR (localhost:5173)
npm run build      # Type-check + production build (outputs to dist/)
npm run lint       # Run ESLint
npm run preview    # Preview production build locally
npm test           # Run Vitest unit tests (single run)
npm run test:watch # Run Vitest in watch mode
```

## Architecture

Cistercian numeral translator: converts Arabic numbers (0–9999) to SVG glyphs of medieval Cistercian numerals. Entry point: `index.html` → `src/main.tsx` → `src/App.tsx`.

### Data flow

1. `App.tsx` holds raw input string as state
2. `NumberInput` fires `onChange` with the raw string; `App` passes it to `parseInput()` from `src/lib/validation.ts`
3. The validated number (or `null`) flows into `GlyphSection`
4. `CistercianGlyph` calls `getSegments(value)` from `src/lib/cistercian.ts` to get SVG line segment coordinates
5. `DownloadButton` calls `generateSvgString(value)` to build a data URI for SVG export

### Cistercian numeral logic (`src/lib/cistercian.ts`)

The Cistercian system encodes digits 1–9 as line segments around a central vertical mast. Each of the four decimal places occupies a quadrant:

- **Ones** — top-right (no transform)
- **Tens** — top-left (mirror X)
- **Hundreds** — bottom-right (mirror Y)
- **Thousands** — bottom-left (mirror X + Y)

`BASE_SEGMENTS` defines shapes for digits 1–9 once. `mirrorX`, `mirrorY`, and `mirrorBoth` transform those coordinates for the other quadrants. `getSegments()` extracts each digit via modulo arithmetic and combines all four quadrants.

### Components (`src/components/`)

- `Navbar` — fixed top bar with app title and supported range badge
- `InputSection` / `NumberInput` — form input with validation, error messages, and ARIA attributes
- `GlyphSection` — renders `CistercianGlyph`, numeric display, and `DownloadButton`; includes `aria-live` region
- `CistercianGlyph` — pure SVG renderer from segment array
- `DownloadButton` — anchor tag that downloads the SVG as a file

### Build pipeline

TypeScript compiled with `tsc -b` (project references: `tsconfig.app.json` for source, `tsconfig.node.json` for Vite config), then Vite bundles with `@vitejs/plugin-react` (Oxc transformer) and `@tailwindcss/vite`. Strict TypeScript is enabled — unused locals/parameters are errors. Test files are excluded from `tsconfig.app.json`.

### ESLint

Flat config (`eslint.config.js`) with `typescript-eslint` recommended rules, `eslint-plugin-react-hooks`, and `eslint-plugin-react-refresh`. To enable type-aware lint rules, switch to `tseslint.configs.recommendedTypeChecked` with `languageOptions.parserOptions` pointing to `tsconfig.app.json`.

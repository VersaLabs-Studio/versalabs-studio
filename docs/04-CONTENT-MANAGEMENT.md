# VersaLabs Studio - Content Management

## 1. Project Catalog Architecture

The VersaLabs Portfolio pulls its data dynamically from `project-catalog/`. This ensures that content is version-controlled and distinct from the UI codebase.

### The Catalog Source
- All projects exist as individual Markdown (`.md`) files in `project-catalog/`.
- Markdown is chosen to allow exhaustive technical formatting, code blocks, Architecture Decision Records (ADRs), and mermaid diagrams without clunky CMS overhead.

### Tone & Voice
- **Authoritative & Corporate:** Frame all content for directors, VPs of Engineering, and Fortune 500 decision makers.
- **Strictly Factual & Data-Driven:** Focus on architectures scaled, pipelines configured, metrics reduced, and features implemented. Avoid generic marketing fluff.
- **Narrative Structure:** Every project must outline the *Business Problem*, the *Architectural Solution*, the *Domain Models*, and the *Deployment Stats*.

## 2. Maintaining the Portfolio UI

When translating project catalogs into frontend UI cards or features:
- **Never hardcode project paragraphs into React Components.** Always pull from the raw catalog descriptions if possible.
- **Schema Validation:** If you must construct custom attributes for frontend cards (like icons or gradient colors), keep them in a centralized configuration array (e.g., `constants/projects.ts`) and validate them against the directory contents.
- **Visual Representations:** The studio UI should abstract complex markdown files into digestible "Linear-style" project cards. Only reveal full readmes in dedicated modal viewers or full `/projects/[slug]` pages.

## 3. SEO & Web Vital Governance
- Ensure every generated page from the catalog sets correct `<title>` and `<meta>` description headers representing the proprietary software context.
- Images generated for projects must be properly sized and passed to `next/image` to preserve the 0-bloat / maximum Lighthouse score requirements constraint.

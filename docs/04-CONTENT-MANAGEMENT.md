# VersaLabs Studio - Content Management

## 1. Project Database Architecture (v2)

The VersaLabs Portfolio pulls its data exclusively from `src/config/project-database.ts`. This single TypeScript array serves as the absolute source of truth, completely replacing the legacy Markdown-based `/project-catalog/` parsers.

### The TS Database Source
- All projects exist as `ProjectEntry` objects inside `src/config/project-database.ts`.
- This strict typing ensures zero runtime errors when parsing complex metadata such as `techStack` layers, `schema` details, and `boundedContexts`.

### Tone & Voice
- **Authoritative & Corporate:** Frame all content for directors, VPs of Engineering, and Fortune 500 decision makers.
- **Strictly Factual & Data-Driven:** Focus on architectures scaled, pipelines configured, metrics reduced, and features implemented. Avoid generic marketing fluff.
- **Narrative Structure:** Every `ProjectEntry` must define explicit fields for `businessProblem`, `architecturalSolution`, and its comprehensive `features` grid.

## 2. Automated Image Discovery Mechanism

Visual mockups are handled via automated Server-Side traversal.

### Directory Structure
Images **must** be stored in the public directory matching the project title or slug:
`public/[Project Title]/Mockups/` or `public/[Project Title]/Screenshots/`

### Discovery Pipeline (`src/lib/image-discovery.ts`)
1. During static site generation or server requests, `getProjectImages(title, slug)` performs a fuzzy match against the `public/` directory to locate the project's specific folder.
2. It aggressively scans `Mockups` and `Screenshots` sub-directories for `.png`, `.jpg`, and `.webp` payloads.
3. It pushes an array of valid public URLs downwards to the client (`ProjectSlideshow.tsx`).

**Never hardcode image paths inside `project-database.ts`**. The layout agents will automatically discover and generate the 3:2 aspect ratio sliders based solely on folder contents.

## 3. SEO & Web Vital Governance
- Ensure every generated page from the catalog sets correct `<title>` and `<meta>` description headers representing the proprietary software context.
- The `<ProjectSlideshow />` runs strictly using `next/image` with `priority` flags set only on `currentIndex === 0` to preserve the 0-bloat / maximum Lighthouse score requirements constraint.

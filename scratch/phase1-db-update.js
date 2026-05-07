const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'config', 'project-database.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Detect line ending
const lineEnding = content.includes('\r\n') ? '\r\n' : '\n';
console.log('Line ending:', lineEnding === '\r\n' ? 'CRLF' : 'LF');

// 1. Fix Jarvis - update subtitle, summary, add productType
content = content.replace(
  `    subtitle: "Autonomous Software Engineering Orchestration Platform",${lineEnding}    summary:${lineEnding}      "Self-hosted autonomous SWE platform orchestrating multi-model LLM agents via OpenClaw gateway, with MCP integrations for GitHub, Vercel, Notion, and Gmail \u2014 deployed on Docker.",`,
  `    subtitle: "AI-Powered Development Automation",${lineEnding}    summary:${lineEnding}      "Our in-house AI assistant that automates development workflows \u2014 managing code, deployments, documentation, and communication across all our projects through intelligent AI agents.",`
);

// Add productType to Jarvis after thumbnail
content = content.replace(
  `    thumbnail: "/Jarvis/Mockups/175shots_so.png",${lineEnding}${lineEnding}    description:${lineEnding}      "JARVIS Core is a self-hosted`,
  `    thumbnail: "/Jarvis/Mockups/175shots_so.png",${lineEnding}    productType: "internal",${lineEnding}${lineEnding}    description:${lineEnding}      "JARVIS Core is a self-hosted`
);

// 2. Fix Live Addis - card fields
content = content.replace(
  `    subtitle: "Real-Time Social Media Analytics Dashboard",${lineEnding}    summary:${lineEnding}      "Social media data aggregation and analytics platform for monitoring live events in Addis Ababa, with domain events, sentiment analysis, and customizable widget dashboards.",${lineEnding}    category: "Analytics",${lineEnding}    tags: ["Analytics", "Social Media", "Real-Time"],${lineEnding}    year: "2026",${lineEnding}    status: "Development",`,
  `    subtitle: "Official Website for Live Addis NGO",${lineEnding}    summary:${lineEnding}      "A clean, professional website built for Live Addis \u2014 a community-focused NGO based in Addis Ababa. Showcases the organization\u2019s mission, programs, and impact with a modern, mobile-friendly design.",${lineEnding}    category: "Corporate Web",${lineEnding}    tags: ["Corporate", "Web Design", "NGO"],${lineEnding}    year: "2026",${lineEnding}    status: "Production",`
);

// Add productType to Live Addis after thumbnail
content = content.replace(
  `    thumbnail: "/LiveAddis/Mockups/47shots_so.png",${lineEnding}${lineEnding}    description:${lineEnding}      "Live Addis is a proprietary web platform`,
  `    thumbnail: "/LiveAddis/Mockups/47shots_so.png",${lineEnding}    productType: "client-project",${lineEnding}${lineEnding}    description:${lineEnding}      "Live Addis is a professional corporate website built for Live Addis, a community-focused NGO in Addis Ababa. The platform showcases the organization\u2019s mission, ongoing programs, impact stories, and team \u2014 providing a polished digital presence that connects the NGO with supporters, partners, and the local community."`
);

// Fix Live Addis description (remove old description)
content = content.replace(
  `"Live Addis is a proprietary web platform that aggregates real-time social media data from Facebook and Twitter, provides analytics dashboards with sentiment scoring, and offers customizable widget-based interfaces for monitoring live events in Addis Ababa. The application follows a strict DDD approach with four bounded contexts communicating via domain events, deployed on Vercel with automated CI/CD."`,
  `"Live Addis is a professional corporate website built for Live Addis, a community-focused NGO in Addis Ababa. The platform showcases the organization\u2019s mission, ongoing programs, impact stories, and team \u2014 providing a polished digital presence that connects the NGO with supporters, partners, and the local community."`
);

// Fix Live Addis businessProblem
content = content.replace(
  `"Event organizers and media outlets in Addis Ababa lack unified dashboards to monitor social media activity around live events in real-time, relying instead on manual platform-by-platform monitoring."`,
  `"The NGO needed a modern, professional online presence to communicate their mission, share program updates, and attract supporters \u2014 replacing an outdated digital footprint that limited their reach and credibility."`
);

// Fix Live Addis architecturalSolution
content = content.replace(
  /\"A clean layered architecture \(Presentation .* SWR provides cache-aware data fetching with React Context for state.\"/,
  `"A performant static website built with Next.js for optimal loading speeds and SEO. Server-side rendering ensures content is immediately available to search engines, while a clean component architecture keeps the codebase maintainable and easy to update as the organization grows."`
);

// Fix Live Addis systemFlow
content = content.replace(
  /\"External Social APIs \(Facebook, Twitter\).*Notification Context \(Threshold Alerts\)\"/,
  `"Visitor Arrival \u2192 Mission Discovery \u2192 Program Exploration \u2192 Team Overview \u2192 Contact / Get Involved"`
);

// 3. Add productType to Unlock Ethiopia
content = content.replace(
  /     imageDir: "Unlock Ethiopian Potential",\n/,
  `     imageDir: "Unlock Ethiopian Potential",${lineEnding}    productType: "client-project",${lineEnding}`
);

// 4. Fix Minab - simplify summary and add productType
content = content.replace(
  `    summary: "A gallery-worthy digital storefront for contemporary Ethiopian fashion. Features dual-theme OKLCH styling, smooth spring animations, and a complete mock shopping flow.",`,
  `    summary: "A gallery-worthy digital storefront for contemporary Ethiopian fashion. Beautiful dark and light themes, smooth animations, and a complete shopping experience from browsing to checkout.",`
);

// Add productType to Minab after imageDir
content = content.replace(
  /     imageDir: "Minab",\n/,
  `     imageDir: "Minab",${lineEnding}    productType: "client-project",${lineEnding}`
);

// 5. Fix Tibeb - simplify summary and add productType
content = content.replace(
  `    summary: "Bridging centuries of Ethiopian artistry with modern digital commerce. A premium storefront featuring Stripe payments, Supabase backend, and schema-first architecture.",`,
  `    summary: "Bridging centuries of Ethiopian artistry with modern digital commerce. A premium storefront with secure international payments, bringing traditional Habesha clothing to the global market.",`
);

// Add productType to Tibeb after imageDir
content = content.replace(
  `    imageDir: "Tibeb",${lineEnding}${lineEnding}    description:`,
  `    imageDir: "Tibeb",${lineEnding}    productType: "client-project",${lineEnding}${lineEnding}    description:`
);

// 6. Add PROJECT_ORDER and modify helper functions
const oldHelpers = `// ---------------------------------------------------------------------------${lineEnding}// HELPER FUNCTIONS${lineEnding}// ---------------------------------------------------------------------------${lineEnding}${lineEnding}export function getProjectBySlug(slug: string): ProjectEntry | undefined {${lineEnding}  return PROJECT_DATABASE.find((p) => p.slug === slug);${lineEnding}}${lineEnding}${lineEnding}export function getAllProjects(): ProjectEntry[] {${lineEnding}  return PROJECT_DATABASE;${lineEnding}}${lineEnding}${lineEnding}export function getAllSlugs(): string[] {${lineEnding}  return PROJECT_DATABASE.map((p) => p.slug);${lineEnding}}`;

const newHelpers = `// ---------------------------------------------------------------------------${lineEnding}// CANONICAL PROJECT DISPLAY ORDER${lineEnding}// ---------------------------------------------------------------------------${lineEnding}${lineEnding}const PROJECT_ORDER: string[] = [${lineEnding}  'obsidian-erp-v3.0',${lineEnding}  'threatmatrix-ai',${lineEnding}  'jarvis',${lineEnding}  'auroqueue',${lineEnding}  'pana-sport',${lineEnding}  'pavillion-360',${lineEnding}  'printonline-et',${lineEnding}  'oskaz-ecommerce',${lineEnding}  'fastpay',${lineEnding}  'unlock-ethiopia-potential',${lineEnding}  'pana-web',${lineEnding}  'potentia',${lineEnding}  'live-addis',${lineEnding}  'minab-clothing',${lineEnding}  'tibeb',${lineEnding}];${lineEnding}${lineEnding}// ---------------------------------------------------------------------------${lineEnding}// HELPER FUNCTIONS${lineEnding}// ---------------------------------------------------------------------------${lineEnding}${lineEnding}export function getProjectBySlug(slug: string): ProjectEntry | undefined {${lineEnding}  return PROJECT_DATABASE.find((p) => p.slug === slug);${lineEnding}}${lineEnding}${lineEnding}export function getAllProjects(): ProjectEntry[] {${lineEnding}  return PROJECT_ORDER${lineEnding}    .map(slug => PROJECT_DATABASE.find(p => p.slug === slug)!)${lineEnding}    .filter(Boolean);${lineEnding}}${lineEnding}${lineEnding}export function getAllSlugs(): string[] {${lineEnding}  return PROJECT_ORDER;${lineEnding}}`;

if (content.includes(oldHelpers)) {
  content = content.replace(oldHelpers, newHelpers);
  console.log('✅ Helper functions replaced');
} else {
  console.log('❌ Could not find helper functions block');
}

fs.writeFileSync(filePath, content, 'utf8');

// Verify changes
const updated = fs.readFileSync(filePath, 'utf8');
console.log('✅ Jarvis productType:', updated.includes('productType: "internal"'));
console.log('✅ Live Addis NGO:', updated.includes('Official Website for Live Addis NGO'));
console.log('✅ Live Addis productType:', updated.includes('"client-project",\r\n\r\n    description:\r\n      "Live Addis is a professional'));
console.log('✅ Unlock Ethiopia productType:', updated.includes('Unlock Ethiopian Potential",\r\n    productType: "client-project"'));
console.log('✅ Minab productType:', updated.includes('Minab",\r\n    productType: "client-project"'));
console.log('✅ Tibeb productType:', updated.includes('Tibeb",\r\n    productType: "client-project"'));
console.log('✅ PROJECT_ORDER:', updated.includes('PROJECT_ORDER'));
console.log('✅ getAllProjects uses ORDER:', updated.includes('.map(slug => PROJECT_DATABASE.find'));
console.log('Done!');

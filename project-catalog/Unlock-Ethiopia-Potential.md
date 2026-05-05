# Unlock Ethiopia Potential — Bitcoin Mining Summit 2025

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-19+-61DAFB.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6+-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4+-38BDF8.svg)](https://tailwindcss.com/)

> **Unlock Ethiopia Potential** is the official website for Ethiopia's premier Bitcoin Mining Summit, held in Addis Ababa on March 5–6, 2025. The platform serves as the digital face of the event — showcasing the agenda, speakers, partners, and key industry insights that position Ethiopia as a rising global destination for Bitcoin mining.

## 🌟 Key Features

### Core Functionality
- **Event Landing Page**: Animated hero section with event details, date, and venue information
- **Full Event Agenda**: Day-by-day schedule with speaker profiles, LinkedIn links, and session descriptions
- **Speaker Profiles**: Showcase of world-class industry experts with photos and professional backgrounds
- **Partner Showcase**: Responsive grid displaying 13+ partner organizations with logo scaling and external links
- **Vital Industry Statistics**: Data-driven cards covering hashrate, energy allocation, revenue, and company presence
- **Engagement Section**: Interactive cards highlighting Connect, Network, and Discuss pillars
- **Registration Redirect**: Seamless redirect to Google Forms with animated loading state
- **Responsive Navigation**: Sticky navbar with mobile hamburger menu and smooth hover animations

### Design & UX
- **Framer Motion Animations**: Scroll-triggered reveals, floating backgrounds, and micro-interactions throughout
- **Responsive Design**: Mobile-first layout with breakpoints for tablet and desktop
- **Custom Color Palette**: Earthy tones (`#AF8F6F`, `#74512D`, `#A67B5B`) reflecting Ethiopian heritage
- **Poppins Typography**: Clean, modern typeface loaded via Google Fonts
- **Animated Backgrounds**: Floating Bitcoin symbols, pulsing circles, and gradient overlays

## 🏗️ Architecture Overview

The project follows a **component-based single-page application (SPA) architecture** built with React and client-side routing:

```
┌─────────────────────────────────────────────────────┐
│                    App (Router)                      │
│  ┌──────────┐  ┌──────────┐  ┌──────────────────┐  │
│  │   Home   │  │  Agenda  │  │    Register      │  │
│  │  Route   │  │  Route   │  │  (Redirect)      │  │
│  └────┬─────┘  └────┬─────┘  └──────────────────┘  │
│       │              │                               │
│  ┌────┴──────────────┴───────────────────────────┐  │
│  │              Shared Components                │  │
│  │  ┌─────────┐ ┌─────────┐ ┌──────────────┐   │  │
│  │  │ Navbar  │ │ Footer  │ │   Hero       │   │  │
│  │  └─────────┘ └─────────┘ └──────────────┘   │  │
│  │  ┌─────────┐ ┌─────────┐ ┌──────────────┐   │  │
│  │  │Content  │ │ Teams   │ │  Sponsors    │   │  │
│  │  └─────────┘ └─────────┘ └──────────────┘   │  │
│  │  ┌───────────────┐ ┌────────────────────┐    │  │
│  │  │Vital-Info     │ │  Engagement        │    │  │
│  │  └───────────────┘ └────────────────────┘    │  │
│  └──────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────┘
```

### Component Architecture

#### 📄 Pages (Routes)
- **Home** (`/`): Main landing page composing all sections — Hero, Sponsors, Content, Team, Vital Info, Engagement
- **Agenda** (`/agenda`): Full event schedule with timeline layout, speaker cards, and session details
- **Register** (`/register`): Animated redirect page that forwards to Google Forms after 6 seconds

#### 🧩 Shared Components
- **Navbar**: Sticky top navigation with logo, route links, and responsive mobile menu
- **Footer**: Site footer with navigation links and social media icons (Facebook, Twitter, Instagram, LinkedIn)
- **Hero**: Full-viewport landing section with animated Bitcoin symbols, floating Africa watermark, and event CTA
- **Sponsors**: Three-row responsive grid of 13 partner logos with per-logo scaling configuration
- **Content**: Mission statement section with parallax-style background image and scroll-triggered text animations
- **Teams**: Speaker spotlight featuring Robert Luft, Kal Kassa, and Luca Infeld with LinkedIn profiles
- **Vital-Info**: Six data cards covering Ethiopia's Bitcoin mining statistics with scroll-animated reveals
- **Engagement**: Three interactive cards (Connect, Network, Discuss) with hover scale effects and animated icons

## 🛠️ Technology Stack

| Layer | Technology | Version | Purpose |
|-------|------------|---------|---------|
| **Framework** | React | 19+ | UI component library |
| **Build Tool** | Vite | 6+ | Fast development and production builds |
| **Routing** | React Router DOM | 7+ | Client-side SPA routing |
| **Styling** | Tailwind CSS | 4+ | Utility-first CSS framework |
| **Animations** | Framer Motion | 12+ | Declarative React animations |
| **Icons** | React Icons | 5+ | Icon library (FontAwesome, Heroicons) |
| **Linting** | ESLint | 9+ | Code quality and consistency |
| **Fonts** | Google Fonts | — | Poppins font family |
| **UI Components** | Flowbite | 3+ | Tailwind-based component library |
| **Language** | JavaScript (JSX) | ES2020+ | Component logic |

## 📊 Project Structure

```
ethio-bitcoin/
├── public/
│   └── vite.svg                 # Vite favicon
├── src/
│   ├── assets/
│   │   ├── africa.png           # Africa watermark image
│   │   ├── Flag.png             # Ethiopian flag icon
│   │   ├── night.png            # Background image for Content section
│   │   ├── UEPLogo.png          # Event logo
│   │   ├── UEPLogo.jpg          # Event logo (JPEG)
│   │   ├── yellowtilet.svg      # Decorative tile asset
│   │   ├── partners/            # Partner/sponsor logos (13 files)
│   │   └── people/              # Speaker photos (7 files)
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky navigation bar
│   │   ├── Hero.jsx             # Landing hero section
│   │   ├── Content.jsx          # Mission statement section
│   │   ├── Sponsors.jsx         # Partner logo grid
│   │   ├── Teams.jsx            # Speaker profiles
│   │   ├── Vital-Info.jsx       # Industry statistics cards
│   │   ├── Engagment.jsx        # Engagement pillar cards
│   │   └── Footer.jsx           # Site footer
│   ├── routes/
│   │   ├── Home.jsx             # Home page composition
│   │   ├── Agenda.jsx           # Event schedule page
│   │   └── Register.jsx         # Google Forms redirect
│   ├── App.jsx                  # Root component with router
│   ├── App.css                  # Empty app-level styles
│   ├── index.css                # Global styles and Tailwind imports
│   └── main.jsx                 # React entry point
├── index.html                   # HTML entry with CDN links
├── vite.config.js               # Vite + Tailwind plugin config
├── tailwind.config.js           # Tailwind theme (Poppins font)
├── eslint.config.js             # ESLint rules for React
├── package.json                 # Dependencies and scripts
└── LICENSE                      # Apache 2.0 License
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm 9+

### Development Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-org/ethio-bitcoin.git
   cd ethio-bitcoin
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

4. **Build for Production**
   ```bash
   npm run build
   ```

5. **Preview Production Build**
   ```bash
   npm run preview
   ```

6. **Run Linter**
   ```bash
   npm run lint
   ```

## 🎨 Design System

### Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| Primary | `#AF8F6F` | Navbar, headings, accents, card backgrounds |
| Dark Brown | `#74512D` | Hero heading, sponsor section title |
| Medium Brown | `#A67B5B` | CTA buttons, mobile menu, event details |
| Light Beige | `#D6C0B3` | Hover states, gradient endpoints |
| Off-White | `#E4E0E1` | Animated background circles |
| Gray Background | `#F9F7F7` | Card backgrounds, engagement section |

### Typography
- **Primary Font**: Poppins (100–900 weights via Google Fonts)
- **Base Size**: Responsive scaling from `text-xs` to `text-6xl`
- **Line Height**: Tight tracking for headings, relaxed for body text

### Animation Patterns
- **Scroll Reveals**: `useInView` hook triggers fade-in and slide-up animations
- **Floating Elements**: Continuous `x`/`y` translation loops on background decorations
- **Pulse Effects**: Scale and opacity oscillation on decorative circles
- **Hover Interactions**: Scale transforms on cards, buttons, and navigation links
- **Staggered Entries**: Sequential delay-based animations for agenda items

## 📱 Responsive Breakpoints

The application uses Tailwind CSS default breakpoints:
- **Mobile**: Default (no prefix) — single column layouts
- **Small (`sm:`)**: 640px — 2-column grids, adjusted font sizes
- **Medium (`md:`)**: 768px — 3-column grids, desktop navigation
- **Large (`lg:`)**: 1024px — 5-column sponsor grids, max-width containers
- **Extra Large (`xl:`)**: 1280px — Extended padding for statistics section

## 🔗 External Integrations

- **Google Forms**: Registration redirect to event sign-up form
- **LinkedIn**: Speaker profile links (all speakers have clickable LinkedIn profiles)
- **Social Media**: Footer links to Facebook, Twitter, Instagram, and LinkedIn
- **Partner Websites**: Each sponsor logo links to the respective organization's website

## 📄 License

This project is licensed under the [Apache License 2.0](LICENSE).

---

**Unlock Ethiopia Potential** — Pioneering the Future of Ethiopia's Digital Infrastructure | Addis Ababa, March 5–6, 2025 | Hyatt Regency, Meskel Square

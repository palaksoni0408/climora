# Climora — Climate Resilience & Adaptation Pitch Deck
> **Satin Finserv Sankalp 2026 · Phase 1 Submission**  
> Turning Climate Signals into Practical Action for Vulnerable Smallholder Agrarian Communities.

---

## 🌾 Overview

**Climora** is a human-centered climate decision engine and action companion tailored for smallholder farmers and micro-finance institutions (MFIs) in high-vulnerability agrarian belts like Odisha, Bihar, and Eastern Uttar Pradesh.

Climora addresses the critical **adoption gap** in climate tech: while 73% of smallholder farmers receive raw weather alerts, fewer than 14% take verifiable adaptation measures. Climora bridges this divide by converting complex geospatial meteorological data into a simple 3-step vernacular action protocol linked directly to partner resilience micro-credit lines.

---

## ✨ Key Features

- **12 Interactive Presentation Slides**: Widescreen 16:9 presentation deck built with modern dark emerald styling and clean typography.
- **Narrative Flow Modes**: Switch seamlessly between **Problem-First** flow (starts with Slide 2 Problem & Slide 5 Solution) and **Sequential** flow (Slide 1–12).
- **Procedural Lottie Animations (`lottie-react`)**: Real-time Bodymovin JSON climate alert, adaptation finance, and mobile companion animations on Slides 2 & 5 with error-boundary protection.
- **Native PowerPoint Export (`pptxgenjs`)**: One-click download of the complete 12-slide presentation in native `.pptx` format with dark green cards and presenter speaker notes.
- **High-DPI PDF Export (`jspdf` + `html2canvas`)**: Multi-page 16:9 PDF generation at 2x Retina resolution with live progress tracking modal and celebration confetti.
- **Presenter Notes Drawer**: Floating side-drawer with slide-by-slide talking points, target durations, and proof citations (toggle via `N` key).
- **Deck Grid Overview Modal**: 12-slide visual grid selector for rapid navigation (toggle via `G` key).
- **Keyboard Navigation**: Full arrow key (`Left`/`Right`), Space, PageUp/PageDown, and fullscreen support.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler & Dev Server**: Vite 8
- **Styling**: Tailwind CSS
- **Animations**: `lottie-react` + `motion` (Framer Motion)
- **Exports**: `pptxgenjs` (PowerPoint) & `jspdf` + `html2canvas` (PDF)
- **Icons**: Lucide React
- **Celebration Effects**: `canvas-confetti`

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or 20+
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/palaksoni0408/climora-pitch-deck.git
cd climora-pitch-deck

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to view the presentation deck.

### Production Build

```bash
npm run build
npm run preview
```

---

## 📄 License

MIT License. Designed and developed for the Satin Finserv Sankalp 2026 Climate Edition.

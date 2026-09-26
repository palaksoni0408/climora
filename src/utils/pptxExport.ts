import pptxgen from 'pptxgenjs';
import { SLIDE_METADATA } from '../data/slidesData';
import { PRESENTER_NOTES } from '../data/presenterNotes';

// Helper to convert an image URL/path to base64
async function getBase64Image(url: string): Promise<string | null> {
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    const blob = await res.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = () => resolve(null);
      reader.readAsDataURL(blob);
    });
  } catch (err) {
    console.warn('Could not load image for PPTX export:', url, err);
    return null;
  }
}

// Color Palette for Dark Emerald & Dark Boxes
const COLORS = {
  BG_CANVAS: '042017',        // Deep forest emerald background
  BOX_DARK: '061811',         // Dark card fill
  BOX_DARKER: '03130D',       // Darker container fill
  BORDER_EMERALD: '10B981',   // Emerald border
  BORDER_MUTED: '064E3B',     // Subtle border
  BORDER_CYAN: '06B6D4',      // Cyan border
  BORDER_ROSE: 'F43F5E',      // Rose border
  BORDER_AMBER: 'F59E0B',     // Amber border
  TEXT_WHITE: 'FFFFFF',       // Primary text
  TEXT_LIGHT: 'ECFDF5',       // Light emerald text
  TEXT_MUTED: 'A7F3D0',       // Secondary emerald text
  TEXT_GRAY: '94A3B8',        // Slate muted text
  TEXT_DARK_GRAY: '64748B',   // Darker slate text
  ACCENT_EMERALD: '10B981',   // Emerald green
  ACCENT_CYAN: '06B6D4',      // Cyan
  ACCENT_ROSE: 'F43F5E',      // Rose
  ACCENT_AMBER: 'F59E0B',     // Amber
  ACCENT_INDIGO: '818CF8'     // Indigo
};

// Common header & footer builder
function addSlideHeaderAndFooter(
  slide: pptxgen.Slide,
  slideIndex: number,
  category: string,
  title: string,
  subtitle: string
) {
  // Slide Background (Forest Emerald)
  slide.background = { color: COLORS.BG_CANVAS };

  // Top Category Pill Tag
  slide.addShape('rect' as any, {
    x: 0.6,
    y: 0.35,
    w: 2.4,
    h: 0.28,
    fill: { color: COLORS.BOX_DARKER },
    line: { color: COLORS.BORDER_EMERALD, width: 1 }
  });
  slide.addText(category.toUpperCase(), {
    x: 0.6,
    y: 0.35,
    w: 2.4,
    h: 0.28,
    fontSize: 8.5,
    fontFace: 'Arial',
    color: COLORS.ACCENT_EMERALD,
    bold: true,
    align: 'center',
    valign: 'middle'
  });

  // Slide Number & Context Tag (top right)
  slide.addText(`SLIDE ${String(slideIndex + 1).padStart(2, '0')} · SATIN FINSERV SANKALP 2026`, {
    x: 4.5,
    y: 0.35,
    w: 8.2,
    h: 0.28,
    fontSize: 9,
    fontFace: 'Arial',
    color: COLORS.TEXT_MUTED,
    align: 'right',
    valign: 'middle',
    bold: true
  });

  // Main Slide Title
  slide.addText(title, {
    x: 0.6,
    y: 0.68,
    w: 12.1,
    h: 0.42,
    fontSize: 16,
    fontFace: 'Arial',
    color: COLORS.TEXT_WHITE,
    bold: true,
    valign: 'top'
  });

  // Subtitle
  slide.addText(subtitle, {
    x: 0.6,
    y: 1.1,
    w: 12.1,
    h: 0.26,
    fontSize: 10,
    fontFace: 'Arial',
    color: COLORS.TEXT_MUTED,
    italic: false,
    valign: 'top'
  });

  // Footer separator line
  slide.addShape('line' as any, {
    x: 0.6,
    y: 7.05,
    w: 12.13,
    h: 0,
    line: { color: COLORS.BORDER_MUTED, width: 1 }
  });

  // Footer Left Brand
  slide.addText('CLIMORA · Climate-to-Action Companion', {
    x: 0.6,
    y: 7.1,
    w: 4.5,
    h: 0.25,
    fontSize: 8.5,
    fontFace: 'Arial',
    color: COLORS.ACCENT_EMERALD,
    bold: true,
    valign: 'middle'
  });

  // Footer Center
  slide.addText('Phase 1 Pitch Deck · Grounded in 2026 Field Realities', {
    x: 4.8,
    y: 7.1,
    w: 4.0,
    h: 0.25,
    fontSize: 8,
    fontFace: 'Arial',
    color: COLORS.TEXT_GRAY,
    align: 'center',
    valign: 'middle'
  });

  // Footer Right
  slide.addText(`Slide ${slideIndex + 1} of 12`, {
    x: 9.5,
    y: 7.1,
    w: 3.2,
    h: 0.25,
    fontSize: 8.5,
    fontFace: 'Arial',
    color: COLORS.TEXT_MUTED,
    align: 'right',
    bold: true,
    valign: 'middle'
  });

  // Add Presenter Notes to PPTX
  const notes = PRESENTER_NOTES[slideIndex];
  if (notes) {
    const notesText = [
      `TARGET DURATION: ${notes.timeTarget}`,
      `KEY PROOF: ${notes.keyProof}`,
      '',
      'TALKING POINTS:',
      ...notes.talkingPoints.map((pt) => `• ${pt}`)
    ].join('\n');
    slide.addNotes(notesText);
  }
}

/**
 * Generates the full 12-slide Climora PPTX Presentation and initiates browser download
 */
export async function downloadClimoraDeckPptx(onProgress?: (step: string) => void): Promise<void> {
  onProgress?.('Initializing presentation engine...');
  const pres = new pptxgen();

  // Widescreen 16:9 layout (13.33 x 7.5 inches)
  pres.layout = 'LAYOUT_16x9';
  pres.author = 'Climora Team';
  pres.company = 'Climora - Satin Finserv Sankalp 2026';
  pres.title = 'Climora: Bridging the Last-Mile Climate Adoption Gap';
  pres.subject = 'Climate-to-Action Companion for Underserved Rural Smallholders';

  // Load static images if available
  onProgress?.('Loading image assets...');
  const [farmerBase64, earthDataBase64, landscapeBase64] = await Promise.all([
    getBase64Image('/src/assets/images/farmer_climate_smartphone_1790433282005.jpg'),
    getBase64Image('/src/assets/images/climate_earth_data_mesh_1790433295739.jpg'),
    getBase64Image('/src/assets/images/odisha_rural_resilience_1790433313773.jpg')
  ]);

  // ==========================================
  // SLIDE 1: Executive Overview
  // ==========================================
  onProgress?.('Building Slide 1: Executive Overview...');
  {
    const slide = pres.addSlide();
    addSlideHeaderAndFooter(
      slide,
      0,
      'Vision & Architecture',
      'CLIMORA: BRIDGING THE LAST-MILE CLIMATE ADOPTION GAP',
      'Turning local climate signals into practical resilience action for underserved smallholders.'
    );

    // 6 Pillars 3x2 Grid
    const pillars = [
      {
        num: '01',
        title: 'UBIQUITOUS CLIMATE RISKS',
        desc: 'Accelerating weather extremes (+156% heatwaves) impacting smallholders across India.',
        color: COLORS.ACCENT_EMERALD
      },
      {
        num: '02',
        title: 'ADOPTION BARRIERS',
        desc: 'Proven gaps in finance, tenure, technical knowledge, and localized operational context.',
        color: COLORS.ACCENT_CYAN
      },
      {
        num: '03',
        title: 'CAPITAL CONSTRAINTS',
        desc: 'High cost of adaptation capital (>₹18k/acre) limiting proactive risk mitigation.',
        color: COLORS.ACCENT_AMBER
      },
      {
        num: '04',
        title: 'THE SERVICE DEFICIT',
        desc: 'Fragmented advisory systems failing to deliver actionable next steps to farmers.',
        color: COLORS.ACCENT_CYAN
      },
      {
        num: '05',
        title: 'THE IMPACT GAP',
        desc: 'Alerts sent without measuring actual adoption or financial inclusion outcomes.',
        color: COLORS.ACCENT_ROSE
      },
      {
        num: '06',
        title: '"ZERO" FOOTPRINT ARCHITECTURE',
        desc: 'Lightweight, partner-led integration requiring no heavy sensor hardware or overhead.',
        color: COLORS.ACCENT_INDIGO
      }
    ];

    pillars.forEach((p, idx) => {
      const col = idx % 3;
      const row = Math.floor(idx / 3);
      const x = 0.6 + col * 4.1;
      const y = 1.45 + row * 2.65;
      const w = 3.9;
      const h = 2.45;

      // Dark Box Card
      slide.addShape('rect' as any, {
        x,
        y,
        w,
        h,
        fill: { color: COLORS.BOX_DARK },
        line: { color: p.color, width: 1.5 }
      });

      // Pillar Number Pill
      slide.addShape('rect' as any, {
        x: x + 0.25,
        y: y + 0.25,
        w: 0.65,
        h: 0.35,
        fill: { color: COLORS.BOX_DARKER },
        line: { color: p.color, width: 1 }
      });
      slide.addText(p.num, {
        x: x + 0.25,
        y: y + 0.25,
        w: 0.65,
        h: 0.35,
        fontSize: 11,
        fontFace: 'Arial',
        color: p.color,
        bold: true,
        align: 'center',
        valign: 'middle'
      });

      // Pillar Title
      slide.addText(p.title, {
        x: x + 1.05,
        y: y + 0.25,
        w: 2.6,
        h: 0.45,
        fontSize: 11,
        fontFace: 'Arial',
        color: COLORS.TEXT_WHITE,
        bold: true,
        valign: 'top'
      });

      // Divider
      slide.addShape('line' as any, {
        x: x + 0.25,
        y: y + 0.85,
        w: 3.4,
        h: 0,
        line: { color: COLORS.BORDER_MUTED, width: 1 }
      });

      // Description
      slide.addText(p.desc, {
        x: x + 0.25,
        y: y + 0.95,
        w: 3.4,
        h: 1.25,
        fontSize: 10,
        fontFace: 'Arial',
        color: COLORS.TEXT_LIGHT,
        valign: 'top'
      });
    });
  }

  // ==========================================
  // SLIDE 2: The Real-World Problem
  // ==========================================
  onProgress?.('Building Slide 2: Real-World Problem...');
  {
    const slide = pres.addSlide();
    addSlideHeaderAndFooter(
      slide,
      1,
      'The Problem Statement',
      'THE CLIMATE-LIVELIHOOD BLIND SPOT: THE SILENT THREAT OF UNACTIONABLE RISK DATA',
      'Why smallholders receive millions of weather broadcasts but suffer catastrophic climate damage anyway.'
    );

    // Left Column: Persona Card & Stats (width 5.5)
    // 1. Smallholder Persona Box
    slide.addShape('rect' as any, {
      x: 0.6,
      y: 1.45,
      w: 5.5,
      h: 2.55,
      fill: { color: COLORS.BOX_DARK },
      line: { color: COLORS.BORDER_EMERALD, width: 1.5 }
    });

    if (farmerBase64) {
      slide.addImage({
        data: farmerBase64,
        x: 0.75,
        y: 1.6,
        w: 2.5,
        h: 2.25
      });
      slide.addText('ODISHA SMALLHOLDER PROFILE', {
        x: 3.4,
        y: 1.6,
        w: 2.5,
        h: 0.3,
        fontSize: 9.5,
        fontFace: 'Arial',
        color: COLORS.ACCENT_EMERALD,
        bold: true
      });
      slide.addText(
        'Receives complex SMS forecasts like "Rainfall 32mm ±10%".\n\nLeft asking:\n"Do I spray pesticide today or wait? Who will finance drip lines?"',
        {
          x: 3.4,
          y: 2.0,
          w: 2.5,
          h: 1.8,
          fontSize: 9.5,
          fontFace: 'Arial',
          color: COLORS.TEXT_LIGHT
        }
      );
    } else {
      slide.addText(
        'ODISHA SMALLHOLDER PROFILE\n\nReceives complex SMS broadcasts like "Rainfall 32mm ±10%".\n\nLeft asking: "Do I spray pesticide today or wait? Who will finance shade nets?"\n\nTraditional weather apps deliver data points, not operational field decisions.',
        {
          x: 0.85,
          y: 1.65,
          w: 5.0,
          h: 2.15,
          fontSize: 10,
          fontFace: 'Arial',
          color: COLORS.TEXT_LIGHT
        }
      );
    }

    // 2. Stat Box 1: +156% Exposure Escalation
    slide.addShape('rect' as any, {
      x: 0.6,
      y: 4.15,
      w: 5.5,
      h: 1.3,
      fill: { color: COLORS.BOX_DARK },
      line: { color: COLORS.BORDER_ROSE, width: 1.5 }
    });
    slide.addText('+156%', {
      x: 0.85,
      y: 4.25,
      w: 1.8,
      h: 0.65,
      fontSize: 24,
      fontFace: 'Arial',
      color: COLORS.ACCENT_ROSE,
      bold: true
    });
    slide.addText('EXPOSURE ESCALATION (2026)', {
      x: 2.8,
      y: 4.3,
      w: 3.1,
      h: 0.25,
      fontSize: 9,
      fontFace: 'Arial',
      color: COLORS.ACCENT_ROSE,
      bold: true
    });
    slide.addText('Surge in unseasonal heatwaves and delayed monsoons over the past 12 months in agrarian belts.', {
      x: 0.85,
      y: 4.95,
      w: 5.0,
      h: 0.45,
      fontSize: 9,
      fontFace: 'Arial',
      color: COLORS.TEXT_LIGHT
    });

    // 3. Stat Box 2: 73% vs 14% The Last-Mile Adoption Gap
    slide.addShape('rect' as any, {
      x: 0.6,
      y: 5.55,
      w: 5.5,
      h: 1.35,
      fill: { color: COLORS.BOX_DARK },
      line: { color: COLORS.BORDER_EMERALD, width: 1.5 }
    });
    slide.addText('73% vs. <14%', {
      x: 0.85,
      y: 5.65,
      w: 2.5,
      h: 0.6,
      fontSize: 20,
      fontFace: 'Arial',
      color: COLORS.ACCENT_EMERALD,
      bold: true
    });
    slide.addText('THE LAST-MILE ADOPTION GAP', {
      x: 3.4,
      y: 5.7,
      w: 2.5,
      h: 0.25,
      fontSize: 8.5,
      fontFace: 'Arial',
      color: COLORS.ACCENT_EMERALD,
      bold: true
    });
    slide.addText('73% of surveyed smallholders receive weather alerts; less than 14% execute preventive adaptation.', {
      x: 0.85,
      y: 6.3,
      w: 5.0,
      h: 0.5,
      fontSize: 9,
      fontFace: 'Arial',
      color: COLORS.TEXT_LIGHT
    });

    // Right Column: 3 Evidence Cards (width 6.2)
    const evidenceCards = [
      {
        tag: 'EVIDENCE 01 · NATURE INDIA (MARCH 2026)',
        title: 'Empirical Proof: Adoption Stalls at Human & Financial Hurdles',
        body: '321 Odisha smallholders proved that non-technical barriers (credit, tenancy, trust) are the true bottlenecks, not sensor density or weather forecast precision.',
        border: COLORS.BORDER_EMERALD,
        badge: 'EMPIRICAL FIELD STUDY'
      },
      {
        tag: 'EVIDENCE 02 · DOWNTODEARTH REPORT (2026)',
        title: 'Capital Constraints: Adaptation Exceeds ₹18,000 / Acre',
        body: 'Farmers know what needs fixing (mulching, drip kits, micro-insurance) but lack liquidity. Without linked micro-credit rails, weather advisories remain dead text.',
        border: COLORS.BORDER_AMBER,
        badge: 'CAPITAL DEFICIT'
      },
      {
        tag: 'EVIDENCE 03 · ECONOMIC TIMES / WORLD BANK (2026)',
        title: 'Service Deficit: Advisory & Financing Operate in Isolation',
        body: 'Fintech underwriting ignores farmer decisions; weather apps ignore microfinance. Climora creates the unified bridge between climate signal and micro-finance action.',
        border: COLORS.BORDER_CYAN,
        badge: 'SILOED ECOSYSTEM'
      }
    ];

    evidenceCards.forEach((card, idx) => {
      const y = 1.45 + idx * 1.8;
      const h = 1.68;

      slide.addShape('rect' as any, {
        x: 6.5,
        y,
        w: 6.2,
        h,
        fill: { color: COLORS.BOX_DARK },
        line: { color: card.border, width: 1.5 }
      });

      slide.addText(card.tag, {
        x: 6.75,
        y: y + 0.15,
        w: 4.2,
        h: 0.25,
        fontSize: 8.5,
        fontFace: 'Arial',
        color: card.border,
        bold: true
      });

      slide.addText(card.title, {
        x: 6.75,
        y: y + 0.42,
        w: 5.7,
        h: 0.35,
        fontSize: 10.5,
        fontFace: 'Arial',
        color: COLORS.TEXT_WHITE,
        bold: true
      });

      slide.addText(card.body, {
        x: 6.75,
        y: y + 0.8,
        w: 5.7,
        h: 0.75,
        fontSize: 9,
        fontFace: 'Arial',
        color: COLORS.TEXT_LIGHT
      });
    });
  }

  // ==========================================
  // SLIDE 3: Climate-Tech Convergence & Signals
  // ==========================================
  onProgress?.('Building Slide 3: Evidence & Convergence...');
  {
    const slide = pres.addSlide();
    addSlideHeaderAndFooter(
      slide,
      2,
      'Market & Evidence Convergence',
      'CLIMATE-TECH CONVERGENCE: CONNECTING REAL DEVELOPMENTS TO FIELD REALITIES',
      'How three simultaneous 2026 breakthroughs make the Climora companion timely and necessary.'
    );

    // Left: 3 Ascending Phase Pillars (width 7.0)
    const phases = [
      {
        phase: 'PHASE 01',
        date: 'March 2026',
        title: 'Adoption Barriers Documented',
        source: 'Nature India (321 Farmers)',
        bullets: [
          'Proves climate tools fail due to human and operational hurdles.',
          'Weather alerts alone cannot drive action without operational context.',
          'Key signal: The Delivery Deficit must be bridged.'
        ]
      },
      {
        phase: 'PHASE 02',
        date: 'March 2026',
        title: 'Adaptation Capital Scarcity',
        source: 'DownToEarth India Research',
        bullets: [
          'Shows resilience requires proactive, timely liquidity.',
          'Micro-finance rails are the decisive hinge for farm survival.',
          'Key signal: Climate Adaptation Finance is critical.'
        ]
      },
      {
        phase: 'PHASE 03',
        date: 'March 2026',
        title: 'Tech & Advisory Convergence',
        source: 'Economic Times & NITI Aayog',
        bullets: [
          'Advisory, banking, and micro-inputs are converging.',
          'Mobile broadband & UPI reach the deepest rural belts.',
          'Key signal: Partner-embedded distribution rails exist.'
        ]
      }
    ];

    phases.forEach((p, idx) => {
      const x = 0.6 + idx * 2.45;
      const y = 1.45;
      const w = 2.35;
      const h = 5.45;

      slide.addShape('rect' as any, {
        x,
        y,
        w,
        h,
        fill: { color: COLORS.BOX_DARK },
        line: { color: COLORS.BORDER_EMERALD, width: 1.5 }
      });

      slide.addText(`${p.phase} · ${p.date}`, {
        x: x + 0.2,
        y: y + 0.25,
        w: 1.95,
        h: 0.25,
        fontSize: 8.5,
        fontFace: 'Arial',
        color: COLORS.ACCENT_EMERALD,
        bold: true
      });

      slide.addText(p.title, {
        x: x + 0.2,
        y: y + 0.55,
        w: 1.95,
        h: 0.55,
        fontSize: 11,
        fontFace: 'Arial',
        color: COLORS.TEXT_WHITE,
        bold: true
      });

      slide.addText(p.source, {
        x: x + 0.2,
        y: y + 1.15,
        w: 1.95,
        h: 0.25,
        fontSize: 8.5,
        fontFace: 'Arial',
        color: COLORS.ACCENT_CYAN,
        bold: true
      });

      slide.addShape('line' as any, {
        x: x + 0.2,
        y: y + 1.45,
        w: 1.95,
        h: 0,
        line: { color: COLORS.BORDER_MUTED, width: 1 }
      });

      const bulletsText = p.bullets.map((b) => `• ${b}`).join('\n\n');
      slide.addText(bulletsText, {
        x: x + 0.2,
        y: y + 1.6,
        w: 1.95,
        h: 3.5,
        fontSize: 9.5,
        fontFace: 'Arial',
        color: COLORS.TEXT_LIGHT,
        valign: 'top'
      });
    });

    // Right: Paradigm Shift Box (width 4.7)
    slide.addShape('rect' as any, {
      x: 8.0,
      y: 1.45,
      w: 4.7,
      h: 5.45,
      fill: { color: COLORS.BOX_DARK },
      line: { color: COLORS.BORDER_CYAN, width: 1.5 }
    });

    slide.addText('THE 2026 PARADIGM SHIFT', {
      x: 8.3,
      y: 1.7,
      w: 4.1,
      h: 0.35,
      fontSize: 12,
      fontFace: 'Arial',
      color: COLORS.ACCENT_CYAN,
      bold: true
    });

    // From Box
    slide.addShape('rect' as any, {
      x: 8.3,
      y: 2.2,
      w: 4.1,
      h: 1.5,
      fill: { color: COLORS.BOX_DARKER },
      line: { color: COLORS.BORDER_ROSE, width: 1 }
    });
    slide.addText('FROM: PASSIVE SATELLITE MONITORING', {
      x: 8.5,
      y: 2.3,
      w: 3.7,
      h: 0.25,
      fontSize: 9,
      fontFace: 'Arial',
      color: COLORS.ACCENT_ROSE,
      bold: true
    });
    slide.addText('• Raw weather telemetry & generic SMS broadcasts\n• Lender-centric underwriting models ignoring farmer needs\n• High drop-off: unread messages and zero field action', {
      x: 8.5,
      y: 2.6,
      w: 3.7,
      h: 1.0,
      fontSize: 8.5,
      fontFace: 'Arial',
      color: COLORS.TEXT_LIGHT
    });

    // Arrow Down Indicator
    slide.addText('▼  SHIFTS TO  ▼', {
      x: 8.3,
      y: 3.8,
      w: 4.1,
      h: 0.25,
      fontSize: 9,
      fontFace: 'Arial',
      color: COLORS.ACCENT_EMERALD,
      align: 'center',
      bold: true
    });

    // To Box
    slide.addShape('rect' as any, {
      x: 8.3,
      y: 4.15,
      w: 4.1,
      h: 2.45,
      fill: { color: COLORS.BOX_DARKER },
      line: { color: COLORS.BORDER_EMERALD, width: 1.5 }
    });
    slide.addText('TO: PARTNER-LED ACTION LOOP', {
      x: 8.5,
      y: 4.3,
      w: 3.7,
      h: 0.25,
      fontSize: 9.5,
      fontFace: 'Arial',
      color: COLORS.ACCENT_EMERALD,
      bold: true
    });
    slide.addText(
      '• Vernacular, step-by-step chore guidance (3 actionable steps)\n• Direct signposting to partner micro-finance (Satin Finserv)\n• Verifiable field adoption with measurable yield protection\n• Non-credit issuing design: neutral, trusted farmer advocacy',
      {
        x: 8.5,
        y: 4.65,
        w: 3.7,
        h: 1.8,
        fontSize: 9,
        fontFace: 'Arial',
        color: COLORS.TEXT_LIGHT
      }
    );
  }

  // ==========================================
  // SLIDE 4: Gap Analysis Matrix
  // ==========================================
  onProgress?.('Building Slide 4: Market Gap Analysis...');
  {
    const slide = pres.addSlide();
    addSlideHeaderAndFooter(
      slide,
      3,
      'Gap Analysis',
      'THE MARKET GAP: INSIGHT vs. ACTION vs. ADAPTATION',
      'Why Traditional Weather Apps & AI Underwriting Fail Smallholders in Agrarian India'
    );

    // Full Width Comparison Table
    const tableData: any[][] = [
      [
        { text: 'STRATEGIC DIMENSION', options: { bold: true, color: COLORS.TEXT_WHITE, fill: '03130D', fontSize: 9.5 } },
        { text: 'CONVENTIONAL WEATHER APPS', options: { bold: true, color: COLORS.TEXT_GRAY, fill: '03130D', fontSize: 9.5 } },
        { text: 'AGRI-AI CREDIT ANALYTICS', options: { bold: true, color: COLORS.ACCENT_CYAN, fill: '03130D', fontSize: 9.5 } },
        { text: 'CLIMORA COMPANION', options: { bold: true, color: COLORS.ACCENT_EMERALD, fill: '042015', fontSize: 9.5 } }
      ],
      [
        { text: 'LOCAL RISK TRANSLATION', options: { bold: true, color: COLORS.TEXT_WHITE, fill: COLORS.BOX_DARK, fontSize: 8.5 } },
        { text: 'Broad regional forecasts (20-50km) without farm or crop context.', options: { color: COLORS.TEXT_LIGHT, fill: COLORS.BOX_DARK, fontSize: 8.5 } },
        { text: 'Analyzes plot risk via satellites strictly for lender risk scoring.', options: { color: COLORS.TEXT_LIGHT, fill: COLORS.BOX_DARK, fontSize: 8.5 } },
        { text: 'Translates hyper-local risk into 3 practical, vernacular field action steps.', options: { bold: true, color: COLORS.ACCENT_EMERALD, fill: '05281B', fontSize: 8.5 } }
      ],
      [
        { text: 'FINANCIAL INCLUSION LINK', options: { bold: true, color: COLORS.TEXT_WHITE, fill: COLORS.BOX_DARK, fontSize: 8.5 } },
        { text: 'Blind. No link to adaptation micro-loans, insurance, or subsidies.', options: { color: COLORS.TEXT_LIGHT, fill: COLORS.BOX_DARK, fontSize: 8.5 } },
        { text: 'Lender-centric. Scores farmer creditworthiness; doesn\'t assist farmers.', options: { color: COLORS.TEXT_LIGHT, fill: COLORS.BOX_DARK, fontSize: 8.5 } },
        { text: 'Directly bridges risk warnings to partner micro-finance & resilience lines.', options: { bold: true, color: COLORS.ACCENT_EMERALD, fill: '05281B', fontSize: 8.5 } }
      ],
      [
        { text: 'LAST-MILE DELIVERY', options: { bold: true, color: COLORS.TEXT_WHITE, fill: COLORS.BOX_DARK, fontSize: 8.5 } },
        { text: 'Low. Sends English/Hindi SMS alerts that confuse smallholders.', options: { color: COLORS.TEXT_LIGHT, fill: COLORS.BOX_DARK, fontSize: 8.5 } },
        { text: 'Medium. Delivered to bank loan officers on desktop dashboards.', options: { color: COLORS.TEXT_LIGHT, fill: COLORS.BOX_DARK, fontSize: 8.5 } },
        { text: 'High. Local dialect (Odia/Hindi) voice notes, lightweight web & SMS checklist.', options: { bold: true, color: COLORS.ACCENT_EMERALD, fill: '05281B', fontSize: 8.5 } }
      ],
      [
        { text: 'OUTCOME MEASUREMENT', options: { bold: true, color: COLORS.TEXT_WHITE, fill: COLORS.BOX_DARK, fontSize: 8.5 } },
        { text: 'Measures broadcast delivery & download counts (vanity metric).', options: { color: COLORS.TEXT_LIGHT, fill: COLORS.BOX_DARK, fontSize: 8.5 } },
        { text: 'Measures loan portfolio default rate and underwriting speed.', options: { color: COLORS.TEXT_LIGHT, fill: COLORS.BOX_DARK, fontSize: 8.5 } },
        { text: 'Measures verified field adoption & self-reported crop loss avoided.', options: { bold: true, color: COLORS.ACCENT_EMERALD, fill: '05281B', fontSize: 8.5 } }
      ]
    ];

    slide.addTable(tableData, {
      x: 0.6,
      y: 1.45,
      w: 12.1,
      h: 3.4,
      colW: [2.5, 3.2, 3.2, 3.2],
      border: { pt: 1, color: COLORS.BORDER_MUTED }
    });

    // Bottom Summary Box: The 3 Fatal Flaws
    slide.addShape('rect' as any, {
      x: 0.6,
      y: 5.05,
      w: 12.1,
      h: 1.85,
      fill: { color: COLORS.BOX_DARK },
      line: { color: COLORS.BORDER_ROSE, width: 1.5 }
    });

    slide.addText('THE THREE FATAL FLAWS OF EXISTING SOLUTIONS', {
      x: 0.85,
      y: 5.2,
      w: 11.6,
      h: 0.3,
      fontSize: 10.5,
      fontFace: 'Arial',
      color: COLORS.ACCENT_ROSE,
      bold: true
    });

    const flaws = [
      {
        title: '1. No Actionability',
        desc: 'Broad regional forecasts don\'t answer "What should I do today in my field?"'
      },
      {
        title: '2. Total Fragmentation',
        desc: 'Weather data, agricultural advisory, and microfinance exist in completely isolated silos.'
      },
      {
        title: '3. Adoption Blindness',
        desc: 'Broadcasters celebrate "1M alerts sent" while crops continue to fail from zero action.'
      }
    ];

    flaws.forEach((f, idx) => {
      const fx = 0.85 + idx * 3.9;
      slide.addText(f.title, {
        x: fx,
        y: 5.55,
        w: 3.7,
        h: 0.25,
        fontSize: 9.5,
        fontFace: 'Arial',
        color: COLORS.TEXT_WHITE,
        bold: true
      });
      slide.addText(f.desc, {
        x: fx,
        y: 5.85,
        w: 3.7,
        h: 0.9,
        fontSize: 8.5,
        fontFace: 'Arial',
        color: COLORS.TEXT_LIGHT
      });
    });
  }

  // ==========================================
  // SLIDE 5: Our Solution (Climora Platform)
  // ==========================================
  onProgress?.('Building Slide 5: The Climora Solution...');
  {
    const slide = pres.addSlide();
    addSlideHeaderAndFooter(
      slide,
      4,
      'Our Unique Solution',
      'OUR SOLUTION: CLIMORA PLATFORM',
      'Translating Hyper-Local Signals into 3-Step Action Plans with Partner Micro-Finance'
    );

    // Left: Mobile Companion Simulation Box (width 6.8)
    slide.addShape('rect' as any, {
      x: 0.6,
      y: 1.45,
      w: 6.8,
      h: 5.45,
      fill: { color: COLORS.BOX_DARK },
      line: { color: COLORS.BORDER_EMERALD, width: 1.5 }
    });

    slide.addText('CLIMORA MOBILE COMPANION (ODIA / HINDI / ENGLISH)', {
      x: 0.85,
      y: 1.65,
      w: 6.3,
      h: 0.3,
      fontSize: 10,
      fontFace: 'Arial',
      color: COLORS.ACCENT_EMERALD,
      bold: true
    });

    // Alert Card simulation
    slide.addShape('rect' as any, {
      x: 0.85,
      y: 2.05,
      w: 6.3,
      h: 1.15,
      fill: { color: COLORS.BOX_DARKER },
      line: { color: COLORS.BORDER_ROSE, width: 1 }
    });
    slide.addText('HEAT STRESS ALERT · BALASORE & MAYURBHANJ, ODISHA', {
      x: 1.05,
      y: 2.15,
      w: 5.9,
      h: 0.25,
      fontSize: 9,
      fontFace: 'Arial',
      color: COLORS.ACCENT_ROSE,
      bold: true
    });
    slide.addText('High heatwave expected in 48 hrs. Soil moisture deficit at 34%. Forecast confidence: 89%.', {
      x: 1.05,
      y: 2.45,
      w: 5.9,
      h: 0.65,
      fontSize: 8.5,
      fontFace: 'Arial',
      color: COLORS.TEXT_LIGHT
    });

    // 3 Practical Steps
    slide.addText('RECOMMENDED 3-STEP ADOPTION PLAN:', {
      x: 0.85,
      y: 3.35,
      w: 6.3,
      h: 0.25,
      fontSize: 9.5,
      fontFace: 'Arial',
      color: COLORS.TEXT_WHITE,
      bold: true
    });

    const steps = [
      'Step 1: Apply organic straw mulch around standing crops to lock in soil moisture.',
      'Step 2: Shift irrigation schedule strictly to early morning (05:00-07:00) or post-sunset.',
      'Step 3: Access Partner Shade-Net Micro-Credit (0% down) via Satin Finserv before heat spike.'
    ];

    steps.forEach((st, idx) => {
      slide.addShape('rect' as any, {
        x: 0.85,
        y: 3.65 + idx * 0.75,
        w: 6.3,
        h: 0.65,
        fill: { color: idx === 2 ? '05281B' : COLORS.BOX_DARKER },
        line: { color: idx === 2 ? COLORS.BORDER_EMERALD : COLORS.BORDER_MUTED, width: 1 }
      });
      slide.addText(st, {
        x: 1.05,
        y: 3.7 + idx * 0.75,
        w: 5.9,
        h: 0.55,
        fontSize: 8.5,
        fontFace: 'Arial',
        color: idx === 2 ? COLORS.ACCENT_EMERALD : COLORS.TEXT_LIGHT,
        bold: idx === 2
      });
    });

    // Partner Referral Link Button Simulation
    slide.addShape('rect' as any, {
      x: 0.85,
      y: 6.05,
      w: 6.3,
      h: 0.65,
      fill: { color: COLORS.ACCENT_EMERALD },
      line: { color: COLORS.BORDER_EMERALD, width: 1 }
    });
    slide.addText('PARTNER LINK: APPLY FOR SHADE-NET MICRO-CREDIT (SATIN FINSERV)', {
      x: 0.85,
      y: 6.05,
      w: 6.3,
      h: 0.65,
      fontSize: 9.5,
      fontFace: 'Arial',
      color: '03130D',
      bold: true,
      align: 'center',
      valign: 'middle'
    });

    // Right: 3 Design Safeguards & Principles (width 5.0)
    slide.addShape('rect' as any, {
      x: 7.7,
      y: 1.45,
      w: 5.0,
      h: 5.45,
      fill: { color: COLORS.BOX_DARK },
      line: { color: COLORS.BORDER_CYAN, width: 1.5 }
    });

    slide.addText('PLATFORM DESIGN SAFEGUARDS', {
      x: 7.95,
      y: 1.65,
      w: 4.5,
      h: 0.3,
      fontSize: 11,
      fontFace: 'Arial',
      color: COLORS.ACCENT_CYAN,
      bold: true
    });

    const safeguards = [
      {
        title: 'Non-Credit Issuing Design',
        desc: 'Climora never underwrites or disburses debt directly. We signpost regulated partners (e.g. Satin Finserv) as a neutral, trusted companion.',
        tag: 'REGULATORY COMPLIANCE'
      },
      {
        title: 'Transparent Uncertainty',
        desc: 'Forecast confidence levels (e.g. 89% vs. 62%) are communicated plainly. No black-box promises or false certainty in volatile weather.',
        tag: 'ETHICAL AI & RISK'
      },
      {
        title: 'Vernacular Audio & Offline SMS',
        desc: 'Full Odia, Hindi, and Bengali voice notes with 2G SMS dial-in fallback. No farmer is excluded by low literacy or smartphone access.',
        tag: 'LAST-MILE INCLUSION'
      }
    ];

    safeguards.forEach((sg, idx) => {
      const sy = 2.15 + idx * 1.55;
      slide.addShape('rect' as any, {
        x: 7.95,
        y: sy,
        w: 4.5,
        h: 1.4,
        fill: { color: COLORS.BOX_DARKER },
        line: { color: COLORS.BORDER_MUTED, width: 1 }
      });
      slide.addText(sg.tag, {
        x: 8.15,
        y: sy + 0.1,
        w: 4.1,
        h: 0.2,
        fontSize: 7.5,
        fontFace: 'Arial',
        color: COLORS.ACCENT_CYAN,
        bold: true
      });
      slide.addText(sg.title, {
        x: 8.15,
        y: sy + 0.32,
        w: 4.1,
        h: 0.25,
        fontSize: 10,
        fontFace: 'Arial',
        color: COLORS.TEXT_WHITE,
        bold: true
      });
      slide.addText(sg.desc, {
        x: 8.15,
        y: sy + 0.6,
        w: 4.1,
        h: 0.7,
        fontSize: 8.5,
        fontFace: 'Arial',
        color: COLORS.TEXT_LIGHT
      });
    });
  }

  // ==========================================
  // SLIDE 6: Technical Architecture (Gated Pipeline)
  // ==========================================
  onProgress?.('Building Slide 6: Technical Architecture...');
  {
    const slide = pres.addSlide();
    addSlideHeaderAndFooter(
      slide,
      5,
      'Technical Architecture',
      'CLIMORA ENGINE: LIGHTWEIGHT PRE-DEPLOYMENT PIPELINE',
      'Four Isolated Processing Gates & Explainable Risk Scoring with Zero Heavy Infrastructure'
    );

    // 4 Processing Gates (Horizontal)
    const gates = [
      {
        gate: 'GATE 01',
        name: 'Multi-Source Data Intake',
        color: COLORS.ACCENT_EMERALD,
        bullets: [
          'Open-Meteo & IMD API integration',
          'Sentinel-2 soil moisture indices',
          'ERA5 Reanalysis historical baselines',
          'Consent-first anonymous coordinate grid'
        ]
      },
      {
        gate: 'GATE 02',
        name: 'Risk Processing Engine',
        color: COLORS.ACCENT_CYAN,
        bullets: [
          'Soil moisture anomaly scoring (0-100)',
          'Heat-degree days & crop stage indexing',
          'Localized micro-topography weighting',
          'Deterministic rule thresholding'
        ]
      },
      {
        gate: 'GATE 03',
        name: 'Action Synthesis Engine',
        color: COLORS.ACCENT_AMBER,
        bullets: [
          'Rule-based agronomist-validated library',
          '3-step prioritized chore generation',
          'Odia, Hindi & Bengali language translation',
          'Plain-language confidence scoring'
        ]
      },
      {
        gate: 'GATE 04',
        name: 'Partner Integration Gate',
        color: COLORS.ACCENT_INDIGO,
        bullets: [
          'Partner referral link matching (Satin)',
          'Tokenized privacy, zero PII transfer',
          'Webhooks to MFI risk dashboards',
          'SMS & audio push delivery channel'
        ]
      }
    ];

    gates.forEach((g, idx) => {
      const x = 0.6 + idx * 3.05;
      const y = 1.45;
      const w = 2.95;
      const h = 3.6;

      slide.addShape('rect' as any, {
        x,
        y,
        w,
        h,
        fill: { color: COLORS.BOX_DARK },
        line: { color: g.color, width: 1.5 }
      });

      slide.addText(g.gate, {
        x: x + 0.2,
        y: y + 0.2,
        w: 2.55,
        h: 0.25,
        fontSize: 9,
        fontFace: 'Arial',
        color: g.color,
        bold: true
      });

      slide.addText(g.name, {
        x: x + 0.2,
        y: y + 0.48,
        w: 2.55,
        h: 0.5,
        fontSize: 10.5,
        fontFace: 'Arial',
        color: COLORS.TEXT_WHITE,
        bold: true
      });

      slide.addShape('line' as any, {
        x: x + 0.2,
        y: y + 1.05,
        w: 2.55,
        h: 0,
        line: { color: COLORS.BORDER_MUTED, width: 1 }
      });

      const bulletsText = g.bullets.map((b) => `• ${b}`).join('\n\n');
      slide.addText(bulletsText, {
        x: x + 0.2,
        y: y + 1.2,
        w: 2.55,
        h: 2.2,
        fontSize: 8.5,
        fontFace: 'Arial',
        color: COLORS.TEXT_LIGHT,
        valign: 'top'
      });
    });

    // Bottom Architecture Invariants Box
    slide.addShape('rect' as any, {
      x: 0.6,
      y: 5.25,
      w: 12.1,
      h: 1.65,
      fill: { color: COLORS.BOX_DARK },
      line: { color: COLORS.BORDER_EMERALD, width: 1.5 }
    });

    slide.addText('CORE ARCHITECTURE INVARIANTS & SAFETY GUARANTEES', {
      x: 0.85,
      y: 5.4,
      w: 11.6,
      h: 0.25,
      fontSize: 10,
      fontFace: 'Arial',
      color: COLORS.ACCENT_EMERALD,
      bold: true
    });

    const invariants = [
      {
        name: 'Zero PII Retention',
        desc: 'Anonymous plot coordinates only; zero borrower PII stored on Climora servers.'
      },
      {
        name: 'Multi-Source Consensus',
        desc: 'Validates satellite indices with local IMD weather station ground truths.'
      },
      {
        name: '100% Offline SMS Fallback',
        desc: 'Engine compiles actions into compressed 140-char vernacular SMS & IVR audio.'
      },
      {
        name: 'Sub-500ms Response',
        desc: 'Lightweight pre-computed risk matrix enables rapid real-time lookup.'
      }
    ];

    invariants.forEach((inv, idx) => {
      const ix = 0.85 + idx * 2.95;
      slide.addText(inv.name, {
        x: ix,
        y: 5.75,
        w: 2.8,
        h: 0.25,
        fontSize: 9.5,
        fontFace: 'Arial',
        color: COLORS.TEXT_WHITE,
        bold: true
      });
      slide.addText(inv.desc, {
        x: ix,
        y: 6.05,
        w: 2.8,
        h: 0.75,
        fontSize: 8.5,
        fontFace: 'Arial',
        color: COLORS.TEXT_LIGHT
      });
    });
  }

  // ==========================================
  // SLIDE 7: Differentiation & Strategic Moats
  // ==========================================
  onProgress?.('Building Slide 7: Differentiation...');
  {
    const slide = pres.addSlide();
    addSlideHeaderAndFooter(
      slide,
      6,
      'Competitive Edge',
      'DIFFERENTIATION: NOT ANOTHER ALERT',
      'Capability Matrix & Strategic Defense Across 6 Dimensions'
    );

    // Capability Matrix Table (width 7.0)
    const capTable: any[][] = [
      [
        { text: 'CAPABILITY DIMENSION', options: { bold: true, color: COLORS.TEXT_WHITE, fill: '03130D', fontSize: 8.5 } },
        { text: 'WEATHER APPS', options: { bold: true, color: COLORS.TEXT_GRAY, fill: '03130D', fontSize: 8.5, align: 'center' } },
        { text: 'CREDIT AGRI-AI', options: { bold: true, color: COLORS.ACCENT_CYAN, fill: '03130D', fontSize: 8.5, align: 'center' } },
        { text: 'CLIMORA', options: { bold: true, color: COLORS.ACCENT_EMERALD, fill: '042015', fontSize: 8.5, align: 'center' } }
      ],
      [
        { text: 'Localized Risk Advisory', options: { color: COLORS.TEXT_LIGHT, fill: COLORS.BOX_DARK, fontSize: 8 } },
        { text: '✓ Yes', options: { color: COLORS.TEXT_LIGHT, fill: COLORS.BOX_DARK, fontSize: 8, align: 'center' } },
        { text: '✓ Yes', options: { color: COLORS.TEXT_LIGHT, fill: COLORS.BOX_DARK, fontSize: 8, align: 'center' } },
        { text: '✓ 100% Yes', options: { bold: true, color: COLORS.ACCENT_EMERALD, fill: '05281B', fontSize: 8, align: 'center' } }
      ],
      [
        { text: 'Practical Action Planning (3-Step)', options: { color: COLORS.TEXT_LIGHT, fill: COLORS.BOX_DARK, fontSize: 8 } },
        { text: '✗ No', options: { color: COLORS.ACCENT_ROSE, fill: COLORS.BOX_DARK, fontSize: 8, align: 'center' } },
        { text: '✗ No', options: { color: COLORS.ACCENT_ROSE, fill: COLORS.BOX_DARK, fontSize: 8, align: 'center' } },
        { text: '✓ 100% Yes', options: { bold: true, color: COLORS.ACCENT_EMERALD, fill: '05281B', fontSize: 8, align: 'center' } }
      ],
      [
        { text: 'Micro-Agri Service Navigation', options: { color: COLORS.TEXT_LIGHT, fill: COLORS.BOX_DARK, fontSize: 8 } },
        { text: '✗ No', options: { color: COLORS.ACCENT_ROSE, fill: COLORS.BOX_DARK, fontSize: 8, align: 'center' } },
        { text: '✗ No', options: { color: COLORS.ACCENT_ROSE, fill: COLORS.BOX_DARK, fontSize: 8, align: 'center' } },
        { text: '✓ 100% Yes', options: { bold: true, color: COLORS.ACCENT_EMERALD, fill: '05281B', fontSize: 8, align: 'center' } }
      ],
      [
        { text: 'Financial-Partner Referral Link', options: { color: COLORS.TEXT_LIGHT, fill: COLORS.BOX_DARK, fontSize: 8 } },
        { text: '✗ No', options: { color: COLORS.ACCENT_ROSE, fill: COLORS.BOX_DARK, fontSize: 8, align: 'center' } },
        { text: '✓ Yes (Lenders)', options: { color: COLORS.ACCENT_CYAN, fill: COLORS.BOX_DARK, fontSize: 8, align: 'center' } },
        { text: '✓ 100% Yes (Borrowers)', options: { bold: true, color: COLORS.ACCENT_EMERALD, fill: '05281B', fontSize: 8, align: 'center' } }
      ],
      [
        { text: 'Zero-Pipeline Overhead Footprint', options: { color: COLORS.TEXT_LIGHT, fill: COLORS.BOX_DARK, fontSize: 8 } },
        { text: '✓ Yes', options: { color: COLORS.TEXT_LIGHT, fill: COLORS.BOX_DARK, fontSize: 8, align: 'center' } },
        { text: '✗ Heavy Infra', options: { color: COLORS.ACCENT_ROSE, fill: COLORS.BOX_DARK, fontSize: 8, align: 'center' } },
        { text: '✓ 100% Yes', options: { bold: true, color: COLORS.ACCENT_EMERALD, fill: '05281B', fontSize: 8, align: 'center' } }
      ],
      [
        { text: 'Verified Outcome Measurement', options: { color: COLORS.TEXT_LIGHT, fill: COLORS.BOX_DARK, fontSize: 8 } },
        { text: '✗ No', options: { color: COLORS.ACCENT_ROSE, fill: COLORS.BOX_DARK, fontSize: 8, align: 'center' } },
        { text: '✗ No', options: { color: COLORS.ACCENT_ROSE, fill: COLORS.BOX_DARK, fontSize: 8, align: 'center' } },
        { text: '✓ 100% Yes', options: { bold: true, color: COLORS.ACCENT_EMERALD, fill: '05281B', fontSize: 8, align: 'center' } }
      ]
    ];

    slide.addTable(capTable, {
      x: 0.6,
      y: 1.45,
      w: 6.8,
      h: 5.45,
      colW: [2.8, 1.2, 1.4, 1.4],
      border: { pt: 1, color: COLORS.BORDER_MUTED }
    });

    // Right: 3 Defensible Strategic Moats (width 5.0)
    slide.addShape('rect' as any, {
      x: 7.7,
      y: 1.45,
      w: 5.0,
      h: 5.45,
      fill: { color: COLORS.BOX_DARK },
      line: { color: COLORS.BORDER_EMERALD, width: 1.5 }
    });

    slide.addText('THREE DEFENSIBLE STRATEGIC MOATS', {
      x: 7.95,
      y: 1.65,
      w: 4.5,
      h: 0.3,
      fontSize: 11,
      fontFace: 'Arial',
      color: COLORS.ACCENT_EMERALD,
      bold: true
    });

    const moats = [
      {
        num: 'MOAT 01',
        title: 'Action-First Vernacular Translation',
        desc: 'While competitors output raw meteorology, Climora translates signals into 3 immediate chores in local dialects, creating high retention.'
      },
      {
        num: 'MOAT 02',
        title: 'Partner-Embedded Distribution Rail',
        desc: 'Zero user acquisition cost by riding existing MFI branch networks (Satin Finserv), village field officers, and center meetings.'
      },
      {
        num: 'MOAT 03',
        title: 'Lightweight Zero-Overhead Tech',
        desc: 'No expensive proprietary sensors, drones, or heavy server clusters. Edge-cached algorithms scale to 100k+ smallholders at near-zero marginal cost.'
      }
    ];

    moats.forEach((m, idx) => {
      const my = 2.15 + idx * 1.55;
      slide.addShape('rect' as any, {
        x: 7.95,
        y: my,
        w: 4.5,
        h: 1.4,
        fill: { color: COLORS.BOX_DARKER },
        line: { color: COLORS.BORDER_MUTED, width: 1 }
      });
      slide.addText(m.num, {
        x: 8.15,
        y: my + 0.1,
        w: 4.1,
        h: 0.2,
        fontSize: 7.5,
        fontFace: 'Arial',
        color: COLORS.ACCENT_EMERALD,
        bold: true
      });
      slide.addText(m.title, {
        x: 8.15,
        y: my + 0.32,
        w: 4.1,
        h: 0.25,
        fontSize: 10,
        fontFace: 'Arial',
        color: COLORS.TEXT_WHITE,
        bold: true
      });
      slide.addText(m.desc, {
        x: 8.15,
        y: my + 0.6,
        w: 4.1,
        h: 0.7,
        fontSize: 8.5,
        fontFace: 'Arial',
        color: COLORS.TEXT_LIGHT
      });
    });
  }

  // ==========================================
  // SLIDE 8: Business Model & Monetization
  // ==========================================
  onProgress?.('Building Slide 8: Business Model...');
  {
    const slide = pres.addSlide();
    addSlideHeaderAndFooter(
      slide,
      7,
      'Business Model',
      'TARGET USERS & B2B/B2G SUSTAINABLE BUSINESS MODEL',
      'High-Margin Institutional Software Keeping Resilience Tools 100% Free for Smallholder Farmers'
    );

    // Top: Two-Sided Ecosystem Boxes
    // Left: End Users (Free)
    slide.addShape('rect' as any, {
      x: 0.6,
      y: 1.45,
      w: 5.9,
      h: 2.2,
      fill: { color: COLORS.BOX_DARK },
      line: { color: COLORS.BORDER_EMERALD, width: 1.5 }
    });
    slide.addText('END USERS (100% FREE FOREVER)', {
      x: 0.85,
      y: 1.65,
      w: 5.4,
      h: 0.25,
      fontSize: 10,
      fontFace: 'Arial',
      color: COLORS.ACCENT_EMERALD,
      bold: true
    });
    slide.addText(
      '• Smallholder farmers & rural agrarian households (<2 hectares)\n• Primary geography: Odisha Vulnerable Agro-Climatic Belt\n• Free SMS, audio dial-in & lightweight mobile companion web app\n• Zero financial burden: farmers never pay for risk alerts or recommendations',
      {
        x: 0.85,
        y: 2.0,
        w: 5.4,
        h: 1.5,
        fontSize: 9,
        fontFace: 'Arial',
        color: COLORS.TEXT_LIGHT
      }
    );

    // Right: Institutional Clients (Payers)
    slide.addShape('rect' as any, {
      x: 6.8,
      y: 1.45,
      w: 5.9,
      h: 2.2,
      fill: { color: COLORS.BOX_DARK },
      line: { color: COLORS.BORDER_CYAN, width: 1.5 }
    });
    slide.addText('INSTITUTIONAL CLIENTS (PAID SUBSCRIBERS)', {
      x: 7.05,
      y: 1.65,
      w: 5.4,
      h: 0.25,
      fontSize: 10,
      fontFace: 'Arial',
      color: COLORS.ACCENT_CYAN,
      bold: true
    });
    slide.addText(
      '• Microfinance Institutions (MFIs like Satin Finserv) & SFBs\n• Climate Impact Funds, Blended Finance Facilities & ESG Lenders\n• Large Agriculture Co-operatives, FPOs & Rural NGO Networks\n• Motivation: De-risk agricultural loan portfolios and verify impact metrics',
      {
        x: 7.05,
        y: 2.0,
        w: 5.4,
        h: 1.5,
        fontSize: 9,
        fontFace: 'Arial',
        color: COLORS.TEXT_LIGHT
      }
    );

    // Bottom: 3 Scalable Institutional Revenue Streams
    slide.addText('THREE INSTITUTIONAL REVENUE STREAMS', {
      x: 0.6,
      y: 3.85,
      w: 12.1,
      h: 0.25,
      fontSize: 10.5,
      fontFace: 'Arial',
      color: COLORS.TEXT_WHITE,
      bold: true
    });

    const streams = [
      {
        num: 'STREAM 01',
        title: 'MFI Portfolio Risk & Climate SaaS',
        pricing: '₹25 – ₹50 / active borrower / year',
        desc: 'Provides MFIs with real-time portfolio heat maps, climate stress testing, and borrower delinquency risk indicators.'
      },
      {
        num: 'STREAM 02',
        title: 'Impact & Blended Finance Analytics',
        pricing: '₹10 – ₹25 Lakhs / annual license',
        desc: 'Automated ESG and climate adaptation verification reporting for multilateral agencies, CSR foundations, and DFIs.'
      },
      {
        num: 'STREAM 03',
        title: 'Partner Product Enablement',
        pricing: 'Transparent qualified referral fees',
        desc: 'Structured referral fees when farmers access partner micro-credit lines, subsidized shade nets, or drip equipment.'
      }
    ];

    streams.forEach((st, idx) => {
      const x = 0.6 + idx * 4.1;
      const y = 4.2;
      const w = 3.9;
      const h = 2.7;

      slide.addShape('rect' as any, {
        x,
        y,
        w,
        h,
        fill: { color: COLORS.BOX_DARK },
        line: { color: COLORS.BORDER_EMERALD, width: 1.5 }
      });

      slide.addText(st.num, {
        x: x + 0.2,
        y: y + 0.2,
        w: 3.5,
        h: 0.25,
        fontSize: 8.5,
        fontFace: 'Arial',
        color: COLORS.ACCENT_EMERALD,
        bold: true
      });

      slide.addText(st.title, {
        x: x + 0.2,
        y: y + 0.48,
        w: 3.5,
        h: 0.5,
        fontSize: 10.5,
        fontFace: 'Arial',
        color: COLORS.TEXT_WHITE,
        bold: true
      });

      slide.addText(st.pricing, {
        x: x + 0.2,
        y: y + 1.05,
        w: 3.5,
        h: 0.25,
        fontSize: 9,
        fontFace: 'Arial',
        color: COLORS.ACCENT_AMBER,
        bold: true
      });

      slide.addShape('line' as any, {
        x: x + 0.2,
        y: y + 1.35,
        w: 3.5,
        h: 0,
        line: { color: COLORS.BORDER_MUTED, width: 1 }
      });

      slide.addText(st.desc, {
        x: x + 0.2,
        y: y + 1.45,
        w: 3.5,
        h: 1.1,
        fontSize: 8.5,
        fontFace: 'Arial',
        color: COLORS.TEXT_LIGHT
      });
    });
  }

  // ==========================================
  // SLIDE 9: Impact Metrics & Theory of Change
  // ==========================================
  onProgress?.('Building Slide 9: Impact Metrics...');
  {
    const slide = pres.addSlide();
    addSlideHeaderAndFooter(
      slide,
      8,
      'Impact Metrics',
      'MEASURING RESILIENCE CREATED — NOT JUST TECH DEPLOYED',
      'Proposed Impact Evaluation Framework & Field Target Matrix'
    );

    // 4 Key Impact Targets (Top Row)
    const targets = [
      {
        stat: '10,000+',
        label: 'FARMERS REACHED',
        desc: 'Active smallholders receiving vernacular climate action companion in pilot belt.',
        color: COLORS.ACCENT_EMERALD
      },
      {
        stat: '>40%',
        label: 'PRACTICAL ADOPTION',
        desc: 'Target action execution rate (vs. <14% industry baseline).',
        color: COLORS.ACCENT_CYAN
      },
      {
        stat: '₹1.5+ Cr',
        label: 'FINANCIAL ACCESS',
        desc: 'Resilience micro-credit & equipment subsidy unlocked with partner MFIs.',
        color: COLORS.ACCENT_AMBER
      },
      {
        stat: '25-35%',
        label: 'LOSS AVOIDANCE',
        desc: 'Verified reduction in crop damage during extreme heat and flood events.',
        color: COLORS.ACCENT_ROSE
      }
    ];

    targets.forEach((t, idx) => {
      const x = 0.6 + idx * 3.05;
      const y = 1.45;
      const w = 2.95;
      const h = 2.0;

      slide.addShape('rect' as any, {
        x,
        y,
        w,
        h,
        fill: { color: COLORS.BOX_DARK },
        line: { color: t.color, width: 1.5 }
      });

      slide.addText(t.stat, {
        x: x + 0.2,
        y: y + 0.2,
        w: 2.55,
        h: 0.6,
        fontSize: 22,
        fontFace: 'Arial',
        color: t.color,
        bold: true
      });

      slide.addText(t.label, {
        x: x + 0.2,
        y: y + 0.85,
        w: 2.55,
        h: 0.25,
        fontSize: 8.5,
        fontFace: 'Arial',
        color: t.color,
        bold: true
      });

      slide.addText(t.desc, {
        x: x + 0.2,
        y: y + 1.15,
        w: 2.55,
        h: 0.75,
        fontSize: 8,
        fontFace: 'Arial',
        color: COLORS.TEXT_LIGHT
      });
    });

    // Bottom: 4-Stage Theory of Change
    slide.addShape('rect' as any, {
      x: 0.6,
      y: 3.65,
      w: 12.1,
      h: 3.25,
      fill: { color: COLORS.BOX_DARK },
      line: { color: COLORS.BORDER_EMERALD, width: 1.5 }
    });

    slide.addText('FOUR-STAGE THEORY OF CHANGE (EVALUATION FRAMEWORK)', {
      x: 0.85,
      y: 3.85,
      w: 11.6,
      h: 0.3,
      fontSize: 10.5,
      fontFace: 'Arial',
      color: COLORS.ACCENT_EMERALD,
      bold: true
    });

    const tocStages = [
      {
        stage: 'STAGE 1: INTAKE',
        action: 'Signal Delivery',
        metric: 'Metric: Open Rate >80%',
        desc: 'Hyper-local weather & soil risk alerts delivered in Odia/Hindi via SMS & web app.'
      },
      {
        stage: 'STAGE 2: COMPREHENSION',
        action: '3-Step Clarity',
        metric: 'Metric: Comprehension >90%',
        desc: 'Translating weather data into simple operational chores that any farmer can execute.'
      },
      {
        stage: 'STAGE 3: FIELD ACTION',
        action: 'Adoption & Capital',
        metric: 'Metric: Action Rate >40%',
        desc: 'Farmer implements mulching, alters irrigation, or taps partner micro-credit line.'
      },
      {
        stage: 'STAGE 4: COMPOUNDING',
        action: 'Yield & Solvency',
        metric: 'Metric: 25-35% Loss Avoided',
        desc: 'Sustained farm productivity, reduced crop write-offs, and lower MFI default risk.'
      }
    ];

    tocStages.forEach((st, idx) => {
      const sx = 0.85 + idx * 2.95;
      const sy = 4.3;
      const sw = 2.8;
      const sh = 2.4;

      slide.addShape('rect' as any, {
        x: sx,
        y: sy,
        w: sw,
        h: sh,
        fill: { color: COLORS.BOX_DARKER },
        line: { color: COLORS.BORDER_MUTED, width: 1 }
      });

      slide.addText(st.stage, {
        x: sx + 0.15,
        y: sy + 0.15,
        w: sw - 0.3,
        h: 0.25,
        fontSize: 8.5,
        fontFace: 'Arial',
        color: COLORS.ACCENT_CYAN,
        bold: true
      });

      slide.addText(st.action, {
        x: sx + 0.15,
        y: sy + 0.42,
        w: sw - 0.3,
        h: 0.25,
        fontSize: 10,
        fontFace: 'Arial',
        color: COLORS.TEXT_WHITE,
        bold: true
      });

      slide.addText(st.metric, {
        x: sx + 0.15,
        y: sy + 0.72,
        w: sw - 0.3,
        h: 0.25,
        fontSize: 8.5,
        fontFace: 'Arial',
        color: COLORS.ACCENT_EMERALD,
        bold: true
      });

      slide.addShape('line' as any, {
        x: sx + 0.15,
        y: sy + 1.05,
        w: sw - 0.3,
        h: 0,
        line: { color: COLORS.BORDER_MUTED, width: 1 }
      });

      slide.addText(st.desc, {
        x: sx + 0.15,
        y: sy + 1.15,
        w: sw - 0.3,
        h: 1.1,
        fontSize: 8,
        fontFace: 'Arial',
        color: COLORS.TEXT_LIGHT
      });
    });
  }

  // ==========================================
  // SLIDE 10: Go-To-Market & Pilot Plan
  // ==========================================
  onProgress?.('Building Slide 10: Go-To-Market...');
  {
    const slide = pres.addSlide();
    addSlideHeaderAndFooter(
      slide,
      9,
      'Go-To-Market',
      'GO-TO-MARKET: START SMALL. LEARN LOCALLY. SCALE WITH EVIDENCE.',
      'Phased 8-12 Week Controlled Pilot Plan in Odisha Agro-Climatic Belt'
    );

    // 4 Phased Pilot Boxes
    const phases = [
      {
        phase: 'PHASE 01 · WEEKS 1-2',
        title: 'Discover & Map',
        tag: 'FIELD REALITY AUDIT',
        bullets: [
          'Interview 50+ smallholders in Balasore & Mayurbhanj.',
          'Map existing Satin Finserv branch officer touchpoints.',
          'Document top 3 crop vulnerability triggers (paddy/vegetable).',
          'Benchmark baseline weather broadcast reception and comprehension.'
        ]
      },
      {
        phase: 'PHASE 02 · WEEKS 3-4',
        title: 'Co-Design & Localization',
        tag: 'VERNACULAR CALIBRATION',
        bullets: [
          'Calibrate Odia & Hindi action scripts with local Krishi Vigyan Kendra.',
          'Configure 3 primary climate risk decision flows.',
          'Establish lightweight SMS & IVR dial-in routing.',
          'Train 15 MFI field loan officers on Climora companion companion.'
        ]
      },
      {
        phase: 'PHASE 03 · WEEKS 5-9',
        title: 'Controlled Pilot Deployment',
        tag: 'LIVE ADOPTION ENGINE',
        bullets: [
          'Deploy companion to 100-200 farmer pilot cohort.',
          'Trigger daily hyper-local risk scans & 3-step action plans.',
          'Track weekly SMS open rates and self-reported chore completion.',
          'Test partner micro-credit referral button with Satin branch.'
        ]
      },
      {
        phase: 'PHASE 04 · WEEKS 10-12',
        title: 'Evaluate & Scale Case',
        tag: 'EVIDENCE & INSTITUTIONAL CASE',
        bullets: [
          'Execute endline survey: crop loss avoided vs. control group.',
          'Measure partner micro-credit uptake and borrower sentiment.',
          'Publish pilot evidence whitepaper for Sankalp 2026 jury.',
          'Present multi-state rollout plan for Phase 2 expansion.'
        ]
      }
    ];

    phases.forEach((p, idx) => {
      const x = 0.6 + idx * 3.05;
      const y = 1.45;
      const w = 2.95;
      const h = 4.0;

      slide.addShape('rect' as any, {
        x,
        y,
        w,
        h,
        fill: { color: COLORS.BOX_DARK },
        line: { color: COLORS.BORDER_EMERALD, width: 1.5 }
      });

      slide.addText(p.phase, {
        x: x + 0.2,
        y: y + 0.2,
        w: 2.55,
        h: 0.25,
        fontSize: 8.5,
        fontFace: 'Arial',
        color: COLORS.ACCENT_CYAN,
        bold: true
      });

      slide.addText(p.title, {
        x: x + 0.2,
        y: y + 0.48,
        w: 2.55,
        h: 0.5,
        fontSize: 11,
        fontFace: 'Arial',
        color: COLORS.TEXT_WHITE,
        bold: true
      });

      slide.addText(p.tag, {
        x: x + 0.2,
        y: y + 1.05,
        w: 2.55,
        h: 0.25,
        fontSize: 8,
        fontFace: 'Arial',
        color: COLORS.ACCENT_EMERALD,
        bold: true
      });

      slide.addShape('line' as any, {
        x: x + 0.2,
        y: y + 1.35,
        w: 2.55,
        h: 0,
        line: { color: COLORS.BORDER_MUTED, width: 1 }
      });

      const bulletsText = p.bullets.map((b) => `• ${b}`).join('\n\n');
      slide.addText(bulletsText, {
        x: x + 0.2,
        y: y + 1.45,
        w: 2.55,
        h: 2.4,
        fontSize: 8.5,
        fontFace: 'Arial',
        color: COLORS.TEXT_LIGHT,
        valign: 'top'
      });
    });

    // Bottom Success Criteria Box
    slide.addShape('rect' as any, {
      x: 0.6,
      y: 5.65,
      w: 12.1,
      h: 1.25,
      fill: { color: COLORS.BOX_DARK },
      line: { color: COLORS.BORDER_AMBER, width: 1.5 }
    });

    slide.addText('PILOT SUCCESS CRITERIA & GATEWAYS TO SCALE', {
      x: 0.85,
      y: 5.75,
      w: 11.6,
      h: 0.25,
      fontSize: 9.5,
      fontFace: 'Arial',
      color: COLORS.ACCENT_AMBER,
      bold: true
    });

    slide.addText(
      'Target 1: >80% SMS/App Open Rate  |  Target 2: >40% 3-Step Protocol Adoption  |  Target 3: Zero Disputed Advisories  |  Target 4: ₹15L Pilot Budget Efficiency',
      {
        x: 0.85,
        y: 6.1,
        w: 11.6,
        h: 0.45,
        fontSize: 9.5,
        fontFace: 'Arial',
        color: COLORS.TEXT_WHITE,
        bold: true
      }
    );
  }

  // ==========================================
  // SLIDE 11: Roadmap & Sankalp Opportunity
  // ==========================================
  onProgress?.('Building Slide 11: Roadmap & Sankalp...');
  {
    const slide = pres.addSlide();
    addSlideHeaderAndFooter(
      slide,
      10,
      'Roadmap & Sankalp',
      '12-MONTH ROADMAP & SATIN FINSERV SANKALP OPPORTUNITY',
      'How Sankalp Accelerates Field Execution, Governance, and Last-Mile Distribution'
    );

    // 4 Quarterly Milestones (width 7.0)
    const quarters = [
      {
        q: 'Q1 2026',
        title: 'Pilot Launch in Odisha',
        desc: '100-200 farmer controlled cohort in Balasore. Integration with Satin Finserv branch.'
      },
      {
        q: 'Q2 2026',
        title: 'Field Iteration & MFI Dashboard',
        desc: 'Deploy MFI risk dashboard. Refine Odia/Hindi audio dialect engine based on feedback.'
      },
      {
        q: 'Q3 2026',
        title: 'Multi-State Expansion',
        desc: 'Scale to 10,000 farmers across Odisha, Bihar, and Eastern UP with partner MFIs.'
      },
      {
        q: 'Q4 2026',
        title: 'Institutional ESG & Capital Rails',
        desc: 'Launch blended finance adaptation verification reporting for multilateral DFIs.'
      }
    ];

    quarters.forEach((q, idx) => {
      const y = 1.45 + idx * 1.35;
      const h = 1.25;

      slide.addShape('rect' as any, {
        x: 0.6,
        y,
        w: 6.8,
        h,
        fill: { color: COLORS.BOX_DARK },
        line: { color: COLORS.BORDER_EMERALD, width: 1.5 }
      });

      slide.addShape('rect' as any, {
        x: 0.85,
        y: y + 0.25,
        w: 1.1,
        h: 0.4,
        fill: { color: COLORS.BOX_DARKER },
        line: { color: COLORS.BORDER_EMERALD, width: 1 }
      });
      slide.addText(q.q, {
        x: 0.85,
        y: y + 0.25,
        w: 1.1,
        h: 0.4,
        fontSize: 10.5,
        fontFace: 'Arial',
        color: COLORS.ACCENT_EMERALD,
        bold: true,
        align: 'center',
        valign: 'middle'
      });

      slide.addText(q.title, {
        x: 2.15,
        y: y + 0.2,
        w: 5.1,
        h: 0.3,
        fontSize: 11,
        fontFace: 'Arial',
        color: COLORS.TEXT_WHITE,
        bold: true
      });

      slide.addText(q.desc, {
        x: 2.15,
        y: y + 0.55,
        w: 5.1,
        h: 0.6,
        fontSize: 8.5,
        fontFace: 'Arial',
        color: COLORS.TEXT_LIGHT
      });
    });

    // Right: Satin Finserv Sankalp Advantage Box (width 5.0)
    slide.addShape('rect' as any, {
      x: 7.7,
      y: 1.45,
      w: 5.0,
      h: 5.45,
      fill: { color: COLORS.BOX_DARK },
      line: { color: COLORS.BORDER_CYAN, width: 1.5 }
    });

    slide.addText('WHY SATIN FINSERV SANKALP IS THE CATALYST', {
      x: 7.95,
      y: 1.65,
      w: 4.5,
      h: 0.3,
      fontSize: 10.5,
      fontFace: 'Arial',
      color: COLORS.ACCENT_CYAN,
      bold: true
    });

    const sankalpPoints = [
      {
        title: 'Deep Last-Mile Rural Distribution',
        desc: 'Satin\'s trusted field network allows Climora to bypass user acquisition costs and reach smallholders directly at village center meetings.'
      },
      {
        title: 'Portfolio De-Risking Alignment',
        desc: 'Climate shocks drive agricultural default. Climora\'s 3-step action engine directly protects borrower solvency and Satin loan book stability.'
      },
      {
        title: 'Dedicated ₹15 Lakhs Pilot Budget Allocation',
        desc: '• 40% (₹6L): Field operations & Odia community coordinators\n• 30% (₹4.5L): Software engine, telemetry APIs & SMS rails\n• 20% (₹3L): Agronomist advisory & vernacular localization\n• 10% (₹1.5L): Rigorous third-party impact audit'
      }
    ];

    sankalpPoints.forEach((sp, idx) => {
      const spy = 2.1 + idx * 1.55;
      slide.addShape('rect' as any, {
        x: 7.95,
        y: spy,
        w: 4.5,
        h: idx === 2 ? 1.7 : 1.4,
        fill: { color: COLORS.BOX_DARKER },
        line: { color: COLORS.BORDER_MUTED, width: 1 }
      });
      slide.addText(sp.title, {
        x: 8.15,
        y: spy + 0.1,
        w: 4.1,
        h: 0.25,
        fontSize: 9.5,
        fontFace: 'Arial',
        color: COLORS.TEXT_WHITE,
        bold: true
      });
      slide.addText(sp.desc, {
        x: 8.15,
        y: spy + 0.38,
        w: 4.1,
        h: idx === 2 ? 1.25 : 0.9,
        fontSize: 8,
        fontFace: 'Arial',
        color: COLORS.TEXT_LIGHT
      });
    });
  }

  // ==========================================
  // SLIDE 12: Closing & Vision
  // ==========================================
  onProgress?.('Building Slide 12: Closing & Vision...');
  {
    const slide = pres.addSlide();
    addSlideHeaderAndFooter(
      slide,
      11,
      'Vision & Partnership',
      'MAKING CLIMATE ACTION CLEAR, LOCAL, AND DOABLE',
      'Smart Solutions for a Changing Climate · Satin Finserv Sankalp 2026'
    );

    // Main Vision Card (Top)
    slide.addShape('rect' as any, {
      x: 0.6,
      y: 1.45,
      w: 12.1,
      h: 2.3,
      fill: { color: COLORS.BOX_DARK },
      line: { color: COLORS.BORDER_EMERALD, width: 1.5 }
    });

    slide.addText('OUR THESIS: CLIMATE RESILIENCE REQUIRES UNDERSTANDABLE DECISIONS', {
      x: 0.85,
      y: 1.65,
      w: 11.6,
      h: 0.3,
      fontSize: 12,
      fontFace: 'Arial',
      color: COLORS.ACCENT_EMERALD,
      bold: true
    });

    slide.addText(
      'India\'s smallholders do not lack hard work or determination—they lack actionable, timely clarity and accessible capital.\nBy converting opaque satellite telemetry into 3 localized field chores and bridging farmers directly to partner microfinance, Climora turns vulnerability into resilience.',
      {
        x: 0.85,
        y: 2.05,
        w: 11.6,
        h: 0.8,
        fontSize: 10,
        fontFace: 'Arial',
        color: COLORS.TEXT_LIGHT
      }
    );

    slide.addText(
      '"Built for smallholders. Backed by field evidence. Accelerated by Satin Finserv Sankalp."',
      {
        x: 0.85,
        y: 2.95,
        w: 11.6,
        h: 0.4,
        fontSize: 11,
        fontFace: 'Arial',
        color: COLORS.TEXT_WHITE,
        bold: true,
        italic: true
      }
    );

    // 3 Summary Columns (Bottom)
    const summaryPillars = [
      {
        title: '1. Signal to Action',
        desc: 'Translating complex weather into 3 simple, vernacular chores that farmers can execute today.'
      },
      {
        title: '2. Action to Capital',
        desc: 'Connecting operational field actions directly to partner micro-finance & equipment subsidies.'
      },
      {
        title: '3. Capital to Resilience',
        desc: 'Measuring verified field adoption and crop loss avoidance to build permanent rural solvency.'
      }
    ];

    summaryPillars.forEach((sp, idx) => {
      const sx = 0.6 + idx * 4.1;
      const sy = 3.95;
      const sw = 3.9;
      const sh = 1.6;

      slide.addShape('rect' as any, {
        x: sx,
        y: sy,
        w: sw,
        h: sh,
        fill: { color: COLORS.BOX_DARK },
        line: { color: COLORS.BORDER_CYAN, width: 1.5 }
      });

      slide.addText(sp.title, {
        x: sx + 0.2,
        y: sy + 0.2,
        w: sw - 0.4,
        h: 0.3,
        fontSize: 11,
        fontFace: 'Arial',
        color: COLORS.ACCENT_CYAN,
        bold: true
      });

      slide.addText(sp.desc, {
        x: sx + 0.2,
        y: sy + 0.55,
        w: sw - 0.4,
        h: 0.9,
        fontSize: 9,
        fontFace: 'Arial',
        color: COLORS.TEXT_LIGHT
      });
    });

    // Call to Action Banner (Bottom)
    slide.addShape('rect' as any, {
      x: 0.6,
      y: 5.75,
      w: 12.1,
      h: 1.15,
      fill: { color: COLORS.BOX_DARKER },
      line: { color: COLORS.BORDER_EMERALD, width: 1.5 }
    });

    slide.addText('JOIN US IN BRIDGING THE LAST-MILE CLIMATE ADOPTION GAP', {
      x: 0.85,
      y: 5.9,
      w: 7.5,
      h: 0.3,
      fontSize: 11,
      fontFace: 'Arial',
      color: COLORS.ACCENT_EMERALD,
      bold: true
    });

    slide.addText('Partnership Inquiries: climora-team@sankalp2026.org  |  Pilot Hub: Balasore, Odisha', {
      x: 0.85,
      y: 6.25,
      w: 7.5,
      h: 0.25,
      fontSize: 9,
      fontFace: 'Arial',
      color: COLORS.TEXT_LIGHT
    });

    slide.addShape('rect' as any, {
      x: 9.8,
      y: 5.95,
      w: 2.6,
      h: 0.65,
      fill: { color: COLORS.ACCENT_EMERALD },
      line: { color: COLORS.BORDER_EMERALD, width: 1 }
    });
    slide.addText('SATIN SANKALP 2026', {
      x: 9.8,
      y: 5.95,
      w: 2.6,
      h: 0.65,
      fontSize: 10,
      fontFace: 'Arial',
      color: '03130D',
      bold: true,
      align: 'center',
      valign: 'middle'
    });
  }

  // ==========================================
  // Trigger Browser Download
  // ==========================================
  onProgress?.('Generating PowerPoint file (.pptx)...');
  await pres.writeFile({ fileName: 'Climora_Pitch_Deck_2026.pptx' });
  onProgress?.('Download complete!');
}

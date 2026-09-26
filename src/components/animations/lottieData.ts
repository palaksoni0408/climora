// High quality procedural Bodymovin / Lottie JSON definitions for Climate & Finance themes

// 1. Climate Heatwave & Weather Warning Lottie (Slide 2: +156% Exposure & Weather Alerts)
export const climateAlertLottie = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 60,
  w: 120,
  h: 120,
  nm: "Climate Alert",
  ddd: 0,
  assets: [],
  layers: [
    // Outer Pulsing Alert Wave (Ring 2)
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Outer Wave",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { t: 0, s: [80], e: [0] },
            { t: 60, s: [0] }
          ]
        },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [60, 60, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { t: 0, s: [50, 50, 100], e: [130, 130, 100] },
            { t: 60, s: [130, 130, 100] }
          ]
        }
      },
      ao: 0,
      shapes: [
        {
          ty: "el",
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [80, 80] },
          nm: "Circle"
        },
        {
          ty: "st",
          c: { a: 0, k: [0.95, 0.25, 0.25, 1] }, // Coral Red
          o: { a: 0, k: 100 },
          w: { a: 0, k: 3 },
          lc: 2,
          lj: 2,
          nm: "Stroke"
        }
      ],
      ip: 0,
      op: 60,
      st: 0
    },
    // Middle Pulsing Ring (Ring 1)
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Mid Wave",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { t: 15, s: [90], e: [0] },
            { t: 60, s: [0] }
          ]
        },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [60, 60, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { t: 15, s: [40, 40, 100], e: [110, 110, 100] },
            { t: 60, s: [110, 110, 100] }
          ]
        }
      },
      ao: 0,
      shapes: [
        {
          ty: "el",
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [80, 80] },
          nm: "Circle"
        },
        {
          ty: "st",
          c: { a: 0, k: [0.98, 0.55, 0.1, 1] }, // Amber
          o: { a: 0, k: 100 },
          w: { a: 0, k: 2.5 },
          lc: 2,
          lj: 2,
          nm: "Stroke"
        }
      ],
      ip: 0,
      op: 60,
      st: 0
    },
    // Rotating Sun / Thermal Spike Rays
    {
      ddd: 0,
      ind: 3,
      ty: 4,
      nm: "Thermal Rays",
      sr: 1,
      ks: {
        o: { a: 0, k: 85 },
        r: {
          a: 1,
          k: [
            { t: 0, s: [0], e: [180] },
            { t: 60, s: [180] }
          ]
        },
        p: { a: 0, k: [60, 60, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { t: 0, s: [90, 90, 100], e: [110, 110, 100] },
            { t: 30, s: [110, 110, 100], e: [90, 90, 100] },
            { t: 60, s: [90, 90, 100] }
          ]
        }
      },
      ao: 0,
      shapes: [
        {
          ty: "sr",
          sy: 1,
          pt: { a: 0, k: 8 },
          p: { a: 0, k: [0, 0] },
          r: { a: 0, k: 0 },
          ir: { a: 0, k: 28 },
          is: { a: 0, k: 0 },
          or: { a: 0, k: 38 },
          os: { a: 0, k: 0 },
          nm: "Star"
        },
        {
          ty: "fl",
          c: { a: 0, k: [0.95, 0.35, 0.1, 0.4] },
          o: { a: 0, k: 60 },
          nm: "Fill"
        },
        {
          ty: "st",
          c: { a: 0, k: [0.98, 0.5, 0.1, 1] },
          o: { a: 0, k: 80 },
          w: { a: 0, k: 2 },
          nm: "Stroke"
        }
      ],
      ip: 0,
      op: 60,
      st: 0
    },
    // Center Alert Flame Core
    {
      ddd: 0,
      ind: 4,
      ty: 4,
      nm: "Core Alert Badge",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [60, 60, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { t: 0, s: [95, 95, 100], e: [105, 105, 100] },
            { t: 30, s: [105, 105, 100], e: [95, 95, 100] },
            { t: 60, s: [95, 95, 100] }
          ]
        }
      },
      ao: 0,
      shapes: [
        {
          ty: "el",
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [38, 38] },
          nm: "Inner Center"
        },
        {
          ty: "fl",
          c: { a: 0, k: [0.85, 0.15, 0.15, 1] }, // Dark Red
          o: { a: 0, k: 100 },
          nm: "Fill"
        },
        {
          ty: "st",
          c: { a: 0, k: [1, 0.8, 0.2, 1] }, // Yellow Ring
          o: { a: 0, k: 100 },
          w: { a: 0, k: 3 },
          nm: "Stroke"
        }
      ],
      ip: 0,
      op: 60,
      st: 0
    }
  ]
};

// 2. Adaptation Finance & Capital Resilience Lottie (Slide 2: Evidence Card 2 & Slide 8)
export const adaptationFinanceLottie = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 60,
  w: 120,
  h: 120,
  nm: "Adaptation Finance",
  ddd: 0,
  assets: [],
  layers: [
    // Rising Financial Coin 1
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Coin Pulse",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { t: 0, s: [60], e: [100] },
            { t: 30, s: [100], e: [60] },
            { t: 60, s: [60] }
          ]
        },
        r: { a: 0, k: 0 },
        p: {
          a: 1,
          k: [
            { t: 0, s: [60, 65, 0], e: [60, 52, 0] },
            { t: 30, s: [60, 52, 0], e: [60, 65, 0] },
            { t: 60, s: [60, 65, 0] }
          ]
        },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { t: 0, s: [90, 90, 100], e: [110, 110, 100] },
            { t: 30, s: [110, 110, 100], e: [90, 90, 100] },
            { t: 60, s: [90, 90, 100] }
          ]
        }
      },
      ao: 0,
      shapes: [
        {
          ty: "el",
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [46, 46] },
          nm: "Gold Coin"
        },
        {
          ty: "fl",
          c: { a: 0, k: [0.1, 0.65, 0.45, 1] }, // Emerald Green Coin
          o: { a: 0, k: 90 },
          nm: "Fill"
        },
        {
          ty: "st",
          c: { a: 0, k: [0.2, 0.9, 0.6, 1] }, // Mint Stroke
          o: { a: 0, k: 100 },
          w: { a: 0, k: 3.5 },
          nm: "Stroke"
        }
      ],
      ip: 0,
      op: 60,
      st: 0
    },
    // Sprouting Leaf from Coin (Climate-Finance Link)
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Sprout from Finance",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: {
          a: 1,
          k: [
            { t: 0, s: [-6], e: [8] },
            { t: 30, s: [8], e: [-6] },
            { t: 60, s: [-6] }
          ]
        },
        p: { a: 0, k: [60, 48, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] }
      },
      ao: 0,
      shapes: [
        {
          ty: "rc",
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [22, 22] },
          r: { a: 0, k: 6 },
          nm: "Leaf Center"
        },
        {
          ty: "fl",
          c: { a: 0, k: [0.2, 0.85, 0.5, 1] },
          o: { a: 0, k: 100 },
          nm: "Fill"
        },
        {
          ty: "st",
          c: { a: 0, k: [1, 1, 1, 0.9] },
          o: { a: 0, k: 90 },
          w: { a: 0, k: 2 },
          nm: "Stroke"
        }
      ],
      ip: 0,
      op: 60,
      st: 0
    },
    // Orbiting Micro-Finance Particle
    {
      ddd: 0,
      ind: 3,
      ty: 4,
      nm: "Orbiting Dot",
      sr: 1,
      ks: {
        o: { a: 0, k: 90 },
        r: {
          a: 1,
          k: [
            { t: 0, s: [0], e: [360] },
            { t: 60, s: [360] }
          ]
        },
        p: { a: 0, k: [60, 60, 0] },
        a: { a: 0, k: [0, 36, 0] },
        s: { a: 0, k: [100, 100, 100] }
      },
      ao: 0,
      shapes: [
        {
          ty: "el",
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [10, 10] },
          nm: "Particle"
        },
        {
          ty: "fl",
          c: { a: 0, k: [0.98, 0.75, 0.1, 1] }, // Gold particle
          o: { a: 0, k: 100 },
          nm: "Fill"
        }
      ],
      ip: 0,
      op: 60,
      st: 0
    }
  ]
};

// 3. Climate Action Companion Lottie (Slide 5: 3-Step Action & Companion)
export const companionActionLottie = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 60,
  w: 120,
  h: 120,
  nm: "Companion Action",
  ddd: 0,
  assets: [],
  layers: [
    // Smartphone Beacon Screen
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Phone Device",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [60, 60, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { t: 0, s: [98, 98, 100], e: [102, 102, 100] },
            { t: 30, s: [102, 102, 100], e: [98, 98, 100] },
            { t: 60, s: [98, 98, 100] }
          ]
        }
      },
      ao: 0,
      shapes: [
        {
          ty: "rc",
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [52, 82] },
          r: { a: 0, k: 12 },
          nm: "Phone Body"
        },
        {
          ty: "fl",
          c: { a: 0, k: [0.03, 0.12, 0.08, 1] }, // Deep Dark Green
          o: { a: 0, k: 100 },
          nm: "Fill"
        },
        {
          ty: "st",
          c: { a: 0, k: [0.2, 0.8, 0.5, 1] }, // Emerald border
          o: { a: 0, k: 100 },
          w: { a: 0, k: 3 },
          nm: "Stroke"
        }
      ],
      ip: 0,
      op: 60,
      st: 0
    },
    // Screen Action Bar 1 (Check 1)
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Action Row 1",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [60, 46, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { t: 0, s: [85, 100, 100], e: [100, 100, 100] },
            { t: 25, s: [100, 100, 100], e: [85, 100, 100] },
            { t: 60, s: [85, 100, 100] }
          ]
        }
      },
      ao: 0,
      shapes: [
        {
          ty: "rc",
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [34, 10] },
          r: { a: 0, k: 3 },
          nm: "Step 1 Bar"
        },
        {
          ty: "fl",
          c: { a: 0, k: [0.1, 0.7, 0.45, 1] },
          o: { a: 0, k: 100 },
          nm: "Fill"
        }
      ],
      ip: 0,
      op: 60,
      st: 0
    },
    // Screen Action Bar 2 (Check 2)
    {
      ddd: 0,
      ind: 3,
      ty: 4,
      nm: "Action Row 2",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [60, 60, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { t: 15, s: [85, 100, 100], e: [100, 100, 100] },
            { t: 40, s: [100, 100, 100], e: [85, 100, 100] },
            { t: 60, s: [85, 100, 100] }
          ]
        }
      },
      ao: 0,
      shapes: [
        {
          ty: "rc",
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [34, 10] },
          r: { a: 0, k: 3 },
          nm: "Step 2 Bar"
        },
        {
          ty: "fl",
          c: { a: 0, k: [0.08, 0.65, 0.8, 1] }, // Cyan
          o: { a: 0, k: 100 },
          nm: "Fill"
        }
      ],
      ip: 0,
      op: 60,
      st: 0
    },
    // Screen Action Bar 3 (Finance Link)
    {
      ddd: 0,
      ind: 4,
      ty: 4,
      nm: "Action Row 3",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [60, 74, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { t: 30, s: [85, 100, 100], e: [100, 100, 100] },
            { t: 55, s: [100, 100, 100], e: [85, 100, 100] },
            { t: 60, s: [85, 100, 100] }
          ]
        }
      },
      ao: 0,
      shapes: [
        {
          ty: "rc",
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [34, 10] },
          r: { a: 0, k: 3 },
          nm: "Step 3 Bar"
        },
        {
          ty: "fl",
          c: { a: 0, k: [0.95, 0.7, 0.15, 1] }, // Gold
          o: { a: 0, k: 100 },
          nm: "Fill"
        }
      ],
      ip: 0,
      op: 60,
      st: 0
    }
  ]
};

// 4. Partner Resilience Micro-Finance Link Lottie (Slide 5: Partner Connection)
export const partnerCreditLinkLottie = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 60,
  w: 120,
  h: 120,
  nm: "Partner Credit Link",
  ddd: 0,
  assets: [],
  layers: [
    // Connected Shield / Lock of Trust
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Shield",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [60, 60, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { t: 0, s: [95, 95, 100], e: [105, 105, 100] },
            { t: 30, s: [105, 105, 100], e: [95, 95, 100] },
            { t: 60, s: [95, 95, 100] }
          ]
        }
      },
      ao: 0,
      shapes: [
        {
          ty: "el",
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [56, 56] },
          nm: "Shield Base"
        },
        {
          ty: "fl",
          c: { a: 0, k: [0.05, 0.45, 0.3, 0.7] },
          o: { a: 0, k: 80 },
          nm: "Fill"
        },
        {
          ty: "st",
          c: { a: 0, k: [0.2, 0.9, 0.6, 1] },
          o: { a: 0, k: 100 },
          w: { a: 0, k: 3.5 },
          nm: "Stroke"
        }
      ],
      ip: 0,
      op: 60,
      st: 0
    },
    // Connecting Bridge Beams
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Bridge Cross",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { t: 0, s: [50], e: [100] },
            { t: 30, s: [100], e: [50] },
            { t: 60, s: [50] }
          ]
        },
        r: {
          a: 1,
          k: [
            { t: 0, s: [0], e: [90] },
            { t: 60, s: [90] }
          ]
        },
        p: { a: 0, k: [60, 60, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] }
      },
      ao: 0,
      shapes: [
        {
          ty: "rc",
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [32, 6] },
          r: { a: 0, k: 3 },
          nm: "Beam"
        },
        {
          ty: "fl",
          c: { a: 0, k: [0.95, 0.75, 0.2, 1] }, // Gold beam
          o: { a: 0, k: 100 },
          nm: "Fill"
        }
      ],
      ip: 0,
      op: 60,
      st: 0
    }
  ]
};

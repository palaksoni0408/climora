import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

// Indie Animated Lightbulb & Resilience Idea Burst (Slide 1 Motif)
export const IdeaBulbLottie: React.FC<{ size?: number; className?: string }> = ({ size = 180, className = '' }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      {/* Floating spark particles */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.3, 0.8, 0.3],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-400/20 via-emerald-400/25 to-teal-400/10 blur-xl"
      />

      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" className="relative drop-shadow-md">
        {/* Glow halo */}
        <motion.circle
          cx="100"
          cy="85"
          r="48"
          fill="#fef08a"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.4, 0.8, 0.4], scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Radiating Spark Rays */}
        {[-45, -20, 0, 20, 45].map((angle, i) => (
          <motion.line
            key={i}
            x1="100"
            y1="85"
            x2={100 + Math.cos(((angle - 90) * Math.PI) / 180) * 65}
            y2={85 + Math.sin(((angle - 90) * Math.PI) / 180) * 65}
            stroke="#f59e0b"
            strokeWidth="3.5"
            strokeLinecap="round"
            initial={{ pathLength: 0.3, opacity: 0.5 }}
            animate={{ pathLength: [0.3, 1, 0.3], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.8, delay: i * 0.2, repeat: Infinity }}
          />
        ))}

        {/* Bulb Glass Body */}
        <path
          d="M70 85C70 68.43 83.43 55 100 55C116.57 55 130 68.43 130 85C130 96.8 123.1 106.99 113.1 111.77L113.1 123C113.1 125.21 111.31 127 109.1 127L90.9 127C88.69 127 86.9 125.21 86.9 123L86.9 111.77C76.9 106.99 70 96.8 70 85Z"
          fill="#facc15"
          stroke="#ca8a04"
          strokeWidth="4"
          strokeLinejoin="round"
        />

        {/* Filament - Climate Sprout inside the bulb */}
        <motion.path
          d="M93 90C93 82 99 76 100 70C101 76 107 82 107 90C107 94 104 98 100 98C96 98 93 94 93 90Z"
          fill="#10b981"
          stroke="#059669"
          strokeWidth="2.5"
          animate={{ scale: [0.95, 1.08, 0.95] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Filament Stem */}
        <path d="M100 98L100 115" stroke="#166534" strokeWidth="3" strokeLinecap="round" />

        {/* Mini Leaves branching from filament */}
        <motion.path
          d="M100 105C94 102 91 98 94 95C97 97 99 101 100 105Z"
          fill="#34d399"
          animate={{ rotate: [-2, 4, -2] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.path
          d="M100 108C106 105 109 101 106 98C103 100 101 104 100 108Z"
          fill="#34d399"
          animate={{ rotate: [2, -4, 2] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        />

        {/* Bulb Screw Base */}
        <rect x="88" y="128" width="24" height="6" rx="2" fill="#0284c7" stroke="#0369a1" strokeWidth="2.5" />
        <rect x="89" y="136" width="22" height="6" rx="2" fill="#0284c7" stroke="#0369a1" strokeWidth="2.5" />
        <path d="M92 144C92 147.3 95.6 150 100 150C104.4 150 108 147.3 108 144L92 144Z" fill="#0369a1" />

        {/* Cute hand-drawn highlight sparkle */}
        <motion.path
          d="M80 72C83 67 89 63 95 62"
          stroke="white"
          strokeWidth="3.5"
          strokeLinecap="round"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </svg>
    </div>
  );
};

// Animated Climate Radar & Geospatial Nodes (Slide 1 & 6)
export const ClimateRadarLottie: React.FC<{ size?: number; className?: string }> = ({ size = 160, className = '' }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 160 160" fill="none">
        {/* Background rings */}
        <circle cx="80" cy="80" r="70" stroke="#047857" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />
        <circle cx="80" cy="80" r="50" stroke="#059669" strokeWidth="1.5" opacity="0.5" />
        <circle cx="80" cy="80" r="30" stroke="#10b981" strokeWidth="2" opacity="0.6" />
        <circle cx="80" cy="80" r="10" fill="#10b981" />

        {/* Rotating sweep line */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          style={{ originX: '80px', originY: '80px' }}
        >
          <line x1="80" y1="80" x2="80" y2="10" stroke="#34d399" strokeWidth="3" strokeLinecap="round" />
          <path d="M80 80 L130 30 A70 70 0 0 0 80 10 Z" fill="url(#radarGradient)" opacity="0.35" />
        </motion.g>

        {/* Pulsing Target Nodes */}
        <motion.circle
          cx="110"
          cy="55"
          r="4.5"
          fill="#f59e0b"
          animate={{ scale: [1, 1.8, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.circle
          cx="50"
          cy="105"
          r="4"
          fill="#38bdf8"
          animate={{ scale: [1, 1.6, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.4, repeat: Infinity, delay: 0.4 }}
        />
        <motion.circle
          cx="60"
          cy="55"
          r="4"
          fill="#10b981"
          animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1.8, repeat: Infinity, delay: 0.8 }}
        />

        <defs>
          <linearGradient id="radarGradient" x1="80" y1="80" x2="130" y2="30" gradientUnits="userSpaceOnUse">
            <stop stopColor="#34d399" stopOpacity="0.8" />
            <stop offset="1" stopColor="#34d399" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

// Sprouting Plant Resilience Animation (Slide 2 & 5)
export const SproutResilienceLottie: React.FC<{ size?: number; className?: string }> = ({ size = 140, className = '' }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 140 140" fill="none">
        {/* Soil mound */}
        <path d="M25 118C45 110 95 110 115 118C120 120 118 126 112 126L28 126C22 126 20 120 25 118Z" fill="#78350f" opacity="0.85" />
        <path d="M35 116C50 112 85 112 105 116" stroke="#92400e" strokeWidth="2" strokeLinecap="round" />

        {/* Stem growing */}
        <motion.path
          d="M70 115 Q70 85 70 55"
          stroke="#15803d"
          strokeWidth="5"
          strokeLinecap="round"
          initial={{ pathLength: 0.2 }}
          animate={{ pathLength: [0.8, 1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Left leaf */}
        <motion.path
          d="M70 85 C55 80 40 65 48 50 C62 55 68 70 70 85 Z"
          fill="#22c55e"
          stroke="#16a34a"
          strokeWidth="2.5"
          animate={{ rotate: [-4, 6, -4], scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ originX: '70px', originY: '85px' }}
        />

        {/* Right leaf */}
        <motion.path
          d="M70 75 C85 70 100 55 92 40 C78 45 72 60 70 75 Z"
          fill="#4ade80"
          stroke="#16a34a"
          strokeWidth="2.5"
          animate={{ rotate: [4, -6, 4], scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ originX: '70px', originY: '75px' }}
        />

        {/* Emerging Top Bud with Sun Sparkle */}
        <motion.circle
          cx="70"
          cy="50"
          r="6"
          fill="#facc15"
          animate={{ scale: [1, 1.3, 1], fill: ['#facc15', '#4ade80', '#facc15'] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />

        {/* Raindrop drop */}
        <motion.path
          d="M70 20C70 20 64 28 64 32C64 35.3 66.7 38 70 38C73.3 38 76 35.3 76 32C76 28 70 20 70 20Z"
          fill="#38bdf8"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: [0, 20, 25], opacity: [0, 1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeIn' }}
        />
      </svg>
    </div>
  );
};

// Animated Phone Beacon with Alert to Action (Slide 5 Mobile Companion)
export const PhoneBeaconLottie: React.FC<{ size?: number; className?: string }> = ({ size = 120, className = '' }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
        {/* Signal Waves */}
        {[1, 2].map((ring) => (
          <motion.circle
            key={ring}
            cx="60"
            cy="40"
            r={18 + ring * 12}
            stroke="#10b981"
            strokeWidth="2"
            fill="none"
            initial={{ opacity: 0.8, scale: 0.8 }}
            animate={{ opacity: [0.8, 0], scale: [0.8, 1.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: ring * 0.4 }}
          />
        ))}

        {/* Phone Frame */}
        <rect x="42" y="24" width="36" height="68" rx="7" fill="#0f172a" stroke="#334155" strokeWidth="2.5" />
        {/* Screen */}
        <rect x="45" y="32" width="30" height="50" rx="3" fill="#022c22" />

        {/* Screen Alert Pulse */}
        <motion.rect
          x="47"
          y="36"
          width="26"
          height="14"
          rx="2"
          fill="#f97316"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />

        {/* 3 Step lines inside phone */}
        <rect x="47" y="54" width="22" height="3" rx="1" fill="#34d399" />
        <rect x="47" y="60" width="18" height="3" rx="1" fill="#34d399" />
        <rect x="47" y="66" width="24" height="4" rx="1.5" fill="#38bdf8" />

        {/* Home notch */}
        <circle cx="60" cy="86" r="2" fill="#64748b" />
      </svg>
    </div>
  );
};

// Animated Risk Score Gauge (0-100) (Slide 6 & 9)
export const RiskMeterGauge: React.FC<{ score?: number; className?: string }> = ({ score = 65, className = '' }) => {
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedScore(score);
    }, 200);
    return () => clearTimeout(timer);
  }, [score]);

  // Angle from -90 to +90 deg
  const angle = -90 + (animatedScore / 100) * 180;

  return (
    <div className={`flex flex-col items-center justify-center p-3 rounded-xl bg-slate-900/60 border border-slate-700/60 ${className}`}>
      <div className="relative w-36 h-20 overflow-hidden flex items-end justify-center">
        <svg viewBox="0 0 100 50" className="w-36 h-18">
          {/* Gauge Arc background */}
          <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#334155" strokeWidth="10" strokeLinecap="round" />
          {/* Green zone (0-39) */}
          <path d="M 10 50 A 40 40 0 0 1 35 18" fill="none" stroke="#10b981" strokeWidth="10" strokeLinecap="round" />
          {/* Amber zone (40-69) */}
          <path d="M 35 18 A 40 40 0 0 1 65 18" fill="none" stroke="#f59e0b" strokeWidth="10" />
          {/* Red zone (70-100) */}
          <path d="M 65 18 A 40 40 0 0 1 90 50" fill="none" stroke="#ef4444" strokeWidth="10" strokeLinecap="round" />

          {/* Needle */}
          <motion.g
            animate={{ rotate: angle }}
            transition={{ type: 'spring', stiffness: 90, damping: 15 }}
            style={{ originX: '50px', originY: '50px' }}
          >
            <line x1="50" y1="50" x2="50" y2="15" stroke="#f8fafc" strokeWidth="3" strokeLinecap="round" />
            <circle cx="50" cy="50" r="5" fill="#f8fafc" />
          </motion.g>
        </svg>
      </div>

      <div className="flex items-center gap-2 mt-1">
        <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">Model Risk Score:</span>
        <span
          className={`font-mono text-sm font-bold ${
            animatedScore < 40 ? 'text-emerald-400' : animatedScore < 70 ? 'text-amber-400' : 'text-rose-400'
          }`}
        >
          {animatedScore}/100 ({animatedScore < 40 ? 'LOW' : animatedScore < 70 ? 'MED' : 'HIGH'})
        </span>
      </div>
    </div>
  );
};

// Animated Interactive Data Pipeline (Slide 6)
export const AnimatedPipelineFlow: React.FC<{ activeGate?: number; onGateClick?: (gate: number) => void }> = ({
  activeGate = 2,
  onGateClick
}) => {
  return (
    <div className="relative w-full py-2">
      {/* Animated Glowing Packet Flow */}
      <div className="absolute top-1/2 left-8 right-8 h-1 -translate-y-1/2 bg-slate-700/60 z-0">
        <motion.div
          className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400"
          initial={{ left: '0%', width: '15%' }}
          animate={{ left: ['0%', '85%', '0%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute' }}
        />
      </div>
    </div>
  );
};

import React from 'react';
import { SLIDE_1_STEPS } from '../../data/slidesData';
import { IdeaBulbLottie } from '../animations/IndieLottie';
import { motion } from 'motion/react';

export const Slide1Overview: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between py-2 px-6 lg:px-12 select-none overflow-y-auto">
      {/* Title block */}
      <div className="mb-4">
        <div className="flex items-center gap-3 mb-1">
          <span className="text-xs uppercase tracking-widest font-mono font-semibold px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
            Phase 1 Idea Submission
          </span>
          <span className="text-xs text-emerald-300/70 font-medium">Satin Finserv Sankalp · Climate Edition 2026</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white font-display">
          CLIMORA: BRIDGING THE LAST-MILE CLIMATE ADOPTION GAP
        </h1>
        <p className="text-sm sm:text-base text-emerald-400 font-medium mt-1">
          Turning Local Climate Signals into Practical Resilience Action
        </p>
      </div>

      {/* Main Grid: Left Steps (Dark Boxes) + Right Graphic Motif (Dark Box) on Green Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center flex-1 my-auto">
        {/* Left Column: 01-06 Numbered Steps/Badges in Dark Boxes */}
        <div className="lg:col-span-7 space-y-2.5">
          {SLIDE_1_STEPS.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.08 }}
              className="flex items-center gap-3 p-2.5 rounded-xl bg-[#061811]/95 border border-emerald-500/30 shadow-md hover:border-emerald-400/70 transition-all group"
            >
              {/* Chevron Tag Badge */}
              <div
                className="w-12 h-10 shrink-0 rounded-lg flex items-center justify-center font-mono font-bold text-white shadow-xs text-sm"
                style={{ backgroundColor: step.color }}
              >
                {step.num}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="text-xs sm:text-sm font-bold text-slate-100 uppercase tracking-wide group-hover:text-emerald-400 transition-colors">
                  {step.title}
                </div>
                <div className="text-xs text-emerald-100/70 leading-snug truncate">
                  {step.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Column: Visual Motif & Idea Lightbulb in Dark Box */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl bg-[#061912]/95 border border-emerald-500/40 relative overflow-hidden shadow-lg">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

          {/* Heading inspired by template style */}
          <div className="text-center mb-3">
            <span className="font-handwriting text-2xl lg:text-3xl text-emerald-100 font-bold block leading-tight">
              THE CORE PROBLEM,
            </span>
            <span className="font-handwriting text-2xl lg:text-3xl text-emerald-400 font-bold block leading-tight">
              ADOPTION & ACTION
            </span>
          </div>

          {/* Interactive Indie Lottie Bulb */}
          <div className="relative my-2">
            <IdeaBulbLottie size={170} />
          </div>

          {/* Feature Dark Box Badges */}
          <div className="grid grid-cols-2 gap-2.5 w-full mt-3">
            <div className="p-2.5 rounded-lg bg-[#04120d] border border-emerald-500/30 text-center">
              <span className="text-[11px] font-bold text-emerald-300 block">
                Zero Hardware Footprint
              </span>
              <span className="text-[10px] text-emerald-400/70">Lightweight mobile & SMS</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#04120d] border border-emerald-500/30 text-center">
              <span className="text-[11px] font-bold text-amber-300 block">
                Last-Mile Bridge
              </span>
              <span className="text-[10px] text-emerald-400/70">Links signals to micro-finance</span>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Sub-Footer Note */}
      <div className="pt-2 border-t border-emerald-500/25 flex items-center justify-between text-xs text-emerald-200/60">
        <span>Sankalp Climate Edition 2026</span>
        <span className="font-medium text-emerald-400">Lightweight partner-led climate action platform</span>
      </div>
    </div>
  );
};

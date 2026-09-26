import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { SproutResilienceLottie } from '../animations/IndieLottie';

export const Slide12ClosingVision: React.FC<{ onJumpToSlide?: (slideIndex: number) => void }> = ({ onJumpToSlide }) => {
  return (
    <div className="h-full flex flex-col justify-between py-2 px-6 lg:px-12 select-none overflow-y-auto">
      {/* Header Banner */}
      <div className="mb-2">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs uppercase tracking-wider font-mono font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
            Vision & Closing Thesis
          </span>
          <span className="text-xs text-emerald-200/60">Slide 12 · Satin Finserv Sankalp 2026</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-display">
          MAKING CLIMATE ACTION CLEAR, LOCAL, AND DOABLE.
        </h2>
        <p className="text-xs sm:text-sm text-emerald-100/70 mt-0.5">
          "Climate resilience requires more than information. It requires understandable decisions, accessible support, and practical ways to act."
        </p>
      </div>

      {/* Main Closing Content: Core Thesis + 3 Value Pillars */}
      <div className="flex flex-col justify-center space-y-4 flex-1 my-auto">
        {/* Core Thesis Card */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#061811]/95 border-2 border-emerald-500/40 shadow-lg relative overflow-hidden">
          <div className="flex items-center gap-5">
            <div className="shrink-0 hidden sm:block">
              <SproutResilienceLottie size={100} />
            </div>
            <div className="space-y-2 flex-1">
              <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-emerald-400">
                Summary Thesis
              </span>
              <p className="text-base sm:text-lg font-bold text-white leading-relaxed">
                Climora bridges the critical gap between raw climate intelligence and real-world rural resilience, empowering smallholders with simple guidance and connecting them to affordable adaptation finance.
              </p>
              <div className="text-xs sm:text-sm text-slate-300 font-medium pt-1">
                TAGLINE: <span className="font-bold text-emerald-400">Smart solutions for a changing climate.</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Tenets / Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="p-4 rounded-xl bg-[#04140e] border border-emerald-500/35 flex flex-col justify-between shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-500/40 flex items-center justify-center font-bold text-xs">
                01
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-emerald-300 uppercase tracking-wide">
                Signal to Action
              </h4>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Translating volatile meteorological forecasts into 3 plain-language, vernacular chores that farmers can execute today.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#04140e] border border-cyan-500/35 flex flex-col justify-between shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-500/40 flex items-center justify-center font-bold text-xs">
                02
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-cyan-300 uppercase tracking-wide">
                Action to Capital
              </h4>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Signposting pre-approved partner micro-finance & equipment subsidies directly at the point of decision, with zero balance-sheet risk for Climora.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#04140e] border border-amber-500/35 flex flex-col justify-between shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-lg bg-amber-950 text-amber-400 border border-amber-500/40 flex items-center justify-center font-bold text-xs">
                03
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-amber-300 uppercase tracking-wide">
                Capital to Resilience
              </h4>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Tracking verified field adoption and crop loss avoidance to derisk MFI loan books and build permanent rural financial solvency.
            </p>
          </div>
        </div>

        {/* Quick Review Navigation Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
          <button
            onClick={() => onJumpToSlide && onJumpToSlide(1)} // Slide 2
            className="p-2.5 rounded-xl bg-[#04140e] border border-emerald-500/30 hover:border-rose-400 text-left transition-all cursor-pointer group shadow-sm"
          >
            <span className="text-[10px] font-mono text-emerald-400/60 uppercase block">Review</span>
            <span className="text-xs font-bold text-slate-200 group-hover:text-rose-400 flex items-center justify-between">
              <span>The Problem (Slide 2)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </button>

          <button
            onClick={() => onJumpToSlide && onJumpToSlide(4)} // Slide 5
            className="p-2.5 rounded-xl bg-[#04140e] border border-emerald-500/30 hover:border-emerald-400 text-left transition-all cursor-pointer group shadow-sm"
          >
            <span className="text-[10px] font-mono text-emerald-400/60 uppercase block">Review</span>
            <span className="text-xs font-bold text-slate-200 group-hover:text-emerald-400 flex items-center justify-between">
              <span>The Solution (Slide 5)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </button>

          <button
            onClick={() => onJumpToSlide && onJumpToSlide(5)} // Slide 6
            className="p-2.5 rounded-xl bg-[#04140e] border border-emerald-500/30 hover:border-cyan-400 text-left transition-all cursor-pointer group shadow-sm"
          >
            <span className="text-[10px] font-mono text-emerald-400/60 uppercase block">Review</span>
            <span className="text-xs font-bold text-slate-200 group-hover:text-cyan-400 flex items-center justify-between">
              <span>Architecture (Slide 6)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </button>

          <button
            onClick={() => onJumpToSlide && onJumpToSlide(10)} // Slide 11
            className="p-2.5 rounded-xl bg-[#04140e] border border-emerald-500/30 hover:border-amber-400 text-left transition-all cursor-pointer group shadow-sm"
          >
            <span className="text-[10px] font-mono text-emerald-400/60 uppercase block">Review</span>
            <span className="text-xs font-bold text-slate-200 group-hover:text-amber-400 flex items-center justify-between">
              <span>Sankalp (Slide 11)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-2 border-t border-emerald-500/25 flex items-center justify-between text-xs text-emerald-200/60">
        <span>Satin Finserv Sankalp · Climate Edition 2026</span>
        <span className="font-mono text-emerald-400 font-semibold">Ready for Field Pilot</span>
      </div>
    </div>
  );
};

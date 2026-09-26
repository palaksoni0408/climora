import React from 'react';
import { IMAGES } from '../../data/slidesData';
import { motion } from 'motion/react';
import {
  ClimateAlertLottieBadge,
  AdaptationFinanceLottieBadge,
  CompanionActionLottieBadge
} from '../animations/LottiePlayer';

export const Slide2Problem: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between py-2 px-6 lg:px-12 select-none overflow-y-auto">
      {/* Header Banner */}
      <div className="mb-3">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs uppercase tracking-wider font-mono font-semibold px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/40">
            The Problem Statement
          </span>
          <span className="text-xs text-emerald-200/60">Slide 02 · Grounded in 2026 Field Research</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-display">
          THE CLIMATE-LIVELIHOOD BLIND SPOT: THE SILENT THREAT OF UNACTIONABLE RISK DATA
        </h2>
        <p className="text-xs sm:text-sm text-emerald-100/70 mt-0.5">
          Why smallholder farmers receive millions of weather broadcasts but suffer catastrophic climate damage anyway.
        </p>
      </div>

      {/* Main Content Grid: Left Persona & Stat Callouts | Right Evidence Cards (All Dark Boxes) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch flex-1 my-auto">
        {/* Left Side: Persona Visual + Key Stats (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
          {/* Persona Card with Real Generated Image in Dark Box */}
          <div className="relative rounded-2xl overflow-hidden border border-emerald-500/40 bg-[#04140e] shadow-md aspect-16/9 group">
            <img
              src={IMAGES.farmer}
              alt="Indian smallholder farmer in Odisha checking climate advice on mobile phone"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#03130d] via-[#03130d]/50 to-transparent flex flex-col justify-end p-3.5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                Odisha Agrarian Belt
              </span>
              <h4 className="text-sm font-bold text-white leading-tight">
                Smallholder Farmer Profile
              </h4>
              <p className="text-xs text-slate-200 mt-0.5 line-clamp-2">
                Receives complex SMS forecasts like "Rainfall 32mm ±10%". Left asking: "Do I spray pesticide today or wait?"
              </p>
            </div>
          </div>

          {/* Stat Box 1: +156% Exposure Escalation with Climate Alert Lottie Animation */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-3.5 rounded-xl bg-[#061811]/95 border border-rose-500/40 shadow-sm flex items-center justify-between gap-3"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xl sm:text-2xl font-black text-rose-400 font-mono">
                  +156%
                </span>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-rose-950/80 text-rose-300 font-bold border border-rose-500/40">
                  Exposure Escalation
                </span>
              </div>
              <p className="text-xs text-slate-200 leading-snug">
                Heatwaves, delayed monsoons, and extreme weather events surging exponentially in vulnerable agrarian belts over the last 12 months.
              </p>
            </div>

            {/* Climate Alert Lottie Animation */}
            <div className="shrink-0 bg-[#0c1511] p-1 rounded-xl border border-rose-500/30">
              <ClimateAlertLottieBadge size={54} />
            </div>
          </motion.div>

          {/* Stat Box 2: 73% vs 14% The Adoption Gap with Companion Action Lottie Animation */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-3.5 rounded-xl bg-[#061811]/95 border border-cyan-500/40 shadow-sm flex items-center justify-between gap-3"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-xl sm:text-2xl font-black text-cyan-400 font-mono">
                    73%
                  </span>
                  <span className="text-xs font-semibold text-slate-400">vs</span>
                  <span className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">
                    14%
                  </span>
                </div>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-cyan-950/80 text-cyan-300 font-bold border border-cyan-500/40">
                  The Adoption Gap
                </span>
              </div>
              <p className="text-xs text-slate-200 leading-snug">
                <strong className="text-cyan-300">73%</strong> of smallholder farmers receive raw weather alerts via SMS/apps, yet <strong className="text-emerald-300">fewer than 14%</strong> implement verifiable adaptation practices.
              </p>
            </div>

            {/* Companion Action Lottie Animation */}
            <div className="shrink-0 bg-[#0c1511] p-1 rounded-xl border border-cyan-500/30">
              <CompanionActionLottieBadge size={54} />
            </div>
          </motion.div>
        </div>

        {/* Right Side: Evidence Cards (7 cols) - Dark Boxes */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-3">
          {/* Evidence Card 1: Nature India Research */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            className="p-4 rounded-xl bg-[#061912]/95 border-2 border-emerald-500/35 hover:border-emerald-400/70 transition-all shadow-md"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-950 text-emerald-300 border border-emerald-500/40 flex items-center justify-center font-bold text-xs">
                  01
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                    Odisha Farmer Research
                  </h4>
                  <span className="text-[11px] text-emerald-400 font-mono">
                    Nature India · March 2026
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#04140e] text-emerald-300/80 border border-emerald-500/30">
                N = 321 Farmers
              </span>
            </div>

            <p className="text-xs text-slate-200 leading-relaxed">
              A comprehensive empirical study of <strong className="text-white">321 farmers across Odisha</strong> revealed that technology adoption fails not from lack of weather awareness, but from interconnected structural bottlenecks: <strong className="text-emerald-300">lack of affordable finance</strong>, small fragmented landholdings, insecure land tenure, limited technical guidance, and absent institutional support.
            </p>

            <div className="mt-2.5 pt-2 border-t border-emerald-500/20 flex items-center gap-2 text-[11px] text-slate-300">
              <span className="font-semibold text-rose-400">Takeaway:</span>
              <span>Information without affordable financing leads to zero field resilience.</span>
            </div>
          </motion.div>

          {/* Evidence Card 2: Adaptation Finance Costs with Finance Lottie */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 }}
            className="p-4 rounded-xl bg-[#061912]/95 border-2 border-cyan-500/35 hover:border-cyan-400/70 transition-all shadow-md"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-cyan-950 text-cyan-300 border border-cyan-500/40 flex items-center justify-center font-bold text-xs">
                  02
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                    Adaptation Finance Costs
                  </h4>
                  <span className="text-[11px] text-cyan-400 font-mono">
                    Business Standard · June 2026
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#04140e] text-cyan-300/80 border border-cyan-500/30">
                  Macro Impact
                </span>
                {/* Micro Lottie Animation for Finance */}
                <div className="bg-[#03130d] p-0.5 rounded-lg border border-cyan-500/30">
                  <AdaptationFinanceLottieBadge size={36} />
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-200 leading-relaxed">
              Rising temperatures and delayed rain patterns drive massive agricultural labor hour and income losses across India. Proactive climate adaptation is severely bottlenecked by the <strong className="text-cyan-300">prohibitive cost of capital</strong> and the complete lack of micro-targeted resilience financing for inputs like shade nets, drip systems, and bio-mulch.
            </p>

            <div className="mt-2.5 pt-2 border-t border-cyan-500/20 flex items-center gap-2 text-[11px] text-slate-300">
              <span className="font-semibold text-cyan-400">Opportunity:</span>
              <span>Connecting climate advisories directly to micro-credit lines unlocks adoption.</span>
            </div>
          </motion.div>

          {/* Quick Problem Synthesis Callout in Dark Box */}
          <div className="p-3 rounded-xl bg-[#04150e] border border-emerald-500/30 flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-bold text-xs shrink-0">
                ✓
              </div>
              <p className="text-xs text-emerald-100">
                <strong className="text-emerald-400">The Climora Mandate:</strong> Stop delivering disconnected forecasts; start delivering 3-step action steps backed by partner micro-finance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-2 border-t border-emerald-500/25 flex items-center justify-between text-xs text-emerald-200/60">
        <span>Satin Finserv Sankalp · Climate Edition 2026</span>
        <span className="font-mono text-emerald-400 font-semibold">Evidence-Grounded Problem Framing</span>
      </div>
    </div>
  );
};


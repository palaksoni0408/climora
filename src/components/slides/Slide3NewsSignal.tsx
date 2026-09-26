import React from 'react';
import { motion } from 'motion/react';

export const Slide3NewsSignal: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between py-2 px-6 lg:px-12 select-none overflow-y-auto">
      {/* Header Banner */}
      <div className="mb-3">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs uppercase tracking-wider font-mono font-semibold px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-500/40">
            Market & Evidence Convergence
          </span>
          <span className="text-xs text-emerald-200/60">Slide 03 · 2026 Field Realities & Tech Shift</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-display">
          CLIMATE-TECH CONVERGENCE: CONNECTING REAL DEVELOPMENTS TO FIELD REALITIES
        </h2>
        <p className="text-xs sm:text-sm text-emerald-100/70 mt-0.5">
          How three simultaneous 2026 breakthroughs make the Climora companion timely and necessary.
        </p>
      </div>

      {/* Main Grid: 3 Ascending Evidence Pillars on Left + Paradigm Shift & Pros on Right (All Dark Boxes) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch flex-1 my-auto">
        {/* Left: 3 Ascending Evidence Pillars (7 cols) - Dark Boxes */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Phase 01 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col justify-between p-3.5 rounded-2xl bg-[#061811]/95 border-2 border-emerald-500/30 hover:border-emerald-400 transition-all shadow-md relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-slate-500" />
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#03130d] text-slate-300 border border-slate-700">
                  PHASE 01
                </span>
                <span className="text-[10px] font-mono text-slate-400">March 2026</span>
              </div>
              <h4 className="text-xs font-bold text-white uppercase leading-snug">
                Adoption Barriers
              </h4>
              <p className="text-[11px] font-medium text-emerald-400 mt-0.5">
                Nature India
              </p>
              <ul className="mt-2 space-y-1.5 text-xs text-slate-300 leading-relaxed">
                <li className="flex items-start gap-1.5">
                  <span className="text-emerald-400">•</span>
                  <span>Proves climate tools fail due to non-technical, human adoption hurdles.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-emerald-400">•</span>
                  <span>Weather alerts alone cannot drive action without operational context.</span>
                </li>
              </ul>
            </div>
            <div className="mt-3 pt-2 border-t border-emerald-500/20 text-[10px] font-mono text-slate-400 uppercase">
              Signal: The Delivery Deficit
            </div>
          </motion.div>

          {/* Phase 02 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-between p-3.5 rounded-2xl bg-[#061811]/95 border-2 border-cyan-500/35 hover:border-cyan-400 transition-all shadow-md relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-cyan-500" />
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#03130d] text-cyan-300 border border-cyan-500/40">
                  PHASE 02
                </span>
                <span className="text-[10px] font-mono text-cyan-400/70">June 2026</span>
              </div>
              <h4 className="text-xs font-bold text-white uppercase leading-snug">
                High Capital Costs
              </h4>
              <p className="text-[11px] font-medium text-cyan-400 mt-0.5">
                Business Standard
              </p>
              <ul className="mt-2 space-y-1.5 text-xs text-slate-300 leading-relaxed">
                <li className="flex items-start gap-1.5">
                  <span className="text-cyan-400">•</span>
                  <span>Documents severe economic strain of heatwaves on rural incomes.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-cyan-400">•</span>
                  <span>Highlights critical need for micro-targeted, affordable adaptation finance.</span>
                </li>
              </ul>
            </div>
            <div className="mt-3 pt-2 border-t border-cyan-500/20 text-[10px] font-mono text-cyan-400 uppercase">
              Signal: The Liquidity Bottleneck
            </div>
          </motion.div>

          {/* Phase 03 */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col justify-between p-3.5 rounded-2xl bg-[#061811]/95 border-2 border-emerald-500/40 hover:border-emerald-300 transition-all shadow-md relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-emerald-400" />
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#03130d] text-emerald-300 border border-emerald-500/40">
                  PHASE 03
                </span>
                <span className="text-[10px] font-mono text-emerald-400/70">Mid 2026</span>
              </div>
              <h4 className="text-xs font-bold text-white uppercase leading-snug">
                Tech Convergence
              </h4>
              <p className="text-[11px] font-medium text-emerald-400 mt-0.5">
                NITI Aayog / World Bank
              </p>
              <ul className="mt-2 space-y-1.5 text-xs text-slate-300 leading-relaxed">
                <li className="flex items-start gap-1.5">
                  <span className="text-emerald-400">•</span>
                  <span>AI and satellite analytics now enable instant 30-minute farm loans.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-emerald-400">•</span>
                  <span>Mandate: Climate finance must connect directly to smallholder decision points.</span>
                </li>
              </ul>
            </div>
            <div className="mt-3 pt-2 border-t border-emerald-500/20 text-[10px] font-mono text-emerald-400 uppercase">
              Signal: Scalable FinTech Rail
            </div>
          </motion.div>
        </div>

        {/* Right: Paradigm Shift & Pros Callout Box (5 cols) - Dark Boxes */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
          {/* Paradigm Shift Dark Box */}
          <div className="p-4 rounded-2xl bg-[#061912]/95 border-2 border-emerald-500/40 shadow-md">
            <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-emerald-400 block mb-1">
              The Paradigm Shift
            </span>
            <p className="text-sm sm:text-base font-bold text-white leading-snug">
              Shifting from isolated satellite/AI risk monitoring to an integrated, partner-led action and finance engine.
            </p>
            <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
              Instead of telling farmers "there is a 60% chance of drought", Climora provides the 3 field actions to take today and connects them to micro-lending partners for immediate support.
            </p>
          </div>

          {/* Visual PROS Box - Dark Box on Green */}
          <div className="p-4 rounded-2xl bg-[#05170f]/95 border-2 border-emerald-500/40 shadow-md">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-handwriting text-2xl font-bold text-emerald-400">
                PROS
              </span>
              <span className="w-6 h-6 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center text-xs font-bold">
                ✓
              </span>
              <span className="text-[11px] font-mono text-emerald-300 ml-auto uppercase font-semibold">
                Strategic Fit
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-[#03130d] border border-emerald-500/30">
                <span className="text-emerald-400 font-bold">✔</span>
                <span className="font-medium text-slate-200 text-[11px]">
                  Grounded in 2026 Evidence
                </span>
              </div>

              <div className="flex items-center gap-2 p-2 rounded-lg bg-[#03130d] border border-emerald-500/30">
                <span className="text-emerald-400 font-bold">✔</span>
                <span className="font-medium text-slate-200 text-[11px]">
                  Leverages Existing FinTech
                </span>
              </div>

              <div className="flex items-center gap-2 p-2 rounded-lg bg-[#03130d] border border-emerald-500/30">
                <span className="text-emerald-400 font-bold">✔</span>
                <span className="font-medium text-slate-200 text-[11px]">
                  Zero Hardware Footprint
                </span>
              </div>

              <div className="flex items-center gap-2 p-2 rounded-lg bg-[#03130d] border border-emerald-500/30">
                <span className="text-emerald-400 font-bold">✔</span>
                <span className="font-medium text-slate-200 text-[11px]">
                  Local Dialect Guidance
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-2 border-t border-emerald-500/25 flex items-center justify-between text-xs text-emerald-200/60">
        <span>Satin Finserv Sankalp · Climate Edition 2026</span>
        <span className="font-mono text-emerald-400 font-semibold">Evidence-Driven Intervention Design</span>
      </div>
    </div>
  );
};

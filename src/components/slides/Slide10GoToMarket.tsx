import React from 'react';
import { MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export const Slide10GoToMarket: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between py-2 px-6 lg:px-12 select-none overflow-y-auto">
      {/* Header Banner */}
      <div className="mb-2">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs uppercase tracking-wider font-mono font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
            Go-To-Market Execution
          </span>
          <span className="text-xs text-emerald-200/60">Slide 10 · 8-12 Week Controlled Field Pilot</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-display">
          GO-TO-MARKET: START SMALL. LEARN LOCALLY. SCALE WITH EVIDENCE.
        </h2>
        <p className="text-xs sm:text-sm text-emerald-100/70 mt-0.5">
          A disciplined, low-capital 8-12 week sprint in the Odisha agrarian belt prior to institutional national roll-out.
        </p>
      </div>

      {/* Main Grid: 4 Pilot Phases in Dark Boxes on Green Canvas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 items-stretch flex-1 my-auto">
        {/* Phase 01 */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-4 rounded-2xl bg-[#061811]/95 border-2 border-emerald-500/35 hover:border-emerald-400 transition-all shadow-md flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="w-7 h-7 rounded-lg bg-[#03130d] text-slate-200 font-mono font-bold text-xs flex items-center justify-center border border-slate-700">
                01
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#03130d] text-slate-300 font-bold border border-slate-700">
                Weeks 1–3
              </span>
            </div>

            <h4 className="text-sm font-bold text-white uppercase mb-1">
              Discover
            </h4>
            <p className="text-xs text-emerald-400 font-medium mb-2">
              Field Listening & Baseline
            </p>

            <ul className="space-y-1.5 text-xs text-slate-300 leading-relaxed">
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-400 font-bold">•</span>
                <span>Conduct field interviews with <strong className="text-white">100–200 smallholders</strong> in target Odisha district.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-400 font-bold">•</span>
                <span>Map existing MFI branch touchpoints and agricultural advisory communication gaps.</span>
              </li>
            </ul>
          </div>

          <div className="mt-4 pt-2 border-t border-emerald-500/20 text-[10px] font-mono text-slate-400">
            Deliverable: Baseline Gap Dossier
          </div>
        </motion.div>

        {/* Phase 02 */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-4 rounded-2xl bg-[#061811]/95 border-2 border-cyan-500/35 hover:border-cyan-400 transition-all shadow-md flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="w-7 h-7 rounded-lg bg-cyan-950 text-cyan-300 font-mono font-bold text-xs flex items-center justify-center border border-cyan-500/40">
                02
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 font-bold border border-cyan-500/40">
                Weeks 4–6
              </span>
            </div>

            <h4 className="text-sm font-bold text-white uppercase mb-1">
              Co-Design
            </h4>
            <p className="text-xs text-cyan-400 font-medium mb-2">
              Vernacular UI & Agronomy
            </p>

            <ul className="space-y-1.5 text-xs text-slate-300 leading-relaxed">
              <li className="flex items-start gap-1.5">
                <span className="text-cyan-400 font-bold">•</span>
                <span>Test local-language dialect guidance (<strong className="text-cyan-300">Odia</strong>) and simplified voice/audio formats.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-cyan-400 font-bold">•</span>
                <span>Establish rigorous 3-step agronomy rulebooks for local paddy, pulses, and vegetables.</span>
              </li>
            </ul>
          </div>

          <div className="mt-4 pt-2 border-t border-cyan-500/20 text-[10px] font-mono text-cyan-400">
            Deliverable: Odia Action Templates
          </div>
        </motion.div>

        {/* Phase 03 */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="p-4 rounded-2xl bg-[#061811]/95 border-2 border-emerald-500/40 hover:border-emerald-300 transition-all shadow-md flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="w-7 h-7 rounded-lg bg-emerald-950 text-emerald-300 font-mono font-bold text-xs flex items-center justify-center border border-emerald-500/40">
                03
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 font-bold border border-emerald-500/40">
                Weeks 7–10
              </span>
            </div>

            <h4 className="text-sm font-bold text-white uppercase mb-1">
              Pilot Rollout
            </h4>
            <p className="text-xs text-emerald-400 font-medium mb-2">
              Live Field Companion Run
            </p>

            <ul className="space-y-1.5 text-xs text-slate-300 leading-relaxed">
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-400 font-bold">•</span>
                <span>Roll out Climora mobile/SMS companion to <strong className="text-emerald-300">100–200 active farmer participants</strong>.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-400 font-bold">•</span>
                <span>Deliver weekly risk warnings + 3-step action plans linked to Satin Finserv micro-lines.</span>
              </li>
            </ul>
          </div>

          <div className="mt-4 pt-2 border-t border-emerald-500/20 text-[10px] font-mono text-emerald-400">
            Deliverable: Live Adoption Logs
          </div>
        </motion.div>

        {/* Phase 04 */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="p-4 rounded-2xl bg-[#061811]/95 border-2 border-indigo-500/35 hover:border-indigo-400 transition-all shadow-md flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="w-7 h-7 rounded-lg bg-indigo-950 text-indigo-300 font-mono font-bold text-xs flex items-center justify-center border border-indigo-500/40">
                04
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 font-bold border border-indigo-500/40">
                Weeks 11–12
              </span>
            </div>

            <h4 className="text-sm font-bold text-white uppercase mb-1">
              Evaluate
            </h4>
            <p className="text-xs text-indigo-400 font-medium mb-2">
              Evidence & Scale Plan
            </p>

            <ul className="space-y-1.5 text-xs text-slate-300 leading-relaxed">
              <li className="flex items-start gap-1.5">
                <span className="text-indigo-400 font-bold">•</span>
                <span>Measure baseline-to-endline adoption rates and user satisfaction metrics.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-indigo-400 font-bold">•</span>
                <span>Publish comprehensive evidence report for MFI partner scaling and funding.</span>
              </li>
            </ul>
          </div>

          <div className="mt-4 pt-2 border-t border-indigo-500/20 text-[10px] font-mono text-indigo-400">
            Deliverable: Scale Evaluation Report
          </div>
        </motion.div>
      </div>

      {/* Pilot Execution Safeguard Banner in Dark Box */}
      <div className="p-3 rounded-xl bg-[#04140e] border border-emerald-500/35 flex items-center justify-between text-xs shadow-xs">
        <div className="flex items-center gap-2 text-slate-200">
          <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
          <span><strong className="text-emerald-300">Pilot Focus:</strong> High-vulnerability smallholder clusters in Balasore and Mayurbhanj, Odisha.</span>
        </div>
        <span className="font-mono text-emerald-400 font-semibold">Zero-Capital Barrier</span>
      </div>

      {/* Footer */}
      <div className="pt-2 border-t border-emerald-500/25 flex items-center justify-between text-xs text-emerald-200/60">
        <span>Satin Finserv Sankalp · Climate Edition 2026</span>
        <span className="font-mono text-emerald-400 font-semibold">Disciplined Field Deployment</span>
      </div>
    </div>
  );
};

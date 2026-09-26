import React from 'react';
import { Network, ShieldCheck, Compass, Wallet } from 'lucide-react';

export const Slide11RoadmapSankalp: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between py-2 px-6 lg:px-12 select-none overflow-y-auto">
      {/* Header Banner */}
      <div className="mb-2">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs uppercase tracking-wider font-mono font-semibold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
            Roadmap & Sankalp Acceleration
          </span>
          <span className="text-xs text-emerald-200/60">Slide 11 · 12-Month Milestones & Pilot Synergy</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-display">
          12-MONTH ROADMAP & THE SATIN FINSERV SANKALP OPPORTUNITY
        </h2>
        <p className="text-xs sm:text-sm text-emerald-100/70 mt-0.5">
          How partnership with Satin Finserv transforms Climora from a smart concept into a nationwide smallholder resilience engine.
        </p>
      </div>

      {/* Main Grid: 12-Month Timeline (Top) + Sankalp Accelerator Synergy (Bottom) - All Dark Boxes */}
      <div className="flex-1 flex flex-col justify-between space-y-3 my-auto">
        {/* 12-Month Timeline Q1 to Q4 in Dark Boxes */}
        <div>
          <div className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 mb-1.5 font-bold">
            12-Month Phased Milestones:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {/* Q1 */}
            <div className="p-3.5 rounded-xl bg-[#061811]/95 border-2 border-emerald-500/35 shadow-sm">
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-xs font-bold text-white px-2 py-0.5 rounded bg-[#03130d] border border-slate-700">
                  Q1 (M1–3)
                </span>
                <span className="text-[10px] font-mono text-slate-400">Groundwork</span>
              </div>
              <h4 className="text-xs font-bold text-white uppercase mb-1">
                Discovery & Baseline
              </h4>
              <ul className="text-xs text-slate-300 space-y-1 leading-snug">
                <li>• Field Discovery & Partner Mapping</li>
                <li>• Open-Meteo & IMD data feasibility</li>
                <li>• Baseline farmer advisory audit</li>
              </ul>
            </div>

            {/* Q2 */}
            <div className="p-3.5 rounded-xl bg-[#061811]/95 border-2 border-cyan-500/35 shadow-sm">
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-xs font-bold text-cyan-300 px-2 py-0.5 rounded bg-cyan-950 border border-cyan-500/40">
                  Q2 (M4–6)
                </span>
                <span className="text-[10px] font-mono text-cyan-400/80">Engineering</span>
              </div>
              <h4 className="text-xs font-bold text-white uppercase mb-1">
                Prototype & NLP
              </h4>
              <ul className="text-xs text-slate-300 space-y-1 leading-snug">
                <li>• Prototype build & usability testing</li>
                <li>• Local Odia NLU validation</li>
                <li>• MFI dashboard integration mockups</li>
              </ul>
            </div>

            {/* Q3 */}
            <div className="p-3.5 rounded-xl bg-[#042015] border-2 border-emerald-400 shadow-sm">
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-xs font-bold text-emerald-300 px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/40">
                  Q3 (M7–9)
                </span>
                <span className="text-[10px] font-mono text-emerald-400">Field Launch</span>
              </div>
              <h4 className="text-xs font-bold text-emerald-200 uppercase mb-1">
                200-Farmer Field Pilot
              </h4>
              <ul className="text-xs text-emerald-100 space-y-1 leading-snug">
                <li>• 200-Farmer live pilot in Odisha</li>
                <li>• Active Satin branch coordination</li>
                <li>• Live MFI portfolio dashboard launch</li>
              </ul>
            </div>

            {/* Q4 */}
            <div className="p-3.5 rounded-xl bg-[#061811]/95 border-2 border-indigo-500/35 shadow-sm">
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-xs font-bold text-indigo-300 px-2 py-0.5 rounded bg-indigo-950 border border-indigo-500/40">
                  Q4 (M10–12)
                </span>
                <span className="text-[10px] font-mono text-indigo-400/80">Scale</span>
              </div>
              <h4 className="text-xs font-bold text-white uppercase mb-1">
                Scale & Evaluation
              </h4>
              <ul className="text-xs text-slate-300 space-y-1 leading-snug">
                <li>• Rigorous baseline-endline evaluation</li>
                <li>• Multi-state MFI scaling blueprint</li>
                <li>• Commercial roll-out decision</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How Sankalp Support Accelerates Climora (3 Pillars in Dark Boxes) */}
        <div>
          <div className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 mb-1.5 font-bold">
            How Satin Finserv Sankalp Support Accelerates Climora:
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Pillar 1 */}
            <div className="p-3.5 rounded-xl bg-[#061811]/95 border border-emerald-500/35 shadow-sm">
              <div className="flex items-center gap-2 mb-1.5">
                <Network className="w-4 h-4 text-emerald-400 shrink-0" />
                <h4 className="text-xs font-bold text-white uppercase">
                  Field & Network Access
                </h4>
              </div>
              <p className="text-xs text-slate-300 leading-snug">
                Leverage Satin Finserv's established rural field officer presence and borrower relationships for trusted, friction-free pilot recruitment.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-3.5 rounded-xl bg-[#061811]/95 border border-teal-500/35 shadow-sm">
              <div className="flex items-center gap-2 mb-1.5">
                <Compass className="w-4 h-4 text-teal-400 shrink-0" />
                <h4 className="text-xs font-bold text-white uppercase">
                  Technical Validation
                </h4>
              </div>
              <p className="text-xs text-slate-300 leading-snug">
                Collaborate with financial risk analysts to refine the risk-finance linking models and prove micro-credit default reduction.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-3.5 rounded-xl bg-[#061811]/95 border border-cyan-500/35 shadow-sm">
              <div className="flex items-center gap-2 mb-1.5">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <h4 className="text-xs font-bold text-white uppercase">
                  Mentorship & Governance
                </h4>
              </div>
              <p className="text-xs text-slate-300 leading-snug">
                Ensure full compliance with RBI digital lending guidelines and ethical safeguards for vulnerable agricultural borrowers.
              </p>
            </div>
          </div>
        </div>

        {/* Grant / Pilot Budget Box in Dark Box */}
        <div className="p-3 rounded-xl bg-[#04140e] border-2 border-dashed border-amber-500/40 flex items-center justify-between text-xs shadow-xs">
          <div className="flex items-center gap-2">
            <Wallet className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="font-mono text-amber-200 font-bold">
              [ Allocated Pilot Budget: ₹15,00,000 — Focused 100% on Field Execution & Impact Assessment ]
            </span>
          </div>
          <span className="text-[10px] font-mono text-amber-400 font-semibold uppercase">
            Phase 1 Pilot Scope
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-2 border-t border-emerald-500/25 flex items-center justify-between text-xs text-emerald-200/60">
        <span>Satin Finserv Sankalp · Climate Edition 2026</span>
        <span className="font-mono text-amber-400 font-semibold">Strategic Alliance Execution</span>
      </div>
    </div>
  );
};

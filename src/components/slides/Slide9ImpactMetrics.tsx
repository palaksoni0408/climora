import React from 'react';

export const Slide9ImpactMetrics: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between py-2 px-6 lg:px-12 select-none overflow-y-auto">
      {/* Header Banner */}
      <div className="mb-2">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs uppercase tracking-wider font-mono font-semibold px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-500/40">
            Impact Evaluation
          </span>
          <span className="text-xs text-emerald-200/60">Slide 09 · Accountability & Verifiable Resilience</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-display">
          MEASURING RESILIENCE CREATED — NOT JUST TECHNOLOGY DEPLOYED
        </h2>
        <p className="text-xs sm:text-sm text-emerald-100/70 mt-0.5">
          A rigorous theory of change moving from data ingestion to verified smallholder crop protection.
        </p>
      </div>

      {/* Main Grid: Impact Framework (Top) + Pilot Measurement Matrix (Bottom) - All Dark Boxes */}
      <div className="flex-1 flex flex-col justify-between space-y-3 my-auto">
        {/* 4-Stage Theory of Change in Dark Boxes */}
        <div>
          <div className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 mb-1.5 font-bold">
            Impact Evaluation Theory of Change:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {/* 1. INPUTS */}
            <div className="p-3 rounded-xl bg-[#061811]/95 border border-emerald-500/35 shadow-sm">
              <span className="font-mono text-[10px] uppercase font-bold text-slate-400 block mb-1">
                STAGE 01 · INPUTS
              </span>
              <h4 className="text-xs font-bold text-white uppercase mb-1">
                Foundations
              </h4>
              <ul className="text-xs text-slate-300 space-y-0.5 leading-snug">
                <li>• Weather & sat data feeds</li>
                <li>• Partner MFI field networks</li>
                <li>• Validated agronomy rules</li>
              </ul>
            </div>

            {/* 2. OUTPUTS */}
            <div className="p-3 rounded-xl bg-[#061811]/95 border border-cyan-500/35 shadow-sm">
              <span className="font-mono text-[10px] uppercase font-bold text-cyan-400 block mb-1">
                STAGE 02 · OUTPUTS
              </span>
              <h4 className="text-xs font-bold text-white uppercase mb-1">
                Field Delivery
              </h4>
              <ul className="text-xs text-slate-300 space-y-0.5 leading-snug">
                <li>• Localized alerts delivered</li>
                <li>• Action checklists opened</li>
                <li>• Dialect audio listened</li>
              </ul>
            </div>

            {/* 3. SHORT-TERM OUTCOMES */}
            <div className="p-3 rounded-xl bg-[#061811]/95 border border-teal-500/35 shadow-sm">
              <span className="font-mono text-[10px] uppercase font-bold text-teal-400 block mb-1">
                STAGE 03 · OUTCOMES
              </span>
              <h4 className="text-xs font-bold text-white uppercase mb-1">
                Action Taken
              </h4>
              <ul className="text-xs text-slate-300 space-y-0.5 leading-snug">
                <li>• &gt;70% comprehension</li>
                <li>• 1+ practice adopted</li>
                <li>• Micro-credit line accessed</li>
              </ul>
            </div>

            {/* 4. LONG-TERM IMPACT */}
            <div className="p-3 rounded-xl bg-[#042015] border border-emerald-400 shadow-sm">
              <span className="font-mono text-[10px] uppercase font-bold text-emerald-300 block mb-1">
                STAGE 04 · IMPACT
              </span>
              <h4 className="text-xs font-bold text-emerald-200 uppercase mb-1">
                Lasting Resilience
              </h4>
              <ul className="text-xs text-emerald-100 space-y-0.5 leading-snug">
                <li>• Reduced heat/drought loss</li>
                <li>• Stable agrarian income</li>
                <li>• Higher loan repayment rate</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pilot Measurement Matrix Table in Dark Box */}
        <div className="rounded-xl border border-emerald-500/35 bg-[#061811]/95 overflow-hidden shadow-md">
          <div className="bg-[#03130d] px-4 py-2 border-b border-emerald-500/30 flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-wider text-emerald-300 font-bold">
              Pilot Measurement Matrix (Odisha 200-Farmer Cohort)
            </span>
            <span className="text-[10px] font-mono text-emerald-400 font-semibold">
              Rigorous Evaluation Standard
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-emerald-500/20 text-[11px] font-mono uppercase text-slate-400">
                  <th className="py-2 px-4 w-1/4">Metric Category</th>
                  <th className="py-2 px-4 w-2/5">Indicator Target (Pilot Phase)</th>
                  <th className="py-2 px-4 w-1/3">Verification Method</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-500/15 text-xs">
                <tr className="hover:bg-[#081e15]/70 transition-colors">
                  <td className="py-2.5 px-4 font-bold text-slate-200">
                    Reach & Usability
                  </td>
                  <td className="py-2.5 px-4 font-mono font-medium text-emerald-300">
                    &gt;80% open rate; &gt;70% comprehension rate
                  </td>
                  <td className="py-2.5 px-4 text-slate-300">
                    In-app telemetry & post-event voice sampling
                  </td>
                </tr>

                <tr className="hover:bg-[#081e15]/70 transition-colors">
                  <td className="py-2.5 px-4 font-bold text-slate-200">
                    Practical Adoption
                  </td>
                  <td className="py-2.5 px-4 font-mono font-medium text-emerald-300">
                    &gt;40% adoption of recommended action steps
                  </td>
                  <td className="py-2.5 px-4 text-slate-300">
                    Field agent verification & randomized spot checks
                  </td>
                </tr>

                <tr className="hover:bg-[#081e15]/70 transition-colors">
                  <td className="py-2.5 px-4 font-bold text-slate-200">
                    Financial Access
                  </td>
                  <td className="py-2.5 px-4 font-mono font-medium text-emerald-300">
                    &gt;20% opt-in engagement with partner finance
                  </td>
                  <td className="py-2.5 px-4 text-slate-300">
                    Partner MFI referral logs & subsidy voucher claims
                  </td>
                </tr>

                <tr className="hover:bg-[#081e15]/70 transition-colors">
                  <td className="py-2.5 px-4 font-bold text-slate-200">
                    Resilience Impact
                  </td>
                  <td className="py-2.5 px-4 font-mono font-medium text-emerald-300">
                    Self-reported &gt;25% reduction in crop weather damage
                  </td>
                  <td className="py-2.5 px-4 text-slate-300">
                    Pre-pilot baseline vs. Post-harvest endline survey
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-2 border-t border-emerald-500/25 flex items-center justify-between text-xs text-emerald-200/60">
        <span>Satin Finserv Sankalp · Climate Edition 2026</span>
        <span className="font-mono text-emerald-400 font-semibold">Evidence-Verified Outcomes</span>
      </div>
    </div>
  );
};

import React from 'react';
import { COMPARISON_DATA } from '../../data/slidesData';

export const Slide4GapAnalysis: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between py-2 px-6 lg:px-12 select-none overflow-y-auto">
      {/* Header Banner */}
      <div className="mb-3">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs uppercase tracking-wider font-mono font-semibold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
            Market Gap Analysis
          </span>
          <span className="text-xs text-emerald-200/60">Slide 04 · Strategic Comparison & Current Silos</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-display">
          THE MARKET GAP: INSIGHT vs. ACTION vs. ADAPTATION
        </h2>
        <p className="text-xs sm:text-sm text-emerald-100/70 mt-0.5">
          Why smallholders fall into the chasm between raw weather forecasts and institutional lending tools.
        </p>
      </div>

      {/* Main Grid: Comparison Table (Dark Box) + Cons Callout (Dark Boxes) */}
      <div className="flex-1 flex flex-col justify-between space-y-3 my-auto">
        {/* Comparison Table Dark Box */}
        <div className="rounded-xl border border-emerald-500/35 bg-[#061811]/95 overflow-hidden shadow-md">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-[#03130d] border-b border-emerald-500/30">
                  <th className="py-2.5 px-3 font-mono uppercase tracking-wider text-emerald-300 font-bold w-1/4">
                    Dimension
                  </th>
                  <th className="py-2.5 px-3 font-mono uppercase tracking-wider text-slate-400 w-1/4">
                    Conventional Weather SMS / Apps
                  </th>
                  <th className="py-2.5 px-3 font-mono uppercase tracking-wider text-slate-400 w-1/4">
                    Agricultural AI Lending Platforms
                  </th>
                  <th className="py-2.5 px-3 font-mono uppercase tracking-wider text-emerald-300 font-bold bg-emerald-950/70 w-1/4 border-l border-emerald-500/40">
                    Our Climora Platform ★
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-500/15">
                {COMPARISON_DATA.map((row) => (
                  <tr
                    key={row.dimension}
                    className="hover:bg-[#081e15]/70 transition-colors"
                  >
                    <td className="py-2.5 px-3 font-semibold text-slate-200 text-xs">
                      {row.dimension}
                    </td>
                    <td className="py-2.5 px-3 text-slate-300 leading-snug">
                      {row.conventional}
                    </td>
                    <td className="py-2.5 px-3 text-slate-300 leading-snug">
                      {row.agriAi}
                    </td>
                    <td className="py-2.5 px-3 font-medium text-emerald-200 bg-emerald-950/40 border-l border-emerald-500/40 leading-snug">
                      {row.climora}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Section: The 3 Fatal Cons of Existing Solutions (Dark Boxes) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-center">
          {/* Left Indie "CONS!" Badge */}
          <div className="lg:col-span-3 flex items-center justify-center p-3 rounded-xl bg-[#061811]/95 border border-rose-500/40 shadow-sm">
            <div className="text-center">
              <span className="font-handwriting text-3xl font-extrabold text-rose-400 tracking-tight block">
                Fatal Flaws!
              </span>
              <span className="text-[10px] font-mono uppercase text-emerald-200/60 tracking-wider">
                In Today's Agritech Stacks
              </span>
            </div>
          </div>

          {/* 3 Numbered Flaws in Dark Boxes */}
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {/* Flaw 1 */}
            <div className="p-3 rounded-xl bg-[#061811]/95 border border-rose-500/35 relative hover:border-rose-400 transition-colors shadow-sm">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-5 h-5 rounded-md bg-rose-600 text-white font-mono font-bold text-xs flex items-center justify-center">
                  1
                </span>
                <span className="text-xs font-bold text-white uppercase">
                  No Actionability
                </span>
              </div>
              <p className="text-[11px] text-slate-300 leading-snug">
                Raw weather alerts announce heatwaves or rain, but do not provide a 3-step decision protocol for farmers today.
              </p>
            </div>

            {/* Flaw 2 */}
            <div className="p-3 rounded-xl bg-[#061811]/95 border border-amber-500/35 relative hover:border-amber-400 transition-colors shadow-sm">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-5 h-5 rounded-md bg-amber-600 text-white font-mono font-bold text-xs flex items-center justify-center">
                  2
                </span>
                <span className="text-xs font-bold text-white uppercase">
                  Fragmentation
                </span>
              </div>
              <p className="text-[11px] text-slate-300 leading-snug">
                Financial micro-credit lines and agricultural weather advisory function in completely segregated, non-communicative silos.
              </p>
            </div>

            {/* Flaw 3 */}
            <div className="p-3 rounded-xl bg-[#061811]/95 border border-cyan-500/35 relative hover:border-cyan-400 transition-colors shadow-sm">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-5 h-5 rounded-md bg-cyan-600 text-white font-mono font-bold text-xs flex items-center justify-center">
                  3
                </span>
                <span className="text-xs font-bold text-white uppercase">
                  Adoption Blindness
                </span>
              </div>
              <p className="text-[11px] text-slate-300 leading-snug">
                Current metrics celebrate SMS broadcast counts and downloads rather than verified field-level risk mitigation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-2 border-t border-emerald-500/25 flex items-center justify-between text-xs text-emerald-200/60">
        <span>Satin Finserv Sankalp · Climate Edition 2026</span>
        <span className="font-mono text-emerald-400 font-semibold">Bridging the Gap from Broadcast to Adoption</span>
      </div>
    </div>
  );
};

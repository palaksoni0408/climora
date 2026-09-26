import React from 'react';
import { CAPABILITY_DATA } from '../../data/slidesData';

export const Slide7Differentiation: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between py-2 px-6 lg:px-12 select-none overflow-y-auto">
      {/* Header Banner */}
      <div className="mb-2">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs uppercase tracking-wider font-mono font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
            Competitive Differentiation
          </span>
          <span className="text-xs text-emerald-200/60">Slide 07 · Feature-by-Feature Capability Matrix</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-display">
          DIFFERENTIATION: NOT ANOTHER ALERT. A CLEARER PATH TO ACTION.
        </h2>
        <p className="text-xs sm:text-sm text-emerald-100/70 mt-0.5">
          How Climora uniquely synthesizes actionability, lightweight delivery, and financial integration.
        </p>
      </div>

      {/* Main Grid: Capability Matrix (Left 7 cols) & 3 Key Advantages (Right 5 cols) - All Dark Boxes */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch flex-1 my-auto">
        {/* Left: Capability Matrix in Dark Box (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div className="rounded-xl border border-emerald-500/35 bg-[#061811]/95 overflow-hidden shadow-md">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-[#03130d] border-b border-emerald-500/30">
                  <th className="py-2.5 px-3 font-mono uppercase tracking-wider text-emerald-300 font-bold">
                    Core Capability
                  </th>
                  <th className="py-2.5 px-3 font-mono uppercase tracking-wider text-slate-400 text-center">
                    Generic Weather Apps
                  </th>
                  <th className="py-2.5 px-3 font-mono uppercase tracking-wider text-slate-400 text-center">
                    Agri Credit Analytics
                  </th>
                  <th className="py-2.5 px-3 font-mono uppercase tracking-wider text-emerald-300 font-bold bg-emerald-950/70 text-center border-l border-emerald-500/40">
                    Our Climora
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-500/15">
                {CAPABILITY_DATA.map((row) => (
                  <tr
                    key={row.capability}
                    className="hover:bg-[#081e15]/70 transition-colors"
                  >
                    <td className="py-2 px-3 font-semibold text-slate-200">
                      {row.capability}
                    </td>

                    {/* Generic Apps */}
                    <td className="py-2 px-3 text-center">
                      {row.genericApps ? (
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#03130d] text-slate-300 border border-slate-700 text-xs">
                          ✓
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full text-slate-600 text-xs">
                          —
                        </span>
                      )}
                    </td>

                    {/* Credit Analytics */}
                    <td className="py-2 px-3 text-center">
                      {row.creditAnalytics ? (
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#03130d] text-slate-300 border border-slate-700 text-xs">
                          ✓
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full text-slate-600 text-xs">
                          —
                        </span>
                      )}
                    </td>

                    {/* Climora */}
                    <td className="py-2 px-3 text-center bg-emerald-950/40 border-l border-emerald-500/40 font-bold">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500 text-slate-950 text-xs shadow-xs font-bold">
                        ✓
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Quick Capability Footnote */}
          <div className="mt-2.5 p-2 rounded-lg bg-[#04140e] border border-emerald-500/25 text-[11px] text-emerald-200/70 flex items-center justify-between">
            <span>Evaluated against 12 leading Indian agritech & micro-insurance platforms.</span>
            <span className="font-mono text-emerald-400 font-semibold">100% Action Delivery</span>
          </div>
        </div>

        {/* Right: 3 Key Strategic Advantages (5 cols) in Dark Boxes */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-2.5">
          {/* Advantage 1 */}
          <div className="p-3.5 rounded-xl bg-[#061811]/95 border-2 border-emerald-500/35 hover:border-emerald-400 transition-all shadow-md">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-6 h-6 rounded-md bg-emerald-950 text-emerald-300 border border-emerald-500/40 flex items-center justify-center font-bold text-xs">
                1
              </span>
              <h4 className="text-xs font-bold text-white uppercase tracking-wide">
                Zero-Knowledge Deployment
              </h4>
            </div>
            <p className="text-xs text-slate-300 leading-snug">
              Operates across lightweight mobile web & SMS channels without requiring heavy on-premise hardware, plot beacons, or expensive sensors.
            </p>
          </div>

          {/* Advantage 2 */}
          <div className="p-3.5 rounded-xl bg-[#061811]/95 border-2 border-teal-500/35 hover:border-teal-400 transition-all shadow-md">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-6 h-6 rounded-md bg-teal-950 text-teal-300 border border-teal-500/40 flex items-center justify-center font-bold text-xs">
                2
              </span>
              <h4 className="text-xs font-bold text-white uppercase tracking-wide">
                Action-Oriented Design
              </h4>
            </div>
            <p className="text-xs text-slate-300 leading-snug">
              Moves far beyond raw statistical alerts to deliver concrete 3-step checklists tailored to local soil, crop variety, and irrigation options.
            </p>
          </div>

          {/* Advantage 3 */}
          <div className="p-3.5 rounded-xl bg-[#061811]/95 border-2 border-cyan-500/35 hover:border-cyan-400 transition-all shadow-md">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-6 h-6 rounded-md bg-cyan-950 text-cyan-300 border border-cyan-500/40 flex items-center justify-center font-bold text-xs">
                3
              </span>
              <h4 className="text-xs font-bold text-white uppercase tracking-wide">
                Responsible Partner Integration
              </h4>
            </div>
            <p className="text-xs text-slate-300 leading-snug">
              Unlocks financial inclusion by connecting climate risk mitigation directly to existing MFI/banking workflows like Satin Finserv Sankalp.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-2 border-t border-emerald-500/25 flex items-center justify-between text-xs text-emerald-200/60">
        <span>Satin Finserv Sankalp · Climate Edition 2026</span>
        <span className="font-mono text-emerald-400 font-semibold">Defensible Strategic Moat</span>
      </div>
    </div>
  );
};

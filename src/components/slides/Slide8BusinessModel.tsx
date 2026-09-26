import React from 'react';
import { Users, Building2, HeartHandshake } from 'lucide-react';

export const Slide8BusinessModel: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between py-2 px-6 lg:px-12 select-none overflow-y-auto">
      {/* Header Banner */}
      <div className="mb-2">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs uppercase tracking-wider font-mono font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
            Business Model & Customers
          </span>
          <span className="text-xs text-emerald-200/60">Slide 08 · Partner-Led B2B / B2G Monetization</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-display">
          TARGET USERS & B2B/B2G PARTNER-LED BUSINESS MODEL
        </h2>
        <p className="text-xs sm:text-sm text-emerald-100/70 mt-0.5">
          High-margin institutional software and impact analytics that keep resilience tools completely free for farmers.
        </p>
      </div>

      {/* Main Grid: User Segmentation (Top) + 3 Revenue Streams (Bottom) - All Dark Boxes */}
      <div className="flex-1 flex flex-col justify-between space-y-3 my-auto">
        {/* User & Beneficiary Segmentation in Dark Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* End Users */}
          <div className="p-3.5 rounded-xl bg-[#061811]/95 border border-emerald-500/35 shadow-md">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold text-emerald-300 uppercase tracking-wide flex items-center gap-1.5">
                <Users className="w-4 h-4 text-emerald-400" />
                End Users (100% Free Forever)
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 font-bold border border-emerald-500/40">
                Beneficiaries
              </span>
            </div>
            <ul className="space-y-1 text-xs text-slate-300 leading-snug">
              <li>• Smallholder farmers & rural agrarian households (&lt;2 hectares).</li>
              <li>• Target geography: Odisha Vulnerable Agro-Climatic Belt.</li>
              <li>• Free SMS, audio dial-in & lightweight mobile companion web app.</li>
            </ul>
          </div>

          {/* Institutional Clients */}
          <div className="p-3.5 rounded-xl bg-[#061811]/95 border border-cyan-500/35 shadow-md">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold text-cyan-300 uppercase tracking-wide flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-cyan-400" />
                Institutional Clients (Paid Subscribers)
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 font-bold border border-cyan-500/40">
                Payer Segment
              </span>
            </div>
            <ul className="space-y-1 text-xs text-slate-300 leading-snug">
              <li>• Microfinance Institutions (MFIs like Satin Finserv) & SFBs.</li>
              <li>• Climate Impact Funds, Blended Finance Facilities & ESG Investors.</li>
              <li>• Large Agriculture Co-operatives, FPOs & Rural NGO Networks.</li>
            </ul>
          </div>
        </div>

        {/* 3 Proposed Revenue Streams in Dark Boxes */}
        <div>
          <div className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 mb-1.5 font-bold">
            Sustainable Commercial Revenue Streams:
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Stream 1 */}
            <div className="p-3.5 rounded-xl bg-[#061811]/95 border-2 border-emerald-500/35 hover:border-emerald-400 transition-all shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="w-6 h-6 rounded-md bg-emerald-950 text-emerald-300 border border-emerald-500/40 flex items-center justify-center font-bold text-xs font-mono">
                    1
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 font-semibold">
                    Recurring SaaS
                  </span>
                </div>
                <h4 className="text-xs font-bold text-white uppercase leading-snug">
                  Portfolio Dashboards
                </h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  MFIs and SFBs pay an annual subscription for real-time aggregated vulnerability maps across their borrower geography to de-risk loan defaults.
                </p>
              </div>
              <div className="mt-2.5 pt-2 border-t border-emerald-500/20 text-[10px] font-mono text-emerald-400/80">
                Priced per active borrower node
              </div>
            </div>

            {/* Stream 2 */}
            <div className="p-3.5 rounded-xl bg-[#061811]/95 border-2 border-teal-500/35 hover:border-teal-400 transition-all shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="w-6 h-6 rounded-md bg-teal-950 text-teal-300 border border-teal-500/40 flex items-center justify-center font-bold text-xs font-mono">
                    2
                  </span>
                  <span className="text-[10px] font-mono text-teal-400 font-semibold">
                    Impact M&E
                  </span>
                </div>
                <h4 className="text-xs font-bold text-white uppercase leading-snug">
                  Verified Resilience Analytics
                </h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Development finance institutions (DFIs) and CSR funds sponsor monitored resilience programs and purchase certified adoption progress reports.
                </p>
              </div>
              <div className="mt-2.5 pt-2 border-t border-teal-500/20 text-[10px] font-mono text-teal-400/80">
                Program & district level licenses
              </div>
            </div>

            {/* Stream 3 */}
            <div className="p-3.5 rounded-xl bg-[#061811]/95 border-2 border-cyan-500/35 hover:border-cyan-400 transition-all shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="w-6 h-6 rounded-md bg-cyan-950 text-cyan-300 border border-cyan-500/40 flex items-center justify-center font-bold text-xs font-mono">
                    3
                  </span>
                  <span className="text-[10px] font-mono text-cyan-400 font-semibold">
                    Referral Success
                  </span>
                </div>
                <h4 className="text-xs font-bold text-white uppercase leading-snug">
                  Transparent Signposting
                </h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Modest fee-per-qualified-connection when a farmer chooses to tap partner resilience products (shade net subsidies, parametric index micro-insurance).
                </p>
              </div>
              <div className="mt-2.5 pt-2 border-t border-cyan-500/20 text-[10px] font-mono text-cyan-400/80">
                Performance-contingent fee
              </div>
            </div>
          </div>
        </div>

        {/* Ethical Safeguard Banner in Dark Box */}
        <div className="p-3 rounded-xl bg-[#04140e] border border-emerald-500/35 flex items-center justify-between shadow-xs">
          <div className="flex items-center gap-2">
            <HeartHandshake className="w-4 h-4 text-emerald-400 shrink-0" />
            <p className="text-xs text-emerald-100">
              <strong className="text-emerald-300">Non-Negotiable Ethical Policy:</strong> Core climate risk warnings remain 100% free with zero paywalls. Financial referrals are strictly opt-in and explicitly labeled.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-2 border-t border-emerald-500/25 flex items-center justify-between text-xs text-emerald-200/60">
        <span>Satin Finserv Sankalp · Climate Edition 2026</span>
        <span className="font-mono text-emerald-400 font-semibold">Economically Self-Sustaining</span>
      </div>
    </div>
  );
};

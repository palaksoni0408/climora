import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';
import { RiskMeterGauge } from '../animations/IndieLottie';

export const Slide6TechnicalArch: React.FC = () => {
  const [activeGate, setActiveGate] = useState<number>(2);
  const [simulatedScore, setSimulatedScore] = useState<number>(68);

  const randomizeSimulation = () => {
    const scores = [28, 54, 78, 88, 35, 62];
    const next = scores[Math.floor(Math.random() * scores.length)];
    setSimulatedScore(next);
  };

  return (
    <div className="h-full flex flex-col justify-between py-2 px-6 lg:px-12 select-none overflow-y-auto">
      {/* Header Banner */}
      <div className="mb-2">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs uppercase tracking-wider font-mono font-semibold px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
            Technical Architecture & Flow
          </span>
          <span className="text-xs text-emerald-200/60">Slide 06 · Gated Pipeline & Safety Invariants</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-display">
          CLIMORA ENGINE: LIGHTWEIGHT PRE-DEPLOYMENT CLIMATE INTELLIGENCE PIPELINE
        </h2>
        <p className="text-xs sm:text-sm text-emerald-100/70 mt-0.5">
          Four isolated processing gates transforming raw multi-satellite telemetry into validated, localized action packages.
        </p>
      </div>

      {/* Main Grid: Left Gated Flow (8 cols) & Right Technical Specs (4 cols) - All Dark Boxes */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch flex-1 my-auto">
        {/* Left: 4 Processing Gates & Scoring Flow (8 cols) */}
        <div className="lg:col-span-8 flex flex-col justify-between space-y-3">
          {/* Dashed Pipeline Container in Dark Box */}
          <div className="p-4 rounded-2xl bg-[#061811]/95 border-2 border-dashed border-emerald-500/50 relative shadow-md">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 font-bold tracking-wider border border-emerald-500/40">
                Gated Climate Intelligence Engine (Isolated Sandbox)
              </span>
              <button
                onClick={randomizeSimulation}
                className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 hover:text-emerald-300 hover:underline cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Simulate Signal</span>
              </button>
            </div>

            {/* 4 Gated Blocks in Dark Boxes */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
              {/* Gate 1: Data Intake */}
              <div
                onClick={() => setActiveGate(1)}
                className={`p-3 rounded-xl border transition-all cursor-pointer ${
                  activeGate === 1
                    ? 'bg-[#042015] border-emerald-400 shadow-md ring-2 ring-emerald-500/20'
                    : 'bg-[#03130d] border-emerald-500/25 hover:border-emerald-500/50'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="w-6 h-6 rounded-md bg-emerald-500 text-slate-950 font-mono font-bold text-xs flex items-center justify-center">
                    1
                  </span>
                  <span className="text-[9px] font-mono text-emerald-400/70 uppercase">GATE 1</span>
                </div>
                <h4 className="text-xs font-bold text-white uppercase leading-snug">
                  Data Intake
                </h4>
                <p className="text-[10px] text-slate-300 mt-1 leading-snug">
                  Open-Meteo, IMD, Sentinel soil moisture, ERA5 reanalysis.
                </p>
              </div>

              {/* Gate 2: Risk Processing */}
              <div
                onClick={() => setActiveGate(2)}
                className={`p-3 rounded-xl border transition-all cursor-pointer ${
                  activeGate === 2
                    ? 'bg-[#042015] border-teal-400 shadow-md ring-2 ring-teal-500/20'
                    : 'bg-[#03130d] border-emerald-500/25 hover:border-teal-500/50'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="w-6 h-6 rounded-md bg-teal-500 text-slate-950 font-mono font-bold text-xs flex items-center justify-center">
                    2
                  </span>
                  <span className="text-[9px] font-mono text-teal-400/70 uppercase">GATE 2</span>
                </div>
                <h4 className="text-xs font-bold text-white uppercase leading-snug">
                  Risk Engine
                </h4>
                <p className="text-[10px] text-slate-300 mt-1 leading-snug">
                  Spatial overlays, livelihood vulnerability matching score.
                </p>
              </div>

              {/* Gate 3: Action Engine */}
              <div
                onClick={() => setActiveGate(3)}
                className={`p-3 rounded-xl border transition-all cursor-pointer ${
                  activeGate === 3
                    ? 'bg-[#042015] border-cyan-400 shadow-md ring-2 ring-cyan-500/20'
                    : 'bg-[#03130d] border-emerald-500/25 hover:border-cyan-500/50'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="w-6 h-6 rounded-md bg-cyan-500 text-slate-950 font-mono font-bold text-xs flex items-center justify-center">
                    3
                  </span>
                  <span className="text-[9px] font-mono text-cyan-400/70 uppercase">GATE 3</span>
                </div>
                <h4 className="text-xs font-bold text-white uppercase leading-snug">
                  Action Engine
                </h4>
                <p className="text-[10px] text-slate-300 mt-1 leading-snug">
                  Local language NLP (Odia/Hindi), 3-step actionable rulebook.
                </p>
              </div>

              {/* Gate 4: Partner Gate */}
              <div
                onClick={() => setActiveGate(4)}
                className={`p-3 rounded-xl border transition-all cursor-pointer ${
                  activeGate === 4
                    ? 'bg-[#042015] border-blue-400 shadow-md ring-2 ring-blue-500/20'
                    : 'bg-[#03130d] border-emerald-500/25 hover:border-blue-500/50'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="w-6 h-6 rounded-md bg-blue-500 text-slate-950 font-mono font-bold text-xs flex items-center justify-center">
                    4
                  </span>
                  <span className="text-[9px] font-mono text-blue-400/70 uppercase">GATE 4</span>
                </div>
                <h4 className="text-xs font-bold text-white uppercase leading-snug">
                  Partner Gate
                </h4>
                <p className="text-[10px] text-slate-300 mt-1 leading-snug">
                  Institutional MFI dashboard, micro-credit voucher trigger.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Outcome & Risk Routing in Dark Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {/* LOW RISK */}
            <div className={`p-3 rounded-xl border transition-all shadow-sm ${simulatedScore < 40 ? 'bg-[#042417] border-emerald-400 ring-2 ring-emerald-500/20' : 'bg-[#061811]/95 border-emerald-500/30'}`}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-emerald-400 uppercase font-mono">
                  Low Risk (0–39)
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/40">
                  Auto-Advisory
                </span>
              </div>
              <p className="text-[11px] text-slate-300 leading-snug">
                Standard seasonal crop advisory. Routine water management tips.
              </p>
            </div>

            {/* MED RISK */}
            <div className={`p-3 rounded-xl border transition-all shadow-sm ${simulatedScore >= 40 && simulatedScore < 70 ? 'bg-[#1f1a08] border-amber-400 ring-2 ring-amber-500/20' : 'bg-[#061811]/95 border-emerald-500/30'}`}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-amber-400 uppercase font-mono">
                  Med Risk (40–69)
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-amber-950 text-amber-300 border border-amber-500/40">
                  Targeted Plan
                </span>
              </div>
              <p className="text-[11px] text-slate-300 leading-snug">
                Targeted adaptation guidance + voluntary partner resilience credit referral.
              </p>
            </div>

            {/* HIGH RISK */}
            <div className={`p-3 rounded-xl border transition-all shadow-sm ${simulatedScore >= 70 ? 'bg-[#240a0c] border-rose-400 ring-2 ring-rose-500/20' : 'bg-[#061811]/95 border-emerald-500/30'}`}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-rose-400 uppercase font-mono">
                  High Risk (70–100)
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-rose-950 text-rose-300 border border-rose-500/40">
                  Emergency Line
                </span>
              </div>
              <p className="text-[11px] text-slate-300 leading-snug">
                Urgent field resilience checklist + priority partner financial subsidy mobilization.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Technical Specs, Safety Guarantees & Risk Meter (4 cols) - Dark Boxes */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-2.5">
          {/* Risk Gauge Meter in Dark Box */}
          <RiskMeterGauge score={simulatedScore} />

          {/* Detection Surface in Dark Box */}
          <div className="p-3 rounded-xl bg-[#061811]/95 border border-emerald-500/35 shadow-md">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Detection Surface
            </h4>
            <ul className="space-y-1 text-[11px] text-slate-300 leading-snug">
              <li>• <strong className="text-emerald-300">Spatial Overlays:</strong> Open-Meteo, IMD, Sentinel-2 indices.</li>
              <li>• <strong className="text-emerald-300">Vulnerability Heuristics:</strong> Crop-stage thermal thresholds.</li>
              <li>• <strong className="text-emerald-300">Localized NLU:</strong> Dialect text & voice generator (Odia).</li>
            </ul>
          </div>

          {/* Safety Guarantees in Dark Box */}
          <div className="p-3 rounded-xl bg-[#061811]/95 border border-emerald-500/35 shadow-md">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              Safety & Privacy Invariants
            </h4>
            <ul className="space-y-1 text-[11px] text-slate-300 leading-snug">
              <li>• <strong className="text-cyan-300">Consent-First Ingestion:</strong> Zero PII tracking without opt-in.</li>
              <li>• <strong className="text-cyan-300">Source Transparency:</strong> Cites meteorological origin.</li>
              <li>• <strong className="text-cyan-300">Human-in-the-Loop:</strong> Agronomy rules validated by experts.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-2 border-t border-emerald-500/25 flex items-center justify-between text-xs text-emerald-200/60">
        <span>Satin Finserv Sankalp · Climate Edition 2026</span>
        <span className="font-mono text-cyan-400 font-semibold">Lightweight Zero-Footprint Pipeline</span>
      </div>
    </div>
  );
};

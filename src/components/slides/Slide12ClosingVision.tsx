import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Sparkles, ArrowRight, Download, Loader2, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SproutResilienceLottie } from '../animations/IndieLottie';
import { downloadClimoraDeckPptx } from '../../utils/pptxExport';

export const Slide12ClosingVision: React.FC<{ onJumpToSlide?: (slideIndex: number) => void }> = ({ onJumpToSlide }) => {
  const [applauded, setApplauded] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [exportStatus, setExportStatus] = useState<string | null>(null);

  // Editable placeholders
  const [teamEmail] = useState('climora.resilience@sankalp2026.org');
  const [teamLocation] = useState('Bhubaneswar & New Delhi, India');

  const handleApplaud = () => {
    setApplauded(true);
    confetti({
      particleCount: 80,
      spread: 100,
      origin: { y: 0.6 }
    });
    setTimeout(() => setApplauded(false), 3000);
  };

  const handleDownload = async () => {
    if (isExporting) return;
    try {
      setIsExporting(true);
      setExportStatus('Generating...');
      await downloadClimoraDeckPptx((status) => setExportStatus(status));
      setExportStatus('Downloaded!');
      try {
        confetti({ particleCount: 75, spread: 80, origin: { y: 0.5 } });
      } catch (e) {}
      setTimeout(() => setExportStatus(null), 3000);
    } catch (err) {
      console.error(err);
      setExportStatus('Failed');
      setTimeout(() => setExportStatus(null), 3000);
    } finally {
      setIsExporting(false);
    }
  };

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

      {/* Main Grid: Left Closing Manifesto (7 cols) + Right Contact & Action (5 cols) - All Dark Boxes */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center flex-1 my-auto">
        {/* Left: Summary Thesis & Visual Anchor (7 cols) in Dark Box */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-3">
          {/* Core Thesis Dark Box */}
          <div className="p-5 rounded-2xl bg-[#061811]/95 border-2 border-emerald-500/40 shadow-md relative overflow-hidden">
            <div className="flex items-start gap-4">
              <div className="shrink-0 hidden sm:block">
                <SproutResilienceLottie size={90} />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-emerald-400">
                  Summary Thesis
                </span>
                <p className="text-sm sm:text-base font-bold text-white leading-relaxed">
                  Climora bridges the critical gap between raw climate intelligence and real-world rural resilience, empowering smallholders with simple guidance and connecting them to affordable adaptation finance.
                </p>
                <div className="text-xs text-slate-300 font-medium pt-1">
                  TAGLINE: <span className="font-bold text-emerald-400">Smart solutions for a changing climate.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Review Buttons in Dark Boxes */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => onJumpToSlide && onJumpToSlide(1)} // Slide 2 index (0-indexed = 1)
              className="p-3 rounded-xl bg-[#04140e] border border-emerald-500/30 hover:border-rose-400 text-left transition-all cursor-pointer group shadow-sm"
            >
              <span className="text-[10px] font-mono text-emerald-400/60 uppercase block">Jump To</span>
              <span className="text-xs font-bold text-slate-200 group-hover:text-rose-400 flex items-center justify-between">
                <span>The Problem (Slide 2)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>

            <button
              onClick={() => onJumpToSlide && onJumpToSlide(4)} // Slide 5 index (0-indexed = 4)
              className="p-3 rounded-xl bg-[#04140e] border border-emerald-500/30 hover:border-emerald-400 text-left transition-all cursor-pointer group shadow-sm"
            >
              <span className="text-[10px] font-mono text-emerald-400/60 uppercase block">Jump To</span>
              <span className="text-xs font-bold text-slate-200 group-hover:text-emerald-400 flex items-center justify-between">
                <span>The Solution (Slide 5)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>
        </div>

        {/* Right: Team, Contact & Evaluation Submission (5 cols) in Dark Box */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
          <div className="p-5 rounded-2xl bg-[#061811]/95 border-2 border-emerald-500/35 shadow-md space-y-3">
            <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2.5">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400/80 block font-bold">
                  Proposal Submission Lead
                </span>
                <h4 className="text-sm font-bold text-white">
                  Climora Project Team
                </h4>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 font-bold border border-emerald-500/40">
                Phase 1 Active
              </span>
            </div>

            {/* Contact details with copy/edit affordance */}
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-mono truncate">{teamEmail}</span>
              </div>

              <div className="flex items-center gap-2.5 text-slate-300">
                <Linkedin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>linkedin.com/company/climora-resilience</span>
              </div>

              <div className="flex items-center gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                <span>{teamLocation}</span>
              </div>
            </div>

            {/* Interactive Pitch Deck Reaction & Download Buttons */}
            <div className="pt-2 border-t border-emerald-500/20 flex flex-col sm:flex-row items-center gap-2">
              <button
                onClick={handleApplaud}
                className="flex-1 w-full py-2 px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>{applauded ? 'Applause Sent! 🎉' : 'Endorse Submission'}</span>
              </button>

              <button
                onClick={handleDownload}
                disabled={isExporting}
                className="flex-1 w-full py-2 px-3 rounded-xl bg-[#041d13] hover:bg-[#062c1d] border border-emerald-400/50 text-emerald-300 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer disabled:opacity-50"
                title="Download presentation in PPTX format"
              >
                {isExporting ? (
                  <Loader2 className="w-4 h-4 animate-spin text-emerald-400" />
                ) : exportStatus === 'Downloaded!' ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Download className="w-4 h-4 text-emerald-400" />
                )}
                <span>{exportStatus || 'Download PPTX'}</span>
              </button>
            </div>
          </div>
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

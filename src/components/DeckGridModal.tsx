import React, { useState } from 'react';
import { X, Download, Loader2, CheckCircle2, Printer } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SLIDE_METADATA } from '../data/slidesData';
import { downloadClimoraDeckPptx } from '../utils/pptxExport';

interface DeckGridModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentSlideIndex: number;
  onSelectSlide: (index: number) => void;
  onExportPdf?: () => void;
}

export const DeckGridModal: React.FC<DeckGridModalProps> = ({
  isOpen,
  onClose,
  currentSlideIndex,
  onSelectSlide,
  onExportPdf
}) => {
  const [isExporting, setIsExporting] = useState(false);
  const [exportStatus, setExportStatus] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleDownload = async () => {
    if (isExporting) return;
    try {
      setIsExporting(true);
      setExportStatus('Generating...');
      await downloadClimoraDeckPptx((status) => {
        setExportStatus(status);
      });
      setExportStatus('Downloaded!');
      try {
        confetti({ particleCount: 60, spread: 70, origin: { y: 0.3 } });
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
    <div className="fixed inset-0 bg-[#020e09]/85 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6 no-print">
      <div className="bg-[#051a12] border-2 border-emerald-500/40 rounded-3xl w-full max-w-5xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden text-slate-100">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-emerald-500/25 flex items-center justify-between bg-[#04150e]">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-handwriting text-2xl font-bold text-emerald-400">
                #climora
              </span>
              <span className="text-xs font-mono text-emerald-300/60">Deck Overview</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white font-display">
              12 Pitch Deck Slides · Satin Finserv Sankalp 2026
            </h3>
          </div>
          <div className="flex items-center gap-2">
            {onExportPdf && (
              <button
                onClick={() => {
                  onClose();
                  onExportPdf();
                }}
                className="px-3 py-1.5 rounded-xl text-xs font-bold bg-[#03130d] text-emerald-200 hover:bg-[#062419] border border-emerald-500/35 hover:border-emerald-400/60 shadow-sm flex items-center gap-1.5 transition-all cursor-pointer active:scale-95"
                title="Print and export entire pitch deck as PDF"
              >
                <Printer className="w-3.5 h-3.5 text-emerald-400" />
                <span>Export PDF</span>
              </button>
            )}
            <button
              onClick={handleDownload}
              disabled={isExporting}
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white border border-emerald-400/40 shadow-sm flex items-center gap-1.5 transition-all cursor-pointer active:scale-95 disabled:opacity-50"
              title="Download entire presentation as PPTX"
            >
              {isExporting ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : exportStatus === 'Downloaded!' ? (
                <CheckCircle2 className="w-3.5 h-3.5" />
              ) : (
                <Download className="w-3.5 h-3.5" />
              )}
              <span>{exportStatus || 'Download PPTX'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-emerald-400/80 hover:text-white hover:bg-[#03130d] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slides Grid in Dark Boxes */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 bg-[#051a12]">
          {SLIDE_METADATA.map((slide, idx) => {
            const isCurrent = idx === currentSlideIndex;
            return (
              <button
                key={slide.id}
                onClick={() => {
                  onSelectSlide(idx);
                  onClose();
                }}
                className={`p-3.5 rounded-2xl text-left border-2 transition-all flex flex-col justify-between cursor-pointer group shadow-sm ${
                  isCurrent
                    ? 'bg-[#042417] border-emerald-400 shadow-md ring-2 ring-emerald-500/30'
                    : 'bg-[#03140e] border-emerald-500/25 hover:border-emerald-400'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#020e09] text-emerald-300 border border-emerald-500/40">
                      SLIDE {idx + 1}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400/70 group-hover:text-emerald-300 transition-colors">
                      {slide.category}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-white leading-snug line-clamp-2">
                    {slide.title}
                  </h4>
                  {slide.subtitle && (
                    <p className="text-[11px] text-slate-300 mt-1 line-clamp-2 leading-relaxed">
                      {slide.subtitle}
                    </p>
                  )}
                </div>

                <div className="mt-3 pt-2 border-t border-emerald-500/20 flex items-center justify-between text-[10px] font-mono text-emerald-400 font-semibold">
                  <span>{slide.shortName}</span>
                  <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

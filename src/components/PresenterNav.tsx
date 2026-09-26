import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Clock,
  BookOpen,
  LayoutGrid,
  Printer,
  Sparkles,
  Play,
  Pause,
  RotateCcw,
  Download,
  Loader2,
  CheckCircle2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SLIDE_METADATA } from '../data/slidesData';
import { downloadClimoraDeckPptx } from '../utils/pptxExport';

interface PresenterNavProps {
  currentSlideIndex: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  onJumpToSlide: (index: number) => void;
  narrativeMode: 'problem-first' | 'sequential';
  onToggleNarrativeMode: () => void;
  onToggleNotes: () => void;
  isNotesOpen: boolean;
  onOpenGridView: () => void;
  onExportPdf?: () => void;
  isPdfExporting?: boolean;
  pdfExportStatus?: string | null;
}

export const PresenterNav: React.FC<PresenterNavProps> = ({
  currentSlideIndex,
  totalSlides,
  onNext,
  onPrev,
  onJumpToSlide,
  narrativeMode,
  onToggleNarrativeMode,
  onToggleNotes,
  isNotesOpen,
  onOpenGridView,
  onExportPdf,
  isPdfExporting = false,
  pdfExportStatus = null
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [isExporting, setIsExporting] = useState(false);
  const [exportStatus, setExportStatus] = useState<string | null>(null);

  // Timer effect
  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPptx = async () => {
    if (isExporting) return;
    try {
      setIsExporting(true);
      setExportStatus('Preparing slides...');
      await downloadClimoraDeckPptx((status) => {
        setExportStatus(status);
      });
      setExportStatus('Downloaded PPTX!');
      try {
        confetti({
          particleCount: 75,
          spread: 80,
          origin: { y: 0.15 }
        });
      } catch (e) {
        // ignore if canvas unavailable
      }
      setTimeout(() => {
        setExportStatus(null);
      }, 3500);
    } catch (err) {
      console.error('Failed to download PPTX:', err);
      setExportStatus('Export failed');
      setTimeout(() => setExportStatus(null), 3500);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <header className="w-full bg-[#041a11]/95 backdrop-blur-md border-b border-emerald-500/30 px-3 sm:px-6 py-2.5 z-40 sticky top-0 shadow-lg text-emerald-100 no-print">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        {/* Left: Brand Wordmark & Narrative Mode Switch */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="font-handwriting text-2xl font-black text-emerald-400 drop-shadow-[0_2px_8px_rgba(16,185,129,0.3)]">
              Climora
            </span>
            <span className="hidden md:inline-block text-xs font-mono text-emerald-300/60">
              Pitch Deck
            </span>
          </div>

          {/* Narrative Flow Switch */}
          <button
            onClick={onToggleNarrativeMode}
            title="Toggle presentation flow order"
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-[#03130d] text-emerald-300 border border-emerald-500/35 hover:bg-[#062419] transition-colors cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>
              {narrativeMode === 'problem-first' ? 'Flow: Problem & Solution First' : 'Flow: Sequential 01–12'}
            </span>
          </button>
        </div>

        {/* Center: Slide Switcher & Quick Dropdown */}
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            onClick={onPrev}
            disabled={currentSlideIndex === 0}
            className="p-1.5 rounded-lg text-emerald-200 hover:bg-[#062419] disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
            title="Previous Slide (Left Arrow)"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Slide Quick Jump Dropdown */}
          <select
            value={currentSlideIndex}
            onChange={(e) => onJumpToSlide(Number(e.target.value))}
            className="text-xs font-bold font-mono px-2 py-1 rounded-lg bg-[#03130d] text-emerald-200 border border-emerald-500/35 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-400 max-w-[150px] sm:max-w-[220px] truncate"
          >
            {SLIDE_METADATA.map((slide, idx) => (
              <option key={slide.id} value={idx} className="bg-[#03130d] text-emerald-100">
                Slide {idx + 1}: {slide.shortName}
              </option>
            ))}
          </select>

          <button
            onClick={onNext}
            disabled={currentSlideIndex === totalSlides - 1}
            className="p-1.5 rounded-lg text-emerald-200 hover:bg-[#062419] disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
            title="Next Slide (Right Arrow or Space)"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Presentation Timer */}
          <div className="hidden lg:flex items-center gap-1 px-2 py-1 rounded-lg bg-[#03130d] text-xs font-mono text-emerald-300/80 border border-emerald-500/35 ml-1">
            <Clock className="w-3.5 h-3.5 text-emerald-400" />
            <span>{formatTimer(seconds)}</span>
            <button
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              className="ml-1 text-emerald-400 hover:text-emerald-200 cursor-pointer"
              title={isTimerRunning ? 'Pause' : 'Resume'}
            >
              {isTimerRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
            </button>
            <button
              onClick={() => setSeconds(0)}
              className="text-emerald-400 hover:text-emerald-200 cursor-pointer"
              title="Reset Timer"
            >
              <RotateCcw className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Right: Tools & Utilities */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Presenter Notes Button */}
          <button
            onClick={onToggleNotes}
            className={`p-1.5 sm:px-2.5 sm:py-1 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
              isNotesOpen
                ? 'bg-emerald-500 text-slate-950 font-bold shadow-md'
                : 'bg-[#03130d] text-emerald-200 border border-emerald-500/35 hover:bg-[#062419]'
            }`}
            title="Toggle Presenter Talking Points"
          >
            <BookOpen className="w-4 h-4" />
            <span className="hidden md:inline">Notes</span>
          </button>

          {/* Deck Grid View */}
          <button
            onClick={onOpenGridView}
            className="p-1.5 sm:px-2.5 sm:py-1 rounded-lg text-xs font-medium bg-[#03130d] text-emerald-200 border border-emerald-500/35 hover:bg-[#062419] flex items-center gap-1.5 transition-colors cursor-pointer"
            title="View All Slides Grid"
          >
            <LayoutGrid className="w-4 h-4" />
            <span className="hidden md:inline">Deck Grid</span>
          </button>

          {/* Download PPTX Button */}
          <button
            onClick={handleDownloadPptx}
            disabled={isExporting}
            className="p-1.5 sm:px-3 sm:py-1 rounded-lg text-xs font-bold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white border border-emerald-400/40 shadow-sm flex items-center gap-1.5 transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer group"
            title="Download full 12-slide presentation in .pptx format"
          >
            {isExporting ? (
              <Loader2 className="w-4 h-4 animate-spin text-emerald-200" />
            ) : exportStatus === 'Downloaded PPTX!' ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-200" />
            ) : (
              <Download className="w-4 h-4 text-emerald-200 group-hover:translate-y-0.5 transition-transform" />
            )}
            <span className="hidden sm:inline">
              {exportStatus || 'Download PPTX'}
            </span>
            <span className="sm:hidden text-[10px] font-mono">
              PPTX
            </span>
          </button>

          {/* Print / High-Quality PDF Export Button */}
          <button
            onClick={onExportPdf || handlePrint}
            disabled={isPdfExporting}
            className="p-1.5 sm:px-3 sm:py-1 rounded-lg text-xs font-bold bg-[#03130d] text-emerald-200 hover:bg-[#062419] border border-emerald-500/35 hover:border-emerald-400/60 shadow-sm flex items-center gap-1.5 transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer group"
            title="Export high-quality 12-slide pitch deck as PDF (jsPDF + html2canvas)"
          >
            {isPdfExporting ? (
              <Loader2 className="w-4 h-4 animate-spin text-emerald-400" />
            ) : pdfExportStatus === 'Downloaded PDF!' ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-300" />
            ) : (
              <Printer className="w-4 h-4 text-emerald-300 group-hover:scale-105 transition-transform" />
            )}
            <span className="hidden sm:inline">
              {pdfExportStatus || (isPdfExporting ? 'Exporting PDF...' : 'Print / PDF')}
            </span>
            <span className="sm:hidden text-[10px] font-mono">
              PDF
            </span>
          </button>

          {/* Fullscreen Toggle */}
          <button
            onClick={toggleFullscreen}
            className="p-1.5 rounded-lg text-emerald-200 hover:bg-[#062419] border border-emerald-500/35 transition-colors cursor-pointer"
            title="Toggle Fullscreen"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </header>
  );
};

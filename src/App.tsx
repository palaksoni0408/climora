import React, { useState, useEffect, useCallback, useRef } from 'react';
import confetti from 'canvas-confetti';
import { Printer, Loader2 } from 'lucide-react';
import { PresenterNav } from './components/PresenterNav';
import { SlideCanvas } from './components/SlideCanvas';
import { PresenterNotesDrawer } from './components/PresenterNotesDrawer';
import { DeckGridModal } from './components/DeckGridModal';
import { SLIDE_METADATA } from './data/slidesData';
import { createClimoraPdfDocument, captureSlideElement, appendSlideToPdf } from './utils/pdfExport';

// Slides
import { Slide1Overview } from './components/slides/Slide1Overview';
import { Slide2Problem } from './components/slides/Slide2Problem';
import { Slide3NewsSignal } from './components/slides/Slide3NewsSignal';
import { Slide4GapAnalysis } from './components/slides/Slide4GapAnalysis';
import { Slide5Solution } from './components/slides/Slide5Solution';
import { Slide6TechnicalArch } from './components/slides/Slide6TechnicalArch';
import { Slide7Differentiation } from './components/slides/Slide7Differentiation';
import { Slide8BusinessModel } from './components/slides/Slide8BusinessModel';
import { Slide9ImpactMetrics } from './components/slides/Slide9ImpactMetrics';
import { Slide10GoToMarket } from './components/slides/Slide10GoToMarket';
import { Slide11RoadmapSankalp } from './components/slides/Slide11RoadmapSankalp';
import { Slide12ClosingVision } from './components/slides/Slide12ClosingVision';

// Ordered slide components
const ALL_SLIDES = [
  Slide1Overview,       // 0: Overview
  Slide2Problem,        // 1: The Problem
  Slide3NewsSignal,     // 2: Evidence & News Signal
  Slide4GapAnalysis,    // 3: Gap Analysis
  Slide5Solution,       // 4: Our Solution
  Slide6TechnicalArch,  // 5: Tech Architecture
  Slide7Differentiation,// 6: Differentiation
  Slide8BusinessModel,  // 7: Business Model
  Slide9ImpactMetrics,  // 8: Impact Metrics
  Slide10GoToMarket,    // 9: Go-To-Market
  Slide11RoadmapSankalp,// 10: Roadmap & Sankalp
  Slide12ClosingVision  // 11: Closing & Vision
];

// Narrative flow starting with Problem & Solution first, as requested
const PROBLEM_SOLUTION_FIRST_ORDER = [1, 4, 3, 5, 6, 2, 7, 8, 9, 10, 11, 0];
const SEQUENTIAL_ORDER = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

export default function App() {
  const [narrativeMode, setNarrativeMode] = useState<'problem-first' | 'sequential'>('problem-first');
  const [orderIndex, setOrderIndex] = useState(0); // Position in current narrative order
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [isGridOpen, setIsGridOpen] = useState(false);

  const activeOrder = narrativeMode === 'problem-first' ? PROBLEM_SOLUTION_FIRST_ORDER : SEQUENTIAL_ORDER;
  const currentActualSlideIndex = activeOrder[orderIndex];

  // Permanent dark theme class setup
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const handleNext = useCallback(() => {
    setOrderIndex((prev) => Math.min(prev + 1, activeOrder.length - 1));
  }, [activeOrder.length]);

  const handlePrev = useCallback(() => {
    setOrderIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const handleJumpToSlide = useCallback((targetSlideIdx: number) => {
    const foundPos = activeOrder.indexOf(targetSlideIdx);
    if (foundPos !== -1) {
      setOrderIndex(foundPos);
    } else {
      setOrderIndex(targetSlideIdx);
    }
  }, [activeOrder]);

  const handleToggleNarrative = () => {
    if (narrativeMode === 'problem-first') {
      setNarrativeMode('sequential');
      setOrderIndex(currentActualSlideIndex);
    } else {
      setNarrativeMode('problem-first');
      const pos = PROBLEM_SOLUTION_FIRST_ORDER.indexOf(currentActualSlideIndex);
      setOrderIndex(pos !== -1 ? pos : 0);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement).tagName)) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'n' || e.key === 'N') {
        setIsNotesOpen((prev) => !prev);
      } else if (e.key === 'g' || e.key === 'G') {
        setIsGridOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        setIsGridOpen(false);
        setIsNotesOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // Current Slide Component
  const CurrentSlideComponent = ALL_SLIDES[currentActualSlideIndex] || Slide1Overview;

  // High-Quality PDF Export State
  const [pdfExportState, setPdfExportState] = useState<{
    isExporting: boolean;
    currentSlideIdx: number;
    totalSlides: number;
    statusText: string;
  } | null>(null);

  const exportPdfAbortRef = useRef(false);

  const handleExportPdf = async () => {
    if (pdfExportState?.isExporting) return;
    exportPdfAbortRef.current = false;

    try {
      setPdfExportState({
        isExporting: true,
        currentSlideIdx: 0,
        totalSlides: ALL_SLIDES.length,
        statusText: 'Initializing PDF export...'
      });

      const pdf = createClimoraPdfDocument();

      for (let i = 0; i < ALL_SLIDES.length; i++) {
        if (exportPdfAbortRef.current) {
          throw new Error('Export cancelled by user');
        }

        const slideMeta = SLIDE_METADATA[i];
        setPdfExportState({
          isExporting: true,
          currentSlideIdx: i,
          totalSlides: ALL_SLIDES.length,
          statusText: `Rendering Slide ${i + 1} of ${ALL_SLIDES.length}: ${slideMeta?.shortName || ''}`
        });

        // Allow React to mount the target slide in the capture frame and let fonts/Lottie settle
        await new Promise((resolve) => setTimeout(resolve, 220));

        const captureFrame = document.getElementById('pdf-capture-frame');
        if (!captureFrame) {
          throw new Error('Capture frame element not found in DOM');
        }

        const canvas = await captureSlideElement(captureFrame);
        appendSlideToPdf(pdf, canvas, i === 0);
      }

      setPdfExportState((prev) =>
        prev ? { ...prev, statusText: 'Compiling & saving PDF...' } : null
      );

      pdf.save('Climora_Pitch_Deck_Sankalp_2026.pdf');

      try {
        confetti({
          particleCount: 90,
          spread: 90,
          origin: { y: 0.25 }
        });
      } catch (e) {}

      setPdfExportState((prev) =>
        prev ? { ...prev, statusText: 'Downloaded PDF!' } : null
      );
      setTimeout(() => {
        setPdfExportState(null);
      }, 2500);
    } catch (err: any) {
      if (err.message !== 'Export cancelled by user') {
        console.error('PDF export failed:', err);
      }
      setPdfExportState(null);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-[#062c1e] via-[#042016] to-[#02150e] text-slate-100 selection:bg-emerald-500 selection:text-slate-950">
      {/* Top Presenter Nav Bar */}
      <PresenterNav
        currentSlideIndex={currentActualSlideIndex}
        totalSlides={ALL_SLIDES.length}
        onNext={handleNext}
        onPrev={handlePrev}
        onJumpToSlide={handleJumpToSlide}
        narrativeMode={narrativeMode}
        onToggleNarrativeMode={handleToggleNarrative}
        onToggleNotes={() => setIsNotesOpen(!isNotesOpen)}
        isNotesOpen={isNotesOpen}
        onOpenGridView={() => setIsGridOpen(true)}
        onExportPdf={handleExportPdf}
        isPdfExporting={Boolean(pdfExportState?.isExporting)}
        pdfExportStatus={pdfExportState?.statusText === 'Downloaded PDF!' ? 'Downloaded PDF!' : null}
      />

      {/* Main Slide Presentation Viewport */}
      <main className="flex-1 flex items-center justify-center relative overflow-hidden">
        <SlideCanvas
          currentSlideIndex={currentActualSlideIndex}
          totalSlides={ALL_SLIDES.length}
        >
          {currentActualSlideIndex === 11 ? (
            <Slide12ClosingVision onJumpToSlide={handleJumpToSlide} />
          ) : (
            <CurrentSlideComponent />
          )}
        </SlideCanvas>
      </main>

      {/* Presenter Floating Notes Drawer */}
      <PresenterNotesDrawer
        isOpen={isNotesOpen}
        onClose={() => setIsNotesOpen(false)}
        currentSlideIndex={currentActualSlideIndex}
      />

      {/* 12-Slide Overview Grid Modal */}
      <DeckGridModal
        isOpen={isGridOpen}
        onClose={() => setIsGridOpen(false)}
        currentSlideIndex={currentActualSlideIndex}
        onSelectSlide={handleJumpToSlide}
        onExportPdf={handleExportPdf}
      />

      {/* Print-Only Layout Rendering all 12 Slides */}
      <div className="hidden print:block">
        {ALL_SLIDES.map((SlideComp, idx) => (
          <div key={idx} className="print-page w-screen h-screen p-8 bg-[#042017] text-white flex flex-col justify-between">
            <div className="border-b border-emerald-500/40 pb-2 flex justify-between items-center">
              <span className="font-handwriting text-2xl font-bold text-emerald-400">#climora</span>
              <span className="font-mono text-xs text-emerald-300">SATIN FINSERV SANKALP [PHASE 1 IDEA SUBMISSION]</span>
            </div>
            <div className="flex-1 py-4">
              <SlideComp />
            </div>
            <div className="border-t border-emerald-500/40 pt-2 flex justify-between text-xs font-mono text-emerald-300">
              <span>Satin Finserv Sankalp · Climate Edition 2026</span>
              <span>SLIDE {idx + 1} OF 12</span>
            </div>
          </div>
        ))}
      </div>

      {/* High-Resolution Capture Frame & PDF Progress Modal (active during PDF generation) */}
      {pdfExportState?.isExporting && (
        <>
          <div
            id="pdf-capture-frame"
            className="fixed top-0 left-0 w-[1280px] h-[720px] pointer-events-none z-[99990] bg-[#031e13] overflow-hidden"
            style={{ width: '1280px', height: '720px' }}
          >
            <SlideCanvas
              currentSlideIndex={pdfExportState.currentSlideIdx}
              totalSlides={ALL_SLIDES.length}
              isExportMode={true}
            >
              {React.createElement(ALL_SLIDES[pdfExportState.currentSlideIdx], {
                onJumpToSlide: handleJumpToSlide
              })}
            </SlideCanvas>
          </div>

          {/* High-Quality Presentation PDF Export Progress Modal */}
          <div className="fixed inset-0 z-[100000] bg-black/85 backdrop-blur-md flex flex-col items-center justify-center p-6 text-white select-none">
            <div className="max-w-md w-full bg-[#052116] border border-emerald-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-emerald-950/90 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mb-4 shadow-inner">
                <Printer className="w-8 h-8 animate-pulse text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold font-display text-white mb-1">
                Exporting Presentation PDF
              </h3>
              <p className="text-xs text-emerald-200/80 mb-5 font-mono">
                {pdfExportState.statusText}
              </p>

              {/* Progress bar */}
              <div className="w-full h-3 bg-[#03140d] rounded-full overflow-hidden border border-emerald-500/30 mb-2">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 transition-all duration-300 rounded-full"
                  style={{
                    width: `${Math.round(((pdfExportState.currentSlideIdx + 1) / ALL_SLIDES.length) * 100)}%`
                  }}
                />
              </div>

              <div className="flex items-center justify-between w-full text-[11px] font-mono text-emerald-300/70 mb-5">
                <span>16:9 Landscape · 2x Retina DPI</span>
                <span>{Math.round(((pdfExportState.currentSlideIdx + 1) / ALL_SLIDES.length) * 100)}%</span>
              </div>

              <button
                onClick={() => {
                  exportPdfAbortRef.current = true;
                }}
                className="px-4 py-2 text-xs font-semibold text-rose-300 bg-rose-950/60 border border-rose-500/30 rounded-xl hover:bg-rose-900/50 transition-colors cursor-pointer"
              >
                Cancel Export
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

import React, { ReactNode } from 'react';
import { SLIDE_METADATA } from '../data/slidesData';

interface SlideCanvasProps {
  currentSlideIndex: number; // 0 to 11
  totalSlides: number;
  theme?: 'light' | 'dark';
  isExportMode?: boolean;
  children: ReactNode;
}

export const SlideCanvas: React.FC<SlideCanvasProps> = ({
  currentSlideIndex,
  totalSlides,
  isExportMode = false,
  children
}) => {
  const currentSlideMeta = SLIDE_METADATA[currentSlideIndex] || SLIDE_METADATA[0];

  return (
    <div
      className={
        isExportMode
          ? "w-[1280px] h-[720px] p-0 flex items-center justify-center bg-[#031e13]"
          : "w-full flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8"
      }
    >
      {/* 16:9 Presentation Frame - Rich Green Background with Dark Boxes inside */}
      <div
        className={
          isExportMode
            ? "w-[1280px] h-[720px] rounded-none shadow-none flex flex-col justify-between overflow-hidden relative border-0 bg-gradient-to-br from-[#073624] via-[#052b1c] to-[#031e13] text-slate-100"
            : "w-full max-w-6xl aspect-[16/10] sm:aspect-[16/9] min-h-[580px] max-h-[88vh] rounded-2xl md:rounded-3xl shadow-2xl flex flex-col justify-between overflow-hidden relative border-2 border-emerald-500/40 shadow-[0_0_60px_rgba(5,150,105,0.18)] bg-gradient-to-br from-[#073624] via-[#052b1c] to-[#031e13] text-slate-100"
        }
      >
        {/* Glowing Emerald Atmospheric Ambient Lights */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Subtle grid pattern background over green */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[radial-gradient(#34d399_1px,transparent_1px)] [background-size:20px_20px]"
        />

        {/* Top Header Banner matching the PDF template style */}
        <div className="w-full px-6 lg:px-12 pt-3 pb-2 border-b border-emerald-500/25 flex items-center justify-between z-10 shrink-0 bg-[#052116]/80 backdrop-blur-sm">
          {/* Top Left Tag: #climora in distinctive handwritten style */}
          <div className="flex items-center gap-2">
            <span className="font-handwriting text-2xl lg:text-3xl font-extrabold text-emerald-400 tracking-tight drop-shadow-[0_2px_8px_rgba(16,185,129,0.3)]">
              #climora
            </span>
            <span className="hidden sm:inline-block text-[11px] font-mono uppercase tracking-wider text-emerald-300/60">
              · Sankalp Climate 2026
            </span>
          </div>

          {/* Top Right Identifier */}
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest font-semibold px-2.5 sm:px-3 py-1 rounded bg-[#061811] text-emerald-300 border border-emerald-500/30 shadow-xs">
              SATIN FINSERV SANKALP [PHASE 1 IDEA SUBMISSION]
            </span>
          </div>
        </div>

        {/* Dynamic Slide Body */}
        <div className="flex-1 overflow-hidden relative z-10 p-2 sm:p-4">
          {children}
        </div>

        {/* Bottom Banner matching template footer */}
        <div className="w-full px-6 lg:px-12 py-2 border-t border-emerald-500/25 flex items-center justify-between text-[11px] font-mono text-emerald-200/70 z-10 shrink-0 bg-[#041a11]/90">
          <div className="flex items-center gap-2">
            <span className="font-bold text-emerald-300">
              Satin Finserv Sankalp
            </span>
            <span className="hidden sm:inline text-emerald-600">|</span>
            <span className="hidden sm:inline text-emerald-400/80">Turning Climate Signals into Practical Action</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-emerald-300/80 font-medium">
              {currentSlideMeta.shortName}
            </span>
            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40">
              SLIDE {currentSlideIndex + 1} / {totalSlides}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

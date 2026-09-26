import React from 'react';
import { X, Clock, Lightbulb } from 'lucide-react';
import { PRESENTER_NOTES } from '../data/presenterNotes';

interface PresenterNotesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentSlideIndex: number;
}

export const PresenterNotesDrawer: React.FC<PresenterNotesDrawerProps> = ({
  isOpen,
  onClose,
  currentSlideIndex
}) => {
  if (!isOpen) return null;

  const notes = PRESENTER_NOTES[currentSlideIndex] || {
    talkingPoints: ['Highlight key strategic impact.'],
    timeTarget: '0:45 min',
    keyProof: 'Aligned with Sankalp 2026 goals.'
  };

  return (
    <aside className="fixed bottom-0 right-0 sm:right-6 sm:bottom-6 w-full sm:w-96 max-h-[70vh] bg-[#061811]/98 border-2 border-emerald-500/50 rounded-t-2xl sm:rounded-2xl shadow-2xl p-4 z-50 overflow-y-auto no-print text-slate-100">
      <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2 mb-3">
        <div className="flex items-center gap-2">
          <Lightbulb className="w-4 h-4 text-emerald-400" />
          <h3 className="text-xs font-bold uppercase tracking-wider text-white">
            Pitch Notes · Slide {currentSlideIndex + 1}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 font-bold flex items-center gap-1 border border-emerald-500/40">
            <Clock className="w-3 h-3" />
            {notes.timeTarget}
          </span>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-emerald-400/80 hover:text-white hover:bg-[#03130d] cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="space-y-3 text-xs">
        <div>
          <span className="text-[10px] font-mono text-emerald-400/80 uppercase tracking-wider block font-semibold mb-1">
            Core Talking Points:
          </span>
          <ul className="space-y-1.5 text-slate-200">
            {notes.talkingPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span className="leading-snug">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-2.5 rounded-xl bg-[#03140e] border border-emerald-500/35">
          <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold block mb-0.5">
            Key Evidence Anchor:
          </span>
          <p className="text-xs text-slate-300 leading-snug">
            {notes.keyProof}
          </p>
        </div>
      </div>
    </aside>
  );
};

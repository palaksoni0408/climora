import React, { useState } from 'react';
import {
  X,
  FileText,
  Compass,
  Zap,
  ShieldCheck,
  TrendingUp,
  MapPin,
  CheckCircle2,
  Users,
  Building2,
  Copy,
  Check,
  ArrowRight,
  Sparkles,
  PhoneCall,
  Calendar,
  Layers,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ProjectDeepDiveModalProps {
  isOpen: boolean;
  onClose: () => void;
  onJumpToSlide?: (slideIndex: number) => void;
}

type TabType =
  | 'executive'
  | 'problem'
  | 'engine'
  | 'journeys'
  | 'business'
  | 'pilot'
  | 'impact'
  | 'sankalp';

export const ProjectDeepDiveModal: React.FC<ProjectDeepDiveModalProps> = ({
  isOpen,
  onClose,
  onJumpToSlide
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('executive');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopySummary = () => {
    const summaryText = `CLIMORA — PROJECT EXECUTIVE SUMMARY (Satin Finserv Sankalp 2026)
    
Mission: Turning localized climate signals into simple, vernacular chores linked to partner micro-credit for smallholder farmers.

The Problem:
73% of smallholder farmers receive raw weather forecasts, yet fewer than 14% take verifiable adaptation action due to technical jargon, liquidity constraints, and fragmented advisory services.

The Solution:
Climora acts as an intelligent decision companion that converts multi-satellite meteorological data (IMD, ERA5, Sentinel-2) into 3 plain-language vernacular chores delivered via WhatsApp and audio IVR, while connecting farmers directly to pre-approved partner micro-finance (shade nets, drip lines, drought-tolerant seed) with zero credit balance-sheet risk for Climora.

Business Model:
B2B/B2G SaaS and origination fees paid by MFIs and insurers (e.g., Satin Finserv), keeping the service 100% free forever for vulnerable farmers.

Field Pilot:
8-12 week controlled rollout in Balasore and Mayurbhanj, Odisha with 100-200 smallholder farmers.`;

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const tabs: { id: TabType; label: string; icon: any }[] = [
    { id: 'executive', label: 'Executive Summary', icon: Sparkles },
    { id: 'problem', label: 'The Problem & Gap', icon: Compass },
    { id: 'engine', label: '3-Step Tech Engine', icon: Zap },
    { id: 'journeys', label: 'User Journeys', icon: Users },
    { id: 'business', label: 'Business Model', icon: Building2 },
    { id: 'pilot', label: 'Odisha Pilot Plan', icon: MapPin },
    { id: 'impact', label: 'Theory of Change', icon: TrendingUp },
    { id: 'sankalp', label: 'Sankalp Fit & Budget', icon: Award }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-[#020e09]/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 no-print">
      <div className="bg-[#051a12] border-2 border-emerald-500/40 rounded-3xl w-full max-w-6xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden text-slate-100">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-emerald-500/25 flex items-center justify-between bg-[#04150e] shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-handwriting text-2xl font-bold text-emerald-400">
                  #climora
                </span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30">
                  Comprehensive Project Dossier
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white font-display">
                Detailed Pitch Brief · Satin Finserv Sankalp Climate Challenge 2026
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySummary}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-[#03130d] text-emerald-300 border border-emerald-500/35 hover:bg-[#062419] transition-colors cursor-pointer"
              title="Copy executive summary to clipboard"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Brief!' : 'Copy Brief'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-emerald-400/80 hover:text-white hover:bg-[#03130d] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1 overflow-x-auto p-2 border-b border-emerald-500/20 bg-[#03120b] shrink-0 scrollbar-none">
          {tabs.map((t) => {
            const Icon = t.icon;
            const isActive = activeTab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap flex items-center gap-1.5 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-md'
                    : 'text-emerald-300/80 hover:text-emerald-200 hover:bg-[#062419]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{t.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6 text-slate-200">
          {/* TAB 1: EXECUTIVE SUMMARY */}
          {activeTab === 'executive' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="p-5 rounded-2xl bg-[#061e14] border border-emerald-500/35 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold">
                    60-Second Elevator Pitch
                  </span>
                  <h4 className="text-lg font-bold text-white">
                    Climora: Turning Local Weather Signals into Verifiable Rural Climate Action
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
                    While millions of vulnerable smallholders receive raw weather SMS alerts, fewer than 14% take action because alerts lack actionable instructions and farmers lack adaptation liquidity. Climora solves this with an intelligent decision engine that delivers 3 plain-language vernacular chores and connects farmers to partner micro-credit (shade nets, drip irrigation, drought seed) with zero lending balance-sheet risk for Climora.
                  </p>
                </div>
                {onJumpToSlide && (
                  <button
                    onClick={() => {
                      onClose();
                      onJumpToSlide(0);
                    }}
                    className="shrink-0 px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 hover:bg-emerald-400 transition-colors cursor-pointer"
                  >
                    <span>View Slide 1 Overview</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* 3 Core Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-[#04150e] border border-emerald-500/30">
                  <div className="flex items-center gap-2 mb-2 text-emerald-300 font-bold text-sm">
                    <Zap className="w-4 h-4 text-emerald-400" />
                    <span>Plain-Language Chores</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    No millimeter graphs or pressure charts. Farmers receive 3 prioritized, localized tasks (e.g., "Mulch with straw before 10 AM", "Shift watering to post-sunset").
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#04150e] border border-cyan-500/30">
                  <div className="flex items-center gap-2 mb-2 text-cyan-300 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4 text-cyan-400" />
                    <span>Zero Credit Risk for Climora</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Climora acts purely as the intelligence and origination bridge. Loans and credit lines are issued and held entirely on Satin Finserv’s balance sheet.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#04150e] border border-amber-500/30">
                  <div className="flex items-center gap-2 mb-2 text-amber-300 font-bold text-sm">
                    <PhoneCall className="w-4 h-4 text-amber-400" />
                    <span>Zero Hardware Footprint</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Works on basic feature phones via automated Odia/Hindi voice dial-in (IVR) and lightweight WhatsApp companion on low-bandwidth 2G/3G connections.
                  </p>
                </div>
              </div>

              {/* Problem vs Climora Contrast */}
              <div className="p-5 rounded-2xl bg-[#061811] border border-emerald-500/30 space-y-3">
                <h5 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
                  The Fundamental Paradigm Shift
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-500/30 space-y-1">
                    <span className="font-bold text-rose-300 uppercase tracking-wide">
                      Conventional Ag-Tech & Weather SMS:
                    </span>
                    <p className="text-slate-300 leading-snug">
                      Sends passive, disconnected data: "Rainfall expected 35mm. High heat index." The farmer is overwhelmed, receives no financial options, and crop yields collapse.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/40 space-y-1">
                    <span className="font-bold text-emerald-300 uppercase tracking-wide">
                      The Climora Paradigm:
                    </span>
                    <p className="text-slate-300 leading-snug">
                      Translates the signal into immediate vernacular action: "Apply straw mulch today. Tap here to unlock ₹2,500 partner shade-net line." Action verified by loan officer; crop loss minimized.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: THE PROBLEM & GAP */}
          {activeTab === 'problem' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-rose-400 font-bold">
                  Root Cause Analysis
                </span>
                <h4 className="text-lg font-bold text-white">
                  Why 73% of Weather Alerts Result in Zero Verifiable Adaptation
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Based on field observations across the coastal and inland agrarian districts of Odisha (Balasore, Mayurbhanj, Puri), rural climate adaptation failure stems from four deeply interconnected barriers:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#04150e] border border-rose-500/30 space-y-1.5">
                  <span className="text-xs font-bold text-rose-300 font-mono">01. Cognitive Overload & Jargon</span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Alerts use meteorological terms ("soil moisture deficit", "isobar dip") that smallholders cannot translate into operational farm decisions during peak sowing and harvesting windows.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#04150e] border border-amber-500/30 space-y-1.5">
                  <span className="text-xs font-bold text-amber-300 font-mono">02. Acute Adaptation Liquidity Trap</span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Even when farmers understand what needs to be done (e.g., install shade-netting or purchase drought-hardy seed varieties), they lack immediate liquid cash (₹1,500–₹5,000) within the critical 48-hour event window.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#04150e] border border-cyan-500/30 space-y-1.5">
                  <span className="text-xs font-bold text-cyan-300 font-mono">03. Lender Risk Blind Spots</span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Micro-finance lenders (like Satin Finserv) have extensive borrower networks in these geographies, but zero real-time telemetry on whether loan borrowers face impending climate hazards until loan defaults occur.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#04150e] border border-emerald-500/30 space-y-1.5">
                  <span className="text-xs font-bold text-emerald-300 font-mono">04. The Missing Last-Mile Verification</span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Nobody verifies whether a farmer took preventive measures. Without verifiable action logging, climate insurance and relief subsidies cannot be accurately underwritten or disbursed.
                  </p>
                </div>
              </div>

              {onJumpToSlide && (
                <div className="flex justify-end gap-3 pt-2">
                  <button
                    onClick={() => {
                      onClose();
                      onJumpToSlide(1);
                    }}
                    className="px-3.5 py-1.5 rounded-xl bg-[#04160f] border border-emerald-500/30 text-emerald-300 hover:text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Inspect Slide 2 (The Problem)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => {
                      onClose();
                      onJumpToSlide(3);
                    }}
                    className="px-3.5 py-1.5 rounded-xl bg-[#04160f] border border-emerald-500/30 text-emerald-300 hover:text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Inspect Slide 4 (Market Gap)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: 3-STEP TECH ENGINE */}
          {activeTab === 'engine' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold">
                  System Architecture & Pipeline
                </span>
                <h4 className="text-lg font-bold text-white">
                  The Gated Climate Intelligence Engine: From Telemetry to Verified Chores
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Climora runs a 4-tier processing pipeline designed specifically for high accuracy and ultra-low compute overhead:
                </p>
              </div>

              {/* 4 Gates Visualization */}
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-[#04150e] border border-emerald-500/30 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-emerald-950 text-emerald-400 font-mono font-bold flex items-center justify-center shrink-0 border border-emerald-500/40">
                    G1
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-emerald-300">Gate 1: Multi-Source Meteorological Intake</h5>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Ingests gridded weather data from IMD (India Meteorological Department), ECMWF ERA5, and GFS 7-day ensembles at 0.1° resolution. Normalizes precipitation probability, vapor pressure deficit, and extreme heat indices.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#04150e] border border-cyan-500/30 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-cyan-950 text-cyan-400 font-mono font-bold flex items-center justify-center shrink-0 border border-cyan-500/40">
                    G2
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-cyan-300">Gate 2: Agronomic Rules & Vulnerability Translation</h5>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Cross-references raw weather data against crop phenology calendar for Odisha (Paddy, Pulses, Mustard, Vegetables). Evaluates risk thresholds: If heat &gt;38°C during grain filling → trigger heat-stress chore package.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#04150e] border border-amber-500/30 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-amber-950 text-amber-400 font-mono font-bold flex items-center justify-center shrink-0 border border-amber-500/40">
                    G3
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-amber-300">Gate 3: Vernacular Generation & Micro-Credit Pre-Approval</h5>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Packages the advice into strictly 3 prioritized chores formatted in localized Odia, Hindi, and English. Queries partner MFI API (Satin Finserv) to verify borrower standing and inject pre-approved credit vouchers for necessary inputs.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#04150e] border border-teal-500/30 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-teal-950 text-teal-400 font-mono font-bold flex items-center justify-center shrink-0 border border-teal-500/40">
                    G4
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-teal-300">Gate 4: Multi-Channel Dispatch & Telemetry Feedback</h5>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Transmits via WhatsApp audio/text, interactive IVR call for feature phone users, and displays on MFI loan officer mobile dashboard for field verification.
                    </p>
                  </div>
                </div>
              </div>

              {onJumpToSlide && (
                <div className="flex justify-end gap-3 pt-2">
                  <button
                    onClick={() => {
                      onClose();
                      onJumpToSlide(4);
                    }}
                    className="px-3.5 py-1.5 rounded-xl bg-[#04160f] border border-emerald-500/30 text-emerald-300 hover:text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>View Interactive Simulator (Slide 5)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => {
                      onClose();
                      onJumpToSlide(5);
                    }}
                    className="px-3.5 py-1.5 rounded-xl bg-[#04160f] border border-cyan-500/30 text-cyan-300 hover:text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>View Architecture (Slide 6)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* TAB 4: USER JOURNEYS */}
          {activeTab === 'journeys' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold">
                  Real-World Personas & Flows
                </span>
                <h4 className="text-lg font-bold text-white">
                  A Day in the Life: Farmer Ramesh & MFI Loan Officer Priya
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  How Climora seamlessly fits into the daily rhythms of agrarian communities and lending operations:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Farmer Journey */}
                <div className="p-5 rounded-2xl bg-[#04150e] border border-emerald-500/35 space-y-3">
                  <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2">
                    <span className="text-xs font-bold text-emerald-400 uppercase font-mono">
                      Persona 1: Smallholder Farmer
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300">
                      Balasore, Odisha (1.8 Acres)
                    </span>
                  </div>
                  <ul className="space-y-2.5 text-xs text-slate-300 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-emerald-400 shrink-0">06:00 AM:</span>
                      <span>Receives a 30-second automated voice call in Odia warning of a 4-day heat anomaly peaking tomorrow at 41°C.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-emerald-400 shrink-0">06:02 AM:</span>
                      <span>Audio lists 3 clear chores: 1) Spread rice straw mulch; 2) Irrigate early morning; 3) Press 1 to request shade-net loan voucher from Satin Finserv.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-emerald-400 shrink-0">08:30 AM:</span>
                      <span>Ramesh presses 1; instant voucher code sent via SMS for pickup at local authorized agri-input vendor.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-emerald-400 shrink-0">Outcome:</span>
                      <span>Crop survives heat stress; harvest preserved; loan repaid on schedule without distress asset sales.</span>
                    </li>
                  </ul>
                </div>

                {/* MFI Loan Officer Journey */}
                <div className="p-5 rounded-2xl bg-[#04150e] border border-cyan-500/35 space-y-3">
                  <div className="flex items-center justify-between border-b border-cyan-500/20 pb-2">
                    <span className="text-xs font-bold text-cyan-400 uppercase font-mono">
                      Persona 2: MFI Loan Officer
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950 text-cyan-300">
                      Satin Finserv Field Hub
                    </span>
                  </div>
                  <ul className="space-y-2.5 text-xs text-slate-300 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-cyan-400 shrink-0">08:00 AM:</span>
                      <span>Priya opens the Climora Partner Portal on her tablet; sees a cluster heat alert across 140 borrower farms in her jurisdiction.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-cyan-400 shrink-0">09:30 AM:</span>
                      <span>During routine center meeting, Priya references the active Climora chores and assists 18 farmers in redeeming adaptation credit lines.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-cyan-400 shrink-0">04:00 PM:</span>
                      <span>Climora logs 87% chore completion in her center. Her center’s climate risk score drops from Amber to Green.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-cyan-400 shrink-0">Outcome:</span>
                      <span>Satin Finserv experiences zero weather defaults in her branch; loan officer achieves quarterly green lending target.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: BUSINESS MODEL */}
          {activeTab === 'business' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold">
                  B2B/B2G Commercial Engine
                </span>
                <h4 className="text-lg font-bold text-white">
                  High-Margin SaaS & Enablement Fees Keeping Service Free for Farmers
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Climora operates on a partner-pays model where financial institutions fund the intelligence because it preserves their capital and expands their loan book:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-[#04150e] border border-emerald-500/35 space-y-2">
                  <div className="text-xs font-mono uppercase text-emerald-400 font-bold">Stream 1</div>
                  <h5 className="text-sm font-bold text-white">MFI Risk Intelligence SaaS</h5>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Annual license fee paid by micro-finance lenders per borrower portfolio (₹120–₹180 per borrower/year). Provides lenders with live portfolio heat maps, default risk early warnings, and verified resilience indices.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#04150e] border border-cyan-500/35 space-y-2">
                  <div className="text-xs font-mono uppercase text-cyan-400 font-bold">Stream 2</div>
                  <h5 className="text-sm font-bold text-white">Adaptation Credit Facilitation</h5>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    1.2%–1.8% loan facilitation success fee paid by the lending partner when a farmer activates a verified resilience micro-credit line (shade nets, drip lines, solar pumps).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#04150e] border border-amber-500/35 space-y-2">
                  <div className="text-xs font-mono uppercase text-amber-400 font-bold">Stream 3</div>
                  <h5 className="text-sm font-bold text-white">Parametric Insurance Telemetry</h5>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    API data access fees paid by rural crop insurers to verify field-level mitigation efforts for fast-track claim settlement and premium discounts.
                  </p>
                </div>
              </div>

              {/* Zero Balance Sheet Risk Card */}
              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 flex items-center gap-4">
                <ShieldCheck className="w-8 h-8 text-emerald-400 shrink-0" />
                <div className="text-xs text-slate-200">
                  <strong className="text-emerald-300 block mb-0.5">Critical Structural Invariant: Zero Balance-Sheet Risk</strong>
                  Climora never lends its own capital, accepts credit defaults, or underwrites loans directly. All credit underwriting, disbursements, and recovery are managed by licensed financial institutions (e.g., Satin Finserv).
                </div>
              </div>

              {onJumpToSlide && (
                <div className="flex justify-end gap-3 pt-2">
                  <button
                    onClick={() => {
                      onClose();
                      onJumpToSlide(7);
                    }}
                    className="px-3.5 py-1.5 rounded-xl bg-[#04160f] border border-emerald-500/30 text-emerald-300 hover:text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>View Slide 8 (Business Model)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* TAB 6: PILOT PLAN */}
          {activeTab === 'pilot' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold">
                  Field Execution Strategy
                </span>
                <h4 className="text-lg font-bold text-white">
                  Phased 8–12 Week Odisha Pilot Plan (Balasore & Mayurbhanj)
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  A disciplined, highly controlled rollout designed to prove measurable adoption and loss reduction before scaling:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                <div className="p-4 rounded-xl bg-[#04150e] border border-emerald-500/30 space-y-1.5">
                  <div className="flex items-center justify-between text-emerald-400 font-mono font-bold">
                    <span>Phase 1</span>
                    <span className="text-[10px] text-emerald-500/70">Weeks 1-2</span>
                  </div>
                  <h6 className="font-bold text-white">Baseline & Co-Design</h6>
                  <p className="text-slate-300 leading-snug">
                    Ground-truth crop calendars in 3 pilot villages; interview 40 smallholders and local Satin Finserv loan officers; map local input suppliers.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#04150e] border border-cyan-500/30 space-y-1.5">
                  <div className="flex items-center justify-between text-cyan-400 font-mono font-bold">
                    <span>Phase 2</span>
                    <span className="text-[10px] text-cyan-500/70">Weeks 3-4</span>
                  </div>
                  <h6 className="font-bold text-white">Channel Onboarding</h6>
                  <p className="text-slate-300 leading-snug">
                    Onboard 100-200 farmer cohort via Satin Finserv branch center meetings. Configure WhatsApp opt-ins and test automated Odia IVR call voice clarity.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#04150e] border border-amber-500/30 space-y-1.5">
                  <div className="flex items-center justify-between text-amber-400 font-mono font-bold">
                    <span>Phase 3</span>
                    <span className="text-[10px] text-amber-500/70">Weeks 5-8</span>
                  </div>
                  <h6 className="font-bold text-white">Live Event Triggers</h6>
                  <p className="text-slate-300 leading-snug">
                    Deploy real-time weather triggers during active heat/monsoon window. Enable pre-approved partner credit vouchers for mulch, shade net, and irrigation.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#04150e] border border-teal-500/30 space-y-1.5">
                  <div className="flex items-center justify-between text-teal-400 font-mono font-bold">
                    <span>Phase 4</span>
                    <span className="text-[10px] text-teal-500/70">Weeks 9-12</span>
                  </div>
                  <h6 className="font-bold text-white">Evaluation & Handover</h6>
                  <p className="text-slate-300 leading-snug">
                    Run endline survey comparing pilot cohort against control group: Measure open rates, chore adoption rate, crop yield loss avoidance, and loan repayment.
                  </p>
                </div>
              </div>

              {onJumpToSlide && (
                <div className="flex justify-end gap-3 pt-2">
                  <button
                    onClick={() => {
                      onClose();
                      onJumpToSlide(9);
                    }}
                    className="px-3.5 py-1.5 rounded-xl bg-[#04160f] border border-emerald-500/30 text-emerald-300 hover:text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>View Slide 10 (Go-To-Market)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* TAB 7: THEORY OF CHANGE & IMPACT */}
          {activeTab === 'impact' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold">
                  Measurement Framework
                </span>
                <h4 className="text-lg font-bold text-white">
                  Theory of Change: Measuring Resilience Created — Not Just Alerts Sent
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Most climate tech tracks vanity metrics (SMS dispatched). Climora tracks end-to-end operational resilience:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center">
                <div className="p-4 rounded-xl bg-[#04150e] border border-emerald-500/30">
                  <span className="text-2xl font-black text-emerald-400 font-mono block mb-1">&gt;80%</span>
                  <span className="text-xs font-bold text-slate-200 block">Open / Listen Rate</span>
                  <span className="text-[10px] text-emerald-400/70">Target on Odia WhatsApp & IVR</span>
                </div>

                <div className="p-4 rounded-xl bg-[#04150e] border border-cyan-500/30">
                  <span className="text-2xl font-black text-cyan-400 font-mono block mb-1">&gt;40%</span>
                  <span className="text-xs font-bold text-slate-200 block">Verifiable Action Rate</span>
                  <span className="text-[10px] text-cyan-400/70">Farmers executing &gt;1 chore</span>
                </div>

                <div className="p-4 rounded-xl bg-[#04150e] border border-amber-500/30">
                  <span className="text-2xl font-black text-amber-400 font-mono block mb-1">100%</span>
                  <span className="text-xs font-bold text-slate-200 block">PTP Timely Repayment</span>
                  <span className="text-[10px] text-amber-400/70">Zero loan defaults on pilot cohort</span>
                </div>

                <div className="p-4 rounded-xl bg-[#04150e] border border-teal-500/30">
                  <span className="text-2xl font-black text-teal-400 font-mono block mb-1">&gt;25%</span>
                  <span className="text-xs font-bold text-slate-200 block">Loss Avoidance</span>
                  <span className="text-[10px] text-teal-400/70">Measured crop damage reduction</span>
                </div>
              </div>

              {onJumpToSlide && (
                <div className="flex justify-end gap-3 pt-2">
                  <button
                    onClick={() => {
                      onClose();
                      onJumpToSlide(8);
                    }}
                    className="px-3.5 py-1.5 rounded-xl bg-[#04160f] border border-emerald-500/30 text-emerald-300 hover:text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>View Slide 9 (Impact Metrics)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* TAB 8: SANKALP 2026 FIT */}
          {activeTab === 'sankalp' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold">
                  Satin Finserv Sankalp Alignment
                </span>
                <h4 className="text-lg font-bold text-white">
                  Why Satin Finserv Sankalp 2026 is the Ideal Acceleration Partner
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  A perfect strategic synergy between rural credit distribution and climate intelligence:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#04150e] border border-emerald-500/35 space-y-2">
                  <h5 className="text-sm font-bold text-emerald-300">What Satin Finserv Brings:</h5>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    <li>• Dense rural branch & loan officer presence in vulnerable Eastern Indian belts.</li>
                    <li>• Established borrower trust and recurring center meeting discipline.</li>
                    <li>• Financial capital lines ready for structured adaptation loan products.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-[#04150e] border border-cyan-500/35 space-y-2">
                  <h5 className="text-sm font-bold text-cyan-300">What Climora Delivers to Satin:</h5>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    <li>• Direct derisking of agricultural lending portfolios against extreme climate losses.</li>
                    <li>• New, high-repayment green loan originations (shade nets, drip lines).</li>
                    <li>• Quantifiable ESG metrics for regulatory priority sector compliance (PSL).</li>
                  </ul>
                </div>
              </div>

              {/* Budget Allocation Table */}
              <div className="p-4 rounded-xl bg-[#061e14] border border-emerald-500/35 space-y-3">
                <h5 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
                  Proposed ₹15 Lakh Pilot Resource Allocation
                </h5>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-slate-200">
                  <div className="p-2.5 rounded-lg bg-[#04150e] border border-emerald-500/20">
                    <span className="text-emerald-400 font-mono font-bold block">₹4.5L (30%)</span>
                    <span>Agronomic Rules Engine & Local Calibration</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#04150e] border border-emerald-500/20">
                    <span className="text-cyan-400 font-mono font-bold block">₹4.0L (27%)</span>
                    <span>Field Telemetry & Baseline/Endline Evaluation</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#04150e] border border-amber-500/20">
                    <span className="text-amber-400 font-mono font-bold block">₹3.5L (23%)</span>
                    <span>Voice IVR & WhatsApp API Infrastructure</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#04150e] border border-teal-500/20">
                    <span className="text-teal-400 font-mono font-bold block">₹3.0L (20%)</span>
                    <span>Field Officer Training & Village Workshops</span>
                  </div>
                </div>
              </div>

              {onJumpToSlide && (
                <div className="flex justify-end gap-3 pt-2">
                  <button
                    onClick={() => {
                      onClose();
                      onJumpToSlide(10);
                    }}
                    className="px-3.5 py-1.5 rounded-xl bg-[#04160f] border border-emerald-500/30 text-emerald-300 hover:text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>View Slide 11 (Roadmap & Sankalp)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3.5 sm:p-4 border-t border-emerald-500/25 flex items-center justify-between bg-[#04150e] text-xs text-emerald-200/60 shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-mono text-emerald-400 font-semibold">Climora Technical & Commercial Brief</span>
            <span>·</span>
            <span>Satin Finserv Sankalp 2026</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySummary}
              className="text-xs font-semibold text-emerald-300 hover:text-white transition-colors cursor-pointer"
            >
              {copied ? 'Copied to Clipboard' : 'Copy Pitch Summary'}
            </button>
            <span>·</span>
            <button
              onClick={onClose}
              className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
            >
              Close Dossier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

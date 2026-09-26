import React, { useState } from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  ClimateAlertLottieBadge,
  AdaptationFinanceLottieBadge,
  CompanionActionLottieBadge,
  PartnerCreditLinkLottieBadge
} from '../animations/LottiePlayer';

interface Scenario {
  id: string;
  name: string;
  icon: string;
  riskType: string;
  riskSeverity: 'HIGH' | 'MED' | 'LOW';
  region: string;
  headline: string;
  moistureDeficit: string;
  confidence: string;
  translations: {
    en: {
      alert: string;
      steps: string[];
      mfiAction: string;
    };
    or: {
      alert: string;
      steps: string[];
      mfiAction: string;
    };
    hi: {
      alert: string;
      steps: string[];
      mfiAction: string;
    };
  };
}

const SCENARIOS: Scenario[] = [
  {
    id: 'heatwave',
    name: 'Heat Stress Risk',
    icon: '🔥',
    riskType: 'HEAT STRESS RISK (ODISHA BELT)',
    riskSeverity: 'HIGH',
    region: 'Balasore & Mayurbhanj, Odisha',
    headline: 'High heatwave expected in 48 hrs. Soil moisture deficit at 34%.',
    moistureDeficit: '34%',
    confidence: '89% Forecast Confidence',
    translations: {
      en: {
        alert: 'High heatwave expected in 48 hrs. Soil moisture deficit at 34%.',
        steps: [
          'Apply organic straw mulch around standing crops to lock in soil moisture.',
          'Shift irrigation schedule strictly to early morning (05:00-07:00) or post-sunset.',
          'Apply for partner micro-finance line for shade-net subsidy access before temp spikes.'
        ],
        mfiAction: 'Access Partner Shade-Net Micro-Credit (0% Down)'
      },
      or: {
        alert: '୪୮ ଘଣ୍ଟା ମଧ୍ୟରେ ପ୍ରବଳ ଗ୍ରୀଷ୍ମ ପ୍ରବାହ ସମ୍ଭାବନା। ମାଟିର ଆର୍ଦ୍ରତା ୩୪% ହ୍ରାସ।',
        steps: [
          'ଫସଲ ଚାରିପାଖରେ ଶୁଖିଲା ଘାସ ବା ନଡ଼ା ବିଛାଇ ମାଟିର ଆର୍ଦ୍ରତା ରକ୍ଷା କରନ୍ତୁ।',
          'କେବଳ ସକାଳ ୫-୭ଟା କିମ୍ବା ସୂର୍ଯ୍ୟାସ୍ତ ପରେ ଜଳସେଚନ କରନ୍ତୁ।',
          'ଛାଇ ଜାଲି (Shade-Net) ରିହାତି ଋଣ ପାଇଁ ସାଥି ସଂସ୍ଥାରେ ଆବେଦନ କରନ୍ତୁ।'
        ],
        mfiAction: 'ସହଯୋଗୀ ଅଣୁ-ବିତ୍ତ ଛାଇ-ଜାଲି ଋଣ ପାଆନ୍ତୁ'
      },
      hi: {
        alert: 'अगले 48 घंटों में भीषण लू की चेतावनी। मिट्टी में 34% नमी की कमी।',
        steps: [
          'खड़ी फसलों के चारों ओर पुआल या मल्च बिछाकर नमी सुरक्षित रखें।',
          'सिंचाई केवल सुबह 5-7 बजे या सूर्यास्त के बाद ही करें।',
          'शेड-नेट सब्सिडी ऋण के लिए पार्टनर माइक्रो-फाइनेंस से तुरंत जुड़ें।'
        ],
        mfiAction: 'शेड-नेट हेतु पार्टनर माइक्रो-क्रेडिट प्राप्त करें'
      }
    }
  },
  {
    id: 'monsoon_delay',
    name: 'Delayed Monsoon Shift',
    icon: '🌧️',
    riskType: 'MONSOON ONSET LAG (COASTAL ODISHA)',
    riskSeverity: 'MED',
    region: 'Puri & Ganjam Belt',
    headline: 'Monsoon front delayed by 7 days. High surface evapotranspiration.',
    moistureDeficit: '28%',
    confidence: '82% Forecast Confidence',
    translations: {
      en: {
        alert: 'Monsoon front delayed by 7 days. High surface evapotranspiration.',
        steps: [
          'Postpone paddy nursery transplantation until first consistent downpour.',
          'Prepare secondary short-cycle pulse seeds (greengram/blackgram) as hedge.',
          'Unlock emergency working capital line from MFI partner for drought-hardy seeds.'
        ],
        mfiAction: 'Pre-Approved Climate Input Micro-Credit Line'
      },
      or: {
        alert: 'ମୌସୁମୀ ଆଗମନରେ ୭ ଦିନ ବିଳମ୍ବ। ଜମିରୁ ଦ୍ରୁତ ଜଳ ବାଷ୍ପୀଭବନ।',
        steps: [
          'ନିୟମିତ ବର୍ଷା ନହେବା ପର୍ଯ୍ୟନ୍ତ ଧାନ ତଳି ରୋପଣକୁ ସ୍ଥଗିତ ରଖନ୍ତୁ।',
          'ବିକଳ୍ପ କ୍ଷୁଦ୍ର-ଅବଧି ମୁଗ ବା ବିରି ମଞ୍ଜି ପ୍ରସ୍ତୁତ ରଖନ୍ତୁ।',
          'ସହଯୋଗୀ ଅନୁଷ୍ଠାନରୁ ଜରୁରୀକାଳୀନ ମଞ୍ଜି କ୍ରୟ ଋଣ ଲାଇନ ସକ୍ରିୟ କରନ୍ତୁ।'
        ],
        mfiAction: 'ଜରୁରୀକାଳୀନ ବିହନ ଋଣ ସହାୟତା ପାଆନ୍ତୁ'
      },
      hi: {
        alert: 'मानसून में 7 दिन का विलंब। अत्यधिक वाष्पीकरण का जोखिम।',
        steps: [
          'स्थिर वर्षा होने तक धान की रोपाई कुछ दिनों के लिए टालें।',
          'कम अवधि वाली दलहन (मूंग/उड़द) के बीजों की वैकल्पिक व्यवस्था करें।',
          'पार्टनर वित्तीय संस्थान से सूखे से सुरक्षित बीजों हेतु त्वरित क्रेडिट लें।'
        ],
        mfiAction: 'आकस्मिक बीज माइक्रो-क्रेडिट सक्रिय करें'
      }
    }
  }
];

export const Slide5Solution: React.FC = () => {
  const [selectedScenario, setSelectedScenario] = useState<Scenario>(SCENARIOS[0]);
  const [lang, setLang] = useState<'en' | 'or' | 'hi'>('en');
  const [completedSteps, setCompletedSteps] = useState<number[]>([0]);
  const [partnerClaimed, setPartnerClaimed] = useState(false);

  const toggleStep = (index: number) => {
    if (completedSteps.includes(index)) {
      setCompletedSteps(completedSteps.filter((i) => i !== index));
    } else {
      const next = [...completedSteps, index];
      setCompletedSteps(next);
      if (next.length === 3) {
        confetti({ particleCount: 40, spread: 60, origin: { y: 0.6 } });
      }
    }
  };

  const handlePartnerConnect = () => {
    setPartnerClaimed(true);
    confetti({ particleCount: 60, spread: 80, origin: { y: 0.7 } });
    setTimeout(() => setPartnerClaimed(false), 3500);
  };

  const currentTranslation = selectedScenario.translations[lang];

  return (
    <div className="h-full flex flex-col justify-between py-2 px-6 lg:px-12 select-none overflow-y-auto">
      {/* Header Banner */}
      <div className="mb-2">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs uppercase tracking-wider font-mono font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
            Our Unique Solution
          </span>
          <span className="text-xs text-emerald-200/60">Slide 05 · The Climora Companion</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-display">
          OUR SOLUTION: A CLIMATE-TO-ACTION COMPANION FOR UNDERSERVED COMMUNITIES
        </h2>
        <p className="text-xs sm:text-sm text-emerald-100/70 italic mt-0.5 font-medium">
          "Climora translates local climate context into practical, understandable resilience guidance and connects users directly to relevant financial & institutional support."
        </p>
      </div>

      {/* Core Product Experience Flow Banner in Dark Boxes on Green Canvas */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 my-2">
        <div className="p-2.5 rounded-xl bg-[#061811]/95 border border-cyan-500/35 flex items-center gap-2 shadow-xs">
          <span className="w-5 h-5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/40 flex items-center justify-center font-bold text-[10px]">
            1
          </span>
          <div>
            <div className="text-[10px] font-mono uppercase text-cyan-400/80">Climate Signals</div>
            <div className="text-xs font-bold text-slate-100 truncate">Satellite & Open Data</div>
          </div>
        </div>

        <div className="p-2.5 rounded-xl bg-[#061811]/95 border border-emerald-500/35 flex items-center gap-2 shadow-xs">
          <span className="w-5 h-5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/40 flex items-center justify-center font-bold text-[10px]">
            2
          </span>
          <div>
            <div className="text-[10px] font-mono uppercase text-emerald-400/80">Local Context</div>
            <div className="text-xs font-bold text-slate-100 truncate">Land, Crop & Livelihood</div>
          </div>
        </div>

        <div className="p-2.5 rounded-xl bg-[#061811]/95 border border-emerald-500/40 flex items-center gap-2 shadow-xs">
          <span className="w-5 h-5 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-bold text-[10px]">
            3
          </span>
          <div>
            <div className="text-[10px] font-mono uppercase text-emerald-400 font-semibold">Action Plan</div>
            <div className="text-xs font-bold text-emerald-200 truncate">3 Practical Steps</div>
          </div>
        </div>

        <div className="p-2.5 rounded-xl bg-[#061811]/95 border border-amber-500/35 flex items-center gap-2 shadow-xs">
          <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-[10px]">
            4
          </span>
          <div>
            <div className="text-[10px] font-mono uppercase text-amber-400 font-semibold">Relevant Support</div>
            <div className="text-xs font-bold text-amber-200 truncate">Partner Micro-Finance</div>
          </div>
        </div>
      </div>

      {/* Main Grid: Interactive Mobile Mockup (Left 7 cols) & Safeguards/Design Guarantees (Right 5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch flex-1 my-auto">
        {/* Interactive Mobile Companion Mockup (7 cols) - Dark Box Container */}
        <div className="lg:col-span-7 flex flex-col justify-between p-4 rounded-2xl bg-gradient-to-b from-[#051811] via-[#04140e] to-[#020e09] text-white border-2 border-emerald-500/40 shadow-xl relative overflow-hidden">
          {/* Top Controls inside Mockup */}
          <div className="flex items-center justify-between border-b border-emerald-500/25 pb-2 mb-2">
            <div className="flex items-center gap-2">
              <CompanionActionLottieBadge size={28} />
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-xs font-bold tracking-wider text-emerald-400">
                  CLIMORA COMPANION
                </span>
                <span className="text-[10px] font-mono text-emerald-300/50 ml-1">v2026.1</span>
              </div>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center gap-1 bg-[#020c08] rounded-md p-0.5 border border-emerald-500/30">
              <button
                onClick={() => setLang('en')}
                className={`px-2 py-0.5 text-[10px] font-semibold rounded transition-colors ${
                  lang === 'en' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('or')}
                className={`px-2 py-0.5 text-[10px] font-semibold rounded transition-colors ${
                  lang === 'or' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                ଓଡ଼ିଆ
              </button>
              <button
                onClick={() => setLang('hi')}
                className={`px-2 py-0.5 text-[10px] font-semibold rounded transition-colors ${
                  lang === 'hi' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                हिन्दी
              </button>
            </div>
          </div>

          {/* Alert Card inside Mockup */}
          <div className="p-3 rounded-xl bg-rose-950/70 border border-rose-500/40 mb-2.5 shadow-sm flex items-center justify-between gap-3">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-base">{selectedScenario.icon}</span>
                  <span className="font-mono font-bold text-xs text-rose-300 uppercase tracking-wide">
                    {selectedScenario.riskType}
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-950 text-rose-200 border border-rose-500/50 font-semibold">
                  {selectedScenario.confidence}
                </span>
              </div>
              <p className="text-xs text-slate-200 leading-snug">
                {currentTranslation.alert}
              </p>
            </div>
            <div className="shrink-0 bg-[#0c1511] p-1 rounded-lg border border-rose-500/30">
              <ClimateAlertLottieBadge size={44} />
            </div>
          </div>

          {/* 3 Recommended Action Steps (Interactive Checklist) */}
          <div className="space-y-2 mb-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold">
                Recommended Action Steps (Tap to Complete):
              </span>
              <span className="text-[10px] font-mono text-emerald-300/70">
                {completedSteps.length} of 3 Adopted
              </span>
            </div>

            {currentTranslation.steps.map((stepText, idx) => {
              const isChecked = completedSteps.includes(idx);
              return (
                <button
                  key={idx}
                  onClick={() => toggleStep(idx)}
                  className={`w-full text-left p-2.5 rounded-lg border transition-all flex items-start gap-2.5 cursor-pointer ${
                    isChecked
                      ? 'bg-[#031d13] border-emerald-500/60 text-emerald-100 shadow-sm'
                      : 'bg-[#03100a] border-emerald-500/25 text-slate-300 hover:border-emerald-500/50'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded shrink-0 flex items-center justify-center font-bold text-xs mt-0.5 transition-colors ${
                      isChecked ? 'bg-emerald-500 text-slate-950' : 'border border-emerald-600/50 text-transparent'
                    }`}
                  >
                    ✓
                  </div>
                  <div className="flex-1 text-xs leading-snug">
                    <span className="font-bold text-emerald-300 mr-1.5">Step {idx + 1}:</span>
                    {stepText}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Partner Micro-Finance Tap CTA */}
          <div className="pt-2 border-t border-emerald-500/20 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-[11px] text-emerald-300/70">
              <div className="bg-[#03130d] p-0.5 rounded-lg border border-emerald-500/30">
                <PartnerCreditLinkLottieBadge size={28} />
              </div>
              <div className="leading-tight">
                <div className="font-semibold text-emerald-300">Partner Micro-Finance Link</div>
                <div className="text-[10px] text-emerald-400/60">Satin Finserv Sankalp</div>
              </div>
            </div>

            <button
              onClick={handlePartnerConnect}
              className="px-3.5 py-2 rounded-lg bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-bold text-xs transition-all shadow-md active:scale-95 flex items-center gap-1.5 cursor-pointer"
            >
              <span>{currentTranslation.mfiAction}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Success Overlay when partner CTA clicked */}
          <AnimatePresence>
            {partnerClaimed && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="absolute inset-0 bg-[#020e09]/95 flex flex-col items-center justify-center p-6 text-center z-10"
              >
                <div className="mb-2 bg-[#041910] p-2 rounded-2xl border border-emerald-500/40">
                  <PartnerCreditLinkLottieBadge size={64} />
                </div>
                <h4 className="text-base font-bold text-emerald-400">
                  Resilience Micro-Finance Connected!
                </h4>
                <p className="text-xs text-slate-300 mt-1 max-w-sm">
                  Partner MFI field agent dispatched with shade-net subsidy access and verification voucher. Zero credit risk incurred by Climora.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Side: Design Safeguards (Dark Boxes) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
          {/* Safeguard 1: Non-Credit Issuing with Finance Lottie */}
          <div className="p-4 rounded-xl bg-[#061811]/95 border-2 border-emerald-500/35 shadow-md">
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-blue-950 text-blue-300 border border-blue-500/40 flex items-center justify-center font-bold text-xs">
                  🛡
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wide">
                  Design Safeguard: Non-Credit Issuing
                </h4>
              </div>
              <div className="bg-[#03130d] p-0.5 rounded-lg border border-emerald-500/30">
                <AdaptationFinanceLottieBadge size={32} />
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Climora acts as a <strong className="text-emerald-300">neutral climate decision engine</strong> and signposts verified partner financial products (like Satin Finserv lines). We do <strong>not</strong> underwrite loans directly, avoiding regulatory friction and predatory credit hazards.
            </p>
          </div>

          {/* Safeguard 2: Transparent Uncertainty with Climate Lottie */}
          <div className="p-4 rounded-xl bg-[#061811]/95 border-2 border-emerald-500/35 shadow-md">
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-amber-950 text-amber-300 border border-amber-500/40 flex items-center justify-center font-bold text-xs">
                  ⚖
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wide">
                  Design Safeguard: Transparent Uncertainty
                </h4>
              </div>
              <div className="bg-[#03130d] p-0.5 rounded-lg border border-amber-500/30">
                <ClimateAlertLottieBadge size={32} />
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Every climate guidance alert communicates forecast probability and confidence intervals in plain language, ensuring farmers maintain autonomy and trust in weather volatility.
            </p>
          </div>

          {/* Scenario Selector Dark Box */}
          <div className="p-3 rounded-xl bg-[#05160f]/95 border border-emerald-500/35">
            <div className="text-[10px] font-mono uppercase text-emerald-400 mb-1.5 font-bold">
              Test Alert Scenarios:
            </div>
            <div className="flex items-center gap-2">
              {SCENARIOS.map((scen) => (
                <button
                  key={scen.id}
                  onClick={() => {
                    setSelectedScenario(scen);
                    setCompletedSteps([0]);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                    selectedScenario.id === scen.id
                      ? 'bg-emerald-500 text-slate-950 font-bold shadow-xs'
                      : 'bg-[#03130d] text-emerald-200 border border-emerald-500/30 hover:border-emerald-400'
                  }`}
                >
                  <span>{scen.icon}</span>
                  <span>{scen.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-2 border-t border-emerald-500/25 flex items-center justify-between text-xs text-emerald-200/60">
        <span>Satin Finserv Sankalp · Climate Edition 2026</span>
        <span className="font-mono text-emerald-400 font-semibold">Human-Centered Adaptation Tech</span>
      </div>
    </div>
  );
};

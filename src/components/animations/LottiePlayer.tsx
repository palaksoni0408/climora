import React, { Component, ReactNode } from 'react';
import { Lottie } from 'lottie-react';
import {
  climateAlertLottie,
  adaptationFinanceLottie,
  companionActionLottie,
  partnerCreditLinkLottie
} from './lottieData';

interface ErrorBoundaryProps {
  fallback: ReactNode;
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class LottieErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.warn('Lottie render caught error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

interface LottieBoxProps {
  animationData: any;
  size?: number;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
}

export const LottieBox: React.FC<LottieBoxProps> = ({
  animationData,
  size = 70,
  className = '',
  loop = true,
  autoplay = true
}) => {
  const fallback = (
    <div
      style={{ width: size, height: size }}
      className={`relative flex items-center justify-center shrink-0 rounded-lg bg-emerald-950/40 border border-emerald-500/30 ${className}`}
    >
      <span className="animate-pulse text-emerald-400 text-xs">🌱</span>
    </div>
  );

  return (
    <LottieErrorBoundary fallback={fallback}>
      <div
        style={{ width: size, height: size }}
        className={`relative flex items-center justify-center shrink-0 overflow-hidden ${className}`}
      >
        <Lottie
          src={animationData}
          loop={loop}
          autoplay={autoplay}
          style={{ width: size, height: size }}
        />
      </div>
    </LottieErrorBoundary>
  );
};

// Specialized pre-configured Lottie animated badges:
export const ClimateAlertLottieBadge: React.FC<{ size?: number; className?: string }> = ({ size = 64, className = '' }) => (
  <LottieBox animationData={climateAlertLottie} size={size} className={className} />
);

export const AdaptationFinanceLottieBadge: React.FC<{ size?: number; className?: string }> = ({ size = 64, className = '' }) => (
  <LottieBox animationData={adaptationFinanceLottie} size={size} className={className} />
);

export const CompanionActionLottieBadge: React.FC<{ size?: number; className?: string }> = ({ size = 64, className = '' }) => (
  <LottieBox animationData={companionActionLottie} size={size} className={className} />
);

export const PartnerCreditLinkLottieBadge: React.FC<{ size?: number; className?: string }> = ({ size = 64, className = '' }) => (
  <LottieBox animationData={partnerCreditLinkLottie} size={size} className={className} />
);


export interface SlideData {
  id: number;
  slideNumber: number;
  title: string;
  subtitle?: string;
  category: string;
  tagline?: string;
}

export interface MetricCard {
  label: string;
  value: string;
  description: string;
  trend?: string;
  highlight?: boolean;
}

export interface EvidenceCard {
  title: string;
  source: string;
  date: string;
  content: string;
  badge?: string;
}

export interface ComparisonRow {
  dimension: string;
  conventional: string;
  agriAi: string;
  climora: string;
}

export interface CapabilityRow {
  capability: string;
  genericApps: number | boolean;
  creditAnalytics: number | boolean;
  climora: number | boolean;
}

export interface RevenueStream {
  id: string;
  title: string;
  description: string;
  clientType: string;
  iconName: string;
}

// Content type definitions for geographic personalization

export interface HeroContent {
  badge: string;
  description: string;
  trustBadges: string[];
}

export interface FeaturePoints {
  voiceRecording: string[];
  complianceCalendar: string[];
  // Walkthrough and Conference stay the same across frameworks
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ComparisonStep {
  manual: string[];
  automated: string[];
}

export interface HowItWorksStep {
  step: string;
  title: string;
  description: string;
  icon: string;
}

export interface PricingFeatures {
  starter: string[];
  professional: string[];
  enterprise: string[];
}

export interface FrameworkContent {
  id: string;
  name: string;           // "Danielson Framework"
  shortName: string;      // "Danielson"
  region: string;         // "NYC DOE" | "Texas" | "California" | "Florida"
  regionShort: string;    // "NYC" | "TX" | "CA" | "FL"

  hero: HeroContent;
  features: FeaturePoints;
  faqs: FAQ[];
  comparison: ComparisonStep;
  howItWorks: HowItWorksStep[];
  pricing: PricingFeatures;

  // CTA and footer
  cta: {
    audience: string;     // "NYC principals" | "Texas administrators"
  };
  footer: {
    tagline: string;      // "for NYC principals" | "for Texas educators"
  };
}

// Supported framework identifiers
export type FrameworkId = 'danielson' | 'ttess' | 'cstp' | 'marzano' | 'generic';

// US State codes
export type StateCode =
  | 'AL' | 'AK' | 'AZ' | 'AR' | 'CA' | 'CO' | 'CT' | 'DE' | 'FL' | 'GA'
  | 'HI' | 'ID' | 'IL' | 'IN' | 'IA' | 'KS' | 'KY' | 'LA' | 'ME' | 'MD'
  | 'MA' | 'MI' | 'MN' | 'MS' | 'MO' | 'MT' | 'NE' | 'NV' | 'NH' | 'NJ'
  | 'NM' | 'NY' | 'NC' | 'ND' | 'OH' | 'OK' | 'OR' | 'PA' | 'RI' | 'SC'
  | 'SD' | 'TN' | 'TX' | 'UT' | 'VT' | 'VA' | 'WA' | 'WV' | 'WI' | 'WY'
  | 'DC';

// Content type definitions for the landing page.
// Every sentence in a content file must come from observly-gtm/00-foundation/CLAIMS.md (SAY).

export interface Link {
  label: string;
  href: string;
}

// A screenshot slot. `file` is the exact filename Kanat drops into public/screenshots/.
export interface Screenshot {
  file: string;
  label: string;
  device: 'phone' | 'laptop';
}

export interface MetaContent {
  title: string;
  description: string;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  sub: string;
  trustChips: string[];
  screenshots: Screenshot[];
}

// Seasonal strip under the hero. Hidden on and after `hideOn` (YYYY-MM-DD, New York time).
export interface SeasonalStrip {
  line: string;
  button: string;
  hideOn: string;
}

export interface HowItWorksStep {
  title: string;
  body: string;
  screenshot: Screenshot;
}

export interface HowItWorksContent {
  title: string;
  steps: HowItWorksStep[];
  footnote: string;
}

export interface PillarItem {
  title?: string;
  body: string;
}

export interface Pillar {
  id: string;
  title: string;
  items: PillarItem[];
  screenshots: Screenshot[];
}

export interface TrustContent {
  title: string;
  points: string[];
  privacyLink: Link;
}

export interface PricingTier {
  name: string;
  badge?: string;
  monthly: string;
  annual: string;
  seats: string;
  credits: string;
  featured: boolean;
}

export interface PricingContent {
  title: string;
  rowLabels: { monthly: string; annual: string; seats: string; credits: string };
  tiers: PricingTier[];
  note: string;
  trialBox: { title: string; body: string };
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Principle {
  title: string;
  body: string;
}

// "Why we built Observly": origin, founding principles, team onboarding.
export interface FounderNote {
  title: string;
  origin: string;
  principles: Principle[];
  onboarding: string;
}

export interface FooterContent {
  privacy: Link;
  terms: Link;
  phone: Link;
  email: Link;
  appStore: Link;
}

export interface FrameworkContent {
  id: string;
  name: string;           // "Danielson Framework"
  shortName: string;      // "Danielson"
  region: string;         // "NYC DOE"
  regionShort: string;    // "NYC"

  meta: MetaContent;
  hero: HeroContent;
  seasonalStrip?: SeasonalStrip;
  howItWorks: HowItWorksContent;
  pillars: Pillar[];
  trust: TrustContent;
  pricing: PricingContent;
  faqs: FAQ[];
  founder: FounderNote;
  finalCta: { title: string };
}

// Supported framework identifiers
export type FrameworkId = 'danielson' | 'ttess' | 'cstp' | 'generic';

// US State codes
export type StateCode =
  | 'AL' | 'AK' | 'AZ' | 'AR' | 'CA' | 'CO' | 'CT' | 'DE' | 'FL' | 'GA'
  | 'HI' | 'ID' | 'IL' | 'IN' | 'IA' | 'KS' | 'KY' | 'LA' | 'ME' | 'MD'
  | 'MA' | 'MI' | 'MN' | 'MS' | 'MO' | 'MT' | 'NE' | 'NV' | 'NH' | 'NJ'
  | 'NM' | 'NY' | 'NC' | 'ND' | 'OH' | 'OK' | 'OR' | 'PA' | 'RI' | 'SC'
  | 'SD' | 'TN' | 'TX' | 'UT' | 'VT' | 'VA' | 'WA' | 'WV' | 'WI' | 'WY'
  | 'DC';

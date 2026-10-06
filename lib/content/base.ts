// Shared content and tokens that don't change across frameworks.
// Copy source: observly-gtm/02-channels/landing-page/PAGE_SPEC.md; every sentence must be in CLAIMS.md SAY.

import type { FAQ, FooterContent, FounderNote, Link, PricingContent, TrustContent } from './types';

// Product tokens (observly-gtm/01-brand/BRAND_MINI.md §B2). Gold takes dark text only.
export const colors = {
  burgundy: '#6B2D3C',      // primary[700]
  burgundyHover: '#8B4557', // primary[600]
  burgundyDark: '#4A1F2A',  // primary[800]
  burgundyDeep: '#3D1A24',  // primary[900]
  burgundyTint: '#F5E4E8',  // primary[100]
  gold: '#D6B545',          // secondary[700]
  goldDark: '#9A7818',      // secondary[800]
  goldTint: '#F7EEC7',      // secondary[200]
  goldWash: '#FEFCF5',      // secondary[50]
  ivory: '#FAFAF7',
  ivorySecondary: '#F5F4F0',
  ivoryTertiary: '#EDECE6',
  white: '#FFFFFF',
  text: '#1A1A1A',
  textSecondary: '#52525B',
  border: '#E4E4E7',
  borderStrong: '#D4D4D8',
};

export const urls = {
  app: 'https://app.observly.co',
  signup: 'https://app.observly.co/signup',
  privacy: 'https://app.observly.co/privacy',
  terms: 'https://app.observly.co/terms',
  appStore: 'https://apps.apple.com/app/id6758344428',
};

export const contact = {
  phoneDisplay: '+1 646 421 8566',
  phoneHref: 'tel:+16464218566',
  email: 'kanat@observly.co',
};

export const nav: { links: Link[]; signIn: Link } = {
  links: [
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Growth', href: '#growth' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ],
  signIn: { label: 'Sign in', href: urls.app },
};

export const ctas = {
  trial: { label: 'Start free trial', href: urls.signup },
  trialMicrocopy: '14 days · card required, not charged · no approval',
  // Shown when NEXT_PUBLIC_DEMO_VIDEO_URL is set; otherwise the walkthrough booking link is used.
  demo: 'Watch the 90-second demo',
  demoShort: 'Watch the demo',
  book: 'Book a 20-minute walkthrough',
};

export const trust: TrustContent = {
  title: 'Your voice. Your notes. Your call.',
  points: [
    'Your observations are private — not visible to colleagues or Observly staff.',
    'The AI drafts; you confirm. Nothing reaches the teacher until you share it.',
    'Students are not recorded by design: you dictate your own notes.',
    'Audio is transcribed by Deepgram; analysis by OpenAI. Photos are never sent to the AI.',
    'Built to support FERPA compliance and NY Ed Law 2-d. We sign the NY model DPA on request.',
  ],
  privacyLink: { label: 'Privacy policy', href: urls.privacy },
};

// PRODUCT_TRUTH §8: same features on every tier; tiers differ by seats and AI credits.
export const pricing: PricingContent = {
  title: 'Simple pricing. Every feature on every plan.',
  rowLabels: {
    monthly: 'Monthly',
    annual: 'Annual',
    seats: 'Seats',
    credits: 'AI credits / yr',
  },
  tiers: [
    { name: 'Starter', monthly: '$199', annual: '$1,690/yr', seats: '1 principal or AP', credits: '6,000', featured: false },
    { name: 'Plus', badge: 'Most schools', monthly: '$399', annual: '$3,490/yr', seats: '5 — principal + APs', credits: '24,000', featured: true },
    { name: 'Max', monthly: '$599', annual: '$4,990/yr', seats: '10', credits: '50,000', featured: false },
  ],
  note: 'A typical observation uses about 20 credits; a walkthrough 10. Annual plans run on the school year. District pricing on request.',
  trialBox: {
    title: 'Free trial',
    body: '14 days. 2 observations, 3 walkthroughs, 5-minute recordings. Card required, not charged. No approval needed.',
  },
};

// FAQ answers from POSITIONING §7. Questions reworded where the spec's wording hit CLAIMS NEVER SAY.
export const sharedFAQs = {
  students: {
    question: 'Does Observly record my students?',
    answer:
      'Not by design. You dictate your own notes; students are almost never captured. Teacher speech is incidental unless the teacher chooses to wear a mic.',
  },
  aiRating: {
    question: 'Is the AI rating my teachers?',
    answer:
      "No. It drafts evidence and suggests a rating. Nothing reaches the teacher until you share it, and ratings only once you confirm them. Advance Mode won't copy an unconfirmed rating.",
  },
  whoSees: {
    question: 'Who can see my observations?',
    answer: 'Only you. Not your AP, not your principal, not Observly.',
  },
  connection: {
    question: 'Do I need a connection?',
    answer:
      'Walkthroughs work fully offline. Formal and informal observations need a connection to start; everything syncs automatically.',
  },
  devices: {
    question: 'Which devices does it run on?',
    answer: 'iPhone and web (any laptop browser).',
  },
  trial: {
    question: "What's in the free trial?",
    answer: '14 days, 2 observations, 3 walkthroughs. Card required, not charged.',
  },
} satisfies Record<string, FAQ>;

export const founder: FounderNote = {
  sentences: [
    "I'm Kanat. I run after-school programs in NYC public schools, and I built Observly with NYC principals.",
    'I onboard every new school personally.',
  ],
  signature: 'Kanat, founder',
};

export const finalCta = {
  title: 'Every observation becomes a growth conversation.',
};

export const footer: FooterContent = {
  privacy: { label: 'Privacy', href: urls.privacy },
  terms: { label: 'Terms', href: urls.terms },
  phone: { label: contact.phoneDisplay, href: contact.phoneHref },
  email: { label: contact.email, href: `mailto:${contact.email}` },
  appStore: { label: 'Download on the App Store', href: urls.appStore },
};

// NYC DOE / Danielson content variant — the only variant served (middleware pins NY).
// Copy source: observly-gtm/02-channels/landing-page/PAGE_SPEC.md §0–11.

import { FrameworkContent, Screenshot } from '../types';
import { finalCta, founder, pricing, sharedFAQs, trust } from '../base';

// Screenshot slots (PAGE_SPEC "Screenshots needed"). Drop PNGs into public/screenshots/ with these names.
export const screenshots = {
  heroIphoneRecording: { file: 'hero-iphone-recording.png', label: 'Hero — iPhone recording screen', device: 'phone' },
  heroLaptopReview: { file: 'hero-laptop-review.png', label: 'Hero — laptop observation review', device: 'laptop' },
  growthPagePhone: { file: 'growth-page-phone.png', label: 'Growth Page as the teacher sees it (phone)', device: 'phone' },
  conferenceAgendaCards: { file: 'conference-agenda-cards.png', label: 'Conference agenda cards', device: 'phone' },
  goalThreadWeb: { file: 'goal-thread-web.png', label: 'Goal thread (web)', device: 'laptop' },
  complianceTrackerWeb: { file: 'compliance-tracker-web.png', label: 'Compliance tracker (web)', device: 'laptop' },
  advanceModeChecklist: { file: 'advance-mode-checklist.png', label: 'Advance Mode checklist', device: 'laptop' },
} satisfies Record<string, Screenshot>;

export const danielsonContent: FrameworkContent = {
  id: 'danielson',
  name: 'Danielson Framework',
  shortName: 'Danielson',
  region: 'NYC DOE',
  regionShort: 'NYC',

  meta: {
    title: 'Observly — Teacher observations for NYC principals',
    description:
      // Spec text is 194 chars; trimmed to fit its own ≤155 limit.
      "Dictate observation notes on your iPhone. Observly drafts the evidence and tracks every teacher's goals. Built for NYC Advance. 14-day free trial.",
  },

  hero: {
    eyebrow: 'Built for NYC principals on Advance',
    title: 'From classroom visit to teacher conference in one afternoon.',
    sub: "Dictate on your iPhone. Observly drafts the evidence, tracks every teacher's goals, and lets you share the same day.",
    trustChips: ['NYC DOE 8 components', 'Danielson 22', 'Built for Advance', 'Private to you'],
    screenshots: [screenshots.heroIphoneRecording, screenshots.heroLaptopReview],
  },

  seasonalStrip: {
    line: "Running IPCs? Record them in Observly — it drafts the goals and tracks them all year. We'll onboard you personally.",
    button: 'Start free trial',
    hideOn: '2026-11-15',
  },

  howItWorks: {
    title: 'How it works',
    steps: [
      {
        title: 'Dictate.',
        body: 'Tap record and say what you see, like a voicemail to yourself. Bookmark moments, add photos.',
        screenshot: screenshots.heroIphoneRecording,
      },
      {
        title: 'Draft.',
        body: 'Observly drafts evidence and a summary for each NYC DOE component.',
        screenshot: screenshots.heroLaptopReview,
      },
      {
        title: 'Review.',
        body: 'Review on your laptop, edit anything and set every rating yourself.',
        screenshot: screenshots.heroLaptopReview,
      },
      {
        title: 'Share.',
        body: 'Send the teacher their Growth Page link — no account needed. They reflect before you meet.',
        screenshot: screenshots.growthPagePhone,
      },
    ],
    footnote: 'Save up to 2 hours per observation.',
  },

  pillars: [
    {
      id: 'conference',
      title: "Same-day feedback. A conference with the teacher's voice.",
      items: [
        { body: 'Share with the teacher the same day: one link, no account needed.' },
        { body: 'Teachers read the evidence and reflect before the conference.' },
        { body: 'Observly drafts a 30-minute agenda and the calendar invite.' },
      ],
      screenshots: [screenshots.growthPagePhone, screenshots.conferenceAgendaCards],
    },
    {
      id: 'goals',
      title: 'September goals, alive in March.',
      items: [
        { body: "Record the IPC; Observly drafts the teacher's goals for you to confirm." },
        { body: 'Every observation is read against up to five school goals, with "goal moments" to review.' },
        { body: 'Discuss each goal with the teacher on their Growth Page.' },
        { body: "Last year's goals roll forward each new school year." },
      ],
      screenshots: [screenshots.goalThreadWeb],
    },
    {
      id: 'advance',
      title: 'Built for NYC Advance.',
      items: [
        {
          title: 'Compliance tracker.',
          body: 'Every Advance window and the 10-school-day feedback deadline, with green / yellow / red per teacher and reminder emails.',
        },
        { title: 'Advance Mode.', body: 'Copies your confirmed write-up into Advance, field by field.' },
        { title: 'MOTP score', body: 'on every observation.' },
        { title: 'Walkthroughs.', body: '5-minute visits that work fully offline, with glow / grow notes.' },
        { title: 'PDF export.', body: '' },
      ],
      screenshots: [screenshots.complianceTrackerWeb, screenshots.advanceModeChecklist],
    },
  ],

  trust,
  pricing,

  faqs: [
    sharedFAQs.students,
    sharedFAQs.aiRating,
    {
      question: 'Does it push to Advance?',
      answer: "It copies your confirmed write-up into Advance, field by field. There's no direct integration.",
    },
    sharedFAQs.whoSees,
    {
      question: 'Do you sign a DPA?',
      answer: "Yes — the NY model DPA, on request. We're built to support FERPA compliance and NY Ed Law 2-d.",
    },
  ],

  founder,
  finalCta,
};

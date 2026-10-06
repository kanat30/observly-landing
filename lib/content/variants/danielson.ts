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
    sub: "Dictate what you see on your iPhone. Observly drafts the evidence and a suggested rating for each component, tracks every teacher's goals through the year, and lets you share with the teacher the same day.",
    trustChips: ['NYC DOE 8 components', 'Danielson 22', 'Built for Advance', 'Private to you'],
    screenshots: [screenshots.heroIphoneRecording, screenshots.heroLaptopReview],
  },

  seasonalStrip: {
    line: 'Running IPCs this month? Record them in Observly — it drafts the goals and agreements, and every observation this year tracks them.',
    button: 'Start free trial — and Kanat will onboard you personally.',
    hideOn: '2026-11-15',
  },

  howItWorks: {
    title: 'How it works',
    steps: [
      {
        title: 'Dictate.',
        body: 'Open the teacher, tap record, say what you see — like a voicemail to yourself. Bookmark moments, add a photo.',
        screenshot: screenshots.heroIphoneRecording,
      },
      {
        title: 'Draft.',
        body: 'Observly transcribes and drafts evidence, a summary and a suggested rating for each NYC DOE component. Every rating stays a suggestion until you confirm it.',
        screenshot: screenshots.heroLaptopReview,
      },
      {
        title: 'Confirm.',
        body: 'Review on your laptop. Edit anything. Confirm the ratings you agree with — nothing reaches the teacher until you share it, and ratings only once you confirm them.',
        screenshot: screenshots.heroLaptopReview,
      },
      {
        title: 'Share.',
        body: 'Send the teacher their Growth Page link — no account needed. They reflect on the feedback before you meet. Observly drafts the conference agenda and the calendar invite.',
        screenshot: screenshots.growthPagePhone,
      },
    ],
    footnote: 'Save up to 2 hours per observation.',
  },

  pillars: [
    {
      id: 'conference',
      title: "Feedback the same day. A conference with the teacher's voice in it.",
      items: [
        { body: 'Share with the teacher the same day — one link, no account needed.' },
        { body: 'The teacher reads the evidence, acknowledges their goals and leaves reflections before the conference.' },
        { body: 'Observly drafts a 30-minute agenda: reflection questions, strengths, growth areas, action steps — and sends the calendar invite.' },
      ],
      screenshots: [screenshots.growthPagePhone, screenshots.conferenceAgendaCards],
    },
    {
      id: 'goals',
      title: 'September goals, alive in March.',
      items: [
        { body: "Record the IPC; Observly drafts the teacher's goals and your agreements for you to confirm." },
        { body: 'Set up to five school goals. Every observation is read against them; Observly surfaces "goal moments" for you to review.' },
        { body: 'The teacher sees their goals and progress on the same Growth Page as their feedback. Discuss each goal there.' },
        { body: "New school year rolls last year's goals forward for review." },
      ],
      screenshots: [screenshots.goalThreadWeb],
    },
    {
      id: 'advance',
      title: 'Built for NYC Advance.',
      items: [
        {
          title: 'Compliance tracker.',
          body: 'IPC, fall, spring and summative windows; the 10-school-day feedback deadline and the evaluator form deadline; green / yellow / red per teacher; required counts by tenure and rating; reminder emails. It keeps Advance deadlines in view.',
        },
        { title: 'Advance Mode.', body: 'Copies your confirmed write-up into the Advance form, field by field.' },
        { title: 'MOTP score', body: 'on every observation.' },
        { title: 'Walkthroughs.', body: '5-minute visits, fully offline, glow / grow notes and a feedback email.' },
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
      answer: 'It copies your confirmed write-up field by field, in Advance form order. There is no direct integration.',
    },
    sharedFAQs.whoSees,
    {
      question: 'Do you sign a DPA?',
      answer:
        "We're built to support FERPA compliance and NY Ed Law 2-d, and we sign the NY model DPA on request. We don't claim DOE approval.",
    },
    sharedFAQs.connection,
    sharedFAQs.devices,
    sharedFAQs.trial,
    {
      question: 'Which frameworks?',
      answer: 'NYC DOE 8 components (MOTP score included) and Danielson 22.',
    },
  ],

  founder,
  finalCta,
};

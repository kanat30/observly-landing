// T-TESS (Texas Teacher Evaluation and Support System) content variant

import { FrameworkContent } from '../types';
import { sharedFAQs } from '../base';

export const ttessContent: FrameworkContent = {
  id: 'ttess',
  name: 'Texas Teacher Evaluation and Support System',
  shortName: 'T-TESS',
  region: 'Texas',
  regionShort: 'TX',

  hero: {
    badge: 'Built for Texas Administrators',
    description:
      'Voice recording, AI transcription, automatic T-TESS alignment, and compliance tracking — all from your phone. Stop typing. Start leading.',
    trustBadges: ['T-TESS Aligned', 'TXEIS Compatible', 'No Student Data'],
  },

  features: {
    voiceRecording: [
      'Hands-free observation capture',
      'AI-powered transcription',
      'Automatic T-TESS mapping',
      'Works offline in any classroom',
    ],
    complianceCalendar: [
      'Texas evaluation calendar built-in',
      'Teacher status dashboard',
      'Automatic deadline alerts',
      'Feedback timeline reminders',
    ],
  },

  faqs: [
    {
      question: 'Does this work with T-TESS and TXEIS?',
      answer:
        'Yes! Observly is built for Texas administrators. We align evidence to T-TESS dimensions and generate export-ready output compatible with your district reporting system.',
    },
    ...sharedFAQs,
  ],

  comparison: {
    manual: [
      'Handwrite notes during observation',
      'Return to office to type up',
      'Manually match evidence to T-TESS',
      'Format for district system',
      'Track deadlines in spreadsheets',
      'Feedback delivered 1-2 weeks later',
    ],
    automated: [
      'Hit record, observe the lesson',
      'AI transcribes automatically',
      'AI maps to T-TESS dimensions',
      'Export ready for your system',
      'Compliance dashboard shows all deadlines',
      'Feedback delivered same day',
    ],
  },

  howItWorks: [
    {
      step: '1',
      title: 'Record',
      description:
        'Open the app, select the teacher, hit record. Observe the lesson naturally while Observly captures everything.',
      icon: '🎙️',
    },
    {
      step: '2',
      title: 'Review',
      description:
        'AI transcribes your notes and maps evidence to T-TESS dimensions. Edit anything that needs adjustment.',
      icon: '✏️',
    },
    {
      step: '3',
      title: 'Export',
      description:
        'Export-ready for your district system. Teacher gets feedback. You move on with your day.',
      icon: '📤',
    },
  ],

  pricing: {
    starter: [
      'Up to 30 teachers',
      'Unlimited observations',
      'Voice recording & transcription',
      'T-TESS alignment',
      'District export format',
      'Email support',
    ],
    professional: [
      'Up to 60 teachers',
      'Everything in Starter',
      'Compliance calendar',
      'Walkthrough mode',
      'Conference agendas',
      'Priority support',
    ],
    enterprise: [
      'Unlimited teachers',
      'Everything in Professional',
      'Web dashboard',
      'Analytics & reporting',
      'Multiple admin accounts',
      'Dedicated support',
    ],
  },

  cta: {
    audience: 'Texas administrators',
  },

  footer: {
    tagline: 'for Texas educators',
  },
};

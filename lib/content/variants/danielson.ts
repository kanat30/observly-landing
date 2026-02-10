// Danielson Framework content variant (NYC DOE / NY / NJ / CT / PA / IL / DE / AR / NV)

import { FrameworkContent } from '../types';
import { sharedFAQs } from '../base';

export const danielsonContent: FrameworkContent = {
  id: 'danielson',
  name: 'Danielson Framework',
  shortName: 'Danielson',
  region: 'NYC DOE',
  regionShort: 'NYC',

  hero: {
    badge: 'Built for NYC Principals',
    description:
      'Voice recording, AI transcription, automatic Danielson categorization, and compliance tracking — all from your phone. Stop typing. Start leading.',
    trustBadges: ['Danielson 2013', 'Advance Compatible', 'No Student Data'],
  },

  features: {
    voiceRecording: [
      'Hands-free observation capture',
      'AI-powered transcription',
      'Automatic Danielson mapping',
      'Works offline in any classroom',
    ],
    complianceCalendar: [
      'NYC DOE Advance calendar built-in',
      'Teacher status dashboard',
      'Automatic deadline alerts',
      '10-day feedback reminders',
    ],
  },

  faqs: [
    {
      question: 'Does this work with the NYC DOE Advance system?',
      answer:
        'Yes! Observly is built specifically for NYC principals. We use the Danielson 2013 Framework and generate copy-paste ready output formatted for the Advance Web Application.',
    },
    ...sharedFAQs,
  ],

  comparison: {
    manual: [
      'Handwrite notes during observation',
      'Return to office to type up',
      'Manually match evidence to Danielson',
      'Format for Advance system',
      'Track deadlines in spreadsheets',
      'Feedback delivered 1-2 weeks later',
    ],
    automated: [
      'Hit record, observe the lesson',
      'AI transcribes automatically',
      'AI maps to Danielson components',
      'Export ready for Advance',
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
        'AI transcribes your notes and maps evidence to Danielson components. Edit anything that needs adjustment.',
      icon: '✏️',
    },
    {
      step: '3',
      title: 'Export',
      description:
        'Copy-paste ready for Advance. Teacher gets feedback. You move on with your day.',
      icon: '📤',
    },
  ],

  pricing: {
    starter: [
      'Up to 30 teachers',
      'Unlimited observations',
      'Voice recording & transcription',
      'Danielson categorization',
      'Advance export format',
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
    audience: 'NYC principals',
  },

  footer: {
    tagline: 'for NYC principals',
  },
};

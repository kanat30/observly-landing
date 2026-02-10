// Generic content variant for all states without specific framework mapping

import { FrameworkContent } from '../types';
import { sharedFAQs } from '../base';

export const genericContent: FrameworkContent = {
  id: 'generic',
  name: 'Multiple Frameworks',
  shortName: 'Framework',
  region: 'your state',
  regionShort: '',

  hero: {
    badge: 'Built for School Administrators',
    description:
      'Voice recording, AI transcription, automatic framework alignment, and compliance tracking — all from your phone. Stop typing. Start leading.',
    trustBadges: ['Multi-Framework Support', 'District Compatible', 'No Student Data'],
  },

  features: {
    voiceRecording: [
      'Hands-free observation capture',
      'AI-powered transcription',
      'Automatic framework mapping',
      'Works offline in any classroom',
    ],
    complianceCalendar: [
      'Evaluation calendar built-in',
      'Teacher status dashboard',
      'Automatic deadline alerts',
      'Feedback timeline reminders',
    ],
  },

  faqs: [
    {
      question: 'What evaluation frameworks do you support?',
      answer:
        'Observly supports multiple frameworks including Danielson, T-TESS, CSTP, Marzano, and more. We align evidence to your framework and generate export-ready output compatible with your district reporting system.',
    },
    ...sharedFAQs,
  ],

  comparison: {
    manual: [
      'Handwrite notes during observation',
      'Return to office to type up',
      'Manually match evidence to framework',
      'Format for district system',
      'Track deadlines in spreadsheets',
      'Feedback delivered 1-2 weeks later',
    ],
    automated: [
      'Hit record, observe the lesson',
      'AI transcribes automatically',
      'AI maps to your framework',
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
        'AI transcribes your notes and maps evidence to your framework. Edit anything that needs adjustment.',
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
      'Framework alignment',
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
    audience: 'school administrators',
  },

  footer: {
    tagline: 'for school leaders everywhere',
  },
};

// Shared content and styles that don't change across frameworks

// Scholarly Warmth Color Palette (harmonized with app)
export const colors = {
  // Primary - Burgundy (from app)
  burgundy: '#6B2D3C',
  burgundyLight: '#8B4557',
  burgundyDark: '#4A1F2A',
  burgundyDeep: '#2D1219',
  // Accent - Aged Gold (from app)
  gold: '#C9A227',
  goldLight: '#DFC45E',
  goldDark: '#9A7818',
  // Success
  sage: '#22C55E',
  sageLight: '#4ADE80',
  // Backgrounds
  ivory: '#FAFAF7',
  cream: '#F5F4F0',
  warmWhite: '#FFFEFB',
  // Text
  charcoal: '#1A1A1A',
  charcoalLight: '#3D3D3D',
  white: '#FFFFFF',
};

// Feature card colors for visual variety
export const featureColors = {
  voiceRecording: '#F5E8EB',
  compliance: '#FCF7E3',
  walkthrough: '#E8F5E9',
  conference: '#F3E8FF',
};

// Shared statistics that don't vary by framework
export const sharedStats = {
  timeSaved: {
    before: 90,
    after: 15,
    label: 'Minutes saved per observation',
  },
  hoursPerYear: {
    value: '100+',
    label: 'Hours back per year',
  },
  feedbackTurnaround: {
    value: '24hr',
    label: 'Feedback turnaround',
  },
};

// Feature details that stay the same across frameworks
export const sharedFeatures = {
  walkthrough: {
    title: 'Quick Walkthroughs',
    subtitle: 'Daily visits made easy',
    icon: '👁️',
    points: [
      'Glow & Grow templates',
      'Coverage tracking heatmap',
      'Pattern reports across classrooms',
      'Voice memo capture',
    ],
    image: '/images/walkthrough.png',
  },
  conference: {
    title: 'Conference Agendas',
    subtitle: 'AI-prepared talking points',
    icon: '📋',
    points: [
      'Auto-generated from observations',
      'Framework-aligned discussion points',
      'Growth trend visualization',
      'One-click export',
    ],
    image: '/images/conference.png',
  },
};

// "Built by Principals" trust section - universal across all frameworks
export const builtByPrincipals = {
  title: 'Built by Principals, for Principals',
  subtitle: 'Not a faceless company — designed by educators who understand your daily challenges.',
  features: [
    {
      icon: '👤',
      title: 'Founder-Led',
      description: 'Created by a working principal who was frustrated with existing observation tools.',
    },
    {
      icon: '🤝',
      title: 'Principal Advisors',
      description: 'Our founding advisors are active principals providing real feedback and input.',
    },
    {
      icon: '📋',
      title: 'Workflow-First Design',
      description: 'Every feature is built around actual observation workflows — not just a tech demo.',
    },
    {
      icon: '🔄',
      title: 'Continuous Improvement',
      description: 'Regular updates based on direct feedback from principals using the app daily.',
    },
  ],
};

// Shared FAQ questions that are framework-agnostic
export const sharedFAQs = [
  {
    question: 'How is this different from Edthena Observation Copilot?',
    answer: "Edthena requires you to type notes first, then converts them to framework-aligned feedback. Observly records your voice while you observe — no typing required. Plus, we include compliance tracking, walkthrough mode, and conference agenda generation that Edthena doesn't offer.",
  },
  {
    question: 'What data do you collect about students?',
    answer: 'None. We only store teacher names and your observation notes. Audio recordings are transcribed and then deleted. No student data is ever collected or stored.',
  },
  {
    question: 'Does it work without internet in classrooms?',
    answer: "Yes! Observly is offline-first. You can record observations in any classroom, even without WiFi. Data syncs automatically when you're back online.",
  },
  {
    question: 'How long is the free trial?',
    answer: '30 days with full access to all features. No credit card required to start. We want you to experience the time savings before committing.',
  },
  {
    question: 'Can I use this for informal walkthroughs too?',
    answer: 'Absolutely. Our Quick Walkthrough mode is designed for daily classroom visits. Use the Glow & Grow template, track coverage across teachers, and identify patterns schoolwide.',
  },
];

// Pricing tiers (structure stays same, specific features vary by framework)
export const pricingTierBase = {
  starter: {
    name: 'Starter',
    subtitle: 'Small schools',
    price: '$199',
    period: '/month',
    annual: '$1,690/year',
    cta: 'Start Free Trial',
    popular: false,
    baseFeatures: [
      'Up to 30 teachers',
      'Unlimited observations',
      'Voice recording & transcription',
    ],
  },
  professional: {
    name: 'Plus',
    subtitle: 'Most schools',
    price: '$399',
    period: '/month',
    annual: '$3,490/year',
    cta: 'Start Free Trial',
    popular: true,
    baseFeatures: [
      'Up to 60 teachers',
      'Everything in Starter',
      'Compliance calendar',
      'Walkthrough mode',
      'Conference agendas',
      'Priority support',
    ],
  },
  enterprise: {
    name: 'Max',
    subtitle: 'Large schools',
    price: '$599',
    period: '/month',
    annual: '$4,990/year',
    cta: 'Start Free Trial',
    popular: false,
    baseFeatures: [
      'Unlimited teachers',
      'Everything in Plus',
      'Web dashboard',
      'Analytics & reporting',
      'Multiple admin accounts',
      'Dedicated support',
    ],
  },
};

// ROI calculator text
export const roiExample = {
  text: 'A school with 40 teachers doing 80 observations/year saves',
  hoursSaved: '140+ hours annually',
  valueText: "that's over",
  dollarValue: '$10,000',
  suffix: 'in principal time.',
};

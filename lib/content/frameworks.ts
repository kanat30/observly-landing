// State-to-framework mapping for geographic personalization

import { FrameworkId, StateCode } from './types';

// Primary frameworks by state
// States not listed will use 'generic' framework
export const STATE_FRAMEWORK_MAP: Record<StateCode, FrameworkId> = {
  // Danielson Framework states
  NY: 'danielson',
  NJ: 'danielson',
  CT: 'danielson',
  PA: 'danielson',
  IL: 'danielson',
  DE: 'danielson',
  AR: 'danielson',
  NV: 'danielson',

  // T-TESS (Texas)
  TX: 'ttess',

  // CSTP (California)
  CA: 'cstp',

  // Marzano Framework states
  FL: 'marzano',
  OK: 'marzano',
  SC: 'marzano',
  NE: 'marzano',
  ID: 'marzano',

  // 5D+ (Washington, Oregon) - mapped to generic for now
  WA: 'generic',
  OR: 'generic',

  // NIET/TAP (Louisiana, Tennessee, Arizona) - mapped to generic for now
  LA: 'generic',
  TN: 'generic',
  AZ: 'generic',

  // All other states default to generic
  AL: 'generic',
  AK: 'generic',
  CO: 'generic',
  GA: 'generic',
  HI: 'generic',
  IN: 'generic',
  IA: 'generic',
  KS: 'generic',
  KY: 'generic',
  ME: 'generic',
  MD: 'generic',
  MA: 'generic',
  MI: 'generic',
  MN: 'generic',
  MS: 'generic',
  MO: 'generic',
  MT: 'generic',
  NH: 'generic',
  NM: 'generic',
  NC: 'generic',
  ND: 'generic',
  OH: 'generic',
  RI: 'generic',
  SD: 'generic',
  UT: 'generic',
  VT: 'generic',
  VA: 'generic',
  WV: 'generic',
  WI: 'generic',
  WY: 'generic',
  DC: 'generic',
};

// Framework metadata
export interface FrameworkMeta {
  id: FrameworkId;
  name: string;
  shortName: string;
  evaluationSystem: string;
}

export const FRAMEWORK_METADATA: Record<FrameworkId, FrameworkMeta> = {
  danielson: {
    id: 'danielson',
    name: 'Danielson Framework',
    shortName: 'Danielson',
    evaluationSystem: 'Advance',
  },
  ttess: {
    id: 'ttess',
    name: 'Texas Teacher Evaluation and Support System',
    shortName: 'T-TESS',
    evaluationSystem: 'TXEIS',
  },
  cstp: {
    id: 'cstp',
    name: 'California Standards for the Teaching Profession',
    shortName: 'CSTP',
    evaluationSystem: 'CALPADS',
  },
  marzano: {
    id: 'marzano',
    name: 'Marzano Framework',
    shortName: 'Marzano',
    evaluationSystem: 'varies by district',
  },
  generic: {
    id: 'generic',
    name: 'Multiple Frameworks',
    shortName: 'Framework',
    evaluationSystem: 'your evaluation system',
  },
};

// Get framework ID for a given state code
export function getFrameworkForState(stateCode: string): FrameworkId {
  const upperState = stateCode.toUpperCase() as StateCode;
  return STATE_FRAMEWORK_MAP[upperState] || 'generic';
}

// Default state when geo-detection fails
export const DEFAULT_STATE: StateCode = 'NY';
export const DEFAULT_FRAMEWORK: FrameworkId = 'danielson';

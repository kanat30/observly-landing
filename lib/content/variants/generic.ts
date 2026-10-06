// Framework variant — NOT SERVED. middleware.ts pins every visitor to the NYC variant.
// Kept for later. It reuses the NYC copy until CLAIMS.md SAY covers other states;
// don't add state-specific copy here before it's in observly-gtm/00-foundation/CLAIMS.md.

import { FrameworkContent } from '../types';
import { danielsonContent } from './danielson';

export const genericContent: FrameworkContent = {
  ...danielsonContent,
  id: 'generic',
  name: 'Multiple Frameworks',
  shortName: 'Framework',
  region: 'United States',
  regionShort: 'US',
};

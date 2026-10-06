// T-TESS variant — NOT SERVED. middleware.ts pins every visitor to the NYC variant.
// Kept for later. It reuses the NYC copy until CLAIMS.md SAY covers Texas;
// don't add Texas-specific copy here before it's in observly-gtm/00-foundation/CLAIMS.md.

import { FrameworkContent } from '../types';
import { danielsonContent } from './danielson';

export const ttessContent: FrameworkContent = {
  ...danielsonContent,
  id: 'ttess',
  name: 'Texas Teacher Evaluation and Support System',
  shortName: 'T-TESS',
  region: 'Texas',
  regionShort: 'TX',
};

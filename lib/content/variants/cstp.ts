// CSTP variant — NOT SERVED. middleware.ts pins every visitor to the NYC variant.
// Kept for later. It reuses the NYC copy until CLAIMS.md SAY covers California;
// don't add California-specific copy here before it's in observly-gtm/00-foundation/CLAIMS.md.

import { FrameworkContent } from '../types';
import { danielsonContent } from './danielson';

export const cstpContent: FrameworkContent = {
  ...danielsonContent,
  id: 'cstp',
  name: 'California Standards for the Teaching Profession',
  shortName: 'CSTP',
  region: 'California',
  regionShort: 'CA',
};

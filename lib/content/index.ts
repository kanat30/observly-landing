// Content resolver for geographic personalization

import { FrameworkContent, FrameworkId } from './types';
import { getFrameworkForState, DEFAULT_FRAMEWORK } from './frameworks';
import { danielsonContent } from './variants/danielson';
import { ttessContent } from './variants/ttess';
import { cstpContent } from './variants/cstp';
import { marzanoContent } from './variants/marzano';
import { genericContent } from './variants/generic';

// Framework content map
const CONTENT_MAP: Record<FrameworkId, FrameworkContent> = {
  danielson: danielsonContent,
  ttess: ttessContent,
  cstp: cstpContent,
  marzano: marzanoContent,
  generic: genericContent,
};

/**
 * Get content for a given state code
 * @param stateCode - US state code (e.g., 'NY', 'TX', 'CA')
 * @returns Framework-specific content for that state
 */
export function getContentForState(stateCode: string): FrameworkContent {
  const frameworkId = getFrameworkForState(stateCode);
  return CONTENT_MAP[frameworkId] || CONTENT_MAP[DEFAULT_FRAMEWORK];
}

/**
 * Get content for a given framework ID directly
 * @param frameworkId - Framework identifier
 * @returns Framework-specific content
 */
export function getContentForFramework(frameworkId: FrameworkId): FrameworkContent {
  return CONTENT_MAP[frameworkId] || CONTENT_MAP[DEFAULT_FRAMEWORK];
}

/**
 * Get content based on region header value (set by middleware)
 * Region can be a state code (NY, TX) or framework ID (danielson, ttess)
 * @param region - Region value from x-observly-region header
 * @returns Framework-specific content
 */
export function getContentForRegion(region: string): FrameworkContent {
  // Check if it's a framework ID first
  const lowerRegion = region.toLowerCase() as FrameworkId;
  if (lowerRegion in CONTENT_MAP) {
    return CONTENT_MAP[lowerRegion];
  }

  // Otherwise treat as state code
  return getContentForState(region);
}

// Re-export types and utilities
export * from './types';
export * from './frameworks';
export * from './base';

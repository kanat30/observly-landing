// Content resolver for geographic personalization

import { FrameworkContent, FrameworkId } from './types';
import { getFrameworkForState, DEFAULT_FRAMEWORK } from './frameworks';
import { danielsonContent } from './variants/danielson';
import { ttessContent } from './variants/ttess';
import { cstpContent } from './variants/cstp';
import { genericContent } from './variants/generic';

// Framework content map
const CONTENT_MAP: Record<FrameworkId, FrameworkContent> = {
  danielson: danielsonContent,
  ttess: ttessContent,
  cstp: cstpContent,
  generic: genericContent,
};

// Only these variants may be served. NYC first (DECISIONS); the rest are kept, not served.
const SERVED_FRAMEWORKS: FrameworkId[] = ['danielson'];

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
 * Get content based on region header value (set by middleware).
 * Falls back to the default framework for anything that isn't served.
 * @param region - Region value from x-observly-region header
 * @returns Framework-specific content
 */
export function getContentForRegion(region: string): FrameworkContent {
  const lowerRegion = region.toLowerCase() as FrameworkId;
  const frameworkId = lowerRegion in CONTENT_MAP ? lowerRegion : getFrameworkForState(region);
  return SERVED_FRAMEWORKS.includes(frameworkId)
    ? CONTENT_MAP[frameworkId]
    : CONTENT_MAP[DEFAULT_FRAMEWORK];
}

// Re-export types and utilities
export * from './types';
export * from './frameworks';
export * from './base';

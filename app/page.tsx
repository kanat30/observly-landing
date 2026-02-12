import { headers } from 'next/headers';
import { getContentForRegion } from '@/lib/content';
import { LandingContent } from '@/components/landing/LandingContent';

export default async function ObservlyLanding() {
  // Get region from middleware header
  const headersList = await headers();
  const region = headersList.get('x-observly-region') || 'NY';
  const content = getContentForRegion(region);

  return <LandingContent region={region} content={content} />;
}

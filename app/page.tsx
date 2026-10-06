import { headers } from 'next/headers';
import { getContentForRegion, contact } from '@/lib/content';
import { LandingContent } from '@/components/landing/LandingContent';

// Today's date in New York as YYYY-MM-DD, for the seasonal strip cutoff.
function todayInNewYork() {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'America/New_York' }).format(new Date());
}

export default async function ObservlyLanding() {
  // Region comes from middleware (pinned to NY)
  const headersList = await headers();
  const region = headersList.get('x-observly-region') || 'NY';
  const content = getContentForRegion(region);

  const demoVideoUrl = process.env.NEXT_PUBLIC_DEMO_VIDEO_URL || undefined;
  const bookingUrl =
    process.env.NEXT_PUBLIC_BOOKING_URL || `mailto:${contact.email}?subject=Observly%20walkthrough`;
  const showSeasonalStrip = !!content.seasonalStrip && todayInNewYork() < content.seasonalStrip.hideOn;

  return (
    <LandingContent
      content={content}
      demoVideoUrl={demoVideoUrl}
      bookingUrl={bookingUrl}
      showSeasonalStrip={showSeasonalStrip}
    />
  );
}

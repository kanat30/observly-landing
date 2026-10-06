// GA4 events (PAGE_SPEC §0). gtag is loaded by components/Analytics.tsx when NEXT_PUBLIC_GA_ID is set.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export type AnalyticsEvent =
  | { name: 'cta_trial_click'; params: { location: string } }
  | { name: 'demo_play'; params?: undefined }
  | { name: 'pricing_view'; params?: undefined }
  | { name: 'faq_open'; params: { question: string } };

export function track(event: AnalyticsEvent) {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', event.name, event.params ?? {});
}

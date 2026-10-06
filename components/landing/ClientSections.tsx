'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import { ctas } from '@/lib/content/base';
import type { FAQ, Screenshot } from '@/lib/content/types';
import { track } from '@/lib/analytics';

// "Start free trial" link. `location` is the GA4 cta_trial_click parameter.
export function TrialLink({
  location,
  className = 'btn btn-primary',
  children = ctas.trial.label,
}: {
  location: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <a
      href={ctas.trial.href}
      className={className}
      onClick={() => track({ name: 'cta_trial_click', params: { location } })}
    >
      {children}
    </a>
  );
}

export function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  return (
    <div className="faq-list">
      {faqs.map((faq) => (
        <details
          key={faq.question}
          className="faq-item"
          onToggle={(e) => {
            if (e.currentTarget.open) track({ name: 'faq_open', params: { question: faq.question } });
          }}
        >
          <summary>{faq.question}</summary>
          <p>{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}

// Fires pricing_view once, when the pricing section is first scrolled into view.
export function PricingViewTracker({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          track({ name: 'pricing_view' });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{children}</div>;
}

export function DemoVideo({ src }: { src: string }) {
  const played = useRef(false);

  return (
    <video
      className="demo-video"
      src={src}
      controls
      playsInline
      preload="metadata"
      onPlay={() => {
        if (played.current) return;
        played.current = true;
        track({ name: 'demo_play' });
      }}
    />
  );
}

// Shows public/screenshots/<file> when it exists; otherwise a labelled placeholder with the filename to drop in.
export function ScreenshotSlot({ shot }: { shot: Screenshot }) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [missing, setMissing] = useState(false);

  // The image can fail before hydration attaches onError; check once mounted.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setMissing(true);
  }, []);

  return (
    <figure className={`shot shot-${shot.device}`}>
      {missing ? (
        <div className="shot-placeholder" role="img" aria-label={`Screenshot placeholder: ${shot.label}`}>
          <span className="shot-label">{shot.label}</span>
          <code className="shot-file">{shot.file}</code>
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={imgRef}
          src={`/screenshots/${shot.file}`}
          alt={shot.label}
          loading="lazy"
          onError={() => setMissing(true)}
        />
      )}
    </figure>
  );
}

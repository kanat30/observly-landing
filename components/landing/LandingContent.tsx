import type { FrameworkContent, Link } from '@/lib/content';
import { contact, ctas, footer, nav } from '@/lib/content';
import { DemoVideo, FAQAccordion, PricingViewTracker, ScreenshotSlot, TrialLink } from '@/components/landing/ClientSections';

interface LandingContentProps {
  content: FrameworkContent;
  // Secondary CTA: the demo video when it exists, otherwise the walkthrough booking link.
  demoVideoUrl?: string;
  bookingUrl: string;
  showSeasonalStrip: boolean;
}

function TrialCta({ location, microcopy = true }: { location: string; microcopy?: boolean }) {
  return (
    <div className="trial-cta">
      <TrialLink location={location} />
      {microcopy && <p className="microcopy">{ctas.trialMicrocopy}</p>}
    </div>
  );
}

function SecondaryCta({ link, className = 'btn btn-secondary' }: { link: Link; className?: string }) {
  const external = link.href.startsWith('http');
  return (
    <a href={link.href} className={className} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
      {link.label}
    </a>
  );
}

export function LandingContent({ content, demoVideoUrl, bookingUrl, showSeasonalStrip }: LandingContentProps) {
  const { hero, seasonalStrip, howItWorks, pillars, trust, pricing, faqs, founder, finalCta } = content;
  const secondary: Link = demoVideoUrl ? { label: ctas.demo, href: '#demo' } : { label: ctas.book, href: bookingUrl };
  const secondaryShort: Link = demoVideoUrl ? { label: ctas.demoShort, href: '#demo' } : secondary;

  return (
    <>
      {/* Nav */}
      <header className="site-header">
        <div className="container header-inner">
          <a href="#top" className="logo-link" aria-label="Observly home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo/observly-logo-trim.png" alt="Observly" width={320} height={140} className="logo" />
          </a>
          <nav className="nav-links" aria-label="Main">
            {nav.links.map((link) => (
              <a key={link.href} href={link.href}>{link.label}</a>
            ))}
          </nav>
          <div className="header-actions">
            <a href={nav.signIn.href} className="sign-in">{nav.signIn.label}</a>
            <TrialLink location="nav" className="btn btn-primary btn-small" />
          </div>
        </div>
      </header>

      <main id="top">
        {/* 1. Hero */}
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">{hero.eyebrow}</p>
              <h1>{hero.title}</h1>
              <p className="lead">{hero.sub}</p>
              <div className="cta-row">
                <TrialCta location="hero" />
                <SecondaryCta link={secondary} />
              </div>
              <ul className="chips" aria-label="At a glance">
                {hero.trustChips.map((chip) => (
                  <li key={chip}>{chip}</li>
                ))}
              </ul>
            </div>
            <div className="hero-visual">
              {hero.screenshots.map((shot) => (
                <ScreenshotSlot key={shot.file} shot={shot} />
              ))}
            </div>
          </div>
        </section>

        {/* 2. Seasonal strip */}
        {seasonalStrip && showSeasonalStrip && (
          <section className="strip" aria-label="This month">
            <div className="container strip-inner">
              <p>{seasonalStrip.line}</p>
              <TrialLink location="seasonal_strip" className="btn btn-dark">
                {seasonalStrip.button}
              </TrialLink>
            </div>
          </section>
        )}

        {/* Demo video (only once it exists) */}
        {demoVideoUrl && (
          <section id="demo" className="section section-alt">
            <div className="container narrow">
              <DemoVideo src={demoVideoUrl} />
            </div>
          </section>
        )}

        {/* 3. How it works */}
        <section id="how-it-works" className="section">
          <div className="container">
            <h2>{howItWorks.title}</h2>
            <ol className="steps">
              {howItWorks.steps.map((step, i) => (
                <li key={step.title} className="step">
                  <ScreenshotSlot shot={step.screenshot} />
                  <h3><span className="step-number">{i + 1}</span>{step.title}</h3>
                  <p>{step.body}</p>
                </li>
              ))}
            </ol>
            <p className="footnote">{howItWorks.footnote}</p>
          </div>
        </section>

        {/* 4–6. Pillars */}
        <div id="growth">
          {pillars.map((pillar, i) => (
            <section key={pillar.id} id={pillar.id} className={`section pillar ${i % 2 === 0 ? 'section-alt' : ''}`}>
              <div className={`container pillar-grid ${i % 2 === 1 ? 'pillar-reverse' : ''}`}>
                <div>
                  <h2>{pillar.title}</h2>
                  <ul className="points">
                    {pillar.items.map((item) => (
                      <li key={item.title ?? item.body}>
                        {item.title && <strong>{item.title}</strong>}
                        {item.title && item.body && ' '}
                        {item.body}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pillar-visual">
                  {pillar.screenshots.map((shot) => (
                    <ScreenshotSlot key={shot.file} shot={shot} />
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* 7. Trust */}
        <section id="trust" className="section section-dark">
          <div className="container narrow">
            <h2>{trust.title}</h2>
            <ul className="points points-light">
              {trust.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <a href={trust.privacyLink.href} className="text-link-light">{trust.privacyLink.label}</a>
          </div>
        </section>

        {/* 8. Pricing */}
        <section id="pricing" className="section">
          <PricingViewTracker>
            <div className="container">
              <h2>{pricing.title}</h2>

              <table className="pricing-table">
                <thead>
                  <tr>
                    <td />
                    {pricing.tiers.map((tier) => (
                      <th key={tier.name} scope="col" className={tier.featured ? 'featured' : undefined}>
                        {tier.name}
                        {tier.badge && <span className="badge">{tier.badge}</span>}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {(['monthly', 'annual', 'seats', 'credits'] as const).map((row) => (
                    <tr key={row}>
                      <th scope="row">{pricing.rowLabels[row]}</th>
                      {pricing.tiers.map((tier) => (
                        <td key={tier.name} className={tier.featured ? 'featured' : undefined}>{tier[row]}</td>
                      ))}
                    </tr>
                  ))}
                  <tr>
                    <td />
                    {pricing.tiers.map((tier) => (
                      <td key={tier.name} className={tier.featured ? 'featured' : undefined}>
                        <TrialLink location={`pricing_${tier.name.toLowerCase()}`} className="btn btn-primary btn-small" />
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>

              {/* Same rows as cards on narrow screens */}
              <div className="pricing-cards">
                {pricing.tiers.map((tier) => (
                  <div key={tier.name} className={`pricing-card ${tier.featured ? 'featured' : ''}`}>
                    <h3>
                      {tier.name}
                      {tier.badge && <span className="badge">{tier.badge}</span>}
                    </h3>
                    <dl>
                      {(['monthly', 'annual', 'seats', 'credits'] as const).map((row) => (
                        <div key={row}>
                          <dt>{pricing.rowLabels[row]}</dt>
                          <dd>{tier[row]}</dd>
                        </div>
                      ))}
                    </dl>
                    <TrialLink location={`pricing_${tier.name.toLowerCase()}`} />
                  </div>
                ))}
              </div>

              <p className="pricing-note">{pricing.note}</p>

              <div className="trial-box">
                <h3>{pricing.trialBox.title}</h3>
                <p>{pricing.trialBox.body}</p>
                <TrialLink location="pricing_trial_box" />
              </div>
            </div>
          </PricingViewTracker>
        </section>

        {/* 9. FAQ */}
        <section id="faq" className="section section-alt">
          <div className="container narrow">
            <h2>FAQ</h2>
            <FAQAccordion faqs={faqs} />
          </div>
        </section>

        {/* 10. Why we built Observly: origin, founding principles, team onboarding */}
        <section id="why" className="section">
          <div className="container narrow founder">
            <h2>{founder.title}</h2>
            <p className="founder-origin">{founder.origin}</p>
            <ol className="principles">
              {founder.principles.map((principle) => (
                <li key={principle.title}>
                  <h3>{principle.title}</h3>
                  <p>{principle.body}</p>
                </li>
              ))}
            </ol>
            <p className="founder-onboarding">{founder.onboarding}</p>
            <div className="cta-row">
              <TrialLink location="founder" />
              <a href={footer.email.href} className="text-link">or email {contact.email}</a>
            </div>
          </div>
        </section>

        {/* 11. Final CTA */}
        <section className="section section-dark final-cta">
          <div className="container narrow">
            <h2>{finalCta.title}</h2>
            <div className="cta-row cta-row-center">
              <TrialLink location="final" className="btn btn-gold" />
              <SecondaryCta link={secondaryShort} className="btn btn-outline-light" />
            </div>
            <p className="microcopy microcopy-light">{ctas.trialMicrocopy}</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container footer-inner">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo/logo-dark-trim.png" alt="Observly" width={320} height={128} className="logo" />
          <ul className="footer-links">
            <li>© Observly</li>
            <li><a href={footer.privacy.href}>{footer.privacy.label}</a></li>
            <li><a href={footer.terms.href}>{footer.terms.label}</a></li>
            <li>Support <a href={footer.phone.href}>{footer.phone.label}</a></li>
            <li><a href={footer.email.href}>{footer.email.label}</a></li>
          </ul>
          <a href={footer.appStore.href} className="app-store" target="_blank" rel="noopener noreferrer">
            {footer.appStore.label}
          </a>
        </div>
      </footer>
    </>
  );
}

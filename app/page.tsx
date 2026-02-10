import { headers } from 'next/headers';
import { getContentForRegion, colors, sharedStats, sharedFeatures, builtByPrincipals, pricingTierBase, roiExample } from '@/lib/content';
import { DemoForm, FeatureTabs, FAQAccordion, RegionSelector } from '@/components/landing/ClientSections';

export default async function ObservlyLanding() {
  // Get region from middleware header
  const headersList = await headers();
  const region = headersList.get('x-observly-region') || 'NY';
  const content = getContentForRegion(region);

  // Build features array with framework-specific content
  const features = [
    {
      title: 'Voice Recording',
      subtitle: "Record, don't type",
      icon: '🎙️',
      points: content.features.voiceRecording,
      image: '/images/voice-recording.png',
    },
    {
      title: 'Compliance Calendar',
      subtitle: 'Never miss a deadline',
      icon: '📅',
      points: content.features.complianceCalendar,
      image: '/images/compliance.png',
    },
    sharedFeatures.walkthrough,
    sharedFeatures.conference,
  ];

  // Build pricing tiers with framework-specific features
  const pricingTiers = [
    {
      ...pricingTierBase.starter,
      features: content.pricing.starter,
    },
    {
      ...pricingTierBase.professional,
      features: content.pricing.professional,
    },
    {
      ...pricingTierBase.enterprise,
      features: content.pricing.enterprise,
    },
  ];

  return (
    <div style={{ fontFamily: '"DM Sans", -apple-system, sans-serif', backgroundColor: colors.cream, color: colors.charcoal }}>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(255, 254, 251, 0.92)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(107, 45, 60, 0.06)',
        zIndex: 1000,
        padding: '14px 32px',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <img
            src="/logo/observly-logo.png"
            alt="Observly"
            style={{ height: '100px', width: 'auto' }}
          />
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            <a href="#features" style={{ color: colors.charcoal, textDecoration: 'none', fontSize: '14px', fontWeight: 500, letterSpacing: '-0.01em', transition: 'color 0.2s' }}>Features</a>
            <a href="#pricing" style={{ color: colors.charcoal, textDecoration: 'none', fontSize: '14px', fontWeight: 500, letterSpacing: '-0.01em', transition: 'color 0.2s' }}>Pricing</a>
            <a href="#faq" style={{ color: colors.charcoal, textDecoration: 'none', fontSize: '14px', fontWeight: 500, letterSpacing: '-0.01em', transition: 'color 0.2s' }}>FAQ</a>
            <a href="https://app.observly.co/login" style={{
              color: colors.burgundy,
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 500,
              letterSpacing: '-0.01em',
            }}>
              Log In
            </a>
            <a href="https://app.observly.co/signup" className="btn-primary hover-lift" style={{
              backgroundColor: colors.burgundy,
              color: colors.white,
              padding: '11px 24px',
              borderRadius: '100px',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '-0.01em',
              boxShadow: '0 4px 14px -3px rgba(107, 45, 60, 0.35)',
            }}>
              Start Free Trial
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="animate-fade-in" style={{
        minHeight: '100vh',
        paddingTop: '120px',
        paddingBottom: '100px',
        background: `linear-gradient(180deg, ${colors.warmWhite} 0%, ${colors.ivory} 50%, ${colors.cream} 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative Elements */}
        <div style={{
          position: 'absolute',
          top: '15%',
          right: '5%',
          width: '400px',
          height: '400px',
          background: `radial-gradient(circle, ${colors.gold}08 0%, transparent 70%)`,
          borderRadius: '50%',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '-5%',
          width: '500px',
          height: '500px',
          background: `radial-gradient(circle, ${colors.burgundy}06 0%, transparent 70%)`,
          borderRadius: '50%',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }} />
        {/* Geometric accent line */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '8%',
          width: '2px',
          height: '120px',
          background: `linear-gradient(180deg, ${colors.gold}40, transparent)`,
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px', position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '80px', alignItems: 'center', minHeight: 'calc(100vh - 220px)' }}>
            {/* Left: Copy */}
            <div className="animate-fade-in-up">
              {/* Section Label */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '28px',
              }}>
                <div style={{ width: '40px', height: '1px', backgroundColor: colors.gold }} />
                <span style={{
                  color: colors.burgundy,
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}>
                  {content.hero.badge}
                </span>
              </div>

              <h1 style={{
                fontSize: '58px',
                fontWeight: 700,
                color: colors.charcoal,
                lineHeight: 1.08,
                marginBottom: '28px',
                fontFamily: '"Playfair Display", Georgia, serif',
                letterSpacing: '-0.02em',
              }}>
                Complete observations in{' '}
                <span style={{ color: colors.burgundy, position: 'relative', display: 'inline-block' }}>
                  15 minutes
                  <svg style={{ position: 'absolute', bottom: '-8px', left: 0, width: '100%', height: '12px' }} viewBox="0 0 200 12" preserveAspectRatio="none">
                    <path d="M0 8 Q50 0 100 6 T200 4" stroke={colors.gold} strokeWidth="3" fill="none" strokeLinecap="round" />
                  </svg>
                </span>,{' '}
                <br />not 2 hours.
              </h1>

              <p style={{
                fontSize: '18px',
                color: colors.charcoalLight,
                lineHeight: 1.75,
                marginBottom: '44px',
                maxWidth: '520px',
              }}>
                {content.hero.description}
              </p>

              {/* Stats */}
              <div style={{ display: 'flex', gap: '48px', marginBottom: '44px' }}>
                <div className="animate-fade-in-up delay-100">
                  <div style={{ fontSize: '40px', fontWeight: 600, color: colors.burgundy, fontFamily: '"JetBrains Mono", monospace', letterSpacing: '-0.03em' }}>
                    {sharedStats.timeSaved.before}→{sharedStats.timeSaved.after}
                  </div>
                  <div style={{ fontSize: '13px', color: colors.charcoalLight, fontWeight: 500, marginTop: '4px' }}>Minutes per observation</div>
                </div>
                <div className="animate-fade-in-up delay-200">
                  <div style={{ fontSize: '40px', fontWeight: 600, color: colors.burgundy, fontFamily: '"JetBrains Mono", monospace', letterSpacing: '-0.03em' }}>
                    {sharedStats.hoursPerYear.value}
                  </div>
                  <div style={{ fontSize: '13px', color: colors.charcoalLight, fontWeight: 500, marginTop: '4px' }}>Hours saved per year</div>
                </div>
                <div className="animate-fade-in-up delay-300">
                  <div style={{ fontSize: '40px', fontWeight: 600, color: colors.burgundy, fontFamily: '"JetBrains Mono", monospace', letterSpacing: '-0.03em' }}>
                    {sharedStats.feedbackTurnaround.value}
                  </div>
                  <div style={{ fontSize: '13px', color: colors.charcoalLight, fontWeight: 500, marginTop: '4px' }}>Feedback turnaround</div>
                </div>
              </div>

              {/* Trust Badges */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                {content.hero.trustBadges.map((badge, i) => (
                  <div key={i} className={`animate-fade-in delay-${(i + 4) * 100}`} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: colors.white,
                    padding: '10px 16px',
                    borderRadius: '100px',
                    border: `1px solid ${colors.sage}25`,
                    boxShadow: '0 2px 8px rgba(34, 197, 94, 0.08)',
                  }}>
                    <span style={{ color: colors.sage, fontSize: '14px' }}>✓</span>
                    <span style={{ color: colors.charcoal, fontSize: '13px', fontWeight: 500 }}>{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Demo Form */}
            <div className="animate-scale-in delay-200">
              <DemoForm />
            </div>
          </div>

          {/* Scroll Indicator */}
          <div style={{
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            opacity: 0.5,
          }}>
            <span style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: colors.charcoalLight }}>Scroll</span>
            <div style={{
              width: '20px',
              height: '32px',
              border: `2px solid ${colors.charcoalLight}`,
              borderRadius: '10px',
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '6px',
            }}>
              <div style={{
                width: '3px',
                height: '8px',
                backgroundColor: colors.charcoalLight,
                borderRadius: '2px',
                animation: 'scrollIndicator 1.5s ease-in-out infinite',
              }} />
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section style={{ padding: '120px 32px', backgroundColor: colors.white, position: 'relative' }}>
        {/* Decorative corner */}
        <div style={{
          position: 'absolute',
          top: '60px',
          right: '60px',
          width: '80px',
          height: '80px',
          border: `2px solid ${colors.gold}15`,
          borderRadius: '50%',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          {/* Section Label */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
            <div style={{ width: '40px', height: '1px', backgroundColor: colors.gold }} />
            <span style={{ color: colors.burgundy, fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>The Reality</span>
            <div style={{ width: '40px', height: '1px', backgroundColor: colors.gold }} />
          </div>

          <h2 style={{
            fontSize: '44px',
            fontWeight: 700,
            color: colors.charcoal,
            marginBottom: '24px',
            fontFamily: '"Playfair Display", Georgia, serif',
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
          }}>
            You became a principal to lead instruction,<br />
            <span style={{ color: colors.burgundy }}>not to spend nights writing observations.</span>
          </h2>
          <p style={{ fontSize: '17px', color: colors.charcoalLight, lineHeight: 1.8, maxWidth: '680px', margin: '0 auto 56px' }}>
            Principals spend 575+ hours per year on evaluation tasks alone. Observations that should take 30 minutes to document stretch into 2-hour ordeals. Teachers wait weeks for feedback. Compliance deadlines sneak up.
          </p>

          {/* Before/After Comparison */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px', marginTop: '48px' }}>
            <div className="hover-lift" style={{
              backgroundColor: '#FEF8F8',
              borderRadius: '20px',
              padding: '36px',
              textAlign: 'left',
              border: '1px solid #FEE2E2',
              transition: 'all 0.3s ease',
            }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#DC2626', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '16px' }}>✗</span>
                Without Observly
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {content.comparison.manual.map((item, i) => (
                  <li key={i} style={{ padding: '14px 0', borderBottom: i < content.comparison.manual.length - 1 ? '1px solid rgba(220, 38, 38, 0.08)' : 'none', color: colors.charcoal, fontSize: '15px', lineHeight: 1.5 }}>
                    {item}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: '28px', padding: '20px', background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.08) 0%, rgba(220, 38, 38, 0.04) 100%)', borderRadius: '12px', textAlign: 'center' }}>
                <span style={{ fontSize: '32px', fontWeight: 700, color: '#DC2626', fontFamily: '"JetBrains Mono", monospace' }}>90-120 min</span>
                <span style={{ display: 'block', fontSize: '13px', color: '#DC2626', opacity: 0.8, marginTop: '4px' }}>per observation</span>
              </div>
            </div>

            <div className="hover-lift" style={{
              backgroundColor: '#F0FDF4',
              borderRadius: '20px',
              padding: '36px',
              textAlign: 'left',
              border: '1px solid #BBF7D0',
              transition: 'all 0.3s ease',
            }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: colors.sage, marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '16px' }}>✓</span>
                With Observly
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {content.comparison.automated.map((item, i) => (
                  <li key={i} style={{ padding: '14px 0', borderBottom: i < content.comparison.automated.length - 1 ? '1px solid rgba(34, 197, 94, 0.12)' : 'none', color: colors.charcoal, fontSize: '15px', lineHeight: 1.5 }}>
                    {item}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: '28px', padding: '20px', background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.12) 0%, rgba(34, 197, 94, 0.06) 100%)', borderRadius: '12px', textAlign: 'center' }}>
                <span style={{ fontSize: '32px', fontWeight: 700, color: colors.sage, fontFamily: '"JetBrains Mono", monospace' }}>15 min</span>
                <span style={{ display: 'block', fontSize: '13px', color: colors.sage, opacity: 0.9, marginTop: '4px' }}>per observation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={{ padding: '120px 32px', backgroundColor: colors.cream, position: 'relative' }}>
        {/* Background texture */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: `radial-gradient(circle at 20% 50%, ${colors.burgundy}03 0%, transparent 50%)`, pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            {/* Section Label */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
              <div style={{ width: '40px', height: '1px', backgroundColor: colors.gold }} />
              <span style={{ color: colors.burgundy, fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Features</span>
              <div style={{ width: '40px', height: '1px', backgroundColor: colors.gold }} />
            </div>

            <h2 style={{
              fontSize: '44px',
              fontWeight: 700,
              color: colors.charcoal,
              marginBottom: '16px',
              fontFamily: '"Playfair Display", Georgia, serif',
              letterSpacing: '-0.02em',
            }}>
              Everything you need, nothing you don&apos;t
            </h2>
            <p style={{ fontSize: '17px', color: colors.charcoalLight, maxWidth: '540px', margin: '0 auto' }}>
              Built by educators, for educators. Every feature solves a real problem.
            </p>
          </div>

          <FeatureTabs features={features} />
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: '120px 32px', backgroundColor: colors.white, position: 'relative' }}>
        {/* Decorative line */}
        <div style={{ position: 'absolute', top: '50%', left: '15%', right: '15%', height: '1px', background: `linear-gradient(90deg, transparent, ${colors.gold}20, transparent)`, pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative' }}>
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            {/* Section Label */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
              <div style={{ width: '40px', height: '1px', backgroundColor: colors.gold }} />
              <span style={{ color: colors.burgundy, fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>How It Works</span>
              <div style={{ width: '40px', height: '1px', backgroundColor: colors.gold }} />
            </div>

            <h2 style={{
              fontSize: '44px',
              fontWeight: 700,
              color: colors.charcoal,
              marginBottom: '16px',
              fontFamily: '"Playfair Display", Georgia, serif',
              letterSpacing: '-0.02em',
            }}>
              Three steps. Fifteen minutes.
            </h2>
            <p style={{ fontSize: '17px', color: colors.charcoalLight }}>
              From classroom to {content.shortName === 'Framework' ? 'your system' : content.shortName} in the time it takes to walk back to your office.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
            {content.howItWorks.map((item, i) => (
              <div key={i} className="hover-lift" style={{ textAlign: 'center', padding: '20px', transition: 'all 0.3s ease' }}>
                <div style={{
                  width: '88px',
                  height: '88px',
                  background: `linear-gradient(135deg, ${colors.burgundy} 0%, ${colors.burgundyDark} 100%)`,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 28px',
                  fontSize: '36px',
                  boxShadow: '0 12px 32px -8px rgba(107, 45, 60, 0.35)',
                  position: 'relative',
                }}>
                  {item.icon}
                  {/* Step number badge */}
                  <div style={{
                    position: 'absolute',
                    top: '-4px',
                    right: '-4px',
                    width: '28px',
                    height: '28px',
                    backgroundColor: colors.gold,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '13px',
                    fontWeight: 700,
                    color: colors.white,
                    fontFamily: '"JetBrains Mono", monospace',
                    boxShadow: '0 4px 12px rgba(201, 162, 39, 0.4)',
                  }}>
                    {item.step}
                  </div>
                </div>
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: 700,
                  color: colors.charcoal,
                  marginBottom: '12px',
                  fontFamily: '"Playfair Display", Georgia, serif',
                }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '15px', color: colors.charcoalLight, lineHeight: 1.7 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built by Principals Section */}
      <section style={{ padding: '120px 32px', background: `linear-gradient(135deg, ${colors.burgundy} 0%, ${colors.burgundyDeep} 100%)`, position: 'relative', overflow: 'hidden' }}>
        {/* Decorative shapes */}
        <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', border: '2px solid rgba(255,255,255,0.05)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '300px', height: '300px', border: '2px solid rgba(255,255,255,0.03)', borderRadius: '50%', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            {/* Section Label */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
              <div style={{ width: '40px', height: '1px', backgroundColor: `${colors.gold}60` }} />
              <span style={{ color: colors.gold, fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Our Story</span>
              <div style={{ width: '40px', height: '1px', backgroundColor: `${colors.gold}60` }} />
            </div>

            <h2 style={{
              fontSize: '44px',
              fontWeight: 700,
              color: colors.white,
              marginBottom: '16px',
              fontFamily: '"Playfair Display", Georgia, serif',
              letterSpacing: '-0.02em',
            }}>
              {builtByPrincipals.title}
            </h2>
            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.7)', maxWidth: '560px', margin: '0 auto' }}>
              {builtByPrincipals.subtitle}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {builtByPrincipals.features.map((feature, i) => (
              <div key={i} className="hover-lift" style={{
                backgroundColor: 'rgba(255,255,255,0.06)',
                borderRadius: '20px',
                padding: '36px 28px',
                border: '1px solid rgba(255,255,255,0.08)',
                textAlign: 'center',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
              }}>
                <div style={{ fontSize: '44px', marginBottom: '20px', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))' }}>{feature.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: colors.white, marginBottom: '12px' }}>
                  {feature.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" style={{ padding: '120px 32px', backgroundColor: colors.cream, position: 'relative' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            {/* Section Label */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
              <div style={{ width: '40px', height: '1px', backgroundColor: colors.gold }} />
              <span style={{ color: colors.burgundy, fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Pricing</span>
              <div style={{ width: '40px', height: '1px', backgroundColor: colors.gold }} />
            </div>

            <h2 style={{
              fontSize: '44px',
              fontWeight: 700,
              color: colors.charcoal,
              marginBottom: '16px',
              fontFamily: '"Playfair Display", Georgia, serif',
              letterSpacing: '-0.02em',
            }}>
              Simple, transparent pricing
            </h2>
            <p style={{ fontSize: '17px', color: colors.charcoalLight }}>
              All plans include a 30-day free trial. No credit card required.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {pricingTiers.map((tier, i) => (
              <div key={i} className="hover-lift" style={{
                backgroundColor: colors.white,
                borderRadius: '24px',
                padding: '44px 36px',
                border: tier.popular ? `2px solid ${colors.gold}` : '1px solid rgba(107, 45, 60, 0.08)',
                position: 'relative',
                boxShadow: tier.popular ? '0 25px 60px -15px rgba(201, 162, 39, 0.25)' : '0 4px 20px rgba(107, 45, 60, 0.04)',
                transform: tier.popular ? 'scale(1.02)' : 'none',
                transition: 'all 0.3s ease',
              }}>
                {tier.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '-14px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: `linear-gradient(135deg, ${colors.gold} 0%, ${colors.goldLight} 100%)`,
                    color: colors.white,
                    padding: '8px 20px',
                    borderRadius: '100px',
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    boxShadow: '0 4px 14px rgba(201, 162, 39, 0.4)',
                  }}>
                    MOST POPULAR
                  </div>
                )}
                <div style={{ fontSize: '13px', color: colors.charcoalLight, marginBottom: '8px', fontWeight: 500 }}>
                  {tier.subtitle}
                </div>
                <h3 style={{
                  fontSize: '26px',
                  fontWeight: 700,
                  color: colors.charcoal,
                  marginBottom: '12px',
                  fontFamily: '"Playfair Display", Georgia, serif',
                }}>
                  {tier.name}
                </h3>
                <div style={{ marginBottom: '8px', display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                  <span style={{ fontSize: '52px', fontWeight: 700, color: colors.burgundy, fontFamily: '"JetBrains Mono", monospace', letterSpacing: '-0.03em' }}>{tier.price}</span>
                  <span style={{ color: colors.charcoalLight, fontSize: '15px' }}>{tier.period}</span>
                </div>
                <div style={{ fontSize: '13px', color: colors.charcoalLight, marginBottom: '28px' }}>
                  Billed annually at {tier.annual}
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0' }}>
                  {tier.features.map((feature, j) => (
                    <li key={j} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      padding: '10px 0',
                      fontSize: '14px',
                      color: colors.charcoal,
                      lineHeight: 1.4,
                    }}>
                      <span style={{ color: colors.sage, fontSize: '14px', marginTop: '1px' }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={tier.cta === 'Contact Us'
                    ? 'mailto:sales@observly.co?subject=Enterprise%20Inquiry'
                    : `https://app.observly.co/signup?plan=${tier.name.toLowerCase()}`}
                  className="btn-primary"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '16px 24px',
                    borderRadius: '12px',
                    backgroundColor: tier.popular ? colors.gold : 'transparent',
                    color: tier.popular ? colors.white : colors.burgundy,
                    border: tier.popular ? 'none' : `2px solid ${colors.burgundy}`,
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '15px',
                    transition: 'all 0.3s ease',
                    boxShadow: tier.popular ? '0 6px 20px -4px rgba(201, 162, 39, 0.45)' : 'none',
                  }}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>

          {/* ROI Calculator Teaser */}
          <div style={{
            marginTop: '56px',
            background: `linear-gradient(135deg, ${colors.white} 0%, ${colors.ivory} 100%)`,
            borderRadius: '20px',
            padding: '36px 44px',
            textAlign: 'center',
            border: '1px solid rgba(107, 45, 60, 0.08)',
            boxShadow: '0 4px 20px rgba(107, 45, 60, 0.04)',
          }}>
            <p style={{ fontSize: '17px', color: colors.charcoal, margin: 0 }}>
              <span style={{ fontWeight: 600 }}>ROI Example:</span> {roiExample.text}{' '}
              <span style={{ color: colors.sage, fontWeight: 700, fontFamily: '"JetBrains Mono", monospace' }}>{roiExample.hoursSaved}</span> —
              {roiExample.valueText}{' '}
              <span style={{ color: colors.gold, fontWeight: 700, fontFamily: '"JetBrains Mono", monospace' }}>{roiExample.dollarValue}</span> {roiExample.suffix}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ padding: '120px 32px', backgroundColor: colors.white, position: 'relative' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            {/* Section Label */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
              <div style={{ width: '40px', height: '1px', backgroundColor: colors.gold }} />
              <span style={{ color: colors.burgundy, fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>FAQ</span>
              <div style={{ width: '40px', height: '1px', backgroundColor: colors.gold }} />
            </div>

            <h2 style={{
              fontSize: '44px',
              fontWeight: 700,
              color: colors.charcoal,
              fontFamily: '"Playfair Display", Georgia, serif',
              letterSpacing: '-0.02em',
            }}>
              Frequently Asked Questions
            </h2>
          </div>

          <FAQAccordion faqs={content.faqs} />
        </div>
      </section>

      {/* Final CTA */}
      <section style={{
        padding: '120px 32px',
        background: `linear-gradient(135deg, ${colors.burgundy} 0%, ${colors.burgundyDeep} 100%)`,
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative element */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: `radial-gradient(circle, ${colors.gold}08 0%, transparent 70%)`,
          borderRadius: '50%',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative' }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: 700,
            color: colors.white,
            marginBottom: '24px',
            fontFamily: '"Playfair Display", Georgia, serif',
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
          }}>
            Ready to reclaim your time?
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.75)', marginBottom: '40px', lineHeight: 1.7 }}>
            Join {content.cta.audience} who&apos;ve stopped spending evenings on observation write-ups.
          </p>
          <a
            href="https://app.observly.co/signup"
            className="btn-primary hover-lift"
            style={{
              display: 'inline-block',
              background: `linear-gradient(135deg, ${colors.gold} 0%, ${colors.goldLight} 100%)`,
              color: colors.white,
              padding: '20px 48px',
              borderRadius: '100px',
              textDecoration: 'none',
              fontSize: '17px',
              fontWeight: 600,
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 30px -4px rgba(201, 162, 39, 0.5)',
            }}
          >
            Start Your Free Trial →
          </a>
          <p style={{ marginTop: '28px', fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>
            30-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: colors.charcoal,
        color: colors.white,
        padding: '72px 32px 36px',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '64px', marginBottom: '56px' }}>
            <div>
              <img
                src="/logo/observly-logo.png"
                alt="Observly"
                style={{ height: '32px', width: 'auto', marginBottom: '20px', filter: 'brightness(0) invert(1)' }}
              />
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: '280px' }}>
                The complete observation command center {content.footer.tagline}. From classroom to compliance, all in your pocket.
              </p>
            </div>
            <div>
              <h4 style={{ fontWeight: 600, marginBottom: '20px', fontSize: '14px', letterSpacing: '0.05em' }}>Product</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '12px' }}><a href="#features" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>Features</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#pricing" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>Pricing</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#faq" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontWeight: 600, marginBottom: '20px', fontSize: '14px', letterSpacing: '0.05em' }}>Company</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '12px' }}><a href="/about" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>About</a></li>
                <li style={{ marginBottom: '12px' }}><a href="/contact" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>Contact</a></li>
                <li style={{ marginBottom: '12px' }}><a href="/blog" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontWeight: 600, marginBottom: '20px', fontSize: '14px', letterSpacing: '0.05em' }}>Legal</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '12px' }}><a href="https://app.observly.co/privacy" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>Privacy Policy</a></li>
                <li style={{ marginBottom: '12px' }}><a href="https://app.observly.co/terms" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>Terms of Service</a></li>
                <li style={{ marginBottom: '12px' }}><a href="https://app.observly.co/data-privacy" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>Data Security</a></li>
              </ul>
            </div>
          </div>
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.08)',
            paddingTop: '28px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '13px',
            color: 'rgba(255,255,255,0.5)',
          }}>
            <span>© 2026 Observly. All rights reserved.</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              <span>Made with ❤️ {content.footer.tagline}</span>
              <RegionSelector currentRegion={region} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

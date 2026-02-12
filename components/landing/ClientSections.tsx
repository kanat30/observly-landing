'use client';

import { useState } from 'react';
import { colors } from '@/lib/content/base';
import { useTheme } from '@/lib/theme';
import type { FAQ } from '@/lib/content/types';

// Feature type for the tabs
interface Feature {
  title: string;
  subtitle: string;
  icon: string;
  points: string[];
  image: string;
}

// Demo Form Component
export function DemoForm() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    school: '',
    teachers: '',
  });

  return (
    <div
      id="demo"
      style={{
        backgroundColor: colors.white,
        borderRadius: theme.radiusLarge,
        padding: theme.cardPadding,
        boxShadow: theme.shadowCard,
        border: `1px solid rgba(107, 45, 60, ${theme.borderOpacity})`,
      }}
    >
      <h2
        style={{
          fontSize: '28px',
          fontWeight: 700,
          color: colors.burgundy,
          marginBottom: '8px',
          fontFamily: theme.headingFont,
          letterSpacing: '-0.02em',
        }}
      >
        Book a Demo
      </h2>
      <p style={{ color: colors.charcoal, opacity: 0.6, marginBottom: '28px', fontSize: '15px' }}>
        See how Observly saves you 100+ hours per year
      </p>

      <form style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <input
          type="text"
          placeholder="Your name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          style={{
            padding: '15px 18px',
            borderRadius: theme.radiusSmall,
            border: `1px solid rgba(107, 45, 60, ${theme.borderOpacity})`,
            fontSize: '15px',
            outline: 'none',
            transition: `all ${theme.animationFast}`,
            backgroundColor: 'rgba(250, 250, 247, 0.5)',
          }}
        />
        <input
          type="email"
          placeholder="Work email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          style={{
            padding: '15px 18px',
            borderRadius: theme.radiusSmall,
            border: `1px solid rgba(107, 45, 60, ${theme.borderOpacity})`,
            fontSize: '15px',
            outline: 'none',
            transition: `all ${theme.animationFast}`,
            backgroundColor: 'rgba(250, 250, 247, 0.5)',
          }}
        />
        <input
          type="text"
          placeholder="School name"
          value={formData.school}
          onChange={(e) => setFormData({ ...formData, school: e.target.value })}
          style={{
            padding: '15px 18px',
            borderRadius: theme.radiusSmall,
            border: `1px solid rgba(107, 45, 60, ${theme.borderOpacity})`,
            fontSize: '15px',
            outline: 'none',
            transition: `all ${theme.animationFast}`,
            backgroundColor: 'rgba(250, 250, 247, 0.5)',
          }}
        />
        <select
          value={formData.teachers}
          onChange={(e) => setFormData({ ...formData, teachers: e.target.value })}
          style={{
            padding: '15px 18px',
            borderRadius: theme.radiusSmall,
            border: `1px solid rgba(107, 45, 60, ${theme.borderOpacity})`,
            fontSize: '15px',
            outline: 'none',
            backgroundColor: 'rgba(250, 250, 247, 0.5)',
            color: formData.teachers ? colors.charcoal : '#999',
            transition: `all ${theme.animationFast}`,
          }}
        >
          <option value="">Number of teachers</option>
          <option value="1-30">1-30 teachers</option>
          <option value="31-60">31-60 teachers</option>
          <option value="61+">61+ teachers</option>
        </select>

        <button
          type="submit"
          className="btn-primary"
          style={{
            background: `linear-gradient(135deg, ${colors.gold} 0%, ${colors.goldLight} 100%)`,
            color: colors.white,
            padding: '17px 24px',
            borderRadius: theme.radiusSmall,
            border: 'none',
            fontSize: '16px',
            fontWeight: 600,
            cursor: 'pointer',
            marginTop: '10px',
            transition: `all ${theme.animationMedium} ease`,
            boxShadow: theme.shadowButton,
          }}
        >
          Book My Demo →
        </button>
      </form>

      <p
        style={{
          fontSize: '12px',
          color: colors.charcoal,
          opacity: 0.45,
          marginTop: '20px',
          textAlign: 'center',
          letterSpacing: '0.02em',
        }}
      >
        🔒 Your data is secure. No spam, ever.
      </p>
    </div>
  );
}

// Feature Tabs Component
interface FeatureTabsProps {
  features: Feature[];
}

export function FeatureTabs({ features }: FeatureTabsProps) {
  const { theme } = useTheme();
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <>
      {/* Feature Tabs */}
      <div
        className="feature-tabs"
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          marginBottom: '56px',
          flexWrap: 'wrap',
        }}
      >
        {features.map((feature, i) => (
          <button
            key={i}
            onClick={() => setActiveFeature(i)}
            className={`feature-tab ${activeFeature === i ? '' : 'hover-lift'}`}
            style={{
              padding: '14px 28px',
              borderRadius: theme.radiusPill,
              border: activeFeature === i ? 'none' : `1px solid rgba(107, 45, 60, ${theme.borderOpacity})`,
              backgroundColor: activeFeature === i ? colors.burgundy : colors.white,
              color: activeFeature === i ? colors.white : colors.charcoal,
              fontSize: '14px',
              fontWeight: 500,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              transition: `all ${theme.animationMedium} ease`,
              boxShadow: activeFeature === i ? theme.shadowMedium : theme.shadowSoft,
            }}
          >
            <span style={{ fontSize: '18px' }}>{feature.icon}</span>
            {feature.title}
          </button>
        ))}
      </div>

      {/* Active Feature Display */}
      <div
        className="animate-fade-in feature-content"
        style={{
          backgroundColor: colors.white,
          borderRadius: theme.radiusLarge,
          padding: '56px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '72px',
          alignItems: 'center',
          boxShadow: theme.shadowMedium,
          border: `1px solid rgba(107, 45, 60, ${theme.borderOpacity})`,
        }}
      >
        <div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: `${colors.burgundy}08`,
              padding: '10px 18px',
              borderRadius: theme.radiusPill,
              marginBottom: '20px',
            }}
          >
            <span style={{ fontSize: '20px' }}>{features[activeFeature].icon}</span>
            <span style={{ color: colors.burgundy, fontSize: '13px', fontWeight: 600, letterSpacing: '0.02em' }}>
              {features[activeFeature].subtitle}
            </span>
          </div>
          <h3
            className="feature-title"
            style={{
              fontSize: '34px',
              fontWeight: 700,
              color: colors.charcoal,
              marginBottom: '28px',
              fontFamily: theme.headingFont,
              letterSpacing: '-0.02em',
            }}
          >
            {features[activeFeature].title}
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {features[activeFeature].points.map((point, i) => (
              <li
                key={i}
                className="animate-fade-in-up"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '14px 0',
                  fontSize: '15px',
                  color: colors.charcoal,
                  borderBottom: i < features[activeFeature].points.length - 1 ? `1px solid rgba(107, 45, 60, ${theme.borderOpacity})` : 'none',
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                <span
                  style={{
                    width: '26px',
                    height: '26px',
                    background: `linear-gradient(135deg, ${colors.sage} 0%, ${colors.sageLight} 100%)`,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: colors.white,
                    fontSize: '12px',
                    flexShrink: 0,
                    boxShadow: '0 4px 12px rgba(34, 197, 94, 0.25)',
                  }}
                >
                  ✓
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div
          className="feature-image-placeholder"
          style={{
            background: `linear-gradient(135deg, ${colors.cream} 0%, ${colors.ivory} 100%)`,
            borderRadius: theme.radiusMedium,
            height: '420px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: `1px solid rgba(107, 45, 60, ${theme.borderOpacity})`,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative background */}
          <div style={{
            position: 'absolute',
            top: '20%',
            right: '-10%',
            width: '200px',
            height: '200px',
            background: `radial-gradient(circle, ${colors.gold}10 0%, transparent 70%)`,
            borderRadius: '50%',
          }} />
          <div style={{ textAlign: 'center', color: colors.charcoal, opacity: 0.4, position: 'relative' }}>
            <div style={{ fontSize: '64px', marginBottom: '20px', filter: 'grayscale(0.3)' }}>
              {features[activeFeature].icon}
            </div>
            <p style={{ fontSize: '14px', fontWeight: 500 }}>App screenshot coming soon</p>
          </div>
        </div>
      </div>
    </>
  );
}

// FAQ Accordion Component
interface FAQAccordionProps {
  faqs: FAQ[];
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  const { theme } = useTheme();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div>
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="hover-lift"
          style={{
            backgroundColor: activeFaq === i ? 'rgba(250, 250, 247, 0.8)' : 'transparent',
            borderRadius: theme.radiusMedium,
            marginBottom: '8px',
            transition: `all ${theme.animationMedium} ease`,
          }}
        >
          <button
            onClick={() => setActiveFaq(activeFaq === i ? null : i)}
            className="faq-question"
            style={{
              width: '100%',
              padding: '24px 28px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
              borderBottom: activeFaq === i ? 'none' : `1px solid rgba(107, 45, 60, ${theme.borderOpacity})`,
            }}
          >
            <span style={{
              fontSize: '17px',
              fontWeight: 600,
              color: activeFaq === i ? colors.burgundy : colors.charcoal,
              fontFamily: theme.headingFont,
              letterSpacing: '-0.01em',
              paddingRight: '16px',
              transition: `color ${theme.animationFast}`,
            }}>
              {faq.question}
            </span>
            <span
              style={{
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: activeFaq === i ? colors.gold : `rgba(107, 45, 60, ${theme.borderOpacity})`,
                color: activeFaq === i ? colors.white : colors.burgundy,
                borderRadius: '50%',
                fontSize: '20px',
                fontWeight: 300,
                transform: activeFaq === i ? 'rotate(45deg)' : 'none',
                transition: `all ${theme.animationMedium} ease`,
                flexShrink: 0,
              }}
            >
              +
            </span>
          </button>
          {activeFaq === i && (
            <div
              className="animate-fade-in faq-answer"
              style={{
                padding: '0 28px 28px',
                fontSize: '15px',
                color: colors.charcoal,
                opacity: 0.75,
                lineHeight: 1.8,
              }}
            >
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// Region Selector Component for footer
interface RegionSelectorProps {
  currentRegion: string;
}

export function RegionSelector({ currentRegion }: RegionSelectorProps) {
  const { theme } = useTheme();
  const regions = [
    { code: 'NY', label: 'New York (Danielson)' },
    { code: 'TX', label: 'Texas (T-TESS)' },
    { code: 'CA', label: 'California (CSTP)' },
    { code: 'FL', label: 'Florida (Marzano)' },
    { code: 'generic', label: 'Other States' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newRegion = e.target.value;
    // Navigate with region parameter to trigger middleware
    window.location.href = `/?region=${newRegion}`;
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <span style={{ fontSize: '13px', opacity: 0.6 }}>Region:</span>
      <select
        value={currentRegion}
        onChange={handleChange}
        style={{
          backgroundColor: 'transparent',
          border: `1px solid rgba(255,255,255, ${theme.borderOpacityHover})`,
          borderRadius: theme.radiusSmall,
          padding: '4px 8px',
          color: 'inherit',
          fontSize: '13px',
          cursor: 'pointer',
        }}
      >
        {regions.map((region) => (
          <option key={region.code} value={region.code} style={{ color: '#1A1A1A' }}>
            {region.label}
          </option>
        ))}
      </select>
    </div>
  );
}

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '@/components/Providers';
import { Analytics } from '@/components/Analytics';
import { getContentForRegion } from '@/lib/content';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-inter' });

const { meta } = getContentForRegion('NY');

export const metadata: Metadata = {
  metadataBase: new URL('https://observly.co'),
  title: meta.title,
  description: meta.description,
  openGraph: { title: meta.title, description: meta.description, url: 'https://observly.co', siteName: 'Observly' },
};

// Product tokens: observly-gtm/01-brand/BRAND_MINI.md §B2. Gold (#D6B545) carries dark text only,
// and is never used for text or thin lines on light backgrounds.
const globalStyles = `
  :root {
    --burgundy: #6B2D3C;
    --burgundy-hover: #8B4557;
    --burgundy-dark: #4A1F2A;
    --burgundy-deep: #3D1A24;
    --burgundy-tint: #F5E4E8;
    --gold: #D6B545;
    --gold-tint: #F7EEC7;
    --gold-wash: #FEFCF5;
    --ivory: #FAFAF7;
    --ivory-2: #F5F4F0;
    --ivory-3: #EDECE6;
    --white: #FFFFFF;
    --text: #1A1A1A;
    --text-2: #52525B;
    --border: #E4E4E7;
    --border-strong: #D4D4D8;
    --radius-s: 8px;
    --radius-m: 12px;
    --radius-l: 16px;
    --shadow: 0 8px 24px -8px rgba(107, 45, 60, 0.15);
  }

  [data-theme="elegant"] {
    --radius-s: 12px;
    --radius-m: 20px;
    --radius-l: 28px;
    --shadow: 0 30px 60px -15px rgba(107, 45, 60, 0.2), 0 10px 20px -10px rgba(107, 45, 60, 0.1);
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; scroll-padding-top: 80px; }
  body {
    background: var(--ivory);
    color: var(--text);
    font-family: var(--font-inter), -apple-system, system-ui, sans-serif;
    font-size: 17px;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  img { max-width: 100%; height: auto; display: block; }
  a { color: inherit; }
  ::selection { background: var(--burgundy-tint); color: var(--text); }
  :focus-visible { outline: 3px solid var(--burgundy); outline-offset: 2px; }

  h1, h2, h3 { font-weight: 700; line-height: 1.15; letter-spacing: -0.02em; }
  h1 { font-size: clamp(34px, 5vw, 56px); margin-bottom: 20px; }
  h2 { font-size: clamp(28px, 3.6vw, 40px); margin-bottom: 28px; }
  h3 { font-size: 20px; font-weight: 600; margin-bottom: 8px; }

  .container { width: 100%; max-width: 1160px; margin: 0 auto; padding: 0 24px; }
  .narrow { max-width: 760px; }
  .section { padding: 96px 0; }
  .section-alt { background: var(--ivory-2); }
  .section-dark { background: linear-gradient(135deg, var(--burgundy) 0%, var(--burgundy-dark) 60%, var(--burgundy-deep) 100%); color: var(--ivory); }

  /* Buttons */
  .btn {
    display: inline-flex; align-items: center; justify-content: center; text-align: center;
    min-height: 48px; padding: 12px 24px; border-radius: var(--radius-s);
    font-weight: 600; font-size: 16px; text-decoration: none; border: 2px solid transparent;
    transition: background-color 0.15s ease, border-color 0.15s ease, transform 0.15s ease;
  }
  .btn:hover { transform: translateY(-1px); }
  .btn-small { min-height: 40px; padding: 8px 16px; font-size: 15px; }
  .btn-primary { background: var(--burgundy); color: var(--white); }
  .btn-primary:hover { background: var(--burgundy-hover); }
  .btn-secondary { background: var(--white); color: var(--burgundy); border-color: var(--burgundy); }
  .btn-secondary:hover { background: var(--burgundy-tint); }
  .btn-gold { background: var(--gold); color: var(--text); }
  .btn-gold:hover { background: #DFC45E; }
  .btn-dark { background: var(--burgundy-deep); color: var(--white); }
  .btn-dark:hover { background: var(--burgundy); }
  .btn-outline-light { color: var(--ivory); border-color: rgba(250, 250, 247, 0.6); }
  .btn-outline-light:hover { border-color: var(--ivory); }
  .text-link { color: var(--burgundy); font-weight: 500; }
  .text-link-light { color: var(--ivory); font-weight: 500; }

  .cta-row { display: flex; flex-wrap: wrap; align-items: flex-start; gap: 16px; }
  .cta-row-center { justify-content: center; }
  .trial-cta { display: flex; flex-direction: column; align-items: flex-start; gap: 8px; }
  .microcopy { font-size: 14px; color: var(--text-2); }
  .microcopy-light { color: rgba(250, 250, 247, 0.85); margin-top: 16px; text-align: center; }

  /* Header */
  .site-header {
    position: sticky; top: 0; z-index: 50;
    background: rgba(250, 250, 247, 0.92); backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
  }
  .header-inner { display: flex; align-items: center; justify-content: space-between; gap: 24px; height: 68px; }
  .logo-link { display: flex; flex-shrink: 0; }
  .site-header .logo { height: 44px; width: auto; }
  .nav-links { display: flex; gap: 28px; }
  .nav-links a, .sign-in { text-decoration: none; font-size: 15px; font-weight: 500; color: var(--text-2); }
  .nav-links a:hover, .sign-in:hover { color: var(--burgundy); }
  .header-actions { display: flex; align-items: center; gap: 20px; }

  /* Hero */
  .hero { padding: 72px 0 88px; }
  .hero-grid { display: grid; grid-template-columns: 1.1fr 1fr; gap: 56px; align-items: center; }
  .eyebrow { font-size: 14px; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; color: var(--burgundy); margin-bottom: 16px; }
  .lead { font-size: 19px; color: var(--text-2); margin-bottom: 32px; max-width: 580px; }
  .chips { list-style: none; display: flex; flex-wrap: wrap; gap: 8px; margin-top: 32px; }
  .chips li { font-size: 14px; font-weight: 500; padding: 6px 12px; border-radius: 999px; background: var(--white); border: 1px solid var(--border-strong); color: var(--text); }
  .hero-visual { display: grid; grid-template-columns: 0.42fr 1fr; gap: 16px; align-items: end; }

  /* Screenshot slots */
  .shot { border-radius: var(--radius-m); overflow: hidden; background: var(--white); box-shadow: var(--shadow); border: 1px solid var(--border); }
  .shot img { width: 100%; height: 100%; object-fit: contain; }
  .shot-phone { aspect-ratio: 9 / 19.5; }
  .shot-laptop { aspect-ratio: 16 / 10; }
  .shot-placeholder {
    width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px;
    padding: 16px; text-align: center; background: repeating-linear-gradient(45deg, var(--ivory-2), var(--ivory-2) 10px, var(--ivory-3) 10px, var(--ivory-3) 20px);
  }
  .shot-label { font-size: 13px; font-weight: 600; color: var(--text); }
  .shot-file { font-size: 11px; color: var(--text-2); background: var(--white); padding: 2px 6px; border-radius: 4px; word-break: break-all; }

  /* Seasonal strip */
  .strip { background: var(--gold-tint); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
  .strip-inner { display: flex; align-items: center; justify-content: space-between; gap: 24px; padding-top: 20px; padding-bottom: 20px; }
  .strip p { font-weight: 500; color: var(--text); max-width: 640px; }

  .demo-video { width: 100%; border-radius: var(--radius-m); box-shadow: var(--shadow); background: var(--text); }

  /* How it works */
  .steps { list-style: none; display: grid; grid-template-columns: repeat(4, 1fr); gap: 28px; }
  .step .shot { margin-bottom: 20px; }
  .step .shot-phone { aspect-ratio: 4 / 5; }
  .step .shot-laptop { aspect-ratio: 4 / 5; }
  .step p { color: var(--text-2); font-size: 16px; }
  .step-number {
    display: inline-flex; align-items: center; justify-content: center; width: 28px; height: 28px; margin-right: 10px;
    border-radius: 50%; background: var(--burgundy); color: var(--white); font-size: 14px; vertical-align: 2px;
  }
  .footnote { margin-top: 40px; font-size: 20px; font-weight: 600; color: var(--burgundy); }

  /* Pillars */
  .pillar-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: center; }
  .pillar-reverse > :first-child { order: 2; }
  .pillar-visual { display: flex; gap: 16px; align-items: flex-end; }
  .pillar-visual .shot-phone { flex: 0 0 38%; }
  .pillar-visual .shot-laptop { flex: 1 1 auto; }
  .pillar-visual:has(.shot-laptop + .shot-laptop) { flex-direction: column; align-items: stretch; }
  .points { list-style: none; display: grid; gap: 16px; }
  .points li { position: relative; padding-left: 28px; color: var(--text-2); }
  .points li::before { content: ''; position: absolute; left: 0; top: 0.6em; width: 12px; height: 12px; border-radius: 3px; background: var(--burgundy); }
  .points strong { color: var(--text); }
  .points-light li { color: var(--ivory); }
  .points-light li::before { background: var(--gold); }
  #trust .points { margin-bottom: 32px; }

  /* Pricing */
  .pricing-table { width: 100%; border-collapse: separate; border-spacing: 0; background: var(--white); border: 1px solid var(--border); border-radius: var(--radius-l); overflow: hidden; }
  .pricing-table th, .pricing-table td { padding: 18px 20px; text-align: center; border-bottom: 1px solid var(--border); }
  .pricing-table tr:last-child td { border-bottom: none; }
  .pricing-table thead th { font-size: 20px; }
  .pricing-table tbody th { text-align: left; font-weight: 500; color: var(--text-2); }
  .pricing-table .featured { background: var(--burgundy-tint); }
  .badge { display: inline-block; margin-left: 8px; padding: 2px 10px; border-radius: 999px; background: var(--gold); color: var(--text); font-size: 12px; font-weight: 600; vertical-align: 3px; letter-spacing: 0; }
  .pricing-cards { display: none; gap: 16px; }
  .pricing-card { background: var(--white); border: 1px solid var(--border); border-radius: var(--radius-l); padding: 24px 20px; }
  .pricing-card.featured { border: 2px solid var(--burgundy); }
  .pricing-card dl { margin: 12px 0 20px; }
  .pricing-card dl div { display: flex; justify-content: space-between; gap: 16px; padding: 10px 0; border-bottom: 1px solid var(--border); }
  .pricing-card dt { color: var(--text-2); }
  .pricing-card dd { font-weight: 600; text-align: right; }
  .pricing-card .btn { width: 100%; }
  .pricing-note { margin-top: 20px; color: var(--text-2); font-size: 15px; }
  .trial-box { margin-top: 32px; padding: 28px; border-radius: var(--radius-l); background: var(--gold-wash); border: 1px solid var(--gold-tint); display: grid; grid-template-columns: auto 1fr auto; gap: 8px 24px; align-items: center; }
  .trial-box h3 { margin: 0; }

  /* FAQ */
  .faq-list { display: grid; gap: 12px; }
  .faq-item { background: var(--white); border: 1px solid var(--border); border-radius: var(--radius-m); }
  .faq-item summary { cursor: pointer; list-style: none; padding: 18px 48px 18px 20px; font-weight: 600; position: relative; }
  .faq-item summary::-webkit-details-marker { display: none; }
  .faq-item summary::after { content: '+'; position: absolute; right: 20px; top: 50%; transform: translateY(-50%); font-size: 22px; color: var(--burgundy); }
  .faq-item[open] summary::after { content: '−'; }
  .faq-item p { padding: 0 20px 20px; color: var(--text-2); }

  /* Why we built Observly */
  .founder-origin { font-size: 20px; line-height: 1.55; margin-bottom: 32px; padding-left: 24px; border-left: 4px solid var(--burgundy); }
  .principles { list-style: none; counter-reset: principle; display: grid; gap: 20px; margin-bottom: 32px; }
  .principles li { counter-increment: principle; position: relative; padding-left: 48px; }
  .principles li::before {
    content: counter(principle); position: absolute; left: 0; top: 0;
    display: inline-flex; align-items: center; justify-content: center; width: 30px; height: 30px;
    border-radius: 50%; background: var(--burgundy-tint); color: var(--burgundy); font-size: 14px; font-weight: 700;
  }
  .principles h3 { margin-bottom: 4px; }
  .principles p { color: var(--text-2); }
  .founder-onboarding { font-size: 18px; font-weight: 600; color: var(--burgundy); margin-bottom: 24px; }
  .founder .cta-row { align-items: center; }

  .final-cta { text-align: center; }

  /* Footer */
  .site-footer { background: var(--burgundy-deep); color: var(--ivory); padding: 40px 0; }
  .footer-inner { display: flex; align-items: center; justify-content: space-between; gap: 24px; flex-wrap: wrap; }
  .site-footer .logo { height: 36px; width: auto; }
  .footer-links { list-style: none; display: flex; flex-wrap: wrap; gap: 8px 24px; font-size: 14px; }
  .footer-links a { color: var(--ivory); }
  .app-store { display: inline-flex; align-items: center; min-height: 44px; padding: 8px 16px; border-radius: var(--radius-s); background: #000; color: #fff; border: 1px solid rgba(255,255,255,0.4); font-size: 14px; font-weight: 600; text-decoration: none; }

  @media (max-width: 1024px) {
    .nav-links { display: none; }
    .steps { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 860px) {
    .hero-grid, .pillar-grid { grid-template-columns: 1fr; gap: 40px; }
    .pillar-reverse > :first-child { order: 0; }
    .pricing-table { display: none; }
    .pricing-cards { display: grid; }
    .trial-box { grid-template-columns: 1fr; }
    .trial-box .btn { justify-self: start; }
    .strip-inner { flex-direction: column; align-items: flex-start; }
  }

  @media (max-width: 600px) {
    body { font-size: 16px; }
    .container { padding: 0 16px; }
    .section { padding: 64px 0; }
    .hero { padding: 40px 0 56px; }
    .lead { font-size: 17px; }
    .sign-in { display: none; }
    .site-header .logo { height: 32px; }
    .steps { grid-template-columns: 1fr; }
    .step .shot-phone, .step .shot-laptop { aspect-ratio: 16 / 10; }
    .cta-row > *, .cta-row .btn { width: 100%; }
    .founder-origin { font-size: 18px; }
    .footer-inner { flex-direction: column; align-items: flex-start; }
  }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    .btn { transition: none; }
    .btn:hover { transform: none; }
  }
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
      </head>
      <body>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}

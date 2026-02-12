import type { Metadata } from 'next';
import { Providers } from '@/components/Providers';

export const metadata: Metadata = {
  title: 'Observly - Complete observations in 15 minutes',
  description: 'Voice recording, AI transcription, automatic framework categorization, and compliance tracking for school principals.',
};

const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600;1,700&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=JetBrains+Mono:wght@400;500;600&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-8px); }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(0.98); }
  }

  @keyframes scrollIndicator {
    0%, 100% { transform: translateY(0); opacity: 1; }
    50% { transform: translateY(8px); opacity: 0.5; }
  }

  /* Elegant theme (default) - slower, smoother animations */
  .animate-fade-in-up {
    animation: fadeInUp 0.7s ease-out forwards;
  }

  .animate-fade-in {
    animation: fadeIn 0.5s ease-out forwards;
  }

  .animate-scale-in {
    animation: scaleIn 0.6s ease-out forwards;
  }

  .animate-slide-in-right {
    animation: slideInRight 0.6s ease-out forwards;
  }

  .animate-float {
    animation: float 5s ease-in-out infinite;
  }

  .delay-100 { animation-delay: 0.1s; }
  .delay-200 { animation-delay: 0.2s; }
  .delay-300 { animation-delay: 0.3s; }
  .delay-400 { animation-delay: 0.4s; }
  .delay-500 { animation-delay: 0.5s; }
  .delay-600 { animation-delay: 0.6s; }

  .hover-lift {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .hover-lift:hover {
    transform: translateY(-4px);
  }

  /* Solid theme - snappier, faster animations */
  [data-theme="solid"] .animate-fade-in-up {
    animation: fadeInUp 0.4s ease-out forwards;
  }

  [data-theme="solid"] .animate-fade-in {
    animation: fadeIn 0.25s ease-out forwards;
  }

  [data-theme="solid"] .animate-scale-in {
    animation: scaleIn 0.35s ease-out forwards;
  }

  [data-theme="solid"] .animate-slide-in-right {
    animation: slideInRight 0.35s ease-out forwards;
  }

  [data-theme="solid"] .hover-lift {
    transition: transform 0.15s ease, box-shadow 0.15s ease;
  }

  [data-theme="solid"] .hover-lift:hover {
    transform: translateY(-2px);
  }

  [data-theme="solid"] .delay-100 { animation-delay: 0.05s; }
  [data-theme="solid"] .delay-200 { animation-delay: 0.1s; }
  [data-theme="solid"] .delay-300 { animation-delay: 0.15s; }
  [data-theme="solid"] .delay-400 { animation-delay: 0.2s; }
  [data-theme="solid"] .delay-500 { animation-delay: 0.25s; }
  [data-theme="solid"] .delay-600 { animation-delay: 0.3s; }

  .btn-primary {
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .btn-primary::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255,255,255,0.15);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.4s ease, height 0.4s ease;
  }

  .btn-primary:hover::after {
    width: 300px;
    height: 300px;
  }

  .section-reveal {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }

  .section-reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* Grain texture overlay */
  .grain-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9999;
    opacity: 0.025;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  }

  /* Form focus states */
  input:focus, select:focus, textarea:focus {
    outline: none;
    border-color: #C9A227 !important;
    box-shadow: 0 0 0 3px rgba(201, 162, 39, 0.12);
  }

  /* Selection styling */
  ::selection {
    background: rgba(201, 162, 39, 0.25);
    color: #1A1A1A;
  }

  /* Smooth card backgrounds */
  .card-elevated {
    background: linear-gradient(145deg, #FFFFFF 0%, #FAFAF7 100%);
  }

  /* Text gradient utility */
  .text-gradient {
    background: linear-gradient(135deg, #6B2D3C 0%, #C9A227 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #F5F4F0;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(107, 45, 60, 0.3);
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(107, 45, 60, 0.5);
  }

  /* ==================== MOBILE RESPONSIVE STYLES ==================== */

  /* Tablet: 1024px and below */
  @media (max-width: 1024px) {
    .hero-grid {
      grid-template-columns: 1fr !important;
      gap: 48px !important;
    }

    .principals-grid {
      grid-template-columns: repeat(2, 1fr) !important;
    }

    .pricing-grid {
      grid-template-columns: 1fr !important;
      max-width: 480px;
      margin-left: auto;
      margin-right: auto;
    }

    .pricing-grid > div {
      transform: none !important;
    }

    .footer-grid {
      grid-template-columns: 1fr 1fr !important;
      gap: 40px !important;
    }
  }

  /* Mobile: 768px and below */
  @media (max-width: 768px) {
    /* Navigation - completely hide desktop nav */
    .nav-links {
      display: none !important;
    }

    .nav-mobile {
      display: flex !important;
    }

    /* Hero section - more compact */
    .hero-section {
      padding-top: 90px !important;
      padding-bottom: 40px !important;
      min-height: auto !important;
    }

    .hero-grid {
      grid-template-columns: 1fr !important;
      gap: 32px !important;
      min-height: auto !important;
    }

    .hero-title {
      font-size: 28px !important;
      line-height: 1.2 !important;
      margin-bottom: 16px !important;
    }

    .hero-description {
      font-size: 15px !important;
      margin-bottom: 24px !important;
      line-height: 1.6 !important;
    }

    .hero-stats {
      flex-direction: row !important;
      gap: 16px !important;
      margin-bottom: 24px !important;
      justify-content: space-between !important;
    }

    .hero-stat-value {
      font-size: 22px !important;
    }

    .hero-stat-label {
      font-size: 11px !important;
    }

    .trust-badges {
      gap: 8px !important;
    }

    .trust-badges > div {
      padding: 6px 12px !important;
      font-size: 11px !important;
    }

    .scroll-indicator {
      display: none !important;
    }

    /* Section labels */
    .section-label {
      margin-bottom: 16px !important;
    }

    /* Section headers - much smaller */
    .section-title {
      font-size: 24px !important;
      line-height: 1.25 !important;
      margin-bottom: 12px !important;
    }

    .section-subtitle {
      font-size: 14px !important;
      line-height: 1.5 !important;
      margin-bottom: 32px !important;
    }

    /* Comparison section */
    .comparison-grid {
      grid-template-columns: 1fr 1fr !important;
      gap: 12px !important;
    }

    .comparison-card {
      padding: 20px 16px !important;
    }

    .comparison-card ul li {
      font-size: 13px !important;
      padding: 10px 0 !important;
    }

    .comparison-result {
      padding: 14px !important;
    }

    .comparison-result span:first-child {
      font-size: 22px !important;
    }

    /* Features section */
    .feature-tabs {
      gap: 6px !important;
      margin-bottom: 32px !important;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
      justify-content: flex-start !important;
      padding-bottom: 8px;
    }

    .feature-tabs::-webkit-scrollbar {
      display: none;
    }

    .feature-tab {
      padding: 8px 14px !important;
      font-size: 12px !important;
      white-space: nowrap;
      flex-shrink: 0;
    }

    .feature-tab span:first-child {
      font-size: 14px !important;
    }

    .feature-content {
      grid-template-columns: 1fr !important;
      padding: 20px !important;
      gap: 24px !important;
    }

    .feature-title {
      font-size: 22px !important;
      margin-bottom: 16px !important;
    }

    .feature-image-placeholder {
      height: 200px !important;
    }

    /* How it works - horizontal scroll on mobile */
    .how-it-works-grid {
      display: flex !important;
      overflow-x: auto !important;
      gap: 20px !important;
      padding-bottom: 16px !important;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
    }

    .how-it-works-grid::-webkit-scrollbar {
      display: none;
    }

    .how-it-works-grid > div {
      min-width: 240px !important;
      flex-shrink: 0 !important;
    }

    .how-it-works-icon {
      width: 60px !important;
      height: 60px !important;
      font-size: 24px !important;
      margin-bottom: 16px !important;
    }

    .how-it-works-step {
      width: 22px !important;
      height: 22px !important;
      font-size: 10px !important;
    }

    .how-it-works-title {
      font-size: 18px !important;
    }

    .how-it-works-desc {
      font-size: 13px !important;
    }

    /* Built by principals - 2 columns */
    .principals-grid {
      grid-template-columns: 1fr 1fr !important;
      gap: 12px !important;
    }

    .principal-card {
      padding: 20px 16px !important;
    }

    .principal-card .icon {
      font-size: 32px !important;
      margin-bottom: 12px !important;
    }

    .principal-card h3 {
      font-size: 14px !important;
    }

    .principal-card p {
      font-size: 12px !important;
    }

    /* Pricing - single column, compact */
    .pricing-grid {
      grid-template-columns: 1fr !important;
      gap: 16px !important;
      max-width: 100%;
    }

    .pricing-card {
      padding: 24px 20px !important;
    }

    .pricing-price {
      font-size: 36px !important;
    }

    .roi-box {
      padding: 20px 16px !important;
      font-size: 14px !important;
    }

    /* FAQ - compact */
    .faq-question {
      font-size: 14px !important;
      padding: 16px !important;
    }

    .faq-answer {
      padding: 0 16px 16px !important;
      font-size: 13px !important;
    }

    /* Final CTA */
    .cta-title {
      font-size: 26px !important;
    }

    .cta-description {
      font-size: 15px !important;
    }

    .cta-button {
      padding: 14px 28px !important;
      font-size: 14px !important;
    }

    /* Footer */
    .footer-grid {
      grid-template-columns: 1fr 1fr !important;
      gap: 24px !important;
    }

    .footer-grid > div:first-child {
      grid-column: 1 / -1 !important;
      text-align: center !important;
    }

    .footer-bottom {
      flex-direction: column !important;
      gap: 12px !important;
      text-align: center;
    }

    .footer-bottom > div {
      flex-direction: column !important;
      gap: 8px !important;
    }

    /* General spacing - more compact */
    .section-padding {
      padding: 48px 16px !important;
    }

    .container-padding {
      padding-left: 16px !important;
      padding-right: 16px !important;
    }

    /* Hide decorative elements */
    .hide-mobile {
      display: none !important;
    }
  }

  /* Small mobile: 480px and below - even more compact */
  @media (max-width: 480px) {
    .hero-title {
      font-size: 24px !important;
    }

    .section-title {
      font-size: 20px !important;
    }

    .hero-stat-value {
      font-size: 18px !important;
    }

    .hero-stats {
      gap: 8px !important;
    }

    .comparison-grid {
      grid-template-columns: 1fr !important;
    }

    .principals-grid {
      grid-template-columns: 1fr !important;
    }

    .footer-grid {
      grid-template-columns: 1fr !important;
      text-align: center;
    }

    .section-padding {
      padding: 40px 16px !important;
    }
  }
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
      </head>
      <body>
        <Providers>
          <div className="grain-overlay" aria-hidden="true" />
          {children}
        </Providers>
      </body>
    </html>
  );
}

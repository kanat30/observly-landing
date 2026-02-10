# Observly Landing Page

A high-converting landing page for Observly, built with Next.js 14 and React.

## Design

- **Color Palette:** "Midnight Academic" 
  - Deep Ocean Blue (#1B3A4B) - Primary
  - Sage Green (#4A7C28) - Success/Secondary
  - Warm Copper (#B87333) - Accent
  - Cream (#FAF8F5) - Background
  
- **Typography:**
  - Fraunces - Headlines (serif, distinctive)
  - Source Serif 4 - Body text (readable, professional)

## Structure

```
Hero Section
├── Headline: "Complete observations in 15 minutes, not 2 hours"
├── Stats: 90→15 min, 100+ hours saved, 24hr feedback
├── Trust badges: Danielson, Advance Compatible, No Student Data
└── Demo booking form

Problem/Solution Section
├── Before/After comparison
└── Pain point → solution mapping

Features Section (Tabbed)
├── Voice Recording
├── Compliance Calendar
├── Quick Walkthroughs
└── Conference Agendas

How It Works
├── Step 1: Record
├── Step 2: Review
└── Step 3: Export

Testimonials
└── 3 principal quotes (placeholder)

Pricing
├── Starter: $200/mo ($2,400/yr) - up to 30 teachers
├── Professional: $350/mo ($4,200/yr) - up to 60 teachers (Popular)
└── Enterprise: $500/mo ($6,000/yr) - unlimited

FAQ Section
└── 6 common questions

Final CTA
└── "Ready to reclaim your time?"

Footer
```

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Deploy to Vercel

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy (zero configuration needed)

Or use Vercel CLI:

```bash
npm i -g vercel
vercel
```

## TODO Before Launch

### Content
- [ ] Replace placeholder testimonials with real quotes from founding advisors
- [ ] Add actual app screenshots to features section
- [ ] Record 90-second demo video
- [ ] Write privacy policy page
- [ ] Write terms of service page

### Images Needed
- [ ] `/public/images/voice-recording.png` - App screenshot of recording
- [ ] `/public/images/compliance.png` - Compliance dashboard screenshot
- [ ] `/public/images/walkthrough.png` - Walkthrough mode screenshot
- [ ] `/public/images/conference.png` - Conference agenda screenshot
- [ ] `/public/images/testimonial-1.jpg` - Principal photo (or use initials)
- [ ] `/public/images/testimonial-2.jpg`
- [ ] `/public/images/testimonial-3.jpg`
- [ ] `/public/images/og-image.png` - Open Graph image (1200x630)
- [ ] `/public/favicon.ico`

### Integrations
- [ ] Connect form to email service (Resend, SendGrid, etc.)
- [ ] Add Google Analytics / Plausible
- [ ] Add Calendly or Cal.com for demo booking
- [ ] Set up Stripe checkout links in pricing CTAs

### SEO
- [ ] Update meta description
- [ ] Add Open Graph image
- [ ] Create sitemap.xml
- [ ] Submit to Google Search Console

## Form Integration Options

### Option 1: Formspree (Easiest)
```jsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: Resend API Route
Create `/app/api/demo/route.ts`:
```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, school, teachers } = await request.json();
  
  await resend.emails.send({
    from: 'Observly <noreply@observly.app>',
    to: 'you@youremail.com',
    subject: `New Demo Request: ${school}`,
    html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>School: ${school}</p><p>Teachers: ${teachers}</p>`,
  });
  
  return Response.json({ success: true });
}
```

### Option 3: Cal.com Embed
Replace form with embedded Cal.com widget for instant scheduling.

## Conversion Optimization Notes

1. **Single CTA focus:** "Book a Demo" throughout
2. **Social proof:** Stats in hero, testimonials, trust badges
3. **Address objections:** FAQ covers Edthena comparison, data privacy, offline mode
4. **Urgency:** "30-day free trial, no credit card required"
5. **ROI calculator:** Shows dollar value of time saved

## Mobile Responsive

The page is fully responsive. Key breakpoints:
- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: < 768px

## Performance Tips

1. Optimize images with Next.js Image component (when real images added)
2. Use WebP format for screenshots
3. Lazy load testimonial images
4. Consider adding ISR for any dynamic content

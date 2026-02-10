# Observly Subdomain Architecture Plan

## Overview

This document outlines the plan to restructure Observly into a Stripe-like experience with separate domains for marketing and application.

### Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           CURRENT STATE                                      │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│   observly.co ──────────────► Web App (React SPA)                           │
│                                    │                                         │
│                                    ▼                                         │
│                              [No auth?]                                      │
│                                    │                                         │
│                    ┌───────────────┴───────────────┐                        │
│                    ▼                               ▼                         │
│              /login page                    Redirect to /login              │
│                                                                              │
│   Landing Page ─────────────► Not deployed / separate project               │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘

                                    ▼

┌─────────────────────────────────────────────────────────────────────────────┐
│                           TARGET STATE                                       │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│   observly.co ──────────────► Landing Page (Next.js)                        │
│        │                           │                                         │
│        │                           ├── /#features                            │
│        │                           ├── /#pricing                             │
│        │                           ├── /#faq                                 │
│        │                           └── Demo booking form                     │
│        │                                                                     │
│        │  "Start Free Trial"       "Log In"                                 │
│        │         │                    │                                      │
│        ▼         ▼                    ▼                                      │
│   app.observly.co ─────────────► Web App (React SPA)                        │
│                                       │                                      │
│                                       ├── /signup ←── NEW!                   │
│                                       ├── /login                             │
│                                       ├── /dashboard (protected)             │
│                                       ├── /observations (protected)          │
│                                       └── /settings (protected)              │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Target Structure

| Domain | Purpose | Project |
|--------|---------|---------|
| `observly.co` | Marketing/Landing page | `observly-landing` (Next.js) |
| `app.observly.co` | Web application | `principal-observations/web` (Vite/React) |

---

## Phase 1: DNS & Vercel Configuration

### 1.1 Current State
- Web app deployed at `observly.co` (Vercel project: "observly")
- Landing page not yet deployed to production

### 1.2 Required DNS Changes

In your domain registrar (where observly.co is managed):

```
# Existing (will be updated)
observly.co         A     76.76.21.21      (Vercel)

# Add new subdomain
app.observly.co     CNAME cname.vercel-dns.com
```

### 1.3 Vercel Configuration

#### Step 1: Rename existing web app project domain
1. Go to Vercel Dashboard → Project "observly" → Settings → Domains
2. Add `app.observly.co` as a new domain
3. Once verified, remove `observly.co` from this project

#### Step 2: Deploy landing page
1. Create new Vercel project for `observly-landing`
2. Connect to the `observly-landing` repository/folder
3. Add `observly.co` as the production domain

#### Step 3: Verify SSL
Both domains should automatically get SSL certificates from Vercel.

---

## Phase 2: Code Changes - Landing Page

### 2.1 Navigation Updates

**File: `app/page.tsx`**

Update all app-related links to point to the subdomain:

| Current | Updated |
|---------|---------|
| `#demo` | `#demo` (stays on landing) |
| `#features` | `#features` (stays on landing) |
| `#pricing` | `#pricing` (stays on landing) |
| (implicit login) | `https://app.observly.co/login` |
| (implicit signup) | `https://app.observly.co/signup` |

### 2.2 Add Login/Signup CTAs to Navigation

Current navigation only has: Features, Pricing, FAQ, Book a Demo

Add:
- "Log In" button (ghost/outline style) → `https://app.observly.co/login`
- "Start Free Trial" button (primary CTA) → `https://app.observly.co/signup`

### 2.3 Pricing Section CTAs

Update pricing tier buttons:
- "Start Free Trial" → `https://app.observly.co/signup?plan=starter`
- "Start Free Trial" → `https://app.observly.co/signup?plan=professional`
- "Contact Us" → `mailto:sales@observly.co` or contact form

### 2.4 Footer Updates

Footer links to app routes should use full URLs:
- Privacy Policy → `https://app.observly.co/privacy` OR keep on landing
- Terms of Service → `https://app.observly.co/terms` OR keep on landing
- Support → `https://app.observly.co/support` OR dedicated landing page

---

## Phase 3: Code Changes - Web App

### 3.1 Add Sign-Up Flow (Critical)

Currently missing. Need to create:

#### New File: `src/pages/SignUpPage.tsx`
- Email input
- Password input (with confirmation)
- School name input
- Accept terms checkbox
- Creates user via Supabase Auth
- Creates user_profile with trial status

#### Update: `src/contexts/AuthContext.tsx`
Add `signUp` method:
```typescript
const signUp = async (email: string, password: string, metadata: { schoolName: string }) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { school_name: metadata.schoolName }
    }
  });
  return { data, error };
};
```

#### Update: `src/App.tsx`
Add route:
```typescript
<Route path="/signup" element={<SignUpPage />} />
```

### 3.2 Update Cross-References to Landing Page

**File: `src/pages/TrialExpiredPage.tsx`**
- Line 22: `window.open('https://observly.co/pricing', '_blank')`
  → Change to: `window.open('https://observly.co/#pricing', '_blank')`

**File: `src/pages/LoginPage.tsx`**
- Add "Don't have an account? Start free trial" link → `/signup`
- Add link to landing page in footer area

**File: `src/components/Layout.tsx`** (if exists)
- Logo click → `https://observly.co` (marketing) vs `/dashboard` (app home)

### 3.3 Environment Variables

Create/update `.env` files:

```env
# .env.production
VITE_APP_URL=https://app.observly.co
VITE_LANDING_URL=https://observly.co
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
```

### 3.4 Supabase Configuration

Update Supabase Auth settings:
1. Go to Supabase Dashboard → Authentication → URL Configuration
2. Update Site URL: `https://app.observly.co`
3. Update Redirect URLs:
   - `https://app.observly.co/reset-password`
   - `https://app.observly.co/login`
   - `https://app.observly.co/signup` (after email verification)

---

## Phase 4: Database Changes for Self-Service Signup

### 4.1 Existing Infrastructure (Already in Place)

You already have:
- **`handle_new_user()` trigger** (migration 044) - creates basic profile on signup
- **`trial_requests` table** (migration 004) - for manual approval flow
- **Trial status fields** on `user_profiles`: `trial_status`, `trial_start_date`, `trial_end_date`, `license_type`

### 4.2 Current Trigger (Needs Update)

Current `handle_new_user()` only sets basic fields:
```sql
-- Current (migration 044)
INSERT INTO public.user_profiles (id, full_name, created_at, updated_at)
VALUES (NEW.id, COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email), NOW(), NOW())
```

### 4.3 Updated Trigger for Self-Service Trial

Create new migration to update the trigger with trial activation:

**File: `supabase/migrations/063_self_service_signup_trial.sql`**

```sql
-- Migration: Enable self-service signup with automatic trial activation
-- Purpose: Update handle_new_user() to grant 14-day trial on signup

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.user_profiles (
    id,
    full_name,
    school_name,
    role,
    trial_status,
    trial_start_date,
    trial_end_date,
    license_type,
    created_at,
    updated_at
  ) VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email),
    COALESCE(NEW.raw_user_meta_data->>'school_name', ''),
    COALESCE(NEW.raw_user_meta_data->>'role', 'principal'),
    'active',                        -- Start with active trial
    NOW(),                           -- Trial starts now
    NOW() + INTERVAL '14 days',      -- 14-day trial
    'trial',                         -- License type
    NOW(),
    NOW()
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

COMMENT ON FUNCTION public.handle_new_user() IS
  'Creates user_profile with 14-day trial when new auth user signs up';
```

### 4.4 Sign-Up Flow Decision

**Option A: Keep Trial Request Flow (Current)**
- User submits trial request form
- Admin reviews and approves
- Admin creates user account manually
- More control, but friction for users

**Option B: Self-Service Signup (Recommended)**
- User signs up directly via Supabase Auth
- Trigger automatically creates profile with 14-day trial
- No admin intervention needed
- Lower friction, faster conversion

**Recommendation:** Implement Option B for public signups, keep Option A for enterprise/custom deals.

---

## Phase 5: Testing Checklist

### Landing Page (observly.co)
- [ ] Homepage loads correctly
- [ ] All anchor links work (#features, #pricing, #faq)
- [ ] "Log In" button → app.observly.co/login
- [ ] "Start Free Trial" button → app.observly.co/signup
- [ ] Pricing CTAs link to correct signup URLs
- [ ] Mobile responsiveness maintained

### Web App (app.observly.co)
- [ ] Login page loads and works
- [ ] Sign-up page loads and creates account
- [ ] New users get 14-day trial automatically
- [ ] Password reset emails use correct domain
- [ ] Logo/brand links to observly.co
- [ ] Trial expired page links to observly.co/#pricing
- [ ] Protected routes redirect to /login when unauthenticated

### Auth Flow
- [ ] Sign up → email verification (if enabled) → login
- [ ] Login → dashboard
- [ ] Forgot password → email → reset page → login
- [ ] Trial expiration → trial expired page

---

## Phase 6: Rollback Plan

If issues arise:

1. **Vercel:** Revert domain assignments
   - Remove app.observly.co from web app
   - Add observly.co back to web app

2. **DNS:** Remove app subdomain CNAME record

3. **Code:** Deploy previous versions via Vercel rollback

---

## Implementation Order

1. **Prepare code changes** (don't deploy yet)
   - Add SignUpPage to web app
   - Update AuthContext with signUp
   - Update cross-references in both projects

2. **Set up Supabase**
   - Add user creation trigger
   - Update auth redirect URLs

3. **DNS changes**
   - Add app.observly.co subdomain
   - Wait for propagation (up to 48 hours, usually minutes)

4. **Vercel deployment**
   - Deploy landing page to new project
   - Migrate web app domain to subdomain

5. **Verify & test**
   - Run through testing checklist
   - Monitor for errors

---

## Timeline Estimate

| Phase | Tasks | Duration |
|-------|-------|----------|
| Phase 1 | DNS & Vercel setup | 1-2 hours |
| Phase 2 | Landing page updates | 1-2 hours |
| Phase 3 | Web app updates + signup | 3-4 hours |
| Phase 4 | Database changes | 30 mins |
| Phase 5 | Testing | 1-2 hours |

**Total: ~8-10 hours of work**

---

## Questions to Resolve

1. **Email verification:** Should new signups require email verification before accessing the app?
   - Recommended: Yes, for security

2. **Plan selection:** Should signup capture intended plan (Starter/Professional/Enterprise)?
   - Can use query param: `/signup?plan=professional`

3. **Legal pages:** Should Terms/Privacy live on landing page or app?
   - Recommendation: Keep on app (app.observly.co/terms) as they're account-related

4. **Demo booking:** Keep form on landing page or move to dedicated page?
   - Recommendation: Keep embedded, simple conversion path

---

## Quick Reference: Files to Modify

### Landing Page (`observly-landing`)

| File | Changes |
|------|---------|
| `app/page.tsx` | Add Login/Signup CTAs to nav, update pricing CTAs to app.observly.co |
| `app/layout.tsx` | No changes needed |
| `package.json` | No changes needed |

### Web App (`principal-observations/web`)

| File | Changes |
|------|---------|
| `src/App.tsx` | Add `/signup` route |
| `src/pages/SignUpPage.tsx` | **NEW FILE** - Self-service registration |
| `src/contexts/AuthContext.tsx` | Add `signUp` method |
| `src/pages/LoginPage.tsx` | Add "Create account" link |
| `src/pages/TrialExpiredPage.tsx` | Update observly.co/pricing → observly.co/#pricing |
| `.env.production` | Add `VITE_LANDING_URL=https://observly.co` |

### Database (`supabase/migrations`)

| File | Changes |
|------|---------|
| `063_self_service_signup_trial.sql` | **NEW FILE** - Update handle_new_user() trigger |

### Infrastructure

| Service | Changes |
|---------|---------|
| DNS Provider | Add CNAME for app.observly.co |
| Vercel | Create new project for landing, move web app to subdomain |
| Supabase | Update Site URL and redirect URLs in Auth settings |

---

## User Journey: New Self-Service Signup

```
┌──────────────────┐     ┌──────────────────┐     ┌──────────────────┐
│  observly.co     │     │ app.observly.co  │     │    Supabase      │
│  (Landing)       │     │    /signup       │     │     Auth         │
└────────┬─────────┘     └────────┬─────────┘     └────────┬─────────┘
         │                        │                        │
         │  Click "Start Trial"   │                        │
         │───────────────────────►│                        │
         │                        │                        │
         │                        │  User fills form:      │
         │                        │  - Name                │
         │                        │  - Email               │
         │                        │  - Password            │
         │                        │  - School name         │
         │                        │                        │
         │                        │  Submit                │
         │                        │───────────────────────►│
         │                        │                        │
         │                        │                        │ supabase.auth.signUp()
         │                        │                        │ with user_metadata
         │                        │                        │
         │                        │                        │ ┌─────────────────┐
         │                        │                        │ │ Trigger fires:  │
         │                        │                        │ │ handle_new_user │
         │                        │                        │ │                 │
         │                        │                        │ │ Creates profile │
         │                        │                        │ │ with 14-day     │
         │                        │                        │ │ trial status    │
         │                        │                        │ └─────────────────┘
         │                        │                        │
         │                        │◄───────────────────────│ Success + session
         │                        │                        │
         │                        │  Redirect to           │
         │                        │  /dashboard            │
         │                        │                        │
         │                        ▼                        │
         │              ┌──────────────────┐               │
         │              │ User is logged   │               │
         │              │ in with active   │               │
         │              │ 14-day trial     │               │
         │              └──────────────────┘               │
         │                                                 │
```

---

## Next Steps After Plan Approval

1. **Implement sign-up page** in web app (Phase 3.1)
2. **Create database migration** for updated trigger (Phase 4.3)
3. **Update landing page** with app links (Phase 2)
4. **Configure DNS** and Vercel (Phase 1)
5. **Deploy and test** (Phase 5)

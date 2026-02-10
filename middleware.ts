import { NextRequest, NextResponse } from 'next/server';

// Default region when geo-detection fails
const DEFAULT_REGION = 'NY';

// Cookie name for persisted region preference
const REGION_COOKIE = 'observly-region';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Detection priority:
  // 1. URL parameter ?region=TX (manual override for testing/sales)
  // 2. Cookie observly-region (persisted preference)
  // 3. Vercel geo headers x-vercel-ip-country-region (auto-detect)
  // 4. Default to NY (primary market)

  let region: string;

  // 1. Check URL parameter first (highest priority)
  const urlRegion = request.nextUrl.searchParams.get('region');
  if (urlRegion) {
    region = urlRegion.toUpperCase();
    // Set cookie to persist this preference
    response.cookies.set(REGION_COOKIE, region, {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/',
      sameSite: 'lax',
    });
  } else {
    // 2. Check cookie for persisted preference
    const cookieRegion = request.cookies.get(REGION_COOKIE)?.value;
    if (cookieRegion) {
      region = cookieRegion.toUpperCase();
    } else {
      // 3. Check Vercel geo headers
      const vercelRegion = request.headers.get('x-vercel-ip-country-region');
      if (vercelRegion) {
        region = vercelRegion.toUpperCase();
      } else {
        // 4. Default to NY
        region = DEFAULT_REGION;
      }
    }
  }

  // Set the region header for server components to read
  response.headers.set('x-observly-region', region);

  return response;
}

export const config = {
  matcher: ['/'],
};

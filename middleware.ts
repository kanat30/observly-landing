import { NextRequest, NextResponse } from 'next/server';

// Region is pinned to NY (NYC first). Geo headers, ?region= and the region cookie are ignored;
// the other variant files in lib/content/variants/ are kept but not served.
const PINNED_REGION = 'NY';

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-observly-region', PINNED_REGION);

  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ['/'],
};

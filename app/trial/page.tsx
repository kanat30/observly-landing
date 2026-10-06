import { redirect } from 'next/navigation';
import { urls } from '@/lib/content/base';

// The iPhone app's "request trial" opens observly.co/trial (PRODUCT_TRUTH §8).
export default function TrialRedirect() {
  redirect(urls.signup);
}

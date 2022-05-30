import { get } from './utils';

export async function getPayoutDashboardApi() {
  return get(`/payouts/dashboard`);
}

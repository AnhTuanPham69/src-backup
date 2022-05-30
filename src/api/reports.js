import { get } from './utils';

export const getOrderChartApi = (data) => {
  return get(`/report/orderChart`, data);
}

export const getBestSaleSubscriptionPlanApi = () => {
  return get(`/report/bestSaleSubscriptionPlan`);
}

export const getRevenueChartApi = (data) => {
  return get(`/report/revenueChart`, data);
}

export const getTopRankingsApi = () => {
  return get(`/report/topRankings`);
}

export const getUsersApi = () => {
  return get(`/report/users`);
}
import { createSelector } from 'reselect';

const billingHistories = state => state?.orders?.currentData?.subscription?.subscriptionBillingHistories;
const programPlanSubscriptionData = state => state?.orders?.currentData?.programPlanSubscriptionData;

export const getBillingHistories = createSelector(
  [billingHistories, programPlanSubscriptionData],
  (histories, subscriptionData) => {
    return histories?.map(history => ({
      ...history,
      name: subscriptionData?.name,
    }))
  },
)

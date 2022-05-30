import { makeActions } from '@redux/crudCreator/actions';

export const MODEL_NAME = 'subscriptionPlans';
export const subscriptionPlansActions = makeActions(MODEL_NAME, 'program-plan-subscriptions');

export const getAllSubscriptionPlans = subscriptionPlansActions.getAll;
export const editSubscriptionPlans = subscriptionPlansActions.edit;
export const createSubscriptionPlans = subscriptionPlansActions.create;
export const getByIdSubscriptionPlans = subscriptionPlansActions.getDataById;

import { makeActions } from '@redux/crudCreator/actions';

export const MODEL_NAME = 'orders';
export const ordersActions = makeActions(MODEL_NAME);

export const getAllOrders = ordersActions.getAll;
export const editOrders = ordersActions.edit;
export const createOrders = ordersActions.create;
export const getByIdOrders = ordersActions.getDataById;
export const clearCurrentOrders = ordersActions.clearCurrent;
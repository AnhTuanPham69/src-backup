import { makeActions } from '@redux/crudCreator/actions';

export const MODEL_NAME = 'customers';
export const customersActions = makeActions(MODEL_NAME);

export const getAllCustomers = customersActions.getAll;
export const editCustomers = customersActions.edit;
export const createCustomers = customersActions.create;
export const clearCurrentCustomer = customersActions.clearCurrent;
export const getByIdCustomers = customersActions.getDataById;
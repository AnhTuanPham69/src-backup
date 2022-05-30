import { makeActions } from '@redux/crudCreator/actions';

export const MODEL_NAME = 'businesses';
export const businessesActions = makeActions(MODEL_NAME);

export const getAllBusinesses = businessesActions.getAll;
export const editBusinesses = businessesActions.edit;
export const createBusinesses = businessesActions.create;
export const getByIdBusinesses = businessesActions.getDataById;
export const clearCurrentBusinesses = businessesActions.clearCurrent;

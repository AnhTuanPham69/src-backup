import { makeActions } from '@redux/crudCreator/actions';

export const MODEL_NAME = 'serviceTypes';
export const serviceTypesActions = makeActions(MODEL_NAME);

export const getAllServiceTypes = serviceTypesActions.getAll;
export const editServiceTypes = serviceTypesActions.edit;
export const createServiceTypes = serviceTypesActions.create;
export const getByIdServiceTypes = serviceTypesActions.getDataById;

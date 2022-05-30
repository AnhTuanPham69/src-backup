import { makeActions } from '@redux/crudCreator/actions';

export const MODEL_NAME = 'services';
export const servicesActions = makeActions(MODEL_NAME);

export const getAllServices = servicesActions.getAll;
export const editServices = servicesActions.edit;
export const createServices = servicesActions.create;
export const getByIdServices = servicesActions.getDataById;

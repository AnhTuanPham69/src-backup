import { makeActions } from '@redux/crudCreator/actions';

export const MODEL_NAME = 'clientResources';
export const clientResourcesActions = makeActions(MODEL_NAME);

export const getAllClientResources = clientResourcesActions.getAll;
export const editClientResources = clientResourcesActions.edit;
export const createClientResources = clientResourcesActions.create;
export const getByIdClientResources = clientResourcesActions.getDataById;

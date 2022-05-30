import { makeActions } from '@redux/crudCreator/actions';

export const MODEL_NAME = 'gets';
export const getsActions = makeActions(MODEL_NAME);

export const getAllGets = getsActions.getAll;
export const editGets = getsActions.edit;
export const createGets = getsActions.create;
export const getByIdGets = getsActions.getDataById;

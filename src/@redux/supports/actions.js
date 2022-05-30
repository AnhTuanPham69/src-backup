import { makeActions } from '@redux/crudCreator/actions';

export const MODEL_NAME = 'supports';
export const supportsActions = makeActions(MODEL_NAME);

export const getAllSupports = supportsActions.getAll;
export const editSupports = supportsActions.edit;
export const createSupports = supportsActions.create;
export const getByIdSupports = supportsActions.getDataById;

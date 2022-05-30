import { makeActions } from '@redux/crudCreator/actions';

export const MODEL_NAME = 'sectors';
export const sectorsActions = makeActions(MODEL_NAME);

export const getAllSectors = sectorsActions.getAll;
export const editSectors = sectorsActions.edit;
export const createSectors = sectorsActions.create;
export const getByIdSectors = sectorsActions.getDataById;

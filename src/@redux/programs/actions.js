import { makeActions } from '@redux/crudCreator/actions';

export const MODEL_NAME = 'programs';
export const programsActions = makeActions(MODEL_NAME);

export const getAllPrograms = programsActions.getAll;
export const editPrograms = programsActions.edit;
export const createPrograms = programsActions.create;
export const getByIdPrograms = programsActions.getDataById;
export const deletePrograms = programsActions.del;

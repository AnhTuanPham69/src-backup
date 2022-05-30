import { makeActions } from '@redux/crudCreator/actions';

export const MODEL_NAME = 'mainProjects';
export const mainProjectsActions = makeActions(MODEL_NAME);

export const getAllMainProjects = mainProjectsActions.getAll;
export const editMainProjects = mainProjectsActions.edit;
export const createMainProjects = mainProjectsActions.create;
export const getByIdMainProjects = mainProjectsActions.getDataById;

import { makeActions } from '@redux/crudCreator/actions';

export const MODEL_NAME = 'projectThemes';
export const projectThemesActions = makeActions(MODEL_NAME);

export const getAllProjectThemes = projectThemesActions.getAll;
export const editProjectThemes = projectThemesActions.edit;
export const createProjectThemes = projectThemesActions.create;
export const getByIdProjectThemes = projectThemesActions.getDataById;

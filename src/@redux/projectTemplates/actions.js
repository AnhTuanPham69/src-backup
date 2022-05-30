import { makeActions } from '@redux/crudCreator/actions';

export const MODEL_NAME = 'projectTemplates';
export const projectTemplatesActions = makeActions(MODEL_NAME);

export const getAllProjectTemplates = projectTemplatesActions.getAll;
export const editProjectTemplates = projectTemplatesActions.edit;
export const createProjectTemplates = projectTemplatesActions.create;
export const getByIdProjectTemplates = projectTemplatesActions.getDataById;

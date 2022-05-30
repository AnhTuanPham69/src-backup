import { makeActions } from '@redux/crudCreator/actions';

export const MODEL_NAME = 'mainProjectTemplates';
export const mainProjectTemplatesActions = makeActions(MODEL_NAME);

export const getAllMainProjectTemplates = mainProjectTemplatesActions.getAll;
export const editMainProjectTemplates = mainProjectTemplatesActions.edit;
export const createMainProjectTemplates = mainProjectTemplatesActions.create;
export const getByIdMainProjectTemplates =
  mainProjectTemplatesActions.getDataById;

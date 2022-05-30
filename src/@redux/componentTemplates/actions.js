import { makeActions } from '@redux/crudCreator/actions';

export const MODEL_NAME = 'componentTemplates';
export const componentTemplatesActions = makeActions(MODEL_NAME);

export const getAllComponentTemplates = componentTemplatesActions.getAll;
export const editComponentTemplates = componentTemplatesActions.edit;
export const createComponentTemplates = componentTemplatesActions.create;
export const getByIdComponentTemplates = componentTemplatesActions.getDataById;

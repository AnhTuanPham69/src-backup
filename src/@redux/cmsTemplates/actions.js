import { makeActions } from '@redux/crudCreator/actions';

export const MODEL_NAME = 'cmsTemplates';
export const cmsTemplatesActions = makeActions(MODEL_NAME);

export const getAllCmsTemplates = cmsTemplatesActions.getAll;
export const editCmsTemplates = cmsTemplatesActions.edit;
export const createCmsTemplates = cmsTemplatesActions.create;
export const getByIdCmsTemplates = cmsTemplatesActions.getDataById;

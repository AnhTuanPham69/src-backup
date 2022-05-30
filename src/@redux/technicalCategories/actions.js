import { makeActions } from '@redux/crudCreator/actions';

export const MODEL_NAME = 'technicalCategories';
export const technicalCategoriesActions = makeActions(MODEL_NAME);

export const getAllTechnicalCategories = technicalCategoriesActions.getAll;
export const editTechnicalCategories = technicalCategoriesActions.edit;
export const createTechnicalCategories = technicalCategoriesActions.create;
export const getByIdTechnicalCategories =
  technicalCategoriesActions.getDataById;

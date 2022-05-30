import { makeActions } from '@redux/crudCreator/actions';

export const MODEL_NAME = 'categories';
export const categoriesActions = makeActions(MODEL_NAME);

export const getAllCategories = categoriesActions.getAll;
export const editCategories = categoriesActions.edit;
export const createCategories = categoriesActions.create;
export const getByIdCategories = categoriesActions.getDataById;

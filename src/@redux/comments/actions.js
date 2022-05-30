import { makeActions } from '@redux/crudCreator/actions';

export const MODEL_NAME = 'comments';
export const commentsActions = makeActions(MODEL_NAME);

export const getAllComments = commentsActions.getAll;
export const editComments = commentsActions.edit;
export const createComments = commentsActions.create;
export const getByIdComments = commentsActions.getDataById;

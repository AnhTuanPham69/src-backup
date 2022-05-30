import { makeActions } from '@redux/crudCreator/actions';

export const MODEL_NAME = 'todos';
export const todosActions = makeActions(MODEL_NAME);

export const getAllTodos = todosActions.getAll;
export const editTodos = todosActions.edit;
export const createTodos = todosActions.create;
export const getByIdTodos = todosActions.getDataById;

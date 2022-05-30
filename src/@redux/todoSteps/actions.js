import { makeActions } from '@redux/crudCreator/actions';

export const MODEL_NAME = 'todoSteps';
export const todoStepsActions = makeActions(MODEL_NAME);

export const getAllTodoSteps = todoStepsActions.getAll;
export const editTodoSteps = todoStepsActions.edit;
export const createTodoSteps = todoStepsActions.create;
export const getByIdTodoSteps = todoStepsActions.getDataById;
export const clearCurrentTodoSteps = todoStepsActions.clearCurrent;

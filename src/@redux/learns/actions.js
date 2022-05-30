import { makeActions } from '@redux/crudCreator/actions';

export const MODEL_NAME = 'learns';
export const learnsActions = makeActions(MODEL_NAME);

export const getAllLearns = learnsActions.getAll;
export const editLearns = learnsActions.edit;
export const createLearns = learnsActions.create;
export const getByIdLearns = learnsActions.getDataById;

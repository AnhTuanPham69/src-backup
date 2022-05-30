import { makeActions } from '@redux/crudCreator/actions';

export const MODEL_NAME = 'questionnaires';
export const questionnairesActions = makeActions(MODEL_NAME);

export const getAllQuestionnaires = questionnairesActions.getAll;
export const editQuestionnaires = questionnairesActions.edit;
export const createQuestionnaires = questionnairesActions.create;
export const deleteQuestionnaires = questionnairesActions.del;
export const getByIdQuestionnaires = questionnairesActions.getDataById;

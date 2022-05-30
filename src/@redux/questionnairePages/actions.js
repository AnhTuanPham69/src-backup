import { makeActions } from '@redux/crudCreator/actions';

export const MODEL_NAME = 'questionnairePages';
export const questionnairePagesActions = makeActions(MODEL_NAME);

export const getAllQuestionnairePages = questionnairePagesActions.getAll;
export const editQuestionnairePages = questionnairePagesActions.edit;
export const createQuestionnairePages = questionnairePagesActions.create;
export const getByIdQuestionnairePages = questionnairePagesActions.getDataById;

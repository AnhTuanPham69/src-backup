import { makeActions } from '@redux/crudCreator/actions';

export const MODEL_NAME = 'activities';
export const activitiesActions = makeActions(MODEL_NAME);

export const getAllActivities = activitiesActions.getAll;
export const editActivities = activitiesActions.edit;
export const createActivities = activitiesActions.create;
export const getByIdActivities = activitiesActions.getDataById;

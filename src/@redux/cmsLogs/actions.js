import { makeActions } from '@redux/crudCreator/actions';

export const MODEL_NAME = 'cmsLogs';
export const cmsLogsActions = makeActions(MODEL_NAME);

export const getAllCmsLogs = cmsLogsActions.getAll;
export const editCmsLogs = cmsLogsActions.edit;
export const createCmsLogs = cmsLogsActions.create;
export const getByIdCmsLogs = cmsLogsActions.getDataById;

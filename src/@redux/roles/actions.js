import { makeActions } from '@redux/crudCreator/actions';

export const MODEL_NAME = 'roles';
export const rolesActions = makeActions(MODEL_NAME);

export const getAllRoles = rolesActions.getAll;
export const editRoles = rolesActions.edit;
export const createRoles = rolesActions.create;
export const getByIdRoles = rolesActions.getDataById;

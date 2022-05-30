import { makeActions } from '@redux/crudCreator/actions';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiWrapper } from 'utils/reduxUtils';
import { updateLocaleApi } from 'api/user';

export const MODEL_NAME = 'users';
export const usersActions = makeActions(MODEL_NAME);

export const getAllUsers = usersActions.getAll;
export const editUsers = usersActions.edit;
export const createUsers = usersActions.create;
export const getByIdUsers = usersActions.getDataById;
export const clearCurrentUsers = usersActions.clearCurrent;

export const updateLocale = createAsyncThunk(
  'users/updateLocale',
  async (payload, thunkAPI) => {
    try {
      const response = await apiWrapper({}, updateLocaleApi, payload);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
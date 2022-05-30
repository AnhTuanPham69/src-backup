import { makeActions } from '@redux/crudCreator/actions';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteResourceByIds } from 'api/resources';
import { apiWrapper } from 'utils/reduxUtils';


export const MODEL_NAME = 'resources';
export const resourcesActions = makeActions(MODEL_NAME);

export const getAllResources = resourcesActions.getAll;
export const editResources = resourcesActions.edit;
export const createResources = resourcesActions.create;
export const deleteResources = resourcesActions.del;
export const getByIdResources = resourcesActions.getDataById;

export const deleteResourcesById = createAsyncThunk(
  'config/getStartUpSummary',
  async (payload, thunkAPI) => {
    try {
      const response = await apiWrapper(
        {},
        deleteResourceByIds,
        payload,
      )
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
)
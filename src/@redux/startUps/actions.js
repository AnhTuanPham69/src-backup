import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  // getCurrentProgramsApi,
  getProgramPhasesApi,
  updateStartUpApi,
} from 'api/startUps';
import { makeActions } from '@redux/crudCreator/actions';
import { apiWrapper } from 'utils/reduxUtils';

export const updateStartUp = createAsyncThunk(
  'startUps/updateStartUp',
  async (payload, thunkAPI) => {
    try {
      const { data } = payload || {};
      const response = await apiWrapper(
        {},
        updateStartUpApi,
        data,
      )
      return {
        data: response,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
)

export const getProgramPhases = createAsyncThunk(
  'startUps/getProgramPhases',
  async (payload, thunkAPI) => {
    try {
      const response = await apiWrapper(
        {},
        getProgramPhasesApi,
        payload,
      )
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
)

export const clearProgramPhases = createAsyncThunk(
  'startUps/clearProgramPhases',
  () => {
    return {}
  },
)

export const MODEL_NAME = 'startUps';
export const startUpsActions = makeActions(MODEL_NAME);

export const getAllStartUps = startUpsActions.getAll;
export const editStartUps = startUpsActions.edit;
export const createStartUps = startUpsActions.create;
export const getByIdStartUps = startUpsActions.getDataById;

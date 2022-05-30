import { createAsyncThunk } from '@reduxjs/toolkit';
import { makeActions } from '@redux/crudCreator/actions';

export const MODEL_NAME = 'onboardings';
export const onboardingsActions = makeActions(MODEL_NAME);

export const getAllOnboardings = onboardingsActions.getAll;
export const editOnboardings = onboardingsActions.edit;
export const createOnboardings = onboardingsActions.create;
export const getByIdOnboardings = onboardingsActions.getDataById;
export const deleteOnboardings = onboardingsActions.del;

export const updateStatus = createAsyncThunk(
  'onboardings/updateStatus',
  async (payload, thunkAPI) => {
    try {
      return payload;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
)
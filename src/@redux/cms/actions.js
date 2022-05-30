import { createAsyncThunk } from '@reduxjs/toolkit';
import { makeActions } from '@redux/crudCreator/actions';

export const MODEL_NAME = 'cms';
export const cmsActions = makeActions(MODEL_NAME);

export const setSelectedContent = createAsyncThunk(
  'auth/setSelectedContent',
  async (payload, thunkAPI) => {
    try {
      return payload;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

export const cleanCMSData = createAsyncThunk(
  'auth/cleanCMSData',
  async (payload, thunkAPI) => {
    try {
      return payload;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

export const setCMSData = createAsyncThunk(
  'auth/setCMSData',
  async (payload, thunkAPI) => {
    try {
      return payload;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

export const setEditorData = createAsyncThunk(
  'auth/setEditorData',
  async (payload, thunkAPI) => {
    try {
      return payload;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

export const getAllCms = cmsActions.getAll;
export const editCms = cmsActions.edit;
export const createCms = cmsActions.create;
export const getByIdCms = cmsActions.getDataById;

export default cmsActions;

import { createAsyncThunk } from '@reduxjs/toolkit';
import { makeActions } from '@redux/crudCreator/actions';

export const MODEL_NAME = 'periods';
export const periodsActions = makeActions(MODEL_NAME);

export const getAllPeriods = periodsActions.getAll;
export const editPeriods = periodsActions.edit;
export const createPeriods = periodsActions.create;
export const getByIdPeriods = periodsActions.getDataById;

export const clearData = createAsyncThunk(
  'periods/clearData',
  (payload) => {
    return payload
  },
)
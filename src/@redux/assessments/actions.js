import { makeActions } from '@redux/crudCreator/actions';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiWrapper } from 'utils/reduxUtils';
import {
  getAssessmentsApi,
  getAssessmentsQuestionApi,
  getQuestionnairesApi,
  getInfoPaymentsApi,
} from 'api/assessments';

export const MODEL_NAME = 'assessments';
export const assessmentsActions = makeActions(MODEL_NAME);

export const getAllAssessments = assessmentsActions.getAll;
export const editAssessments = assessmentsActions.edit;
export const createAssessments = assessmentsActions.create;
export const deleteAssessments = assessmentsActions.del;
export const getByIdAssessments = assessmentsActions.getDataById;

export const getAssessments = createAsyncThunk(
  'assessments/getAssessments',
  async (payload, thunkAPI) => {
    try {
      const response = await apiWrapper(
        {},
        getAssessmentsApi,
        payload?.id,
      )
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const getAssessmentsQuestion = createAsyncThunk(
  'assessments/getAssessmentsQuestion',
  async (payload, thunkAPI) => {
    try {
      const response = await apiWrapper(
        {},
        getAssessmentsQuestionApi,
        payload?.id,
      )

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const getQuestionnaires = createAsyncThunk(
  'assessments/getQuestionnaires',
  async (payload, thunkAPI) => {
    try {
      const response = await apiWrapper(
        {},
        getQuestionnairesApi,
        payload?.id,
      )

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const getInfoPayments = createAsyncThunk(
  'assessments/getInfoPayments',
  async (payload, thunkAPI) => {
    try {
      const response = await apiWrapper(
        {},
        getInfoPaymentsApi,
        payload?.id,
        payload?.orderBy,
      )
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
)
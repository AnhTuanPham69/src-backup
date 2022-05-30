import { makeActions } from '@redux/crudCreator/actions';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { generateCMSApi, getSelectedPhasesApi } from 'api/programPhases';
import { apiWrapper } from 'utils/reduxUtils';
import i18n from 'configs/language'; 

export const MODEL_NAME = 'programPhases';
export const programPhasesActions = makeActions(MODEL_NAME);

export const getAllProgramPhases = programPhasesActions.getAll;
export const editProgramPhases = programPhasesActions.edit;
export const createProgramPhases = programPhasesActions.create;
export const getByIdProgramPhases = programPhasesActions.getDataById;
export const clearFilterProgramPhases = programPhasesActions.clearFilter;

export const generateCMS = createAsyncThunk(
  'startUps/generateCMS',
  async (payload, thunkAPI) => {
    try {
      const response = await apiWrapper(
        {
          successDescription: i18n.t('programs.genCmsSuccessMessage'),
          isShowSuccessNoti: true,
        },
        generateCMSApi,
        payload,
      )
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
)

export const getSelectedPhases = createAsyncThunk(
  'startUps/getSelectedPhases',
  async (payload, thunkAPI) => {
    try {
      const response = await apiWrapper(
        {},
        getSelectedPhasesApi,
      )
      return response?.items?.map(item => item?.id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
)
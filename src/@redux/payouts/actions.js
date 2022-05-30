import { makeActions } from '@redux/crudCreator/actions';
import { getPayoutDashboardApi } from 'api/payouts';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiWrapper } from 'utils/reduxUtils';
import { setLoading } from '@redux/loading/slice';

export const MODEL_NAME = 'payouts';
export const payoutsActions = makeActions(MODEL_NAME);

export const getAllPayouts = payoutsActions.getAll;
export const editPayouts = payoutsActions.edit;
export const createPayouts = payoutsActions.create;
export const getByIdPayouts = payoutsActions.getDataById;

export const getPayoutDashboard = createAsyncThunk(
  'payouts/getPayoutDashboard',
  async (payload, thunkAPI) => {
    try {
      thunkAPI.dispatch(
        setLoading({
          payoutSummary: true,
        }),
      );
      const response = await apiWrapper({}, getPayoutDashboardApi);
      if (response.totalBalance) {
        thunkAPI.dispatch(
          setLoading({
            payoutSummary: false,
          }),
        );
      }
      return response;
    } catch (error) {
      thunkAPI.dispatch(
        setLoading({
          payoutSummary: false,
        }),
      );
      return thunkAPI.rejectWithValue(error);
    }
  },
);

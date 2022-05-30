import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getOrderChartApi,
  getBestSaleSubscriptionPlanApi,
  getRevenueChartApi,
  getUsersApi,
  getTopRankingsApi,
} from 'api/reports';
import { apiWrapper } from 'utils/reduxUtils';
import { setLoading } from '@redux/loading/slice';

export const getOrderChart = createAsyncThunk(
  'reports/getOrderChart',
  async (payload, thunkAPI) => {
    try {
      thunkAPI.dispatch(
        setLoading({
          orderChart: true,
        }),
      );
      const response = await apiWrapper({}, getOrderChartApi, payload);
      thunkAPI.dispatch(
        setLoading({
          orderChart: false,
        }),
      );
      return response;
    } catch (error) {
      thunkAPI.dispatch(
        setLoading({
          orderChart: false,
        }),
      );
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const getBestSaleSubscriptionPlan = createAsyncThunk(
  'reports/getBestSaleSubscriptionPlan',
  async (payload, thunkAPI) => {
    try {
      thunkAPI.dispatch(
        setLoading({
          bestSaleTable: true,
        }),
      );
      const response = await apiWrapper({}, getBestSaleSubscriptionPlanApi);
      thunkAPI.dispatch(
        setLoading({
          bestSaleTable: false,
        }),
      );
      return response;
    } catch (error) {
      thunkAPI.dispatch(
        setLoading({
          bestSaleTable: false,
        }),
      );
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const getRevenueChart = createAsyncThunk(
  'reports/getRevenueChart',
  async (payload, thunkAPI) => {
    try {
      thunkAPI.dispatch(
        setLoading({
          revenueChart: true,
        }),
      );
      const response = await apiWrapper({}, getRevenueChartApi, payload);
      thunkAPI.dispatch(
        setLoading({
          revenueChart: false,
        }),
      );
      return response;
    } catch (error) {
      thunkAPI.dispatch(
        setLoading({
          revenueChart: false,
        }),
      );
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const getUsers = createAsyncThunk(
  'reports/getUsers',
  async (payload, thunkAPI) => {
    try {
      thunkAPI.dispatch(
        setLoading({
          userTable: true,
        }),
      );
      const response = await apiWrapper({}, getUsersApi);
      thunkAPI.dispatch(
        setLoading({
          userTable: false,
        }),
      );
      return response;
    } catch (error) {
      thunkAPI.dispatch(
        setLoading({
          userTable: false,
        }),
      );
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const getTopRankings = createAsyncThunk(
  'reports/getTopRankings',
  async (payload, thunkAPI) => {
    try {
      thunkAPI.dispatch(
        setLoading({
          rankingChart: true,
        }),
      );
      const response = await apiWrapper({}, getTopRankingsApi);
      thunkAPI.dispatch(
        setLoading({
          rankingChart: false,
        }),
      );
      return response;
    } catch (error) {
      thunkAPI.dispatch(
        setLoading({
          rankingChart: false,
        }),
      );
      return thunkAPI.rejectWithValue(error);
    }
  },
);

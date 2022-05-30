import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getConfigApi,
  getSummariesApi,
  getRevenueApi,
  getGlobalSaleApi,
  getSummariesCustomersApi,
  getPopularProductApi,
  getStartUpSummaryApi,
  getProgramSummaryApi,
  getUserReportApi,
  getStartUpReportApi,
} from 'api/configs';
import { setLoading } from '@redux/loading/slice';
// import api
import { apiWrapper } from 'utils/reduxUtils';

export const getStartUpSummary = createAsyncThunk(
  'config/getStartUpSummary',
  async (payload, thunkAPI) => {
    try {
      const response = await apiWrapper(
        {},
        getStartUpSummaryApi,
      )
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
)
export const getUserReport = createAsyncThunk(
  'config/getUserReport',
  async (payload, thunkAPI) => {
    try {
      const response = await apiWrapper(
        {},
        getUserReportApi,
        payload,
      )
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
)

export const getStartUpReport = createAsyncThunk(
  'config/getStartUpReport',
  async (payload, thunkAPI) => {
    try {
      const response = await apiWrapper(
        {},
        getStartUpReportApi,
        payload,
      )
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
)

export const getProgramSummary = createAsyncThunk(
  'config/getProgramSummary',
  async (payload, thunkAPI) => {
    try {
      const response = await apiWrapper(
        {},
        getProgramSummaryApi,
      )
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
)

export const getConfig = createAsyncThunk(
  'config/getConfig',
  async (payload, thunkAPI) => {
    try {
      const response = await apiWrapper(null, getConfigApi);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

export const getSummaries = createAsyncThunk(
  'config/getSummaries',
  async (payload, thunkAPI) => {
    try {
      thunkAPI.dispatch(
        setLoading({
          dashboardSummary: true,
        }),
      );
      const response = await apiWrapper(null, getSummariesApi, payload);
      if(response.all) {
        thunkAPI.dispatch(
          setLoading({
            dashboardSummary: false,
          }),
        );
      }
      return response;
    } catch (error) {
      thunkAPI.dispatch(
        setLoading({
          dashboardSummary: false,
        }),
      );
      return thunkAPI.rejectWithValue();
    }
  },
);

export const getRevenue = createAsyncThunk(
  'config/getRevenue',
  async (payload, thunkAPI) => {
    try {
      const response = await apiWrapper(null, getRevenueApi, payload);
      return { data: response, type: payload.type };
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

export const getGlobalSales = createAsyncThunk(
  'config/getGlobalSales',
  async (payload, thunkAPI) => {
    try {
      const response = await apiWrapper(null, getGlobalSaleApi);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

export const getSummariesCustomers = createAsyncThunk(
  'config/getSummariesCustomers',
  async (payload, thunkAPI) => {
    try {
      const response = await apiWrapper(null, getSummariesCustomersApi);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

export const getPopularProduct = createAsyncThunk(
  'config/getPopularProduct',
  async (payload, thunkAPI) => {
    try {
      const response = await apiWrapper(null, getPopularProductApi);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

import { createSlice } from '@reduxjs/toolkit';
import {
  getSummaries,
  getRevenue,
  getGlobalSales,
  getSummariesCustomers,
  getPopularProduct,
  getStartUpSummary,
  getProgramSummary,
  getUserReport,
  getStartUpReport,
} from './actions';

export const initialState = {
  userReport: {
    data: [],
  },
  startUpReport: {
    data: [],
  },
};

const { actions, reducer } = createSlice({
  name: 'Config',
  initialState,
  reducers: {
    clearSummariesData: (state) => {
      state.summaries = {};
    },
    updateProgramCount: (state, { payload }) => {
      state.program = {
        ...state.program,
        countProgram: state.program?.countProgram + payload,
      }
    },
  },
  extraReducers: {
    [getUserReport.fulfilled]: (state, { payload }) => {
      state.userReport = payload;
    },
    [getStartUpReport.fulfilled]: (state, { payload }) => {
      state.startUpReport = payload;
    },
    [getStartUpSummary.fulfilled]: (state, { payload }) => {
      state.startUp = payload;
    },
    [getProgramSummary.fulfilled]: (state, { payload }) => {
      state.program = payload;
    },
    [getSummaries.fulfilled]: (state, { payload }) => {
      state.summaries = payload;
    },
    [getSummaries.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [getRevenue.fulfilled]: (state, { payload }) => {
      if (payload.type === 'day') {
        state.revenue.byDay = payload.data;
      } else {
        state.revenue.byMonth = payload.data;
      }
    },
    [getRevenue.fulfilled]: (state, { payload }) => {
      state.error = payload;
    },
    [getGlobalSales.fulfilled]: (state, { payload }) => {
      state.globalSales = payload;
    },
    [getGlobalSales.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [getSummariesCustomers.fulfilled]: (state, { payload }) => {
      state.summariesCustomers = payload;
    },
    [getSummariesCustomers.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [getPopularProduct.fulfilled]: (state, { payload }) => {
      state.popularProduct = payload;
    },
    [getPopularProduct.rejected]: (state, { payload }) => {
      state.error = payload;
    },
  },
});

export const { clearSummariesData, updateProgramCount } = actions;

export default reducer;

import { createSlice } from '@reduxjs/toolkit';
import { getOrderChart, getRevenueChart, getTopRankings, getBestSaleSubscriptionPlan, getUsers } from './actions';

export const initialState = {
  orderData: {},
  revenueData: {},
  topRankingCustomerData: [],
  topRankingBusinessData: [],
  bestSubscriptionPlan: [],
  userData: [],
  loading: false,
};

const { reducer } = createSlice({
  name: 'Reports',
  initialState,
  reducers: {},
  extraReducers: {
    [getOrderChart.fulfilled]: (state, { payload }) => {
      state.orderData = payload;
      state.loadingOrderChart = false;
    },
    [getOrderChart.rejected]: (state) => {
      state.loadingOrderChart = false;
    },
    [getOrderChart.pending]: (state) => {
      state.loadingOrderChart = true;
    },
    [getRevenueChart.fulfilled]: (state, { payload }) => {
      state.loadingRevenueChart = false;
      state.revenueData = payload;
    },
    [getRevenueChart.rejected]: (state) => {
      state.loadingRevenueChart = false;
    },
    [getRevenueChart.pending]: (state) => {
      state.loadingRevenueChart = true;
    },
    [getTopRankings.fulfilled]: (state, { payload }) => {
      state.topRankingCustomerData = payload?.user?.map((item, index) => {
        return {
          ...item,
          no: index + 1,
        };
      });
      state.topRankingBusinessData = payload?.business?.map((item, index) => {
        return {
          ...item,
          no: index + 1,
        };
      });
    },
    [getBestSaleSubscriptionPlan.fulfilled]: (state, { payload }) => {
      state.bestSubscriptionPlan = payload;
    },
    [getUsers.fulfilled]: (state, { payload }) => {
      state.userData = payload;
    },
  },
});

export default reducer;

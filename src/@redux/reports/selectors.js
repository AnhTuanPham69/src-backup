import { createSelector } from 'reselect';
import flatten from 'lodash/flatten';
import moment from 'moment';
import { REPORTS_USER } from 'configs/localData';
import i18n from 'i18next';

const getOrderData = (state) => state.reports.orderData;
const getRevenueData = (state) => state.reports.revenueData;
const getUserData = (state) => state.reports.userData;

export const getOrderDataSelector = createSelector(
  [getOrderData, (state, e) => e],
  (orderData = {}, currentTime) => {
    let totalOrder = 0;
    let formatTime = 'DD/MMM';
    if (currentTime === 'month') {
      formatTime = 'MMM/YYYY';
    } else if (currentTime === 'year') {
      formatTime = 'YYYY';
    } else formatTime = 'DD/MMM';

    const orderChartValues = orderData?.data?.map((item) => {
      totalOrder += item?.count_order;
      return [
        {
          date: moment(item?.key).format(formatTime),
          value: item?.count_order,
          type: 'orders',
        },
        {
          date: moment(item?.key).format(formatTime),
          value: item?.count_customer,
          type: 'customers',
        },
      ];
    });
    return {
      data: flatten(orderChartValues)?.length
        ? [
            ...[
              {
                date: '',
                value: null,
                type: 'orders',
              },
              {
                date: '',
                value: null,
                type: 'customers',
              },
            ],
            ...flatten(orderChartValues),
            ...[
              {
                date: ' ',
                value: null,
                type: 'orders',
              },
              {
                date: ' ',
                value: null,
                type: 'customers',
              },
            ],
          ]
        : [],
      totalOrder,
    };
  },
);

export const getRevenueDataSelector = createSelector(
  [getRevenueData, (state, e) => e],
  (revenueData = {}, currentTime) => {
    let formatTime = 'DD/MMM';
    let totalRevenue = 0;

    if (currentTime === 'month') {
      formatTime = 'MMM/YYYY';
    } else if (currentTime === 'year') {
      formatTime = 'YYYY';
    } else formatTime = 'DD/MMM';

    const revenueChartValues = revenueData?.data?.map((item) => {
      totalRevenue += item?.sum_revenue;
      return {
        Date: moment(item?.key).format(formatTime),
        [`${i18n.t('home.chart.title')}`]: item?.sum_revenue,
      };
    });
    return {
      data: revenueChartValues,
      totalRevenue,
    };
  },
);

export const getUserDataSelector = createSelector([getUserData], (userData) => {
  let totalUser = 0;
  const userChartData = userData?.map((item) => {
    totalUser += item?.count;
    return {
      ...item,
      name: REPORTS_USER?.find((e) => e?.value === item?.name)?.text,
    };
  });
  return {
    data: userChartData,
    totalUser,
  };
});

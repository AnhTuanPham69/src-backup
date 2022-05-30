import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import {
  getOrderDataSelector,
  getRevenueDataSelector,
  getUserDataSelector,
} from '@redux/reports/selectors';
import i18next from 'i18next';
import PageTitle from 'components/common/PageTitle';
import {
  getOrderChart,
  getRevenueChart,
  getTopRankings,
  getUsers,
  getBestSaleSubscriptionPlan,
} from '@redux/reports/actions';

import moment from 'moment';
import UserChart from './components/UserChart';
import OverviewChart from './components/OverviewChart';
import RevenuesChart from './components/RevenueChart';
import TopRankingSection from './components/TopRankingSection';

const Reports = () => {
  const [revenueTime, setRevenueTime] = useState({
    type: 'day',
    value: [moment().startOf('months'), moment()],
  });
  const [overviewTime, setOverviewTime] = useState({
    type: 'day',
    value: [moment().startOf('months'), moment()],
  });
  const orderData = useSelector((state) =>
    getOrderDataSelector(state, overviewTime?.type),
  );
  const revenueData = useSelector((state) =>
    getRevenueDataSelector(state, revenueTime?.type),
  );
  const topRankingCustomerData = useSelector(
    (state) => state.reports.topRankingCustomerData,
  );
  const topRankingBusinessData = useSelector(
    (state) => state.reports.topRankingBusinessData,
  );
  const topSubscriptionPlan = useSelector(
    (state) => state.reports.bestSubscriptionPlan,
  );
  const userData = useSelector(getUserDataSelector);
  const loadingRevenueChart = useSelector(state => state.reports.loadingRevenueChart);
  const loadingOrderChart = useSelector(state => state.reports.loadingOrderChart);

  const dispatch = useDispatch();

  const handleChangeRevenue = (type) => {
    setRevenueTime((e) => ({
      type,
      value: [
        e?.value?.[0]?.startOf(`${type}s`),
        e?.value?.[1]?.endOf(`${type}s`),
      ],
    }));
  };

  const handleChangeOverView = (type) => {
    setOverviewTime((e) => ({
      type,
      value: [
        e?.value?.[0]?.startOf(`${type}s`),
        e?.value?.[1]?.endOf(`${type}s`),
      ],
    }));
  };

  const onDateRevenueChange = (values) => {
    setRevenueTime((e) => ({
      ...e,
      value: [
        values?.[0]?.startOf(`${e.type}s`),
        values?.[1]?.endOf(`${e.type}s`),
      ],
    }));
  };

  const onDateOverviewChange = (values) => {
    setOverviewTime((e) => ({
      ...e,
      value: [
        values?.[0]?.startOf(`${e.type}s`),
        values?.[1]?.endOf(`${e.type}s`),
      ],
    }));
  };

  useEffect(() => {
    dispatch(
      getOrderChart({
        startDate: overviewTime?.value?.[0]?.format('YYYY-MM-DD'),
        endDate: overviewTime?.value?.[1]?.format('YYYY-MM-DD'),
        groupBy: overviewTime?.type || 'day',
      }),
    );
  }, [overviewTime]);

  useEffect(() => {
    dispatch(
      getRevenueChart({
        startDate: revenueTime?.value?.[0]?.format('YYYY-MM-DD'),
        endDate: revenueTime?.value?.[1]?.format('YYYY-MM-DD'),
        groupBy: revenueTime?.type || 'day',
      }),
    );
  }, [revenueTime]);

  useEffect(() => {
    dispatch(getTopRankings());
    dispatch(getUsers());
    dispatch(getBestSaleSubscriptionPlan());
  }, []);

  return (
    <div>
      <PageTitle>{i18next.t('reports.header')}</PageTitle>
      <Row gutter={[20, 20]}>
        <Col md={16} sm={14} xs={24}>
          <Row gutter={[20, 20]}>
            <Col span={24}>
              <RevenuesChart
                data={revenueData?.data || []}
                handleChange={handleChangeRevenue}
                onCalendarChange={onDateRevenueChange}
                totalRevenue={revenueData?.totalRevenue}
                revenueTime={revenueTime}
                loading={loadingRevenueChart}
              />
            </Col>
            <Col span={24}>
              <OverviewChart
                handleChange={handleChangeOverView}
                data={orderData?.data || []}
                onCalendarChange={onDateOverviewChange}
                overviewTime={overviewTime}
                loading={loadingOrderChart}
                totalOrder={orderData?.totalOrder}
              />
            </Col>
          </Row>
        </Col>
        <Col md={8} sm={10} xs={24}>
          <Row gutter={[20, 20]}>
            <Col span={24}>
              <UserChart data={userData?.data} total={userData?.totalUser} />
            </Col>
            <Col span={24}>
              <TopRankingSection
                users={topRankingCustomerData}
                businesses={topRankingBusinessData}
                subscribers={topSubscriptionPlan}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Reports;

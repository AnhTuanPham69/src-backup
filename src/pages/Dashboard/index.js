import React, { useEffect } from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import i18next from 'i18next';
import PageTitle from 'components/common/PageTitle';
import Orders from 'containers/Orders/List';
import SummaryRow from 'containers/Programs/components/SummaryRow';
import { getSummaries } from '@redux/config/actions';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import HomeWrapper from './styles';

const Home = () => {
  const summariesData = useSelector(state => state.config.summaries);
  const dispatch = useDispatch();
  const summaries = [
    {
      backgroundColor: '#4C6FFF',
      icon: 'ic-case',
      key: 'summary.keyBusinesses',
      path: '/businesses',
      title: 'summary.businesses',
      value: summariesData?.all?.business || 0,
      statistic: summariesData?.currentMonth?.business || 0,
    },
    {
      backgroundColor: '#FF92AE',
      icon: 'ic-user-2',
      key: 'summary.keyCustomers',
      path: '/customers',
      title: 'summary.customers',
      value: summariesData?.all?.customer || 0,
      statistic: summariesData?.currentMonth?.customer || 0,
    },
    {
      backgroundColor: '#FB8429',
      icon: 'ic-tool',
      key: 'summary.keyCourses',
      path: '/programs',
      title: 'summary.courses',
      value: summariesData?.all?.course || 0,
      statistic: summariesData?.currentMonth?.course || 0,
    },
    {
      backgroundColor: '#F16063',
      icon: 'ic-case',
      key: 'summary.keyOrders',
      path: '/orders',
      title: 'summary.orders',
      value: summariesData?.all?.order || 0,
      statistic: summariesData?.currentMonth?.order || 0,
    },
    {
      backgroundColor: '#00C48C',
      icon: 'dollar',
      key: 'summary.keyRevenues',
      path: '/payouts',
      title: 'summary.revenues',
      value: `${(summariesData?.all?.totalRevenue)?.toFixed(2) || 0}`,
      statistic: `$${(summariesData?.currentMonth?.totalRevenue)?.toFixed(2) || 0}`,
    },
  ];
  const colStyles = {
    flexBasis: '20%',
    width: '20%',
  };

  useEffect(() => {
    dispatch(getSummaries({
      startOfCurrentMonth: moment().startOf('months').toISOString(),
      endOfCurrentMonth: moment().endOf('months').toISOString(),
    }))
  }, [])

  return (
    <HomeWrapper>
      <PageTitle className="breadcrumb-section">
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link to="/">
              <h1>{i18next.t('dashboard.header')}</h1>
            </Link>
          </Breadcrumb.Item>
        </Breadcrumb>
      </PageTitle>
      <SummaryRow summaries={summaries} colStyles={colStyles} isShowStatistic />
      <Orders
        breadCrumbs={[
          {
            title: i18next.t('home.title.orders'),
            path: '/orders',
          },
        ]}
        isUpdateRoute={false}
        isDashboard
      />
    </HomeWrapper>
  );
};

Home.propTypes = {};

export default Home;

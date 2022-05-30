import React, { useEffect } from 'react';
import { Row, Col, Tabs } from 'antd';
import { useHistory, useParams } from 'react-router';
import {  useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import i18next from 'i18next';
import { getByIdBusinesses } from '@redux/businesses/actions';

import CustomBreadcrumb from 'components/common/Breadcrumb';
import PageTitle from 'components/common/PageTitle';
import InfoCard from '../components/InfoCard';
import Payouts from '../components/Payouts';
import { DetailWrapper } from './styles';
import Orders from '../components/Orders';
import Courses from '../components/Courses';
import Customers from '../components/Customers';
import { FORMAT_DATE } from '../../../configs/localData';
import SubscriptionPlan from '../components/SubscriptionPlan';

const { TabPane } = Tabs;

const Detail = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  const currentBusiness = useSelector((state) => state.businesses.currentData);
  
  const BREADCRUMB = [
    {
      title: i18next.t('businesses.header'),
      path: '/businesses',
    },
    {
      title: currentBusiness?.businessName,
    },
  ];

  const onChange = (key) => {
    history.push(`/businesses/${params.id}/details/${key}`);
  };

  useEffect(() => {
    dispatch(
      getByIdBusinesses({
        data: {
          id: params.id,
        },
      }),
    );
  }, [params.id]);

  const handleClickEdit = () => {
    history.push(`/businesses/${params.id}/edit`);
  };

  return (
    <DetailWrapper>
      <CustomBreadcrumb data={BREADCRUMB} />
      <PageTitle>
        <div className="desc-header">
          {i18next.t('pageHeader.descBusiness')}
        </div>
      </PageTitle>

      <Row gutter={16}>
        <Col span={8}>
          <InfoCard
            handleClickEdit={handleClickEdit}
            businessName={`${currentBusiness?.businessName || ''}`}
            name={currentBusiness?.contactName}
            image={currentBusiness?.logo}
            generalPhoneNo={currentBusiness?.contactPhoneNumber}
            generalMail={currentBusiness?.contactEmail}
            paypalEmailAccount={currentBusiness?.paypalEmailAccount}
            generalDate={moment(currentBusiness?.createAt).format(FORMAT_DATE)}
            linkedinLink={currentBusiness?.linkedInLink}
            twitterLink={currentBusiness?.twitterLink}
            facebookLink={currentBusiness?.fanPageLink}
            websiteLink={currentBusiness?.websiteLink}
            address={currentBusiness?.country}
          />
        </Col>
        <Col span={16}>
          <Tabs
            className="detail-tabs"
            defaultActiveKey={params.model || 'orders'}
            onChange={onChange}
          >
            <TabPane tab={i18next.t('orders.header')} key="orders">
              <Orders />
            </TabPane>
            <TabPane tab={i18next.t('summary.courses')} key="courses">
              <Courses />
            </TabPane>
            <TabPane tab={i18next.t('summary.customers')} key="customers">
              <Customers />
            </TabPane>
            <TabPane tab={i18next.t('payouts.title')} key="payouts">
              <Payouts />
            </TabPane>
            <TabPane tab={i18next.t('subscriptionPlans.title')} key="subscriptionPlans">
              <SubscriptionPlan />
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </DetailWrapper>
  );
};

export default Detail;

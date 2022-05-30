import React from 'react';
import PropTypes from 'prop-types';
import { ConfigProvider, Empty, Rate } from 'antd';
import i18next from 'i18next';
import moment from 'moment';
// import UserInfo from 'components/RestField/UserInfo';
import TagCustom from 'components/common/TagCustom';
import RestFieldItem from '../../../components/RestField/RestFieldItem';
import List from '../../rest/List';
import { ServiceSummaryWrapper } from './styles';

const ServiceSummary = ({ description }) => {
  return (
    <ServiceSummaryWrapper>
      <div className="description-section">
        <h3>{i18next.t('services.serviceInformation')}</h3>
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>
      <div className="service-section">
        <h3>{i18next.t('services.outstandingService')}</h3>
        <ConfigProvider
          renderEmpty={() => (
            <Empty
              description={
                <div
                  style={{
                    fontSize: '24px',
                  }}
                >
                  <div>{i18next.t('noData')}</div>
                </div>
              }
            />
          )}
        >
          <List
            resource="services"
            initialFilter={{
              orderBy: 'createdAt:DESC',
            }}
            hasCreate={false}
            defaultOptions={{
              customApiResource: 'service-types',
            }}
            noCardWrapper
          >
            {/* <RestFieldItem
              width={140}
              source="name"
              header="services.name"
              format={(firstName, row) => (
                <UserInfo
                  record={{
                    ...row?.user,
                    fullName: `${firstName || ''} ${row?.lastName || ''}`,
                  }}
                  nameProp="fullName"
                  avatarProp="avatar"
                  isLink={false}
                />
              )}
            /> */}
            <RestFieldItem
              source="name"
              header="services.type"
              format={(data) => (
                <TagCustom color="#fff" backgroundColor="#AEB5E1" name={data} />
              )}
            />
            <RestFieldItem
              source="createdAt"
              header="services.dateCreate"
              sorter
              width={120}
              format={(createdAt) =>
                createdAt && moment(createdAt).format('DD MMM, YYYY')}
            />
            <RestFieldItem source="services.using" header="services.using" />
            <RestFieldItem
              source="services.rate"
              header="services.rate"
              format={(data) => <Rate disabled value={data} />}
            />
          </List>
        </ConfigProvider>
      </div>
    </ServiceSummaryWrapper>
  );
};

ServiceSummary.propTypes = {
  description: PropTypes.any,
};

ServiceSummary.defaultProps = {
  description:
    'With over 20 years experience as a 3-time serial SaaS/Big Data entrepreneur, CEO, Board Director and tech executive, Alex advises CEOs, Boards of Directors, and venture capital and private equity firms on generating growth and successful outcomes for their businesses. Previously, he was the CEO of 360pi, and Chief Growth Officer and head of M&A and merger integration for Numerator, a Vista Equity Partners portfolio company. Prior to starting his entrepreneurial career during the dot com era, Alex was a consultant at Bain & Company and led production material control for a Ford/VW joint venture in Europe. Cooper has an MBA from INSEAD, a B.A.Sc. Electrical Engineering from the University of Waterloo, and speaks four languages. When he’s not strategizing growth opportunities or sitting in on web calls, Alex will most likely be found cycling, hiking, reading or spending time with his family.',
};

export default ServiceSummary;

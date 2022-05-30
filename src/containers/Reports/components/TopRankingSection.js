import React from 'react';
import i18next from 'i18next';
import { Card, Tabs, Table } from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const { TabPane } = Tabs;

const TopRankingSection = ({ users, businesses, subscribers }) => {
  const columnBusiness = [
    {
      title: i18next.t('reports.no'),
      dataIndex: 'no',
      key: 'no',
    },
    {
      title: i18next.t('reports.name'),
      dataIndex: 'businessName',
      key: 'businessName',
    },
    {
      title: i18next.t('reports.total'),
      dataIndex: 'totalRevenue',
      key: 'totalRevenue',
      fixed: 'right',
      render: (total) => `$ ${total}`,
    },
  ];

  const columnCustomer = [
    {
      title: i18next.t('reports.no'),
      dataIndex: 'no',
      key: 'no',
    },
    {
      title: i18next.t('reports.name'),
      dataIndex: 'firstName',
      key: 'firstName',
      render: (firstName, record) => (
        <p>
          {firstName && record?.lastName
            ? `${firstName || ''} ${record?.lastName || ''}`
            : record?.email}
        </p>
      ),
    },
    {
      title: i18next.t('reports.total'),
      dataIndex: 'totalAmountPaid',
      key: 'totalAmountPaid',
      fixed: 'right',
      render: (total) => `$ ${total}`,
    },
  ];

  const columnSubscribers = [
    {
      title: i18next.t('reports.planCode'),
      dataIndex: 'planCode',
      key: 'planCode',
    },
    {
      title: i18next.t('reports.subscriber'),
      dataIndex: 'subscribers',
      key: 'subscribers',
    },
    {
      title: i18next.t('reports.price'),
      dataIndex: 'price',
      key: 'price',
      fixed: 'right',
      render: (total) => `$ ${total}`,
    },
  ];

  return (
    <div>
      <CardWrapper title={i18next.t('reports.topRanking')}>
        <Tabs defaultActiveKey="1" onChange={() => {}}>
          <TabPane tab={i18next.t('reports.customers')} key="customers">
            <Table
              columns={columnCustomer}
              dataSource={users}
              pagination={false}
              scroll={{ x: true }}
              size="small"
            />
          </TabPane>
          <TabPane tab={i18next.t('reports.organizations')} key="organizations">
            <Table
              columns={columnBusiness}
              dataSource={businesses}
              pagination={false}
              size="small"
              scroll={{ x: true }}
            />
          </TabPane>
        </Tabs>
      </CardWrapper>
      <br />
      <CardWrapper title={i18next.t('reports.bestSubscribers')}>
        <Table
          columns={columnSubscribers}
          dataSource={subscribers}
          pagination={false}
          size="small"
          scroll={{ x: true }}

        />
      </CardWrapper>
    </div>
  );
};

const CardWrapper = styled(Card)`
  .ant-card-head {
    min-height: 20px;
  }
  .ant-card-head-title {
    padding: 10px 0px;
    font-size: 14px;
    font-weight: 700;
  }

  .ant-tabs-nav-wrap {
    padding-left: 16px;
  }

  .ant-card-body {
    padding: 0px;
  }
  .ant-tabs-tab {
    padding-top: 8px;
  }
  .ant-tabs-nav {
    margin: 0px !important;
  }

  .ant-table-cell {
    padding-left: 16px !important;
  }
`;

TopRankingSection.propTypes = {
  users: PropTypes.array,
  businesses: PropTypes.array,
  subscribers: PropTypes.array,
};

export default TopRankingSection;

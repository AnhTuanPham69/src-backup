import React from 'react';
import { ConfigProvider, Empty } from 'antd';
import i18next from 'i18next';
// import ShowButton from 'components/RestActions/ShowButton';
import moment from 'moment';
import { useParams } from 'react-router';
import Reference from 'containers/rest/Reference';
import UserInfo from 'components/RestField/UserInfo';
import List from '../../../rest/List';
import RestFieldItem from '../../../../components/RestField/RestFieldItem';
// import ActionGroup from '../../../../components/RestActions/ActionGroup';
// import TagCustom from 'components/common/TagCustom';
import Filter from '../../../Customers/components/Filter'

const Customers = () => {
  // const history = useHistory();
  const { id } = useParams();

  return (
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
        resource="customers"
        hasCreate={false}
        noCardWrapper
        initialFilter={{
          limit: 100,
          filter: {
            businessId: {
              $eq: id,
            },
          },
          orderBy: 'createdAt:DESC',
        }}
        filter={
          <Filter
            format={(values) => {
              return {
                ...values,
                createdAt: {
                  $gte: values?.createdAt?.[0]?.startOf('day').toISOString(),
                  $lte: values?.createdAt?.[1]?.endOf('day').toISOString(),
                },
              };
            }}
          />
        }
      >
        <Reference
          resource="users"
          source="userId"
          header="businesses.customers.username"
          width={200}
        >
          <RestFieldItem
            source="fullName"
            format={(data, row) => {
              return (
                <UserInfo
                  showAvt={false}
                  record={row}
                  nameProp="fullName"
                  prefixLink={`/customers/${row?.parentRecord?.id}/${id}/progress`}
                />
            )
            }}
          />
        </Reference>
        <Reference
          resource="users"
          source="userId"
          header="businesses.customers.email"
          width={200}
        >
          <RestFieldItem source="email" />
        </Reference>
        <RestFieldItem
          source="numberOfCourse"
          header="businesses.customers.numberOfCourse"
        />
        <RestFieldItem
          source="createdAt"
          header="businesses.customers.createdAt"
          sorter
          width={200}
          format={(createdAt) => (
            <p>
              {createdAt && moment(createdAt).format('DD MMM, YYYY, h:mm:ss a')}
            </p>
          )}
        />
        {/* <ActionGroup icon="ic-more">
          <ShowButton
            gotoShowPage={(id, source, record) =>
              history.push(`/users/${record?.userId}/details`)}
          />
        </ActionGroup> */}
      </List>
    </ConfigProvider>
  );
};

export default Customers;

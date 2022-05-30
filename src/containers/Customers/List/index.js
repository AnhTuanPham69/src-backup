import React from 'react';
import { ConfigProvider, Empty } from 'antd';
import i18next from 'i18next';
import { useHistory } from 'react-router';
import ShowButton from 'components/RestActions/ShowButton';
import moment from 'moment';
import UserInfo from 'components/RestField/UserInfo';
import List from '../../rest/List';
import RestFieldItem from '../../../components/RestField/RestFieldItem';
import ActionGroup from '../../../components/RestActions/ActionGroup';
import Filter from '../components/Filter';

const CustomersList = () => {
  const history = useHistory();
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
        resource="customers"
        initialFilter={{
          orderBy: 'createdAt:DESC',
        }}
        hasCreate={false}
        header="customers.header"
        headerDesc="pageHeader.descCustomers"
        // defaultOptions={{
        //     customApiResource: 'startup-progresses',
        //   }}
      >
        <RestFieldItem
          source="user"
          header="customers.name"
          width={200}
          format={(data, row) => (
            <UserInfo
              prefixLink={`/customers/${row?.id}/${row?.businessId}/progress`}
              record={{
                ...row?.user,
                name: !(data?.firstName && data?.lastName)
                  ? data?.email
                  : `${data?.firstName || ''} ${data?.lastName || ''}`,
              }}
              nameProp="name"
              showAvt={false}
            />
          )}
        />
        <RestFieldItem
          source="user"
          header="customers.email"
          format={(data) => <p>{data?.email}</p>}
        />
        <RestFieldItem
          source="business.businessName"
          width={200}
          header="customers.organization"
        />
        <RestFieldItem
          source="numberOfCourse"
          header="customers.numberOfCourse"
        />
        <RestFieldItem
          source="createdAt"
          header="customers.createdAt"
          sorter
          width={200}
          format={(createdAt) => (
            <p>
              {createdAt && moment(createdAt).format('DD MMM, YYYY, h:mm:ss a')}
            </p>
          )}
        />
        <ActionGroup icon="ic-more">
          <ShowButton
            gotoShowPage={(id, source, record) =>
              history.push(`/customers/${id}/${record?.businessId}/progress`)}
          />
        </ActionGroup>
      </List>
    </ConfigProvider>
  );
};

CustomersList.propTypes = {};

export default CustomersList;

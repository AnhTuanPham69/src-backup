import React from 'react';
import { ConfigProvider, Empty } from 'antd';
import i18next from 'i18next';
import UserInfo from 'components/RestField/UserInfo';
import ShowButton from 'components/RestActions/ShowButton';
import moment from 'moment';
import { useHistory, useParams } from 'react-router';
import { formatMoney } from 'utils/textUtils';
import { formatBillingStatus } from 'utils/formatFieldUtils';
import Reference from 'containers/rest/Reference';
import List from '../../../rest/List';
import RestFieldItem from '../../../../components/RestField/RestFieldItem';
import ActionGroup from '../../../../components/RestActions/ActionGroup';
// import TagCustom from 'components/common/TagCustom';

const Orders = () => {
  const history = useHistory();
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
        resource="orders"
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
      >
        <RestFieldItem
          source="transactionId"
          header="orders.orderId"
          width={200}
          format={(orderId, row) => (
            <UserInfo
              prefixLink={`/orders/${row?.id}/details`}
              record={{
                ...row?.user,
                orderId,
              }}
              nameProp="orderId"
              showAvt={false}
            />
          )}
        />
        <RestFieldItem
          source="user.firstName"
          header="orders.name"
          width={200}
          format={(firstName, row) => (
            <p>
              {firstName && row?.user?.lastName
                ? `${firstName || ''} ${row?.user?.lastName || ''}`
                : `${row?.user?.email}`}
            </p>
          )}
        />
        <Reference
          resource="programs"
          source="programId"
          header="orders.courseName"
          width={200}
        >
          <RestFieldItem source="name" />
        </Reference>

        <Reference
          resource="programPhases"
          source="programPhaseId"
          header="orders.programName"
          width={200}
          defaultOptions={{
            customApiResource: 'program-phases',
          }}
        >
          <RestFieldItem source="name" />
        </Reference>
        <RestFieldItem
          source="createdAt"
          header="orders.paymentDate"
          sorter
          width={200}
          format={(createdAt) => (
            <p>
              {createdAt && moment(createdAt).format('DD MMM, YYYY, h:mm:ss a')}
            </p>
          )}
        />

        <RestFieldItem
          width={80}
          format={(price) => (
            <b style={{ paddingLeft: 10 }}>{`$${formatMoney(price)}`}</b>
          )}
          source="itemAmount"
          header="orders.price"
        />

        <RestFieldItem
          width={80}
          // format={(data) => (
          //   <b style={{ paddingLeft: 10 }}>{data?.quantity}</b>
          // )}
          source="programPlanSubscriptionData.quantity"
          header="orders.duration"
        />

        <RestFieldItem
          header="orders.status"
          source="status"
          width={100}
          format={formatBillingStatus}
        />

        <ActionGroup icon="ic-more">
          <ShowButton
            gotoShowPage={(id) => history.push(`/orders/${id}/details`)}
          />
        </ActionGroup>
      </List>
    </ConfigProvider>
  );
};

export default Orders;

import React from 'react';
import { ConfigProvider, Empty, Button } from 'antd';
import i18next from 'i18next';
import moment from 'moment';
import { useParams, useHistory } from 'react-router';
import { formatMoney } from 'utils/textUtils';
import { convertObjToSearchStr } from 'utils/tools';
import SummaryRow from 'containers/Programs/components/SummaryRow';
import { useSelector } from 'react-redux';
import { formatBillingStatus } from 'utils/formatFieldUtils';
import List from '../../../rest/List';
import RestFieldItem from '../../../../components/RestField/RestFieldItem';
import PayoutsFilter from '../PayoutsFilter';
import { PayoutListWrapper } from './styles';

// import TagCustom from 'components/common/TagCustom';
const Payouts = () => {
  const { id } = useParams();
  const currentBusiness = useSelector((state) => state.businesses.currentData);
  const history = useHistory();
  
  const summaries = [
    {
      backgroundColor: '#4C6FFF',
      icon: 'wallet',
      key: 'totalRevenue',
      path: '',
      title: 'payouts.totalRevenue',
      value: currentBusiness?.totalRevenue?.toFixed(2) || 0,
    },
    {
      backgroundColor: '#00C48C',
      icon: 'dollar',
      key: 'totalBalance',
      path: '',
      title: 'payouts.totalBalance',
      value: currentBusiness?.totalBalance?.toFixed(2) || 0,
    },
    {
      backgroundColor: '#FB8429',
      icon: 'creditCard',
      key: 'totalPaid',
      path: '',
      title: 'payouts.totalPaid',
      value: currentBusiness?.totalPaid?.toFixed(2) || 0,
    },
  ];
  return (
    <PayoutListWrapper>
      <SummaryRow summaries={summaries} colStyles={{ md: 8, sm: 8 }} />
      <Button
        type="primary"
        onClick={() => {
          history.push(`#payouts/create?${convertObjToSearchStr({
            businessId: id,
            totalBalance:currentBusiness?.totalBalance,
          })}`);
        }}
        className="header-btn"
      >
        {i18next.t('payouts.payToOrganization')}
      </Button>

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
          resource="payouts"
          hasCreate={false}
          noCardWrapper
          initialFilter={{
            limit: 100,
            filter: {
              businessId: {
                $eq: id,
              },
            },
            orderBy: 'paymentDate:DESC',
          }}
          filter={
            <PayoutsFilter
              format={(values) => {
                return {
                  ...values,
                  paymentDate: {
                    $gte: values?.paymentDate?.[0]
                      ?.startOf('day')
                      .toISOString(),
                    $lte: values?.paymentDate?.[1]?.endOf('day').toISOString(),
                  },
                };
              }}
            />
          }
        >
          <RestFieldItem
            width={80}
            source="amount"
            header="businesses.payouts.amount"
            format={(amount) => (
              <b style={{ paddingLeft: 10 }}>{`$ ${formatMoney(amount)}`}</b>
            )}
          />

          <RestFieldItem
            source="paymentDate"
            header="businesses.payouts.paymentDate"
            sorter
            width={200}
            format={(paymentDate) => (
              <p>
                {paymentDate &&
                  moment(paymentDate).format('DD MMM, YYYY, h:mm:ss a')}
              </p>
            )}
          />
  
          <RestFieldItem
            source="status"
            header="businesses.payouts.status"
            sorter
            width={100}
            format={formatBillingStatus}
          />
          <RestFieldItem
            // sorter
            width={200}
            source="note"
            header="businesses.payouts.note"
          />
        </List>
      </ConfigProvider>
    </PayoutListWrapper>
  );
};

export default Payouts;

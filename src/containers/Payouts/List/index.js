import React, { useEffect } from 'react';
import { ConfigProvider, Empty, Button} from 'antd';
import i18next from 'i18next';
import { useHistory } from 'react-router';
import ShowButton from 'components/RestActions/ShowButton';
import { formatMoney } from 'utils/textUtils';
import moment from 'moment';
import UserInfo from 'components/RestField/UserInfo';
import SummaryRow from 'containers/Programs/components/SummaryRow';
import PageTitle from 'components/common/PageTitle';
import { getPayoutDashboard } from '@redux/payouts/actions';
import { useDispatch, useSelector } from 'react-redux';
import List from '../../rest/List';
import RestFieldItem from '../../../components/RestField/RestFieldItem';
import ActionGroup from '../../../components/RestActions/ActionGroup';
import Filter from '../components/Filter';
import { PayoutListWrapper } from './styles';

const PayoutList = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const dashboard = useSelector((state) => state.payouts.dashboard);

  useEffect(() => {
    dispatch(getPayoutDashboard());
  }, []);
  const summaries = [
    {
      backgroundColor: '#4C6FFF',
      icon: 'wallet',
      key: 'totalRevenue',
      path: '',
      title: 'payouts.totalRevenue',
      value: (dashboard?.totalRevenue?.sum)?.toFixed(2) || 0,
    },
    {
      backgroundColor: '#00C48C',
      icon: 'dollar',
      key: 'totalBalance',
      path: '',
      title: 'payouts.totalBalance',
      value: (dashboard?.totalBalance?.sum)?.toFixed(2) || 0,
    },
    {
      backgroundColor: '#FB8429',
      icon: 'creditCard',
      key: 'totalPaid',
      path: '',
      title: 'payouts.totalPaid',
      value: (dashboard?.totalPaid?.sum)?.toFixed(2) || 0,
    },
  ];

  return (
    <PayoutListWrapper>
      <PageTitle>
        {i18next.t('payouts.header')}
        <div className="desc-header">{i18next.t('pageHeader.descPayouts')}</div>
      </PageTitle>
      <SummaryRow summaries={summaries} colStyles={{ md: 8, sm: 8 }} />
      <Button
        type="primary"
        onClick={() => {
            history.push('#payouts/create');
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
          {...props}
          filter={
            <Filter
              format={(values) => {
                return {
                  ...values,
                  lastedPaymentDate: {
                    $gte: values?.lastedPaymentDate?.[0]?.startOf('day').toISOString(),
                    $lte: values?.lastedPaymentDate?.[1]?.endOf('day').toISOString(),
                  },
                };
              }}
            />
          }
          noCardWrapper
          resource="businesses"
          initialFilter={{
            orderBy: 'createdAt:DESC',
            filter: {
              isActive: {
                $eq: true,
              },
            },
          }}
          hasCreate={false}
        >
          <RestFieldItem
            source="businessName"
            header="payouts.businessName"
            width={200}
            format={(name, row) => (
              <UserInfo
                prefixLink={`/businesses/${row?.id}/details/payouts`}
                record={{
                  ...row?.user,
                  name,
                }}
                nameProp="name"
                showAvt={false}
              />
            )}
          />
          <RestFieldItem
            width={200}
            source="totalRevenue"
            header="payouts.totalRevenue"
            format={(data) => <p>{`$${formatMoney(data)}`}</p>}
            tooltip="Shows the revenue of the organization. No commission is included in total revenue."
          />
          <RestFieldItem
            width={200}
            source="totalBalance"
            header="payouts.totalBalance"
            format={(data) => <p>{`$${formatMoney(data)}`}</p>}
          />
          <RestFieldItem
            width={200}
            source="totalPaid"
            header="payouts.totalPaid"
            format={(data) => <p>{`$${formatMoney(data)}`}</p>}
            tooltip="Shows how much amount Launch Portal paid to the organization."
          />

          <RestFieldItem
            source="lastedPaymentDate"
            header="payouts.lastedPaymentDate"
            sorter
            width={200}
            format={(lastedPaymentDate) => (
              <p>
                {lastedPaymentDate &&
                  moment(lastedPaymentDate).format('DD MMM, YYYY, h:mm:ss a')}
              </p>
            )}
          />

          <ActionGroup icon="ic-more">
            <ShowButton
              gotoShowPage={(id) => history.push(`/businesses/${id}/details/payouts`)}
            />
          </ActionGroup>
        </List>
      </ConfigProvider>
    </PayoutListWrapper>
  );
};

PayoutList.propTypes = {};

export default PayoutList;

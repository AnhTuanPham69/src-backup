import React, { useEffect } from 'react';
import { ConfigProvider, Empty, Row, Col } from 'antd';
import { FORMAT_DATE } from 'configs/localData';
import i18next from 'i18next';
import { useHistory, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import CustomBreadcrumb from 'components/common/Breadcrumb';
import PageTitle from 'components/common/PageTitle';
import RestTableLayout from 'components/RestLayout/TableLayout';
import { getByIdOrders, clearCurrentOrders } from '@redux/orders/actions';
import OrderUserInfo from '@enouvo/uikit/src/commons/OrderUserInfo';
import { getByIdUsers,clearCurrentUsers } from '@redux/users/actions';
import { getBillingHistories } from '@redux/orders/selectors';
import { getByIdBusinesses, clearCurrentBusinesses } from '@redux/businesses/actions';
import { formatBillingStatus } from 'utils/formatFieldUtils';
import { getAllCustomers } from '@redux/customers/actions';
// import crudSelectors from '@redux/crudSelectors';
import RestFieldItem from '../../../components/RestField/RestFieldItem';
import { DetailsWrapper } from './styles';
import OrderSummary from '../components/OrderSummary';

const OrdersList = () => {
  const history = useHistory();
  const params = useParams();
  const dispatch = useDispatch();
  const currentOrder = useSelector((state) => state.orders.currentData);
  const currentUser = useSelector((state) => state.users.currentData);
  const billingHistories = useSelector(getBillingHistories);
  const currentBusiness = useSelector((state) => state.businesses.currentData);

  const BREADCRUMB = [
    {
      title: i18next.t('orders.header'),
      path: '/orders',
    },
    {
      title: i18next.t('orders.detail'),
    },
  ];

  useEffect(() => {
    dispatch(
      getByIdOrders({
        data: {
          id: params?.id,
        },
        options: {
          isRequestApi: true,
        },
      }),
    );
  }, [params?.id]);

  useEffect(() => {
    return () => {
      dispatch(clearCurrentOrders());
      dispatch(clearCurrentUsers());
      dispatch(clearCurrentBusinesses());
    }
  },[])

  useEffect(() => {
    if (currentOrder?.businessId) {
      dispatch(
        getByIdBusinesses({
          data: {
            id: currentOrder?.businessId,
          },
          options: {
            isRequestApi: true,
          },
        }),
      );
    }
  }, [currentOrder?.businessId]);

  useEffect(() => {
    if (currentOrder?.userId)
      dispatch(
        getByIdUsers({
          data: {
            id: currentOrder?.userId,
          },
          options: {
            isRequestApi: true,
          },
        }),
      );
  }, [currentOrder?.userId]);

  useEffect(() => {
    if (currentOrder?.userId && currentOrder?.businessId)
      dispatch(
        getAllCustomers({
          data: {
            filter: {
              userId: {
                $eq: currentOrder?.userId,
              },
              businessId: {
                $eq: currentOrder?.businessId,
              },
            },
          },
          options: {
            isRefresh: true,
          },
        }),
      );
  }, [currentOrder?.userId, currentOrder?.businessId]);

  return (
    <DetailsWrapper>
      <PageTitle>
        <CustomBreadcrumb data={BREADCRUMB} />
        <div className="desc-header">{i18next.t('pageHeader.descOrders')}</div>
      </PageTitle>

      <Row gutter={24}>
        <Col span={8}>
          <OrderUserInfo
            userInfo={currentUser}
            businessInfo={currentBusiness}
            planCode={currentOrder?.programPlanSubscriptionData?.planCode}
            program={currentOrder?.programPlanSubscriptionData?.program?.name}
            course={currentOrder?.programPlanSubscriptionData?.name}
            price={currentOrder?.programPlanSubscriptionData?.price}
            duration={currentOrder?.programPlanSubscriptionData?.quantity}
            registeredDate={moment(currentOrder?.createdAt).format(FORMAT_DATE)}
            status={formatBillingStatus(currentOrder?.status)}
            linkToUser={()=>{history.push(`/customers?account=${encodeURIComponent(currentUser?.email)}`)}}
            linkToBusiness={()=>{history.push(`/businesses/${currentBusiness?.id}/details/orders`)}}
          />
        </Col>
        <Col span={16}>
          <div>
            {currentOrder?.status !== 'PENDING' &&
            currentOrder?.status !== 'SUCCESS' &&
            currentOrder?.status !== 'COMPLETED' &&
            currentOrder?.status !== 'CANCELLED' ? (
              <OrderSummary
                monthlyPrice={currentOrder?.programPlanSubscriptionData?.price}
                planCode={currentOrder?.programPlanSubscriptionData?.planCode}
                startDate={currentOrder?.subscription?.createdAt}
                endDate={currentOrder?.subscription?.finalPaymentTime}
                nextBilling={currentOrder?.subscription?.nextBillingTime}
              />
            ) : (
              <div className="header-status">
                <p className="header-history">
                  {i18next.t('orders.details.planCode', {
                    planCode:
                      currentOrder?.programPlanSubscriptionData?.planCode,
                  })}
                </p>
                {formatBillingStatus(currentOrder?.status)}
              </div>
            )}

            <div className="content-history">
              <h3 className="header-history">
                {i18next.t('orders.details.header')}
              </h3>
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
                <RestTableLayout
                  resourceData={billingHistories}
                  resourceFilter={{}}
                >
                  <RestFieldItem
                    source="chargedAt"
                    header="orders.details.date"
                    sorter
                    width={200}
                    format={(chargedAt) => (
                      <p style={{ textAlign: 'center', width: 'fit-content' }}>
                        {chargedAt &&
                          moment(chargedAt).format('DD MMM, YYYY, h:mm:ss a')}
                      </p>
                    )}
                  />
                  <RestFieldItem
                    header="orders.details.billingStatus"
                    source="status"
                    width={80}
                    format={formatBillingStatus}
                  />
                  <RestFieldItem
                    width={130}
                    source="failureReason"
                    header="orders.details.failureReason"
                    format={(data) => <p>{data || 'none'}</p>}
                  />
                </RestTableLayout>
              </ConfigProvider>
            </div>
          </div>
        </Col>
      </Row>
    </DetailsWrapper>
  );
};

OrdersList.propTypes = {};

export default OrdersList;

import React from 'react';
import { ConfigProvider, Empty } from 'antd';
import i18next from 'i18next';
import { useHistory } from 'react-router';
import ShowButton from 'components/RestActions/ShowButton';
import moment from 'moment';
import UserInfo from 'components/RestField/UserInfo';
import { formatBillingStatus } from 'utils/formatFieldUtils';
import Reference from 'containers/rest/Reference';
import PropTypes from 'prop-types';
import { numberWithCommas } from 'utils/textUtils';
import List from '../../rest/List';
import RestFieldItem from '../../../components/RestField/RestFieldItem';
import ActionGroup from '../../../components/RestActions/ActionGroup';
import Filter from '../components/Filter';
import { ListWrapper } from './styles';

const OrdersList = (props) => {
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
      <ListWrapper>
        <List
          {...props}
          filter={
            <Filter
              format={(values) => {
                return {
                  ...values,
                  ...(props?.isDashboard
                    ? {
                        updatedAt: {
                          $gte: values?.updatedAt?.[0]
                            ?.startOf('day')
                            .toISOString(),
                          $lte: values?.updatedAt?.[1]
                            ?.endOf('day')
                            .toISOString(),
                        },
                      }
                    : {
                        createdAt: {
                          $gte: values?.createdAt?.[0]
                            ?.startOf('day')
                            .toISOString(),
                          $lte: values?.createdAt?.[1]
                            ?.endOf('day')
                            .toISOString(),
                        },
                      }),
                };
              }}
              isDashboard={props?.isDashboard}
            />
          }
          resource="orders"
          initialFilter={{
            orderBy: `${
              props?.isDashboard ? 'updatedAt:DESC' : 'createdAt:DESC'
            }`,
          }}
          hasCreate={false}
          header="orders.header"
          headerDesc="pageHeader.descOrders"
        >
          <RestFieldItem
            source="transactionId"
            header="orders.orderId"
            width={200}
            format={(orderId, row) => (
              <UserInfo
                prefixLink={`/orders/${row?.id}/details`}
                record={{
                  ...row,
                  orderId,
                }}
                nameProp="orderId"
                showAvt={false}
                {...(props?.isDashboard && {
                  classNameLink: 'orderIdLink',
                })}
              />
            )}
          />

          <RestFieldItem
            source="user.firstName"
            header="orders.name"
            width={200}
            {...(props.isDashboard
              ? {
                  format: (firstName, row) => (
                    <UserInfo
                      prefixLink={`/customers?account=${encodeURIComponent(
                        row?.user?.email,
                      )}`}
                      record={{
                        ...row,
                        firstName:
                          firstName && row?.user?.lastName
                            ? `${firstName || ''} ${row?.user?.lastName || ''}`
                            : `${row?.user?.email}`,
                      }}
                      nameProp="firstName"
                      showAvt={false}
                      classNameLink="nameLink"
                    />
                  ),
                }
              : {
                  format: (firstName, row) => (
                    <p>
                      {firstName && row?.user?.lastName
                        ? `${firstName || ''} ${row?.user?.lastName || ''}`
                        : `${row?.user?.email}`}
                    </p>
                  ),
                })}
          />
          <Reference
            resource="businesses"
            source="businessId"
            header="orders.business"
            width={200}
          >
            <RestFieldItem
              source="businessName"
              {...(props.isDashboard && {
                format: (businessName, row) => (
                  <UserInfo
                    prefixLink={`/businesses/${row?.id}/details/orders`}
                    record={{
                      ...row,
                      businessName,
                    }}
                    nameProp="businessName"
                    showAvt={false}
                    classNameLink="nameLink"
                  />
                ),
              })}
            />
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
            <RestFieldItem
              source="name"
              {...(props.isDashboard && {
                format: (name, row) => (
                  <UserInfo
                    prefixLink={`/programs/${row?.programId}/phases/${row?.id}/weeks/loading`}
                    record={{
                      ...row,
                      name,
                    }}
                    nameProp="name"
                    showAvt={false}
                    classNameLink="nameLink"
                  />
                ),
              })}
            />
          </Reference>
          <Reference
            resource="programs"
            source="programId"
            header="orders.courseName"
            width={200}
          >
            <RestFieldItem
              source="name"
              format={(name) => <p style={{ width: 200 }}>{name}</p>}
            />
          </Reference>
          <RestFieldItem
            width={80}
            format={(price) => (
              <b className="ml-6">
                $
                {numberWithCommas(price)}
              </b>
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
          {props?.isDashboard ? (
            <RestFieldItem
              source="updatedAt"
              header="orders.updatedDate"
              sorter
              width={200}
              format={(updatedAt) => (
                <p style={{ width: 200 }}>
                  {updatedAt &&
                    moment(updatedAt).format('DD MMM, YYYY, h:mm:ss a')}
                </p>
              )}
            />
          ) : (
            <RestFieldItem
              source="createdAt"
              header="orders.paymentDate"
              sorter
              width={200}
              format={(createdAt) => (
                <p style={{ width: 200 }}>
                  {createdAt &&
                    moment(createdAt).format('DD MMM, YYYY, h:mm:ss a')}
                </p>
              )}
            />
          )}

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
      </ListWrapper>
    </ConfigProvider>
  );
};

OrdersList.propTypes = {
  isDashboard: PropTypes.bool,
};

export default OrdersList;

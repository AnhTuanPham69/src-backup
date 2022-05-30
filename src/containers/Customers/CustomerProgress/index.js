import React, { useEffect } from 'react';
import { ConfigProvider, Empty, Row, Col } from 'antd';
import i18next from 'i18next';
import { useHistory, useParams } from 'react-router';
import ShowButton from 'components/RestActions/ShowButton';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import {
  getByIdCustomers,
  clearCurrentCustomer,
} from '@redux/customers/actions';
import { USER_PROGRAM_STATUS, FORMAT_DATE } from 'configs/localData';
import TagCustom from 'components/common/TagCustom';
import CustomBreadcrumb from 'components/common/Breadcrumb';
import PageTitle from 'components/common/PageTitle';
import List from '../../rest/List';
import RestFieldItem from '../../../components/RestField/RestFieldItem';
import ActionGroup from '../../../components/RestActions/ActionGroup';
import InfoCard from '../components/InfoCard';

const CustomerProgress = () => {
  const history = useHistory();
  const params = useParams();
  const dispatch = useDispatch();
  const currentCustomer = useSelector((state) => state.customers.currentData);

  const BREADCRUMB = [
    {
      title: i18next.t('customers.header'),
      path: '/customers',
    },
    {
      title:
        !currentCustomer?.user?.firstName && !currentCustomer?.user?.lastName
          ? currentCustomer?.user?.email
          : `${currentCustomer?.user?.firstName || ''} ${
              currentCustomer?.user?.lastName || ''
            }`,
    },
  ];

  useEffect(() => {
    dispatch(
      getByIdCustomers({
        data: {
          id: params?.id,
        },
        options: {
          isRequestApi: true,
        },
      }),
    );
    return () => {
      dispatch(clearCurrentCustomer());
    };
  }, [params?.id]);

  return (
    <>
      <CustomBreadcrumb data={BREADCRUMB} />
      <PageTitle>
        <div className="desc-header">
          {i18next.t('pageHeader.descCustomers')}
        </div>
      </PageTitle>
      <Row gutter={16}>
        <Col span={8}>
          <InfoCard
            customerName={`${
              currentCustomer?.user?.firstName ||
              currentCustomer?.user?.lastName
                ? `${currentCustomer?.user?.firstName || ''} ${
                    currentCustomer?.user?.lastName || ''
                  }`
                : currentCustomer?.user?.email
            }`}
            image={currentCustomer?.user?.avatar}
            generalPhoneNo={currentCustomer?.user?.phone}
            generalMail={currentCustomer?.user?.email}
            generalDate={moment(currentCustomer?.createdAt).format(
              FORMAT_DATE,
            )}
            linkedinLink={currentCustomer?.user?.linkedinLink}
            twitterLink={currentCustomer?.user?.twitterLink}
            facebookLink={currentCustomer?.user?.facebookLink}
            address={currentCustomer?.user?.address}
            businessAddress={currentCustomer?.user?.companyName}
            privateMail={currentCustomer?.user?.privateEmail}
            privatePhone={currentCustomer?.user?.privatePhone}
            sectorName={currentCustomer?.user?.sector?.join()}
          />
        </Col>
        <Col span={16}>
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
            {currentCustomer?.userId && params?.businessId && (
              <List
                resource="customers"
                initialFilter={{
                  orderBy: 'createdAt:DESC',
                  filter: {
                    userId: {
                      $eq: currentCustomer?.userId,
                    },
                    businessId: {
                      $eq: params?.businessId,
                    },
                  },
                }}
                hasCreate={false}
                defaultOptions={{
                  customApiResource: 'startup-progresses',
                }}
                noCardWrapper
              >
                <RestFieldItem
                  source="program"
                  width={200}
                  header="customers.courseName"
                  format={(data) => <p>{data?.name}</p>}
                />
                {/* <RestFieldItem
          source="programProgress"
          header="customers.progress"
          format={data => (
            <p>
              {data}
              %
            </p>
          )}
        /> */}
                <RestFieldItem
                  source="createdAt"
                  header="customers.subscribedAt"
                  sorter
                  width={200}
                  format={(createdAt) => (
                    <p>
                      {createdAt &&
                        moment(createdAt).format('DD MMM, YYYY, h:mm:ss a')}
                    </p>
                  )}
                />
                <RestFieldItem
                  width={130}
                  sorters
                  source="status"
                  header="startUps.status"
                  format={(data) => (
                    <TagCustom
                      color={
                        USER_PROGRAM_STATUS.find(
                          (status) => status.value === data,
                        )?.textColor
                      }
                      backgroundColor={
                        USER_PROGRAM_STATUS.find(
                          (status) => status.value === data,
                        )?.color
                      }
                      name={i18next.t(
                        USER_PROGRAM_STATUS.find(
                          (status) => status.value === data,
                        )?.text,
                      )}
                    />
                  )}
                />

                <ActionGroup icon="ic-more">
                  <ShowButton
                    gotoShowPage={(id) =>
                      history.push(
                        `/customers/${params?.id}/${params?.businessId}/progress/${id}/details/programPhase`,
                      )}
                  />
                </ActionGroup>
              </List>
            )}
          </ConfigProvider>
        </Col>
      </Row>
    </>
  );
};

export default CustomerProgress;

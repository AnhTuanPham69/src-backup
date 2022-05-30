import React from 'react';
import { ConfigProvider, Empty,Switch } from 'antd';
import i18next from 'i18next';
import { useHistory } from 'react-router';
import ShowButton from 'components/RestActions/ShowButton';
import moment from 'moment';
import EditButton from 'components/RestActions/EditButton';
import { useDispatch } from 'react-redux';
import { editBusinesses } from '@redux/businesses/actions';
import List from '../../rest/List';
import RestFieldItem from '../../../components/RestField/RestFieldItem';
import ActionGroup from '../../../components/RestActions/ActionGroup';
import Filter from '../components/Filter';

const BusinessesList = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
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
        {...props}
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
        resource="businesses"
        initialFilter={{
          orderBy: 'createdAt:DESC',
        }}
        redirects={{
          create: 'screen',
        }}
        header="businesses.header"
        headerDesc="pageHeader.descBusiness"
        hasCreateHeaderButton
        hasCreate={false}
        createHeader="businesses.create"
      >
        <RestFieldItem
          source="businessName"
          header="businesses.businessName"
          width={200}
        />

        <RestFieldItem
          width={200}
          source="contactName"
          header="businesses.contactName"
        />

        <RestFieldItem
          width={200}
          source="contactEmail"
          header="businesses.contactEmail"
        />

        <RestFieldItem
          width={200}
          source="contactPhoneNumber"
          header="businesses.contactPhoneNumber"
        />

        <RestFieldItem
          width={200}
          source="country"
          header="businesses.country"
        />
        <RestFieldItem
          width={200}
          source="address"
          header="businesses.address"
        />
        <RestFieldItem
          source="createdAt"
          header="businesses.createdAt"
          sorter
          width={200}
          format={(createdAt) => (
            <p>
              {createdAt && moment(createdAt).format('DD MMM, YYYY, h:mm:ss a')}
            </p>
          )}
        />
        <RestFieldItem
          source="isActive"
          width={88}
          header="businesses.status"
          format={(data, record) => (
            <Switch
              // checkedChildren="Active"
              // unCheckedChildren="DeActive"
              checked={data}
              onClick={(e) => {
                dispatch(
                  editBusinesses({
                    data: {
                      id: record?.id,
                      isActive: e,
                      businessName: record?.businessName,
                    },
                    options: {
                      isRequestApi: true,
                    },
                  }),
                );
              }}
            />
          )}
        />
        <ActionGroup icon="ic-more">
          <ShowButton
            gotoShowPage={(id) => history.push(`/businesses/${id}/details/orders`)}
          />
          <EditButton gotoShowPage={(id) => history.push(`/businesses/${id}/edit`)} />
        </ActionGroup>
      </List>
    </ConfigProvider>
  );
};

BusinessesList.propTypes = {};

export default BusinessesList;

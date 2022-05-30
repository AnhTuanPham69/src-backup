import React from 'react';
import { ConfigProvider, Empty } from 'antd';
import i18next from 'i18next';
import ShowButton from 'components/RestActions/ShowButton';
import { useHistory } from 'react-router';
import UserInfo from 'components/RestField/UserInfo';
import moment from 'moment';
import Filter from '../components/Filter';
import List from '../../rest/List';
import RestFieldItem from '../../../components/RestField/RestFieldItem';
import ActionGroup from '../../../components/RestActions/ActionGroup';
import DeleteButton from '../../../components/RestActions/DeleteButton';

const SupportsList = () => {
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
        // filter={<Filter />}
        resource="supports"
        initialFilter={{
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
        defaultOptions={{
          customApiResource: 'contact-us',
        }}
        hasCreate={false}
        headerDesc="pageHeader.descSupportRequests"
      >
        <RestFieldItem
          source="name"
          header="supports.name"
          width={200}
          format={(data, row) => (
            <UserInfo
              record={{
                ...row?.name,
                name: data,
              }}
              nameProp="name"
              prefixLink={`#supports/${row?.id}`}
            />
          )}
        />
        <RestFieldItem
          width={200}
          source="email"
          header="supports.email"
          format={(data) => <p style={{ width: 200 }}>{data}</p>}
        />
        <RestFieldItem
          width={180}
          source="company"
          header="supports.company"
          format={(data) => <p style={{ width: 180 }}>{data}</p>}
        />
        <RestFieldItem
          width={180}
          source="country"
          header="supports.country"
          format={(data) => <p style={{ width: 180 }}>{data}</p>}
        />

        <RestFieldItem
          source="createdAt"
          header="supports.createdAt"
          sorter
          width={200}
          format={(createdAt) =>
            {return (
              <p style={{whiteSpace: 'nowrap'}}>
                {createdAt && moment(createdAt).format('DD MMM, YYYY')}
              </p>
            )}}
        />
        <RestFieldItem
          source="message"
          header="supports.message"
          width={200}
          format={(data) => (
            <p
              style={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                width: 200,
              }}
            >
              {data}
            </p>
          )}
        />
        <ActionGroup icon="ic-more">
          <ShowButton gotoShowPage={(id) => history.push(`#supports/${id}`)} />
          <DeleteButton deleteKey="name" />
        </ActionGroup>
      </List>
    </ConfigProvider>
  );
};

SupportsList.propTypes = {};

export default SupportsList;

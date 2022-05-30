import React from 'react';
import { ConfigProvider, Empty } from 'antd';
import { useParams } from 'react-router';
import i18next from 'i18next';
import EditButton from 'components/RestActions/EditButton';
import Reference from 'containers/rest/Reference';
import UserInfo from 'components/RestField/UserInfo';
import ListLayout from 'components/common/ListLayout';
import List from '../../rest/List';
import RestFieldItem from '../../../components/RestField/RestFieldItem';
import ActionGroup from '../../../components/RestActions/ActionGroup';
import DeleteButton from '../../../components/RestActions/DeleteButton';
import GridPhotos from '../../../components/common/GridPhotos';

const GetsList = () => {
  const { periodId } = useParams();
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
      <ListLayout>
        <List
          resource="gets"
          noCardWrapper
          hasCreate
          defaultOptions={{
            customApiResource: 'service-providers',
          }}
          initCreateData={{
            periodId,
          }}
          initialFilter={{
            limit: 100,
            filter: {
              limit: 100,
              programPhasePeriodId: {
                $eq: periodId,
              },
            },
          }}
          createHeader={i18next.t('weeks.gets.createTitle')}
          hasActions
          isShowPagination={false}
        >
          <RestFieldItem
            width={140}
            source="logo"
            header="weeks.gets.uploadFile"
            format={(data) => (
              <GridPhotos images={[data]} width={80} height={80} />
            )}
          />
          <RestFieldItem
            width={140}
            source="companyName"
            header="weeks.gets.companyName"
            format={(data) => <b className="text-primary t-14-1.57">{data}</b>}
          />
          <Reference
            resource="serviceTypes"
            source="serviceTypeId"
            header="weeks.gets.providerType"
            defaultOptions={{
              customApiResource: 'service-types',
            }}
          >
            <RestFieldItem
              source="name"
              format={(data) => (
                <div
                  style={{
                    borderRadius: 20,
                    padding: '5px 10px',
                    border: '1px solid #16457B',
                    color: '#16457B',
                    fontWeight: '700',
                    width: 'fit-content',
                  }}
                >
                  {data}
                </div>
              )}
            />
          </Reference>
          <Reference
            source="providerId"
            resource="users"
            header="weeks.gets.provider"
            width={150}
          >
            <RestFieldItem
              source="firstName"
              header="weeks.gets.provider"
              format={(firstName, row) => (
                <UserInfo
                  record={{
                    ...row,
                    fullName: `${firstName || ''} ${row?.lastName || ''}`,
                  }}
                  nameProp="fullName"
                  avatarProp="avatar"
                  roleProp="parentRecord.email"
                  isLink={false}
                />
              )}
            />
          </Reference>
          <RestFieldItem 
            width={150}
            source="description"
            header="weeks.gets.description"
          />
          <RestFieldItem
            width={150}
            source="links"
            header="weeks.gets.link"
            format={(data) => data && (
              <a target="_blank" href={data[0]} rel="noreferrer">
                {data[0]}
              </a>
            )}
          />
          <ActionGroup icon="ic-more">
            <EditButton />
            <DeleteButton title="weeks.gets.header" deleteKey="companyName" />
          </ActionGroup>
        </List>
      </ListLayout>
    </ConfigProvider>
  );
};

GetsList.propTypes = {};

export default GetsList;

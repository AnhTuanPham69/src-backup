import React from 'react';
import { useSelector } from 'react-redux';
import { ConfigProvider, Empty } from 'antd';
import i18next from 'i18next';
import moment from 'moment';
import { ACTIVITY_TYPE } from 'configs/localData';
import Reference from 'containers/rest/Reference';
import { ActivitiesWrapper } from './styles';
import List from '../../rest/List';
import RestFieldItem from '../../../components/RestField/RestFieldItem';

const Activities = () => {
  const currentStartUp = useSelector((state) => state.startUps.currentData);

  const taskRecord = (activityType, row) => {
    const action = i18next.t(
      ACTIVITY_TYPE.find((type) => type.value === activityType)?.text,
    );

    const name = row?.user?.firstName
      ? `${row.user.firstName} ${row.user.lastName}`
      : `${row.user.email}`;

    const title = row?.concept?.name ? `${row?.concept?.name}` : `${row?.toDo?.name}`

    return `${name} ${action} ${title}`
  };

  return (
    <ActivitiesWrapper>
      {currentStartUp?.userId && (
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
            resource="activities"
            initialFilter={{
              filter: {
                userId: {
                  $eq: currentStartUp?.userId,
                },
              },
            }}
            hasCreate={false}
            noCardWrapper
          >
            <RestFieldItem
              source="type"
              header="startUps.activities.name" 
              format={(data, row) => (
                <div>
                  {taskRecord(data, row)}
                </div>
              )}
            />
            <Reference
              resource="programPhases"
              source="programPhaseId"
              header="startUps.activities.programPhases"
              defaultOptions={{
                customApiResource: 'program-phases',
              }}
            >
              <RestFieldItem source="name" />
            </Reference>
            <RestFieldItem
              source="createdAt"
              header="startUps.activities.time"
              sorter
              format={(createdAt) => (
                <p>
                  {createdAt && moment(createdAt).format('DD MMM, YYYY')}
                </p>
              )}
            />
          </List>
        </ConfigProvider>
      )}
    </ActivitiesWrapper>
  );
};

export default Activities;

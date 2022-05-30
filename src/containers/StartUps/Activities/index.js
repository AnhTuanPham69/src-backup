import React from 'react';
import { useSelector } from 'react-redux';
import { ConfigProvider, Empty } from 'antd';
import i18next from 'i18next';
import moment from 'moment';
import { ACTIVITY_TYPE } from 'configs/localData';
import { ActivitiesWrapper } from './styles';
import List from '../../rest/List';
import RestFieldItem from '../../../components/RestField/RestFieldItem';

const Activities = () => {
  const currentStartUp = useSelector((state) => state.startUps.currentData);

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
            <RestFieldItem source="name" header="startUps.activities.name" />
            <RestFieldItem
              source="type"
              header="startUps.activities.type"
              sorter
              format={(data) => (
                <div
                  style={{
                    color: ACTIVITY_TYPE.find((type) => type.value === data)
                      ?.textColor,
                  }}
                >
                  {i18next.t(
                    ACTIVITY_TYPE.find((type) => type.value === data)?.text,
                  )}
                </div>
              )}
            />
            <RestFieldItem
              source="createdAt"
              header="startUps.activities.time"
              sorter
              format={(createdAt) => (
                <p style={{ textAlign: 'center' }}>
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

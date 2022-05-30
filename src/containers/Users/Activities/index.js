import React from 'react';
import { ConfigProvider, Empty } from 'antd';
import i18next from 'i18next';
import { useParams } from 'react-router';
import moment from 'moment';
import { ACTIVITY_TYPE } from 'configs/localData';
import List from '../../rest/List';
import RestFieldItem from '../../../components/RestField/RestFieldItem';

const Activities = () => {
  const { id } = useParams();

  return (
    <div>
      {id && (
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
                  $eq: id,
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
    </div>
  );
};

export default Activities;

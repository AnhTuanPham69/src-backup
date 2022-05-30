import React, { useState } from 'react';
import { ConfigProvider, Empty, Select, Tabs } from 'antd';
import i18next from 'i18next';
import moment from 'moment';
import DownloadButton from 'components/RestActions/DownloadButton';
import Reference from 'containers/rest/Reference';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import RestFieldItem from '../../../components/RestField/RestFieldItem';
import List from '../../rest/List';
import ActionGroup from '../../../components/RestActions/ActionGroup';
import { ResourcesWrapper } from './styles';

const { Option } = Select;
const { TabPane } = Tabs;

const Resources = () => {
  const [tabKey, setTabKey] = useState('document');
  const currentStartUps = useSelector((state) => state.startUps.currentData);
  const { id } = useParams();
  const handleChange = (value) => {
    setTabKey(value);
  };

  return currentStartUps?.user?.id && id ? (
    <ResourcesWrapper>
      <div className="header-section">
        <Select
          defaultValue="document"
          onChange={handleChange}
          className="phase-selector"
        >
          <Option value="document">{i18next.t('startUps.document')}</Option>
          <Option value="startupUpload">{i18next.t('startUps.startupUpload')}</Option>
        </Select>
      </div>
      <Tabs activeKey={tabKey || 'document'}>
        <TabPane tab={i18next.t('startUps.document')} key="document">
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
              resource="resources"
              initialFilter={{
                orderBy: 'updatedAt:DESC',
              }}
              hasCreate={false}
              noCardWrapper
              defaultOptions={{
                customApiResource: `startup-progresses/${id}/resources`,
              }}
              xScroll={800}
            >
              <RestFieldItem
                source="name"
                header="startUps.resources.fileName"
              />
              <Reference
                resource="programPhases"
                source="programPhaseId"
                header="startUps.resources.phaseName"
                defaultOptions={{
                  customApiResource: 'program-phases',
                }}
              >
                <RestFieldItem source="name" />
              </Reference>
              <Reference
                resource="periods"
                source="programPhasePeriodId"
                header="startUps.resources.week"
                defaultOptions={{
                  customApiResource: 'program-phase-periods',
                }}
                width={100}
              >
                <RestFieldItem
                  source="name"
                  format={(data, record) => (
                    <p>
                      {data}
                      {record?.periodNumber}
                    </p>
                  )}
                />
              </Reference>
              <RestFieldItem
                width={130}
                source="updatedAt"
                header="startUps.resources.updatedAt"
                sorter
                format={(updatedAt) =>
                  updatedAt && moment(updatedAt).format('DD MMM, YYYY')}
              />
              <ActionGroup icon="ic-more" widthAction={100}>
                {/* <ShowButton
                  gotoShowPage={(id, source, record) => {
                    window.open(record?.url, '_blank');
                  }}
                /> */}
                <DownloadButton
                  gotoShowPage={(id, source, record) => {
                    window.open(record?.url, '_blank');
                  }}
                />
              </ActionGroup>
            </List>
          </ConfigProvider>
        </TabPane>
        <TabPane tab={i18next.t('startUps.startupUpload')} key="startupUpload">
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
              resource="clientResources"
              initialFilter={{
                orderBy: 'updatedAt:DESC',
                filter: {
                  userId: {
                    $eq: currentStartUps?.user?.id,
                  },
                  programId: {
                    $eq: currentStartUps?.programId,
                  },
                },
              }}
              hasCreate={false}
              noCardWrapper
              defaultOptions={{
                customApiResource: `client-resources`,
              }}
            >
              <RestFieldItem
                source="name"
                header="startUps.resources.fileName"
                width={200}
              />
              <Reference
                resource="programPhases"
                source="programPhaseId"
                header="startUps.resources.phaseName"
                defaultOptions={{
                  customApiResource: 'program-phases',
                }}
                width={120}
              >
                <RestFieldItem source="name" />
              </Reference>
              <Reference
                resource="periods"
                source="programPhasePeriodId"
                header="startUps.resources.week"
                defaultOptions={{
                  customApiResource: 'program-phase-periods',
                }}
                width={100}
              >
                <RestFieldItem
                  source="name"
                  format={(data, record) => (
                    <p>
                      {data}
                      {record?.periodNumber}
                    </p>
                  )}
                />
              </Reference>
              <RestFieldItem
                width={120}
                source="updatedAt"
                header="startUps.resources.updatedAt"
                sorter
                format={(updatedAt) =>
                  updatedAt && moment(updatedAt).format('DD MMM, YYYY')}
              />
              <ActionGroup icon="ic-more" widthAction={100}>
                {/* <ShowButton
                  gotoShowPage={(id, source, record) => {
                    window.open(record?.url, '_blank');
                  }}
                /> */}
                <DownloadButton
                  gotoShowPage={(id, source, record) => {
                    window.open(record?.url, '_blank');
                  }}
                />
              </ActionGroup>
            </List>
          </ConfigProvider>
        </TabPane>
      </Tabs>
    </ResourcesWrapper>
  ) : (
    <div />
  );
};

export default Resources;

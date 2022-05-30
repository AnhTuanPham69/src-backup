import React from 'react';
import { ConfigProvider, Empty } from 'antd';
import i18next from 'i18next';
import styled from 'styled-components';
import EditButton from 'components/RestActions/EditButton';
import DeleteButton from 'components/RestActions/DeleteButton';
import { ACTIVE_TYPES } from 'configs/localData';
import TagCustom from 'components/common/TagCustom';
import Filter from '../components/Filter';
import RestFieldItem from '../../../components/RestField/RestFieldItem';
import List from '../../rest/List';
import ActionGroup from '../../../components/RestActions/ActionGroup';

const ServiceTypesList = () => {
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
          filter={<Filter />}
          resource="serviceTypes"
          initialFilter={{
            orderBy: 'createdAt:DESC',
          }}
          createHeader="serviceTypes.createPage"
          hasCreateHeaderButton
          header="serviceTypes.header"
          hasCreate={false}
          defaultOptions={{
            customApiResource: 'service-types',
          }}
        >
          <RestFieldItem
            source="name"
            header="serviceTypes.name"
            width={200}
          />
          <RestFieldItem source="description" header="serviceTypes.description" />
          <RestFieldItem
            source="isActive"
            width={100}
            header="programs.isActive"
            format={(data) => (
              <TagCustom
                color={
                  ACTIVE_TYPES.find((status) => status.value === data)?.textColor
                }
                backgroundColor={
                  ACTIVE_TYPES.find((status) => status.value === data)?.color
                }
                name={i18next.t(
                  ACTIVE_TYPES.find((status) => status.value === data)?.text,
                )}
              />
            )}
          />
          <ActionGroup icon="ic-more">
            <EditButton />
            <DeleteButton deleteKey="name" />
          </ActionGroup>
        </List>
      </ListWrapper>
    </ConfigProvider>
  );
};

const ListWrapper = styled.div`
  .viewContent {
    background: transparent;
  }
`;

export default ServiceTypesList;

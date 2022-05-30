import React from 'react';
import { ConfigProvider, Empty } from 'antd';
import i18next from 'i18next';
import styled from 'styled-components';
import EditButton from 'components/RestActions/EditButton';
import DeleteButton from 'components/RestActions/DeleteButton';
import { ONBOARDING_TYPES } from 'configs/localData';
import TagCustom from 'components/common/TagCustom';
import Filter from '../components/Filter';
import RestFieldItem from '../../../components/RestField/RestFieldItem';
import List from '../../rest/List';
import ActionGroup from '../../../components/RestActions/ActionGroup';

const OnboardingsList = () => {
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
          resource="onboardings"
          initialFilter={{
            orderBy: 'createdAt:DESC',
          }}
          createHeader="onboardings.createPage"
          hasCreateHeaderButton
          header="onboardings.header"
          hasCreate={false}
        >
          <RestFieldItem
            source="description"
            header="onboardings.description"
          />
          <RestFieldItem
            source="status"
            width={100}
            header="onboardings.status"
            format={(data) => (
              <TagCustom
                color={
                  ONBOARDING_TYPES.find((status) => status.value === data)
                    ?.textColor
                }
                backgroundColor={
                  ONBOARDING_TYPES.find((status) => status.value === data)
                    ?.color
                }
                name={i18next.t(
                  ONBOARDING_TYPES.find((status) => status.value === data)?.text,
                )}
              />
            )}
          />
          <ActionGroup icon="ic-more">
            <EditButton />
            <DeleteButton deleteKey="description" />
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

export default OnboardingsList;

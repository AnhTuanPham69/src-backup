import React from 'react';
import { ConfigProvider, Empty } from 'antd';
import i18next from 'i18next';
import styled from 'styled-components';
import EditButton from 'components/RestActions/EditButton';
import DeleteButton from 'components/RestActions/DeleteButton';
import Reference from 'containers/rest/Reference';
import Filter from '../components/Filter';
import RestFieldItem from '../../../components/RestField/RestFieldItem';
import List from '../../rest/List';
import ActionGroup from '../../../components/RestActions/ActionGroup';

const QuestionnairePagesList = () => {
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
          resource="questionnairePages"
          initialFilter={{
            orderBy: 'createdAt:DESC',
          }}
          createHeader="questionnairePages.createPage"
          hasCreateHeaderButton
          header="questionnairePages.header"
          hasCreate={false}
          defaultOptions={{
            customApiResource: 'questionnaire-pages',
          }}
        >
          <RestFieldItem
            source="name"
            header="questionnairePages.name"
            width={200}
          />
          <Reference
            defaultOptions={{
              customApiResource: 'questionnaire-pages',
            }}
            resource="questionnairePages"
            source="prePageId"
            header="questionnairePages.prePage"
          >
            <RestFieldItem
              source="name"
              format={(prePage, row) => (
                row?.referenceField ? prePage : (
                  <b>{i18next.t('questionnairePages.firstPage')}</b>
                )
              )}
            />
          </Reference>
          <Reference
            defaultOptions={{
              customApiResource: 'questionnaire-pages',
            }}
            resource="questionnairePages"
            source="nextPageId"
            header="questionnairePages.nextPage"
          >
            <RestFieldItem
              source="name"
              format={(nextPage, row) => (
                row?.referenceField ? nextPage : (
                  <b>{i18next.t('questionnairePages.lastPage')}</b>
                )
              )}
            />
          </Reference>
          <RestFieldItem
            source="numbQuestion"
            header="questionnairePages.numbQuestion"
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

export default QuestionnairePagesList;

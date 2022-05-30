import React, { useState } from 'react';
import { Checkbox, Row, Col, Empty, Select, Switch} from 'antd';
import i18next from 'i18next';
import RestInputItem from 'components/RestInput/RestInputItem';
import RestSelect from 'components/RestInput/RestSelect';
import ReferenceInput from 'containers/rest/ReferenceInput';
import RestInputAddition from 'components/RestInput/RestInputAddition';

export const questionTypes = [
  {
    id: 'text',
    name: 'questionnairePages.text',
  },
  {
    id: 'onechoice',
    name: 'questionnairePages.onechoice',
  },
  {
    id: 'multichoice',
    name: 'questionnairePages.multichoice',
  },
  {
    id: 'rating',
    name: 'questionnairePages.rating',
  },
]

const ServiceTypeForm = () => {
  const [isFirstPage, setIsFirstPage] = useState(false);
  const [isLastPage, setIsLastPage] = useState(false);

  const handleKeyPress = e => e.keyCode === 13 ? e.preventDefault() : '';

  const renderEmptyState = () => (
    <Empty
      description={
        <div
          style={{
            fontSize: '14px',
          }}
        >
          <div>{i18next.t('questionnairePages.noData')}</div>
          <div>{i18next.t('questionnairePages.enterQuestions')}</div>
        </div>
      }
    />
  );

  return (
    <Row gutter={20}>
      <Col span={24}>
        <RestInputItem source="name" header="questionnairePages.name" />
      </Col>
      <Col span={12}>
        <div>
          <Checkbox checked={isFirstPage} onChange={e => setIsFirstPage(e.target.checked)}>
            {i18next.t('questionnairePages.isFirstPage')}
          </Checkbox>
        </div>
        {!isFirstPage && (
          <ReferenceInput
            resource="questionnairePages"
            source="prePageId"
            defaultOptions={{
              customApiResource: 'questionnaire-pages',
            }}
          >
            <RestSelect
              allowClear={false}
              required
              header="questionnairePages.prePage"
              valueProp="id"
              titleProp="name"
            />
          </ReferenceInput>
        )}
      </Col>
      <Col span={12}>
        <div>
          <Checkbox checked={isLastPage} onChange={e => setIsLastPage(e.target.checked)}>
            {i18next.t('questionnairePages.isLastPage')}
          </Checkbox>
        </div>
        {!isLastPage && (
          <ReferenceInput
            resource="questionnairePages"
            source="nextPageId"
            defaultOptions={{
              customApiResource: 'questionnaire-pages',
            }}
          >
            <RestSelect
              allowClear={false}
              required
              header="questionnairePages.nextPage"
              valueProp="id"
              titleProp="name"
            />
          </ReferenceInput>
        )}
      </Col>
      <Col span={24}>
        <RestInputAddition
          header="questionnairePages.questions"
          hasDivider
          source="questions"
          addBtnText="questionnairePages.addNew"
          renderEmptyState={renderEmptyState}
          isShowAddBtn
          defaultValue={[{}]}
        >
          <RestSelect
            required
            colLayout={{span: 24}}
            header="questionnairePages.questionType"
            source="questionType"
            valueProp="id"
            titleProp="name"
            resourceData={questionTypes}
            formatText={(val) => i18next.t(val)}
          />
          <RestInputItem colLayout={{span: 24}} required source="question" header="questionnairePages.question" />
          <RestInputItem 
            colLayout={{span: 24}}
            source="options"
            header="questionnairePages.options"
            placeholder="questionnairePages.optionsPlaceholder"
            ContentComponent={Select}
            mode="tags"
            open={false}
            ruleType="array"
            onKeyDown={handleKeyPress}
          />
          <RestInputItem
            colLayout={{span: 24}}
            source="isRequired"
            header="questionnairePages.isRequired"
            ruleType="boolean"
            ContentComponent={Switch}
          />
        </RestInputAddition>
      </Col>
    </Row>
  )};

ServiceTypeForm.propTypes = {};

export default ServiceTypeForm;

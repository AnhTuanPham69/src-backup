import React from 'react';
import { Row, Col, Empty, Select, Switch } from 'antd';
import i18next from 'i18next';
import RestInputItem from 'components/RestInput/RestInputItem';
import RestSelect from 'components/RestInput/RestSelect';
import RestInputAddition from 'components/RestInput/RestInputAddition';
import { questionTypes } from '../CreateForm';

const ServiceTypeForm = () => {
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
      <Col span={24}>
        <RestInputAddition
          header="questionnairePages.questions"
          hasDivider
          source="questions"
          addBtnText="questionnairePages.addNew"
          renderEmptyState={renderEmptyState}
          isShowAddBtn
        >
          <RestSelect
            required
            colLayout={{span: 24}}
            header="questionnairePages.questionType"
            source="questionType"
            valueProp="id"
            titleProp="name"
            resourceData={questionTypes}
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

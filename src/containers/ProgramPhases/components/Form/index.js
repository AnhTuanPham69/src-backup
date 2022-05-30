import React from 'react';
import { InputNumber, Row, Col, Select, Switch } from 'antd';
import RestInputItem from 'components/RestInput/RestInputItem';
import RestMultiPhotos from 'components/RestInput/RestMultiPhotos';
import i18next from 'i18next';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ProgramPhasesForm = ({ isEdit, deleteList, setDeleteList }) => {
  const handleKeyPress = (e) => (e.keyCode === 13 ? e.preventDefault() : '');
  return (
    <FormWrapper>
      <label className="section-header">
        {i18next.t('programs.phases.info')}
      </label>
      <Row gutter={16}>
        <Col span={10}>
          <RestInputItem
            required
            source="name"
            header="programPhases.name"
            placeholder="programPhases.placeholderName"
          />
        </Col>
        <Col span={2}>
          <RestInputItem
            source="isActive"
            header="programPhases.status"
            ruleType="boolean"
            ContentComponent={Switch}
          />
        </Col>
        <Col span={6}>
          <RestInputItem
            source="phaseNumber"
            header="programPhases.phaseNumber"
            ruleType="number"
            ContentComponent={InputNumber}
            placeholder="programPhases.placeholderPhaseNumber"
            min={1}
            getValueFromEvent={(value) => (value > 1 ? value : 1)}
          />
        </Col>
        <Col span={6}>
          <RestInputItem
            source="totalPeriod"
            header="programPhases.totalPeriod"
            ruleType="number"
            min={1}
            max={20}
            disabled={isEdit}
            ContentComponent={InputNumber}
            placeholder="programPhases.placeholderWeek"
            required
          />
        </Col>
        <Col span={24}>
          <RestInputItem
            source="description"
            header="programPhases.description"
            placeholder="programPhases.placeholderDescription"
          />
        </Col>
        <Col span={24}>
          <RestMultiPhotos
            required
            source="images"
            header="programs.phases.images"
            deleteList={deleteList}
            setDeleteList={setDeleteList}
          />
        </Col>
      </Row>
      {!isEdit && (
        <>
          <label className="section-header">
            {i18next.t('programs.phases.subscriptionPlan')}
          </label>
          <Row gutter={16}>
            <Col span={12}>
              <RestInputItem
                source="subscriptionPlan.quantity"
                header="programs.subscriptionPlan.quantity"
                ruleType="number"
                ContentComponent={InputNumber}
                min={2}
                required
              />
            </Col>
            <Col span={12}>
              <RestInputItem
                source="subscriptionPlan.price"
                header="programs.subscriptionPlan.price"
                ruleType="number"
                ContentComponent={InputNumber}
                min={0}
                required
              />
            </Col>
          </Row>
        </>
      )}
      <label className="section-header">
        {i18next.t('programs.phases.marketingContent')}
      </label>
      <RestInputItem
        source={
          isEdit
            ? 'programPlanSubscription.features'
            : 'subscriptionPlan.features'
        }
        header="programs.subscriptionPlan.features"
        placeholder="programs.recommendDataPlaceholder"
        ContentComponent={Select}
        mode="tags"
        open={false}
        ruleType="array"
        onKeyDown={handleKeyPress}
        required
      />
      <RestInputItem
        source={
          isEdit
            ? 'programPlanSubscription.learnData'
            : 'subscriptionPlan.learnData'
        }
        header="programs.subscriptionPlan.learnData"
        placeholder="programs.contentPlaceholder"
        ContentComponent={Select}
        mode="tags"
        open={false}
        ruleType="array"
        onKeyDown={handleKeyPress}
        required
      />
      <RestInputItem
        source={
          isEdit
            ? 'programPlanSubscription.getData'
            : 'subscriptionPlan.getData'
        }
        header="programs.subscriptionPlan.getData"
        placeholder="programs.getDataPlaceholder"
        ContentComponent={Select}
        mode="tags"
        open={false}
        ruleType="array"
        onKeyDown={handleKeyPress}
        required
      />
      {/* <RestInputItem
        ContentComponent={Input.TextArea}
        rows={5}
        source={
          isEdit
            ? 'programPlanSubscription.description'
            : 'subscriptionPlan.description'
        }
        header="programs.subscriptionPlan.description"
        placeholder="programs.subscriptionPlan.placeholderDescription"
      /> */}
    </FormWrapper>
  );
};

export const FormWrapper = styled.div`
  .section-header {
    font-weight: 800;
    font-size: 16px;
    color: ${({ theme }) => theme.palette.secondary};
  }
`;

ProgramPhasesForm.propTypes = {
  isEdit: PropTypes.bool,
  deleteList: PropTypes.array,
  setDeleteList: PropTypes.func,
};

export default ProgramPhasesForm;

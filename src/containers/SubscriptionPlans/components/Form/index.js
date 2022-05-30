import React, { useContext } from 'react';
import { InputNumber, Row, Col, Select } from 'antd';
import { RestInputContext } from 'components/RestInput/RestInputContext';
import ReferenceInput from 'containers/rest/ReferenceInput';
import RestSelect from 'components/RestInput/RestSelect';
import RestInputItem from 'components/RestInput/RestInputItem';
import PropTypes from 'prop-types';

const SubscriptionPlansForm = ({
  isEdit,
  loading,
  programId,
  setProgramId,
  programPhases,
}) => {
  const { form } = useContext(RestInputContext);

  const handleChangeProgram = (programId) => {
    form.setFieldsValue({
      programPhaseId: '',
    });
    setProgramId(programId);
  };

  const handleKeyPress = (e) => (e.keyCode === 13 ? e.preventDefault() : '');

  return (
    <Row gutter={16}>
      <Col md={0} xxl={4} />
      <Col md={12} xxl={8}>
        <ReferenceInput source="programId" resource="programs">
          <RestSelect
            required
            allowClear={false}
            header="subscriptionPlans.programId"
            valueProp="id"
            titleProp="name"
            onChange={handleChangeProgram}
            disabled={isEdit}
          />
        </ReferenceInput>
        <RestSelect
          resourceData={programPhases}
          disabled={!programId || isEdit}
          required
          source="programPhaseId"
          header="subscriptionPlans.phaseId"
          valueProp="id"
          titleProp="name"
          loading={loading}
        />
        <RestInputItem
          required
          source="price"
          header="subscriptionPlans.price"
          ruleType="number"
          min={0}
          ContentComponent={InputNumber}
          disabled={isEdit}
        />
        <RestInputItem
          required
          source="quantity"
          header="subscriptionPlans.quantity"
          ruleType="number"
          min={2}
          max={12}
          ContentComponent={InputNumber}
          disabled={isEdit}
        />
      </Col>
      <Col md={12} xxl={8}>
        <RestInputItem
          source="features"
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
          source="learnData"
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
          source="getData"
          header="programs.subscriptionPlan.getData"
          placeholder="programs.getDataPlaceholder"
          ContentComponent={Select}
          mode="tags"
          open={false}
          ruleType="array"
          onKeyDown={handleKeyPress}
          required
        />
      </Col>
      <Col md={0} xxl={4} />
    </Row>
  );
};

SubscriptionPlansForm.propTypes = {
  programId: PropTypes.string,
  setProgramId: PropTypes.func,
  programPhases: PropTypes.array,
  loading: PropTypes.bool,
  isEdit: PropTypes.bool,
};

export default SubscriptionPlansForm;

import React from 'react';
import { Row, Col, InputNumber } from 'antd';
import SVGIcon from 'components/common/SVGIcon';
import ReferenceInput from 'containers/rest/ReferenceInput';
import RestInputItem from '../../../../components/RestInput/RestInputItem';
import RestSelect from '../../../../components/RestInput/RestSelect';

const Filter = (props) => (
  <Row {...props} gutter={[14, 14]}>
    <Col md={6} sm={12} xs={24}>
      <RestInputItem
        source="planCode.$like"
        placeholder="subscriptionPlans.planCode"
        contentProps={{
          suffix: <SVGIcon type='search' />,
        }}
      />
    </Col>
    <Col md={6} sm={12} xs={24}>
      <RestInputItem
        source="price.$eq"
        placeholder="subscriptionPlans.price"
        ruleType="number"
        ContentComponent={InputNumber}
        min={0}
      />
    </Col>
    <Col md={6} sm={12} xs={24}>
      <ReferenceInput
        resource="programs"
        source="programId.$eq"
      >
        <RestSelect
          placeholder="subscriptionPlans.program"
          valueProp="id"
          titleProp="name"
        />
      </ReferenceInput>
    </Col>
    <Col md={6} sm={12} xs={24}>
      <ReferenceInput
        resource="programPhases"
        source="programPhaseId.$eq"
        defaultOptions={{
          customApiResource: 'program-phases',
        }}
      >
        <RestSelect
          placeholder="subscriptionPlans.programPhase"
          valueProp="id"
          titleProp="name"
        />
      </ReferenceInput>
    </Col>
  </Row>
);

Filter.propTypes = {};

export default Filter;

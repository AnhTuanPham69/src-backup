import React from 'react';
import { Row, Col } from 'antd';
import SVGIcon from 'components/common/SVGIcon';
import ReferenceInput from 'containers/rest/ReferenceInput';
import RestInputItem from '../../../../components/RestInput/RestInputItem';
import RestSelect from '../../../../components/RestInput/RestSelect';

const Filter = (props) => (
  <Row {...props} gutter={[14, 14]}>
    <Col md={8} sm={8} xs={24}>
      <RestInputItem
        source="phaseNumber.$eq"
        placeholder="programPhases.phaseNumber"
        contentProps={{
          suffix: <SVGIcon type="search" />,
        }}
      />
    </Col>
    <Col md={8} sm={8} xs={24}>
      <ReferenceInput resource="programs" source="programId.$eq">
        <RestSelect
          placeholder="subscriptionPlans.program"
          valueProp="id"
          titleProp="name"
        />
      </ReferenceInput>
    </Col>
    <Col md={8} sm={8} xs={24}>
      <RestInputItem
        source="name.$like"
        placeholder="programPhases.name"
        contentProps={{
          suffix: <SVGIcon type="search" />,
        }}
      />
    </Col>
  </Row>
);

Filter.propTypes = {};

export default Filter;

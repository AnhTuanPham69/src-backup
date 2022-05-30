import React from 'react';
import { Row, Col } from 'antd';
import RestInputItem from 'components/RestInput/RestInputItem';
import { InputWrapper, TextAreaWrapper } from './styles';

const SupportsForm = () => {
  return (
    <Row gutter={16}>
      <Col span={12}>
        <RestInputItem
          source="name"
          header="supports.name"
          ContentComponent={InputWrapper}
          placeholder="supports.placeholder.name"
        />
      </Col>
      <Col span={12}>
        <RestInputItem
          source="company"
          header="supports.company"
          ContentComponent={InputWrapper}
          placeholder="supports.placeholder.company"
        />
      </Col>
      <Col span={24}>
        <RestInputItem
          source="email"
          header="supports.email"
          ContentComponent={InputWrapper}
          placeholder="supports.placeholder.email"
        />
      </Col>
      <Col span={24}>
        <RestInputItem
          source="country"
          header="supports.country"
          ContentComponent={InputWrapper}
          placeholder="supports.placeholder.country"
        />
      </Col>
      <Col span={24}>
        <RestInputItem
          source="message"
          header="supports.message"
          ContentComponent={TextAreaWrapper}
          placeholder="supports.placeholder.message"
          autoSize
        />
      </Col>
    </Row>
  );
};

SupportsForm.propTypes = {};

export default SupportsForm;

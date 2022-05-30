import React from 'react';
import { Input, Switch } from 'antd';
import RestInputItem from 'components/RestInput/RestInputItem';

const ServiceTypeForm = () => {
  return (
    <div>
      <RestInputItem source="name" header="serviceTypes.name" required />
      <RestInputItem source="description" header="serviceTypes.description" ContentComponent={Input.TextArea} row={4} />
      <RestInputItem
        source="isActive"
        header="programs.isActive"
        ruleType="boolean"
        ContentComponent={Switch}
      />
    </div>
  )};

ServiceTypeForm.propTypes = {};

export default ServiceTypeForm;

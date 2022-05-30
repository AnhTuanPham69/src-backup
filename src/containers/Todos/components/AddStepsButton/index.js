import React from 'react';
import i18next from 'i18next';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { PlusSquareFilled } from '@ant-design/icons';

const AddStepsButton = ({ onClick, record, source }) => (
  <Button
    type="primary"
    icon={<PlusSquareFilled />}
    onClick={() => onClick(record.id, source, record)}
  >
    {i18next.t('weeks.todoSteps.add')}
  </Button>
)

AddStepsButton.propTypes = {
  record: PropTypes.object,
  source: PropTypes.string,
  onClick: PropTypes.func,
}

export default AddStepsButton;

import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'antd';
import styled from 'styled-components';

const SelectPhase = ({ record, selectedPhases, handleCheck }) => (
  <CheckboxWrapper checked={selectedPhases.findIndex(selectedPhase => selectedPhase === record?.id) > -1} onChange={handleCheck(record.id)} />
)

const CheckboxWrapper = styled(Checkbox)`
  .ant-checkbox-inner {
    border-radius: 2px;
  }
  width: 100%;
  display: flex;
  justify-content: center;
  padding-left: 10px;
`;

SelectPhase.propTypes = {
  record: PropTypes.object,
  selectedPhases: PropTypes.array,
  handleCheck: PropTypes.func,
}

export default SelectPhase;

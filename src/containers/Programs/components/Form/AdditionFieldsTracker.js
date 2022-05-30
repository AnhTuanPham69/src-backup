import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const AdditionFields = ({ phase, add, remove, fieldsNum }) => {
  useEffect(() => {
    if (Number.isInteger(phase) && phase > 0) {
      if (fieldsNum === 0) {
        Array(phase).fill().forEach(() => add());
      }
      if (phase < fieldsNum) {
        Array(fieldsNum - phase).fill().forEach((_e, index) => remove(fieldsNum -index -1));
      }
      if (phase > fieldsNum) {
        Array(phase - fieldsNum).fill().forEach(() => add());
      }
    }
  }, [phase, fieldsNum])
  return (
    <div style={{ display: 'none' }} />
  )
}

AdditionFields.propTypes = {
  phase: PropTypes.number,
  add: PropTypes.func,
  remove: PropTypes.func,
  fieldsNum: PropTypes.number,
}

export default AdditionFields;

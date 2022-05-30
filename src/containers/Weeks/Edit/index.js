import React from 'react';
import { useSelector } from 'react-redux';
import crudSelectors from '@redux/crudSelectors';
import Edit from '../../rest/Edit';
import Form from '../components/Form';

const WeekEdit = (props) => {
  const currentWeek = useSelector(crudSelectors.periods.getCurrentData);
  return (
    <Edit
      {...props}
      resource="periods"
      defaultOptions={{
        customApiResource: 'program-phase-periods',
      }}
      formatOnSubmit={values => ({
        ...values,
        programPhaseId: currentWeek?.programPhaseId,
      })}
    >
      <Form isEdit />
    </Edit>
  );
};

WeekEdit.propTypes = {};

export default WeekEdit;

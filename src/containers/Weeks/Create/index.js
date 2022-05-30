import React from 'react';
import { useLocation } from 'react-router';
import { convertParamsToObject } from 'utils/url';
import Create from '../../rest/Create';
import Form from '../components/Form';

const WeeksCreate = props => {
  const location = useLocation()
  const id = convertParamsToObject(decodeURIComponent(location.hash));
  const programPhaseId = id?.programPhaseId?.substring(1, id.programPhaseId.length - 1);

  return (
    <Create
      {...props}
      resource="periods"
      formatOnSubmit={values => ({
        ...values,
        programPhaseId,
      })}
      defaultOptions={{
        customApiResource: 'program-phase-periods',
      }}
    >
      <Form />
    </Create>
)};

WeeksCreate.propTypes = {};

export default WeeksCreate;

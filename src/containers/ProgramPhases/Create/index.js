import React from 'react';
import { useLocation } from 'react-router';
import { convertParamsToObject } from 'utils/url';
import Create from '../../rest/Create';
import Form from '../components/Form';

const ProgramPhasesCreate = props => {
  const location = useLocation()
  const id = convertParamsToObject(decodeURIComponent(location.hash));
  const programId = id?.programId?.substring(1, id.programId.length - 1);

  return (
    <Create
      {...props}
      resource="programPhases"
      formatOnSubmit={({ totalPeriod, ...values }) => ({
        ...values,
        programId,
        totalPeriod: totalPeriod || 1,
      })}
      defaultOptions={{
        customApiResource: 'program-phases',
      }}
    >
      <Form />
    </Create>
)};

ProgramPhasesCreate.propTypes = {};

export default ProgramPhasesCreate;

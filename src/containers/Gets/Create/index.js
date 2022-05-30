import React from 'react';
import { useLocation } from 'react-router';
import { convertParamsToObject } from 'utils/url';
import Create from '../../rest/Create';
import Form from '../components/Form';

const GetsCreate = (props) => {
  const location = useLocation()
  const id = convertParamsToObject(decodeURIComponent(location.hash));
  const currentPeriodId = id?.periodId?.substring(1, id.periodId.length - 1);
  return (
    <Create
      {...props}
      resource="gets"
      defaultOptions={{
        customApiResource: 'service-providers',
      }}
      formatOnSubmit={(values) => ({
        ...values,
        programPhasePeriodId: currentPeriodId,
        links: [values.links],
      })}
      header='weeks.gets.createTitle'
    >
      <Form />
    </Create>
  );
};

GetsCreate.propTypes = {};

export default GetsCreate;

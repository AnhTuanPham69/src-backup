import React from 'react';
import Create from '../../rest/Create';
import CreateForm from '../components/Form';

const OnboardingCreate = props => (
  <Create
    {...props}
    resource="onboardings"
    formatOnSubmit={(values) => ({
      ...values,
      videoLinks: [values.videoLinks],
    })}
    defaultOptions={{
      fetchAllAfterSuccess: true,
      fetchAllFilter: {
        orderBy: 'createdAt:DESC',
      },
    }}
  >
    <CreateForm isEdit />
  </Create>
);

OnboardingCreate.propTypes = {};

export default OnboardingCreate;

import React from 'react';
import Create from '../../rest/Create';
import BusinessForm from '../components/Form';

const BusinessesCreate = (props) => {
  const breadCrumbs = [
    {
      title: 'businesses.header',
      path: '/businesses',
    },
    {
      title: 'businesses.createPage',
      path: '/businesses/create',
    },
  ];
  return (
    <Create
      {...props}
      resource="businesses"
      breadCrumbs={breadCrumbs}
      formatOnSubmit={({ contactPhoneNumberFormat, ...values }) => ({
        ...values,
        contactPhoneNumber: contactPhoneNumberFormat,
      })}
    >
      <BusinessForm />
    </Create>
  );
};

BusinessesCreate.propTypes = {};

export default BusinessesCreate;

import React from 'react';
import BusinessForm from '../components/Form';
import Edit from '../../rest/Edit';

const BusinessesCreate = (props) => {
  const breadCrumbs = [
    {
      title: 'businesses.header',
      path: '/businesses',
    },
    {
      title: 'businesses.editPage',
      path: window.location.pathname,
    },
  ];
  return (
    <Edit
      {...props}
      resource="businesses"
      breadCrumb={breadCrumbs}
      formatOnSubmit={({ contactPhoneNumberFormat, ...values }) => ({
        ...values,
        contactPhoneNumber: contactPhoneNumberFormat,
      })}
    >
      <BusinessForm />
    </Edit>
  );
};

BusinessesCreate.propTypes = {};

export default BusinessesCreate;

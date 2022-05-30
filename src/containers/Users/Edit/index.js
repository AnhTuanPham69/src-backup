import React from 'react';
import { useSelector } from 'react-redux';
import Edit from '../../rest/Edit';
import Form from '../components/Form';

const UsersEdit = (props) => {
  const currentUser = useSelector((state) => state.users.currentData);
  return (
    <Edit
      {...props}
      resource="users"
      formatOnSubmit={({ phoneFormat, privatePhoneFormat, ...values }) => ({
        ...values,
        phone: phoneFormat,
        privatePhone: privatePhoneFormat,
      })}
    >
      <Form userRole={currentUser?.role?.name} />
    </Edit>
  );
};

UsersEdit.propTypes = {};

export default UsersEdit;

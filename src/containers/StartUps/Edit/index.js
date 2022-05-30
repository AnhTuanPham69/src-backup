import React from 'react';
import { useSelector } from 'react-redux';
import { updateStartUp } from '@redux/startUps/actions';
import Edit from '../../rest/Edit';
import Form from '../components/Form';

const UsersEdit = props => {
  const currentStartUp = useSelector(state => state.startUps.currentData);
  return (
    <Edit
      disableClear
      {...props}
      resource="startUps"
      customOnSubmit={updateStartUp}
      formatOnSubmit={values => ({
        ...values.user,
        userId: currentStartUp?.userId,
      })}
      defaultOptions={{
        isRequestApi: true,
        customApiResource: 'startup-progresses',
        isBack: true,
      }}
    >
      <Form />
    </Edit>
  )};

UsersEdit.propTypes = {};

export default UsersEdit;

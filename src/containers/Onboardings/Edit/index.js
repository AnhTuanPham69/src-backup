import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateStatus } from '@redux/onboardings/actions';
import Edit from '../../rest/Edit';
import Form from '../components/Form';

const OnboardingEdit = props => {
  const dispatch = useDispatch();
  const currentData = useSelector(state => state.onboardings.currentData);

  const handleSubmitSuccess = data => {
    dispatch(updateStatus(data));
  }
  return (
    <Edit
      {...props}
      resource="onboardings"
      formatOnSubmit={(values) => ({
        ...values,
        videoLinks: [values.videoLinks],
      })}
      defaultOptions={{
        onSuccess: handleSubmitSuccess,
        fetchAllAfterSuccess: true,
        fetchAllFilter: {
          orderBy: 'createdAt:DESC',
        },
      }}
    >
      <Form {...currentData?.status === 'hidden' && {
        isEdit: true,
      }}
      />
    </Edit>
  )};

OnboardingEdit.propTypes = {};

export default OnboardingEdit;

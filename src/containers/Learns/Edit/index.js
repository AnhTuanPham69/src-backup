import React from 'react';
import CreatLayout from 'components/common/CreateLayout';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { convertParamsToObject } from 'utils/url';
import crudSelectors from '@redux/crudSelectors';
import Edit from '../../rest/Edit';
import Form from '../components/Form';

const LearnsEdit = (props) => {
  const location = useLocation();
  const currentConcept = useSelector(crudSelectors?.learns?.getCurrentData);
  const { disableClear } = convertParamsToObject(decodeURIComponent(location.hash));

  return (
    <CreatLayout>
      <Edit
        {...props}
        resource="learns"
        defaultOptions={{
          customApiResource: 'concepts',
        }}
        formatOnSubmit={(values) => ({
          ...values,
          ...values.description?.length && {
            description: values.description.join('__'),
          },
          programPhasePeriodId: currentConcept?.programPhasePeriodId,
          videoLinks: [values.videoLinks],
        })}
        header='weeks.learns.editTitle'
        disableClear={disableClear}
      >
        <Form />
      </Edit>
    </CreatLayout>
  );
};

LearnsEdit.propTypes = {};

export default LearnsEdit;

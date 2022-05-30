import React from 'react';
import CreatLayout from 'components/common/CreateLayout';
import { useSelector } from 'react-redux';
import crudSelectors from '@redux/crudSelectors';
import Edit from '../../rest/Edit';
import Form from '../components/Form';

const GetsEdit = (props) => {
  const currentGet = useSelector(crudSelectors.gets.getCurrentData);

  return (
    <CreatLayout>
      <Edit
        {...props}
        resource="gets"
        defaultOptions={{
          customApiResource: 'service-providers',
        }}
        formatOnSubmit={(values) => ({
          ...values,
          programPhasePeriodId: currentGet?.programPhasePeriodId,
          links: [values.links],
        })}
        header='weeks.gets.editTitle'
      >
        <Form />
      </Edit>
    </CreatLayout>
  );
};

GetsEdit.propTypes = {};

export default GetsEdit;

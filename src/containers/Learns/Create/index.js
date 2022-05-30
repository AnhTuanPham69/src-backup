import React from 'react';
import { useLocation } from 'react-router';
import CreatLayout from 'components/common/CreateLayout';
import { convertParamsToObject } from 'utils/url';
import Create from '../../rest/Create';
import Form from '../components/Form';

const LearnsCreate = (props) => {
  const location = useLocation();
  const id = convertParamsToObject(decodeURIComponent(location.hash));
  const currentPeriodId = id?.periodId?.substring(1, id.periodId.length - 1);

  return (
    <CreatLayout>
      <Create
        {...props}
        resource="learns"
        formatOnSubmit={(values) => ({
          ...values,
          ...(values.description?.length && {
            description: values.description.join('__'),
          }),
          programPhasePeriodId: currentPeriodId,
          videoLinks: [values.videoLinks],
        })}
        defaultOptions={{
          customApiResource: 'concepts',
          fetchAllAfterSuccess: true,
          fetchAllFilter: {
            limit: 100,
            filter: {
              programPhasePeriodId: {
                $eq: currentPeriodId,
              },
            },
            orderBy: 'rankNumber:ASC',
          },
        }}
        header='weeks.learns.addLearningConcept'
      >
        <Form />
      </Create>
    </CreatLayout>
  );
};

LearnsCreate.propTypes = {};

export default LearnsCreate;

import React from 'react';
import { useLocation } from 'react-router';
import { convertParamsToObject } from 'utils/url';
import I18n from 'i18next';
import Create from '../../rest/Create';
import Form from '../components/Form';

const TodosCreate = props => {
  const location = useLocation()
  const id = convertParamsToObject(decodeURIComponent(location.hash));
  const programPhasePeriodId = id?.periodId?.substring(1, id.periodId.length - 1);
  
  return (
    <Create
      {...props}
      resource="todos"
      formatOnSubmit={values => ({
        ...values,
        programPhasePeriodId,
        ...values.links && {
          links: [values.links],
        },
      })}
      defaultOptions={{
        customApiResource: 'todos',
        fetchAllAfterSuccess: true,
        fetchAllFilter: {
          limit: 100,
          filter: {
            programPhasePeriodId: {
              $eq: programPhasePeriodId,
            },
          },
          orderBy: 'rankNumber:ASC',
        },
      }}
      header={I18n.t('weeks.todos.addTodos')}
    >
      <Form />
    </Create>
)};

TodosCreate.propTypes = {};

export default TodosCreate;

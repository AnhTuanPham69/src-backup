import React from 'react';
import { useLocation } from 'react-router';
import { convertParamsToObject } from 'utils/url';
import Create from '../../rest/Create';
import Form from '../components/Form';

const TodoStepsCreate = props => {
  const location = useLocation()
  const id = convertParamsToObject(decodeURIComponent(location.hash));
  const toDoId = id?.toDoId?.substring(1, id.toDoId.length - 1);

  return (
    <Create
      {...props}
      resource="todoSteps"
      formatOnSubmit={values => ({
        ...values,
        toDoId,
      })}
      header="weeks.todoSteps.createPage"
      defaultOptions={{
        customApiResource: 'todo-steps',
      }}
    >
      <Form />
    </Create>
)};

TodoStepsCreate.propTypes = {};

export default TodoStepsCreate;

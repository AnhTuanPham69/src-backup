import React from 'react';
import { useSelector } from 'react-redux';
import crudSelectors from '@redux/crudSelectors';
import Edit from '../../rest/Edit';
import Form from '../components/Form';

const TodoStepsEdit = (props) => {
  const currentTodoStep = useSelector(crudSelectors.todoSteps.getCurrentData);
  
  return (
    <Edit
      {...props}
      resource="todoSteps"
      formatOnSubmit={values => ({
        ...values,
        toDoId: currentTodoStep?.toDoId,
      })}
      defaultOptions={{
        customApiResource: 'todo-steps',
      }}
      header="weeks.todoSteps.editPage"
    >
      <Form />
    </Edit>
  );
};

TodoStepsEdit.propTypes = {};

export default TodoStepsEdit;

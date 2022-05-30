import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import crudSelectors from '@redux/crudSelectors';
import { deleteResourcesById } from '@redux/resources/actions';
import Edit from '../../rest/Edit';
import Form from '../components/Form';

const TodosEdit = (props) => {
  const dispatch = useDispatch();
  const currentTodos = useSelector(crudSelectors.todos.getCurrentData);
  const [deleteList, setDeleteList] = useState([]);

  const deleteResources = async() => {
    const ids = deleteList.filter((e) => e.id)?.map(e =>  e.id);
    if(ids.length > 0)
      await dispatch(deleteResourcesById(ids));
  }

  return (
    <Edit
      {...props}
      resource="todos"
      formatOnSubmit={async (values) => {
        await deleteResources()
        return {
          ...values,
          programPhasePeriodId: currentTodos?.programPhasePeriodId,
          ...(values.links && {
            links: [values.links],
          }),
        };
      }}
      header="weeks.todos.editPage"
    >
      <Form deleteList={deleteList} setDeleteList={setDeleteList} />
    </Edit>
  );
};

TodosEdit.propTypes = {};

export default TodosEdit;

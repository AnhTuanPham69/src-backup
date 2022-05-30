import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { convertObjToSearchStr } from 'utils/tools';
import { convertParamsToObject } from 'utils/url';
import List from '../../rest/List';
import RestFieldItem from '../../../components/RestField/RestFieldItem';
import { ListWrapper } from './styles';
import ListStepItems from '../components/ListStepItems';

const TodoStepsList = () => {
  const location = useLocation()
  const id = convertParamsToObject(decodeURIComponent(location.hash));
  const todoId = id?.todoId;

  const history = useHistory();
  const gotoCreatePage = () => {
    history.push(`#todoSteps/create?${convertObjToSearchStr({
      toDoId: todoId,
    })}`)
  }
  const gotoEditPage = id => {
    history.push(`#todoSteps/${id}/edit`);
  }

  return (
    <ListWrapper>
      <List
        isUpdateRoute={false}
        resource="todoSteps"
        noCardWrapper
        hasCreate={false}
        initCreateData={{
          todoId,
        }}
        initialFilter={{
          filter: {
            toDoId: {
              $eq: todoId,
            },
          },
        }}
        defaultOptions={{
          customApiResource: 'todo-steps',
        }}
        isShowPagination={false}
        customLayout={<ListStepItems todoId={todoId} gotoCreatePage={gotoCreatePage} gotoEditPage={gotoEditPage} />}
      >
        <RestFieldItem
          source="name"
          header="weeks.todos.name"
          format={(data) => <b className="text-primary t-14-1.57">{data}</b>}
        />
      </List>
    </ListWrapper>
  );
};

TodoStepsList.propTypes = {};

export default TodoStepsList;

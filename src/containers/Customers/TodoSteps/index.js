import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spin } from 'antd';
import DoSection from '@enouvo/uikit/src/sections/DoSection';
import { useParams } from 'react-router';
import { getAllTodoSteps } from '@redux/todoSteps/actions';
import { getTodoStepsUserSelector } from '@redux/todoSteps/selectors';
import { getByIdTodos } from '@redux/todos/actions';
import { getResourcesObjSelectors } from '@redux/todos/selectors';
import { getAllClientResources } from '@redux/clientResources/actions';
import { getByIdStartUps } from '@redux/startUps/actions';
import { getClientResourcesObjSelectors } from '@redux/clientResources/selectors';
import PageTitle from 'components/common/PageTitle';
import CustomBreadcrumb from 'components/common/Breadcrumb';
import { getAllComments, createComments } from '@redux/comments/actions';
import { commentsRepliesSelectors } from '@redux/comments/selectors';
import { TodoStepsWrapper, BreadcrumbWrapper } from './styles';

const TodoSteps = () => {
  const dispatch = useDispatch();
  const { id, progressId, businessId, periodId, todoId } = useParams();
  const loading = useSelector((state) => state.todoSteps.loading);
  const resources = useSelector(getResourcesObjSelectors);
  const clientResources = useSelector(getClientResourcesObjSelectors);
  const currentTodo = useSelector((state) => state.todos.currentData);
  const currentTodoSteps = useSelector(getTodoStepsUserSelector);
  const currentStartUps = useSelector((state) => state.startUps.currentData);
  const comments = useSelector(commentsRepliesSelectors);

  const breadCrumbs = [
    {
      title: 'customers.header',
      path: '/customers',
    },
    {
      title:
        !currentStartUps?.user?.firstName && !currentStartUps?.user?.lastName
          ? currentStartUps?.user?.email
          : `${currentStartUps?.user?.firstName || ''} ${
              currentStartUps?.user?.lastName || ''
            }`,
      path: `/customers/${id}/${businessId}/progress/${progressId}/details/programPhase`,
    },
    {
      title: `Process ${currentTodo?.rankNumber || ''}`,
      path: window.location.href,
    },
  ];

  useEffect(() => {
    if (todoId)
      dispatch(
        getAllTodoSteps({
          data: {
            page: 1,
            limit: 100,
          },
          options: {
            isRefresh: true,
            customApiResource: `startup-progresses/${progressId}/current-programs/${periodId}/todos/${todoId}/todo-steps`,
          },
        }),
      );
  }, [todoId]);

  useEffect(() => {
    if (progressId)
      dispatch(
        getByIdStartUps({
          data: {
            id: progressId,
          },
          options: {
            isRequestApi: true,
            customApiResource: 'startup-progresses',
          },
        }),
      );
  }, [progressId]);

  useEffect(() => {
    if (todoId)
      dispatch(
        getByIdTodos({
          data: {
            id: todoId,
          },
          options: {
            isRequestApi: true,
          },
        }),
      );
  }, [todoId]);

  useEffect(() => {
    if (todoId && currentStartUps?.userId)
      dispatch(
        getAllClientResources({
          data: {
            page: 1,
            limit: 100,
            filter: {
              userId: {
                $eq: currentStartUps?.userId,
              },
              toDoId: {
                $eq: todoId,
              },
            },
          },
          options: {
            isRefresh: true,
            customApiResource: `client-resources`,
          },
        }),
      );
  }, [todoId, currentStartUps?.userId]);

  useEffect(() => {
    if (todoId && progressId)
      dispatch(
        getAllComments({
          data: {
            page: 1,
            limit: 100,
            filter: {
              userProgramId: {
                $eq: progressId,
              },
              toDoId: {
                $eq: todoId,
              },
            },
          },
          options: {
            isRefresh: true,
          },
        }),
      );
  }, [todoId, progressId]);

  const onSubmitTodoComment = ({ refCommentId, message }) => {
    dispatch(
      createComments({
        data: {
          type: 'TODO',
          message,
          ...(refCommentId && { refCommentId }),
          toDoId: todoId,
          userProgramId: progressId,
        },
        options: {
          isBack: false,
        },
      }),
    );
  };

  return (
    <div>
      <BreadcrumbWrapper>
        <PageTitle>
          <CustomBreadcrumb data={breadCrumbs} />
        </PageTitle>
      </BreadcrumbWrapper>
      <TodoStepsWrapper>
        {loading ? (
          <Spin
            style={{
              height: '100%',
              width: '100%',
              margin: 'auto',
              paddingTop: 50,
            }}
          />
        ) : (
          <DoSection
            title={currentTodo?.name}
            steps={currentTodoSteps}
            todoFile={resources}
            totalComment={comments?.length}
            comments={comments}
            onSubmitComment={onSubmitTodoComment}
            updateProcess={false}
            clientResources={clientResources}
          />
        )}
      </TodoStepsWrapper>
    </div>
  );
};

TodoSteps.propTypes = {};

export default TodoSteps;

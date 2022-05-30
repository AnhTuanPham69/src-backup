import React, { useState } from 'react';
import { ConfigProvider, Empty, Spin } from 'antd';
import { useParams, useHistory } from 'react-router';
import i18next from 'i18next';
import EditButton from 'components/RestActions/EditButton';
import ShowButton from 'components/RestActions/ShowButton';
import ListLayout from 'components/common/ListLayout';
import PropTypes from 'prop-types';
import List from '../../rest/List';
import RestFieldItem from '../../../components/RestField/RestFieldItem';
import FileList from '../../../components/RestField/FileList';
import ActionGroup from '../../../components/RestActions/ActionGroup';
import DeleteButton from '../../../components/RestActions/DeleteButton';
import { DrawerWrapper } from './styles';
import AddStepsButton from '../components/AddStepsButton';
import TodoStepsList from '../../TodoSteps/List';

const TodosList = ({ hidingDelete, hidingEdit, showUrl, ...props }) => {
  const [detailLoading] = useState(false);
  const { periodId, todoId } = useParams();
  const [visible, setVisible] = useState(!!todoId);
  const history = useHistory();

  const onClose = () => {
    setVisible(false);
  };

  // const setRowClassName = (record) => {
  //   if (record?.id !== null) return record?.id === todoId ? 'active' : '';
  //   return '';
  // };

  return (
    <ConfigProvider
      renderEmpty={() => (
        <Empty
          description={
            <div
              style={{
                fontSize: '24px',
              }}
            >
              <div>{i18next.t('noData')}</div>
            </div>
          }
        />
      )}
    >
      <ListLayout>
        <List
          isUpdateRoute={false}
          resource="todos"
          hasCreate
          noCardWrapper
          initCreateData={{
            periodId,
          }}
          initialFilter={{
            filter: {
              programPhasePeriodId: {
                $eq: periodId,
              },
            },
          }}
          hasActions
          createHeader={i18next.t('weeks.todos.createPage')}
          isShowPagination={false}
          {...props}
        >
          <RestFieldItem
            width={120}
            source="rankNumber"
            header="weeks.todos.rankNo"
            sorter
            format={(data) => <p style={{ textAlign: 'center' }}>{data}</p>}
          />
          <RestFieldItem
            source="name"
            header="weeks.todos.name"
            format={(data) => <b className="text-primary t-14-1.57">{data}</b>}
          />
          <RestFieldItem
            source="resources"
            header="weeks.todos.attached"
            format={(data) => (
              <FileList medias={data} />
            )}
          />
          <RestFieldItem
            width={150}
            source="links"
            header="weeks.todos.link"
            format={(data) => data && (
              <a target="_blank" href={data[0]} rel="noreferrer">
                {data[0]}
              </a>
            )}
          />
          <ActionGroup icon="ic-more">
            {showUrl ? (
              <ShowButton
                gotoShowPage={(id) => {
                  history.push(`${showUrl}${id}/details`);
                }}
              />
            ) : (
              <AddStepsButton
                onClick={(id) => {
                  history.push(`#todoSteps/list?todoId=${id}`);
                }}
              />
            )}
            {!hidingEdit ? <EditButton /> : null}
            {!hidingDelete ? <DeleteButton deleteKey="name" title="weeks.todos.header" /> : null}
          </ActionGroup>
        </List>
      </ListLayout>
      <DrawerWrapper
        title={i18next.t('weeks.todoSteps.header')}
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        width={500}
      >
        {detailLoading && (
          <Spin
            style={{ paddingTop: 100, width: '100%', textAlign: 'center' }}
          />
        )}
        {!detailLoading && <TodoStepsList />}
      </DrawerWrapper>
    </ConfigProvider>
  );
};

TodosList.propTypes = {
  hidingDelete: PropTypes.bool,
  hidingEdit: PropTypes.bool,
  showUrl: PropTypes.string,
};

TodosList.defaultProps = {
  hidingDelete: false,
  hidingEdit: false,
};

export default TodosList;

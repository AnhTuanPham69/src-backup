import React from 'react';
import i18next from 'i18next';
import { useHistory, useParams } from 'react-router';
import ListLearns from 'containers/Learns/List';
import ListGets from 'containers/Gets/List';
import ListTodos from 'containers/Todos/List';
import { TabWrapper } from './styles';

const WeeksDetail = () => {
  const history = useHistory();
  const { periodType, programId, phaseId, periodId } = useParams();
  const onChange = (key) => {
    history.push(
      `/programs/${programId}/phases/${phaseId}/weeks/${periodId}/${key}`,
    );
  };
  const { TabPane } = TabWrapper;
  return (
    <TabWrapper onChange={onChange} defaultActiveKey={periodType || 'learns'}>
      <TabPane tab={i18next.t('weeks.learns.header')} key="learns">
        <ListLearns />
      </TabPane>
      <TabPane tab={i18next.t('weeks.todos.title')} key="todos">
        <ListTodos />
      </TabPane>
      <TabPane tab={i18next.t('weeks.gets.header')} key="gets">
        <ListGets />
      </TabPane>
    </TabWrapper>
  );
};

export default WeeksDetail;

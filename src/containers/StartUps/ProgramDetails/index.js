import React, { useEffect } from 'react';
import i18next from 'i18next';
import { useHistory, useParams } from 'react-router';
import ListLearns from 'containers/Learns/List';
import ListTodos from 'containers/Todos/List';
import PageTitle from 'components/common/PageTitle';
import CustomBreadcrumb from 'components/common/Breadcrumb';
import { getByIdPeriods } from '@redux/periods/actions';
import { getByIdStartUps } from '@redux/startUps/actions'
import { useDispatch, useSelector } from 'react-redux';
import { TabWrapper, BreadcrumbWrapper } from './styles';

const ProgramDetails = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id, periodId, model } = useParams();
  const currentPeriods = useSelector(state => state.periods.currentData);
  const currentStartUp = useSelector((state) => state.startUps.currentData);

  const onChange = (key) => {
    history.push(`/startUps/${id}/progress/${periodId}/${key}`);
  };
  const { TabPane } = TabWrapper;
  const breadCrumbs = [
    {
      title: 'startUps.header',
      path: '/startUps',
    },
    {
      title: `${currentStartUp?.user?.firstName} ${currentStartUp?.user?.lastName}`,
      path: `/startUps/${id}/details/programPhase`,
    },
    {
      title: `${currentPeriods?.name||''} ${currentPeriods?.periodNumber||''}`,
      path: window.location.href,
    },
  ];

  useEffect(() => {
    if (periodId)
      dispatch(
        getByIdPeriods({
          data: {
            id: periodId,
          },
          options: {
            isRequestApi: true,
            customApiResource: 'program-phase-periods',
          },
        }),
      );
  }, [periodId]);

  useEffect(() => {
    dispatch(
      getByIdStartUps({
        data: {
          id,
        },
        options: {
          isRequestApi: true,
          customApiResource: 'startup-progresses',
        },
      }),
    );
  }, [id]);

  return (
    <div>
      <BreadcrumbWrapper>
        <PageTitle>
          <CustomBreadcrumb data={breadCrumbs} />
        </PageTitle>
      </BreadcrumbWrapper>
      <TabWrapper onChange={onChange} defaultActiveKey={model || 'concepts'} type="card">
        <TabPane tab={i18next.t('weeks.learns.header')} key="concepts">
          <ListLearns
            hidingDelete
            hidingEdit
            hasCreate={false}
            showUrl={`/startUps/${id}/progress/${periodId}/concepts/`}
          />
        </TabPane>
        <TabPane tab={i18next.t('weeks.todos.title')} key="todos">
          <ListTodos
            hidingDelete
            hidingEdit
            hasCreate={false}
            showUrl={`/startUps/${id}/progress/${periodId}/todos/`}
          />
        </TabPane>
      </TabWrapper>
    </div>
  );
};

export default ProgramDetails;

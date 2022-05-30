import React, { useEffect } from 'react';
import i18next from 'i18next';
import { useHistory, useParams } from 'react-router';
import ListLearns from 'containers/Learns/List';
import ListTodos from 'containers/Todos/List';
import PageTitle from 'components/common/PageTitle';
import CustomBreadcrumb from 'components/common/Breadcrumb';
import { getByIdPeriods } from '@redux/periods/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getByIdCustomers } from '@redux/customers/actions';
import { TabWrapper, BreadcrumbWrapper } from './styles';

const ProgramDetails = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id, progressId, periodId, model, businessId } = useParams();
  const currentPeriods = useSelector(state => state.periods.currentData);
  const currentCustomer = useSelector(state => state.customers.currentData)

  const onChange = (key) => {
    history.push(`/customers/${id}/${businessId}/progress/${progressId}/program-details/${periodId}/${key}`);
  };
  const { TabPane } = TabWrapper;
  const breadCrumbs = [
    {
      title: 'customers.header',
      path: '/customers',
    },
    {
      title: !currentCustomer?.user?.firstName && !currentCustomer?.user?.lastName
          ? currentCustomer?.user?.email
          : `${currentCustomer?.user?.firstName || ''} ${currentCustomer?.user?.lastName || ''}`,
      path: `/customers/${id}/${businessId}/progress/${progressId}/details/programPhase`,
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
      getByIdCustomers({
        data: {
          id,
        },
        options: {
          isRequestApi: true,
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
            showUrl={`/customers/${id}/${businessId}/progress/${progressId}/program-details/${periodId}/concepts/`}
          />
        </TabPane>
        <TabPane tab={i18next.t('weeks.todos.title')} key="todos">
          <ListTodos
            hidingDelete
            hidingEdit
            hasCreate={false}
            showUrl={`/customers/${id}/${businessId}/progress/${progressId}/program-details/${periodId}/todos/`}
          />
        </TabPane>
      </TabWrapper>
    </div>
  );
};

export default ProgramDetails;

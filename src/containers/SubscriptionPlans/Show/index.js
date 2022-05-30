import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import SVGIcon, { EditIcon } from 'components/common/SVGIcon';
import { programPhasesSelectors } from '@redux/programPhases/selectors';
import { getAllProgramPhases } from '@redux/programPhases/actions';
import i18next from 'i18next';
import Edit from '../../rest/Edit';
import Form from '../components/Form';
import { CardWrapper, CreateWrapper } from './styles';

const ShowPlan = (props) => {
  const history = useHistory();
  const [programId, setProgramId] = useState('');
  const dispatch = useDispatch();
  const programPhases = useSelector(programPhasesSelectors.getDataArr);
  const currentPlan = useSelector(
    (state) => state.subscriptionPlans.currentData,
  );
  const loading = useSelector(programPhasesSelectors.getLoading);

  const breadCrumbs = [
    {
      title: 'settings.header',
      path: '/settings/subscriptionPlans',
    },
    {
      title: 'subscriptionPlans.header',
      path: '/settings/subscriptionPlans',
    },
    {
      title: currentPlan?.planCode || '',
      path: `/subscriptionPlans/${currentPlan?.id}/show`,
    },
  ];

  useEffect(() => {
    if (currentPlan?.programId) {
      dispatch(
        getAllProgramPhases({
          data: {
            limit: 100,
            page: 1,
            filter: {
              programId: {
                $eq: currentPlan?.programId,
              },
            },
            orderBy: 'createdAt:DESC',
          },
          options: {
            isRefresh: true,
            customApiResource: 'program-phases',
          },
        }),
      );
    }
  }, [currentPlan?.programId]);
  return (
    <CreateWrapper>
      <Edit
        {...props}
        resource="subscriptionPlans"
        FormWrapper={CardWrapper}
        formWrapperProps={{
          // title: i18next.t('subscriptionPlans.showPage'),
          extra: (
            <div className="header">
              <Button
                onClick={() => {
                  history.goBack();
                }}
              >
                <SVGIcon type="back" />
              </Button>
              <h3>{i18next.t('subscriptionPlans.showPage')}</h3>
              <Button
                onClick={() => {
                  history.push(`/subscriptionPlans/${currentPlan?.id}/edit`);
                }}
              >
                <EditIcon />
              </Button>
            </div>
          ),
          style: {
            width: '100%',
            flexGrow: 2,
          },
        }}
        breadCrumb={breadCrumbs}
        hasSubmit={false}
      >
        <Form {...{ programPhases, programId, setProgramId, loading }} />
      </Edit>
    </CreateWrapper>
  );
};

ShowPlan.propTypes = {};

export default ShowPlan;

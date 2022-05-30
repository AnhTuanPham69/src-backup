import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import SVGIcon from 'components/common/SVGIcon';
import { programPhasesSelectors } from '@redux/programPhases/selectors';
import { getAllProgramPhases } from '@redux/programPhases/actions';
import i18next from 'i18next';
import Edit from '../../rest/Edit';
import Form from '../components/Form';
import { CardWrapper, CreateWrapper } from './styles';

const EditPlan = props => {
  const history = useHistory();
  const [programId, setProgramId] = useState('');
  const dispatch = useDispatch();
  const programPhases = useSelector(programPhasesSelectors.getDataArr);
  const currentPlan = useSelector(state => state.subscriptionPlans.currentData);
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
      path: `/settings/subscriptionPlans/${currentPlan?.id}/edit`,
    },
  ];


  useEffect(() => {
    if (currentPlan?.programId) {
      dispatch(getAllProgramPhases({
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
      }))
    }
  }, [currentPlan?.programId])
  return (
    <CreateWrapper>
      <Edit
        {...props}
        resource="subscriptionPlans"
        FormWrapper={CardWrapper}
        formWrapperProps={{
          title: i18next.t('subscriptionPlans.editPage'),
          extra: <Button onClick={()=>{history.goBack()}}><SVGIcon type="back" /></Button>,
          style: { 
            width: '100%',
            flexGrow: 2,
          },
        }}
        positionFooter="center"
        breadCrumb={breadCrumbs}
      >
        <Form isEdit {...{ programPhases, programId, setProgramId, loading }} />
      </Edit>
    </CreateWrapper>
)};

EditPlan.propTypes = {};

export default EditPlan;

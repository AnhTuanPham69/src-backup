import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import SVGIcon from 'components/common/SVGIcon';
import { programPhasesSelectors } from '@redux/programPhases/selectors';
import { getAllProgramPhases } from '@redux/programPhases/actions';
import i18next from 'i18next';
import Create from '../../rest/Create';
import Form from '../components/Form';
import { CardWrapper, CreateWrapper } from './styles';

const ProgramPhasesCreate = props => {
  const history = useHistory();
  const [programId, setProgramId] = useState('');
  const dispatch = useDispatch();
  const programPhases = useSelector(programPhasesSelectors.getDataArr);
  const loading = useSelector(programPhasesSelectors.getLoading);

  const breadCrumbs = [
    {
      title: 'settings.header',
      path: '/settings/subscriptionPlans',
    },
    {
      title: 'subscriptionPlans.header',
      path: '/subscriptionPlans/create',
    },
  ];


  useEffect(() => {
    if (programId) {
      dispatch(getAllProgramPhases({
        data: {
          limit: 100,
          page: 1,
          filter: {
            programId: {
              $eq: programId,
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
  }, [programId])
  return (
    <CreateWrapper>
      <Create
        {...props}
        resource="subscriptionPlans"
        FormWrapper={CardWrapper}
        formWrapperProps={{
          title: i18next.t('subscriptionPlans.createPage'),
          extra: <Button onClick={()=>{history.goBack()}}><SVGIcon type="back" /></Button>,
          style: { 
            width: '100%',
            flexGrow: 2,
          },
        }}
        positionFooter="center"
        breadCrumbs={breadCrumbs}
      >
        <Form {...{ programPhases, programId, setProgramId, loading }} />
      </Create>
    </CreateWrapper>
)};

ProgramPhasesCreate.propTypes = {};

export default ProgramPhasesCreate;

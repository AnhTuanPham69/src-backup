import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProgramCount } from '@redux/config/slice';
import styled from 'styled-components';
import Create from '../../rest/Create';
import Form from '../components/Form';

const ProgramsCreate = props => {
  const [phase, setPhase] = useState(1);
  const dispatch = useDispatch();

  const handleSubmitSuccess = () => {
    dispatch(updateProgramCount(1))
  }
  
  const breadCrumbs = [
    {
      title: 'programs.header',
      path: '/programs',
    },
    {
      title: 'programs.createPage',
      path: '/programs/create',
    },
  ];

  return (
    <CreateWrapper>
      <Create
        {...props}
        resource="programs"
        breadCrumbs={breadCrumbs}
        formatOnSubmit={({ programPhases, price, ...values }) => ({
          ...values,
          isActive: true,
          price: price || 0,
          programPhases: programPhases?.map((programPhase, index) => ({
            ...programPhase,
            phaseNumber: index + 1,
          })),
        })}
        defaultOptions={{
          onSuccess: handleSubmitSuccess,
        }}
      >
        <Form {...{ phase, setPhase }} />
      </Create>
    </CreateWrapper>
)};

const CreateWrapper = styled.div`
  .isoBoxWrapper {
    background: transparent !important;
    padding: 0;
  }
`;

ProgramsCreate.propTypes = {};

export default ProgramsCreate;

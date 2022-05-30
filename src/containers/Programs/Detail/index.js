import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import crudSelectors from '@redux/crudSelectors';
// import { CustomModalWrapper } from './styles';
import Edit from '../../rest/Edit';
import Form from '../components/Form';

const ProgramsDetail = (props) => {
  const [phase, setPhase] = useState(0);
  const currentProgram = useSelector(crudSelectors.programs.getCurrentData);

  useEffect(() => {
    setPhase(currentProgram?.totalPhase);
  }, [currentProgram]);
  return (
    <Edit
      {...props}
      resource="programs"
      hasSubmit={false}
      header="programs.detail"
    >
      <Form isEdit isShow {...{ phase, setPhase }} />
    </Edit>
  );
};

ProgramsDetail.propTypes = {};

export default ProgramsDetail;

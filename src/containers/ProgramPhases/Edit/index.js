import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import crudSelectors from '@redux/crudSelectors';
import { deleteFile } from 'api/uploadMedia';
import Edit from '../../rest/Edit';
import Form from '../components/Form';

const ProgramPhaseEdit = (props) => {
  const currentPhase = useSelector(crudSelectors.programPhases.getCurrentData);
  const [deleteList, setDeleteList] = useState([]);
  const deleteImages = async (item) => {
    await deleteFile(item.response?.url || item.url || item);
  };

  return (
    <Edit
      {...props}
      resource="programPhases"
      defaultOptions={{
        customApiResource: 'program-phases',
      }}
      formatOnSubmit={(values) => {
        if(deleteList?.length > 0) {
          deleteList.forEach(e => {
            deleteImages(e)
          })
        }
        return {
          ...values,
          programId: currentPhase?.programId,
          subscriptionPlan: {
            description: values?.programPlanSubscription?.description,
            features: values?.programPlanSubscription?.features,
            learnData: values?.programPlanSubscription?.learnData,
            getData: values?.programPlanSubscription?.getData,
          },
        };
      }}
    >
      <Form isEdit deleteList={deleteList} setDeleteList={setDeleteList} />
    </Edit>
  );
};

ProgramPhaseEdit.propTypes = {};

export default ProgramPhaseEdit;

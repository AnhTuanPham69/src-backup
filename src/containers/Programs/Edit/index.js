import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import crudSelectors from '@redux/crudSelectors';
import { deleteFile } from 'api/uploadMedia';
import Edit from '../../rest/Edit';
import EditForm from '../components/Form/EditForm';

const ProgramsEdit = (props) => {
  const [phase, setPhase] = useState(0);
  const [deleteList, setDeleteList] = useState([]);
  const currentProgram = useSelector(crudSelectors.programs.getCurrentData);

  useEffect(() => {
    setPhase(currentProgram?.totalPhase);
  }, [currentProgram]);

  const deleteImages = async(item) => {
    await deleteFile(item.response?.url || item.url || item)
  }

  return (
    <Edit
      {...props}
      resource="programs"
      formatOnSubmit={({ programPhases, totalPhase, ...values }) => {
        if(deleteList?.length > 0) {
          deleteList.forEach(e => {
            deleteImages(e)
          })
        }
        return { ...values, businessId: currentProgram.businessId };
      }}
    >
      <EditForm
        isEdit
        {...{ phase, setPhase }}
        deleteList={deleteList}
        setDeleteList={setDeleteList}
      />
    </Edit>
  );
};

ProgramsEdit.propTypes = {};

export default ProgramsEdit;

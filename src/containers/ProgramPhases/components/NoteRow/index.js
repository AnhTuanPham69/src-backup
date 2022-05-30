import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'antd';
import i18next from 'i18next';
import {NoteRowWrapper} from './styles';

const NoteRow = ({url, programName, description, handleClickAddPhase}) => {
  return(
    <NoteRowWrapper>
      <div className="program-info">
        <img src={url} alt="" className="img" />
        <div>
          <h3>{programName}</h3>
          <p>{description}</p>
        </div>
      </div> 
      <Button type="primary" onClick={handleClickAddPhase}>{i18next.t('programPhases.create')}</Button>
    </NoteRowWrapper>
  )
}


NoteRow.propTypes = {
  url: PropTypes.string, 
  programName:PropTypes.string,
  description: PropTypes.string, 
  handleClickAddPhase: PropTypes.func,
};

export default NoteRow;
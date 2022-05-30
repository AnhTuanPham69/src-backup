import React from 'react';
import PropTypes from 'prop-types';
import SVGIcon from 'components/common/SVGIcon'
import { CreateButtonWrapper } from './styles';

const CreateButton = ({gotoCreatePage}) => {
  return (
    <CreateButtonWrapper onClick={gotoCreatePage}>
      <SVGIcon type="plus" />
    </CreateButtonWrapper>
  )
};

CreateButton.propTypes = {
  gotoCreatePage: PropTypes.func,
};

CreateButton.defaultProps = {};


export default CreateButton;
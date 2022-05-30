import React from 'react';
import PropTypes from 'prop-types';
import { CreateWrapper } from './styles';


const CreateLayout = ({children}) => {
  return(
    <CreateWrapper>
      {children}
    </CreateWrapper>
  )
};

CreateLayout.propTypes = {
  children: PropTypes.node,
};

export default CreateLayout;
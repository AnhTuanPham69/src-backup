import React from 'react';
import PropTypes from 'prop-types';
import { CardWrapper } from './styles';


const CardLayout = ({children, ...formWrapperProps}) => {
  return(
    <CardWrapper {...formWrapperProps}>
      {children}
    </CardWrapper>
  )
};

CardLayout.propTypes = {
  children: PropTypes.node,
};

export default CardLayout;
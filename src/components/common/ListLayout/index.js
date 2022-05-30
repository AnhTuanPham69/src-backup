import React from 'react';
import PropTypes from 'prop-types';
import { ListWrapper } from './styles';


const ListLayout = ({children}) => {
  return(
    <ListWrapper>
      {children}
    </ListWrapper>
  )
};

ListLayout.propTypes = {
  children: PropTypes.node,
};

export default ListLayout;
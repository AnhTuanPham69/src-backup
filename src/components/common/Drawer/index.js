import React from 'react';
import DrawerStyles from './styles';

const Drawer = (props) => (
  <DrawerStyles {...props} destroyOnClose maskClosable={false} />
);

Drawer.propTypes = {};

export default Drawer;

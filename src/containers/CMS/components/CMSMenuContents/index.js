import React from 'react';
import PropTypes from 'prop-types';
import CMSMenuItem from '../CMSMenuItem';
import CMSContentWithDnD from '../CMSContentWithDnD/index';

const CMSMenuContents = ({ form, ...props }) => (
  <CMSContentWithDnD
    form={form}
    btnAddNewTitle="cms.button.addNewMenu"
    renderItem={({ item, index, ...childrenProps }) => (
      <CMSMenuItem {...props} {...childrenProps} index={index} form={form} item={item} />
    )}
  />
);
CMSMenuContents.propTypes = {
  form: PropTypes.object,
};

export default CMSMenuContents;

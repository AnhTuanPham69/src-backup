import React from 'react';
import PropTypes from 'prop-types';
import CMSContentWithDnD from '../CMSContentWithDnD/index';
import CMSContactItem from '../CMSContactItem/index';

const ContactContent = ({ form, ...props }) => (
  <CMSContentWithDnD
    form={form}
    btnAddNewTitle="cms.button.addNewContact"
    renderItem={({ item, index, ...childrenProps }) => (
      <CMSContactItem {...props} {...childrenProps} index={index} form={form} item={item} />
    )}
  />
);

ContactContent.propTypes = {
  form: PropTypes.object,
};

export default ContactContent;

import React from 'react';
import PropTypes from 'prop-types';
import PageSection from '../PageSection';
import CMSContentWithDnD from '../CMSContentWithDnD/index';
// import GeneralTemplate from '../GeneralTemplate/index';

const CMSMenuContents = ({ form, onSelectTemplate, ...props }) => (
  <div>
    {/* <GeneralTemplate form={form} onClick={onSelectTemplate} /> */}
    <CMSContentWithDnD
      form={form}
      btnAddNewTitle="cms.button.addNewSection"
      renderItem={({ item, index, ...childrenProps }) => (
        <PageSection {...props} {...childrenProps} index={index} form={form} item={item} />
      )}
    />
  </div>
);

CMSMenuContents.propTypes = {
  form: PropTypes.object,
  onSelectTemplate: PropTypes.func,
};

export default CMSMenuContents;

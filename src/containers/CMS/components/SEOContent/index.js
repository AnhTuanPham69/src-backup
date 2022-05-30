import React from 'react';
import PropTypes from 'prop-types';
import i18next from 'i18next';
import FormItemUI from 'CMSComponents/components/FormItem';
import { get } from 'lodash';
import { useSelector } from 'react-redux';

const SEOContent = ({ form }) => {
  const record = useSelector((state) => state.cms.currentData);
  return (
    <FormItemUI
      defaultValue={get(record, 'openGraph.url')}
      source="path"
      disabled
      form={form}
      header={i18next.t('cms.url')}
      placeholder={i18next.t('cms.openGraph.urlPlaceholder')}
    />
  );
};
SEOContent.propTypes = {
  form: PropTypes.object,
};

export default SEOContent;

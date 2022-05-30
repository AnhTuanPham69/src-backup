import React from 'react';
import RestShow from '../../rest/Show';
import RestFieldItem from '../../../components/RestField/RestFieldItem';

const CmsShow = props => (
  <RestShow {...props} hasEdit resource="cms">
    <RestFieldItem source="title" header="cms.title" />
    <RestFieldItem source="description" header="cms.description" />
    <RestFieldItem source="url" header="cms.url" />
    <RestFieldItem source="thumbnail" header="cms.thumbnail" />
    <RestFieldItem source="mainLayout" header="cms.mainLayout" />
    <RestFieldItem source="contents" header="cms.contents" />
  </RestShow>
);

export default CmsShow;

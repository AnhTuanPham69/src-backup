import React from 'react';
// import PropTypes from 'prop-types';
import RestInputItem from '../../../../components/RestInput/RestInputItem';

const Filter = props => (
  <div {...props}>
    <RestInputItem source="title" placeholder="cms.title" />
    <RestInputItem source="description" placeholder="cms.description" />
    <RestInputItem source="url" placeholder="cms.url" />
    <RestInputItem source="thumbnail" placeholder="cms.thumbnail" />
    <RestInputItem source="mainLayout" placeholder="cms.mainLayout" />
    <RestInputItem source="contents" placeholder="cms.contents" />
  </div>
);

Filter.propTypes = {};

export default Filter;

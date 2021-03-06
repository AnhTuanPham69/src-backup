import React from 'react';
import PropTypes from 'prop-types';
import I18n from 'i18next';
import styled from 'styled-components';
import { Button } from 'antd';

const StyledButton = styled(Button)`
  && {
    min-width: 124px;
  }
`;

const CreateButton = ({ header, gotoCreatePage, source }) => (
  <StyledButton source={source} type="primary" onClick={gotoCreatePage}>
    <span className="">{I18n.t(header)}</span>
  </StyledButton>
);
CreateButton.propTypes = {
  gotoCreatePage: PropTypes.func,
  header: PropTypes.string,
  source: PropTypes.string,
};

CreateButton.defaultProps = {
  source: 'create',
  header: 'button.create',
};

export default CreateButton;

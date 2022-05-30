import React from 'react';
import PropTypes from 'prop-types';
import { CardWrapper } from './styles';

const Card = ({ title, children, extra }) => {
  return (
    <CardWrapper>
      <div className="header-section">
        <h3>{title}</h3>
        <div className="extra-section">{extra}</div>
      </div>
      <div className="content-section">{children}</div>
    </CardWrapper>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  extra: PropTypes.node,
};

Card.defaultProps = {
  extra: <></>,
};

export default Card;

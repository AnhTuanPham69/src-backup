import React from 'react';
import PropTypes from 'prop-types';
import { TagCustomStyles } from './styles';

function TagCustom({ color, backgroundColor, name }) {
  return (
    <TagCustomStyles>
      {name ? (
        <span
          style={{
            color,
            backgroundColor,
          }}
        >
          {name}
        </span>
      ) : null}
    </TagCustomStyles>
  );
}

TagCustom.propTypes = {
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  name: PropTypes.string,
};

export default TagCustom;

import React from 'react';
import PropTypes from 'prop-types';
import i18next from 'i18next';
import Text from '../Text';
import ParagraphStyles from './styles';

const Paragraph = (props) => {
  return (
    <ParagraphStyles>
      <Text type="h5" className="title-paragraph">
        {i18next.t(props?.title)}
      </Text>
      <p>{props?.content}</p>
    </ParagraphStyles>
  );
};

Paragraph.propTypes = {
  content: PropTypes.string,
  title: PropTypes.string,
};
export default Paragraph;

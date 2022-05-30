import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import CMSComponents from '@enouvo/uikit/src';
import { get } from 'lodash';
import PreviewWrapperStyle from './styles';

const PreviewWrapper = ({ index }) => {
  const selectedContent = useSelector((state) => state.cms.currentSelected);
  const contentData = useSelector((state) =>
    get(state.cms.editorData, `content.items[${index}]`),
  );
  const Content = CMSComponents[contentData && contentData.componentType];

  return Content ? (
    <PreviewWrapperStyle
      className={
        selectedContent === index ? 'selected previewSection' : 'previewSection'
      }
    >
      <Content {...contentData} />
    </PreviewWrapperStyle>
  ) : null;
};
PreviewWrapper.propTypes = {
  index: PropTypes.number,
  item: PropTypes.object,
};

export default PreviewWrapper;

import React, { useMemo, memo } from 'react';
import { Radio } from 'antd';
import { FixedSizeList as List, areEqual } from 'react-window';
import PropTypes from 'prop-types';
import { flatten } from 'lodash';
import CMSComponents, { SECTION_TEMPLATES } from '@enouvo/uikit/src';
import memoizeOne from 'memoize-one';
import ButtonStyles from './styles';

const previewComponents = flatten(SECTION_TEMPLATES.map(section => section.components));

const Row = memo(({ index, data, style }) => {
  const { items } = data;
  const Preview = CMSComponents[items[index]];
  const renderNode = useMemo(() => (
    <div>
      {Preview && (
        <div
          style={{
            transform: 'scale(0.2) translate(-2480px, -1300px)',
            position: 'absolute',
            width: 1200,
            maxWidth: 1200,
            height: 675,
            maxHeight: 675,
            zIndex: 999,
          }}
        >
          <Preview />
        </div>
      )}
    </div>
), [Preview])


  return (
    <ButtonStyles
      value={items[index]}
      style={{
        ...style,
        width: 240,
        height: 135,
        overflow: 'hidden',
        borderWidth: '1px',
        borderRadius: '8px',
      }}
    >
      {renderNode}
    </ButtonStyles>
  );
}, areEqual);

Row.propTypes = {
  data: PropTypes.object,
  style: PropTypes.object,
  index: PropTypes.number,
}

const getItemData = memoizeOne(items => ({
  items,
}))

const ListWrapper = () => {
  const itemData = getItemData(previewComponents)

  return (
    <List
      className="List"
      height={350}
      itemCount={previewComponents.length || 0}
      itemData={itemData}
      itemSize={150}
      width={400}
      itemKey={index => previewComponents[index]}
    >
      {Row}
    </List>
  )
}

const CMSSectionsPicker = React.forwardRef((props, forwardRef) => {
  return (
    <Radio.Group
      {...props}
      ref={forwardRef}
    >
      <ListWrapper />
    </Radio.Group>
  );
});

export default CMSSectionsPicker;

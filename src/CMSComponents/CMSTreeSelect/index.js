import React, { useState } from 'react';
import { TreeSelect, Popover } from 'antd';
import i18next from 'i18next';
import CMSComponents, { SECTION_TEMPLATES } from '@enouvo/uikit/src';

const { TreeNode } = TreeSelect;

const CMSTreeSelect = React.forwardRef((props, forwardRef) => {
  const [isShowPreview, setIsShowPreview] = useState(false);
  const [preview, setPreview] = useState(null);

  const onDropdownVisibleChange = (e) => {
    setIsShowPreview(e);
  };

  const onHover = (e) => {
    setPreview(e);
  };

  const renderNode = (component) => (
    <div onMouseEnter={() => onHover(component)}>{component}</div>
  );

  const PreviewContent = CMSComponents[preview];
  const content = (
    <div style={{ maxHeight: 600, overflow: 'auto' }}>
      {PreviewContent && <PreviewContent />}
    </div>
  );
  return (
    <Popover
      visible={isShowPreview}
      trigger="hover"
      placement="right"
      content={content}
    >
      <div>
        <TreeSelect
          {...props}
          showSearch
          ref={forwardRef}
          dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
          placeholder="Please select"
          allowClear={false}
          treeDefaultExpandAll
          onDropdownVisibleChange={onDropdownVisibleChange}
        >
          {SECTION_TEMPLATES.map((parent) => (
            <TreeNode
              value={parent.id}
              title={i18next.t(parent.text)}
              key={parent.id}
            >
              {parent.components.map((component) => (
                <TreeNode
                  value={component}
                  title={renderNode(component)}
                  key={component}
                />
              ))}
            </TreeNode>
          ))}
        </TreeSelect>
      </div>
    </Popover>
  );
});

export default CMSTreeSelect;

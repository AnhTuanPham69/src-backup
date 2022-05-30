import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { FixedSizeList as List } from 'react-window';
import { Button, Drawer, Tabs } from 'antd';
import CMSComponents, { SECTION_TEMPLATES } from '@enouvo/uikit/src';
import i18next from 'i18next';

// eslint-disable-next-line
const Row = (components) => ({ index, style }) => {
  const PreviewContent = CMSComponents[components[index]];
  const scale = 150 / window.innerHeight;
  return (
    <div className="cms-preview-item" style={style}>
      <div className="cms-preview-item-content">
        <div className="preview-comp">
          <div style={{ transform: `scale(${scale})` }}>
            <PreviewContent />
          </div>
        </div>
        <div className="info">{components[index]}</div>
      </div>
    </div>
  );
};

const SelectionDrawer = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        Change UI template
      </Button>
      <Drawer width={600} visible={visible} onClose={() => setVisible(false)}>
        <Tabs>
          {SECTION_TEMPLATES.map((parent) => (
            <Tabs.TabPane
              tabKey={parent.id}
              tab={i18next.t(parent.text)}
              key={parent.id}
            >
              <List
                className="List"
                height={800}
                itemCount={parent.components.length}
                itemSize={150}
                width={600}
              >
                {Row(parent.components)}
              </List>
            </Tabs.TabPane>
          ))}
        </Tabs>
      </Drawer>
    </>
  );
};
SelectionDrawer.propTypes = {};

export default SelectionDrawer;

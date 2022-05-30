import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Layout, Button } from 'antd';
import { useSelector } from 'react-redux';
import Header from '@enouvo/uikit/src/headers/IndexHeader';
import Footer from '@enouvo/uikit/src/footers/IndexFooter';
import GlobalStyle from '@enouvo/uikit/src/styles';
import { ThemeProviderUI } from '@enouvo/uikit/src/commons/ThemeProvider';
import { CMS_CONTENT_TYPES } from 'configs/localData';
import {
  ArrowsAltOutlined,
  DesktopOutlined,
  ShrinkOutlined,
  TabletOutlined,
} from '@ant-design/icons';
import PreviewContentWrapper from './styles';
import PreviewWrapper from '../PreviewWrapper';

const { Content } = Layout;
const PREVIEW_MODE = ['normal', 'fullScreen'];

const listMenus = [
  {
    key: 'home',
    title: 'Home',
    url: '#',
  },
  {
    key: 'startUp',
    title: 'StartUp',
    url: '#',
  },
]

const listButtons = [
  {
    title: 'Sign in',
    isPrimary: true,
    url: '#',
  },
]

const PreviewContent = ({ contentType }) => {
  const [mode, setMode] = useState(0);
  const [mobileMode, setMobileMode] = useState(false);
  const contents = useSelector((state) => state.cms.editorData.content?.items);
  // check when edit menu.
  const menus =
    contentType === CMS_CONTENT_TYPES[1]?.value ? contents || [] : undefined;

  const onChangeMode = () => {
    setMode(mode === 0 ? 1 : 0);
  };

  return (
    <PreviewContentWrapper className={PREVIEW_MODE[mode]}>
      <Layout className={mobileMode ? 'mobile' : ''}>
        <Content>
          <GlobalStyle>
            <ThemeProviderUI>
              <div className="main-layout">
                <Header items={menus} menus={listMenus} buttons={listButtons} />
                <div className="main-content">
                  {contents &&
                    contents.map((item, index) => (
                      <PreviewWrapper key={String(index)} index={index} />
                    ))}
                </div>
                <Footer />
              </div>
            </ThemeProviderUI>
          </GlobalStyle>
        </Content>
      </Layout>
      {!mode && (
        <Button
          onClick={() => setMobileMode(!mobileMode)}
          type="primary"
          size="large"
          shape="circle"
          className="btnMobileView"
          icon={mobileMode ? <TabletOutlined /> : <DesktopOutlined />}
        />
      )}
      <Button
        onClick={onChangeMode}
        type="primary"
        size="large"
        shape="circle"
        className="btnPreviewType"
        icon={mode === 0 ? <ArrowsAltOutlined /> : <ShrinkOutlined />}
      />
    </PreviewContentWrapper>
  );
};
PreviewContent.propTypes = {
  contentType: PropTypes.string,
};

export default PreviewContent;

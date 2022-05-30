import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import _, { get, pick, cloneDeep, zipObjectDeep } from 'lodash';
import slug from 'slug';
import { Anchor, Layout, Form, Tabs, Modal, Input } from 'antd';
import i18next from 'i18next';
import { useDispatch, useSelector } from 'react-redux';
import { setEditorData, setCMSData, editCms, createCms, getByIdCms } from '@redux/cms/actions';
import { CMS_CONTENT_TYPES } from 'configs/localData';
import FormSelect from 'components/form/FormSelect';
import FormItem from 'CMSComponents/components/FormItem';
import FormUploadAvatar from 'components/form/FormUploadAvatar';
import { useHistory, useParams } from 'react-router';
import { PictureOutlined } from '@ant-design/icons';
import ColorPicker from 'CMSComponents/components/ColorPicker';
import CMSWrapper from './styles';
import SEOContent from '../SEOContent';
import PageContents from '../PageContents';
import ContactContent from '../ContactContents';
import CMSMenuContents from '../CMSMenuContents/index';
import FooterButtons from '../FooterButtons';
import PreviewContent from '../PreviewContent';

const { confirm } = Modal;
const { TabPane } = Tabs;
const { Sider } = Layout;

const SETTING_COMPONENT = {
  [CMS_CONTENT_TYPES[0].value]: SEOContent, // Page setting
  [CMS_CONTENT_TYPES[1].value]: CMSMenuContents, // Contact setting
  [CMS_CONTENT_TYPES[2].value]: ContactContent,
};
const CMS = ({ isEdit }) => {
  const [form] = Form.useForm();
  const history = useHistory();
  const params = useParams();
  const [contentType, setContentType] = useState(CMS_CONTENT_TYPES[0].value);
  const [currentTab, setCurrentTab] = useState('1');
  const dispatch = useCallback(useDispatch(), [useDispatch]);
  const title = useSelector((state) => state.cms.editorData?.title);
  const editorData = useSelector((state) => state.cms.editorData);
  const record = useSelector((state) => state.cms.currentData);
  const itemLoadings = useSelector((state) => state.cms.itemLoadings);
  const loading = record && itemLoadings[record.id];
  const SettingComponent = SETTING_COMPONENT[contentType] || SEOContent;
  const onSelectTemplate = (e) => {
    dispatch(setEditorData(cloneDeep(e.CMSContents)));
  };

  const onChangeContentType = (e) => {
    setContentType(e);
    if (contentType !== e) {
      dispatch(setEditorData({ content: { items: [] } }));
    }
  };

  const onSelectCategory = (e) => {
    dispatch(
      setCMSData({
        key: 'path',
        data: `${CMS_CONTENT_TYPES[1]?.prefixUrl}${encodeURIComponent(e).replace(/'/g, '%27')}`,
      }),
    );
  };

  const onBlack = () => {
    history.goBack();
  };

  const handlePublish = () => {
    confirm({
      title: i18next.t(record.status === 'published' ? 'cms.popup.confirmUnPublish' : 'cms.popup.confirmPublish'),
      content: i18next.t(
        record.status === 'published' ? 'cms.popup.confirmUnPublishDes' : 'cms.popup.confirmPublishDes',
      ),
      onOk() {
        form.validateFields().then((err, values) => {
          if (!err) {
            if (record.status === 'published') {
              dispatch(
                editCms({
                  data: { id: record.id, ...values, status: 'draft' },
                  options: { isBack: false },
                }),
              );
            } else {
              dispatch(
                editCms({
                  data: { id: record.id, ...values, status: 'published' },
                  options: { isBack: false },
                }),
              );
              // dispatch(publishCMS(record.id));
            }
          } else {
            setCurrentTab('1');
          }
        });
      },
      onCancel() {},
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    form.validateFields().then((values) => {
      if (values) {
        let rawSlug = values.slug;
        if (contentType === CMS_CONTENT_TYPES[5]?.value) {
          rawSlug = slug(`${values.title.toLowerCase()}_${CMS_CONTENT_TYPES[5]?.value.toLocaleLowerCase()}`);
        } else if (!values.slug) {
          rawSlug = slug(values.title);
        }
        const parseToObj = zipObjectDeep(Object.keys({ ...values }), _.values({ ...values }));
        dispatch(
          record.id
            ? editCms({
                data: {
                  id: `${record.id}`,
                  ...parseToObj,
                  content: editorData.content,
                  path: editorData.path,
                },
                options: {
                  isBack: false,
                  customApiResource: 'cms-pages',
                },
              })
            : createCms({
                data: {
                  ...parseToObj,
                  content: editorData.content,
                  slug: rawSlug,
                  path: editorData.path,
                },
                options: {
                  isBack: true,
                  customApiResource: 'cms-pages',
                },
              }),
        ).then(() => {
          // console.log('res', res);
          !record.id && history.goBack();
        });
      } else {
        setCurrentTab('1');
      }
    });
  };
  useEffect(() => {
    contentType === CMS_CONTENT_TYPES[0].value &&
      dispatch(
        setCMSData({
          key: 'path',
          data: `${CMS_CONTENT_TYPES[0].prefixUrl}${slug(title?.toLowerCase() || '')}`,
        }),
      );
  }, [title, contentType, dispatch]);
  useEffect(() => {
    // check  and get default value for when edit.
    if (isEdit && !record.id && !get(record, 'content.items')) {
      dispatch(
        getByIdCms({ data: { id: params.id }, options: { customApiResource: 'cms-pages', isRequestApi: true } }),
      ).then(({ payload: { data } }) => {
        setContentType(data.type);
        form.setFieldsValue(pick(data, ['type', 'title', 'i18nextLng', 'openGraph']));
        dispatch(setEditorData(data));
      });
    } else if (!form.getFieldValue('type')) {
      // set default form when create new.
      form.setFieldsValue({ type: CMS_CONTENT_TYPES[0].value });
    }
  }, [dispatch, form, isEdit, record]);

  return (
    <CMSWrapper>
      <Layout>
        <Anchor offsetTop={0}>
          <Sider width={500} trigger={null} collapsible>
            <div className="form">
              <Form layout="vertical" form={form}>
                <Tabs
                  activeKey={currentTab}
                  onChange={(key) => setCurrentTab(key)}
                  // tabBarExtraContent={
                  //   <Icon
                  //     onClick={() => setCollapsed(!collapsed)}
                  //     type={collapsed ? 'arrow-right' : 'close'}
                  //   />
                  // }
                >
                  <TabPane forceRender tab={i18next.t('cms.tabs.setting')} key="1">
                    <div className="formItem">
                      <FormSelect
                        required
                        form={form}
                        onChange={onChangeContentType}
                        hasFeedback
                        source="type"
                        allowClear={false}
                        header={i18next.t('cms.contentType.title')}
                        placeholder={i18next.t('cms.openGraph.urlPlaceholder')}
                        defaultValue={get(record, `type`)}
                        resourceData={CMS_CONTENT_TYPES.map((e) => ({
                          ...e,
                          text: i18next.t(e.text),
                        }))}
                      />

                      {contentType === 'categoryPage' ? (
                        <FormSelect
                          required
                          form={form}
                          onChange={onSelectCategory}
                          source="title"
                          allowClear={false}
                          header={i18next.t('cms.categories')}
                          resourceData={[]}
                        />
                      ) : (
                        <FormItem
                          form={form}
                          required
                          defaultValue={get(record, `title`)}
                          source="title"
                          valuePropName="value"
                          formOptions={{ trigger: 'onChange' }}
                          header={i18next.t('cms.openGraph.title')}
                        />
                      )}
                    </div>

                    <FormUploadAvatar
                      defaultValue={get(record, `content.logo`)}
                      source="content.logo"
                      style={{ width: 100, height: 100, borderRadius: 0 }}
                      defaultIcon={<PictureOutlined />}
                      defaultText={i18next.t('cms.logo')}
                      cropDimension={{ width: 100, height: 100 }}
                      hasCrop={false}
                      label={i18next.t('cms.logo')}
                      form={form}
                    />
                    <ColorPicker
                      form={form}
                      allowClear={false}
                      defaultValue={get(record, `content.primaryColor`)}
                      source="content.primaryColor"
                      header={i18next.t('cms.content.primaryColor')}
                    />
                    <SettingComponent form={form} />
                  </TabPane>
                  {(contentType === CMS_CONTENT_TYPES[0]?.value ||
                    contentType === CMS_CONTENT_TYPES[4]?.value ||
                    contentType === CMS_CONTENT_TYPES[1]?.value) && (
                    <TabPane forceRender tab={i18next.t('cms.tabs.content')} key="2">
                      <PageContents onSelectTemplate={onSelectTemplate} form={form} />
                    </TabPane>
                  )}
                  {(contentType === CMS_CONTENT_TYPES[0]?.value ||
                    contentType === CMS_CONTENT_TYPES[4]?.value ||
                    contentType === CMS_CONTENT_TYPES[1]?.value) && (
                    <TabPane forceRender tab={i18next.t('cms.openGraph.header')} key="3">
                      <FormUploadAvatar
                        source="openGraph.thumbnail"
                        style={{ width: 250, height: 150, borderRadius: 0 }}
                        defaultIcon={<PictureOutlined />}
                        defaultValue={get(record, 'openGraph.thumbnail')}
                        defaultText={i18next.t('cms.openGraph.thumbnail')}
                        cropDimension={{ width: 250, height: 150 }}
                        label={i18next.t('cms.openGraph.thumbnail')}
                        form={form}
                      />
                      <FormItem
                        defaultValue={get(record, 'openGraph.url')}
                        source="openGraph.url"
                        form={form}
                        header={i18next.t('cms.openGraph.url')}
                        placeholder={i18next.t('cms.openGraph.urlPlaceholder')}
                      />
                      <FormItem
                        defaultValue={get(record, 'openGraph.thumbnail')}
                        source="openGraph.title"
                        form={form}
                        header={i18next.t('cms.openGraph.title')}
                        placeholder={i18next.t('cms.openGraph.titlePlaceholder')}
                      />
                      <FormItem
                        source="openGraph.description"
                        form={form}
                        header={i18next.t('cms.openGraph.description')}
                        defaultValue={get(record, 'openGraph.description')}
                        placeholder={i18next.t('cms.openGraph.descriptionPlaceholder')}
                      >
                        <Input.TextArea />
                      </FormItem>
                    </TabPane>
                  )}
                </Tabs>
              </Form>
            </div>
            <FooterButtons
              loading={loading}
              isEdit={isEdit}
              handlePublish={handlePublish}
              handleSubmit={handleSubmit}
              onBlack={onBlack}
              isPublish={record?.status === 'published'}
            />
          </Sider>
        </Anchor>
        <PreviewContent contentType={contentType} form={form} />
      </Layout>
    </CMSWrapper>
  );
};
CMS.propTypes = {
  isEdit: PropTypes.bool,
};

export default CMS;

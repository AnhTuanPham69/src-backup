import React, { useContext } from 'react';
import { Button, message, Input, Row, Col } from 'antd';
import { PictureOutlined } from '@ant-design/icons';
import RestInputItem from 'components/RestInput/RestInputItem';
import RestAvatarInput from 'components/RestInput/RestAvatarInput';
import RestSelect from 'components/RestInput/RestSelect';
import { RestInputContext } from 'components/RestInput/RestInputContext';
import I18n from 'i18next';
import ReferenceInput from 'containers/rest/ReferenceInput';
import SVGIcon from '../../../../components/common/SVGIcon';

const LearnsForm = () => {
  const { form } = useContext(RestInputContext);
  const prefix = <SVGIcon type="link" />;
  const suffix = (
    <Button
      onClick={() => {
        navigator.clipboard.writeText(form.getFieldValue('links'));
        message.success(I18n.t('weeks.gets.message'));
      }}
    >
      {I18n.t('weeks.gets.getLinkBtn')}
    </Button>
  );

  return (
    <Row gutter={16}>
      <Col span={12}>
        <RestAvatarInput
          source="logo"
          header="weeks.gets.uploadFile"
          hasCrop={false}
          defaultIcon={<PictureOutlined />}
          width={100}
          height={100}
        />
      </Col>
      <Col span={12}>
        <RestInputItem
          required
          source="companyName"
          header="weeks.gets.companyName"
          placeholder="weeks.gets.placeholder.companyName"
        />
        <ReferenceInput
          resource="users"
          source="providerId"
          initialFilter={{
            filter: {
              'role.name': {
                $eq: 'provider',
              },
            },
          }}
        >
          <RestSelect
            required
            header="weeks.gets.provider"
            placeholder="weeks.gets.placeholder.provider"
            valueProp="id"
            titleProp="firstName"
            formatText={(_, user) =>
              `${user?.firstName || ''} ${user?.lastName || ''}`}
            getRecord
            onChange={(_, optionData) => {
              const record = JSON.parse(optionData?.id || '{}');
              form.setFieldsValue({
                email: record?.email,
                ...(record?.phone && {
                  phoneNumber: record?.phone,
                }),
              });
            }}
          />
        </ReferenceInput>
      </Col>
      <Col span={12}>
        <RestInputItem
          source="phoneNumber"
          header="weeks.gets.phoneNo"
          placeholder="weeks.gets.placeholder.phoneNo"
        />
      </Col>
      <Col span={12}>
        <ReferenceInput
          resource="serviceTypes"
          source="serviceTypeId"
          defaultOptions={{
            customApiResource: 'service-types',
          }}
          initialFilter={{
            filter: {
              isActive: {
                $eq: true,
              },
            },
          }}
        >
          <RestSelect
            required
            header="weeks.gets.serviceType"
            placeholder="weeks.gets.placeholder.serviceType"
            valueProp="id"
            titleProp="name"
          />
        </ReferenceInput>
      </Col>
      <Col span={24}>
        <RestInputItem
          required
          source="email"
          header="weeks.gets.email"
          placeholder="weeks.gets.placeholder.email"
          ruleType="email"
        />
        <RestInputItem
          source="links"
          format={(data) => data?.[0]}
          header="weeks.gets.link"
          prefix={prefix}
          suffix={suffix}
          required
          placeholder="weeks.gets.placeholder.link"
        />
        <RestInputItem
          ContentComponent={Input.TextArea}
          rows={2}
          source="description"
          header="weeks.gets.description"
          placeholder="weeks.gets.placeholder.description"
        />
      </Col>
    </Row>
  );
};

LearnsForm.propTypes = {};

export default LearnsForm;

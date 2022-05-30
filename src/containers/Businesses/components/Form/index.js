import React from 'react';
import { Col, Input } from 'antd';
import RestInputItem from 'components/RestInput/RestInputItem';
import i18next from 'i18next';
import { COUNTRY } from 'configs/localData';
import RestSelect from 'components/RestInput/RestSelect';
import RestPhoneInput from 'components/RestInput/RestPhoneInput';
import RestAvatarInput from 'components/RestInput/RestAvatarInput';
import { PictureOutlined } from '@ant-design/icons';
import 'react-phone-input-2/lib/style.css';
import BusinessFormStyles from './styles';

const BusinessForm = () => {
  return (
    <BusinessFormStyles gutter={16}>
      <Col span={6} className="avatar-business">
        <RestAvatarInput
          style={{
            width: 150,
            height: 150,
            borderRadius: '50%',
          }}
          className="avatar-section"
          defaultIcon={<PictureOutlined />}
          defaultText="picture"
          cropDimension={{ width: 300, height: 300 }}
          hasCrop={false}
          source="logo"
        />
      </Col>
      <Col span={9}>
        <RestInputItem
          required
          source="businessName"
          header="businesses.businessName"
          placeholder="businesses.placeholder.businessName"
        />
        <RestInputItem
          source="contactEmail"
          header="businesses.contactEmail"
          required
          rules={[
            { required: true, message: i18next.t('emailRequire') },
            { type: 'email', message: i18next.t('emailUnValid') },
          ]}
          placeholder="businesses.placeholder.contactEmail"
        />
        <RestInputItem
          source="address"
          header="businesses.address"
          placeholder="businesses.placeholder.address"
        />
      </Col>
      <Col span={9}>
        <RestInputItem
          required
          source="contactName"
          header="businesses.contactName"
          placeholder="businesses.placeholder.contactName"
        />
        <RestPhoneInput
          source="contactPhoneNumber"
          header="businesses.contactPhoneNumber"
          placeholder="businesses.placeholder.contactPhoneNumber"
        />
        <RestSelect
          header="businesses.country"
          source="country"
          placeholder="businesses.placeholder.country"
          resourceData={COUNTRY}
          ruleType="string"
        />
      </Col>

      <Col span={24}>
        <RestInputItem
          source="paypalEmailAccount"
          header="businesses.contactPayPalEmail"
          required
          rules={[
            { required: true, message: i18next.t('emailRequire') },
            { type: 'email', message: i18next.t('emailUnValid') },
          ]}
          placeholder="businesses.placeholder.contactPayPalEmail"
        />
      </Col>
      <Col span={12}>
        <RestInputItem
          row={4}
          ContentComponent={Input.TextArea}
          source="description"
          header="businesses.ENdescription"
          placeholder="businesses.placeholder.description"
          required
        />
        <p className="social-title">{i18next.t('users.socialMedia')}</p>
      </Col>
      <Col span={12}>
        <RestInputItem
          row={4}
          ContentComponent={Input.TextArea}
          source="descriptionFrance"
          header="businesses.FRdescription"
          placeholder="businesses.placeholder.description"
        />
        <p className="social-title">{i18next.t('users.socialMedia')}</p>
      </Col>
      <Col span={12}>
        <RestInputItem
          required
          source="websiteLink"
          header="businesses.websiteLink"
          placeholder="businesses.placeholder.websiteLink"
        />
        <RestInputItem
          source="fanPageLink"
          header="businesses.fanPageLink"
          placeholder="businesses.placeholder.fanPageLink"
        />
      </Col>
      <Col span={12}>
        <RestInputItem
          source="twitterLink"
          header="businesses.twitterLink"
          placeholder="businesses.placeholder.twitterLink"
        />
        <RestInputItem
          source="linkedInLink"
          header="businesses.linkedInLink"
          placeholder="businesses.placeholder.linkedInLink"
        />
      </Col>
    </BusinessFormStyles>
  );
};

BusinessForm.propTypes = {};

export default BusinessForm;

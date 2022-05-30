import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Button } from 'antd';
import { RestInputContext } from 'components/RestInput/RestInputContext';
import RestAvatarInput from 'components/RestInput/RestAvatarInput';
import RestInputItem from 'components/RestInput/RestInputItem';
import { PictureOutlined } from '@ant-design/icons';
import RestPhoneInput from 'components/RestInput/RestPhoneInput';
import i18n from 'i18next';
import FormStyles from './styles';

const Form = ({ form, record, handleClickSave }) => {
  return (
    <RestInputContext.Provider value={{ form, record }}>
      <FormStyles>
        <RestAvatarInput
          width={120}
          height={120}
          className="avatar-section"
          defaultIcon={<PictureOutlined />}
          cropDimension={{ width: 300, height: 300 }}
          hasCrop={false}
          source="avatar"
        />
        <Row gutter={16} className="form-section">
          <Col span={12}>
            <RestInputItem
              required
              source="firstName"
              header="profile.firstName"
            />
          </Col>
          <Col span={12}>
            <RestInputItem
              required
              source="lastName"
              header="profile.lastName"
            />
          </Col>
          <Col span={12}>
            <RestInputItem source="email" header="profile.email" disabled />
          </Col>
          <Col span={12}>
            <RestPhoneInput source="phone" header="profile.phone" />
          </Col>
        </Row>
        <Button type="primary" key="submit" onClick={handleClickSave}>
          {i18n.t('button.save')}
        </Button>
      </FormStyles>
    </RestInputContext.Provider>
  );
};

Form.propTypes = {
  form: PropTypes.object,
  record: PropTypes.object,
  handleClickSave: PropTypes.func,
};

export default Form;

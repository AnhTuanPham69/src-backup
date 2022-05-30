import React, { useState } from 'react';
import { Form, Button, Input } from 'antd';
import i18n from 'i18next';
import { useDispatch } from 'react-redux';
import { changePassword } from '@redux/auth/actions';
import PropTypes from 'prop-types';

const ProfileDetail = ({ handleCloseModal, handleCancelEditPassword }) => {
  const [confirmLoading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      setLoading(true);
      dispatch(
        changePassword({
          oldPassword: values.oldPassword,
          newPassword: values.newPassword,
        }),
      )
        .then(() => {
          setLoading(false);
          handleCloseModal();
          form.resetFields();
        })
        .catch(() => {
          setLoading(false);
        });
    });
  };

  return (
    <div>
      <Form onFinish={handleSubmit} layout="vertical" form={form}>
        <Form.Item
          name="oldPassword"
          label={i18n.t('profile.oldPassword')}
          rules={[
            {
              required: true,
              message: i18n.t('profile.message.oldPassword'),
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="newPassword"
          label={i18n.t('profile.newPassword')}
          rules={[
            {
              required: true,
              message: i18n.t('profile.message.newPassword'),
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label={i18n.t('profile.confirmPassword')}
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: i18n.t('profile.message.confirmPassword'),
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue('newPassword') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error(i18n.t('profile.message.error')),
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
      </Form>
      <div
        style={{
          marginTop: 15,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Button
          style={{ width: '48%', color: '#000444', borderColor: '#000444' }}
          type="secondary"
          onClick={handleCancelEditPassword}
        >
          {i18n.t('button.cancel')}
        </Button>
        <Button
          style={{ width: '48%', color: '#000444' }}
          type="primary"
          onClick={handleSubmit}
          loading={confirmLoading}
        >
          {i18n.t('button.changePassword')}
        </Button>
      </div>
    </div>
  );
};

ProfileDetail.propTypes = {
  handleCloseModal: PropTypes.func,
  handleCancelEditPassword: PropTypes.func,
};

ProfileDetail.defaultProps = {
};

export default ProfileDetail;

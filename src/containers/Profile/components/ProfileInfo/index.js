import React, { useState } from 'react';
import i18n from 'i18next';
import { Button, Form, Avatar } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { updateCurrentUser } from '@redux/auth/actions';
import { UserOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import ProfileForm from '../Form';
import ProfileInfoStyles, { ModalWrapper } from './styles';
import ProfileDetail from '../ChangePassword';

const ProfileInfo = () => {
  const [form] = Form.useForm();
  const { validateFields } = form;
  const [isEditPassword, setIsEditPassword] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.data);
  const handleSubmit = () => {
    validateFields().then(({ email, phoneFormat, ...values }) => {
      dispatch(updateCurrentUser({
        ...values,
        phone: phoneFormat,
      }));
      setIsEdit(!isEdit);
    });
  };

  const showModalEdit = () => {
    setIsEdit(true);
  };

  const handleCancelEdit = () => {
    setIsEdit(false);
  };

  const showModalEditPassword = () => {
    setIsEditPassword(true);
  };

  const handleCancelEditPassword = () => {
    setIsEditPassword(false);
  };
  return (
    <ProfileInfoStyles>
      <Avatar src={currentUser?.avatar} icon={<UserOutlined />} size={120} />
      <div className="info-section">
        <div className="username">
          {`${currentUser?.firstName || ''} ${currentUser?.lastName || ''}`}
        </div>
        <div className="contact">
          <MailOutlined />
          <p>{currentUser?.email}</p>
        </div>
        <div className="contact">
          <PhoneOutlined />
          <p>{currentUser?.phone || i18n.t('error.waitingUpdate')}</p>
        </div>
      </div>
      <div className="btn-section">
        <Button onClick={showModalEdit}>{i18n.t('profile.editProfile')}</Button>
        <Button onClick={showModalEditPassword} type="primary">
          {i18n.t('profile.changePassword')}
        </Button>
      </div>
      {isEdit && (
        <ModalWrapper
          title={i18n.t('profile.editProfile')}
          visible={isEdit}
          onCancel={handleCancelEdit}
          footer={null}
        >
          <Form initialValues={currentUser} form={form}>
            <ProfileForm
              record={currentUser}
              form={form}
              handleClickSave={handleSubmit}
            />
          </Form>
        </ModalWrapper>
      )}
      {isEditPassword && (
        <ModalWrapper
          title={i18n.t('profile.changePassword')}
          visible={isEditPassword}
          onCancel={handleCancelEditPassword}
          footer={null}
        >
          <ProfileDetail
            handleCloseModal={handleCancelEditPassword}
            handleCancelEditPassword={handleCancelEditPassword}
          />
        </ModalWrapper>
      )}
    </ProfileInfoStyles>
  );
};

ProfileInfo.propTypes = {};

export default ProfileInfo;

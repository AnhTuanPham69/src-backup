import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword as resetPasswordAction } from '@redux/auth/actions';
import ResetPasswordForm from '@enouvo/uikit/src/layouts/AuthLayout/ResetPassword/form';
import AuthLayout from '@enouvo/uikit/src/layouts/AuthLayout';
import { useLocation } from 'react-router';
import { convertParamsToObject } from 'utils/url';
import LanguageSelector from 'layout/PublicLayout/LanguageSelector';

const ResetPassword = () => {
  const location = useLocation();
  const loading = useSelector((state) => state.auth.loading);
  const token = convertParamsToObject(decodeURIComponent(location.search))?.token;

  const dispatch = useDispatch();
  const onSubmit = ({ newPassword }) => {
    dispatch(
      resetPasswordAction({
        newPassword,
        resetPasswordToken: token,
        isNotAdminUrl: true,
      }),
    );
  };

  return (
    <AuthLayout extra={<LanguageSelector isPrimary />}>
      <ResetPasswordForm onSubmit={onSubmit} loading={loading} />
    </AuthLayout>
  );
};

ResetPassword.propTypes = {};

export default ResetPassword;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from '@redux/auth/actions';
import ForgotPasswordForm from '@enouvo/uikit/src/layouts/AuthLayout/ForgotPassword/form';
import AuthLayout from '@enouvo/uikit/src/layouts/AuthLayout';
import LanguageSelector from '../../layout/PublicLayout/LanguageSelector';

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const onSubmit = (values) => {
    dispatch(
      forgotPassword({
        ...values,
        isNotAdminUrl: true,
      }),
    );
  };
  return (
    <AuthLayout extra={<LanguageSelector isPrimary />}>
      <ForgotPasswordForm onSubmit={onSubmit} loading={loading} />
    </AuthLayout>
  );
};

export default ForgotPassword;

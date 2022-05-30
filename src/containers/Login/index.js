import React from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '@redux/auth/actions';
import SignInForm from '@enouvo/uikit/src/layouts/AuthLayout/SignIn/form';
import AuthLayout from '@enouvo/uikit/src/layouts/AuthLayout';
import i18next from 'i18next';
import LanguageSelector from 'layout/PublicLayout/LanguageSelector';

const SignIn = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const onSubmit = (values) => {
    dispatch(
      login({
        ...values,
        isNotAdminUrl: true,
      }),
    );
  };
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <AuthLayout
      title={i18next.t('auth.title')}
      description={i18next.t('auth.description')}
      extra={<LanguageSelector isPrimary />}
    >
      <SignInForm hideMediaLogin hideSignUp onSubmit={onSubmit} loading={loading} />
    </AuthLayout>
  );
};

export default SignIn;

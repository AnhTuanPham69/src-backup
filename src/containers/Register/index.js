import React from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '@redux/auth/actions';
import SignUpForm from '@enouvo/uikit/src/layouts/AuthLayout/SignUp/form';
import AuthLayout from '@enouvo/uikit/src/layouts/AuthLayout';
import LanguageSelector from 'layout/PublicLayout/LanguageSelector';

const SignUp = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const onSubmit = (values) => {
    dispatch(
      register({
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
    <AuthLayout extra={<LanguageSelector isPrimary />}>
      <SignUpForm onSubmit={onSubmit} loading={loading} />
    </AuthLayout>
  );
};

export default SignUp;

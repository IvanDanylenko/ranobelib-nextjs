import React from 'react';
import { NextPage } from 'next';
import AuthLayout from 'src/components/layout/AuthLayout';
import LoginForm from 'src/components/forms/LoginForm';

const LoginPage: NextPage = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;

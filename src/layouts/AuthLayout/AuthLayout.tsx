import React, { FC } from 'react';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import Header from 'src/components/common/Header';
import Footer from 'src/components/common/Footer';

const AuthLayout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <Container maxWidth="xs">
        <Box>{children}</Box>
      </Container>
      <Footer />
    </>
  );
};

export default AuthLayout;

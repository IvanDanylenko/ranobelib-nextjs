import React, { FC } from 'react';

import Container from '@material-ui/core/Container';

import Header from './components/Header';
import Footer from './components/Footer';

import useStyles from './useStyles';

const MainLayout: FC = ({ children }) => {
  if (!children) return null;

  const classes = useStyles();
  return (
    <>
      <Header />
      <Container maxWidth="lg">{children}</Container>
      <Footer />
    </>
  );
};

export default MainLayout;

import React, { FC } from 'react';

import Container from '@material-ui/core/Container';

import Header from './components/Header';

import { demoStory } from './demoStory';

const ReaderLayout: FC = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg">{demoStory}</Container>
    </>
  );
};

export default ReaderLayout;

import React from 'react';
import { NextPage } from 'next';

import MainLayout from 'src/layouts/MainLayout';
import HomeView from 'src/views/HomeView';

const HomePage: NextPage = () => {
  return (
    <MainLayout>
      <HomeView />
    </MainLayout>
  );
};

export default HomePage;

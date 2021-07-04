import React from 'react';
import { NextPage } from 'next';

import MainLayout from 'src/layouts/MainLayout';
import HomeLayout from 'src/layouts/HomeLayout';

const HomePage: NextPage = () => {
  return (
    <MainLayout>
      <HomeLayout />
    </MainLayout>
  );
};

export default HomePage;

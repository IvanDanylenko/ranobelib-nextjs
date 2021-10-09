import { NextPage } from 'next';
import TemporaryNavigation from 'src/TemporaryNavigation';
import ReaderLayout from 'src/layouts/ReaderLayout';

const ChapterPage: NextPage = () => {
  return (
    <>
      <TemporaryNavigation />
      <ReaderLayout />
    </>
  );
};

export default ChapterPage;

import React from 'react';

import Box from '@material-ui/core/Box';

import SidebarSection from './components/SidebarSection';
import UserActivityCard from 'src/components/cards/UserActivityCard';

const Sidebar = () => {
  return (
    <Box>
      <SidebarSection header="Топ активных недели" divideContent>
        <UserActivityCard />
        <UserActivityCard />
        <UserActivityCard />
        <UserActivityCard />
      </SidebarSection>
    </Box>
  );
};

export default Sidebar;

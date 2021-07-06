import React from 'react';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import SidebarSection from './components/SidebarSection';
import UserActivityCard from 'src/components/cards/UserActivityCard';
import MediaCard from 'src/components/cards/MediaCard';
import BasicChip from 'src/components/chips/BasicChip';

const items = [
  { id: 1, label: 'One' },
  { id: 2, label: 'Two' },
  { id: 3, label: 'Three' },
  { id: 4, label: 'Four' },
  { id: 5, label: 'Five' },
  { id: 6, label: 'Six' },
  { id: 7, label: 'Seven' },
  { id: 8, label: 'Eight' },
  { id: 9, label: 'Nine' },
  { id: 10, label: 'Ten' },
  { id: 11, label: 'Eleven' },
];

const Sidebar = () => {
  return (
    <Box>
      <Box mb={2}>
        <SidebarSection header="Топ активных недели" withDivider>
          <UserActivityCard />
          <UserActivityCard />
        </SidebarSection>
      </Box>
      <Box mb={2}>
        <SidebarSection header="Жанры" collapsedHeight={125} timeout={150}>
          <Grid container spacing={1}>
            {items.map((item) => (
              <Grid item key={item.id}>
                <BasicChip label={item.label} clickable />
              </Grid>
            ))}
            {items.map((item) => (
              <Grid item key={item.id}>
                <BasicChip label={item.label} />
              </Grid>
            ))}
          </Grid>
        </SidebarSection>
      </Box>
      <Box mb={2}>
        <SidebarSection header="Категории">
          <Grid container spacing={1}>
            {items.map((item) => (
              <Grid item key={item.id}>
                <BasicChip label={item.label} clickable />
              </Grid>
            ))}
          </Grid>
        </SidebarSection>
      </Box>
      <Box mb={2}>
        <SidebarSection header="Популярное Ранобэ" withDivider disableSpacing>
          <MediaCard />
          <MediaCard />
        </SidebarSection>
      </Box>
      <SidebarSection header="Новое Ранобэ" withDivider disableSpacing>
        <MediaCard />
        <MediaCard />
      </SidebarSection>
    </Box>
  );
};

export default Sidebar;

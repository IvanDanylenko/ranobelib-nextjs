import React, { FC } from 'react';
import Image from 'next/image';

import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';

import Head from 'src/layouts/components/Head';

import Link from 'src/components/utils/Link';
import TemporaryNavigation from 'src/TemporaryNavigation';
import HeaderMenu from './components/HeaderMenu';
import HeaderRightMenu from './components/HeaderRightMenu';

import useStyles from './useStyles';

const Header: FC = () => {
  const classes = useStyles();

  return (
    <>
      <Head />
      <TemporaryNavigation />
      <Box className={classes.toolbarPlaceholder}></Box>
      <AppBar>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Grid container justify="space-between" alignItems="center">
              <Grid item>
                <Link href="/">
                  <Image
                    src="/images/ranobe.png"
                    alt="RanobeLib"
                    width={145}
                    height={45}
                    quality={100}
                  />
                </Link>
              </Grid>
              <Grid item>
                <HeaderMenu />
              </Grid>
              <Grid item>
                <HeaderRightMenu />
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;

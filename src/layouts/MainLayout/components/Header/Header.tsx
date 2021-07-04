import React, { FC, useState } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';

import AppBar from '@material-ui/core/AppBar';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';

import { useSelector, useDispatch } from 'react-redux';
import Head from '../Head';
import Register from 'src/components/auth/Register';
import TemporaryNavigation from 'src/TemporaryNavigation';
import Modal from 'src/lib/modal';
import HeaderMenu from './components/HeaderMenu';
import HeaderRightMenu from './components/HeaderRightMenu';
import useStyles from './useStyles';

const Header: FC = () => {
  const classes = useStyles();

  // const { isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
  const [registerModalIsOpen, setRegisterModalIsOpen] = useState(false);

  const closeLoginModal = () => setLoginModalIsOpen(false);
  const closeRegisterModal = () => setRegisterModalIsOpen(false);

  const openRegisterModal = () => {
    setLoginModalIsOpen(false);
    setRegisterModalIsOpen(true);
  };

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
                <NextLink href="/" passHref>
                  <Link href="/">
                    <Image
                      src="/images/ranobe.png"
                      alt="RanobeLib"
                      width={145}
                      height={45}
                      quality={100}
                    />
                  </Link>
                </NextLink>
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

import * as React from 'react';
//material UI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

//font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#0e182a', position: 'sticky', top: '0px' }}>
      <Container maxWidth="x1">
        <Toolbar disableGutters>
          <FontAwesomeIcon icon={faStar} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
              marginLeft: '10px'
            }}>
            Sebastian Abril
          </Typography>

          <Box
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            <Button sx={{ my: 2, color: 'white', display: 'block' }}>{'My Projects'}</Button>
            <Button sx={{ my: 2, color: 'white', display: 'block' }}>{'About me'}</Button>
            <a href="#about">ABOUT MEEEE</a>
            <Button
              sx={{
                my: 2,
                color: 'white',
                display: 'block'
              }}>
              {'donations'}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;

/**
 * ************************************
 *
 * @module  NavBar.jsx
 * @author
 * @date
 * @description
 *
 * ************************************
 */

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function NavBar() {
  return (
    <Box>
      <AppBar position="static" >
        <Toolbar>
          <Typography variant="h5" component="h1" sx={{ flexGrow: 1 }}>
            Habitual&trade;
          </Typography>
          {/* <Button color="inherit" onClick={handleOpenLoginModal}>Login</Button>} */}
          <Button color="inherit">Home</Button>
          <Button color="inherit">Calendar</Button>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


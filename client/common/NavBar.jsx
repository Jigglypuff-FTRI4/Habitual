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
import formattedDate from './date';

export default function NavBar({
  setPage,
}) {
  return (
    <Box>
      <AppBar position="static" >
        <Toolbar>
          <Typography variant="h5" component="h1" sx={{ flexGrow: 1 }}>
            Habitual&trade;
          </Typography>
          <Typography variant="h5" component="h1" sx={{ flexGrow: 1 }}>
            {formattedDate()}
          </Typography>
          <Button color="inherit" onClick={() => setPage('home')}>Home</Button>
          <Button color="inherit" onClick={() => setPage('calendar')}>Calendar</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


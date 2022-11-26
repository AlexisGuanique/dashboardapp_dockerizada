import React from 'react';

import {
  AppBar, Grid, Toolbar, Typography,
} from '@mui/material';

export default function NavBar({ drawerWidth = 240 }) {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >

      <Toolbar>

        <Grid
          container
          direction="row"
          justifyContent="end"
          alignItems="center"
        >

          <Typography variant="h6" noWrap component="div">Hospital Italiano de Buenos Aires</Typography>

        </Grid>

      </Toolbar>
    </AppBar>
  );
}

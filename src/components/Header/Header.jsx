import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AppLogo from '../AppLogo/AppLogo';

export default function Header(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" enableColorOnDark="true">
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
          <AppLogo />
          <Typography variant='h5' sx={{fontFamily: 'monospace'}}>{props.titulo}</Typography>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
import React, { useEffect, useState } from 'react';

import { useTheme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import { DarkModeSwitch } from './DarkModeSwitch';

export default function Header({ user, logout, darkMode, handleDarkMode }) {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const theme = useTheme();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
    <AppBar position="static" enableColorOnDark>
      <Toolbar disableGutters>
        <Grid container spacing={2}>
          <Grid item xs={3} />
          <Grid item xs={6} container justifyContent="center" alignItems="center">
            <Typography
              variant="h5"
              noWrap
              sx={{
                fontWeight: 700,
                letterSpacing: '.5rem',
                color: theme.palette.background.paper,
                textDecoration: 'none',
              }}
              >
              APP NAME
            </Typography>
          </Grid>
          <Grid item xs={3} textAlign="right">
            {user?.email &&
              <Box style={{ marginRight: '8px' }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu}>
                    <Avatar alt={user?.email} sx={{ bgcolor: '#FFF', color: theme.palette.primary.main }}>
                      {user?.email[0]}
                    </Avatar>
                  </IconButton>
                </Tooltip>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem key={1}>
                    <FormControlLabel
                      label="Dark mode"
                      labelPlacement="start"
                      control={<DarkModeSwitch />}
                      checked={darkMode}
                      onChange={handleDarkMode}
                    />
                  </MenuItem>
                  <MenuItem key={2} onClick={() => {}}>
                    <Typography textAlign="center">Profile</Typography>
                  </MenuItem>
                  <MenuItem key={3} onClick={logout}>
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            }
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  </>
  );
}

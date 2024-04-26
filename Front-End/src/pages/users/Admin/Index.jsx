import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { LogoSpace, LowerBar, MainContainer, OutLetSpace, TopBar, UpperBar, AdminPage } from '../../../components/styled-components/dashboardStyledComponents';
import { AccountCircle, CarCrash } from '@mui/icons-material';
import { IconButton, Menu, MenuItem } from '@mui/material';

const Index = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOut = () => {
    localStorage.removeItem('admnTkn');
    localStorage.removeItem('admnInfo');
    navigate('/admin/auth/signin');
  }

  return (
    <AdminPage>
        <TopBar>
          <UpperBar>
            <LogoSpace>
              <CarCrash /><span>VSBA</span>
            </LogoSpace>
            <div>
              <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleMenu} color="inherit">
                <AccountCircle style={{ color: 'white' }}/>
              </IconButton>
              <Menu id="menu-appbar" anchorEl={anchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem onClick={() => { navigate('/admin/settings'); handleClose(); }}>Profile/Settings</MenuItem>
                <MenuItem onClick={() => { logOut(); handleClose(); }}>Log out</MenuItem>
              </Menu>
            </div>
          </UpperBar>
          <LowerBar>
            <NavLink to={'/admin/'}>Dashbaord</NavLink>
            <NavLink to={'/admin/bookings'}>Bookings</NavLink>
            <NavLink to={'/admin/settings'}>Settings</NavLink>
          </LowerBar>
        </TopBar>
        <MainContainer>
          <OutLetSpace>
            <Outlet />
          </OutLetSpace>
        </MainContainer>
    </AdminPage>
  )
}

export default Index
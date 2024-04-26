import React, { useState } from 'react'
import { Logo, MobileMenuButton, MobileMenueContainer, SimpleTopNavigation } from '../styled-components/navigationStyledComponents'
import { Link, NavLink } from 'react-router-dom'
import { CarCrash, Close, Menu } from '@mui/icons-material';

export default function NavigationBar() {
  const [openNav, setOpenNav] = useState(false);

  const toggleMenu = () => {
    setOpenNav(!openNav);
  }

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('cltTkn');
    localStorage.removeItem('cltInfo');
    window.location.replace('/');
  }

  return (
    <SimpleTopNavigation>
      <ul>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/book-now'}>Book now</NavLink></li>
      </ul>
      <Logo to={'/'} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px', fontWeight: '700'}}><CarCrash />EventManagementSystem</Logo>
      <ul>
        {localStorage.getItem('cltTkn') ?
          <>
            <li><NavLink to={'/client/'}>My Bookings</NavLink></li>
            <li><NavLink to={'/client/settings'}>Settings</NavLink></li> 
          </>
        :
          <li><NavLink to={'/client/signin'}>Sign in</NavLink></li>
        }
        {localStorage.getItem('cltTkn') && <li><Link to={"/"} onClick={logout}>Log out</Link></li>}
      </ul>
      {/* Mobile Menu  */}
      <MobileMenuButton type='button' onClick={toggleMenu}>{openNav ? <Close /> : <Menu />}</MobileMenuButton>
      {openNav && <MobileMenueContainer>
        <ul>
          <li><NavLink onClick={toggleMenu} to={'/'}>Home</NavLink></li>
          <li><NavLink onClick={toggleMenu} to={'/book-now'}>Book now</NavLink></li>
          {localStorage.getItem('cltTkn') ?
            <>
              <li><NavLink onClick={toggleMenu} to={'/client/'}>My Bookings</NavLink></li>
              <li><NavLink onClick={toggleMenu} to={'/client/settings'}>Settings</NavLink></li> 
            </>
          :
            <li><NavLink onClick={toggleMenu} to={'/client/signin'}>Sign in</NavLink></li>
          }
          {localStorage.getItem('cltTkn') && <li><Link to={"/"} onClick={()=> {logout(); toggleMenu();}}>Log out</Link></li>}
        </ul>
      </MobileMenueContainer>}

    </SimpleTopNavigation>
  )
}

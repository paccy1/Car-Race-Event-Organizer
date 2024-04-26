import React from 'react'
import { Outlet } from 'react-router-dom'
import { AuthPagesContainer, MainContainer } from '../../components/styled-components/authenticationPages';
import { CarCrash } from '@mui/icons-material';

const index = () => {
  
  return (
    <MainContainer>
      <CarCrash style={{ fontSize: '400%', color: '#0066ff', background: 'white', padding: '5px', border:'2px solid #0066ff', borderRadius:'50px' }}/>
      <AuthPagesContainer>
        <Outlet />
      </AuthPagesContainer>
    </MainContainer>
  )
}

export default index
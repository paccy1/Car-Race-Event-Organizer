import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import { Banner, Services, ServicesContainer, AService, BannerContent } from '../components/styled-components/landingPageComponents';
import { Button } from '@mui/material';
import NavigationBar from '../components/sections/NavigationBar';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Helmet>
        <title>Bienvenue .</title>
        <meta name="description" content="Welcome to VSBA."/>
      </Helmet>
      
      <NavigationBar />

      <Banner style={{ backgroundImage: "url('Assets/car.jpg')", backgroundOrigin:'initial', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
        <BannerContent>
          <h1>Bienvenue sur notre EMS</h1>
          <h1>Welcome to our racing event planning platform!</h1>
          <p>We're thrilled to have you here. 
             Ready to get started? Dive into planning your next event now!</p>
          <div style={{ zIndex: '700' }}>
            <Button variant='contained' size='medium' color='info' onClick={(e) =>{ navigate('/book-now'); }}>Book now</Button>
            <Button variant='contained' size='medium' color='secondary' onClick={(e) =>{ navigate('/client/signup'); }}>Create an account</Button>
          </div>
        </BannerContent>
      </Banner>
      {/* <Services>
        <h2>Our services</h2>
        <ServicesContainer>
          <AService>
            
          </AService>
        </ServicesContainer>
      </Services> */}
    </div>
  )
}

export default LandingPage

import React from 'react'
import { Helmet } from 'react-helmet-async'
import {  Banner } from '../components/styled-components/landingPageComponents';
import NavigationBar from '../components/sections/NavigationBar';

const ErrorPage = () => {
  return (
    <div>
      <Helmet>
        <title>404 - Page not found.</title>
        <meta name="description" content="Page not found."/>
      </Helmet>
      <NavigationBar />
      <Banner>
        <h1>404</h1>
        <h2>Page not found</h2>
      </Banner>
    </div>
  )
}

export default ErrorPage

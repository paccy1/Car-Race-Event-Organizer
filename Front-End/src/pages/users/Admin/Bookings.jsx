import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { DashboardContentContainer, DashboardTitleBar, InnerContainer, SideMenu, TwoSidedContainer } from '../../../components/styled-components/dashboardStyledComponents'
import BookingsTable from '../../../components/tables/BookingsTable'
import axios from 'axios'
import Apis from '../../../utils/Apis'
import { Button } from '@mui/material'

const Bookings = () => {
  const [listOfBookings, setListOfBookings] = useState([]);

  useEffect(() => {
    axios.get(Apis.bookingApis.list)
    .then(response => {
      response.data.bookings.forEach(element => {
        element.id = element._id;
      })
      response.data.bookings.sort((a, b) => new Date(b.submittedOn) - new Date(a.submittedOn))
      setListOfBookings(response.data.bookings);
    })
    .catch(error => console.log('Error: '+error));
  },[])

  return (
    <>
      <Helmet>
        <title>Bookings - Administrator</title>
        <meta name="description" content="List of bookings."/> 
      </Helmet>
      <DashboardContentContainer>
        <DashboardTitleBar>
          <h3>Bookings</h3>
        </DashboardTitleBar>
        <TwoSidedContainer>
          {/* <SideMenu>
            <Button></Button>
          </SideMenu> */}

          <InnerContainer>
            <BookingsTable data={listOfBookings} />
          </InnerContainer>
        </TwoSidedContainer>
      </DashboardContentContainer>
    </>
  )
}

export default Bookings
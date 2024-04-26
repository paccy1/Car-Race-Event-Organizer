import React, { useEffect, useState } from 'react'
import { ABooking, ListOfBookings, Page, SectionOrPageContainer } from '../../../components/styled-components/pageStyledComponents'
import { Helmet } from 'react-helmet-async'
import axios from 'axios';
import Apis from '../../../utils/Apis';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function NewBooking() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const userLocalInfo = JSON.parse(localStorage.getItem('cltInfo'));
    axios.get(Apis.bookingApis.list)
    .then(response => {
      var allBookings = response.data.bookings;
      var myBookings = allBookings.filter((booking)=>{ return booking.email === userLocalInfo.email})
      setBookings(myBookings);
    })
    .catch(error => console.log(error))
  },[])

  return (
    <Page>
      <Helmet>
        <title>Your VSBA account status</title>
        <meta name="description" content="User home account in their Vehicle Servicing Booking Application."/> 
      </Helmet>
      <SectionOrPageContainer>
        <h1 style={{ textAlign: 'left' }}>My bookings</h1>
        <ListOfBookings>
          {bookings && bookings.map((booking, index) => (
            <ABooking key={index} >
              <p><span>Booked on:</span><em>{new Date(booking.submittedOn).toUTCString()}</em></p>
              <p><span>Type of Service: </span><em>{booking.typeOfService}</em></p>
              <p><span>Status:</span><em>{booking.status}</em></p>
              <p><span>Client confirmation:</span><em>{booking.clientConfirmation}</em></p>
              <p><span>Work progress: </span><em style={{ color: 'white', padding: '2px 10px', borderRadius: '10px' ,backgroundColor: booking.workStatus === 'Ended' ? 'green' : booking.workStatus === 'In progress' ? 'blue' : 'gray'}}>{booking.workStatus}</em></p>
              <Link to={`/client/booking/${booking._id}`}><FaArrowRight /></Link>
            </ABooking>
          ))}
          {bookings.length === 0 && 
            <div style={{ width: '100%'}}>
              <p style={{ textAlign: 'center'}}>No available bookings.<Link to={'/book-now'}>Book now.</Link></p>
            </div>}
        </ListOfBookings>
      </SectionOrPageContainer>
    </Page>
  )
}
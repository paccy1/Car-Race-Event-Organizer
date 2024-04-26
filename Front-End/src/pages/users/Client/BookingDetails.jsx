import React, { useEffect, useState } from 'react'
import { Page, SectionOrPageContainer } from '../../../components/styled-components/pageStyledComponents'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Apis from '../../../utils/Apis'
import { AttachmentContainer, CommandButtons, DataColumn, FirstPart, FormContainer, SecondPart, ThirdPart } from '../../../components/styled-components/dashboardStyledComponents'
import { Alert, Button, Snackbar } from '@mui/material'

const Report = () => {
  const params = useParams();
  const [bookingDetails, setBookingDetails] = useState({});
  const [displayAttachment, setDisplayAttachments] = useState('');
  const [updates, setUpdates] = useState({ clientConfirmation: '' })

  const [progress, setProgress] = useState({ value: '', disabled: false});
  const [open, setOpen] = useState(false);
  const [responseMessage, setResponseMessage] = useState({ message: '', severity: ''});
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };

  useEffect(()=>{
    axios.get(`${Apis.bookingApis.findById}${params.id}`)
    .then(response => {
      setBookingDetails(response.data.booking);
      setDisplayAttachments(response.data.booking.photos[0]);
    })
    .catch(error => console.log("Error: "+error));
  },[bookingDetails.photos, params.id]);

  const handleFormInput = ({currentTarget: input}) => { 
    setUpdates({clientConfirmation: input.value})
  };

  const updateBooking = (e) => {
    e.preventDefault();

    if (updates.clientConfirmation) {bookingDetails.clientConfirmation = updates.clientConfirmation};
    bookingDetails.photos = [];

    setProgress({ value: 'CONFIRMING ...', disabled: true });
    axios.put(`${Apis.bookingApis.update}${params.id}`, bookingDetails)
    .then(response => {
      setTimeout(()=>{
        if (response.status === 200 || response.status === 201) {            
          setProgress({ value: '', disabled: false });
          setResponseMessage({message: response.data.message, severity: 'success'});
          setOpen(true);  
        }
      }, 2000); 
    })
    .catch(error => {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setResponseMessage({ message: error.response.data.msg, severity: 'error' });
        setOpen(true);
        setProgress({ value: '', disabled: false });
      }
    });
  }


  return (
    <Page>
      <Helmet>
        <title>Book details - More info about your booking</title>
        <meta name="description" content="More details about a booking made by the client."/> 
      </Helmet>
      <SectionOrPageContainer>
        <h1 style={{ textAlign: 'left' }}>My bookings</h1>
        <FormContainer onSubmit={updateBooking} style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <FirstPart>
            <DataColumn>
              <label htmlFor="fullName">Full name</label>
              <p>{bookingDetails.fullName}</p>
            </DataColumn>
            <DataColumn>
              <label htmlFor="phone">Phone</label>
              <p>{bookingDetails.phone}</p>
            </DataColumn>
            <DataColumn>
              <label htmlFor="email">Email</label>
              <p>{bookingDetails.email}</p>
            </DataColumn>
            <DataColumn>
              <label htmlFor="vehicleType">Vehicle Type</label>
              <p>{bookingDetails.vehicleType}</p>
            </DataColumn>
            <DataColumn>
              <label htmlFor="typeOfService">Type of service</label>
              <p>{bookingDetails.typeOfService}</p>
            </DataColumn>
            <DataColumn>
              <label htmlFor="serviceDescription">Service Description</label>
              <p>{bookingDetails.serviceDescription}</p>
            </DataColumn>
            <DataColumn>
              <label htmlFor="submittedOn">Submitted on</label>
              <p>{new Date(bookingDetails.submittedOn).toLocaleDateString()}</p>
            </DataColumn>
          </FirstPart>
          <SecondPart>
            <DataColumn>
              <label htmlFor="serviceDay">Service day</label>
              <p>{new Date(bookingDetails.serviceDay).toLocaleDateString()}</p>
            </DataColumn>
            <DataColumn>
              <label htmlFor="startHour">Start hour</label>
              <p>{bookingDetails.startHour} h</p>
            </DataColumn>
            <DataColumn>
              <label htmlFor="temporalSlotNumber">Slot number</label>
              <p>{bookingDetails.temporalSlotNumber}</p>
            </DataColumn>
            <DataColumn>
              <label htmlFor="status">Status</label>
              <p>{bookingDetails.status}</p>
            </DataColumn>
            <DataColumn>
              <label htmlFor="workStatus">Work status</label>
              <p>{bookingDetails.workStatus}</p>
            </DataColumn>
            {/* Updatable element */}
            <DataColumn style={{ flexDirection: 'row'}}>
              <DataColumn>
                <label htmlFor="clientConfirmation">Client Confirmation</label>
                <p>{bookingDetails.clientConfirmation}</p>
              </DataColumn>
              <DataColumn>
                <label htmlFor="clientConfirmationUpdate">Update</label>
                <select id='clientConfirmationUpdate' name={"clientConfirmation"} onChange={handleFormInput}>
                  <option value={''}>Choose confirmation</option>
                  <option value={'Confirmed'}>Confirm</option>
                  <option value={'Canceled'}>Cancel</option>
                </select>
              </DataColumn>
            </DataColumn>
          </SecondPart>

          <ThirdPart onSubmit={updateBooking}>
            <DataColumn>
              <label htmlFor="submittedOn">Attachment</label>
              <AttachmentContainer>
              {displayAttachment ?
                <a target='about_blank' href={`${Apis.files.file}${displayAttachment}`}><img src={`${Apis.files.file}/${displayAttachment}`} alt='' /></a>
              :
              <p style={{ textAlign: 'center' }}>No attachment available</p>
              }
              </AttachmentContainer>
            </DataColumn>
            <CommandButtons>
              {!progress.disabled && <Button type='submit' variant='contained' size='small' color='primary'>CONFIRM </Button>}
              {progress.disabled && <Button type='submit' variant='contained' size='small' color='primary' disabled>{progress.value}</Button>}
            </CommandButtons>
          </ThirdPart>
        </FormContainer>

        {/* Response message  */}
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={responseMessage.severity} sx={{ width: '100%' }}>{responseMessage.message}</Alert>
        </Snackbar>
      </SectionOrPageContainer>
    </Page>
  )
}

export default Report
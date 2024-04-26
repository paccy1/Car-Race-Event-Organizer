import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import NavigationBar from '../components/sections/NavigationBar';
import { SectionOrPageContainer } from '../components/styled-components/pageStyledComponents';
import BookingForm from '../components/sections/BookingForm';
import axios from 'axios';
import Apis from '../utils/Apis';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const BookingNow = () => {
  const [bookingFormData, setBookingFormData] = useState({ email:'', fullName: '', phone:'', vehicleType: '', vehicleModel: '', typeOfService: '', serviceDescription: '' });
  const [attachments, setAttachments] = useState([]);
  const [attachment, setAttachment] = useState("");
  const [progress, setProgress] = useState({ value: '', disabled: false});
  const [open, setOpen] = useState(false);
  const [responseMessage, setResponseMessage] = useState({ message: '', severity: ''});

  useEffect(() => {
    const userLocalInfo = JSON.parse(localStorage.getItem('cltInfo'));
    setBookingFormData({...bookingFormData, email: userLocalInfo.email, fullName: userLocalInfo.fullName, phone: userLocalInfo.phone })
  }, [])
  

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };

  const handleFormInput = ({currentTarget: input}) => { 
    setBookingFormData({
      ...bookingFormData, [input.name]: input.value
    })
  };

  const handleFileInput = (e) => {
    setAttachment(e.target.files[0]);
    console.log(e.target.files[0]);
  }

  const submitForm = (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type":"multipart/form-data"
      }
    }

    bookingFormData.photos = attachment;

    if (bookingFormData.fullName.length <= 3) {
      setResponseMessage({ message: 'Your name must be more than 3 characters long ', severity: 'error' });
      setOpen(true);
      return;
    } else {
      setProgress({ value: 'Submitting request ...', disabled: true });

      axios.post(Apis.bookingApis.createNew, bookingFormData, config)
      .then(response => {
        setTimeout(()=>{
          if (response.status === 201) {            
            setProgress({ value: '', disabled: false });
            setResponseMessage({message: response.data.message, severity: 'success'});
            setOpen(true);  
          }
        }, 2000); 
        window.location.replace('/client');
      })
      .catch(error => {
        if (error.response && error.response.status >= 400 && error.response.status <= 500) {
          setResponseMessage({ message: error.response.data.msg, severity: 'error' });
          setOpen(true);
          setProgress({ value: '', disabled: false });
        }
      });
    }
  }
  return (
    <div>
      <Helmet>
        <title>Book a slot now.</title>
        <meta name="description" content="Book a slot with  VSBA."/>
      </Helmet>
      <NavigationBar />
      <SectionOrPageContainer>
        <h1>Book your slot now.</h1>

        <BookingForm 
          bookingFormData={bookingFormData} 
          attachment={attachment}
          attachments={attachments}
          setAttachment={setAttachment}
          setAttachments={setAttachments}
          setBookingFormData={setBookingFormData} 
          submitForm={submitForm} 
          handleFormInput={handleFormInput} 
          handleFileInput={handleFileInput} 
          progress={progress} 
        />
      </SectionOrPageContainer>
      
      {/* Response message  */}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={responseMessage.severity} sx={{ width: '100%' }}>{responseMessage.message}</Alert>
      </Snackbar>
    </div>
  )
}

export default BookingNow

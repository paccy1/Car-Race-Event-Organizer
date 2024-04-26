import React, { useEffect, useState } from 'react'
import { Page, SectionOrPageContainer } from '../../../components/styled-components/pageStyledComponents'
import { Helmet } from 'react-helmet-async'
import axios from 'axios'
import Apis from '../../../utils/Apis'
import { CommandButtons, DataColumn, FirstPart, FormContainer, SecondPart, ThirdPart } from '../../../components/styled-components/dashboardStyledComponents'
import { Alert, Button, Snackbar } from '@mui/material'

export default function Settings() {
  const [user, setUser] = useState({});

  const [progress, setProgress] = useState({ value: '', disabled: false});
  const [progress2, setProgress2] = useState({ value: '', disabled: false});
  const [open, setOpen] = useState(false);
  const [responseMessage, setResponseMessage] = useState({ message: '', severity: ''});
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };

  useEffect(()=>{
    axios.get(`${Apis.userApis.findById}${JSON.parse(localStorage.getItem('cltInfo')).id}`)
    .then(response => {
      setUser(response.data.user);
    })
    .catch(error => console.log("Error: "+error));
  },[]);

  const handleFormInput = ({currentTarget: input}) => { 
    setUser({...user ,[input.name]: input.value});
  };

  // Update user info
  const updateUser = (e) => {
    e.preventDefault();
    setProgress({ value: 'Updating ...', disabled: true });
    axios.put(`${Apis.userApis.updateUserAccount}${user._id}`, user)
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

  // Send password reset request
  const requestPasswordReset = () => {
    setProgress2({ value: 'SENDING REQUEST ...', disabled: true });
    axios.post(Apis.userApis.requestPasswordReset, {email: user.email, role: 'client'})
    .then(response => {
      setTimeout(()=>{
        if (response.status === 200 || response.status === 201) {            
          setProgress2({ value: '', disabled: false });
          setResponseMessage({message: response.data.message, severity: 'success'});
          setOpen(true);  
        }
      }, 2000); 
    })
    .catch(error => {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setResponseMessage({ message: error.response.data.msg, severity: 'error' });
        setOpen(true);
        setProgress2({ value: '', disabled: false });
      }
    });
  }

  return (
    <Page>
      <Helmet>
        <title>User account settings</title>
        <meta name="description" content="User account settings."/> 
      </Helmet>
      <SectionOrPageContainer>
        <h1 style={{ textAlign: 'left' }}>My Account</h1>
        <FormContainer onSubmit={updateUser} style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <FirstPart>
            <DataColumn>
              <label htmlFor="fullName">Full name</label>
              <input id='fullName' type='text' name='fullName' value={user.fullName || ''} onChange={handleFormInput}/>
            </DataColumn>
            <DataColumn>
              <label htmlFor="phone">Phone</label>
              <input id='phone' type='text' name='phone' value={user.phone || ''} onChange={handleFormInput}/>
            </DataColumn>
          </FirstPart>
          <SecondPart>
            <DataColumn>
              <label htmlFor="email">Email</label>
              <input id='email' type='text' name='email' value={user.email || ''} onChange={handleFormInput}/>
            </DataColumn>
            <CommandButtons>
              {!progress.disabled && <Button type='submit' variant='contained' size='small' color='primary'>UPDATE</Button>}
              {progress.disabled && <Button type='submit' variant='contained' size='small' color='primary' disabled>{progress.value}</Button>}
            </CommandButtons>
          </SecondPart>
          <ThirdPart>
            <DataColumn>
              <label htmlFor="resetPassword">Do you want to update your password? Click on the link bellow.</label>
              {!progress2.disabled && <Button type='button' variant='text' size='small' color='primary' onClick={(e) => { e.preventDefault(); requestPasswordReset(); }}>Request Password Reset</Button>}
              {progress2.disabled && <Button type='submit' variant='contained' size='small' color='primary' disabled>{progress2.value}</Button>}
            </DataColumn>
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
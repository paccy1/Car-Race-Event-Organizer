import React from 'react';
import { AuthFormContainer, CommandButtons } from '../styled-components/authenticationPages';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { BookingFormContainer } from '../styled-components/pageStyledComponents';
import { MuiFileInput } from 'mui-file-input';

export default function BookingForm(props) {
    const { bookingFormData, attachment, attachments, setAttachment, setAttachments, setBookingFormData, submitForm, handleFormInput, handleFileInput, progress } = props;

    const handleVehicleTypeChanges = (event) => {
        setBookingFormData({...bookingFormData, eventType: event.target.value});
    };

    const handleServiceTypeChanges = (event) => {
        setBookingFormData({...bookingFormData, typeOfService: event.target.value});
    };

    return (
        <BookingFormContainer>
            <AuthFormContainer onSubmit={submitForm}>
                <TextField id="fullName" sx={{ m: 1, width: '40ch' }}  size='small' label="Full name" variant="filled" name='fullName' value={bookingFormData.fullName || ''} onChange={handleFormInput}/>
                
                <TextField id="email" sx={{ m: 1, width: '40ch' }}  size='small' label="Email" variant="filled" name='email' value={bookingFormData.email || ''} onChange={handleFormInput}/>
                
                <TextField id="phone" sx={{ m: 1, width: '40ch' }}  size='small' label="Phone" variant="filled" name='phone' value={bookingFormData.phone || ''} onChange={handleFormInput}/>
                
                <FormControl variant="filled" sx={{ m: 1, width: '40ch' }}>
                    <InputLabel id="eventType">Type of event</InputLabel>
                    <Select labelId="eventType" id="eventType" name='eventType' value={bookingFormData.eventType} onChange={handleVehicleTypeChanges}>
                        <MenuItem value="">
                            <em>Select Type of Race</em>
                        </MenuItem>
                        <MenuItem value={'Car'}>Car racing</MenuItem>
                        <MenuItem value={'Motorcycle'}>Motorcycle racing</MenuItem>
                        <MenuItem value={'Bicycle'}>Bicycle racing</MenuItem>
                        <MenuItem value={'Truck'}>Truck racing</MenuItem>
                        <MenuItem value={'Bus'}>Bus racing</MenuItem>
                        <MenuItem value={'SUV'}>SUV racing</MenuItem>
                        <MenuItem value={'Van'}>Van racing</MenuItem>
                        <MenuItem value={'Convertible'}>Convertible racing</MenuItem>
                        <MenuItem value={'Sedan'}>Sedan racing</MenuItem>
                        <MenuItem value={'Hatchback'}>Hatchback racing</MenuItem>
                        <MenuItem value={'Coupe'}>Coupe racing </MenuItem>
                        <MenuItem value={'Minivan'}>Minivan racing</MenuItem>
                        <MenuItem value={'Pickup Truck'}>Pickup Truck racing</MenuItem>
                        <MenuItem value={'Other'}>Other</MenuItem>
                    </Select>
                </FormControl>
                
                <TextField id="eventModel" sx={{ m: 1, width: '40ch' }}  size='small' label="Model" variant="filled" name='eventModel' value={bookingFormData.eventModel || ''} onChange={handleFormInput}/>
                
                <FormControl variant="filled" sx={{ m: 1, width: '40ch' }}>
                    <InputLabel id="typeOfService">Type of service</InputLabel>
                    <Select labelId="typeOfService" id="typeOfService" name='typeOfService' value={bookingFormData.typeOfService} onChange={handleServiceTypeChanges}>
                        <MenuItem value="">
                            <em>Select Services</em>
                        </MenuItem>
                        <MenuItem value={'Oil Change'}>Oil Change</MenuItem>
                        <MenuItem value={'Tire Rotation'}>Tire Rotation</MenuItem>
                        <MenuItem value={'Brake Inspection'}>Brake Inspection</MenuItem>
                        <MenuItem value={'Engine Tune-up'}>Engine Tune-up</MenuItem>
                        <MenuItem value={'Wheel Alignment'}>Wheel Alignment</MenuItem>
                        <MenuItem value={'Battery Replacement'}>Battery Replacement</MenuItem>
                        <MenuItem value={'Diagnostic Services'}>Diagnostic Services</MenuItem>
                        <MenuItem value={'Transmission Service'}>Transmission Service</MenuItem>
                        <MenuItem value={'Air Conditioning Repair'}>Air Conditioning Repair</MenuItem>
                        <MenuItem value={'Exhaust System Repair'}>Exhaust System Repair</MenuItem>
                        <MenuItem value={'Electrical System Repair'}>Electrical System Repair</MenuItem>
                        <MenuItem value={'Suspension Repair'}>Suspension Repair</MenuItem>
                        <MenuItem value={'Radiator Flush'}>Radiator Flush</MenuItem>
                        <MenuItem value={'Fuel System Cleaning'}>Fuel System Cleaning</MenuItem>
                        <MenuItem value={'Headlight Restoration'}>Headlight Restoration</MenuItem>
                        <MenuItem value={'Windshield Replacement'}>Windshield Replacement</MenuItem>
                        <MenuItem value={'Paintless Dent Repair'}>Paintless Dent Repair</MenuItem>
                        <MenuItem value={'Interior Detailing'}>Interior Detailing</MenuItem>
                        <MenuItem value={'Car Wash and Wax'}>Car Wash and Wax</MenuItem>
                        <MenuItem value={'Towing Service'}>Towing Service</MenuItem>
                        <MenuItem value={'Other'}>Other</MenuItem>
                    </Select>
                </FormControl>
                
                <TextField id="serviceDescription" sx={{ m: 1, width: '40ch' }} label="Service Description" multiline rows={4} variant="filled" name='serviceDescription' value={bookingFormData.serviceDescription || ''} onChange={handleFormInput}/>

                <input type={"file"} onChange={handleFileInput}/>
                
                <CommandButtons>
                    {!progress.disabled && <Button style={{ width: '100%' }} type='submit' variant='contained' size='medium' color='primary'>Submit booking </Button>}
                    {progress.disabled && <Button style={{ width: '100%' }} type='submit' variant='contained' size='medium' color='primary' disabled>{progress.value} </Button>}
                </CommandButtons>
            </AuthFormContainer>
        </BookingFormContainer>
    )
}

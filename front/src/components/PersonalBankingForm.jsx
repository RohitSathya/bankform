import React from 'react';
import { TextField, Button, Typography } from '@mui/material';

const PersonalBankingForm = ({ formData, setFormData, nextStep }) => {
  return (
    <div>
      <Typography variant="h5">Personal Banking</Typography>
      <TextField
        label="Full Name"
        value={formData.fullName}
        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Phone Number"
        value={formData.phoneNumber}
        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Address"
        value={formData.address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Username"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={nextStep}>
        Next
      </Button>
    </div>
  );
};

export default PersonalBankingForm;

import React from 'react';
import { TextField, Button, Typography } from '@mui/material';

const CorporateBankingForm = ({ formData, setFormData, nextStep, prevStep }) => {
  return (
    <div>
      <Typography variant="h5">Corporate Banking</Typography>
      <TextField
        label="Company Name"
        value={formData.companyName}
        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Company Email"
        value={formData.companyEmail}
        onChange={(e) => setFormData({ ...formData, companyEmail: e.target.value })}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Contact Person"
        value={formData.contactPerson}
        onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Contact Phone"
        value={formData.contactPhone}
        onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Login ID"
        value={formData.loginId}
        onChange={(e) => setFormData({ ...formData, loginId: e.target.value })}
        fullWidth
        margin="normal"
      />
      <TextField
        label="User ID"
        value={formData.userId}
        onChange={(e) => setFormData({ ...formData, userId: e.target.value })}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        value={formData.corpPassword}
        onChange={(e) => setFormData({ ...formData, corpPassword: e.target.value })}
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

export default CorporateBankingForm;

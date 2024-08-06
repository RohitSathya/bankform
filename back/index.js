const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/submit-form', (req, res) => {
  const formData = req.body;

  fs.appendFile('formData.txt', JSON.stringify(formData) + '\n', (err) => {
    if (err) {
      console.error('Failed to save form data', err);
      res.status(500).send('Failed to save form data');
    } else {
      res.status(200).send('Form data saved successfully');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

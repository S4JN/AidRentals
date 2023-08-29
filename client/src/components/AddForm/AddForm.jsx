import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FileBase from 'react-file-base64';
import { useUserContext } from '../../context/UserContext';
import axios from 'axios';
import "./addForm.css"
const steps = ['Item details', 'Upload Image'];



export default function AddForm({ setShowForm }) {
  const { user } = useUserContext();
  const _id = user._id;

  const [activeStep, setActiveStep] = useState(0);

  const [formData, setFormData] = useState({
    name: '',
    owner: _id,
    description: '',
    rentalPrice: '',
    life: '',
    tags: '',
    image: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    // If the field name is "tags", split the comma-separated value into an array
    if (name === "tags") {
      const tagsArray = value.split(",").map(tag => tag.trim());
      setFormData((prevData) => ({
        ...prevData,
        [name]: tagsArray,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  

  const handleImageChange = (base64) => {
    setFormData((prevData) => ({
      ...prevData,
      image: base64,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      };

      const { data } = await axios.post(
        'http://localhost:8000/api/v1/inventory/add',
        formData,
        config
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const nextStep = () => {
    if (!isStep1Valid()) {
      alert("fill all the fields first")
      console.log("fill fields");
      return;
    }


    setActiveStep(activeStep + 1);
  };

  const backStep = () => {
    setActiveStep(activeStep - 1);
  };

  const isStep1Valid = () => {
    return (
      formData.name !== '' &&
      formData.description !== '' &&
      formData.rentalPrice !== '' &&
      formData.life !== '' &&
      formData.tags !== ''
    );
  };

  return (
    <>
      <CssBaseline />

      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Add an Item
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <form onSubmit={handleSubmit}>
            {activeStep === 0 && (
              <>
                {/* Step 1 */}
                <div>
                  <label>Item Name:</label>
                  <br />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required

                    style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                  />
                </div>
                <div>
                  <label>Description:</label>
                  <br />

                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}

                  />
                </div>


                <div className='PriceandLife'>
                  <div>
                    <label>Price:</label>
                    <br />

                    <input
                      type="number"
                      name="rentalPrice"
                      value={formData.rentalPrice}
                      onChange={handleInputChange}
                      required
                      style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}

                    />
                  </div>
                  <div>
                    <label>Life:</label>
                    <br />

                    <input
                      type="text"
                      name="life"
                      value={formData.life}
                      onChange={handleInputChange}
                      required
                      style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}

                    />
                  </div>
                </div>
                <div>
                  <label>Tags:</label>
                  <br />

                  <input
                    type="text"
                    name="tags"
                    value={formData.tags}
                    onChange={handleInputChange}
                    required
                    style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}

                  />
                </div>
                <div>

                  <Button onClick={() => setShowForm(false)} sx={{ mt: 3, ml: 1 }}>
                    Close
                  </Button>

                  <Button
                    variant="contained"
                    onClick={nextStep}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    Next
                  </Button>
                </div>
              </>
            )}
            {activeStep === 1 && (
              <>
                {/* Step 2 */}
                <div>
                  <label>Image:</label>
                  <div>
                    <FileBase
                      type="file"
                      multiple={false}
                      onDone={({ base64 }) => handleImageChange(base64)}
                    />
                  </div>
                </div>
                <div>
                  <Button onClick={backStep} sx={{ mt: 3, ml: 1 }}>
                    Previous
                  </Button>
                  <Button onClick={() => setShowForm(false)} sx={{ mt: 3, ml: 1 }}>
                    Close
                  </Button>
                  <Button type="submit" variant="contained" sx={{ mt: 3, ml: 1 }} >
                    Submit
                  </Button>
                </div>

              </>
            )}
          </form>
        </Paper>
      </Container>
    </>
  );
}

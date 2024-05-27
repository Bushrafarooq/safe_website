import {
  MDBBtn,
  MDBInput,
  MDBValidation,
  MDBValidationItem
} from 'mdb-react-ui-kit';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function ContactForm() {
  const [inputs, setInputs] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Msg: ""
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('/contact-us', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Data posted successfully:', data);
        // Optionally, perform any actions based on the response
      })
      .catch((error) => {
        console.error('Error posting data:', error);
        // Handle errors
      });

    navigate('/'); // Redirect to the home page after submission
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  }

  return (
    <MDBValidation className='row g-3' noValidate onSubmit={handleSubmit}>
      <MDBValidationItem className='col-md-12' feedback='Please provide a valid name.'>
        <MDBInput
          value={inputs.Name}
          name='Name'
          onChange={handleChange}
          id='name'
          required
          label='Name'
        />
      </MDBValidationItem>

      <MDBValidationItem className='col-md-12' feedback='Please provide a valid email.'>
        <MDBInput
          value={inputs.Email}
          name='Email'
          onChange={handleChange}
          id='email'
          required
          label='Email'
        />
      </MDBValidationItem>

      <MDBValidationItem className='col-md-12' feedback='Please provide a valid phone number.'>
        <MDBInput
          value={inputs.Phone}
          name='Phone'
          onChange={handleChange}
          id='phone'
          required
          label='Phone Number'
        />
      </MDBValidationItem>

      <MDBValidationItem className='col-md-12' feedback='Please provide a message.'>
        <MDBInput
          wrapperClass='mb-4'
          textarea='true'
          id='message'
          rows={4}
          label='Message'
          name='Msg'
          value={inputs.Msg}
          onChange={handleChange}
          required
        />
      </MDBValidationItem>

      <MDBBtn type='submit' className='mb-4' block>
        Submit
      </MDBBtn>
    </MDBValidation>
  );
}

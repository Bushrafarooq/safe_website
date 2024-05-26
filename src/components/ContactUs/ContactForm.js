import {
  MDBBtn,
  MDBCheckbox,
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
    Msg: ""
  });
  const navigate = useNavigate();

  const sendEmail = (e) => {
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
        console.log('Data posted successfully to ContactUs table:', data);
        // Optionally, perform any actions based on the response
      })
      .catch((error) => {
        console.error('Error posting data to ContactUs table:', error);
        // Handle errors
      });

    navigate('/'); // Redirect to the home page after submission
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  }

  const ValidateEmail = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    const emailPane = document.getElementById('email_pane');
    const isValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value);

    emailPane.style.display = isValid ? 'none' : 'block';
    emailPane.innerHTML = isValid ? "" : "Email is Invalid";
    return isValid;
  }

  const validateName = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    const namePane = document.getElementById('name_pane');
    const isValid = /^[a-zA-Z]+$/.test(e.target.value);

    namePane.style.display = isValid ? 'none' : 'block';
    namePane.innerHTML = isValid ? "" : "Name is Invalid";
    return isValid;
  }

  return (
    <MDBValidation className='row g-3' noValidate>
      <MDBValidationItem feedback='Please provide a valid name.' className='col-md-12'>
        <MDBInput
          value={inputs.Name}
          name='Name'
          onChange={validateName}
          id='name'
          required
          label='Name'
          className='my-0'
        />
        <div id='name_pane' className='text-danger mt-0' style={{ display: "none" }}></div>
      </MDBValidationItem>

      <MDBValidationItem feedback='Please provide a valid email.' className='col-md-12'>
        <MDBInput
          value={inputs.Email}
          name='Email'
          onChange={ValidateEmail}
          id='email'
          required
          label='Email'
          className='my-0'
        />
        <div id='email_pane' className='text-danger mt-0' style={{ display: "none" }}></div>
      </MDBValidationItem>

      <MDBValidationItem feedback='Please provide a message.' className='col-md-12'>
        <MDBInput
          required
          wrapperClass='mb-4'
          textarea='true'
          id='form4Example3'
          rows={4}
          label='Message'
          name='Msg'
          value={inputs.Msg || ""}
          onChange={handleChange}
        />
      </MDBValidationItem>

      <MDBCheckbox
        wrapperClass='d-flex justify-content-center mb-4'
        id='form4Example4'
        label='Send me a copy of this message'
        defaultChecked
      />

      <MDBBtn type='submit' className='mb-4' block onClick={sendEmail}>
        Submit
      </MDBBtn>
    </MDBValidation>
  );
}

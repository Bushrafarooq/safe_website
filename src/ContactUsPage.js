import { MDBCol, MDBContainer, MDBIcon, MDBRow, MDBTypography } from 'mdb-react-ui-kit';
import React from 'react';
import ContactForm from './components/ContactUs/ContactForm';
import './components/ContactUs/ContactForm.css'; // Import the CSS file for styling
import illustration from './components/ContactUs/illustation.jpg'; // Make sure to have an illustration image in the specified path
import Footer from './components/Home/Footer';
import Navbar from './components/Home/Navbar';

function ContactUsPage() {
  return (
    <>
      <Navbar />
      <MDBContainer className='contact-us-page py-5'>
        <MDBTypography className='text-center display-3 pb-3 mb-4 border-bottom'>
          Contact Us
        </MDBTypography>
        <h5 className='text-center my-4'>
          We can't solve your problem if you don't tell us about it.
        </h5>
        <MDBRow className='justify-content-center align-items-center'>
          <MDBCol md='5'>
            <div className='contact-form p-4 shadow-5'>
              <div className='d-flex justify-content-center mb-4'>
                <MDBIcon icon='envelope' size='3x' className='text-primary' />
              </div>
              <ContactForm />
            </div>
          </MDBCol>
          <MDBCol md='5' className='illustration d-flex justify-content-center'>
            <img src={illustration} alt='Contact Us Illustration' className='img-fluid' />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Footer />
    </>
  );
}

export default ContactUsPage;


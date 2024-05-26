import { MDBCol, MDBContainer, MDBIcon, MDBRow, MDBTypography } from 'mdb-react-ui-kit';
import React from 'react';
import Cf from './components/ContactUs/Cf';
import Footer from './components/Home/Footer';
import Navbar from './components/Home/Navbar';

function ContactUsPage() {
  return (
    <>
      <Navbar />
      <MDBContainer className='py-5'>
        <MDBTypography className='text-center display-1 pb-3 mb-3 border-bottom'>Contact Us</MDBTypography>
        <h5 className='text-center my-4'>
          We can't solve your problem if you don't tell us about it.
        </h5>
        <MDBRow className='justify-content-center'>
          <MDBCol md='6'>
            <div className='d-flex justify-content-center mb-4'>
              <MDBIcon icon='envelope' size='3x' className='text-primary' />
            </div>
            <Cf className='p-4 shadow-5' style={{ backgroundColor: '#f7f7f7', borderRadius: '10px' }} />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Footer />
    </>
  );
}

export default ContactUsPage;

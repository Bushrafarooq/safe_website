import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCol,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBBtn,
  MDBBadge,
  MDBRow
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <>
    <MDBRow className='mb3'>
      
      <MDBCol md='10' offsetMd='1'>
        <MDBCard>
          <MDBCardBody>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='d-flex align-items-center'>
                <img
                  src='https://mdbootstrap.com/img/new/avatars/6.jpg'
                  alt=''
                  style={{ width: '45px', height: '45px' }}
                  className='rounded-circle'
                />
                <div className='ms-3'>
                  <p className='fw-bold mb-1'>Bushra Farooq</p>
                  <p className='text-muted mb-0'>I need help?</p>
                </div>
              </div>
              <MDBBadge pill color='success' light>
                Justnow
              </MDBBadge>
            </div>
          </MDBCardBody>
          <MDBCardFooter background='light' border='0' className='p-2 d-flex justify-content-around'>
            <MDBBtn color='link' rippleColor='primary' className='text-reset m-0'>
              Reply 
            </MDBBtn>
            <MDBBtn color='link' rippleColor='danger' className='text-reset m-0'>
              Delete 
            </MDBBtn>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    <br></br>
    <MDBRow className='mb3'>
      
      <MDBCol md='10' offsetMd='1'>
        <MDBCard>
          <MDBCardBody>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='d-flex align-items-center'>
                <img
                  src='https://mdbootstrap.com/img/new/avatars/6.jpg'
                  alt=''
                  style={{ width: '45px', height: '45px' }}
                  className='rounded-circle'
                />
                <div className='ms-3'>
                  <p className='fw-bold mb-1'>Alex Ray</p>
                  <p className='text-muted mb-0'>alex.ray@gmail.com</p>
                </div>
              </div>
              <MDBBadge pill color='success' light>
                Justnow
              </MDBBadge>
            </div>
          </MDBCardBody>
          <MDBCardFooter background='light' border='0' className='p-2 d-flex justify-content-around'>
            <MDBBtn color='link' rippleColor='primary' className='text-reset m-0'>
              Reply 
            </MDBBtn>
            <MDBBtn color='link' rippleColor='primary' className='text-reset m-0'>
              Delete 
            </MDBBtn>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>

     
    </MDBRow>
    </>
  );
}
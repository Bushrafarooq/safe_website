import React, { useState, useEffect } from 'react';
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
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('http://localhost:5000/get-contact-us')
      .then(response => response.json())
      .then(data => {
        // Update the state with the fetched data
        setMessages(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleDelete = async (email) => {
    try {
      // Send a POST request to delete the message with the specified email
      await fetch('http://localhost:5000/delete-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      // Refetch data after deletion
      const response = await fetch('http://localhost:5000/get-contact-us');
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };

  return (
    <>
      {messages.map((message, index) => (
        <MDBRow key={index} className='mb-3'>
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
                      <p className='fw-bold mb-1'>{message.name}</p>
                      <p className='text-muted mb-0'>{message.email}</p>
                      <hr></hr>
                      <p className='text-muted mb-0'>{message.message}</p>
                    </div>
                  </div>
                  <MDBBadge pill color='success' light>
                    Just now
                  </MDBBadge>
                </div>
              </MDBCardBody>
              <MDBCardFooter background='light' border='0' className='p-2 d-flex justify-content-around'>
                <MDBBtn color='link' rippleColor='primary' className='text-reset m-0'>
                  Reply
                </MDBBtn>
                <MDBBtn color='link' rippleColor='danger' className='text-reset m-0' onClick={() => handleDelete(message.email)}>
                  Delete
                </MDBBtn>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      ))}
    </>
  );
}

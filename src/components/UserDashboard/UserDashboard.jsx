import React from 'react';
import MyComponent from './MyComponent';
import './style.css'
import { MDBBtn, MDBBtnGroup, MDBCol , MDBRow } from 'mdb-react-ui-kit';
import GoogleMapReact from 'google-map-react';
import { useNavigate } from 'react-router-dom';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function App() {
  const navigate = useNavigate();

  const navigateToPage = () => {
    navigate('/fakeshutdown'); // Navigates to '/page'
  };
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };
  return (
    <div>
        <MDBRow>
            <MDBCol className="col-10 col-lg-3 d-flex flex-column align-items-center">
    <h3> Commands</h3>
      <MDBBtn className="w-100 custom_border mb-3" style={{backgroundColor:' rgb(96,150,180)'}}>Track</MDBBtn>
   
      <MDBBtn className="w-100 custom_border  mb-3" style={{backgroundColor:' rgb(96,150,180)'}}>Intruder</MDBBtn>
      
      <MDBBtn className="w-100 custom_border mb-3"style={{backgroundColor:' rgb(96,150,180)'}}>Remote Wipe</MDBBtn>
     
      <MDBBtn className="w-100 custom_border mb-3"style={{backgroundColor:' rgb(96,150,180)'}}>Data Access</MDBBtn>
     
      <MDBBtn className="w-100 custom_border mb-3"style={{backgroundColor:' rgb(96,150,180)'}}>Alarm</MDBBtn>
      
      <MDBBtn
            className="w-100 custom_border mb-3"
            style={{ backgroundColor: ' rgb(96,150,180)' }}
            onClick={navigateToPage} // Add onClick handler to call navigateToFakeShutdown function
          >
            Fake Shutdown
          </MDBBtn>
    
    </MDBCol >
    <MDBCol className="col-10 col-lg-6 d-flex flex-column align-items-center">
    <h3>Map</h3>
    <div className='flex-column d-flex custom_border align-items-center' style={{    height: '70vh', width: '100%',marginRight: '20px'  }}>
        
        <div  style={{background:'rgb(96,150,180)'}}>
    <MyComponent/>
      </div>
    </div>
    </MDBCol>
    <MDBCol className="col-10 col-lg-3 d-flex flex-column align-items-center">
    <h3>Location</h3>
    <div className=' custom_border' style={{ backgroundColor: 'rgb(96,150,180)', color: 'white', display: 'flex', flexDirection: 'column', padding: '20px' }}>
    <p><b>Name:</b> Bushra Farooq</p>
    <p><b>Email:</b> 2020cs55@student.uet.edu.pk</p>
    <p><b>Latitude:</b> 10.99835602</p>
    <p><b>Longitude:</b> 77.01502627</p>
    <p><b>Address:</b> 123, ABC Street, XYZ City, 12345</p>
    <p>Time: 12:00 PM</p>
</div>

    </MDBCol>
    </MDBRow>
    </div>
    
  );
}
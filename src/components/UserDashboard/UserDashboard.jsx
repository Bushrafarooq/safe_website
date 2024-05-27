import { MDBBtn, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ImageGallery from './ImageGallery';
import MyComponent from './MyComponent';
import ImageDisplay from '../Dashboard/ImageDisplay';
import pic from './images/pic.png';
import './style.css';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function App() {
  const navigate = useNavigate();

  const navigateToPage = () => {
    navigate('/fakeshutdown'); // Navigates to '/page'
  };

  return (
    <div className="container mt-5">
      <MDBRow>
        <MDBCol className="col-12 col-lg-4 mb-4 mb-lg-0">
          <div className="card p-4 shadow bg-light">
            <h3 className="mb-4">Commands</h3>
            <MDBBtn className="w-100 mb-3" color='secondary'>
              Track
            </MDBBtn>
            <MDBBtn className="w-100 mb-3" color='secondary'>
              Intruder
            </MDBBtn>
            <MDBBtn className="w-100 mb-3" color='secondary'>
              Alarm
            </MDBBtn>
            <MDBBtn
              className="w-100 mb-3" color='secondary'
              onClick={navigateToPage}
            >
              Fake Shutdown
            </MDBBtn>
          </div>
        </MDBCol>

        <MDBCol className="col-12 col-lg-4 mb-4 mb-lg-0">
          <div className="card p-4 shadow bg-light">
            <h3 className="mb-4">Map</h3>
            <div className="w-100 h-100" color='secondary'>
              <MyComponent />
            </div>
          </div>
        </MDBCol>

        <MDBCol sm="15" md="6">
  <img
    src={pic}
    alt="loading..."
    className="img-fluid rounded"
  />
</MDBCol>

      </MDBRow>

      <MDBRow className="mt-5">
        <MDBCol>
          <ImageDisplay />
        </MDBCol>
      </MDBRow>
    </div>
  );
}
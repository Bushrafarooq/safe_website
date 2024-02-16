import React from 'react'
import 'react-chat-elements/dist/main.css'
import SideNav from './components/Dashboard/SideNav';

import { MDBCol, MDBRow } from 'mdb-react-ui-kit';

import UserDashboard from './components/UserDashboard/UserDashboard';


function UDashboard() {
  return (
    <div style={{ backgroundColor:'rgb(238, 233, 218)', margin:'5px'}}>
        <SideNav/>
        <br></br>
        <h1 className='text-center' style={{color:'rgb(96,150,180)', margin:'1rem' , justifyContent:'center'}}>Dashboard</h1>
        <hr></hr> 

        <MDBRow className='mb3'>
      
      <MDBCol md='10' offsetMd='1'>
            <UserDashboard/>
          </MDBCol>
        </MDBRow>
    </div>
  )
}

export default UDashboard
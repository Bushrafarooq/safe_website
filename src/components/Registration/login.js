// // import React , {useState} from 'react';
// // import './login.css';
// // import { Link } from 'react-router-dom';
// // import Loginimg from './images/login-bg.png';
// // import Navbar from '../Home/Navbar';
// // import Footer from '../Home/Footer';
// // import http from '../../http';
// // import {
// //   MDBRow,
// //   MDBCol,
// //   MDBInput,
// //   MDBInputGroup,
// //   MDBCheckbox,
// //   MDBBtn,
// //   MDBIcon,
// //   MDBTabs,
// //   MDBTabsItem,
// //   MDBTabsLink,
// //   MDBTabsContent,
// //   MDBTypography,
// //   MDBTabsPane
// // } from 'mdb-react-ui-kit';
// // import { useNavigate } from 'react-router-dom';

// // export default function Login() {
// //     const [loginRegisterActive, setloginRegisterActive] = useState('login');
// //     const navigate = useNavigate();
// //     const handleLoginRegisterClick = (value) => {
// //         if (value === loginRegisterActive) {
// //           return;
// //         }
    
// //         setloginRegisterActive(value);
// //       };

// //       //place code here of admin login
// //       const [login, setLogin] = useState({
// //        email:'',
// //        password:''
// //       });

// //       const [register, setRegister] = useState({
// //         email: '',
// //         password: '',
// //         first_name: '',
// //         last_name: '',
// //         username: '' 
// //       });
// //     const onLogin = (e) => {
// //       setLogin({...login, [e.target.name]: e.target.value});
// //     };
// //       const onChange = (e) => {
// //         setRegister({ ...register, [e.target.name]: e.target.value });
// //       };
// // const loginUser = (e) =>{
// //   e.preventDefault();
// //   console.log(login);
// //   http.post('/dashboard',login).then((res)=>{
// //     if(res.data.length !== 0){
// //       console.log(res.data[0].User_id)
// //       let id = res.data[0].User_id;
// //       http.get(`/personalInfo/${id}`).then((res1) => {
// //         console.log(res1.data[0]);
// //         if(res1.data[0] === undefined)
// //         {
          
// //           let url = `/information/${id}/${id}`;
// //           console.log(url);
// //           navigate(url,{replace:true});
// //         }
// //         else {
// //           let url = `/dashboard/${id}}`;
// //           console.log(url);
// //           navigate(url,{replace:true});
// //         }
    
// //     })
// //   }
// //     else{
// //       alert("Invalid")
// //     }
// //   })
// // }
// //       const registerUser = (e) =>{
// //         e.preventDefault();
// //         console.log(register);
// //         http.post('/users',register).then((res)=>{
// //           handleLoginRegisterClick('login');
// //           alert(res.data);
// //         })
// //       }
     
    
// //   return (
// //    <div className="login-container" style={{ backgroundColor: 'rgb(238, 233, 218)'}}>
// //     <Navbar/>
// // <br></br>
// // <br></br>
// // <br></br>
// // <br></br>

// //     <section className='ssf-section'>
// //     <MDBRow>
// //       <MDBCol className='col-lg-2'></MDBCol>
// //     <MDBCol className='col-12 col-lg-4'>

// //     <div className='pills' style={{ width: '23rem' }}>


// //       <MDBTabsContent>
// //         <MDBTabsPane show={loginRegisterActive === 'login'}>
// //           <form  onSubmit={loginUser}>
// //             <div className='text-center mb-3'>
// //               <h2>Sign in</h2>

  
// //             </div>
// // <br></br>
// // <br></br>


// //             <MDBInput 
// //             className='mb-4' 
// //             value={login.email}
// //             name='email'
// //             onChange={onLogin}
// //             id='validationCustom01'
// //             required
// //             type='email' 
// //            // id='typeEmail' 
// //             label='Email' />
      

// //             <MDBInput
// //             // wrapperClass='col-auto' 
// //             className='mb-4' 
// //             value={login.password}
// //             name='password'
// //             onChange={onLogin}
// //             id='validationCustom02'
// //             required
// //             type='password' 
// //             //id='typePassword' 
// //             label='Password' />
// //             {/* <div className='col-auto'>
// //           <span id='textExample2' className='form-text'>
// //             Must be 8-20 characters long.
// //           </span>
// //         </div> */}



// //             <MDBRow className='mb-4'>
// //               <MDBCol className='d-flex justify-content-center'>
// //                 <MDBCheckbox id='form7Example3' label='Remember me'/>
// //               </MDBCol>
// //               <MDBCol>
 
// //               </MDBCol>
// //             </MDBRow>
// //             <Link to='/dashboard/:uid' role='button' >
// //             <MDBBtn  type='submit'  className='mb-4' style={{backgroundColor:' rgb(96,150,180)'}} block>
// //               Sign in
// //             </MDBBtn>
// //             </Link>

          
// //           </form>
// //         </MDBTabsPane>
// //         <MDBTabsPane show={loginRegisterActive === 'register'}>
// //           <form onSubmit={registerUser}>
// //             <div className='text-center mb-3'>
// //               <p>Sign up with:</p>

// //               <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#3b5998' }}>
// //         <MDBIcon fab icon='facebook-f' size='lg' />
// //       </MDBBtn>

// //       <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#55acee' }}>
// //         <MDBIcon fab icon='twitter' size='lg' />
// //       </MDBBtn>

// //       <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#dd4b39' }}>
// //         <MDBIcon fab icon='google' size='lg' />
// //       </MDBBtn>

// //       <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#ac2bac' }}>
// //         <MDBIcon fab icon='instagram' size='lg' />
// //       </MDBBtn>
// //             </div>

// //             <p className='text-center'>or:</p>

// //             {/* <MDBInput className='mb-4' id='form8Example1' label='Name' /> */}
// //             <MDBInput
// //             className='mb-4'
// //             value={register.first_name}
// //             name='first_name'
// //             onChange={onChange}
// //             id='validationCustom01'
// //             required
// //             label='First Name'
// //         />
// //         <MDBInput
// //             className='mb-4'
// //             value={register.last_name}
// //             name='last_name'
// //             onChange={onChange}
// //             id='validationCustom02'
// //             required
// //             label='Last Name'
// //         />
// //             {/* <MDBInput className='mb-4' id='form8Example2' label='Username' /> */}


// //             <MDBInput
// //             className='mb-4'
// //             value={register.username}
// //             name='username'
// //             onChange={onChange}
// //             id='validationCustom03'
// //             required
// //             label='Username'
// //         />



// //             <MDBInput 
// //             className='mb-4' 
// //             value={register.email}
// //             name='email'
// //             onChange={onChange}
// //             id='validationCustom04'
// //             required
// //             type='email' 
// //            // id='typeEmail' 
// //             label='Email' />
      

// //             <MDBInput
// //             wrapperClass='col-auto' 
// //             className='mb-4' 
// //             value={register.password}
// //             name='password'
// //             onChange={onChange}
// //             id='validationCustom05'
// //             required
// //             type='password' 
// //             //id='typePassword' 
// //             label='Password' />
// //             <div className='col-auto'>
// //           <span id='textExample2' className='form-text'>
// //             Must be 8-20 characters long.
// //           </span>
// //         </div>
// //         <br></br>
// //         <MDBCheckbox wrapperClass='d-flex justify-content-center mb-4'
// //                label='Agree to terms and conditions' id='invalidCheck2' required />


// //             <MDBBtn type='submit' className='mb-4' block>
// //               Sign Up
// //             </MDBBtn>
// //           </form>
// //         </MDBTabsPane>
// //         <MDBTabsPane show={loginRegisterActive === 'forgot'}>
// //           <form>
// //             <div className='text-center mb-3' style={{ color: ' rgb(44, 141, 148)' }} >
// //             <MDBTypography variant='h4'>RESET PASSWORD</MDBTypography>
// //               </div>
              
// //              {/* <div className='text-center mb-3' style={{ color: ' rgb(44, 141, 148)' }} > */}
// //              <MDBInputGroup className='mb-3'>
// //              <MDBInput 
// //             className='em' 
// //             value={register.email}
// //             name='femail'
// //             onChange={onChange}
// //             id='validationCustom01'
// //             required
// //             type='email' 
// //            // id='typeEmail' 
// //             label='Email' />
// //         <MDBBtn outline>Submit</MDBBtn>
// //       </MDBInputGroup>

// //       <MDBInputGroup className='mb-3'>
// //       <MDBInput
            
// //       value={register.first_name}
// //             name='fnum'
// //             onChange={onChange}
// //             id='validationCustom03'
// //             required
// //             label='Verification Code'
// //             />
// //         <MDBBtn outline>Submit</MDBBtn>
// //       </MDBInputGroup>

// //       <MDBInput
// //             wrapperClass='col-auto' 
// //             className='mb-4' 
// //             value={register.username}
// //             name='fpass'
// //             onChange={onChange}
// //             id='validationCustom03'
// //             required
// //             type='password' 
// //             //id='typePassword' 
// //             label='Password' />
// //             <div className='col-auto'>
// //           <span id='textExample2' className='form-text'>
// //             Must be 8-20 characters long.
// //           </span>
// //         </div>
// //         <br></br>
        
// //          <MDBCheckbox wrapperClass='d-flex justify-content-center mb-4'
// //                label='Agree to terms and conditions' id='invalidCheck2' required />


// //             <MDBBtn type='submit' className='mb-4' block>
// //               Reset password
// //             </MDBBtn>


// //               </form>
// //         </MDBTabsPane>
       
// //       </MDBTabsContent>
      
// //     </div>
// //     </MDBCol>
// //     <MDBCol className='col-12 col-lg-6'>
// //     <div className='bg-image hover-zoom' >
// //     <img className='col-12' src={Loginimg} alt='login' style={{height:'400px',width:'500px'}}/>
// //     </div>
// //     </MDBCol>
// //     <MDBCol className=' col-12 col-lg-4'></MDBCol>
// //     </MDBRow>
// //     </section>
// //     <hr />
// //     <br /><br />
// //     <Footer/>
// //     </div>
// //   );
// // }










    



// import React, { useState } from 'react';
// import './login.css';
// import { Link } from 'react-router-dom';
// import Loginimg from './images/login-bg.png';
// import Navbar from '../Home/Navbar';
// import Footer from '../Home/Footer';
// import http from '../../http';
// import {
//   MDBRow,
//   MDBCol,
//   MDBInput,
//   MDBCheckbox,
//   MDBBtn,
// } from 'mdb-react-ui-kit';
// import { useNavigate } from 'react-router-dom';

// export default function Login() {
//   const navigate = useNavigate();
//   const [login, setLogin] = useState({
//     email: '',
//     password: '',
//   });

//   //login credebtials are matching hereeeeeeeeeeeee
//   const loginUser = (e) => {
//     e.preventDefault();
//     // Check if login credentials match hardcoded values
//     if (login.email === 'admin@gmail.com' && login.password === 'admin123') {
//       // Navigate to Dashboard page if credentials are correct
//       navigate('/dashboard/:uid');
//     } else {
//       alert('Invalid credentials'); // Show alert for incorrect credentials
//     }
//   };

//   //i am now fetching the user data
//   const fetchUsers = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/data');
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       const data = await response.json();
//       console.log('Fetched data:', data);
//       console.log('Heyyyyyyyyyyyy i have done fetching datat');
//       // Destructure the data to extract each entity
//       const { full_name, phone_number, address, email, password } = data;
  
//       // Store each entity in separate variables
//       const fullName = full_name;
//       const phoneNumber = phone_number;
//       const userAddress = address;
//       const userEmail = email;
//       const userPassword = password;
  
//       // Do whatever you need with the variables
//       console.log('Full Name:', fullName);
//       console.log('Phone Number:', phoneNumber);
//       console.log('Address:', userAddress);
//       console.log('Email:', userEmail);
//       console.log('Password:', userPassword);
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   };
  


//   const onChange = (e) => {
//     setLogin({ ...login, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="login-container" style={{ backgroundColor: 'rgb(238, 233, 218)' }}>
//       <Navbar />
//       <br />
//       <br />
//       <br />
//       <br />

//       <section className='ssf-section'>
//         <MDBRow>
//           <MDBCol className='col-lg-2'></MDBCol>
//           <MDBCol className='col-12 col-lg-4'>
//             <div className='pills' style={{ width: '23rem' }}>
//               <form onSubmit={loginUser}>
//                 <div className='text-center mb-3'>
//                   <h2>Sign in</h2>
//                 </div>
//                 <br />
//                 <MDBInput
//                   className='mb-4'
//                   value={login.email}
//                   name='email'
//                   onChange={onChange}
//                   id='validationCustom01'
//                   required
//                   type='email'
//                   label='Email'
//                 />

//                 <MDBInput
//                   className='mb-4'
//                   value={login.password}
//                   name='password'
//                   onChange={onChange}
//                   id='validationCustom02'
//                   required
//                   type='password'
//                   label='Password'
//                 />

//                 <MDBRow className='mb-4'>
//                   <MDBCol className='d-flex justify-content-center'>
//                     <MDBCheckbox id='form7Example3' label='Remember me' />
//                   </MDBCol>
//                   <MDBCol></MDBCol>
//                 </MDBRow>
//                 <MDBBtn type='submit' className='mb-4' style={{ backgroundColor: ' rgb(96,150,180)' }} block>
//                   Sign in
//                 </MDBBtn>
//               </form>
//             </div>
//           </MDBCol>
//           <MDBCol className='col-12 col-lg-6'>
//             <div className='bg-image hover-zoom' >
//               <img className='col-12' src={Loginimg} alt='login' style={{ height: '400px', width: '500px' }} />
//             </div>
//           </MDBCol>
//           <MDBCol className=' col-12 col-lg-4'></MDBCol>
//         </MDBRow>
//       </section>
//       <hr />
//       <br /><br />
//       <Footer />
//     </div>
//   );
// }



import {
  MDBBtn,
  MDBCheckbox,
  MDBCol,
  MDBInput,
  MDBRow,
} from 'mdb-react-ui-kit';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import http from '../../http';
import Footer from '../Home/Footer';
import Navbar from '../Home/Navbar';
import Loginimg from './images/login-bg.png';
import './login.css';

export default function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      let redirectToDashboard = false;

      // Check if the email and password match the admin credentials
      if (login.email === 'admin@gmail.com' && login.password === 'iamadmin123') {
        redirectToDashboard = true;
      } else {
        // If not admin credentials, make the API call to verify credentials
        const response = await http.post('http://localhost:5000/login', login);
        const data = response.data;
        if (data.message === 'Login successful') {
          redirectToDashboard = true;
        } else {
          alert('Invalid credentials');
        }
      }

      if (redirectToDashboard) {
        if (login.email === 'admin@gmail.com') {
          navigate('/dashboard'); // Navigates to the admin dashboard
        } else {
          navigate('/udashboard'); // Navigates to the user dashboard
        }
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Error during login');
    }
  };

  const onChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-container" style={{ backgroundColor: 'rgb(238, 233, 218)' }}>
      <Navbar />
      <br />
      <br />
      <br />
      <br />

      <section className='ssf-section'>
        <MDBRow>
          <MDBCol className='col-lg-2'></MDBCol>
          <MDBCol className='col-12 col-lg-4'>
            <div className='pills' style={{ width: '23rem' }}>
              <form onSubmit={loginUser}>
                <div className='text-center mb-3'>
                  <h2>Sign in</h2>
                </div>
                <br />
                <MDBInput
                  className='mb-4'
                  value={login.email}
                  name='email'
                  onChange={onChange}
                  id='validationCustom01'
                  required
                  type='email'
                  label='Email'
                />

                <MDBInput
                  className='mb-4'
                  value={login.password}
                  name='password'
                  onChange={onChange}
                  id='validationCustom02'
                  required
                  type='password'
                  label='Password'
                />

                <MDBRow className='mb-4'>
                  <MDBCol className='d-flex justify-content-center'>
                    <MDBCheckbox id='form7Example3' label='Remember me' />
                  </MDBCol>
                  <MDBCol></MDBCol>
                </MDBRow>
                <MDBBtn type='submit' className='mb-4' style={{ backgroundColor: ' rgb(96,150,180)' }} block>
                  Sign in
                </MDBBtn>
              </form>
            </div>
          </MDBCol>
          <MDBCol className='col-12 col-lg-6'>
            <div className='bg-image hover-zoom' >
              <img className='col-12' src={Loginimg} alt='login' style={{ height: '400px', width: '500px' }} />
            </div>
          </MDBCol>
          <MDBCol className=' col-12 col-lg-4'></MDBCol>
        </MDBRow>
      </section>
      <hr />
      <br /><br />
      <Footer />
    </div>
  );
}


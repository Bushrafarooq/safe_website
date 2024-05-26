// import React, { useState, useEffect } from 'react';
// import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

// function App() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     console.log('Component mounted');
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/data');
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       const data = await response.json();
//       console.log('Fetched data:', data);
//       setUsers(data);
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   };
  

//   return (
//     <div className="table-responsive">
//       <MDBTable align='middle' className='mb-8 lg-8'>
//         <MDBTableHead>
          
//         </MDBTableHead>
//         <MDBTableBody>
//           {users.map((user) => (
//             <tr key={user.user_id}>
//               <td>
//                 <div className='d-flex align-items-center'>
//                   <img
//                     src={user.avatar}
//                     alt=''
//                     style={{ width: '45px', height: '45px' }}
//                     className='rounded-circle'
//                   />
//                   <div className='ms-3'>
//                     <p className='fw-bold mb-1'>{user.full_name}</p>
//                     <p className='text-muted mb-0'>{user.email}</p>
//                   </div>
//                 </div>
//               </td>
//               <td>
//                 <p className='fw-normal mb-1'>{user.address}</p>
//                 <p className='text-muted mb-0'>{user.phone_number}</p>
//               </td>
//               <td>{user.package}</td>
//               <td>
//                 <MDBBtn color='danger' rounded size='sm'>
//                   Delete
//                 </MDBBtn>
//               </td>
//             </tr>
//           ))}
//         </MDBTableBody>
//       </MDBTable>
//     </div>
//   );
// }

// export default App;




import React, { useState, useEffect } from 'react';
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log('Component mounted');
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:5000/data');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Fetched data:', data);
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      const response = await fetch(`http://localhost:5000/data/${userId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      console.log('User deleted successfully');
      setUsers(users.filter(user => user.user_id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="table-responsive">
      <MDBTable align='middle' className='mb-8 lg-8'>
        <MDBTableHead>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Package</th>
            <th>Actions</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {users.map((user) => (
            <tr key={user.user_id}>
              <td>
                <div className='d-flex align-items-center'>
                  <img
                    src={user.avatar}
                    alt=''
                    style={{ width: '45px', height: '45px' }}
                    className='rounded-circle'
                  />
                  <div className='ms-3'>
                    <p className='fw-bold mb-1'>{user.full_name}</p>
                    <p className='text-muted mb-0'>{user.email}</p>
                  </div>
                </div>
              </td>
              <td>
                <p className='fw-normal mb-1'>{user.address}</p>
                <p className='text-muted mb-0'>{user.phone_number}</p>
              </td>
              <td>{user.package}</td>
              <td>
                <MDBBtn color='danger' rounded size='sm' onClick={() => deleteUser(user.user_id)}>
                  Delete
                </MDBBtn>
              </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
}

export default App;

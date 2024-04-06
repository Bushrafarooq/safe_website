// import React, { useEffect, useState } from "react";
// import http from "./http";

// export default function Users() {
//   const [users, setUsers] = useState([]);


//   useEffect(() => {
//     fetchAllUsers();
//   }, []);

//   const fetchAllUsers = () => {
//     http.get("/users").then((res) => {
//       setUsers(res.data);
//       console.log(res);
//     });
//   };

//   return (
//     <ul>
//       {users.map((item) => (
//         <li key={item.User_id}>
//           {item.User_id} : <b>{item.First_Name} {item.Last_Name}</b> : {item.Email} : {item.Password}
//         </li>
//       ))}
//     </ul>
//   );
// }


import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = () => {
    axios.get("http://localhost:5000/data")
      .then((res) => {
        setUsers(res.data);
        console.log(res.data); // Log the response data to the console
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        //setError(error.message); // Set error state if there's an error
      });
  };

  return (
    <ul>
      {users.map((item) => (
        <li key={item.User_id}>
          {item.User_id} : <b>{item.full_name} {item.email}</b> : {item.phone_number}
        </li>
      ))}
    </ul>
  );
}

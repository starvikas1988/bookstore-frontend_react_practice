import React ,{useState, useEffect} from "react";
import axios from "axios";

export function UserComponent(){
    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
        axios.get('https://freetestapi.com/api/v1/users')
        .then(response=>{
            console.log(response.data);
            setUsers(response.data);
            setLoading(false);
        })
        .catch(error=>{
            setError(error);
        })
    },[]);

    if(loading){
        return <p>Loading ....</p>
    }

    if(error){
        return <p> Error: {error.message}</p>
    }
    return(
        <>
        <div className="container mt-5">
        <h1 className="mb-4">User List</h1>
            
        <table className="table table-striped table-bordered">
            <thead className="thread-dark">
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Vikas Pandey</td>
                <td>35</td>
                <td>Male</td>
              </tr>
              <tr>
                <td>Vicky Pandey</td>
                <td>35</td>
                <td>Male</td>
              </tr>
            </tbody>
        </table>

        </div>
        
         <div className="container mt-5">
      <h1 className="mb-4">User List</h1>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Address</th>
            <th>Hobbies</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td>{user.address.street}</td>
              <td>
                {/* Check if hobbies exist and map through them */}
                {user.hobbies && user.hobbies.length > 0 ? (
                  <ul>
                    {user.hobbies.map((hobby, index) => (
                      <li key={index}>{hobby}</li>
                    ))}
                  </ul>
                ) : (
                  "No hobbies listed"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </>
       
    );
}
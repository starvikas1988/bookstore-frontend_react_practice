import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditUser() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/users/${id}`)
      .then(response => {
        setName(response.data.name);
        setEmail(response.data.email);
      })
      .catch(error => {
        console.error('There was an error fetching the user!', error);
      });
  }, [id]);

 

  function handleSubmit(event) {
    event.preventDefault();
    axios.put(`http://localhost:5000/users/${id}`, { name, email })
      .then(() => {
        alert('User updated successfully!');
        navigate('/');
      })
      .catch(error => {
        console.error('There was an error updating the user!', error);
      });
  }

  return (
    <div>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  );
}

export default EditUser;

import React, { useState } from 'react';
import axios from 'axios';

function CreateUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:5000/users', { name, email })
      .then(response => {
        alert('User created successfully!');
        setName('');
        setEmail('');
      })
      .catch(error => {
        console.error('There was an error creating the user!', error);
      });
  }

  return (
    <div>
      <h2>Create User</h2>
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
        <button type="submit" className="btn btn-primary">Create</button>
      </form>
    </div>
  );
}

export default CreateUser;

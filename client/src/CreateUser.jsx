import React, { useState } from "react";

import axios from "axios";

function CreateUser() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();


  const Submit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/createUser", {name, email, age})
    .then(result => console.log(result))
    .catch(err => console.log(err))}
    
  return (
    <div className="d-flex vh-100  bg-primary justify-content-center center">
      <div className="w-50 h-50 bg-white rounded p-3">
        <form onSubmit={Submit}>
          <h2>Add User</h2>
          <div className="mb-2" onChange={(e) => setName(e.target.value)}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
            />
          </div>
          <div className="mb-2" onChange={(e) => setEmail(e.target.value)}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
            />
          </div>
          <div className="mb-2" onChange={(e) => setAge(e.target.value)} >
            <label htmlFor="age">Age</label>
            <input
              type="text"
              placeholder="Enter Age"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
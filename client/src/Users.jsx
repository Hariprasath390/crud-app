import React, { useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([
    { Name: "yousaf", Email: "ysf@gmail.com", Age: 20 },
  ]);

  const handleEdit = (index) => {
    // Implement your edit logic here
    // For example, you can open a modal for editing
    console.log("Edit user at index:", index);
  };

  const handleDelete = (index) => {
    // Implement your delete logic here
    // For example, you can remove the user from the state
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  return (
    <div className="d-flex vh-100 vw-100  bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <Link to="/create" className="btn btn-success">
          Add +
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.Name}</td>
                <td>{user.Email}</td>
                <td>{user.Age}</td>
                <td>
                  <Link to="/update" className="btn btn-success">
                    Update
                  </Link>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;

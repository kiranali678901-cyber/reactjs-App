import React, { useState } from "react";
import UserList from "./userList";
import Form from "./Form";

export default function ViewUser(props) {
  const list = props.user;
  const [open, setOpen] = useState(false);
  const [singleUser, setSingleUser] = useState({})

  const deleteUser = async (id) => {
    try {
      const kiran = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        { method: "DELETE" }
      );
      if (kiran.ok) {
        props.fetchUser();
      }
    } catch (error) {
      console.error("not deleted", error);
    }
  };
  const updateUser = (id) => {
     const userToEdit = list.find((u) => u.id === id);
     setSingleUser(userToEdit)
     console.log(userToEdit, 'update')
    setOpen(true);
  };
  return (
    <div>
      <button>
        <i className="fa fa-user-plus"></i>New User
      </button>
      <table>
        <thead>
          <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>USERNAME</th>
          <th>EMAIL</th>
          <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {list.map((val, index) => (
            <tr key = {val.id}>
              <td>{val.id}</td>
              <td>{val.name}</td>
              <td>{val.email}</td>
              <td>@{val.username}</td>
              <td className="button-container">
              
                <button onClick={() => deleteUser(val.id)}>
                  <i className="fa fa-trash"></i>{" "}
                </button>
                <button onClick={() => updateUser(val.id)}>
                 
                  <i className="fa fa-bus"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {open && (
        <div className="modal-overlay">
          <div className="modal-box">
            <Form  singleUser = {singleUser} setOpen ={setOpen}/>
            <button className="close-btn" onClick={() => setOpen(false)}>
              Close Modal
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

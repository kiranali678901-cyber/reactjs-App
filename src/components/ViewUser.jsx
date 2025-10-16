import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUserById } from "../store/userSlice";
import Form from "./Form";
import AddUser from "./AddUser";

export default function ViewUser({ user }) {
  const [open, setOpen] = useState(false);
  const [singleUser, setSingleUser] = useState({});
  const [nform, setnForm] = useState(false);

  const dispatch = useDispatch();

  const deleteUser = (id) => {
    dispatch(deleteUserById(id));
  };

  const updateUser = (id) => {
    const userToEdit = user.find((u) => u.id === id);
    setSingleUser(userToEdit);
    setOpen(true);
  };

  return (
    <div>
      <button onClick={() => setnForm(true)}>
        <i className="fa fa-user-plus"></i> New User
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
          {user.map((val) => (
            <tr key={val.id}>
              <td>{val.id}</td>
              <td>{val.name}</td>
              <td>{val.username}</td>
              <td>{val.email}</td>
              <td className="button-container">
                <button onClick={() => deleteUser(val.id)}>
                  <i className="fa fa-trash"></i>
                </button>
                <button onClick={() => updateUser(val.id)}>
                  <i className="fa fa-edit"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {open && (
        <div className="modal-overlay">
          <div className="modal-box">
            <Form singleUser={singleUser} setOpen={setOpen} />
            <button className="close-btn" onClick={() => setOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      {nform && (
        <div className="modal-overlay">
          <div className="modal-box">
            <AddUser setnForm={setnForm} />
            <button className="close-btn" onClick={() => setnForm(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

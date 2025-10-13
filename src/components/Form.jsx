import React, { useState } from "react";

const Form = (props) => {
  const user = props.singleUser;

  const [form, setForm] = useState({
    name: user.name || "",
    email: user.email || "",
    username: user.username || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const formSubmit = () => {
    console.log(form, "form");
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        justifyContent: "flex-start",
        width: "250px",
      }}
      onSubmit={formSubmit}
    >
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        value={form.name}
        onChange={handleChange}
      />

      <label htmlFor="email">Your Email</label>
      <input
        id="email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
      />

      <label htmlFor="username">Your Username</label>
      <input
        id="username"
        name="username"
        type="text"
        value={form.username}
        onChange={handleChange}
      />

      <br />
      
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;

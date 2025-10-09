import React from "react";

const Form = (props) => {
  const user = props.singleUser;

  const handleChange=(e)=>{
    console.log(e.target.value)
    e.defaultPrevented
    console.log(e.value)
  }
  return (
    <form>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        value={user.name}
        onChange={(e) => handleChange(e)}
      />
      <br />
      <label htmlFor="email">Name</label>
      <input
        id="email"
        type="email"
        value={user.email}
        onChange={(e) => console.log(e)}
      />
      <br />
       <label htmlFor="username">Name</label>
      <input
        id="username"
        type="username"
        value={user.email}
        onChange={(e) => console.log(e)}
      />
      <br />
    </form>
  );
};

export default Form;

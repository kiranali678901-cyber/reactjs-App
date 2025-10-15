import { useState } from "react";
import { toast } from "react-toastify";

export default function AddUser(props) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    id: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const addUser = async(e) => {
e.preventDefault()
        const method = "POST";
        const url = `https://jsonplaceholder.typicode.com/users`;
        if (form.name.length < 4 || form.name.length > 20) {
          toast.warn("please enter number min 4 char and max 20");
          return;
        }
    
        try {
          const response = await fetch(url, {
            method,
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
          });
    
          if (response.ok) {
            // const responseData = await response.json();
            toast.success("your request is updated");
            props.setnForm(false)
            // You might want to clear the form or fetch the updated user list here
            if (props.fetchUser) {
              props.fetchUser();
            }
          } else {
            toast.error("Server responded with an error:", response.status);
          }
        } catch (error) {
          toast.error("Network or other error:", error);
        }
    
  };
  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          justifyContent: "flex-start",
          width: "250px",
        }}
        onSubmit={addUser}
      >
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" onChange={handleChange} />

        <label htmlFor="email">Your Email</label>
        <input id="email" name="email" type="email" onChange={handleChange} />

        <label htmlFor="username">Your Username</label>
        <input
          id="username"
          name="username"
          type="text"
          onChange={handleChange}
        />

        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

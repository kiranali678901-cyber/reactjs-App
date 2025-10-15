import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Form = ({ singleUser, setOpen, fetchUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      name: singleUser.name || "",
      email: singleUser.email || "",
      username: singleUser.username || "",
      id: singleUser.id,
    },
  });

  // 🧩 onSubmit handler
  const onSubmit = async (form) => {
    const url = `https://jsonplaceholder.typicode.com/users/${form.id}`;

    try {
      const response = await fetch(url, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        const data = await response.json();
        toast.success("User updated successfully!");

        // reset form with new values
        reset(data);

        // close modal and refresh user list
        if (setOpen) setOpen(false);
        if (fetchUser) fetchUser();
      } else {
        toast.error("Failed to update user");
      }
    } catch (error) {
      toast.error("Network error: " + error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        justifyContent: "flex-start",
        width: "250px",
      }}
    >
      {/* Name */}
      <label htmlFor="name">Name</label>
      <input
        id="name"
        {...register("name", {
          required: "Name is required",
          minLength: {
            value: 4,
            message: "Minimum 4 characters required",
          },
          maxLength: {
            value: 20,
            message: "Maximum 20 characters allowed",
          },
        })}
      />
      {errors.name && <small style={{ color: "red" }}>{errors.name.message}</small>}

      {/* Email */}
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid email format",
          },
        })}
      />
      {errors.email && <small style={{ color: "red" }}>{errors.email.message}</small>}

      {/* Username */}
      <label htmlFor="username">Username</label>
      <input
        id="username"
        {...register("username", {
          required: "Username is required",
        })}
      />
      {errors.username && (
        <small style={{ color: "red" }}>{errors.username.message}</small>
      )}

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Saving..." : "Submit"}
      </button>
    </form>
  );
};

export default Form;

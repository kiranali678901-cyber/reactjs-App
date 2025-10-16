import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateUserById } from "../store/userSlice";
import { toast } from "react-toastify";

const Form = ({ singleUser, setOpen }) => {
  const dispatch = useDispatch();

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

  const onSubmit = async (form) => {
    try {
      await dispatch(updateUserById(form)).unwrap();
      toast.success("✅ User updated successfully!");
      reset(form);
      setOpen(false);
    } catch (error) {
      toast.error("❌ Update failed: " + error.message);
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
      <label htmlFor="name">Name</label>
      <input
        id="name"
        {...register("name", {
          required: "Name is required",
          minLength: { value: 4, message: "Min 4 characters" },
          maxLength: { value: 20, message: "Max 20 characters" },
        })}
      />
      {errors.name && <small style={{ color: "red" }}>{errors.name.message}</small>}

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        {...register("email", {
          required: "Email is required",
          
        })}
      />
      {errors.email && <small style={{ color: "red" }}>{errors.email.message}</small>}

      <label htmlFor="username">Username</label>
      <input
        id="username"
        {...register("username", { required: "Username is required" })}
      />
      {errors.username && (
        <small style={{ color: "red" }}>{errors.username.message}</small>
      )}

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Saving..." : "Update"}
      </button>
    </form>
  );
};

export default Form;

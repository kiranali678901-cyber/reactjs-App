import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 🔹 Fetch all users
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data.map((u) => ({
    id: u.id,
    name: u.name,
    email: u.email,
    username: u.username,
  }));
});

// 🔹 Delete a user
export const deleteUserById = createAsyncThunk("users/deleteUser", async (id) => {
  await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: "DELETE",
  });
  return id;
});

// 🔹 Update a user
export const updateUserById = createAsyncThunk(
  "users/updateUser",
  async (userData) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userData.id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      }
    );
    const data = await response.json();
    return data; // return the updated user object
  }
);

const userSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
    addUser: (state, action) => {
      state.list.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch users
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch users";
      })

      // Delete user
      .addCase(deleteUserById.fulfilled, (state, action) => {
        state.list = state.list.filter((u) => u.id !== action.payload);
      })

      // ✅ Update user
      .addCase(updateUserById.fulfilled, (state, action) => {
        const updatedUser = action.payload;
        const index = state.list.findIndex((u) => u.id === updatedUser.id);
        if (index !== -1) {
          state.list[index] = updatedUser;
        }
      });
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;

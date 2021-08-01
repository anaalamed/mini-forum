import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const login  = createAsyncThunk(
	'users/login',
	async (payload) => {
    console.log(payload);
		const response = await fetch('http://localhost:4000/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ 
        email: payload.email, 
        password: payload.password
      })
    });
      if (response.ok) {
        const user = await response.json();
        return { user };
      }
  });

export const logout  = createAsyncThunk(
    'users/logout',
    async (payload) => {
      console.log(payload);
      const response = await fetch('http://localhost:4000/api/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
        if (response.ok) {
			    return { message: "log out successfully" };
        }
  });

  // finish
  export const registration  = createAsyncThunk(
    'users/registration',
    async (payload) => {
      console.log(payload);
      const response = await fetch('http://localhost:4000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          firstName: payload.first_name,
          lastName: payload.last_name,
          email: payload.email, 
          password: payload.password
        })
      });
        if (response.ok) {
			    return { message: "registration successfully" };
        }
  });




const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    me: {},
    loggedIn: false
  },
  reducers: {},
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.me = action.payload.user.userFound;
      state.loggedIn = true;
      state.users.push(action.payload.user.userFound);
    },
    [logout.fulfilled]: (state, action) => {
      state.me = {};
      state.loggedIn = false;
    }
  }
});

export default usersSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';



const userSlice = createSlice({
  name: 'user',
  initialState:[],
  reducers: {
    addUser: (state, action) => {
      // Add a new user to the users array
      state.push(action.payload);
      // console.log(action.payload)
    },
    removeUser: (state, action) => {
      // Remove a user by its ID
      // state.pop(action.payload)
      // let userIndexNum = state.indexOf(action.payload)
      // state.splice(userIndexNum, 1)
      state.splice(action.payload, 1)
      // console.log(action.payload)
    },
    deleteUser: (state, action) => {
      // console.log("action payload")
      return [];
    },
  },
});

// console.log(userSlice)

export const { addUser, removeUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;

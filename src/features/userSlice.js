// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { fetchCount } from './counter/counterAPI';

// const initialState = {
//   value: 0,
//   status: 'idle',
// };

// // export const incrementAsync = createAsyncThunk(
// //   'counter/fetchCount',
// //   async (amount) => {
// //     const response = await fetchCount(amount);
// //     return response.data;
// //   }
// // );

// //! this is how we create a slice means piece of info to dispatch in global storage its like a stack
// export const userSlice = createSlice({
//   name: 'user',
//   initialState :{
//     user : null,
//   },
//   reducers: {
//     login : (state,action) =>{
//       state.user = action.payload;
//     },
//     logout : (state)=>{
//       state.user = null;
//     }
//     // we are dispatching the actions
//   },


// //!to bring that piece of info back from the global storage we meed a selector
// export const { login, logout } = userSlice.actions;

// export const selectUser = (state) => state.user.user;

// export default userSlice.reducer;

// ?`````````````````````````````````````````````````````````````````````````````````````````````````````

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  status: 'idle',
};



export const userSlice = createSlice({
  name: 'user',
  initialState :{
        user : null,
      },

  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null
    }
  },

});


export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
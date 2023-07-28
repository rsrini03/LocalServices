import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: null,
  Emails: null,
  colors: null,
  Token: null,
  name: null,
  userDetails: null,
  providerEmail: null,
  providerDetails:null,
  role:null,
  
  services: [
    {
      id: 1,
      name: "Haircut",
      price: 100,
    },
    {
      id: 2,
      name: "Shave",
      price: 50,
    },
    {
      id: 3,
      name: "Massage",
      price: 200,
    },
  ],
  cart: [],
};

const masterSlice = createSlice({
  name: "Master",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    addUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    addProviderDetails:(state,action) =>{
      state.providerDetails = action.payload;
    },
    addProviderEmail:(state,action) =>{
      state.providerEmail = action.payload;
    },
    deleteProviderDetails: (state, action) => {
      state.providerDetails = null;
    },
    deleteProviderEmail: (state, action) => {
      state.providerDetails = null;
    },
    addRole: (state, action) => {
      state.role = action.payload;
    },
    deleteRole: (state, action) => {
      state.role = null;
    },
    
    deleteUser: (state, action) => {
      state.users = [];
    },
    addEmails: (state, action) => {
      console.log(action);
      state.Emails = action.payload;
    },
    deleteUserEmails: (state, action) => {
      state.Emails = null;
    },
    addToken: (state, action) => {
      state.Token = action.payload;
    },
    deleteToken: (state, action) => {
      state.Token = null;
    },
    deleteUserDetails: (state, action) => {
      state.userDetails = null;
    },
    addService: (state, action) => {
      state.services.push(action.payload);
    },
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    addColor: (state, action) => {
      state.colors = action.payload;
    },
    deleteColor: (state, action) => {
      state.colors = null;
    },
    addName: (state, action) => {
      state.name = action.payload;
    },
    deleteName: (state, action) => {
      state.name = action.payload;
    },
    emptyService: (state, action) => {
      return {
        ...state,
        cart: null,
      };
    },
  },
});

export const {
  switchUser,
  addUser,
  deleteUser,
  addToCart,
  addService,
  emptyService,
  addUserDetails,
  deleteUserDetails,
  addEmails,
  deleteUserEmails,
  addToken,
  deleteToken,
  addColor,
  deleteColor,
  addName,
  deleteName,
  addProviderDetails,
  deleteProviderDetails,
  addProviderEmail,
  deleteProviderEmail,
  deleteRole,
  addRole

} = masterSlice.actions;

export default masterSlice.reducer;
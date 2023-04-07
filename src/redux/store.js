import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from '../redux/contactSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  //   middleware:
  // preloadedState:
  devtools: process.env.NODE_ENV === 'development', //devtools on only in dev.mode
});




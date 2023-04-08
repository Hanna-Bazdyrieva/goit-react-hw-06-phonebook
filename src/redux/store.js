import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from '../redux/contactSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // preloadedState:
  devtools: process.env.NODE_ENV === 'development', //devtools on only in dev.mode
});

export const persistor = persistStore(store);

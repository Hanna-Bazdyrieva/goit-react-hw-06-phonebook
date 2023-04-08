import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsList from 'utils/contactsList';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: contactsList,
    filter: '',
  },
  reducers: {
    add(state, { payload }) {
      return {
        ...state,
        items: [...state.items, payload],
      };
    },
    remove(state, { payload }) {
      return {
        ...state,
        items: state.items.filter(el => el.id !== payload),
      };
    },
    changeFilter: {
      reducer(state, { payload }) {
        return {
          ...state,
          filter: payload,
        };
      },
      prepare(value) {
        return {
          payload: value.toLowerCase(),
        };
      },
    },
  },
});

// persistedReducer

const persistContactsConfig = {
  key: 'contacts',
  storage,
  // whitelist: ["items"],
  blacklist: ['filter'],
};

const contactsReducer = persistReducer(
  persistContactsConfig,
  contactsSlice.reducer
);

// Selectors
export const getFilter = state => state.contacts.filter;
export const getContactsItems = state => state.contacts.items;

export const { add, remove, changeFilter } = contactsSlice.actions;

export default contactsReducer;

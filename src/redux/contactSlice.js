import { createSlice } from '@reduxjs/toolkit';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
     items: initialContacts,
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

export const { add, remove, changeFilter} = contactsSlice.actions;

export default contactsSlice.reducer;

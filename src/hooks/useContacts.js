import { useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';
import contactsList from 'utils/contactsList';


export const useContacts = () => {
  const [contacts, setContacts] = useLocalStorage(contactsList, 'contacts');

  const isNameExists = useCallback( newContact =>
    contacts.find(contact => contact.name.toLowerCase() === newContact.name.toLowerCase()),[contacts]);

  const isNumberExists = useCallback(newContact =>
    contacts.find(contact => contact.number === newContact.number), [contacts]);

  const addContact = useCallback(newContact => {

    let isName = isNameExists(newContact);
    let isNumber = isNumberExists(newContact);

    if (!isName & !isNumber) {
      setContacts(prevContacts => [...prevContacts, newContact]);
      return;
    }
    alert(
      `This  ${isName ? `contact ${isName.name}` : ''} ${
        isNumber ? `number ${isNumber.number}` : ''
      } already exists`
    );
  }, [isNameExists, isNumberExists, setContacts]);

  const deleteContact = useCallback( id => {
    setContacts(prevContacts => [
      ...prevContacts.filter(contact => contact.id !== id),
    ]);
  }, [setContacts]);

    return { contacts, addContact, deleteContact};
};
